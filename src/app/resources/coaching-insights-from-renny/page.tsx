import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Coaching Insights from Renny: What 5 Years of Cancer Coaching Has Taught Me | ThriveThroughCancer',
  description: 'After five years of working with cancer patients, survivors, and caregivers, Renny Letswalo shares the most important lessons she has learned about what truly supports healing.',
  keywords: ['cancer coaching insights', 'Renny Letswalo', 'PEMS framework', 'cancer coach South Africa', 'whole person healing', 'psycho-oncology coaching', 'cancer recovery coaching'],
  openGraph: {
    title: 'Coaching Insights from Renny: What 5 Years of Cancer Coaching Has Taught Me',
    description: 'After five years working with cancer patients, Renny shares the most important lessons about what truly supports healing.',
    url: 'https://thrivethroughcancer.co.za/resources/coaching-insights-from-renny',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching Insights from Renny: What 5 Years of Cancer Coaching Has Taught Me',
    description: 'After five years working with cancer patients, Renny shares the most important lessons about what truly supports healing.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/coaching-insights-from-renny',
  },
};

export default function CoachingInsightsPage() {
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
                  Coaching Insights
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="LightBulbIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  9 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                What 5 Years of Cancer Coaching Has <span className="font-black not-italic text-primary">Taught Me</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                After five years of working with cancer patients, survivors, and caregivers across South Africa, Europe, and the United States, Renny Letswalo shares the most important lessons she has learned about what truly supports healing.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Coaching Insights', 'PEMS Framework', 'Renny Letswalo', 'Whole-Person Healing'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                I did not come to cancer coaching through a textbook. I came through lived experience — my own, and the experiences of the people I love. That personal foundation has shaped everything about how I work: the questions I ask, the silences I hold, the things I refuse to rush past.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Over five years of coaching practice, I have sat with people in the most vulnerable moments of their lives. I have witnessed extraordinary courage, unexpected healing, and the profound transformation that becomes possible when someone decides to participate actively in their own recovery. Here is what that experience has taught me.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">1. The Diagnosis Is Never Just Physical</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Every client who comes to me has already been through the medical system. They have had the scans, the biopsies, the treatment plans. What they have not had — in most cases — is anyone asking them how they are doing emotionally, mentally, and spiritually. The PEMS framework exists because cancer is not a physical event that happens to have emotional side effects. It is a whole-person experience, and it requires a whole-person response.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">2. Fear Is Not the Enemy</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                The most common thing people want from coaching is to stop being afraid. I understand that impulse — fear is exhausting. But I have learned that trying to eliminate fear is less useful unless you have first understood it and its core driver. Fear is information. It tells you what matters, what deserves your emotional attention, and what is ready to be released. When you have understood its core, you can begin to find peace — and the courage to act even in fear&apos;s presence.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                The result of processing fear is profound: it empowers the body towards healing. Both the nervous system and the immune system are capacitated to condition the body to recover. The energy that was going into suppression and fear now becomes available for healing. That is not a metaphor — it is physiology.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">3. The Body Knows Before the Mind Does</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                One of the most consistent patterns I observe is that clients&apos; bodies are already communicating what they need — through fatigue, tension, pain, and the specific locations where stress accumulates. Learning to listen to the body is not mystical; it is practical. Somatic awareness is one of the most powerful tools in the coaching toolkit, and it is consistently underused.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">4. Meaning Is Medicine</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Viktor Frankl wrote that &ldquo;those who have a why to live can bear almost any how.&rdquo; In my coaching practice, I have seen this play out repeatedly. Clients who find or create meaning in their cancer experience — not by pretending it is good, but by finding what it is teaching them — tend to navigate treatment with more resilience, tolerate side effects better, and report significantly higher quality of life.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Meaning-making is one of the 10 Radical Remission factors, and it is one I return to in almost every coaching session. Not because I impose meaning on anyone&apos;s experience, but because I help people discover the meaning that is already there, waiting to be found.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">5. A Reason to Live — A Vision That Pulls You Forward</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                One of the most quietly powerful things I do in coaching is ask: <em>What are you living for?</em> Not in a philosophical sense — in a practical, immediate, deeply personal one. It might be watching your children grow up. It might be meeting your grandchildren, travelling somewhere you have always dreamed of, finishing something you started, or simply sitting in a garden you love on a summer morning. The vision does not have to be grand. It just has to be real to you.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                When the brain has something to move <em>towards</em> — something bigger than the diagnosis — it shifts out of survival mode and into a fundamentally different orientation. Research into Radical Remission, Dr Kelly Turner&apos;s landmark study of unexpected cancer recoveries, identifies having strong reasons for living as one of the key factors present in people who beat the odds. This is not wishful thinking. It is the brain&apos;s extraordinary capacity to organise itself around a future it believes in.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In my sessions, I help clients find and tend that vision — to make it vivid, to return to it when treatment is hard, to let it become a compass. A diagnosis can narrow your world very quickly. A vision opens it back up. And sometimes, that opening is where healing begins.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">6. Connection Is Non-Negotiable</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Isolation is one of the most dangerous things that can happen to a cancer patient. Not because it is uncomfortable — though it is — but because the research is unambiguous: social connection is directly linked to immune function, treatment tolerance, and survival outcomes. Embracing social support is another of the 10 Radical Remission factors, and it is one that many people resist because they do not want to be a burden.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Part of my work is helping clients learn to receive — to let people in, to ask for help, to allow themselves to be held. This is often harder than any physical challenge they face.
              </p>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-foreground text-sm font-medium leading-relaxed italic">
                  &ldquo;My role is not to fix anyone. It is to walk alongside them — to hold the space in which their own healing intelligence can emerge. Every person I work with already has what they need. My job is to help them find it.&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-3">— Renny Letswalo, ThriveThroughCancer</p>
              </div>
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
                  Work with Renny <span className="font-black not-italic text-primary">directly.</span>
                </h2>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-lg mx-auto mb-6">
                  Book a free discovery call to experience Renny&apos;s coaching approach first-hand and explore how it can support your healing journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/#booking" className="btn-primary text-sm px-7 py-3.5 inline-flex items-center gap-2">
                    Book a Free Discovery WhatsApp Call
                    <Icon name="ArrowRightIcon" size={15} />
                  </Link>
                  <Link href="/about" className="btn-secondary text-sm px-7 py-3.5 inline-flex items-center gap-2">
                    About Renny
                    <Icon name="ArrowRightIcon" size={15} />
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
