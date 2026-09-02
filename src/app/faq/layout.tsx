import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Cancer Coaching with ThriveThroughCancer',
  description: 'Answers to common questions about cancer coaching, the PEMS framework, session types, pricing, and what to expect when working with Renny Letswalo at ThriveThroughCancer.',
  keywords: [
    'cancer coaching FAQ',
    'cancer coaching questions',
    'what is cancer coaching',
    'PEMS framework FAQ',
    'cancer coaching cost',
    'cancer coaching online',
    'ThriveThroughCancer FAQ',
  ],
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions — Cancer Coaching with ThriveThroughCancer',
    description: 'Answers to common questions about cancer coaching, the PEMS framework, session types, and what to expect with Renny Letswalo.',
    url: 'https://thrivethroughcancer.co.za/faq',
    type: 'website',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
