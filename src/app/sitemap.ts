import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thrivethroughcancer.co.za';
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/faq',
    '/stories',
    '/resources',
    '/privacy-policy',
    '/terms-of-service',
    '/resources/what-is-cancer-coaching',
    '/resources/neuroplasticity-and-cancer-recovery',
    '/resources/positive-psychology-and-cancer',
    '/resources/radical-remission-factors',
    '/resources/wellness-tips-during-treatment',
    '/resources/pems-framework-explained',
    '/resources/coaching-insights-from-renny',
    '/resources/emotional-release-and-cancer-healing',
    '/resources/healing-through-grief-and-identity-loss',
    '/resources/spiritual-connection-and-cancer-recovery',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' || route === '/resources' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' || route === '/services' ? 0.9 : 0.7,
  }));
}
