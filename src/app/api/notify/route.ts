import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();

const sessionLabels: Record<string, string> = {
  discovery: 'Discovery Chemistry WhatsApp Call (Free, 10 min)',
  single: 'Single Session (R750 / $100, 90 min)',
  foundation: 'Foundation Session (R1785 / $275, 3 hours)',
  program: '12-Week Programme (R7560 / $1080)',
};

type NotificationType = 'booking' | 'contact';

interface BasePayload {
  type: NotificationType;
  name: string;
  email: string;
  message?: string;
  website?: string;
}

interface BookingPayload extends BasePayload {
  type: 'booking';
  phone?: string;
  session: string;
}

interface ContactPayload extends BasePayload {
  type: 'contact';
  subject: string;
}

type NotificationPayload = BookingPayload | ContactPayload;

function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.split(String.fromCharCode(0)).join('').trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return entities[character];
  });
}

function parsePayload(value: unknown): NotificationPayload | null {
  if (!value || typeof value !== 'object') return null;

  const input = value as Record<string, unknown>;
  const type = input.type === 'booking' || input.type === 'contact' ? input.type : null;
  const name = cleanText(input.name, 120);
  const email = cleanText(input.email, 254).toLowerCase();
  const message = cleanText(input.message, 4_000);
  const website = cleanText(input.website, 200);

  if (!type || name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  if (type === 'booking') {
    const session = cleanText(input.session, 40);
    if (!sessionLabels[session]) return null;
    return {
      type,
      name,
      email,
      message,
      website,
      phone: cleanText(input.phone, 40),
      session,
    };
  }

  const subject = cleanText(input.subject, 120);
  if (!subject || message.length < 10) return null;
  return { type, name, email, subject, message, website };
}

function isRateLimited(request: NextRequest): boolean {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientId =
    forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-nf-client-connection-ip');
  if (!clientId) return false;

  if (rateLimitStore.size > 500) rateLimitStore.clear();
  const now = Date.now();
  const recent = (rateLimitStore.get(clientId) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(clientId, recent);
    return true;
  }

  recent.push(now);
  rateLimitStore.set(clientId, recent);
  return false;
}

function ownerEmail(payload: NotificationPayload, siteUrl: string) {
  const isBooking = payload.type === 'booking';
  const subjectDetail = isBooking ? sessionLabels[payload.session] : payload.subject;
  const title = isBooking ? 'New session request' : 'New website enquiry';
  const lines = [
    title,
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    isBooking && payload.phone ? `Phone: ${payload.phone}` : null,
    `${isBooking ? 'Session' : 'Topic'}: ${subjectDetail}`,
    payload.message ? `Message:\n${payload.message}` : null,
    '',
    `Submitted from ${siteUrl}`,
  ].filter(Boolean);

  return {
    subject: `${title}: ${payload.name}`,
    text: lines.join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;color:#2f2924;line-height:1.6;max-width:640px">
        <h1 style="font-size:24px;margin:0 0 20px">${escapeHtml(title)}</h1>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}<br>
        <strong>Email:</strong> ${escapeHtml(payload.email)}<br>
        ${isBooking && payload.phone ? `<strong>Phone:</strong> ${escapeHtml(payload.phone)}<br>` : ''}
        <strong>${isBooking ? 'Session' : 'Topic'}:</strong> ${escapeHtml(subjectDetail)}</p>
        ${payload.message ? `<p><strong>Message:</strong><br>${escapeHtml(payload.message).replace(/\n/g, '<br>')}</p>` : ''}
        <p style="color:#756b62;font-size:13px">Submitted from ${escapeHtml(siteUrl)}</p>
      </div>`,
  };
}

function acknowledgementEmail(payload: NotificationPayload) {
  const firstName = payload.name.split(/\s+/)[0];
  const isBooking = payload.type === 'booking';
  const subject = isBooking ? 'We received your session request' : 'We received your enquiry';
  const detail = isBooking
    ? `Your request for a ${sessionLabels[payload.session]} has been received.`
    : `Your enquiry about ${payload.subject} has been received.`;

  return {
    subject: `${subject} | ThriveThroughCancer`,
    text: `Hello ${firstName},\n\n${detail}\n\nRenny or a member of the team will reply within one business day.\n\nWarmly,\nThriveThroughCancer`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#2f2924;line-height:1.7;max-width:640px">
        <p>Hello ${escapeHtml(firstName)},</p>
        <p>${escapeHtml(detail)}</p>
        <p>Renny or a member of the team will reply within one business day.</p>
        <p>Warmly,<br><strong>ThriveThroughCancer</strong></p>
      </div>`,
  };
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
  }

  if (request.headers.get('sec-fetch-site') === 'cross-site') {
    return NextResponse.json({ error: 'Request not allowed.' }, { status: 403 });
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const notifyToEmail = process.env.NOTIFY_TO_EMAIL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thrivethroughcancer.co.za';

  if (!apiKey || !fromEmail || !notifyToEmail) {
    console.error('Email notification is not configured.');
    return NextResponse.json(
      { error: 'Email delivery is temporarily unavailable. Please use the WhatsApp button or try again later.' },
      { status: 503 }
    );
  }

  try {
    const payload = parsePayload(await request.json());
    if (!payload) {
      return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 });
    }

    if (payload.website) {
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);
    const owner = ownerEmail(payload, siteUrl);
    const acknowledgement = acknowledgementEmail(payload);
    const { error } = await resend.batch.send([
      {
        from: fromEmail,
        to: [notifyToEmail],
        replyTo: payload.email,
        subject: owner.subject,
        text: owner.text,
        html: owner.html,
      },
      {
        from: fromEmail,
        to: [payload.email],
        replyTo: notifyToEmail,
        subject: acknowledgement.subject,
        text: acknowledgement.text,
        html: acknowledgement.html,
      },
    ]);

    if (error) {
      console.error('Resend delivery failed:', error.name);
      return NextResponse.json(
        { error: 'We could not send your request. Please use the WhatsApp button or try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email notification failed:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'We could not send your request. Please use the WhatsApp button or try again.' },
      { status: 500 }
    );
  }
}
