import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Healing Through Grief and Identity Loss in Cancer | ThriveThroughCancer',
  description: 'A cancer diagnosis doesn\'t just threaten the body — it dismantles identity. Understanding the grief of who you were before diagnosis is a profound and necessary part of the healing journey.',
  keywords: ['cancer grief', 'identity loss cancer', 'cancer diagnosis grief', 'psycho-oncology', 'cancer coaching', 'emotional healing cancer', 'cancer survivor identity'],
  openGraph: {
    title: 'Healing Through Grief and Identity Loss in Cancer',
    description: 'A cancer diagnosis doesn\'t just threaten the body — it dismantles identity. Understanding this grief is a necessary part of healing.',
    url: 'https://thrivethroughcancer.co.za/resources/healing-through-grief-and-identity-loss',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healing Through Grief and Identity Loss in Cancer',
    description: 'A cancer diagnosis doesn\'t just threaten the body — it dismantles identity. Understanding this grief is a necessary part of healing.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/healing-through-grief-and-identity-loss',
  },
};

export default function HealingThroughGriefPage() {
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
                  Emotional Healing
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="UserCircleIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  7 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                Healing Through Grief and <span className="font-black not-italic text-primary">Identity Loss in Cancer</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                A cancer diagnosis doesn&apos;t just threaten the body — it dismantles identity. Understanding the grief of who you were before diagnosis is a profound and necessary part of the healing journey.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Grief', 'Identity', 'Psycho-Oncology', 'Emotional Healing'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                When people speak about grief and cancer, they usually mean grief about the possibility of dying. But there is another grief — quieter, less acknowledged, and in many ways more immediately present — the grief of who you were before the diagnosis.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                The person who ran marathons. The parent who never missed a school event. The professional who prided themselves on reliability. The partner who was always the strong one. Cancer can strip these identities away — sometimes temporarily, sometimes permanently — and the loss is real, even when the body is still alive.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">The Unacknowledged Grief</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Psycho-oncology research consistently identifies identity disruption as one of the most significant sources of distress for cancer patients — often more distressing than the physical symptoms themselves. Yet it is rarely addressed in clinical settings, where the focus is understandably on treatment protocols and physical outcomes.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                The result is that many people navigate this grief alone, without language for it, without permission to feel it, and without support to move through it. They are told to &ldquo;stay positive&rdquo; — which, however well-intentioned, can deepen the sense of isolation by suggesting that grief itself is a problem to be solved rather than a natural response to profound loss.
              </p>

              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="text-foreground text-sm font-medium leading-relaxed italic">
                  &ldquo;Grief is not a sign of weakness. It is the price of love — love for the life you had, the body you trusted, the future you imagined. Honouring that grief is not giving up. It is the beginning of building something new.&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-3">— Renny Letswalo, ThriveThroughCancer</p>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-foreground">The Stages Are Not Linear</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Elisabeth Kübler-Ross&apos;s model of grief — denial, anger, bargaining, depression, acceptance — is widely known but frequently misunderstood. The stages are not a checklist to be completed in order. They are a map of emotional territory that most people visit multiple times, in different sequences, often cycling back to earlier stages just when they thought they had moved on.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                For cancer patients, this cycling is particularly common. A clear scan can trigger unexpected grief — not relief — because it brings the full weight of what was lost into focus. A recurrence can restart the entire process. Even recovery can be accompanied by grief, as the person realises that the life they are returning to is not the same life they left.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Post-Traumatic Growth: What Becomes Possible</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Research in post-traumatic growth — the psychological phenomenon in which people report positive change emerging from the struggle with highly challenging life circumstances — shows that cancer survivors frequently report profound shifts in values, relationships, and sense of purpose following their diagnosis.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                This is not toxic positivity. It is not the claim that cancer is a &ldquo;gift.&rdquo; It is the recognition that when identity is dismantled, there is an opportunity — not an obligation — to rebuild it more intentionally. Many people discover, through the cancer experience, what they truly value, who they truly are, and what kind of life they actually want to live.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In our coaching work, we hold space for both the grief and the growth — because they are not opposites. They are two sides of the same profound human experience.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Practical Steps for Navigating Identity Grief</h2>
              <ul className="space-y-4">
                {[
                  { title: 'Name what you have lost', body: 'Write a list of the specific identities, roles, and capacities that cancer has disrupted. Naming loss is the first step toward processing it.' },
                  { title: 'Allow the grief without timeline', body: 'Resist the pressure — internal or external — to "move on" by a certain point. Grief has its own pace. Rushing it does not shorten it; it prolongs it.' },
                  { title: 'Seek witnessed grief', body: 'Grief processed alone is harder to move through than grief witnessed by another person. Whether through coaching, therapy, or a trusted relationship, let someone be present with your loss.' },
                  { title: 'Begin asking who you are becoming', body: 'Alongside the grief, gently begin to explore: what values are emerging? What matters now that didn\'t before? Who do you want to be on the other side of this?' },
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
                  You don&apos;t have to grieve <span className="font-black not-italic text-primary">alone.</span>
                </h2>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-lg mx-auto mb-6">
                  Book a free discovery call with Renny to explore how coaching can support you through grief, identity rebuilding, and whole-person healing.
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
