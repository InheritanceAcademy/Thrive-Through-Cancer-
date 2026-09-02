import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Spiritual Connection and Cancer Recovery: The Evidence Behind the S in PEMS | ThriveThroughCancer',
  description: 'The spiritual dimension of healing is often the most overlooked — and the most powerful. Explore what the research says about spiritual connection, meaning, and cancer recovery outcomes.',
  keywords: ['spiritual connection cancer', 'spirituality cancer recovery', 'PEMS spiritual', 'cancer meaning purpose', 'radical remission spiritual', 'cancer coaching spiritual', 'psycho-oncology spirituality'],
  openGraph: {
    title: 'Spiritual Connection and Cancer Recovery: The Evidence Behind the S in PEMS',
    description: 'The spiritual dimension of healing is often the most overlooked — and the most powerful. Explore what the research says.',
    url: 'https://thrivethroughcancer.co.za/resources/spiritual-connection-and-cancer-recovery',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spiritual Connection and Cancer Recovery: The Evidence Behind the S in PEMS',
    description: 'The spiritual dimension of healing is often the most overlooked — and the most powerful. Explore what the research says.',
  },
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources/spiritual-connection-and-cancer-recovery',
  },
};

export default function SpiritualConnectionPage() {
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
                  Spiritual Healing
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="StarIcon" size={22} className="text-primary" />
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                  7 min read
                </span>
              </div>
              <h1 className="font-serif text-display font-light italic leading-[1.05] text-foreground mb-6">
                Spiritual Connection and Cancer Recovery: <span className="font-black not-italic text-primary">The Evidence Behind the S in PEMS</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                The spiritual dimension of healing is often the most overlooked — and, according to the research, one of the most powerful. Explore what science says about spiritual connection, meaning, and cancer recovery outcomes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Spiritual Healing', 'PEMS', 'Meaning & Purpose', 'Radical Remission'].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6 md:px-10" aria-label="Article content">
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                When we speak about the Spiritual dimension in the PEMS framework, we are not speaking about religion — though for many people, religious faith is a profound source of spiritual sustenance. We are speaking about something broader: the human need for connection to something larger than the individual self, for meaning that transcends circumstance, and for a sense of purpose that persists even in the face of suffering.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                This dimension is consistently underaddressed in cancer care — and consistently overrepresented in the research on healing outcomes.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">What the Research Shows</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Research in psycho-oncology, reviewing multiple studies across thousands of cancer patients, has found that spiritual wellbeing is significantly associated with better quality of life, lower levels of anxiety and depression, and improved ability to cope with treatment. Studies have also found that patients who report a strong sense of spiritual connection tend to show better immune function than those who do not.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In Dr. Kelly Turner&apos;s Radical Remission research, &ldquo;deepening your spiritual connection&rdquo; appeared in the vast majority of the 1,000+ cases she studied. It was not incidental — it was central. People who experienced unexpected recoveries almost universally described a deepening of their relationship with something they experienced as sacred, whether that was God, nature, love, or the mystery of existence itself.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Spirituality Is Not Religion</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                This distinction matters enormously in coaching work. Many people who do not identify as religious still have a rich spiritual life — expressed through connection with nature, creative practice, meditation, relationships, or a sense of awe at the complexity of existence. Conversely, some people who are religiously observant find that their faith becomes a source of guilt or fear during illness rather than comfort.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In our coaching work, we meet each person where they are. We do not impose any spiritual framework. We ask: what connects you to something larger than yourself? What gives you a sense of meaning that persists even on the hardest days? How can we deepen that connection?
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">The Physiology of Meaning</h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Research in psychoneuroimmunology has begun to map the biological pathways through which meaning and purpose affect physical health. People who report a strong sense of purpose show lower levels of inflammatory markers, better sleep quality, and more robust immune responses. The mechanism appears to involve the hypothalamic-pituitary-adrenal (HPA) axis — the body&apos;s central stress-response system. A strong sense of meaning buffers the HPA axis against chronic activation, reducing the cortisol load that suppresses immune function.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                In practical terms: meaning is not just psychologically beneficial. It is physiologically protective.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-foreground">Practices for Deepening Spiritual Connection</h2>
              <ul className="space-y-4">
                {[
                  { title: 'Contemplative practice', body: 'Meditation, prayer, or simply sitting in silence — any practice that creates space for connection with something beyond the immediate demands of treatment and daily life.' },
                  { title: 'Time in nature', body: 'Research consistently shows that time in natural environments reduces cortisol, lowers blood pressure, and activates the parasympathetic nervous system. For many people, nature is the most accessible portal to spiritual experience.' },
                  { title: 'Meaning journaling', body: 'A daily practice of writing about what gave your day meaning — however small — trains attention toward significance and builds the neural pathways associated with purpose and wellbeing.' },
                  { title: 'Community and ritual', body: 'Whether through religious community, support groups, or meaningful family rituals, shared practices that connect us to something larger than ourselves are among the most powerful sources of spiritual sustenance.' },
                  { title: 'Sacred texts, audio teachings, and spiritual music', body: 'Reading or listening to holy books — or any text that carries deep meaning for you — can be a profound source of comfort and grounding. Audio holy teachings and spoken passages bring the words alive in a way that is accessible even on the most difficult days. Spiritual music, chants, and devotional songs have been used across every tradition to quiet the mind, open the heart, and create a felt sense of connection with the sacred. These practices are not passive — they actively shift the nervous system toward calm and receptivity.' },
                  { title: 'Exploring your "why"', body: 'Working with a coach to articulate your deepest reasons for wanting to heal — not just to survive, but to live fully — is one of the most powerful spiritual practices available.' },
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

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-foreground text-sm font-medium leading-relaxed italic">
                  &ldquo;The spiritual dimension is not a luxury for those who have time for it. It is a biological necessity for those who want to heal. The research is clear. The question is whether we are willing to take it seriously.&rdquo;
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
                  Explore the full <span className="font-black not-italic text-primary">PEMS framework</span> with Renny.
                </h2>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-lg mx-auto mb-6">
                  Book a free discovery call to explore how the Physical, Emotional, Mental, and Spiritual dimensions of healing can be integrated into your recovery journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/#booking" className="btn-primary text-sm px-7 py-3.5 inline-flex items-center gap-2">
                    Book a Free Discovery WhatsApp Call
                    <Icon name="ArrowRightIcon" size={15} />
                  </Link>
                  <Link href="/resources/pems-framework-explained" className="btn-secondary text-sm px-7 py-3.5 inline-flex items-center gap-2">
                    Read: The PEMS Framework
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
