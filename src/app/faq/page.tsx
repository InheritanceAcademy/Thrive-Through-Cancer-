'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  icon: string;
  color: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'coaching-process',
    label: 'The Coaching Process',
    icon: 'HeartIcon',
    color: 'text-primary border-primary/30 bg-primary/10',
    items: [
      {
        question: 'What exactly happens in a cancer coaching session?',
        answer:
          'Each session is a structured 60-minute conversation held via video call. We begin by checking in on where you are — physically, emotionally, mentally — then work through a specific focus area you bring, whether that\'s managing fear, rebuilding identity, navigating relationships, or preparing for a medical appointment. Sessions are guided but not scripted; they follow your needs. Between sessions, you\'ll have practices and reflections to integrate what we\'ve explored.',
      },
      {
        question: 'How is cancer coaching different from therapy or counselling?',
        answer:
          'Therapy typically focuses on processing past trauma and diagnosing psychological conditions. Coaching is forward-facing — it works with where you are now and where you want to go. A cancer coach is not a mental health clinician and does not diagnose or treat psychological disorders. If deeper therapeutic work is needed, we will say so and refer you appropriately. Coaching and therapy can run in parallel and often complement each other well.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'Most clients begin with a 3-month programme (12 sessions), which provides enough time to build meaningful momentum and address multiple dimensions of the cancer journey. Some clients continue beyond that; others find a shorter intensive more suitable. We discuss this openly in the Discovery WhatsApp Call and review it regularly throughout the programme. There is no pressure to commit to more than feels right for you.',
      },
      {
        question: 'What is the PEMS framework you use?',
        answer:
          'PEMS stands for Physical, Emotional, Mental, and Spiritual — the four dimensions of the whole person that cancer touches. Rather than addressing only symptoms or mindset in isolation, our coaching holds all four in view simultaneously. A session might focus on the emotional weight of a scan result while also exploring the mental narratives that amplify fear and the spiritual questions that arise around meaning and mortality. This integrated approach is what distinguishes ThriveThroughCancer from generic life coaching.',
      },
      {
        question: 'Do I need to be in active treatment to work with you?',
        answer:
          'No. Coaching is valuable at every stage: newly diagnosed, mid-treatment, post-treatment, in remission, or living with a chronic cancer diagnosis. Each stage brings its own challenges. Post-treatment, for example, is often described as one of the loneliest phases — the medical support structure withdraws just as the psychological weight of what happened begins to land. We work with clients across all stages.',
      },
    ],
  },
  {
    id: 'health-disclaimers',
    label: 'Health & Medical Disclaimers',
    icon: 'ShieldCheckIcon',
    color: 'text-accent border-accent/30 bg-accent/10',
    items: [
      {
        question: 'Is cancer coaching a medical treatment?',
        answer:
          'No. Cancer coaching is not a medical treatment, and Renny Letswalo is not a medical doctor, oncologist, or licensed mental health professional. Coaching does not diagnose, treat, cure, or prevent any disease. Everything discussed in coaching sessions is complementary to — never a replacement for — your medical treatment plan. Always follow the guidance of your oncologist and medical team.',
      },
      {
        question: 'Can coaching cure cancer or improve my prognosis?',
        answer:
          'No coaching programme can guarantee any medical outcome, and we will never claim otherwise. What the research does show — and what we draw on — is that psychological wellbeing, stress reduction, and social support are associated with better quality of life, improved treatment tolerance, and in some studies, better clinical outcomes. We help you activate those factors. We do not promise or imply any specific medical result.',
      },
      {
        question: 'What if I\'m experiencing a mental health crisis?',
        answer:
          'If you are experiencing suicidal thoughts, severe depression, acute anxiety, or any mental health emergency, please contact a qualified mental health professional or emergency services immediately. Coaching is not equipped to manage mental health crises. In South Africa, the South African Depression and Anxiety Group (SADAG) helpline is available 24/7 at 0800 456 789. We take your safety seriously and will always refer you to appropriate professional support when needed.',
      },
      {
        question: 'Should I tell my oncologist I\'m working with a coach?',
        answer:
          'Yes, and we encourage it. Transparency with your medical team is important. Most oncologists are supportive of complementary wellbeing support, and some actively recommend it. If you\'d like, we can help you frame the conversation with your medical team about how coaching fits into your overall care plan.',
      },
      {
        question: 'Are the wellness practices you recommend safe during chemotherapy or radiation?',
        answer:
          'We tailor all practices to your current treatment phase and physical capacity. We do not recommend any supplement, dietary change, or physical practice without first understanding your treatment protocol. Mindfulness, breathwork, journalling, and gentle movement are generally safe and widely used in integrative oncology settings — but we always defer to your medical team on anything that could interact with your treatment.',
      },
    ],
  },
  {
    id: 'booking',
    label: 'Booking & Logistics',
    icon: 'CalendarDaysIcon',
    color: 'text-primary border-primary/30 bg-primary/10',
    items: [
      {
        question: 'What is the Discovery Call and is it really free?',
        answer:
          'Yes, completely free and with no obligation. The Discovery Call is a 10-minute WhatsApp conversation where we get to know each other, you share where you are in your journey, and we explore whether coaching is the right fit for you right now. There is no sales pressure. If we\'re not the right match, we\'ll say so honestly and point you toward something more suitable.',
      },
      {
        question: 'Where do sessions take place?',
        answer:
          'All sessions are conducted via secure video call (Zoom or Google Meet), which means you can join from anywhere in the world — from your home, a quiet corner of a hospital, or wherever you feel most comfortable. We work with clients across South Africa, the UK, Europe, and internationally. You will receive a calendar link and video link after booking.',
      },
      {
        question: 'What are your session times and time zones?',
        answer:
          'Renny is based in Johannesburg, South Africa (SAST, UTC+2). Sessions are available Monday to Friday, 8am–6pm SAST. For international clients, we work to find a time that suits your time zone. The contact page includes a live time zone converter to help you identify suitable slots before reaching out.',
      },
      {
        question: 'What is your cancellation and rescheduling policy?',
        answer:
          'We ask for at least 24 hours\' notice to reschedule or cancel a session. Sessions cancelled with less than 24 hours\' notice may be counted as a used session. We understand that cancer treatment schedules are unpredictable — if a medical appointment or treatment side effect forces a last-minute change, please let us know as soon as possible and we will always try to accommodate you.',
      },
      {
        question: 'Do you offer payment plans or sliding scale pricing?',
        answer:
          'We believe financial hardship should not be a barrier to support during one of life\'s most difficult seasons. We offer flexible payment plans for all programmes and, in limited cases, reduced-rate spots for clients experiencing genuine financial hardship. Please mention this during your Discovery WhatsApp Call — it will be handled with complete discretion and without judgment.',
      },
    ],
  },
  {
    id: 'outcomes',
    label: 'Outcomes & Expectations',
    icon: 'StarIcon',
    color: 'text-accent border-accent/30 bg-accent/10',
    items: [
      {
        question: 'What can I realistically expect from coaching?',
        answer:
          'Most clients report feeling less alone, more grounded, and more capable of navigating the uncertainty of their diagnosis within the first few sessions. Over a full programme, clients typically experience reduced anxiety and fear, greater clarity about what matters most to them, improved communication with family and medical teams, a stronger sense of agency and identity beyond the diagnosis, and practical tools for managing the day-to-day weight of cancer. These are not guarantees — they are the patterns we see consistently when clients engage fully with the process.',
      },
      {
        question: 'How quickly will I notice a difference?',
        answer:
          'Many clients notice a shift in perspective or emotional tone within the first 2–3 sessions. Deeper changes — in how you relate to fear, uncertainty, or your own identity — typically emerge over 6–12 weeks of consistent work. Coaching is not a quick fix, and we are honest about that. The most meaningful transformations take time and require your active participation between sessions.',
      },
      {
        question: 'What if I don\'t feel like coaching is working for me?',
        answer:
          'We check in on this regularly and take your feedback seriously. If after 3–4 sessions you feel the approach isn\'t resonating, we will have an honest conversation about why and what might serve you better — whether that\'s a different coaching style, a different type of support, or a pause. We would rather you find what truly helps than continue something that isn\'t working.',
      },
      {
        question: 'Can coaching help my family members or caregivers too?',
        answer:
          'Yes. We offer dedicated caregiver coaching for partners, parents, adult children, and close friends supporting someone with cancer. Caregivers carry an enormous and often invisible burden — they are frequently the last to ask for help. Our caregiver programme addresses compassion fatigue, communication challenges, grief, and the complex emotions of loving someone through a life-threatening illness.',
      },
      {
        question: 'Is there evidence that coaching helps cancer patients?',
        answer:
          'Yes. A growing body of research in psycho-oncology supports the effectiveness of structured psychological support for cancer patients. Studies published in journals including the Journal of Clinical Oncology, Psycho-Oncology, and Supportive Care in Cancer show that coaching and psychological interventions reduce anxiety and depression, improve quality of life, enhance treatment adherence, and in some studies correlate with better clinical outcomes. We are happy to share specific research references on request.',
      },
    ],
  },
];

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-primary/40 bg-primary/5' : 'border-border bg-surface/40 hover:border-border/80'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
            isOpen ? 'border-primary bg-primary/20 rotate-45' : 'border-border bg-surface'
          }`}
        >
          <Icon name="PlusIcon" size={12} className={isOpen ? 'text-primary' : 'text-muted-foreground'} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const visibleCategories =
    activeCategory === 'all'
      ? faqCategories
      : faqCategories.filter((c) => c.id === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 sm:pt-28 pb-20">
        {/* Hero */}
        <section className="relative px-4 sm:px-6 md:px-10 pb-16 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              <Icon name="QuestionMarkCircleIcon" size={14} />
              Frequently Asked Questions
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-5">
              Everything you need to know<br />
              <span className="text-primary italic">before you reach out</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              We know that starting something new — especially during a cancer journey — raises a lot of questions. These are the ones we hear most often. If yours isn't here, ask us directly.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-6 md:px-10 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === 'all' ?'bg-primary text-background border-primary' :'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground bg-surface/40'
                }`}
              >
                All Questions
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-background border-primary' :'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground bg-surface/40'
                  }`}
                >
                  <Icon name={cat.icon as 'HeartIcon'} size={13} />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="px-6 md:px-10">
          <div className="max-w-3xl mx-auto space-y-14">
            {visibleCategories.map((category) => (
              <div key={category.id}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${category.color}`}>
                    <Icon name={category.icon as 'HeartIcon'} size={16} />
                  </span>
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                    {category.label}
                  </h2>
                </div>

                {/* Accordion items */}
                <div className="space-y-3">
                  {category.items.map((item, idx) => {
                    const key = `${category.id}-${idx}`;
                    return (
                      <FAQAccordionItem
                        key={key}
                        item={item}
                        isOpen={!!openItems[key]}
                        onToggle={() => toggleItem(key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions CTA */}
        <section className="px-6 md:px-10 mt-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden px-8 py-10 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-5">
                  <Icon name="ChatBubbleLeftRightIcon" size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  Still have a question?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                  Every journey is different. If your question isn't answered here, reach out directly — no question is too small, and there's no obligation to book.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary px-8 py-3 text-sm font-semibold">
                    Ask a Question
                  </Link>
                  <Link
                    href="/#booking"
                    className="px-8 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                  >
                    Book Free Discovery WhatsApp Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
