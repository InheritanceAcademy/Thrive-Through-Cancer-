import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Renny — Book a Free Discovery WhatsApp Call or Send an Enquiry',
  description: 'Get in touch with ThriveThroughCancer. Send Renny Letswalo a message, ask about coaching services, or book your free 10-minute Discovery WhatsApp Call. Available worldwide via WhatsApp. Mon–Fri, 8am–6pm SAST.',
  keywords: [
    'contact cancer coach',
    'book cancer coaching',
    'free discovery call cancer',
    'cancer coaching enquiry',
    'Renny Letswalo contact',
    'ThriveThroughCancer contact',
    'cancer support contact',
  ],
  alternates: {
    canonical: 'https://thrivethroughcancer.co.za/contact',
  },
  openGraph: {
    title: 'Contact Renny — Book a Free Discovery WhatsApp Call or Send an Enquiry',
    description: 'Get in touch with ThriveThroughCancer. Book your free 10-minute Discovery WhatsApp Call or send an enquiry to Renny Letswalo.',
    url: 'https://thrivethroughcancer.co.za/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Renny — Book a Free Discovery WhatsApp Call or Send an Enquiry',
    description: 'Get in touch with ThriveThroughCancer. Book your free 10-minute Discovery WhatsApp Call or send an enquiry to Renny Letswalo.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
