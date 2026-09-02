import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from '@/app/components/AboutSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import BookingSection from '@/app/components/BookingSection';
import StructuredData from '@/app/components/StructuredData';

export const metadata: Metadata = {
  title: 'ThriveThroughCancer | Cancer Health Coaching by Renny Letswalo',
  description: 'Personalised online cancer health coaching for patients, survivors and caregivers. Book a free 10-minute Discovery Chemistry WhatsApp Call with Renny Letswalo.',
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za',
  },
  openGraph: {
    title: 'ThriveThroughCancer | Cancer Health Coaching',
    description: 'Personalised online cancer health coaching for patients, survivors and caregivers. Book a free 10-minute Discovery Chemistry WhatsApp Call.',
    url: 'https://thrivethroughcancer.co.za',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
