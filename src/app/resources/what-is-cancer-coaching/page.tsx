import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'What Is Cancer Coaching — and Why It Matters Beyond the Clinic | ThriveThroughCancer',
  description: 'Cancer treatment addresses the body. Cancer coaching addresses the whole person — the fears, the identity shifts, the daily decisions that no oncologist has time to guide you through.',
  keywords: ['cancer coaching', 'psycho-oncology', 'whole-person care', 'cancer support', 'oncology coaching'],
  openGraph: {
    title: 'What Is Cancer Coaching — and Why It Matters Beyond the Clinic',
    description: 'Cancer treatment addresses the body. Cancer coaching addresses the whole person — the fears, the identity shifts, the daily decisions that no oncologist has time to guide you through.',
    url: 'https://thrivethroughcancer.co.za/resources/what-is-cancer-coaching',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Cancer Coaching — and Why It Matters Beyond the Clinic',
    description: 'Cancer treatment addresses the body. Cancer coaching addresses the whole person — the fears, the identity shifts, the daily decisions that no oncologist has time to guide you through.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/what-is-cancer-coaching',
  },
};

export default function WhatIsCancerCoachingPage() {
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
                  <Icon name="HeartIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  6 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                What Is Cancer Coaching — and Why It <span className="font-black not-italic text-primary">Matters Beyond the Clinic</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Cancer treatment addresses the body. Cancer coaching addresses the whole person — the fears, the identity shifts, the daily decisions that no oncologist has time to guide you through.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Cancer Coaching', 'Whole-Person Care', 'Psycho-Oncology'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                When a person receives a cancer diagnosis, the medical system mobilises quickly — scans, biopsies, treatment plans. What it rarely provides is guidance on how to live well through that treatment: how to manage fear, rebuild identity, make sense of the experience, and activate the body&apos;s own healing intelligence.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Cancer coaching fills that gap. It is a structured, evidence-informed partnership between a trained coach and someone navigating cancer — whether newly diagnosed, mid-treatment, in remission, or supporting a loved one.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                A cancer coach does not replace your oncologist. Instead, they work alongside your medical team to address the dimensions of healing that clinical care often cannot reach: the emotional, mental, and spiritual layers of the cancer journey.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Research in psycho-oncology consistently shows that psychological wellbeing directly influences treatment outcomes. Patients who feel supported, purposeful, and emotionally regulated tend to tolerate treatment better, experience fewer complications, and report significantly higher quality of life.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                At ThriveThroughCancer, our coaching is grounded in the PEMS framework — Physical, Emotional, Mental, and Spiritual — because cancer touches every one of these dimensions. Addressing only the physical is like treating a fire by cooling one wall of a burning room.
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
                  Book a free discovery call with Renny to explore how cancer coaching can support your whole-person healing journey.
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
