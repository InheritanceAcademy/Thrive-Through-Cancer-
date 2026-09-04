'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';


const services = [
{
  id: 'single',
  eyebrow: 'Individual Session',
  title: 'One-on-One Coaching',
  subtitle: '90-minute personalised support for where you are right now',
  body: 'A dedicated one-on-one session, tailored to your current needs — whether you\'re navigating a new diagnosis, managing treatment side effects, or working through a specific challenge on your cancer journey.',
  icon: 'ClockIcon',
  features: [
  'Personalised session agenda',
  'Wellness & lifestyle guidance',
  'Emotional & resilience support',
  'Treatment side-effect strategies',
  'Development of practical action steps'],
  span: 'lg:col-span-2',
  accent: true,
  badge: 'Most Popular',
  price: 'R750 / $100'
},
{
  id: 'intensive',
  eyebrow: 'Deep Dive',
  title: 'Wellness Foundation Intensive',
  subtitle: 'A comprehensive 3-hour session to build foundation and recovery plan',
  body: 'A structured 3-hour virtual intensive designed to give you a clear, grounded starting point. We build your wellness foundation, map out your recovery plan, and create a personalised roadmap for your unique cancer journey.',
  icon: 'BoltIcon',
  features: [
  'Comprehensive health assessment',
  'Wellness Strategy set up',
  'Personalised wellness roadmap',
  'Clear recovery plan',
  'Priority action framework'],
  span: 'lg:col-span-1',
  accent: false,
  badge: 'Starting Point',
  price: 'R1785 / $275'
},
{
  id: 'program',
  eyebrow: 'Comprehensive',
  title: '12-Week Program',
  subtitle: 'Sustained, structured coaching across your entire journey',
  body: 'Weekly 60-minute coaching sessions over 12 weeks, with ongoing email and WhatsApp support between sessions. A fully personalised wellness plan guides every step, adapting as your journey evolves.',
  icon: 'CalendarDaysIcon',
  features: [
  'Wellness Foundation & Health Assessment',
  'Recovery Plan & Goal Setting',
  'Personalised Roadmap Creation',
  'Personalised wellness plan & implementation support',
  'Progress tracking & plan adjustments'],
  span: 'lg:col-span-2',
  accent: false,
  badge: 'Ideal Package',
  price: 'R7560 / $1080'
},
{
  id: 'caregiver',
  eyebrow: 'For Families',
  title: 'Caregiver Support',
  subtitle: 'You cannot pour from an empty cup',
  body: 'Dedicated coaching for partners, parents, and adult children caring for someone with cancer. Covers burnout prevention, communication strategies, and maintaining your own wellbeing through one of life\'s most demanding roles. You can design your package as you see fit, booking 60-minute sessions as needed.',
  icon: 'HeartIcon',
  features: [
  'Caregiving Strategies and Plan',
  'Burnout prevention plan',
  'Boundary-setting frameworks',
  'Grief & anticipatory grief support',
  'Self-care accountability',
  'Communication strategies'],
  span: 'lg:col-span-1',
  accent: false,
  badge: 'Highly Recommended',
  price: 'R525 / $70'
}];


const process = [
{
  step: '01',
  title: 'Discovery WhatsApp Call',
  body: 'A free 10-minute WhatsApp conversation to understand where you are, what you need, and whether we\'re the right fit.'
},
{
  step: '02',
  title: 'Intake & Assessment',
  body: 'A detailed health history, lifestyle questionnaire, and goals session to build your personalised baseline.'
},
{
  step: '03',
  title: 'Your Wellness Plan',
  body: 'We co-create a practical, realistic plan that fits your treatment schedule, energy levels, and life.'
},
{
  step: '04',
  title: 'Ongoing Coaching',
  body: 'Regular sessions, between-session support, and plan adjustments as your journey evolves.'
}];


const faqs = [
{
  q: 'Is coaching a replacement for medical care?',
  a: 'No. ThriveThroughCancer works alongside your oncology team — never in place of it. We focus on the quality-of-life dimensions that clinical care often cannot address.'
},
{
  q: 'Can I start coaching during active treatment?',
  a: 'Absolutely. Many clients find coaching most valuable during treatment, when the need for practical and emotional support is highest.'
},
{
  q: 'Do you work with all cancer types?',
  a: 'Yes. Renny has experience across breast, colorectal, Small Intestine cancer, renal carcinoma, and many other cancer types, as well as rare diagnoses. For Psycho-Oncology Coaching, the specialty of cancer is not a factor — the focus is not on the type of cancer but on the whole person\'s wellbeing.'
},
{
  q: 'Is coaching covered by insurance?',
  a: 'Unfortunately, our services are not covered by Insurance or Medical Aid. However, we provide a receipt in the event that you are able to use it for expenses towards tax rebates.'
}];


export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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
          servicesRef.current?.querySelectorAll('.service-card') ?? [],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: servicesRef.current, start: 'top 78%' } }
        );

        gsap.fromTo(
          processRef.current?.querySelectorAll('.process-item') ?? [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: processRef.current, start: 'top 78%' } }
        );

        gsap.fromTo(
          faqRef.current?.querySelectorAll('.faq-item') ?? [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: faqRef.current, start: 'top 80%' } }
        );
      });
    };
    init();
    return () => {if (ctx) ctx.revert();};
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-10 overflow-hidden" aria-label="Services hero">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] blob-warm opacity-25" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] blob-accent opacity-35" />
          </div>
          <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="hero-item inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 text-accent text-xs font-semibold tracking-widest uppercase mb-6" style={{ opacity: 0 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              What We Offer
            </div>
            <h1 className="hero-item font-serif text-display font-light italic leading-[1.0] text-foreground mb-6" style={{ opacity: 0 }}>
              Support shaped around <span className="font-black not-italic text-primary">your journey.</span>
            </h1>
            <p className="hero-item max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed" style={{ opacity: 0 }}>
              No two cancer journeys are alike. Our services are designed to meet you exactly where you are — whether you're newly diagnosed, mid-treatment, in recovery, or supporting someone you love.
            </p>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-24 md:py-32 px-6 md:px-10 border-t border-border" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="font-serif text-section-title font-light leading-[1.0]">
                Our <span className="italic font-black text-primary">services</span>
              </h2>
            </div>
            <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.map((s) =>
              <div
                key={s.id}
                className={`service-card ${s.span} rounded-3xl p-8 md:p-10 flex flex-col gap-6 relative ${
                s.accent ?
                'bento-card' : 'bento-card'}`
                }
                style={{ opacity: 0 }}>
                {'badge' in s && s.badge && (
                  <div className="absolute top-0 right-0 flex items-center">
                    <div className="bg-primary text-primary-foreground text-[10px] font-semibold px-3 py-2 rounded-tr-3xl rounded-bl-2xl whitespace-nowrap">
                      {s.badge}
                    </div>
                  </div>
                )}
                
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <Icon name={s.icon as 'UserIcon'} size={24} className="text-primary" />
                      </div>
                    </div>
                    <span className={`text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                  s.accent ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`
                  }>
                      {s.eyebrow}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-accent text-sm font-medium italic mb-4">{s.subtitle}</p>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{s.body}</p>
                  </div>
                  <div className={`flex flex-col gap-6 mt-auto ${
                    s.span === 'lg:col-span-2' ? 'sm:flex-row' : 'sm:flex-row lg:flex-col 2xl:flex-row'
                  }`}>
                    <ul className="space-y-2.5 flex-1">
                      {s.features.map((f) =>
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                          <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon name="CheckIcon" size={10} className="text-primary" />
                          </div>
                          {f}
                        </li>
                    )}
                    </ul>
                    {'price' in s && s.price && (
                      <div className={`flex-shrink-0 flex flex-col items-center justify-center bg-primary rounded-2xl px-6 py-5 min-w-[130px] self-start ${
                        s.span === 'lg:col-span-2' ? 'sm:self-center' : 'sm:self-center lg:self-start 2xl:self-center'
                      }`}>
                        <span className="text-primary-foreground text-lg font-black leading-tight text-center">{s.price}</span>
                      </div>
                    )}
                  </div>
                  <Link href="/#booking" className="self-start text-sm mt-2 btn-primary">
                    Book Your Session Now
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                </div>
              )}
            </div>

            {/* Pay what you can afford notice */}
            <div className="mt-10 rounded-2xl p-6 border border-primary/20 bg-primary/5 flex items-start gap-3">
              <Icon name="HeartIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80 font-light leading-relaxed">
                Fees are in Rands (ZAR) and US Dollars ($). South African/African citizens are charged in Rands (ZAR) and all other countries in USD ($).{' '}
                We recognise that finances may be one of your concerns on a cancer journey. Do not make financial hardship a barrier to your recovery — speak to us about our{' '}
                <span className="font-semibold text-primary">&ldquo;Pay What You Can Afford&rdquo;</span> offer. Our goal is to help all in need of our services.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 md:py-32 px-6 md:px-10 border-t border-border" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                The Process
              </span>
              <h2 id="process-heading" className="font-serif text-section-title font-light leading-[1.0]">
                How it <span className="italic font-black text-primary">works</span>
              </h2>
            </div>
            <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) =>
              <div key={p.step} className="process-item relative" style={{ opacity: 0 }}>
                  {/* Connector line */}
                  {i < process.length - 1 &&
                <div className="hidden lg:block absolute top-8 left-[calc(100%+0.75rem)] w-6 h-px bg-border z-10" aria-hidden="true" />
                }
                  <div className="bento-card rounded-3xl p-7 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-4xl font-black text-primary/30 leading-none">{p.step}</span>
                      <div className="w-8 h-px bg-primary/30" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{p.body}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Image + Quote break */}
        <section className="py-0 overflow-hidden border-t border-border" aria-hidden="false">
          <div className="relative h-[400px] md:h-[500px]">
            <AppImage
              src="/assets/images/image-1786213055758.png"
              alt="Woman having an online video call coaching session on her laptop"
              fill
              className="object-cover object-center"
              sizes="100vw" />
            
            <div className="absolute inset-0 hero-scrim" />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <blockquote className="max-w-3xl text-center">
                <p className="font-serif text-2xl md:text-4xl font-bold italic text-black leading-relaxed">
                  &ldquo;The goal isn&apos;t to get back to who you were before. It&apos;s to discover who you are at the core and who you are becoming.&rdquo;
                </p>
                <footer className="mt-6 text-accent text-sm font-semibold tracking-wide">— Renny Letswalo</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 px-6 md:px-10 border-t border-border" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                Common Questions
              </span>
              <h2 id="faq-heading" className="font-serif text-section-title font-light leading-[1.0]">
                Things people <span className="italic font-black text-primary">ask us</span>
              </h2>
            </div>
            <div ref={faqRef} className="space-y-4">
              {faqs.map((faq) =>
              <div key={faq.q} className="faq-item bento-card rounded-2xl p-7" style={{ opacity: 0 }}>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="QuestionMarkCircleIcon" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-sm mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-10 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-section-title font-light italic leading-[1.0] mb-6">
              Not sure which service is <span className="font-black not-italic text-primary">right for you?</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
              Book a free 10-minute Discovery WhatsApp Call and we&apos;ll figure it out together. There&apos;s no wrong place to start.
            </p>
            <Link href="/#booking" className="btn-primary text-base px-8 py-4">
              Book a Free 10-Min WhatsApp Call Now
              <Icon name="ArrowRightIcon" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );

}
