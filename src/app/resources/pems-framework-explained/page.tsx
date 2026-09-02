import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'The PEMS Framework: Healing the Whole Person Through Cancer | ThriveThroughCancer',
  description: 'Physical. Emotional. Mental. Spiritual. Cancer affects all four dimensions of human experience. The PEMS framework is our evidence-informed approach to whole-person healing.',
  keywords: ['PEMS framework', 'whole-person healing', 'cancer coaching framework', 'physical emotional mental spiritual', 'holistic cancer care'],
  openGraph: {
    title: 'The PEMS Framework: Healing the Whole Person Through Cancer',
    description: 'Physical. Emotional. Mental. Spiritual. Cancer affects all four dimensions of human experience. The PEMS framework is our evidence-informed approach to whole-person healing.',
    url: 'https://thrivethroughcancer.co.za/resources/pems-framework-explained',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The PEMS Framework: Healing the Whole Person Through Cancer',
    description: 'Physical. Emotional. Mental. Spiritual. Cancer affects all four dimensions of human experience. The PEMS framework is our evidence-informed approach to whole-person healing.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/pems-framework-explained',
  },
};

const dimensions = [
  {
    letter: 'P',
    label: 'Physical',
    description: 'We address nutrition, movement, sleep, and the management of treatment side effects. We draw on functional medicine principles to support the body\'s healing environment and reduce inflammation.',
  },
  {
    letter: 'E',
    label: 'Emotional',
    description: 'We create space for the full range of emotional experience — fear, grief, anger, hope, gratitude — without bypassing or suppressing any of it. Emotional processing is not weakness; it is one of the most powerful healing tools available.',
  },
  {
    letter: 'M',
    label: 'Mental',
    description: 'We work with thought patterns, beliefs, and the stories we tell ourselves about illness and recovery. Using neuroplasticity-based techniques, we help clients build new mental frameworks that support resilience rather than reinforce fear.',
  },
  {
    letter: 'S',
    label: 'Spiritual',
    description: 'We do not impose any particular spiritual tradition. Instead, we explore what gives you meaning, what connects you to something larger than yourself, and how to deepen that connection during a time when it is most needed.',
  },
];

export default function PemsFrameworkExplainedPage() {
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
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border bg-primary/20 text-primary border-primary/30">
                  Cancer Coaching
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="AcademicCapIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  6 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                The PEMS Framework: <span className="font-black not-italic text-primary">Healing the Whole Person Through Cancer</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Physical. Emotional. Mental. Spiritual. Cancer affects all four dimensions of human experience. The PEMS framework is our evidence-informed approach to addressing each one — because partial healing is not enough.
              </p>
              <div className="flex flex-wrap gap-2">
                {['PEMS', 'Whole-Person Healing', 'Framework'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                The PEMS framework — Physical, Emotional, Mental, Spiritual — is the foundation of our coaching approach at ThriveThroughCancer. It is grounded in the understanding that cancer is not only a physical disease. It is an experience that reshapes identity, disrupts relationships, challenges beliefs, and touches the deepest questions of meaning and mortality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dimensions.map((dim) => (
                  <div key={dim.letter} className="rounded-2xl border border-border bg-card/30 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary text-lg font-black font-serif flex items-center justify-center flex-shrink-0">
                        {dim.letter}
                      </span>
                      <h2 className="font-serif text-base font-semibold text-foreground">{dim.label}</h2>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{dim.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-base font-light leading-relaxed">
                The 12 PEMS Conditioning Gems are specific, evidence-informed practices within each dimension — tools you can use on hard days, in waiting rooms, and in the quiet moments between appointments.
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
                  Book a free discovery call with Renny to explore how the PEMS framework can guide your whole-person healing journey.
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
