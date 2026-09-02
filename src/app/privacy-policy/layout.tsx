import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ThriveThroughCancer',
  description: 'ThriveThroughCancer privacy policy — how we collect, use, and protect your personal information. Your privacy and confidentiality are our highest priority.',
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/privacy-policy',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
