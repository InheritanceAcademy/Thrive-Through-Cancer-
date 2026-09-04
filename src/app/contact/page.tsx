'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { trackContactForm } from '@/lib/analytics';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

interface TouchedFields {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
  consent?: boolean;
}

const subjects = [
  'Individual Coaching',
  'Group Circles',
  'Caregiver Support',
  'Wellness Intensive',
  'General Enquiry',
  'Media / Speaking',
];

// SAST is UTC+2
const SAST_OFFSET = 2;
const OPEN_HOUR_SAST = 8;   // 8am
const CLOSE_HOUR_SAST = 18; // 6pm

interface TimezoneCity {
  label: string;
  city: string;
  utcOffset: number;
  region: string;
}

const timezoneCities: TimezoneCity[] = [
  { label: 'SAST', city: 'Johannesburg', utcOffset: 2, region: 'South Africa' },
  { label: 'GMT', city: 'London', utcOffset: 0, region: 'United Kingdom' },
  { label: 'CET', city: 'Paris / Berlin', utcOffset: 1, region: 'Central Europe' },
  { label: 'EET', city: 'Cairo / Athens', utcOffset: 2, region: 'Eastern Europe' },
  { label: 'IST', city: 'Mumbai', utcOffset: 5.5, region: 'India' },
  { label: 'SGT', city: 'Singapore', utcOffset: 8, region: 'Southeast Asia' },
  { label: 'JST', city: 'Tokyo', utcOffset: 9, region: 'Japan' },
  { label: 'EST', city: 'New York', utcOffset: -5, region: 'US East' },
  { label: 'CST', city: 'Chicago', utcOffset: -6, region: 'US Central' },
  { label: 'PST', city: 'Los Angeles', utcOffset: -8, region: 'US West' },
  { label: 'BRT', city: 'São Paulo', utcOffset: -3, region: 'Brazil' },
  { label: 'AEST', city: 'Sydney', utcOffset: 10, region: 'Australia' },
];

function formatHour(hour: number): string {
  const h = ((hour % 24) + 24) % 24;
  const ampm = h >= 12 ? 'pm' : 'am';
  const display = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${display}${ampm}`;
}

function getLocalHours(utcOffset: number): { open: string; close: string; sameDay: boolean } {
  const diff = utcOffset - SAST_OFFSET;
  const openLocal = OPEN_HOUR_SAST + diff;
  const closeLocal = CLOSE_HOUR_SAST + diff;
  const sameDay = openLocal >= 0 && closeLocal <= 24;
  return {
    open: formatHour(openLocal),
    close: formatHour(closeLocal),
    sameDay,
  };
}

function TimezoneConverter() {
  const [selectedCity, setSelectedCity] = useState<TimezoneCity>(timezoneCities[0]);
  const [currentSASTTime, setCurrentSASTTime] = useState('');
  const [currentLocalTime, setCurrentLocalTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;

      const sastMs = utcMs + SAST_OFFSET * 3600000;
      const sastDate = new Date(sastMs);
      const sastH = sastDate.getHours();
      const sastM = sastDate.getMinutes().toString().padStart(2, '0');
      const sastAmPm = sastH >= 12 ? 'pm' : 'am';
      const sastDisplay = (sastH === 0 ? 12 : sastH > 12 ? sastH - 12 : sastH);
      setCurrentSASTTime(`${sastDisplay}:${sastM}${sastAmPm}`);

      const localMs = utcMs + selectedCity.utcOffset * 3600000;
      const localDate = new Date(localMs);
      const lH = localDate.getHours();
      const lM = localDate.getMinutes().toString().padStart(2, '0');
      const lAmPm = lH >= 12 ? 'pm' : 'am';
      const lDisplay = (lH === 0 ? 12 : lH > 12 ? lH - 12 : lH);
      setCurrentLocalTime(`${lDisplay}:${lM}${lAmPm}`);

      setIsOpen(sastH >= OPEN_HOUR_SAST && sastH < CLOSE_HOUR_SAST);
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  const { open, close } = getLocalHours(selectedCity.utcOffset);

  return (
    <div className="glass-card rounded-3xl p-7 space-y-5">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Icon name="GlobeAltIcon" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="font-serif text-base font-semibold text-foreground">Availability Hours</h3>
          <p className="text-xs text-muted-foreground">8am – 6pm SAST · See your local time</p>
        </div>
      </div>

      {/* SAST current time + status */}
      <div className="flex items-center justify-between bg-primary/5 rounded-2xl px-4 py-3">
        <div>
          <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase mb-0.5">Johannesburg (SAST)</p>
          <p className="text-foreground text-sm font-medium">{currentSASTTime || '—'}</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isOpen ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
          {isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>

      {/* City selector */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">Your location</label>
        <select
          value={selectedCity.label}
          onChange={(e) => {
            const found = timezoneCities.find((c) => c.label === e.target.value);
            if (found) setSelectedCity(found);
          }}
          className="input-field text-sm"
          aria-label="Select your timezone"
        >
          {timezoneCities.map((c) => (
            <option key={c.label} value={c.label}>{c.city} ({c.label}) — {c.region}</option>
          ))}
        </select>
      </div>

      {/* Converted hours */}
      <div className="rounded-2xl border border-border bg-background/50 px-4 py-4 space-y-2">
        <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase">Our hours in your time</p>
        <p className="text-foreground text-lg font-semibold">
          {open} – {close}
          <span className="text-xs text-muted-foreground font-normal ml-2">{selectedCity.label}</span>
        </p>
        {currentLocalTime && (
          <p className="text-xs text-muted-foreground">Your current time: <span className="font-medium text-foreground">{currentLocalTime}</span></p>
        )}
      </div>

      <p className="text-xs text-muted-foreground font-light leading-relaxed">
        These hours are designed to reach across time zones — covering Europe, morning hours across Asia, and early morning on the US East Coast.
      </p>
    </div>
  );
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case 'name':
        if (!value || (typeof value === 'string' && value.trim().length === 0)) return 'Full name is required.';
        if (typeof value === 'string' && value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value || (typeof value === 'string' && value.trim().length === 0)) return 'Email address is required.';
        if (typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.';
        return '';
      case 'subject':
        if (!value || (typeof value === 'string' && value.trim().length === 0)) return 'Please select a topic.';
        return '';
      case 'message':
        if (!value || (typeof value === 'string' && value.trim().length === 0)) return 'A message is required.';
        if (typeof value === 'string' && value.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';
      case 'consent':
        if (!value) return 'You must agree to be contacted before submitting.';
        return '';
      default:
        return '';
    }
  };

  const validateAll = (): FormErrors => {
    return {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      subject: validateField('subject', form.subject),
      message: validateField('message', form.message),
      consent: validateField('consent', form.consent),
    };
  };

  useEffect(() => {
    let ctx: any;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          heroRef.current?.querySelectorAll('.hero-item') ?? [],
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
        );
        gsap.fromTo(
          formRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 80%' } }
        );
      });
    };
    init();
    return () => { if (ctx) ctx.revert(); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    // Real-time validation: only show error if field has been touched
    if (touched[name as keyof TouchedFields]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, newValue) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, fieldValue) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all fields as touched
    setTouched({ name: true, email: true, subject: true, message: true, consent: true });
    const allErrors = validateAll();
    setErrors(allErrors);
    const hasErrors = Object.values(allErrors).some((err) => err && err.length > 0);
    if (hasErrors) return;
    setSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/notify.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          website: form.website,
        }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Your message could not be sent.');
      }

      trackContactForm(`contact_form_${form.subject || 'general'}`);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Your message could not be sent. Please use WhatsApp or try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden" aria-label="Contact hero">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] blob-warm opacity-25" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] blob-accent opacity-30" />
          </div>
          <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="hero-item inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 text-accent text-xs font-semibold tracking-widest uppercase mb-6" style={{ opacity: 0 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Reach Out, In Your Own Time
            </div>
            <h1 className="hero-item font-serif text-display font-light italic leading-[1.0] text-foreground mb-6" style={{ opacity: 0 }}>
              We&apos;re here — <span className="font-black not-italic text-primary">when you&apos;re ready.</span>
            </h1>
            <p className="hero-item max-w-xl mx-auto text-lg text-muted-foreground font-light leading-relaxed" style={{ opacity: 0 }}>
              Whenever you feel ready, send us a message. Every enquiry is read personally by Renny Letswalo or a member of her team, and we&apos;ll respond thoughtfully — there&apos;s no pressure to move faster than feels right for you.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 md:px-10 border-t border-border" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <h2 id="contact-heading" className="font-serif text-3xl font-light leading-tight mb-4">
                  We&apos;d love to <span className="italic font-black text-primary">hear from you</span>
                </h2>
              </div>

              {/* Contact details */}
              <ul className="space-y-5" aria-label="Contact information">
                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="EnvelopeIcon" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase mb-0.5">Email</p>
                    <a href="mailto:hello@thrivethroughcancer.co.za" className="text-foreground text-sm font-medium hover:text-primary transition-colors block">
                      hello@thrivethroughcancer.co.za
                    </a>
                  </div>
                </li>

                {/* WhatsApp */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="ChatBubbleLeftRightIcon" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase mb-0.5">WhatsApp Messaging</p>
                    <p className="text-foreground text-sm font-medium">International clients welcome</p>
                    <p className="text-xs text-muted-foreground font-light mt-0.5 leading-relaxed">
                      We use WhatsApp messaging to connect across borders — no international call charges, no pressure. Message us whenever you&apos;re ready.
                    </p>
                  </div>
                </li>

                {/* Hours */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="ClockIcon" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase mb-0.5">Availability</p>
                    <p className="text-foreground text-sm font-medium">Mon–Fri, 8am–6pm SAST</p>
                    <p className="text-xs text-muted-foreground font-light mt-0.5">South Africa Standard Time (UTC+2)</p>
                  </div>
                </li>

                {/* Sessions */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="GlobeAltIcon" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase mb-0.5">Sessions</p>
                    <p className="text-foreground text-sm font-medium">Worldwide via secure video</p>
                  </div>
                </li>
              </ul>

              {/* Timezone Converter */}
              <TimezoneConverter />

              {/* Reassurance card */}
              <div className="glass-card rounded-3xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground">Your privacy matters</h3>
                </div>
                <p className="text-muted-foreground text-xs font-light leading-relaxed">
                  We use your details only to respond to your enquiry and handle them according to our Privacy Policy.
                </p>
              </div>

              {/* Quick links */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground font-semibold tracking-widest uppercase">Explore</p>
                <div className="flex flex-col gap-2">
                  <Link href="/services" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors group">
                    <Icon name="ArrowRightIcon" size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    View all services
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors group">
                    <Icon name="ArrowRightIcon" size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    About Us
                  </Link>
                  <a href="/#stories" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors group">
                    <Icon name="ArrowRightIcon" size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    Client stories
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div ref={formRef} className="lg:col-span-3" style={{ opacity: 0 }}>
              {submitted ? (
                <div className="glass-card rounded-3xl p-10 md:p-14 flex flex-col gap-8 h-full justify-center min-h-[600px]">
                  {/* Icon + heading */}
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center">
                        <Icon name="HeartIcon" size={36} className="text-primary" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center border-2 border-white">
                        <Icon name="CheckIcon" size={14} className="text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-light leading-tight text-foreground mb-2">
                        Thank you, <span className="italic font-black text-primary">{form.name.split(' ')[0] || 'friend'}.</span>
                      </h3>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm mx-auto">
                        Your message has been received and is in safe hands. Reaching out takes courage — we honour that.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border" />

                  {/* What happens next */}
                  <div className="space-y-4">
                    <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">What happens next</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                        <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="EnvelopeOpenIcon" size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-0.5">Your message is confirmed</p>
                          <p className="text-xs text-muted-foreground font-light leading-relaxed">
                            We&apos;ve received your enquiry about <span className="font-medium text-foreground">{form.subject || 'your journey'}</span>. Every message is read personally — nothing goes to a bot.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/60 border border-border">
                        <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="ClockIcon" size={16} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-0.5">Renny will respond within 1 business day</p>
                          <p className="text-xs text-muted-foreground font-light leading-relaxed">
                            Renny or a member of her team will reply thoughtfully — usually within 24 hours on business days (Mon–Fri, 8am–6pm SAST). There&apos;s no rush on your end.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/60 border border-border">
                        <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="ChatBubbleLeftRightIcon" size={16} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-0.5">A gentle, personal reply</p>
                          <p className="text-xs text-muted-foreground font-light leading-relaxed">
                            Expect a warm, unhurried response — not a template. Renny takes time to read every message before replying, so her response will be tailored to you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reassurance note */}
                  <div className="rounded-2xl bg-primary/5 border border-primary/15 px-5 py-4 flex items-start gap-3">
                    <Icon name="ShieldCheckIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Your message and personal details are used only to respond to your enquiry, as explained in our Privacy Policy.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '', consent: false, website: '' }); }}
                      className="btn-outline text-sm flex-1 justify-center"
                    >
                      Send another message
                    </button>
                    <a href="/#booking" className="btn-primary text-sm flex-1 justify-center">
                      Book a Discovery WhatsApp Call
                      <Icon name="ArrowRightIcon" size={16} />
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-6"
                  aria-label="Contact form"
                  noValidate
                >
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      value={form.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-1">Send a message</h2>
                    <p className="text-sm text-muted-foreground font-light">Share as much or as little as you like — there is no wrong way to begin.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your full name"
                        className={`input-field ${touched.name && errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                        autoComplete="name"
                        aria-invalid={touched.name && !!errors.name}
                        aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                      />
                      {touched.name && errors.name && (
                        <p id="name-error" className="text-xs text-red-500 flex items-center gap-1.5 mt-0.5" role="alert">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your@email.com"
                        className={`input-field ${touched.email && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                        autoComplete="email"
                        aria-invalid={touched.email && !!errors.email}
                        aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                      />
                      {touched.email && errors.email && (
                        <p id="email-error" className="text-xs text-red-500 flex items-center gap-1.5 mt-0.5" role="alert">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                      I&apos;m interested in <span className="text-primary">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field ${touched.subject && errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      aria-label="Select a subject"
                      aria-invalid={touched.subject && !!errors.subject}
                      aria-describedby={touched.subject && errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="" disabled>Select a topic…</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {touched.subject && errors.subject && (
                      <p id="subject-error" className="text-xs text-red-500 flex items-center gap-1.5 mt-0.5" role="alert">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                      Your message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us a little about where you are in your journey and what kind of support you're looking for. There's no rush — take your time."
                      className={`textarea-field ${touched.message && errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      rows={5}
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                    />
                    {touched.message && errors.message && (
                      <p id="message-error" className="text-xs text-red-500 flex items-center gap-1.5 mt-0.5" role="alert">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-start gap-3">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-1 w-4 h-4 accent-primary flex-shrink-0 cursor-pointer ${touched.consent && errors.consent ? 'outline outline-2 outline-red-500 rounded' : ''}`}
                        aria-invalid={touched.consent && !!errors.consent}
                        aria-describedby={touched.consent && errors.consent ? 'consent-error' : undefined}
                      />
                      <label htmlFor="consent" className="text-xs text-muted-foreground font-light leading-relaxed cursor-pointer">
                        I agree to be contacted by ThriveThroughCancer regarding my enquiry and understand that my details will be handled according to the Privacy Policy.
                      </label>
                    </div>
                    {touched.consent && errors.consent && (
                      <p id="consent-error" className="text-xs text-red-500 flex items-center gap-1.5 ml-7" role="alert">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    aria-busy={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon name="ArrowRightIcon" size={18} />
                      </>
                    )}
                  </button>
                  {submitError && (
                    <p className="text-sm text-red-600 text-center" role="alert">
                      {submitError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Gentle CTA */}
        <section className="py-24 px-6 md:px-10 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-section-title font-light italic leading-[1.0] mb-6">
              Ready to take the <span className="font-black not-italic text-primary">first step?</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
              A free 10-minute Discovery WhatsApp Call — no preparation needed, no pressure. Simply show up as you are, and we&apos;ll find the pace that works for you.
            </p>
            <a href="/#booking" className="btn-primary text-base px-8 py-4">
              Book a Free 10-Min WhatsApp Call Now
              <Icon name="ArrowRightIcon" size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
