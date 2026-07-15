'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { navigationItems } from '@/config/navigation';

/**
 * Footer Component.
 * Minimal and elegant, displaying copyright, links, and system versioning variables.
 * Includes a back-to-top button.
 */
export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-border-custom bg-background py-12 md:py-16 text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Block: Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="font-display text-base font-bold tracking-wider text-text-primary hover:text-accent transition-colors"
            >
              {siteConfig.name.toUpperCase()}
            </Link>
            <p className="text-xs max-w-sm leading-relaxed">
              Computer Science student building data-driven pipelines and intelligent software.
              Fusing empirical analysis with clean, production-ready engineering.
            </p>
          </div>

          {/* Middle Block: Navigation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-2xs uppercase tracking-widest text-text-primary">
              Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-2 text-xs" aria-label="Footer Navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Block: Social Coordinates */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <h4 className="font-mono text-2xs uppercase tracking-widest text-text-primary md:text-right">
              Social Links
            </h4>
            <div className="flex md:justify-end space-x-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent p-1"
                aria-label="GitHub profile"
              >
                <Github size={16} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent p-1"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.links.email}
                className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent p-1"
                aria-label="Direct Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Lower footer: Copyright and system versioning */}
        <div className="pt-8 border-t border-border-custom/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-2xs font-mono">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with Next.js & Tailwind CSS. Designed with{' '}
              <Heart size={8} className="text-accent fill-accent" /> for recruiters.
            </p>
          </div>

          {/* Version stamp + back-to-top */}
          <div className="flex items-center space-x-6 sm:justify-end">
            <div className="space-x-3 text-text-secondary uppercase">
              <span>RELEASE: {siteConfig.resumeVersion}</span>
              <span>UPDATED: {siteConfig.resumeLastUpdated}</span>
            </div>

            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-1.5 border border-border-custom bg-surface hover:border-accent hover:text-accent p-2 text-2xs rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp size={12} />
              <span className="hidden sm:inline">BACK_TO_TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
