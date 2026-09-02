import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'The 10 Radical Remission Factors: What the Research Reveals | ThriveThroughCancer',
  description: "Dr. Kelly Turner's landmark research into thousands of documented radical remissions identified 10 key factors consistently present in unexpected cancer recoveries.",
  keywords: ['radical remission', 'Kelly Turner', 'cancer recovery factors', 'unexpected remission', 'cancer healing research'],
  openGraph: {
    title: 'The 10 Radical Remission Factors: What the Research Reveals',
    description: "Dr. Kelly Turner's landmark research into thousands of documented radical remissions identified 10 key factors consistently present in unexpected cancer recoveries.",
    url: 'https://thrivethroughcancer.co.za/resources/radical-remission-factors',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 10 Radical Remission Factors: What the Research Reveals',
    description: "Dr. Kelly Turner's landmark research into thousands of documented radical remissions identified 10 key factors consistently present in unexpected cancer recoveries.",
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/radical-remission-factors',
  },
};

const factors = [
  'Radically changing your diet',
  'Taking control of your health',
  'Following your intuition',
  'Using herbs and supplements',
  'Releasing suppressed emotions',
  'Increasing positive emotions',
  'Embracing social support',
  'Deepening your spiritual connection',
  'Having strong reasons for living',
  'Exercising',
];

export default function RadicalRemissionFactorsPage() {
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
                  <Icon name="CheckBadgeIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  9 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                The 10 Radical Remission Factors: <span className="font-black not-italic text-primary">What the Research Reveals</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Dr. Kelly Turner&apos;s landmark research into thousands of documented radical remissions identified 10 key factors consistently present in unexpected cancer recoveries. Here&apos;s what they mean for your journey.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Radical Remission', 'Research', 'Healing Factors'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In 2014, Dr. Kelly Turner published <em>Radical Remission: Surviving Cancer Against All Odds</em> — the result of her research into over 1,000 cases of unexpected cancer recovery. Her findings identified 10 factors that appeared consistently across these cases, regardless of cancer type or stage.
              </p>

              <div className="rounded-2xl border border-border bg-card/30 p-6">
                <h2 className="font-serif text-lg font-semibold text-foreground mb-4">The 10 Radical Remission Factors</h2>
                <ol className="space-y-3">
                  {factors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground text-sm font-light leading-relaxed">{factor}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="text-muted-foreground text-base font-light leading-relaxed">
                What is striking about this list is that only two factors are physical (diet and exercise). The remaining eight are psychological, emotional, relational, or spiritual. This does not mean that diet and exercise are unimportant — they are foundational. But it suggests that the inner dimensions of healing carry enormous weight.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                At ThriveThroughCancer, the Radical Remission framework is woven into our coaching programmes. We do not promise outcomes — no ethical coach can. But we do believe that engaging with these factors gives your body and mind the best possible environment for healing.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                The research is not prescriptive. It is invitational. It asks: what would it look like to take radical responsibility for your healing — not by blaming yourself for getting sick, but by actively participating in your recovery?
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
                  Book a free discovery call with Renny to explore how the Radical Remission factors can be integrated into your healing journey.
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
