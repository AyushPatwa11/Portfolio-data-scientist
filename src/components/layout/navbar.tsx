'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { navigationItems } from '@/config/navigation';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { useTheme } from '@/hooks/use-theme';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { transitionSpring, transitionEase } from '@/lib/animation';

/**
 * Production-ready Navigation Bar.
 * Implementations: Responsive, Accessible (WCAG AA), Dark/Light mode integration,
 * Sticky scroll animations, and standard design system tokens.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollY = useScrollPosition();
  const { setTheme, isMounted, isDark } = useTheme();
  const isReducedMotion = useReducedMotion();

  const isScrolled = scrollY > 10;

  // Toggle dark/light theme state
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  // Close mobile drawer on resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trap focus or block background scrolling when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navTransition = isReducedMotion ? { duration: 0 } : transitionEase;
  const menuTransition = isReducedMotion ? { duration: 0 } : transitionSpring;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled
          ? 'bg-surface/80 backdrop-blur-md border-border-custom py-3'
          : 'bg-transparent border-transparent py-5',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Wordmark Logo */}
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
          aria-label="Ayush Patwa Homepage"
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        {/* Desktop Main Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Desktop navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Utility Toolbar (Resume + Theme + Menu toggle) */}
        <div className="flex items-center space-x-3">
          {/* Resume PDF Action Button */}
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 border border-border-custom bg-surface text-text-primary hover:border-accent hover:text-accent px-4 py-2 text-xs font-mono rounded transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label="Download Resume PDF"
          >
            <FileText size={14} />
            <span>RESUME</span>
          </a>

          {/* Theme State Toggle Icon Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-border-custom bg-surface text-text-secondary hover:text-text-primary hover:border-accent rounded transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label="Toggle visual color theme"
            type="button"
          >
            {isMounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile Hamburguer Action Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border border-border-custom bg-surface text-text-secondary hover:text-text-primary hover:border-accent rounded transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer slide-over menu layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={navTransition}
            className="fixed inset-0 top-[65px] z-40 w-full h-[calc(100vh-65px)] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={menuTransition}
              className="absolute right-0 top-0 w-[280px] h-full bg-surface border-l border-border-custom p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-4 pt-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-base font-medium text-text-secondary hover:text-text-primary border-b border-border-custom transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Toolbar Footer */}
              <div className="pt-6 border-t border-border-custom space-y-4">
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 border border-border-custom bg-surface text-text-primary hover:border-accent hover:text-accent w-full py-3 text-sm font-mono rounded transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText size={16} />
                  <span>DOWNLOAD RESUME</span>
                </a>
                <p className="text-center font-mono text-[10px] text-text-secondary uppercase">
                  {siteConfig.location} {'//'} {siteConfig.timezone}
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
