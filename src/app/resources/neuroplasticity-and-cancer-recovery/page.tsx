import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'How Neuroplasticity Can Support Your Cancer Recovery | ThriveThroughCancer',
  description: 'Your brain is not fixed. Even under the stress of a cancer diagnosis, it retains the remarkable ability to rewire itself — and that capacity is one of your most powerful healing tools.',
  keywords: ['neuroplasticity', 'cancer recovery', 'brain science', 'healing', 'mindfulness cancer', 'amygdala'],
  openGraph: {
    title: 'How Neuroplasticity Can Support Your Cancer Recovery',
    description: 'Your brain is not fixed. Even under the stress of a cancer diagnosis, it retains the remarkable ability to rewire itself — and that capacity is one of your most powerful healing tools.',
    url: 'https://thrivethroughcancer.co.za/resources/neuroplasticity-and-cancer-recovery',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Neuroplasticity Can Support Your Cancer Recovery',
    description: 'Your brain is not fixed. Even under the stress of a cancer diagnosis, it retains the remarkable ability to rewire itself — and that capacity is one of your most powerful healing tools.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/neuroplasticity-and-cancer-recovery',
  },
};

export default function NeuroplasticityAndCancerRecoveryPage() {
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
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border bg-accent/20 text-accent border-accent/30">
                  Neuroplasticity
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="BoltIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  7 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                How Neuroplasticity Can Support Your <span className="font-black not-italic text-primary">Cancer Recovery</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Your brain is not fixed. Even under the stress of a cancer diagnosis, it retains the remarkable ability to rewire itself — and that capacity is one of your most powerful healing tools.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Neuroplasticity', 'Brain Science', 'Healing'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Neuroplasticity — the brain&apos;s ability to form new neural connections throughout life — is one of the most significant discoveries in modern neuroscience. For people navigating cancer, it offers something profound: the understanding that the patterns of fear, catastrophising, and helplessness that often accompany a diagnosis are not permanent.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                When we experience chronic stress, the brain&apos;s threat-detection system (the amygdala) becomes hyperactive. This keeps the body in a prolonged state of fight-or-flight, which suppresses immune function, disrupts sleep, impairs digestion, and depletes the very energy needed for healing.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Neuroplasticity-based techniques — including mindfulness meditation, guided visualisation, cognitive reframing, and intentional gratitude practice — have been shown to reduce amygdala reactivity and strengthen the prefrontal cortex, the part of the brain responsible for calm, clear decision-making.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In practical terms, this means that with consistent practice, you can literally rewire your brain&apos;s response to the cancer experience. Fear responses become less automatic. Resilience becomes more accessible. The body&apos;s healing environment improves.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                At ThriveThroughCancer, we integrate neuroscience-backed techniques into every coaching programme — not as a replacement for medical treatment, but as a powerful complement to it. The brain and body are not separate systems. What you do with your mind matters for what happens in your body.
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
                  Book a free discovery call with Renny to explore how neuroplasticity-based coaching can support your healing journey.
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
