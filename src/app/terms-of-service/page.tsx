'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const sections = [
  {
    id: 'overview',
    icon: 'DocumentTextIcon',
    title: 'Agreement to Terms',
    content: [
      'By accessing ThriveThroughCancer\'s website, booking a session, or engaging with any of our coaching services, you agree to be bound by these Terms of Service. Please read them carefully before proceeding.',
      'These terms govern the relationship between you (the client) and Renny, operating as ThriveThroughCancer. If you do not agree with any part of these terms, please do not use our services.',
    ],
  },
  {
    id: 'coaching-disclaimer',
    icon: 'ExclamationTriangleIcon',
    title: 'Coaching Disclaimers',
    content: [
      'ThriveThroughCancer provides psycho-oncology coaching and life coaching services. It is essential that you understand the nature and scope of these services before engaging with us.',
    ],
    list: [
      'Coaching is NOT a medical, clinical, therapeutic, or psychological service and does not constitute medical advice, diagnosis, or treatment',
      'Renny is a certified coach, not a licensed medical professional, psychologist, psychiatrist, or therapist',
      'Coaching sessions are not a substitute for professional medical care, oncology treatment, mental health therapy, or crisis intervention',
      'Any information shared during sessions is for coaching and personal development purposes only',
      'Coaching does not involve the prescription of medication, clinical assessment, or the management of medical conditions',
      'Results from coaching vary between individuals and cannot be guaranteed — your outcomes depend on your own commitment, effort, and circumstances',
    ],
    footer:
      'If you are experiencing a medical emergency, mental health crisis, or require clinical support, please contact your healthcare provider, a licensed mental health professional, or emergency services immediately.',
  },
  {
    id: 'service-limitations',
    icon: 'InformationCircleIcon',
    title: 'Service Limitations',
    content: [
      'Our coaching services are designed to support your emotional wellbeing, resilience, and personal growth throughout your cancer journey. The following limitations apply to all services offered by ThriveThroughCancer:',
    ],
    list: [
      'Services are delivered remotely via video call — in-person sessions are not currently available',
      'Coaching is available to adults (18 years and older) only; parental or guardian consent is required for minors',
      'Sessions are conducted in English; we cannot guarantee coaching in other languages at this time',
      'ThriveThroughCancer does not provide 24/7 crisis support or emergency counselling services',
      'Renny reserves the right to decline or discontinue services if the scope of support required falls outside coaching boundaries',
      'Session availability is subject to Renny\'s schedule and may be limited during public holidays or personal leave periods',
      'Technical issues (internet connectivity, platform outages) may occasionally affect session delivery — we will make reasonable efforts to reschedule affected sessions promptly',
    ],
    footer:
      'ThriveThroughCancer is a solo practice. All coaching is delivered personally by Renny. We do not employ associate coaches or subcontract sessions to third parties.',
  },
  {
    id: 'client-responsibilities',
    icon: 'UserCircleIcon',
    title: 'Client Responsibilities',
    content: [
      'A successful coaching relationship is built on mutual respect, honesty, and commitment. As a client, you agree to the following responsibilities:',
    ],
    list: [
      'Attend scheduled sessions on time and provide at least 24 hours\' notice if you need to cancel or reschedule',
      'Engage honestly and openly to the best of your ability — coaching is most effective when built on trust',
      'Inform Renny of any significant changes in your health, treatment, or circumstances that may affect your coaching goals',
      'Understand that you are responsible for the decisions you make and the actions you take as a result of coaching',
      'Maintain the confidentiality of any materials, frameworks, or resources shared during sessions',
      'Ensure you have a stable internet connection and a private, comfortable space for video sessions',
      'Seek appropriate medical, psychological, or emergency support when your needs fall outside the scope of coaching',
      'Treat Renny with respect and professionalism — ThriveThroughCancer reserves the right to terminate the coaching relationship if this is not upheld',
    ],
  },
  {
    id: 'professional-boundaries',
    icon: 'ShieldCheckIcon',
    title: 'Renny\'s Professional Boundaries',
    content: [
      'To maintain the integrity, safety, and effectiveness of the coaching relationship, the following professional boundaries are in place at all times:',
    ],
    list: [
      'Coaching sessions are strictly professional — personal relationships, dual relationships, or social contact outside of the coaching context are not appropriate',
      'Renny will not provide medical opinions, interpret test results, recommend treatments, or advise on medication',
      'Renny will not act as a witness, advocate, or representative in any legal, medical, or insurance matter',
      'Contact outside of scheduled sessions is limited to administrative matters (scheduling, receipts, session resources) — Renny is not available for ongoing emotional support between sessions',
      'If Renny believes a client\'s needs exceed the scope of coaching (e.g., clinical depression, active suicidal ideation, or acute trauma), she will compassionately refer the client to appropriate professional support',
      'Renny maintains professional supervision and ongoing development to ensure the highest standard of coaching practice',
      'All session content remains confidential, with the exception of situations where there is a risk of serious harm to the client or others, as required by applicable law',
    ],
    footer:
      'These boundaries exist to protect both you and Renny, and to ensure that the coaching space remains safe, focused, and effective. They are not a reflection of care, but a commitment to it.',
  },
  {
    id: 'payments',
    icon: 'CreditCardIcon',
    title: 'Payments & Cancellations',
    content: [
      'The following terms apply to all session bookings and payments:',
    ],
    list: [
      'Session fees are confirmed at the time of booking and are payable in advance unless otherwise agreed',
      'Our services are not covered by medical aid or insurance; however, a receipt will be issued for all payments which may be used for tax rebate purposes',
      'Cancellations made with less than 24 hours\' notice may forfeit the session fee at Renny\'s discretion',
      'Renny reserves the right to adjust session pricing with reasonable advance notice to existing clients',
      'Refunds for completed sessions are not provided; concerns about a session should be raised directly with Renny',
      'Package sessions (e.g., 6-week or 12-week programmes) are non-refundable once commenced, except in exceptional circumstances at Renny\'s sole discretion',
    ],
  },
  {
    id: 'intellectual-property',
    icon: 'DocumentDuplicateIcon',
    title: 'Intellectual Property',
    content: [
      'All content, frameworks, worksheets, resources, and materials shared by Renny during coaching sessions or via this website are the intellectual property of ThriveThroughCancer.',
    ],
    list: [
      'You may use shared materials for your own personal development only',
      'You may not reproduce, distribute, sell, or share coaching materials with third parties without written permission',
      'Recording of sessions (audio or video) is not permitted without Renny\'s explicit prior consent',
      'Testimonials or feedback you provide may be used for marketing purposes with your consent — you may withdraw this consent at any time',
    ],
  },
  {
    id: 'liability',
    icon: 'ScaleIcon',
    title: 'Limitation of Liability',
    content: [
      'To the fullest extent permitted by applicable law, ThriveThroughCancer and Renny shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services, including but not limited to:',
    ],
    list: [
      'Decisions made or actions taken as a result of coaching conversations',
      'Changes in health, emotional wellbeing, or life circumstances during or after coaching',
      'Technical failures, session interruptions, or scheduling errors beyond our reasonable control',
      'Any reliance placed on information shared during sessions as a substitute for professional medical or psychological advice',
    ],
    footer:
      'You engage with ThriveThroughCancer\'s services voluntarily and acknowledge that coaching is a collaborative process in which you retain full responsibility for your own choices and outcomes.',
  },
  {
    id: 'changes',
    icon: 'ArrowPathIcon',
    title: 'Changes to These Terms',
    content: [
      'ThriveThroughCancer reserves the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes are posted constitutes your acceptance of the revised terms.',
      'We encourage you to review these terms periodically. If you have questions about any changes, please contact us directly.',
    ],
  },
  {
    id: 'contact',
    icon: 'EnvelopeIcon',
    title: 'Questions & Contact',
    content: [
      'If you have any questions about these Terms of Service or wish to discuss any aspect of our coaching relationship, please reach out:',
    ],
    contact: true,
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors duration-200">Home</Link>
            <Icon name="ChevronRightIcon" size={14} className="text-muted-foreground" />
            <span className="text-foreground">Terms of Service</span>
          </nav>

          {/* Page Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Icon name="DocumentTextIcon" size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide uppercase">Please Read Carefully</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
              These terms outline the nature of ThriveThroughCancer's coaching services, important disclaimers, your responsibilities as a client, and Renny's professional boundaries.
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
                    <Icon name={section.icon as 'DocumentTextIcon'} size={18} className="text-primary" />
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
                        We aim to respond to all enquiries within 1 business day.
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
              Have questions before you begin? We're happy to answer them. Reach out and Renny will personally respond within 1 business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
              >
                <Icon name="EnvelopeIcon" size={16} />
                Get in Touch
              </Link>
              <Link
                href="/#booking"
                className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
              >
                <Icon name="CalendarDaysIcon" size={16} />
                Book a Discovery WhatsApp Call
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
