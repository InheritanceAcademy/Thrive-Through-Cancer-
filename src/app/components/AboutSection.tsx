'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const credentials = [
{ icon: 'CheckBadgeIcon', label: 'Board Certified Health Coach - National Board for Health & Wellness Coaching (NBHWC)' },
{ icon: 'AcademicCapIcon', label: 'Functional Medicine Certified Health Coach – Functional Medicine Coaching Academy' },
{ icon: 'HeartIcon', label: 'Radical Remission Health Coach and Teacher – Radical Remission Project' },
{ icon: 'StarIcon', label: 'Master\'s in Psycho-Oncology – Tech School of Medicine' },
{ icon: 'AcademicCapIcon', label: 'Post Graduate Diploma in Public Management – Wits Business School' },
{ icon: 'UserGroupIcon', label: 'BA in Psychology and Communication – University of the Northwest' },
{ icon: 'ClockIcon', label: 'Over 5 years in Coaching Practice' }];


const philosophy = [
{
  title: 'Whole-Person Care',
  body: 'Cancer affects every dimension of life. Our approach addresses body, mind, emotions, relationships, and spirit together — never in isolation.'
},
{
  title: 'Evidence-Based Methods',
  body: 'Every strategy is grounded in current research and functional medicine principles and psycho-oncology best practices.'
}];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
          }
        );

        gsap.fromTo(
          contentRef.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
          }
        );

        // Parallax on image
        gsap.to(imageRef.current?.querySelector('img') ?? [], {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          },
          yPercent: -12,
          ease: 'none'
        });
      }, sectionRef);
    };

    init();
    return () => {if (ctx) ctx.revert();};
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 border-t border-border overflow-hidden"
      aria-labelledby="about-heading">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Image Column */}
        <div ref={imageRef} className="relative" style={{ opacity: 0 }}>
          {/* Main image */}
          <div className="rounded-3xl overflow-hidden aspect-[4/5] relative image-zoom">
            <AppImage
              src="/assets/images/109_copyNEW_copy1-1786723453929.jpg"
              alt="Renny Letswalo, professional cancer health coach"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
          </div>

          {/* Floating credential card */}
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

          {/* Decorative blob */}
          <div
            className="absolute -top-10 -left-10 w-64 h-64 blob-warm opacity-40 -z-10"
            aria-hidden="true" />
          
        </div>

        {/* Content Column */}
        <div ref={contentRef} className="flex flex-col justify-between h-full gap-10" style={{ opacity: 0 }}>
          <div>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
              About Your Coach
            </span>
            <h2
              id="about-heading"
              className="font-serif text-section-title font-light leading-[1.0] mb-6">
              
              Meet <span className="italic font-black text-primary">Renny Letswalo</span>
            </h2>
            <p className="text-muted-foreground text-base font-light leading-relaxed">After watching her mother-in-love navigate cancer treatment with little guidance beyond clinical care, Renny dedicated her career to filling that gap. Researching on lifestyle factors supportive of individuals on a cancer journey and developed evidence-based Physical, Emotional, Mental, and Spiritual techniques. She further pursued studies in Root Causes of disease and Psycho-Oncology.

            </p>
            <p className="text-muted-foreground text-base font-light leading-relaxed">
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

          {/* Philosophy tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {philosophy.map((p) =>
            <div key={p.title} className="rounded-2xl p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="w-6 h-0.5 bg-primary mb-3" />
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">{p.title}</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{p.body}</p>
              </div>
            )}
          </div>

          <a href="#booking" className="btn-primary self-start text-sm">
            Start Your Journey
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>);

}
