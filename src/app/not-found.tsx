import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
        {/* Decorative blobs */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse, rgba(196, 112, 74, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse, rgba(232, 196, 154, 0.06) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Card */}
        <div className="relative z-10 glass-card rounded-3xl px-6 py-10 sm:px-10 sm:py-14 max-w-lg w-full text-center">
          {/* 404 number */}
          <p
            className="font-serif font-bold leading-none mb-4 text-glow-primary"
            style={{
              fontSize: 'clamp(5rem, 20vw, 9rem)',
              color: 'rgba(196, 112, 74, 0.18)',
              letterSpacing: '-0.04em',
            }}
            aria-hidden="true"
          >
            404
          </p>

          {/* Icon badge */}
          <div className="flex justify-center mb-6 -mt-4">
            <span
              className="inline-flex items-center justify-center w-14 h-14 rounded-full"
              style={{
                background: 'rgba(196, 112, 74, 0.12)',
                border: '1px solid rgba(196, 112, 74, 0.25)',
              }}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                style={{ color: '#C4704A' }}
              >
                <path d="M9.172 16.172a4 4 0 015.656 0" />
                <path d="M9 10h.01M15 10h.01" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
          </div>

          <h1 className="font-serif text-3xl font-semibold text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            The page you&apos;re looking for has moved or doesn&apos;t exist.
            Let&apos;s get you back on your path to thriving.
          </p>

          {/* CTA */}
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
              <path d="M9 21V12h6v9" />
            </svg>
            Back to Homepage
          </Link>

          {/* Secondary links */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary transition-colors duration-200">
              Services
            </Link>
            <Link href="/resources" className="hover:text-primary transition-colors duration-200">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}