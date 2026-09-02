declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

/**
 * Track a custom GA4 event
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, unknown> = {}
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track booking CTA clicks
 */
export function trackBookingCTA(source: string) {
  trackEvent('booking_cta_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });
}

/**
 * Track contact form submissions
 */
export function trackContactForm(formType: string) {
  trackEvent('form_submit', {
    event_category: 'lead',
    event_label: formType,
  });
}

/**
 * Track section views (for scroll depth / section engagement)
 */
export function trackSectionView(sectionName: string) {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
  });
}
