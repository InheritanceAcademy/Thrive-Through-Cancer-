import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: '8 Evidence-Based Wellness Practices for Life During Cancer Treatment | ThriveThroughCancer',
  description: 'These eight evidence-based practices support your body and mind through cancer treatment — gently and consistently, without adding to your burden.',
  keywords: ['wellness during cancer treatment', 'cancer self-care', 'treatment support', 'cancer fatigue', 'mindfulness cancer', 'cancer nutrition'],
  openGraph: {
    title: '8 Evidence-Based Wellness Practices for Life During Cancer Treatment',
    description: 'These eight evidence-based practices support your body and mind through cancer treatment — gently and consistently, without adding to your burden.',
    url: 'https://thrivethroughcancer.co.za/resources/wellness-tips-during-treatment',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '8 Evidence-Based Wellness Practices for Life During Cancer Treatment',
    description: 'These eight evidence-based practices support your body and mind through cancer treatment — gently and consistently, without adding to your burden.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/wellness-tips-during-treatment',
  },
};

const practices = [
  {
    number: 1,
    title: 'Prioritise sleep above all else',
    body: 'Sleep is when the body repairs, the immune system consolidates, and the brain processes emotional experience. If treatment is disrupting your sleep, this is worth addressing directly with your care team and your coach.',
  },
  {
    number: 2,
    title: 'Move gently, every day',
    body: 'You do not need to exercise intensely. A 15-minute walk, gentle yoga, or even stretching in bed activates the lymphatic system, reduces fatigue, and releases endorphins. The research on movement and cancer outcomes is among the most consistent in oncology.',
  },
  {
    number: 3,
    title: 'Eat anti-inflammatory foods',
    body: 'Reduce sugar, processed foods, and alcohol. Increase vegetables, quality protein, healthy fats, and fibre. This is not about perfection — it is about giving your body the building blocks it needs.',
  },
  {
    number: 4,
    title: 'Practice daily mindfulness',
    body: 'Even five minutes of focused breathing activates the parasympathetic nervous system, reducing cortisol and creating a physiological environment more conducive to healing.',
  },
  {
    number: 5,
    title: 'Stay connected',
    body: 'Isolation worsens outcomes. Maintain relationships, even when you feel like withdrawing. Let people help you.',
  },
  {
    number: 6,
    title: 'Journal your experience',
    body: 'Writing about difficult emotions has been shown to reduce psychological distress and improve immune function. You do not need to write beautifully — you just need to write honestly.',
  },
  {
    number: 7,
    title: 'Find meaning in small things',
    body: 'Meaning is not found only in grand purpose. It lives in a cup of tea, a conversation, a moment of beauty. Training your attention toward these moments is a neuroplasticity practice.',
  },
  {
    number: 8,
    title: 'Work with a coach',
    body: 'Having a structured, supportive relationship dedicated entirely to your wellbeing is one of the most evidence-based things you can do for your quality of life during treatment.',
  },
];

export default function WellnessTipsDuringTreatmentPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="relative pt-40 pb-16 px-6 md:px-10 overflow-hidden border-b border-border" aria-label="Article hero">
            <div className="absolute inset-0 z-0" aria-hidden="true">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] blob-warm opacity-25" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Link href="/resources" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1.5">
                  <Icon name="ArrowLeftIcon" size={13} />
                  Resources
                </Link>
                <span className="text-muted-foreground/40 text-xs">›</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border bg-accent/15 text-accent border-accent/25">
                  Wellness Tips
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="SparklesIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  5 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                8 Evidence-Based Wellness Practices for Life <span className="font-black not-italic text-primary">During Cancer Treatment</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Treatment is exhausting. These eight practices are not about doing more — they are about doing the right things, gently and consistently, to support your body and mind through one of the hardest seasons of your life.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Wellness', 'Self-Care', 'Treatment Support'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-5">
              {practices.map((practice) => (
                <div key={practice.number} className="rounded-2xl border border-border bg-card/30 p-6 flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {practice.number}
                  </span>
                  <div>
                    <h2 className="font-serif text-base font-semibold text-foreground mb-2">{practice.title}</h2>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{practice.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-6 md:px-10 border-t border-border" aria-label="Call to action">
            <div className="max-w-3xl mx-auto rounded-3xl border border-primary/30 bg-primary/5 p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 z-0" aria-hidden="true">
                <div className="absolute top-0 right-0 w-48 h-48 blob-warm opacity-20" />
              </div>
              <div className="relative z-10">
                <h2 className="font-serif text-2xl font-light italic leading-snug mb-3">
                  Ready to put this <span className="font-black not-italic text-primary">knowledge into practice?</span>
                </h2>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-lg mx-auto mb-6">
                  Book a free discovery call with Renny to build a personalised wellness plan for your treatment journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/#booking" className="btn-primary text-sm px-7 py-3.5 inline-flex items-center gap-2">
                    Book a Free Discovery WhatsApp Call
                    <Icon name="ArrowRightIcon" size={15} />
                  </Link>
                  <Link href="/resources" className="btn-secondary text-sm px-7 py-3.5 inline-flex items-center gap-2">
                    <Icon name="ArrowLeftIcon" size={15} />
                    Back to Resources
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
