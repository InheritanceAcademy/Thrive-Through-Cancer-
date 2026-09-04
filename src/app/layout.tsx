import { Suspense } from 'react';
import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thrivethroughcancer.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ThriveThroughCancer | Cancer Health Coaching by Renny Letswalo',
    template: '%s | ThriveThroughCancer',
  },
  description:
    'Personalised online cancer health coaching for patients, survivors and caregivers. Book a free 10-minute Discovery Chemistry WhatsApp Call with Renny Letswalo.',
  keywords: [
    'cancer coaching',
    'cancer health coach',
    'cancer support',
    'psycho-oncology',
    'radical remission',
    'PEMS framework',
    'cancer survivor coaching',
    'cancer caregiver support',
    'whole person healing',
    'Renny Letswalo',
    'ThriveThroughCancer',
    'cancer coach South Africa',
    'online cancer coaching',
  ],
  authors: [{ name: 'Renny Letswalo', url: baseUrl }],
  creator: 'Renny Letswalo',
  publisher: 'ThriveThroughCancer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/brand/thrive-through-cancer-icon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/assets/brand/apple-touch-icon.png' }],
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'ThriveThroughCancer | Cancer Health Coaching',
    description: 'Personalised online cancer health coaching for patients, survivors and caregivers. Book a free 10-minute Discovery Chemistry WhatsApp Call.',
    siteName: 'ThriveThroughCancer',
    locale: 'en_ZA',
    images: [
      {
        url: '/assets/brand/thrive-through-cancer-og.png',
        width: 1200,
        height: 630,
        alt: 'ThriveThroughCancer — compassionate cancer health coaching by Renny Letswalo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThriveThroughCancer | Cancer Health Coaching',
    description: 'Personalised online cancer health coaching for patients, survivors and caregivers. Book a free 10-minute Discovery Chemistry WhatsApp Call.',
    images: ['/assets/brand/thrive-through-cancer-og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <WhatsAppButton />
        <CookieConsent />
</body>
    </html>
  );
}
