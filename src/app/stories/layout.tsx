import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Stories — Real Cancer Healing Journeys | ThriveThroughCancer',
  description: 'Read real stories from cancer patients, survivors, and caregivers who have worked with Renny Letswalo at ThriveThroughCancer. Breast cancer, renal cancer, and caregiver journeys from South Africa, Europe, and the USA.',
  keywords: [
    'cancer coaching testimonials',
    'cancer healing stories',
    'cancer survivor stories',
    'ThriveThroughCancer stories',
    'Renny Letswalo testimonials',
    'breast cancer coaching',
    'renal cancer coaching',
    'cancer caregiver stories',
  ],
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/stories',
  },
  openGraph: {
    title: 'Client Stories — Real Cancer Healing Journeys | ThriveThroughCancer',
    description: 'Real stories from cancer patients, survivors, and caregivers who have worked with Renny Letswalo at ThriveThroughCancer.',
    url: 'https://thrivethroughcancer.co.za/stories',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Stories — Real Cancer Healing Journeys | ThriveThroughCancer',
    description: 'Real stories from cancer patients, survivors, and caregivers who have worked with Renny Letswalo.',
  },
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
