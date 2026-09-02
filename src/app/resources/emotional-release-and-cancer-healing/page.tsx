import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Emotional Release and Cancer Healing: Why Suppressed Emotions Matter | ThriveThroughCancer',
  description: 'Suppressed emotions don\'t disappear — they live in the body. Learn how emotional release practices can reduce stress hormones, support immune function, and become a cornerstone of your cancer recovery.',
  keywords: ['emotional release', 'cancer healing', 'suppressed emotions', 'psycho-oncology', 'emotional health cancer', 'mind body cancer', 'cancer coaching'],
  openGraph: {
    title: 'Emotional Release and Cancer Healing: Why Suppressed Emotions Matter',
    description: 'Suppressed emotions don\'t disappear — they live in the body. Learn how emotional release practices support immune function and cancer recovery.',
    url: 'https://thrivethroughcancer.co.za/resources/emotional-release-and-cancer-healing',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emotional Release and Cancer Healing: Why Suppressed Emotions Matter',
    description: 'Suppressed emotions don\'t disappear — they live in the body. Learn how emotional release practices support immune function and cancer recovery.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/emotional-release-and-cancer-healing',
  },
};

export default function EmotionalReleasePage() {
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
                  Emotional Healing
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="HeartIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  8 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                Emotional Release and Cancer Healing: <span className="font-black not-italic text-primary">Why Suppressed Emotions Matter</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Suppressed emotions don&apos;t disappear — they live in the body. Learn how emotional release practices can reduce stress hormones, support immune function, and become a cornerstone of your cancer recovery.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Emotional Release', 'Mind-Body Healing', 'Psycho-Oncology', 'Radical Remission'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                One of the most consistent findings in Dr. Kelly Turner&apos;s Radical Remission research is this: people who experience unexpected cancer recoveries almost universally report that they released suppressed emotions as part of their healing process. This is not coincidence. It is physiology.
              </p>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-foreground text-sm font-medium leading-relaxed italic">
                  &ldquo;Releasing suppressed emotions&rdquo; is one of the 10 key factors identified in over 1,000 documented cases of radical remission — cases where cancer disappeared or significantly regressed against medical expectation.
                </p>
                <p className="text-xs text-muted-foreground mt-3">— Dr. Kelly Turner, Radical Remission Research</p>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-foreground">The Body Keeps the Score</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                When we experience difficult emotions — fear, grief, anger, shame — and do not process them fully, they do not simply vanish. The body stores them as chronic tension, altered hormone levels, and dysregulated nervous system activity. Research in psychoneuroimmunology (the study of how the mind, nervous system, and immune system interact) shows that chronic emotional suppression elevates cortisol and adrenaline, suppresses natural killer cell activity, and creates a physiological environment that is less conducive to healing.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                For cancer patients, this matters enormously. The immune system is your body&apos;s primary defence against abnormal cell growth. Anything that chronically suppresses immune function — including unprocessed emotional stress — is worth addressing as part of a comprehensive healing strategy.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">What Emotional Release Actually Looks Like</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Emotional release is not about performing emotions or forcing yourself to cry. It is about creating safe conditions for authentic emotional experience to move through you — rather than being held in the body indefinitely.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Somatic practices', body: 'Body-based approaches like breathwork, trauma-informed yoga, and EMDR (Eye Movement Desensitisation and Reprocessing) help release emotions stored in the nervous system and muscle tissue.' },
                  { title: 'Expressive writing', body: 'James Pennebaker\'s landmark research at the University of Texas showed that writing about emotionally difficult experiences for just 15–20 minutes per day significantly improved immune function and reduced distress in cancer patients.' },
                  { title: 'Therapeutic conversation', body: 'Working with a trained coach or therapist to name, explore, and process difficult emotions — particularly those tied to the cancer diagnosis itself — is one of the most evidence-supported interventions in psycho-oncology.' },
                  { title: 'Creative expression', body: 'Art, music, movement, and journaling all provide channels for emotional material that may be difficult to articulate verbally. Many clients find that creative expression unlocks emotional processing that talking alone cannot reach.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold mb-1">{item.title}</p>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-foreground">The PEMS Emotional Dimension</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Within the PEMS framework at ThriveThroughCancer, the Emotional dimension is not treated as secondary to the Physical. It is given equal weight — because the evidence demands it. In our coaching work, we create dedicated space for emotional processing in every session. We do not rush past grief to get to &ldquo;positive thinking.&rdquo; We do not bypass fear to arrive at hope. We move through the full emotional landscape of the cancer experience, because that movement is itself healing.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                The goal is not to eliminate difficult emotions — it is to ensure they flow rather than stagnate. A river that flows is alive. Water that stagnates becomes toxic. The same is true of emotional experience in the body.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">A Note on Emotional Safety</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Emotional release work should always be done in a safe, supported context — particularly for those with a history of trauma. If you are navigating significant emotional distress, please work with a qualified professional rather than attempting intensive emotional processing alone. The goal is healing, not overwhelm.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In our coaching sessions, we move at your pace. You are always in control of how deep we go and when. Emotional safety is the foundation from which genuine healing becomes possible.
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
                  Ready to begin your <span className="font-black not-italic text-primary">emotional healing journey?</span>
                </h2>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-lg mx-auto mb-6">
                  Book a free discovery call with Renny to explore how emotional release coaching can support your whole-person healing.
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
