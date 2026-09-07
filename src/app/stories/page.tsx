'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

interface Story {
  id: number;
  name: string;
  condition: string;
  conditionTag: string;
  location: string;
  locationTag: string;
  quote: string;
  fullStory: string;
  subtext?: string;
  image: string;
  imageAlt: string;
  outcome?: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: 'Khontso S',
    condition: 'Breast Cancer, Stage 4',
    conditionTag: 'Breast Cancer',
    location: 'Bloemfontein, South Africa',
    locationTag: 'South Africa',
    quote:
      '"After having gone through multiple Chemo sessions, I started coaching with Renny and she gave me so much support, guidance with my diet and lifestyle changes during treatments to help restore my immune system."',
    fullStory:
      '"After having gone through multiple Chemo sessions, I started coaching with Renny and she gave me so much support, guidance with my diet and lifestyle changes during treatments to help restore my immune system. She did regular one on one telephonic sessions with me. She gave myself and family so much hope. 5 years on, I am still thriving."',
    image:
      '/assets/rocket-local/testimonial-south-african-woman.png',
    imageAlt:
      'South African woman with a warm, resilient smile, natural light, healthy and thriving appearance',
    outcome: '5 years on, still thriving',
  },
  {
    id: 2,
    name: 'M A Monareng',
    condition: 'Renal Carcinoma, Stage 4',
    conditionTag: 'Renal Cancer',
    location: 'Limpopo, South Africa',
    locationTag: 'South Africa',
    quote:
      '"I underwent chemo treatment for stage 4 renal cancer for a short period and stopped, as it was not helping. That\'s when Renny took over, and with her determined coaching — helping with nutritional diets and lifestyle changes I needed to make to allow my body to heal — she was incredibly supportive."',
    fullStory:
      '"I underwent chemo treatment for stage 4 renal cancer for a short period and stopped, as it was not helping. That\'s when Renny took over, and with her determined coaching — helping with nutritional diets and lifestyle changes I needed to make to allow my body to heal — she was incredibly supportive. She even attended Oncology sessions with me when I resumed chemo treatment. Within nine months there was no trace of cancer; tumours around the body had cleared and no cancer was detected. I am now six years on and in good health."',
    image: '/assets/images/monareng_testimonial.png',
    imageAlt:
      'M A Monareng, older Black South African man, cancer survivor from Limpopo, South Africa',
    outcome: '6 years on — no trace of cancer',
  },
  {
    id: 3,
    name: 'Masonke L',
    condition: 'Caregiver Support',
    conditionTag: 'Caregiver',
    location: 'Pretoria, South Africa',
    locationTag: 'South Africa',
    quote:
      '"Being a caregiver is a difficult task, even more so when it is your own child. While the task could have been easier, what makes it more difficult are the emotions experienced."',
    fullStory:
      '"Being a caregiver is a difficult task, even more so when it is your own child. While the task could have been easier, what makes it more difficult are the emotions experienced. Renny and her programmes have been incredibly helpful. She provided a comprehensive assessment and approach in helping me deal better with my task. I am in a better place emotionally to continue supporting my son."',
    image: '/assets/images/masonke_testimonial.png',
    imageAlt:
      'Masonke L, elderly Black South African grandmother wearing a colourful African print blouse, warm and dignified expression, caregiver from Pretoria, South Africa',
    outcome: 'Emotionally stronger to support her son',
  },
  {
    id: 4,
    name: 'Kayla H',
    condition: 'Breast Cancer, Stage 2',
    conditionTag: 'Breast Cancer',
    location: 'New York, USA',
    locationTag: 'USA',
    quote:
      '"Renny helped me get in touch with my emotions and assisted me to release my deep-seated emotions. Her process allowed me to cope better with treatment as I had a positive outlook and shift in perspective."',
    fullStory:
      '"Renny helped me get in touch with my emotions and assisted me to release my deep-seated emotions. Her process allowed me to cope better with treatment as I had a positive outlook and shift in perspective. She was really helpful at the most confusing and darkest time of my cancer journey."',
    image: '/assets/images/kayla_testimonial.png',
    imageAlt:
      'Kayla H, young light skin tone mixed American woman with a warm hopeful smile, breast cancer survivor from New York',
    outcome: 'Positive outlook through treatment',
  },
  {
    id: 5,
    name: 'Annika R',
    condition: 'Breast Cancer, 3rd Diagnosis',
    conditionTag: 'Breast Cancer',
    location: 'Finland',
    locationTag: 'Europe',
    quote:
      '"During the third round of cancer diagnosis I found myself in a dark place. Renny\'s holistic coaching helped me find my true self and find a purpose in life."',
    fullStory:
      '"During the third round of cancer diagnosis I found myself in a dark place. Renny\'s holistic coaching helped me find my true self and find a purpose in life. I am eager to see where Renny\'s coaching will take me!"',
    image: '/assets/images/annika_testimonial.png',
    imageAlt:
      'Annika R, middle-aged white woman with warm smile and natural expression, cancer survivor from Finland',
    outcome: 'Found purpose through holistic coaching',
  },
  {
    id: 6,
    name: 'Janet K',
    condition: 'Breast Cancer Diagnosis',
    conditionTag: 'Breast Cancer',
    location: 'Chicago, USA',
    locationTag: 'USA',
    quote: '"Holy M, Renny!! the surgeon said he found no cancer when he did the surgery."',
    fullStory:
      '"Holy M, Renny!! the surgeon said he found no cancer when he did the surgery." — Janet received this extraordinary news just 3 weeks after her initial diagnosis and 2 weeks before her scheduled surgery, following an intensive emotional release healing process guided by Renny.',
    subtext:
      'Janet received this news, after surgery following an intensive emotional release healing process guided by Renny two weeks prior to her surgery.',
    image:
      '/assets/rocket-local/testimonial-american-woman.png',
    imageAlt:
      'Janet K, American woman with a joyful, relieved expression, breast cancer survivor from Chicago',
    outcome: 'No cancer found at surgery',
  },
  {
    id: 7,
    name: 'Maretha',
    condition: 'Breast Cancer',
    conditionTag: 'Breast Cancer',
    location: 'Johannesburg, South Africa',
    locationTag: 'South Africa',
    quote:
      '"Renny\'s coaching gave me the strength and guidance I needed to navigate my breast cancer journey with hope and resilience."',
    fullStory:
      '"Renny\'s coaching gave me the strength and guidance I needed to navigate my breast cancer journey with hope and resilience."',
    image: '/assets/images/no_image.png',
    imageAlt:
      'Maretha, South African woman, breast cancer survivor from Johannesburg, South Africa',
  },
];

const CONDITIONS = ['All Conditions', 'Breast Cancer', 'Renal Cancer', 'Caregiver'];
const LOCATIONS = ['All Locations', 'South Africa', 'USA', 'Europe'];

function StoryCard({ story }: { story: Story }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = story.fullStory.length > story.quote.length;

  return (
    <article className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      {/* Photo */}
      <div className="relative h-56 overflow-hidden">
        <AppImage
          src={story.image}
          alt={story.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Outcome badge */}
        {story.outcome && (
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
              {story.outcome}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        {/* Name & meta */}
        <div className="mb-5">
          <h3 className="font-bold text-lg text-foreground mb-1">{story.name}</h3>
          <p className="text-primary text-xs font-semibold tracking-wide mb-0.5">{story.condition}</p>
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {story.location}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="flex-1 mb-5">
          <p className="font-serif text-base md:text-lg leading-relaxed italic text-foreground/85">
            {expanded ? story.fullStory : story.quote}
          </p>
          {expanded && story.subtext && (
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed not-italic border-l-2 border-primary/30 pl-4">
              {story.subtext}
            </p>
          )}
        </blockquote>

        {/* Expand / collapse */}
        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="self-start flex min-h-11 items-center gap-2 text-primary text-xs font-semibold tracking-wide hover:gap-3 transition-all duration-200 group/btn"
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Read full story'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
}

export default function StoriesPage() {
  const [conditionFilter, setConditionFilter] = useState('All Conditions');
  const [locationFilter, setLocationFilter] = useState('All Locations');

  const filtered = useMemo(() => {
    return stories.filter((s) => {
      const matchCondition =
        conditionFilter === 'All Conditions' || s.conditionTag === conditionFilter;
      const matchLocation =
        locationFilter === 'All Locations' || s.locationTag === locationFilter;
      return matchCondition && matchLocation;
    });
  }, [conditionFilter, locationFilter]);

  const activeFilters =
    conditionFilter !== 'All Conditions' || locationFilter !== 'All Locations';

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
              Voices from the Journey
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] mb-6">
              Their Words,{' '}
              <span className="italic font-black text-primary">Not Ours.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Real stories from real people who walked through cancer — and came out the other side. Every journey is unique. Every voice matters.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 md:px-10 border-b border-border bg-card/40 md:sticky md:top-20 z-30 backdrop-blur-md" aria-label="Filter stories">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {/* Condition filter */}
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider hidden sm:block">Condition:</span>
                <div className="flex flex-wrap gap-2">
                  {CONDITIONS.map((c) => (
                    <button
                      key={c}
                      onClick={() => setConditionFilter(c)}
                      className={`min-h-11 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                        conditionFilter === c
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              {/* Location filter */}
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider hidden sm:block">Location:</span>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLocationFilter(l)}
                      className={`min-h-11 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                        locationFilter === l
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {activeFilters && (
                <button
                  onClick={() => { setConditionFilter('All Conditions'); setLocationFilter('All Locations'); }}
                  className="flex min-h-11 items-center text-xs text-muted-foreground hover:text-primary transition-colors duration-200 underline underline-offset-2"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          <div className="max-w-7xl mx-auto mt-3">
            <p className="text-muted-foreground text-xs">
              Showing <span className="text-foreground font-semibold">{filtered.length}</span> of {stories.length} stories
              {activeFilters && (
                <span className="ml-1">
                  {conditionFilter !== 'All Conditions' && ` · ${conditionFilter}`}
                  {locationFilter !== 'All Locations' && ` · ${locationFilter}`}
                </span>
              )}
            </p>
          </div>
        </section>

        {/* Stories grid */}
        <section className="py-16 md:py-24 px-6 md:px-10" aria-label="Client stories">
          <div className="max-w-7xl mx-auto">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-muted-foreground text-lg mb-4">No stories match your current filters.</p>
                <button
                  onClick={() => { setConditionFilter('All Conditions'); setLocationFilter('All Locations'); }}
                  className="min-h-11 text-primary font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-12 md:py-16 px-6 md:px-10 border-t border-border bg-card/30">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl md:text-5xl font-black text-primary mb-1">6+</p>
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">Countries Reached</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-black text-primary mb-1">99%</p>
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">Client Satisfaction</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-black text-primary mb-1">5+</p>
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">Years of Practice</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center py-16 md:py-20 px-8 rounded-3xl bg-primary/5 border border-primary/15">
            <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4">
              Your Story Awaits
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-foreground">
              Get ready to write your{' '}
              <span className="italic font-black text-primary">positive journey's</span>{' '}
              story with us.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              When you feel ready, we're here to walk alongside you — at your own pace, on your own terms.
            </p>
            <Link
              href="/contact#booking"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              Book a Free 10-Min WhatsApp Call Now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
