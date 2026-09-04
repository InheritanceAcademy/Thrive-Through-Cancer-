import React from 'react';

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thrivethroughcancer.co.za';

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ThriveThroughCancer',
    url: baseUrl,
    logo: `${baseUrl}/assets/brand/thrive-through-cancer-logo.png`,
    description:
      'Personalised online cancer health coaching for patients, survivors and caregivers.',
    areaServed: 'Worldwide',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@thrivethroughcancer.co.za',
      availableLanguage: 'English',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'ThriveThroughCancer | Cancer Health Coaching',
    description:
      'Personalised online cancer health coaching for patients, survivors and caregivers. Book a free 10-minute Discovery Chemistry WhatsApp Call.',
    url: baseUrl,
    publisher: {
      '@type': 'ProfessionalService',
      name: 'ThriveThroughCancer',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/brand/thrive-through-cancer-logo.png`,
      },
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cancer Health Coaching',
    provider: {
      '@type': 'ProfessionalService',
      name: 'ThriveThroughCancer',
      url: baseUrl,
    },
    serviceType: 'Health Coaching',
    description:
      'One-on-one cancer health coaching sessions for patients in treatment, survivors, and caregivers.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free Discovery Chemistry WhatsApp Call',
        price: '0',
        priceCurrency: 'ZAR',
        description: '10-minute introductory WhatsApp call',
      },
      {
        '@type': 'Offer',
        name: 'Single Session',
        price: '750',
        priceCurrency: 'ZAR',
        description: '90-minute one-on-one coaching session',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
