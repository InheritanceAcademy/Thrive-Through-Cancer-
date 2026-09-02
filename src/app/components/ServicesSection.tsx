'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const services = [
{
  id: 'featured',
  tag: 'Most Requested',
  title: 'One-on-One Coaching',
  subtitle: 'Personalised Support',
  description:
  'Deeply personal 60-minute sessions designed around your specific diagnosis, treatment phase, and goals. Build a roadmap from fear to clarity, one conversation at a time.',
  image:
  "/assets/images/image-1786213879010.png",
  imageAlt:
  'Man engaged in an online video call coaching session on laptop',
  cta: 'Book a Session',
  href: '#booking'
},
{
  id: 'support',
  tag: 'For Caregivers',
  title: 'Caregiver Support',
  description: 'You cannot pour from an empty cup. Dedicated sessions for those holding space for a loved one.',
  image:
  "/assets/rocket-local/mindfulness-resilience.png",
  imageAlt:
  'Gentle hands held together in a warm, dimly lit room conveying tenderness and caregiver support',
  href: '#booking'
},
{
  id: 'nutrition',
  tag: 'Evidence-Based',
  title: 'Wellness & Lifestyle',
  description: 'Cancer-specific wellness lifestyle strategies to support treatment and recovery.',
  image:
  "/assets/rocket-local/functional-medicine-support.png",
  imageAlt:
  'Colorful fresh vegetables and fruits arranged on a bright wooden table in natural morning light, vibrant and nourishing',
  href: '#booking'
},
{
  id: 'mindfulness',
  tag: 'Spiritual, Mind & Body',
  title: 'Mindfulness & Resilience',
  description:
  'Guided breathwork, prayer and meditation practices, and cognitive tools proven to reduce treatment-related anxiety, fatigue, and promote recovery.',
  image:
  "/assets/rocket-local/psycho-oncology-counselling.png",
  imageAlt:
  'Person in peaceful meditation pose at golden hour on a hilltop, warm amber sky, serene and expansive mood',
  href: '#booking'
}];


export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%'
            }
          }
        );

        const cards = bentoRef.current?.querySelectorAll('.bento-card');
        if (cards) {
          gsap.fromTo(
            cards,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: bentoRef.current,
                start: 'top 80%'
              }
            }
          );
        }
      }, sectionRef);
    };

    init();
    return () => {if (ctx) ctx.revert();};
  }, []);

  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10"
      aria-labelledby="services-heading">
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headingRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24"
          style={{ opacity: 0 }}>
          
          <div className="lg:col-span-7">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Services
            </span>
            <h2
              id="services-heading"
              className="font-serif text-display font-light leading-[0.9]">
              
              Every Path Is <br />
              <span className="italic font-black text-primary">Different.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground text-base font-light leading-relaxed border-l-2 border-primary/30 pl-6">We meet you exactly where you are. Whether you're navigating a new diagnosis, in treatment for a while, rebuilding after treatment, or supporting someone you love — there's a path here for you.


            </p>
          </div>
        </div>

        {/* BENTO GRID AUDIT:
             Array has 4 cards: [FeaturedCard cs-2 rs-2, SupportCard cs-1, NutritionCard cs-1, MindfulnessCard cs-3]
             Row 1: [col-1-2: FeaturedCard cs-2 rs-2] [col-3: SupportCard cs-1]
             Row 2: [col-1-2: FeaturedCard continued] [col-3: NutritionCard cs-1]
             Row 3: [col-1-3: MindfulnessCard cs-3]
             Placed 4/4 cards ✓
            */}
        <div
          ref={bentoRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          
          {/* CARD 1 — Featured: col-span-2, row-span-2 */}
          {/* Row 1 col-1: FeaturedCard cs-2 rs-2 */}
          <div className="md:col-span-2 md:row-span-2 bento-card rounded-3xl overflow-hidden relative group min-h-[500px] md:min-h-[640px]">
            <div className="image-zoom absolute inset-0">
              <AppImage
                src={featured.image}
                alt={featured.imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: '50% 30%' }}
                sizes="(max-width: 768px) 100vw, 66vw" />
              
            </div>
            <div className="absolute inset-0 scrim-bottom" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
              <span className="inline-block text-primary bg-primary/20 border border-primary/30 rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-4">
                {featured.tag}
              </span>
              <h3 className="font-serif text-3xl md:text-5xl font-black text-foreground mb-2">
                {featured.title}
              </h3>
              <p className="font-serif text-lg italic text-accent mb-4">{featured.subtitle}</p>
              <p className="text-foreground/75 text-sm md:text-base font-light leading-relaxed max-w-lg mb-8">
                {featured.description}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="/services"
                  className="btn-outline text-sm"
                  aria-label={`Learn more about ${featured.title}`}>
                  Learn More
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
                <a
                  href={featured.href}
                  className="btn-primary text-sm"
                  aria-label={`${featured.cta} for ${featured.title}`}>
                  
                  {featured.cta}
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2 — Support: col-1, row-1 (right column, row 1) */}
          {/* Row 1 col-3: SupportCard cs-1 */}
          <div className="bento-card rounded-3xl overflow-hidden relative group min-h-[300px] md:min-h-0 h-full">
            <div className="image-zoom absolute inset-0">
              <AppImage
                src={rest[0].image}
                alt={rest[0].imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
            </div>
            <div className="absolute inset-0 scrim-bottom" />
            <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
              <span className="inline-block w-fit rounded-full bg-black/60 px-3 py-1 text-[11px] font-extrabold tracking-[0.24em] uppercase text-white shadow-sm backdrop-blur-sm mb-3">
                {rest[0].tag}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                {rest[0].title}
              </h3>
              <p className="text-foreground/65 text-sm font-light leading-relaxed">
                {rest[0].description}
              </p>
            </div>
          </div>

          {/* CARD 3 — Nutrition: col-1, row-2 (right column, row 2) */}
          {/* Row 2 col-3: NutritionCard cs-1 */}
          <div className="bento-card rounded-3xl overflow-hidden relative group min-h-[300px] md:min-h-0 h-full">
            <div className="image-zoom absolute inset-0">
              <AppImage
                src={rest[1].image}
                alt={rest[1].imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
            </div>
            <div className="absolute inset-0 scrim-bottom" />
            <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
              <span className="inline-block w-fit rounded-full bg-black/60 px-3 py-1 text-[11px] font-extrabold tracking-[0.24em] uppercase text-white shadow-sm backdrop-blur-sm mb-3">
                {rest[1].tag}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                {rest[1].title}
              </h3>
              <p className="text-foreground/65 text-sm font-light leading-relaxed">
                {rest[1].description}
              </p>
            </div>
          </div>

          {/* CARD 4 — Mindfulness: col-span-3 (full width bottom row) */}
          {/* Row 3 col-1-3: MindfulnessCard cs-3 */}
          <div className="md:col-span-3 bento-card rounded-3xl overflow-hidden relative group min-h-[280px]">
            <div className="image-zoom absolute inset-0">
              <AppImage
                src={rest[2].image}
                alt={rest[2].imageAlt}
                fill
                className="object-cover object-center"
                sizes="100vw" />
              
            </div>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,13,11,0.94) 0%, rgba(15,13,11,0.72) 48%, rgba(15,13,11,0.18) 100%)' }} />
            <div className="absolute inset-0 flex items-center z-10 px-8 md:px-14">
              <div className="max-w-xl">
                <span className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  {rest[2].tag}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {rest[2].title}
                </h3>
                <p className="text-sm md:text-base font-light leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.88)' }}>
                  {rest[2].description}
                </p>
                <a href={rest[2].href} className="btn-on-dark text-sm" aria-label={`Learn more about ${rest[2].title}`}>
                  Learn More
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
