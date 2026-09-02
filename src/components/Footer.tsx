import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Stories', href: '/stories' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-of-service' },
];

const socialLinks = [
  { name: 'Instagram', icon: 'HeartIcon', href: '#' },
  { name: 'LinkedIn', icon: 'LinkIcon', href: '#' },
  { name: 'Facebook', icon: 'UserGroupIcon', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center" aria-label="ThriveThroughCancer home">
          <AppLogo className="w-[190px]" />
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social + Copyright */}
        <div className="flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
            >
              <Icon name={s.icon as 'HeartIcon'} size={16} />
            </a>
          ))}
          <span className="text-sm text-muted-foreground ml-2 hidden md:block">
            © 2026 ThriveThroughCancer
          </span>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">© 2026 ThriveThroughCancer</p>
    </footer>
  );
}
