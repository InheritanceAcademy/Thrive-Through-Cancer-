import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancer Coaching Services — Individual, Foundation & 12-Week Programs',
  description: 'Explore ThriveThroughCancer\'s coaching services: one-on-one sessions, Foundation Session, 12-Week Program, Group Healing Circles, and Caregiver Support. Personalised whole-person cancer coaching by Renny Letswalo.',
  keywords: [
    'cancer coaching services',
    'cancer coaching program',
    '12 week cancer coaching',
    'cancer caregiver support',
    'group cancer coaching',
    'individual cancer coaching',
    'PEMS coaching',
    'cancer wellness program',
    'Renny Letswalo coaching',
  ],
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/services',
  },
  openGraph: {
    title: 'Cancer Coaching Services — Individual, Foundation & 12-Week Programs',
    description: 'Personalised whole-person cancer coaching services by Renny Letswalo. One-on-one sessions, Foundation Session, 12-Week Program, and more.',
    url: 'https://thrivethroughcancer.co.za/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancer Coaching Services — Individual, Foundation & 12-Week Programs',
    description: 'Personalised whole-person cancer coaching services by Renny Letswalo.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
