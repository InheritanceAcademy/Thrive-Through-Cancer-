import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Renny Letswalo — Board Certified Cancer Health Coach',
  description: 'Meet Renny Letswalo — Board Certified Health Coach, Functional Medicine Coach, Radical Remission Teacher, and Psycho-Oncology specialist with over 5 years supporting cancer patients, survivors, and caregivers worldwide.',
  keywords: [
    'Renny Letswalo',
    'cancer health coach',
    'board certified health coach',
    'radical remission teacher',
    'functional medicine coach',
    'psycho-oncology',
    'cancer coach South Africa',
    'PEMS framework',
  ],
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/about',
  },
  openGraph: {
    title: 'About Renny Letswalo — Board Certified Cancer Health Coach',
    description: 'Meet Renny Letswalo — Board Certified Health Coach, Radical Remission Teacher, and Psycho-Oncology specialist.',
    url: 'https://thrivethroughcancer.co.za/about',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Renny Letswalo — Board Certified Cancer Health Coach',
    description: 'Meet Renny Letswalo — Board Certified Health Coach, Radical Remission Teacher, and Psycho-Oncology specialist.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
