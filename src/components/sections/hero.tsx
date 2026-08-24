'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowRight, FileText, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { transitionEase, transitionSpring } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Premium Hero Section Component.
 * Implements desktop split-screen layout (text left, portrait photo right).
 * Built with strict design tokens, Framer Motion sequence animations,
 * and accessibility keyboard navigation aids.
 */
export function Hero() {
  const isReducedMotion = useReducedMotion();

  // Sequence delays
  const delayStep = isReducedMotion ? 0 : 0.1;

  return (
    <section
      className="relative flex flex-col justify-start pt-6 pb-16 md:pt-10 md:pb-24"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typographic Statements */}
        <div className="md:col-span-7 flex flex-col space-y-6 text-left">
          {/* Dynamic Uptime Telemetry Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionEase, delay: 0 }}
            className="flex items-center space-x-3"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-2xs uppercase tracking-wider text-text-secondary">
              {siteConfig.status.label}
            </span>
            <span className="hidden sm:block w-px h-3 bg-border-custom" aria-hidden="true" />
            <span className="hidden sm:flex items-center gap-1 font-mono text-2xs uppercase tracking-wider text-text-secondary/60">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1" /><circle cx="4" cy="4" r="1" fill="currentColor" /></svg>
              21.235° N, 81.346° E
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionEase, delay: delayStep }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]"
          >
            Structuring data,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
              engineering intelligence.
            </span>
          </motion.h1>

          {/* Subheadline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionEase, delay: delayStep * 2 }}
            className="text-base text-text-secondary leading-relaxed max-w-lg"
          >
            I am a Computer Science student at university, focused on translating statistical data
            pipelines into clean, deployable algorithms. I specialize in Python, Java, and SQL,
            building toward engineering intelligent, production-ready AI systems.
          </motion.p>

          {/* Call to Actions Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionEase, delay: delayStep * 3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 bg-text-primary text-background hover:bg-accent hover:text-white px-5 py-3 text-sm font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all"
              aria-label="View featured projects"
            >
              <span>View Projects</span>
              <ArrowRight size={14} />
            </a>

            {/* Secondary CTA */}
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-border-custom bg-surface text-text-primary hover:border-accent hover:text-accent px-5 py-3 text-sm font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all"
              aria-label="Download PDF Resume"
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </a>

            {/* Let's Connect Link */}
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 text-xs font-mono text-text-secondary hover:text-text-primary px-4 py-3 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all"
              aria-label="Navigate to contact section"
            >
              <Mail size={12} />
              <span>{"LET'S CONNECT"}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Portrait Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...transitionSpring, delay: delayStep * 4 }}
          className="md:col-span-5 flex items-end justify-center w-full relative"
          style={{ minHeight: '420px' }}
        >
          {/* Ambient glow backdrop — visible in dark mode only */}
          <div
            className="absolute inset-x-0 bottom-0 top-[15%] rounded-full opacity-0 dark:opacity-20 blur-3xl pointer-events-none transition-opacity"
            style={{
              background:
                'radial-gradient(ellipse at 50% 80%, hsl(224, 90%, 56%) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />



          {/* Portrait image — transparent background, bottom fade baked in */}
          <div className="relative w-full h-full flex items-end justify-center">
            <Image
              src="/images/avatar.png"
              alt="Portrait of Ayush Patwa"
              width={560}
              height={610}
              priority
              className="object-contain object-bottom w-full max-w-[480px] select-none"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delayStep * 5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1"
        aria-hidden="true"
      >
        <span className="font-mono text-2xs uppercase tracking-widest text-text-secondary">
          Scroll
        </span>
        <motion.div
          animate={isReducedMotion ? {} : { y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} className="text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
