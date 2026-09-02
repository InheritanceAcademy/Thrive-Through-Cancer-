'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsap: any;
    let ctx: any;

    const initGSAP = async () => {
      const gsapModule = await import('gsap');
      gsap = gsapModule.gsap;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo(
          [line1Ref.current, line2Ref.current, line3Ref.current],
          { y: 110, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            stagger: 0.18,
            ease: 'power4.out'
          }
        ).
        fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.8'
        ).
        fromTo(
          btnsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          '-=0.7'
        ).
        fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.4'
        );
      }, sectionRef);
    };

    initGSAP();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-28 pb-24"
      aria-label="Hero section">
      
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/image-1786145790657.png"
          alt="Bridge through a lush forest path, symbolizing a journey toward healing and hope"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
        {/* Scrim overlay — dark enough for white text contrast */}
        <div className="absolute inset-0 hero-scrim" />
        {/* Warm atmospheric blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-warm opacity-60" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 blob-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full">
        {/* Eyebrow */}
        <div className="overflow-hidden mb-6">
          <div
            ref={line1Ref}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 text-accent text-xs font-semibold tracking-widest uppercase"
            style={{ opacity: 0 }}>
            
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Compassionate Psycho-Oncology Coaching
          </div>
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-4">
          <h1
            ref={line2Ref}
            className="font-serif text-hero font-light italic leading-[0.88] text-foreground clip-reveal"
            style={{ opacity: 0 }}>
            
            You Don&apos;t Have to
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <div
            ref={line3Ref}
            className="font-serif text-hero font-black not-italic leading-[0.88] text-primary text-glow-primary clip-reveal"
            style={{ opacity: 0 }}>
            
            Face Cancer Alone
          </div>
        </div>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 font-light leading-relaxed mb-12"
          style={{ opacity: 0 }}>Whether you're newly diagnosed, in treatment, recovering, or caring for someone you love — ThriveThroughCancer provides personalised psycho-emotional-spiritual support and evidence-based wellness strategies for your unique journey.




        </p>

        {/* CTAs */}
        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ opacity: 0 }}>
          
          <a href="#booking" className="btn-primary text-base px-8 py-4">
Book a Free 10-Min WhatsApp Call
            <Icon name="ArrowRightIcon" size={18} />
          </a>
          <a href="#services" className="btn-outline text-base px-8 py-4">
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-10"
        style={{ opacity: 0 }}
        aria-hidden="true">
        
        <span className="text-foreground/40 text-xs tracking-[0.4em] uppercase font-medium -mb-2.5">Scroll</span>
        <div className="w-px h-12 bg-foreground/20 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-full bg-primary scroll-line-track" />
        </div>
      </div>
    </section>);

}
