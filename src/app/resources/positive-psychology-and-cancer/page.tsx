import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Positive Psychology in Cancer Care: More Than Just Thinking Happy Thoughts | ThriveThroughCancer',
  description: 'Positive psychology is a rigorous science of wellbeing that offers cancer patients evidence-based tools to build meaning, resilience, and genuine flourishing — even in the hardest seasons.',
  keywords: ['positive psychology', 'PERMA model', 'cancer wellbeing', 'resilience', 'cancer care', 'Martin Seligman'],
  openGraph: {
    title: 'Positive Psychology in Cancer Care: More Than Just Thinking Happy Thoughts',
    description: 'Positive psychology is a rigorous science of wellbeing that offers cancer patients evidence-based tools to build meaning, resilience, and genuine flourishing — even in the hardest seasons.',
    url: 'https://thrivethroughcancer.co.za/resources/positive-psychology-and-cancer',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Positive Psychology in Cancer Care: More Than Just Thinking Happy Thoughts',
    description: 'Positive psychology is a rigorous science of wellbeing that offers cancer patients evidence-based tools to build meaning, resilience, and genuine flourishing — even in the hardest seasons.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/positive-psychology-and-cancer',
  },
};

export default function PositivePsychologyAndCancerPage() {
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
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border bg-primary/15 text-primary border-primary/25">
                  Positive Psychology
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="StarIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  8 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                Positive Psychology in Cancer Care: <span className="font-black not-italic text-primary">More Than Just Thinking Happy Thoughts</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Positive psychology is not toxic positivity. It is a rigorous science of wellbeing that offers cancer patients evidence-based tools to build meaning, resilience, and genuine flourishing — even in the hardest seasons.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Positive Psychology', 'PERMA', 'Wellbeing'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Positive psychology is often misunderstood as the instruction to &quot;stay positive&quot; — a phrase that can feel dismissive and even harmful to someone facing a life-threatening illness. True positive psychology is something entirely different.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Founded by Dr. Martin Seligman, positive psychology is the scientific study of what allows individuals and communities to thrive. Its PERMA model identifies five core elements of wellbeing: Positive Emotions, Engagement, Relationships, Meaning, and Achievement.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                For cancer patients, each of these elements becomes both more challenging and more important. Positive emotions are harder to access but more valuable than ever. Engagement — finding flow in daily activities — can counteract the sense of life being on hold. Relationships often deepen under the pressure of illness, but also strain. Meaning-making is one of the most powerful predictors of psychological resilience in the face of serious illness.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Research in psycho-oncology has found that interventions based on positive psychology principles significantly reduce depression and anxiety in cancer patients, improve quality of life, and in some studies, correlate with better physical outcomes.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In our coaching work, we draw on positive psychology not to bypass grief or fear, but to build the psychological resources that allow you to hold difficulty without being consumed by it. Flourishing and suffering are not opposites — they can coexist, and learning to cultivate one while processing the other is a profound act of self-care.
              </p>
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
                  Book a free discovery call with Renny to explore how positive psychology coaching can support your cancer journey.
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
