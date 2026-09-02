'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const sections = [
  {
    id: 'overview',
    icon: 'ShieldCheckIcon',
    title: 'Our Commitment to Your Privacy',
    content: [
      'At ThriveThroughCancer, your privacy is not a formality — it is a foundation of the trust we build together. When you share personal and health information with us, you are placing confidence in our care, and we honour that responsibility with the utmost seriousness.',
      'This Privacy Policy explains what information we collect when you book a session or make an enquiry, how we use and protect that information, and the rights you hold over your own data. Please read it carefully before submitting any personal details.',
    ],
  },
  {
    id: 'contact-info',
    icon: 'UserCircleIcon',
    title: 'Contact Information We Collect',
    content: [
      'When you complete our booking or contact form, we collect the following personal details:',
    ],
    list: [
      'Full name — to address you personally and maintain accurate records',
      'Email address — to confirm your booking and communicate session details',
      'Phone number (optional) — for urgent scheduling changes if you choose to provide it',
      'Preferred session type and time zone — to arrange your session appropriately',
      'Your message or enquiry — to understand your needs before our first conversation',
    ],
    footer:
      'We collect only what is necessary to serve you. We do not request payment card details through our contact form; billing is handled separately and securely at the time of session confirmation.',
  },
  {
    id: 'health-data',
    icon: 'HeartIcon',
    title: 'Health & Sensitive Data',
    content: [
      'Cancer coaching is inherently personal. You may choose to share details about your diagnosis, treatment history, physical symptoms, emotional wellbeing, or other sensitive health information. This data is treated with the highest level of confidentiality.',
    ],
    list: [
      'Health information you share is used solely to personalise your coaching support',
      'It is never sold, rented, or disclosed to third parties for commercial purposes',
      'Session notes are stored securely and accessible only to Renny',
      'No health data is shared with insurers, employers, or medical institutions without your explicit written consent',
      'You may request deletion of your health records at any time',
    ],
    footer:
      'Coaching is not a medical service and does not replace professional medical advice. Any health information shared is used to support your wellbeing journey, not for clinical diagnosis or treatment.',
  },
  {
    id: 'how-we-use',
    icon: 'CogIcon',
    title: 'How We Use Your Information',
    content: [
      'The information you provide is used exclusively for the following purposes:',
    ],
    list: [
      'Responding to your enquiry or booking request within 1 business day',
      'Scheduling and confirming your coaching session',
      'Sending session reminders and follow-up resources relevant to your journey',
      'Issuing receipts for your records (including for potential tax rebate purposes)',
      'Improving our services based on aggregated, anonymised feedback',
    ],
    footer:
      'We do not use your information for unsolicited marketing. If you receive a newsletter or update, it is because you opted in — and you may unsubscribe at any time.',
  },
  {
    id: 'storage',
    icon: 'LockClosedIcon',
    title: 'Data Storage & Security',
    content: [
      'Your data is stored using industry-standard security practices. We take reasonable technical and organisational measures to protect your information against unauthorised access, loss, or misuse.',
    ],
    list: [
      'Form submissions are transmitted over encrypted (HTTPS) connections',
      'Client records are stored in password-protected, access-controlled systems',
      'We retain your data only for as long as necessary to provide our services or as required by applicable law',
      'In the event of a data breach that affects your personal information, we will notify you promptly',
    ],
  },
  {
    id: 'sharing',
    icon: 'UsersIcon',
    title: 'Sharing & Third Parties',
    content: [
      'We do not sell or trade your personal information. We may share limited data with trusted service providers who assist in operating our platform (such as scheduling tools or email services), strictly under confidentiality agreements.',
      'These providers are permitted to use your data only to perform services on our behalf and are contractually obligated to protect it. We do not permit them to use your data for their own marketing or commercial purposes.',
    ],
  },
  {
    id: 'compliance',
    icon: 'DocumentCheckIcon',
    title: 'Compliance & Your Rights',
    content: [
      'We are committed to complying with applicable data protection legislation, including the Protection of Personal Information Act (POPIA) in South Africa and the General Data Protection Regulation (GDPR) where applicable to international clients.',
      'You have the following rights regarding your personal data:',
    ],
    list: [
      'Right to access — request a copy of the personal information we hold about you',
      'Right to correction — ask us to update inaccurate or incomplete information',
      'Right to deletion — request that we erase your personal data from our records',
      'Right to object — opt out of any processing you did not explicitly consent to',
      'Right to portability — receive your data in a structured, machine-readable format',
    ],
    footer:
      'To exercise any of these rights, please contact us directly at the details below. We will respond within 30 days.',
  },
  {
    id: 'cookies',
    icon: 'GlobeAltIcon',
    title: 'Cookies & Website Analytics',
    content: [
      'Our website may use cookies and analytics tools to understand how visitors interact with our pages. This helps us improve the user experience. No personally identifiable information is collected through cookies without your knowledge.',
      'You may disable cookies through your browser settings at any time. Doing so will not affect your ability to submit a booking enquiry.',
    ],
  },
  {
    id: 'contact',
    icon: 'EnvelopeIcon',
    title: 'Questions & Contact',
    content: [
      'If you have any questions about this Privacy Policy, wish to exercise your data rights, or have concerns about how your information has been handled, please reach out directly:',
    ],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors duration-200">Home</Link>
            <Icon name="ChevronRightIcon" size={14} className="text-muted-foreground" />
            <span className="text-foreground">Privacy Policy</span>
          </nav>

          {/* Page Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Icon name="ShieldCheckIcon" size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide uppercase">Your Privacy Matters</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
              How ThriveThroughCancer collects, uses, and protects your personal and health information when you book a session or make an enquiry.
            </p>
            <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-4">
              Last updated: August 2026
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="border border-border rounded-2xl p-7 md:p-9 bg-card"
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mt-0.5">
                    <Icon name={section.icon as 'ShieldCheckIcon'} size={18} className="text-primary" />
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl font-light text-foreground leading-snug">
                    {section.title}
                  </h2>
                </div>

                {/* Body paragraphs */}
                <div className="space-y-4 pl-14">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {/* List items */}
                  {section.list && (
                    <ul className="space-y-2.5 mt-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Footer note */}
                  {section.footer && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-4 pl-4 border-l-2 border-primary/30 italic">
                      {section.footer}
                    </p>
                  )}

                  {/* Contact block */}
                  {section.contact && (
                    <div className="mt-5 rounded-xl border border-border bg-background p-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="UserCircleIcon" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground font-medium">Renny — ThriveThroughCancer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="EnvelopeIcon" size={16} className="text-primary flex-shrink-0" />
                        <Link
                          href="/contact"
                          className="text-sm text-accent hover:text-primary transition-colors duration-200 underline underline-offset-2"
                        >
                          Send a message via our contact form
                        </Link>
                      </div>
                      <p className="text-xs text-muted-foreground pt-1">
                        We aim to respond to all privacy-related requests within 30 days of receipt.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-md mx-auto">
              Ready to begin your journey? Your information is safe with us — we handle it with the same care and compassion we bring to every coaching session.
            </p>
            <Link
              href="/#booking"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <Icon name="CalendarDaysIcon" size={16} />
              Book a Free Discovery WhatsApp Call
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
