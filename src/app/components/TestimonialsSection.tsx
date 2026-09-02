'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  context: string;
  location: string;
  quote: string;
  subtext?: string;
  image: string;
  imageAlt: string;
}

const testimonials: Testimonial[] = [
{
  id: 1,
  name: 'Khontso S',
  context: 'Breast Cancer, Stage 4',
  location: 'Bloemfontein, South Africa',
  quote:
  '"After having gone through multiple Chemo sessions, I started coaching with Renny and she gave me so much support, guidance with my diet and lifestyle changes during treatments to help restore my immune system. She did regular one on one telephonic sessions with me. She gave myself and family so much hope. 5 years on, I am still thriving."',
  image:
  "/assets/rocket-local/testimonial-south-african-woman.png",
  imageAlt: 'South African woman with a warm, resilient smile, natural light, healthy and thriving appearance'
},
{
  id: 2,
  name: 'M A Monareng',
  context: 'Renal Carcinoma Stage 4',
  location: 'Limpopo, South Africa',
  quote:
  '"I underwent chemo treatment for stage 4 renal cancer for a short period and stopped, as it was not helping. That\'s when Renny took over, and with her determined coaching — helping with nutritional diets and lifestyle changes I needed to make to allow my body to heal — she was incredibly supportive. She even attended Oncology sessions with me when I resumed chemo treatment. Within nine months there was no trace of cancer; tumours around the body had cleared and no cancer was detected. I am now six years on and in good health."',
  image: '/assets/images/monareng_testimonial.png',
  imageAlt: 'M A Monareng, older Black South African man, cancer survivor from Limpopo, South Africa'
},
{
  id: 3,
  name: 'Masonke L',
  context: 'Caregiver',
  location: 'Pretoria, South Africa',
  quote:
  '"Being a caregiver is a difficult task, even more so when it is your own child. While the task could have been easier, what makes it more difficult are the emotions experienced. Renny and her programmes have been incredibly helpful. She provided a comprehensive assessment and approach in helping me deal better with my task. I am in a better place emotionally to continue supporting my son."',
  image: '/assets/images/masonke_testimonial.png',
  imageAlt: 'Masonke L, elderly Black South African grandmother wearing a colourful African print blouse, warm and dignified expression, caregiver from Pretoria, South Africa'
},
{
  id: 4,
  name: 'Kayla H',
  context: 'Breast Cancer Stage 2',
  location: 'New York, USA',
  quote:
  '"Renny helped me get in touch with my emotions and assisted me to release my deep-seated emotions. Her process allowed me to cope better with treatment as I had a positive outlook and shift in perspective. She was really helpful at the most confusing and darkest time of my cancer journey."',
  image: "/assets/images/kayla_testimonial.png",
  imageAlt: 'Kayla H, young light skin tone mixed American woman with a warm hopeful smile, breast cancer survivor from New York'
},
{
  id: 5,
  name: 'Annika R',
  context: 'Breast Cancer, 3rd Time Diagnosed',
  location: 'Finland',
  quote:
  '"During the third round of cancer diagnosis I found myself in a dark place. Renny\'s holistic coaching helped me find my true self and find a purpose in life. I am eager to see where Renny\'s coaching will take me!"',
  image: "/assets/images/annika_testimonial.png",
  imageAlt: 'Annika R, middle-aged white woman with warm smile and natural expression, cancer survivor from Finland'
},
{
  id: 6,
  name: 'Janet K',
  context: 'Breast Cancer Diagnosis',
  location: 'Chicago, USA',
  quote:
  '"Holy M, Renny!! the surgeon said he found no cancer when he did the surgery."',
  subtext: 'Janet received this news, after surgery following an intensive emotional release healing process guided by Renny two weeks prior to her surgery.',
  image:
  "/assets/rocket-local/testimonial-american-woman.png",
  imageAlt: 'Janet K, American woman with a joyful, relieved expression, breast cancer survivor from Chicago'
}];


const stats = [
{ id: 'stat-satisfaction', target: 99, suffix: '%', label: 'Client Satisfaction' },
{ id: 'stat-compassionate', target: 100, suffix: '%', label: 'Compassionate Support' },
{ id: 'stat-years', target: 0, suffix: '', label: 'Years of Practice', display: 'Over 5 yrs' }];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statValues, setStatValues] = useState(stats.map(() => 0));
  const [showAllMobileTestimonials, setShowAllMobileTestimonials] = useState(false);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Heading reveal
        gsap.fromTo(
          sectionRef.current?.querySelector('.section-header') ?? [],
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
          }
        );

        // Testimonial cards stagger
        const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
        if (cards) {
          gsap.fromTo(
            cards,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              stagger: 0.2,
              ease: 'power4.out',
              scrollTrigger: { trigger: '#stories', start: 'top 75%' }
            }
          );
        }

        // Stats counter
        stats.forEach((stat, i) => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
            onUpdate: () => {
              setStatValues((prev) => {
                const next = [...prev];
                next[i] = Math.floor(obj.val);
                return next;
              });
            }
          });
        });
      }, sectionRef);
    };

    init();
    return () => {if (ctx) ctx.revert();};
  }, []);

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 border-t border-border overflow-hidden"
      aria-labelledby="stories-heading">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-header text-center mb-16 md:mb-24">
          <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
            Voices from the Journey
          </span>
          <h2
            id="stories-heading"
            className="font-serif text-display font-light leading-[0.9]">
            
            Their Words,{' '}
            <span className="italic font-black text-primary">Not Ours.</span>
          </h2>
        </div>

        {/* Main testimonials + side image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start mb-20 md:mb-28">
          {/* Testimonial cards */}
          <div className="space-y-12">
            {testimonials.map((t, index) =>
              <React.Fragment key={t.id}>
              <div className={`testimonial-card group ${!showAllMobileTestimonials && index >= 3 ? 'hidden lg:block' : ''}`}>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
                    <AppImage
                    src={t.image}
                    alt={t.imageAlt}
                    width={80}
                    height={80}
                    className="testimonial-img w-full h-full object-cover" />
                  
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-foreground">{t.name}</h4>
                    <p className="text-primary text-xs font-semibold tracking-wide">{t.context}</p>
                    <p className="text-muted-foreground text-xs">{t.location}</p>
                  </div>
                </div>
                <blockquote>
                  <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-foreground/85">
                    {t.quote}
                  </p>
                  {t.subtext &&
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed not-italic border-l-2 border-primary/30 pl-4">
                      {t.subtext}
                    </p>
                }
                </blockquote>
                <div className="w-12 h-px bg-primary/40 mt-6" />
              </div>
              {index === 2 && (
                <div className="lg:hidden rounded-3xl overflow-hidden aspect-[4/3] relative image-zoom border border-border/70">
                  <AppImage
                    src="/assets/images/image-1786145790657.png"
                    alt="Sunlit forest path with warm golden light filtering through tall trees, serene and hopeful atmosphere, rich deep shadows"
                    fill
                    className="object-cover"
                    sizes="100vw" />

                  <div className="absolute inset-0 scrim-bottom opacity-40" />
                </div>
              )}
              </React.Fragment>
            )}
            {!showAllMobileTestimonials && testimonials.length > 3 && (
              <button
                type="button"
                onClick={() => setShowAllMobileTestimonials(true)}
                className="lg:hidden btn-outline text-sm mx-auto flex">
                Read More Stories
              </button>
            )}
          </div>

          {/* Side image with decorative elements */}
          <div className="relative hidden lg:block sticky top-32">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] relative image-zoom">
              <AppImage
                src="/assets/images/image-1786145790657.png"
                alt="Sunlit forest path with warm golden light filtering through tall trees, serene and hopeful atmosphere, rich deep shadows"
                fill
                className="object-cover"
                sizes="50vw" />
              
              <div className="absolute inset-0 scrim-bottom opacity-60" />
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 blob-warm opacity-50 -z-10" aria-hidden="true" />
            <div className="absolute -bottom-12 -right-8 w-64 h-64 blob-accent -z-10" aria-hidden="true" />
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-16 border-t border-border"
          aria-label="Program statistics">
          
          {stats.map((stat, i) =>
          <div key={stat.id} className="text-left">
              <div className="stat-number text-primary mb-2" aria-live="polite">
                {'display' in stat && stat.display ? stat.display : <>{statValues[i]}{stat.suffix}</>}
              </div>
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest border-t border-border pt-3">
                {stat.label}
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-28 text-center py-16 md:py-20 px-8 rounded-3xl bg-primary/5 border border-primary/15">
          <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Your Story Awaits
          </p>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-foreground">
            Get ready to write your{' '}
            <span className="italic font-black text-primary">positive journey's</span>{' '}
            story with us.
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            When you feel ready, we're here to walk alongside you — at your own pace, on your own terms.
          </p>
          <a
            href="/contact#booking"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200">
            Book a Free 10-Min WhatsApp Call Now
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>);

}
