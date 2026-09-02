'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';


const credentials = [
{ icon: 'CheckBadgeIcon', label: 'Board Certified Health Coach - National Board for Health & Wellness Coaching (NBHWC)' },
{ icon: 'AcademicCapIcon', label: 'Functional Medicine Certified Health Coach – Functional Medicine Coaching Academy' },
{ icon: 'HeartIcon', label: 'Radical Remission Health Coach and Teacher – Radical Remission Project' },
{ icon: 'StarIcon', label: "Master\'s in Psycho-Oncology – Tech School of Medicine" },
{ icon: 'AcademicCapIcon', label: 'Post Graduate Diploma in Public Management – Wits Business School' },
{ icon: 'UserGroupIcon', label: 'BA in Psychology and Communication – University of the Northwest' },
{ icon: 'ClockIcon', label: 'Over 5 years in Coaching Practice' }];


const milestones = [
{
  title: '12 PEMS Conditioning Gems',
  body: 'The PEMS framework addresses the four core human dimensions — Physical, Emotional, Mental, and Spiritual. These 12 evidence-informed conditioning Gems are woven into clients recovery plan, helping build resilience, restore balance, and activate the body\'s innate healing intelligence.'
},
{
  title: 'Functional Medicine Coaching',
  body: 'Functional Medicine looks at the root causes of imbalance rather than managing symptoms in isolation, with Coaching helping explore changes required with nutrition, lifestyle, environment, and relationships. This approach empowers personalised changes that support immune system, reduce inflammation, and optimise body\'s capacity to heal and thrive alongside conventional treatment.'
},
{
  title: '10 Radical Remission Project Findings',
  body: 'Drawn from Dr. Kelly Turner\'s landmark research into thousands of documented radical remissions, these 10 key healing factors — including radically changing the diet, following intuition, releasing suppressed emotions, increasing positive emotions and deepening spiritual connection — form a powerful evidence-based framework for supporting recovery and quality of life beyond diagnosis.'
},
{
  title: 'Psycho-Emotional-Spiritual Healing Process',
  body: 'Cancer touches the whole person — not just the body. This healing process integrates psycho-oncology principles, emotional release work, and spiritual inquiry to help you process fear, grief, and uncertainty while reconnecting with your sense of purpose, identity, and inner strength. It is a compassionate, guided journey toward wholeness at every phase of the cancer journey.'
},
{
  title: 'Mind-Body-Spirit Techniques',
  body: 'This approach draws on three powerful, science-backed fields working together. Positive Psychology\'s with focus on Positive Emotions, Engagement, Relationships, Meaning, and Achievement - building emotional well-being and a life that feels worth living. Neuroscience techniques harnessing the brain\'s remarkable ability to rewire itself — known as neuroplasticity — to build new thought patterns, reduce stress responses, and strengthen capacity for resilience and healing. Infused with Spiritual Science of prayer and meditation driving the support of the whole person\'s healing.'
}];


const values = [
{
  title: 'Whole-Person Care',
  body: 'Cancer affects every dimension of life — body, mind, emotions, relationships, and spirit. We address all of it, never in isolation.',
  accent: 'bg-primary/10 border-primary/20'
},
{
  title: 'Evidence-Based Methods',
  body: 'Every strategy is grounded in current research, functional medicine principles and psycho-oncology best practices.',
  accent: 'bg-accent/10 border-accent/20'
},
{
  title: 'Radical Engagement',
  body: 'You are not a diagnosis — you are a whole being with inherent health to allow you to not only survive but thrive through cancer.',
  accent: 'bg-primary/10 border-primary/20'
},
{
  title: 'Practical Empowerment',
  body: 'We teach and share tools you can use — on hard days, in waiting rooms, and in the quiet moments between appointments.',
  accent: 'bg-accent/10 border-accent/20'
}];


export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Hero entrance
        gsap.fromTo(
          heroRef.current?.querySelectorAll('.hero-item') ?? [],
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
        );

        // Story section
        gsap.fromTo(
          storyRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: storyRef.current, start: 'top 78%' } }
        );

        // Values cards stagger
        gsap.fromTo(
          valuesRef.current?.querySelectorAll('.value-card') ?? [],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: valuesRef.current, start: 'top 78%' } }
        );

        // Timeline items
        gsap.fromTo(
          timelineRef.current?.querySelectorAll('.timeline-item') ?? [],
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: timelineRef.current, start: 'top 78%' } }
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
        {/* Page Hero */}
        <section
          className="relative pt-40 pb-24 px-6 md:px-10 overflow-hidden"
          aria-label="About page hero">
          
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] blob-warm opacity-30" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blob-accent opacity-40" />
          </div>
          <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="hero-item inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 text-accent text-xs font-semibold tracking-widest uppercase mb-6" style={{ opacity: 0 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Our Story
            </div>
            <h1 className="hero-item font-serif text-display font-light italic leading-[1.0] text-foreground mb-6" style={{ opacity: 0 }}>
              Built from <span className="font-black not-italic text-primary">lived experience.</span>
            </h1>
            <p className="hero-item max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed" style={{ opacity: 0 }}>ThriveThroughCancer was born not in a boardroom or in a hospital, but at home caring for someone in a journey of cancer — from the belief that every person facing cancer deserves a guide who truly understands the journey.

            </p>
          </div>
        </section>

        {/* Coach Story */}
        <section
          className="py-24 md:py-32 px-6 md:px-10 border-t border-border"
          aria-labelledby="story-heading">
          
          <div ref={storyRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center" style={{ opacity: 0 }}>
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] relative image-zoom">
                <AppImage
                  src="/assets/images/109_copyNEW_copy1-1786723453929.jpg"
                  alt="Renny Letswalo, oncology health coach and founder of ThriveThroughCancer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-4 md:-right-10 glass-card rounded-2xl p-6 max-w-[220px] shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckBadgeIcon" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-bold leading-tight">NBHWC Certified</p>
                    <p className="text-muted-foreground text-xs">Since 2023</p>
                  </div>
                </div>
                <div className="w-full h-px bg-border mb-3" />
                <p className="text-accent text-xs font-semibold tracking-wide">Psycho-Oncology Specialist</p>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 blob-warm opacity-40 -z-10" aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                  About Your Coach
                </span>
                <h2 id="story-heading" className="font-serif text-section-title font-light leading-[1.0] mb-6">
                  Meet <span className="italic font-black text-primary">Renny Letswalo</span>
                </h2>
                <p className="text-muted-foreground text-base font-light leading-relaxed mb-4">
                  After watching her mother-in-love navigate cancer treatment with little guidance beyond clinical care, Renny dedicated her career to filling that gap. Researching on lifestyle factors supportive of individuals on a cancer journey and developed evidence-based Physical, Emotional, Mental, and Spiritual techniques. She further pursued studies in Root Causes of disease and Psycho-Oncology.
                </p>
                <p className="text-muted-foreground text-base font-light leading-relaxed mb-4">
                  Her simple belief is — When people are empowered with knowledge and support they are able to draw from within to thrive in whatever situation they face. This is no different for anyone going through Cancer.
                </p>
              </div>

              {/* Credentials */}
              <ul className="space-y-4" aria-label="Credentials and certifications">
                {credentials.map((c) =>
                <li key={c.label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon as 'AcademicCapIcon'} size={18} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground/85 font-medium">{c.label}</span>
                  </li>
                )}
              </ul>

              <Link href="/#booking" className="btn-primary self-start text-sm">
                Start Your Journey
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          className="py-24 md:py-32 px-6 md:px-10 border-t border-border"
          aria-labelledby="values-heading">
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                What We Believe
              </span>
              <h2 id="values-heading" className="font-serif text-section-title font-light leading-[1.0]">
                Our <span className="italic font-black text-primary">guiding principles</span>
              </h2>
            </div>
            <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) =>
              <div
                key={v.title}
                className={`value-card rounded-3xl p-8 border ${v.accent}`}
                style={{ opacity: 0 }}>
                
                  <div className="w-8 h-0.5 bg-primary mb-5" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{v.body}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section
          className="py-24 md:py-32 px-6 md:px-10 border-t border-border"
          aria-labelledby="timeline-heading">
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                Our Coaching Approach
              </span>
              <h2 id="timeline-heading" className="font-serif text-section-title font-light leading-[1.0]">
                What we have packed for <span className="italic font-black text-primary">you</span>
              </h2>
            </div>
            <div ref={timelineRef} className="relative">
              {/* Vertical line */}
              <div className="absolute left-[1.375rem] top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />
              <div className="space-y-10">
                {milestones.map((m, i) =>
                <div key={m.title} className="timeline-item flex gap-8 items-start" style={{ opacity: 0 }}>
                    {/* Number badge */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center z-10">
                        <span className="text-primary text-xs font-bold">{i + 1}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="bento-card rounded-2xl p-6 flex-1">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-10 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-section-title font-light italic leading-[1.0] mb-6">
              Ready for a thriving <span className="font-black not-italic text-primary">next chapter of your life?</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
              A free 10-minute Discovery WhatsApp Call is the first step. No pressure, no commitment — just a conversation about where you are and where you want to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#booking" className="btn-primary text-base px-8 py-4">
                Book a Free 10-Min WhatsApp Call Now
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link href="/services" className="btn-outline text-base px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}
