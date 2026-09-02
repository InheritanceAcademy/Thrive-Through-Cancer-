'use client';

import React, { useEffect, useRef, useState } from 'react';

import Icon from '@/components/ui/AppIcon';
import { trackBookingCTA, trackContactForm } from '@/lib/analytics';

const sessionTypes = [
{
  id: 'discovery',
  label: 'Chemistry Discovery WhatsApp Call',
  duration: '10 min',
  description: 'Get to know each other and see if we\'re a good fit. No obligation.',
  price: 'Free',
  icon: 'ChatBubbleLeftRightIcon',
  badge: null,
  includes: [
    'Introductory conversation with Renny',
    'Overview of coaching approach & philosophy',
    'Q&A — ask anything you need to know',
    'No commitment required',
  ]
},
{
  id: 'single',
  label: 'Single Session',
  duration: '90 min',
  description: 'Deep-dive into a specific challenge or milestone in your journey.',
  price: 'R750 / $100',
  icon: 'ClockIcon',
  badge: null,
  includes: [
    'One focused 90-minute coaching session',
    'Personalised session summary & action steps',
    'Follow-up resource recommendations',
    'Email support for 48 hrs post-session',
  ]
},
{
  id: 'foundation',
  label: 'Foundation Session',
  duration: '3 hours',
  description: 'Build foundation platform, clear recovery plan and roadmap of your unique cancer journey.',
  price: 'R1785 / $275',
  icon: 'MapIcon',
  badge: 'Most Popular',
  includes: [
    'Comprehensive 3-hour deep-dive session',
    'Personalised cancer journey roadmap',
    'Clear recovery & wellness action plan',
    'Written session report & next steps',
    'WhatsApp check-in within 7 days',
  ]
},
{
  id: 'program',
  label: '12-Week Program',
  duration: '60 min / week',
  description: 'Comprehensive weekly coaching sessions with email & WhatsApp support and personalised wellness plan guidance.',
  price: 'R 7560 / $1080',
  icon: 'CalendarDaysIcon',
  badge: 'Best Value',
  includes: [
    '12 weekly 60-minute coaching sessions',
    'Ongoing email & WhatsApp support',
    'Personalised wellness plan (updated weekly)',
    'Psycho-oncology tools & resources library',
    'Priority scheduling & session recordings',
    'End-of-program progress review',
  ]
}];


type FormState = {
  name: string;
  email: string;
  phone: string;
  session: string;
  message: string;
  website: string;
};

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedSession, setSelectedSession] = useState('discovery');
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    session: 'discovery',
    message: '',
    website: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current?.querySelectorAll('.booking-reveal') ?? [],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
          }
        );
      }, sectionRef);
    };

    init();
    return () => {if (ctx) ctx.revert();};
  }, []);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSessionSelect = (id: string) => {
    setSelectedSession(id);
    setForm((prev) => ({ ...prev, session: id }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (form.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setSubmitError('Please enter your full name and a valid email address.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/notify.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'booking', ...form }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Your request could not be sent.');
      }

      trackBookingCTA(`booking_form_${selectedSession}`);
      trackContactForm('booking_form');
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Your request could not be sent. Please use WhatsApp or try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 border-t border-border relative overflow-hidden"
      aria-labelledby="booking-heading">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-warm opacity-30 -z-0 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 blob-accent opacity-20 -z-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="booking-reveal text-center mb-16 md:mb-20" style={{ opacity: 0 }}>
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">BEGIN AN EMPOWERING JOURNEY

          </span>
          <h2
            id="booking-heading"
            className="font-serif text-display font-light leading-[0.9] mb-6">

            Let&apos;s Start{' '}
            <span className="italic font-black text-primary">Together.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">The first step is always the hardest, we make it easy for you with our free 10-minute Discovery WhatsApp Call. It costs you nothing — and it might change everything.


          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* Left: Session type selector + trust signals */}
          <div className="lg:col-span-2 space-y-6">
            {/* Session type cards */}
            <div className="booking-reveal space-y-4" style={{ opacity: 0 }}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                CHOOSE YOUR SESSION
                <span className="block text-xs font-normal italic normal-case tracking-normal mt-1">Fees are in Rands and Dollars, South Africans pay in Rands and rest of the other countries pay Dollar fees</span>
              </h3>
              {sessionTypes.map((s) =>
              <button
                key={s.id}
                onClick={() => handleSessionSelect(s.id)}
                className={`w-full text-left rounded-2xl p-5 border transition-all duration-300 ${
                selectedSession === s.id ?
                'border-primary bg-primary/10 shadow-md' : 'border-border bg-card hover:border-primary/40'}`
                }
                aria-pressed={selectedSession === s.id}
                aria-label={`Select ${s.label} session`}>

                  <div className="flex items-start gap-4">
                    <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    selectedSession === s.id ? 'bg-primary/20' : 'bg-muted'}`
                    }>

                      <Icon
                      name={s.icon as 'ClockIcon'}
                      size={18}
                      className={selectedSession === s.id ? 'text-primary' : 'text-muted-foreground'} />

                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm text-foreground">{s.label}</span>
                          {s.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                              {s.badge}
                            </span>
                          )}
                        </div>
                        <span
                        className={`text-sm font-bold flex-shrink-0 ${
                        s.price === 'Free' ? 'text-primary' : 'text-accent'}`
                        }>

                          {s.price}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        <Icon name="ClockIcon" size={11} className="inline mr-1 -mt-0.5" />
                        {s.duration}
                      </p>
                      <p className={`text-xs text-muted-foreground font-light leading-relaxed ${selectedSession === s.id ? 'mb-3' : ''}`}>{s.description}</p>

                      {selectedSession === s.id && (
                        <ul className="space-y-1">
                          {s.includes.map((item) => (
                            <li key={item} className="flex items-start gap-1.5 text-xs text-foreground/70">
                              <Icon
                                name="CheckCircleIcon"
                                size={13}
                                className="flex-shrink-0 mt-0.5 text-primary"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Trust signals */}
            <div className="booking-reveal glass-card rounded-2xl p-6 space-y-4" style={{ opacity: 0 }}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                What to Expect
              </h4>
              {[
              { icon: 'ShieldCheckIcon', text: 'Handled with care and discretion' },
              { icon: 'VideoCameraIcon', text: 'Secure video or phone — your choice' },
              { icon: 'ArrowPathIcon', text: 'Cancel or reschedule anytime' },
              { icon: 'HeartIcon', text: 'No judgment, no pressure' }].
              map((item) =>
              <div key={item.text} className="flex items-center gap-3">
                  <Icon name={item.icon as 'ShieldCheckIcon'} size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/80 font-light">{item.text}</span>
                </div>
              )}
            </div>

            {/* Financial hardship notice */}
            <div className="booking-reveal glass-card rounded-2xl p-6 border border-primary/20 bg-primary/5" style={{ opacity: 0 }}>
              <div className="flex items-start gap-3">
                <Icon name="HeartIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 font-light leading-relaxed">
                  We recognize that finances may be one of your concerns on a cancer journey. Do not make financial hardship a barrier to your recovery — speak to us about our <span className="font-semibold text-primary">&ldquo;Pay What You Can Afford&rdquo;</span> offer. Our goal is to help all in need of our services.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-3">
            <div className="booking-reveal glass-card rounded-3xl p-8 md:p-10" style={{ opacity: 0 }}>
              {submitted ?
              <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckIcon" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl italic mb-4 text-foreground">
                    Thank You, {form.name.split(' ')[0]}.
                  </h3>
                  <p className="text-muted-foreground text-base font-light leading-relaxed max-w-sm mx-auto">
                    Your request has been received. We will reach out within 24 hours to confirm your session time.
                  </p>
                </div> :

              <form onSubmit={handleSubmit} noValidate aria-label="Booking request form">
                  <h3 className="font-serif text-xl md:text-2xl italic text-foreground mb-6">
                    Request a Session
                  </h3>

                  {/* Selected session summary banner */}
                  {(() => {
                    const sel = sessionTypes.find((s) => s.id === selectedSession);
                    if (!sel) return null;
                    return (
                      <div className="mb-6 rounded-xl border border-primary/30 bg-primary/8 p-4 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name={sel.icon as 'ClockIcon'} size={16} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-semibold text-sm text-foreground">{sel.label}</span>
                            <span className={`text-sm font-bold ${sel.price === 'Free' ? 'text-primary' : 'text-accent'}`}>
                              {sel.price}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            <Icon name="ClockIcon" size={11} className="inline mr-1 -mt-0.5" />
                            {sel.duration} &nbsp;·&nbsp; {sel.description}
                          </p>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="space-y-5">
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="booking-website">Website</label>
                      <input
                        id="booking-website"
                        name="website"
                        type="text"
                        value={form.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Full Name *
                        </label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="input-field"
                        autoComplete="name" />

                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Email Address *
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="input-field"
                        autoComplete="email" />

                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Phone Number
                      </label>
                      <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="input-field"
                      autoComplete="tel" />

                    </div>

                    {/* Session (hidden, controlled by buttons above) */}
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Selected Session
                      </label>
                      <div className="input-field text-foreground/70 text-sm">
                        {sessionTypes.find((s) => s.id === selectedSession)?.label} —{' '}
                        {sessionTypes.find((s) => s.id === selectedSession)?.price}
                      </div>
                    </div>

                    {/* How can I help */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        How Can I Help You?
                      </label>
                      <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share a little about where you are in your journey — no detail is too small."
                      className="textarea-field"
                      rows={4} />

                    </div>

                    {submitError && (
                      <p className="text-sm text-red-600 text-center" role="alert">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                      aria-busy={submitting}
                    >
                      {submitting ? 'Sending Request…' : 'Request My Session'}
                      {!submitting && <Icon name="ArrowRightIcon" size={18} />}
                    </button>

                    <p className="text-center text-xs text-muted-foreground leading-relaxed">
                      By submitting, you agree to our{' '}
                      <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                      {' '}We use your details only to respond to this request.
                    </p>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}
