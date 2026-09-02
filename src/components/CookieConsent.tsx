'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'ttc_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash immediately on load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-border px-5 py-4 sm:px-7 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-2xl">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground font-medium mb-0.5">We use cookies to improve your experience.</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We use essential cookies to keep the site running and analytics to understand how visitors use it. Read our{' '}
            <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
              Privacy Policy
            </Link>{' '}
            for details.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-2.5 rounded-full border border-border hover:border-foreground/30 min-h-[40px]"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none text-xs font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors duration-200 min-h-[40px]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
