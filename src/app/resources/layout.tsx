import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healing Resources — Cancer Coaching, Emotional Release & Whole-Person Healing',
  description: 'Evidence-based articles on cancer coaching, emotional release, neuroplasticity, positive psychology, and the PEMS framework. Written by Renny Letswalo to support your whole-person healing journey.',
  keywords: [
    'cancer healing resources',
    'emotional release cancer',
    'cancer coaching articles',
    'PEMS framework',
    'radical remission',
    'neuroplasticity cancer',
    'positive psychology cancer',
    'psycho-oncology resources',
    'cancer wellness tips',
    'whole person healing',
  ],
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/resources',
  },
  openGraph: {
    title: 'Healing Resources — Cancer Coaching, Emotional Release & Whole-Person Healing',
    description: 'Evidence-based articles on cancer coaching, emotional release, neuroplasticity, and the PEMS framework by Renny Letswalo.',
    url: 'https://thrivethroughcancer.co.za/resources',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healing Resources — Cancer Coaching, Emotional Release & Whole-Person Healing',
    description: 'Evidence-based articles on cancer coaching, emotional release, neuroplasticity, and the PEMS framework by Renny Letswalo.',
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
