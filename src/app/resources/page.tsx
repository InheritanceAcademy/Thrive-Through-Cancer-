'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Article {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  icon: string;
  featured?: boolean;
  tags: string[];
  body: string[];
}

const articles: Article[] = [
  {
    slug: 'what-is-cancer-coaching',
    category: 'Cancer Coaching',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    title: 'What Is Cancer Coaching — and Why It Matters Beyond the Clinic',
    excerpt: 'Cancer treatment addresses the body. Cancer coaching addresses the whole person — the fears, the identity shifts, the daily decisions that no oncologist has time to guide you through.',
    readTime: '6 min read',
    icon: 'HeartIcon',
    featured: true,
    tags: ['Cancer Coaching', 'Whole-Person Care', 'Psycho-Oncology'],
    body: [],
  },
  {
    slug: 'neuroplasticity-and-cancer-recovery',
    category: 'Neuroplasticity',
    categoryColor: 'bg-accent/20 text-accent border-accent/30',
    title: 'How Neuroplasticity Can Support Your Cancer Recovery',
    excerpt: 'Your brain is not fixed. Even under the stress of a cancer diagnosis, it retains the remarkable ability to rewire itself — and that capacity is one of your most powerful healing tools.',
    readTime: '7 min read',
    icon: 'BoltIcon',
    featured: true,
    tags: ['Neuroplasticity', 'Brain Science', 'Healing'],
    body: [],
  },
  {
    slug: 'emotional-release-and-cancer-healing',
    category: 'Emotional Healing',
    categoryColor: 'bg-accent/20 text-accent border-accent/30',
    title: 'Emotional Release and Cancer Healing: Why Suppressed Emotions Matter',
    excerpt: 'Suppressed emotions don\'t disappear — they live in the body. Learn how emotional release practices can reduce stress hormones, support immune function, and become a cornerstone of your cancer recovery.',
    readTime: '8 min read',
    icon: 'HeartIcon',
    featured: true,
    tags: ['Emotional Release', 'Mind-Body Healing', 'Radical Remission'],
    body: [],
  },
  {
    slug: 'coaching-insights-from-renny',
    category: 'Coaching Insights',
    categoryColor: 'bg-primary/15 text-primary border-primary/25',
    title: 'What 5 Years of Cancer Coaching Has Taught Me',
    excerpt: 'After five years working with cancer patients, survivors, and caregivers across three continents, Renny Letswalo shares the most important lessons she has learned about what truly supports healing.',
    readTime: '9 min read',
    icon: 'LightBulbIcon',
    featured: false,
    tags: ['Coaching Insights', 'PEMS Framework', 'Renny Letswalo'],
    body: [],
  },
  {
    slug: 'healing-through-grief-and-identity-loss',
    category: 'Emotional Healing',
    categoryColor: 'bg-accent/20 text-accent border-accent/30',
    title: 'Healing Through Grief and Identity Loss in Cancer',
    excerpt: 'A cancer diagnosis doesn\'t just threaten the body — it dismantles identity. Understanding the grief of who you were before diagnosis is a profound and necessary part of the healing journey.',
    readTime: '7 min read',
    icon: 'UserCircleIcon',
    featured: false,
    tags: ['Grief', 'Identity', 'Psycho-Oncology'],
    body: [],
  },
  {
    slug: 'spiritual-connection-and-cancer-recovery',
    category: 'Spiritual Healing',
    categoryColor: 'bg-primary/15 text-primary border-primary/25',
    title: 'Spiritual Connection and Cancer Recovery: The Evidence Behind the S in PEMS',
    excerpt: 'The spiritual dimension of healing is often the most overlooked — and, according to the research, one of the most powerful. Explore what science says about spiritual connection and cancer recovery outcomes.',
    readTime: '7 min read',
    icon: 'StarIcon',
    featured: false,
    tags: ['Spiritual Healing', 'PEMS', 'Meaning & Purpose'],
    body: [],
  },
  {
    slug: 'positive-psychology-and-cancer',
    category: 'Positive Psychology',
    categoryColor: 'bg-primary/15 text-primary border-primary/25',
    title: 'Positive Psychology in Cancer Care: More Than Just Thinking Happy Thoughts',
    excerpt: 'Positive psychology is not toxic positivity. It is a rigorous science of wellbeing that offers cancer patients evidence-based tools to build meaning, resilience, and genuine flourishing — even in the hardest seasons.',
    readTime: '8 min read',
    icon: 'StarIcon',
    featured: false,
    tags: ['Positive Psychology', 'PERMA', 'Wellbeing'],
    body: [],
  },
  {
    slug: 'radical-remission-factors',
    category: 'Cancer Coaching',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    title: 'The 10 Radical Remission Factors: What the Research Reveals',
    excerpt: 'Dr. Kelly Turner\'s landmark research into thousands of documented radical remissions identified 10 key factors consistently present in unexpected cancer recoveries. Here\'s what they mean for your journey.',
    readTime: '9 min read',
    icon: 'CheckBadgeIcon',
    featured: false,
    tags: ['Radical Remission', 'Research', 'Healing Factors'],
    body: [],
  },
  {
    slug: 'wellness-tips-during-treatment',
    category: 'Wellness Tips',
    categoryColor: 'bg-accent/15 text-accent border-accent/25',
    title: '8 Evidence-Based Wellness Practices for Life During Cancer Treatment',
    excerpt: 'Treatment is exhausting. These eight practices are not about doing more — they are about doing the right things, gently and consistently, to support your body and mind through one of the hardest seasons of your life.',
    readTime: '5 min read',
    icon: 'SparklesIcon',
    featured: false,
    tags: ['Wellness', 'Self-Care', 'Treatment Support'],
    body: [],
  },
  {
    slug: 'pems-framework-explained',
    category: 'Cancer Coaching',
    categoryColor: 'bg-primary/20 text-primary border-primary/30',
    title: 'The PEMS Framework: Healing the Whole Person Through Cancer',
    excerpt: 'Physical. Emotional. Mental. Spiritual. Cancer affects all four dimensions of human experience. The PEMS framework is our evidence-informed approach to addressing each one — because partial healing is not enough.',
    readTime: '6 min read',
    icon: 'AcademicCapIcon',
    featured: false,
    tags: ['PEMS', 'Whole-Person Healing', 'Framework'],
    body: [],
  },
];

const categories = ['All', 'Cancer Coaching', 'Emotional Healing', 'Neuroplasticity', 'Positive Psychology', 'Spiritual Healing', 'Coaching Insights', 'Wellness Tips'];

export default function ResourcesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const featured = articles.filter((a) => a.featured);
  const nonFeatured = filtered.filter((a) => !a.featured);

  useEffect(() => {
    let ctx: any;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          heroRef.current?.querySelectorAll('.hero-item') ?? [],
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
        );
        gsap.fromTo(
          gridRef.current?.querySelectorAll('.article-card') ?? [],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
        );
      });
    };
    init();
    return () => { if (ctx) ctx.revert(); };
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-10 overflow-hidden" aria-label="Resources hero">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] blob-warm opacity-30" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blob-accent opacity-40" />
          </div>
          <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="hero-item inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 text-accent text-xs font-semibold tracking-widest uppercase mb-6" style={{ opacity: 0 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Educational Resources
            </div>
            <h1 className="hero-item font-serif text-display font-light italic leading-[1.0] text-foreground mb-6" style={{ opacity: 0 }}>
              Knowledge that <span className="font-black not-italic text-primary">empowers healing.</span>
            </h1>
            <p className="hero-item max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed" style={{ opacity: 0 }}>
              Evidence-based articles on cancer coaching, positive psychology, neuroplasticity, and wellness — written to help you understand the science behind whole-person healing.
            </p>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 px-6 md:px-10 border-t border-border" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Start Here</span>
              <h2 id="featured-heading" className="font-serif text-section-title font-light leading-[1.0]">
                Featured <span className="italic font-black text-primary">articles</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((article) => (
                <article
                  key={article.slug}
                  className="group rounded-3xl border border-border bg-card/40 p-8 flex flex-col gap-5 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${article.categoryColor}`}>
                      {article.category}
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5 flex-shrink-0">
                      <Icon name="ClockIcon" size={13} className="text-muted-foreground" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={article.icon as 'HeartIcon'} size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">{article.excerpt}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    <span>Read full article</span>
                    <Icon name="ArrowRightIcon" size={16} className="text-primary" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter + All Articles */}
        <section className="py-16 px-6 md:px-10 border-t border-border" aria-labelledby="all-articles-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Browse by Topic</span>
                <h2 id="all-articles-heading" className="font-serif text-section-title font-light leading-[1.0]">
                  All <span className="italic font-black text-primary">resources</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`min-h-11 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-primary text-background border-primary' :'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <article
                  key={article.slug}
                  className="article-card group rounded-3xl border border-border bg-card/30 p-7 flex flex-col gap-4 hover:border-primary/40 transition-all duration-300"
                  style={{ opacity: 0 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${article.categoryColor}`}>
                      {article.category}
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Icon name="ClockIcon" size={12} />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={article.icon as 'HeartIcon'} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-3">{article.excerpt}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground bg-border/40 rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto"
                  >
                    <span>Read more</span>
                    <Icon name="ArrowRightIcon" size={15} className="text-primary" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 md:py-24 md:px-10 border-t border-border" aria-label="Call to action">
          <div className="max-w-4xl mx-auto rounded-3xl border border-primary/30 bg-primary/5 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0" aria-hidden="true">
              <div className="absolute top-0 right-0 w-64 h-64 blob-warm opacity-20" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Icon name="HeartIcon" size={26} className="text-primary" />
              </div>
              <h2 className="font-serif text-section-title font-light italic leading-[1.0] mb-4">
                Ready to put this <span className="font-black not-italic text-primary">knowledge into practice?</span>
              </h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed max-w-xl mx-auto mb-8">
                Reading about whole-person healing is the first step. Working with Renny is where the transformation begins. Book a free discovery call to explore how cancer coaching can support your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#booking" className="btn-primary text-sm px-8 py-4 inline-flex items-center gap-2">
                  Book a Free Discovery WhatsApp Call
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary text-sm px-8 py-4 inline-flex items-center gap-2">
                  Ask Renny a Question
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
