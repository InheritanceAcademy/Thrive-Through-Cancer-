'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { trackBookingCTA } from '@/lib/analytics';

const navLinks = [
{ label: 'Services', href: '/services' },
{ label: 'About', href: '/about' },
{ label: 'Resources', href: '/resources' },
{ label: 'FAQ', href: '/faq' },
{ label: 'Stories', href: '/stories' },
{ label: 'Contact', href: '/contact' }];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {document.body.style.overflow = '';};
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3 md:py-4' : 'py-5 md:py-8'}`
        }>

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 flex-shrink overflow-hidden items-center group" aria-label="ThriveThroughCancer home">
            <AppLogo className="w-[190px] sm:w-[220px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks?.slice(0, 5)?.map((link) =>
            <Link
              key={link?.href}
              href={link?.href}
              className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 not-italic mb-[-27px] font-semibold">

                {link?.label}
              </Link>
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex flex-shrink-0 items-center gap-4">
            <Link
              href="/#booking"
              className="!hidden md:!inline-flex btn-primary text-sm mt-[-7px] ml-[11px] mr-1"
              aria-label="Book a free 10-minute Discovery WhatsApp Call"
              onClick={() => trackBookingCTA('header_desktop')}>

              Free WhatsApp Call
            </Link>
            <button
              className="md:hidden flex flex-shrink-0 items-center justify-center w-11 h-11 rounded-full border border-border hover:border-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}>

              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} className="text-foreground" />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
        }
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(15,13,11,0.95)' }}
        aria-hidden={!menuOpen}>

        <nav className="flex flex-col items-center justify-center h-full gap-10 px-8" aria-label="Mobile navigation">
          {navLinks?.map((link) =>
          <Link
            key={link?.href}
            href={link?.href}
            onClick={handleNavClick}
            className="font-serif text-3xl font-light italic text-foreground hover:text-primary transition-colors duration-200">

              {link?.label}
            </Link>
          )}
          <Link
            href="/#booking"
            onClick={() => { handleNavClick(); trackBookingCTA('header_mobile'); }}
            className="btn-primary mt-4 text-base px-8 py-4">

            Free WhatsApp Call
          </Link>
        </nav>
      </div>
    </>
  );

}
