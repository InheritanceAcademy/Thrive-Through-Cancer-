import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ThriveThroughCancer',
  description: 'ThriveThroughCancer terms of service — the terms and conditions governing use of our website and coaching services.',
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/terms-of-service',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
