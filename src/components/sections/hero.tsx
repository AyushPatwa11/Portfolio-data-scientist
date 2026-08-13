'use client';

import * as React from 'react';
import { ArrowRight, FileText, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { transitionEase, transitionSpring } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Premium Hero Section Component.
 * Implements desktop split-screen layout (text left, interactive SVG right).
 * Built with strict design tokens, Framer Motion sequence animations,
 * and accessibility keyboard navigation aids.
 */
export function Hero() {
  const isReducedMotion = useReducedMotion();

  // Sequence delays
  const delayStep = isReducedMotion ? 0 : 0.1;

  // Render responsive interactive data nodes representing neural network configurations
  const renderSVGNodes = () => {
    return (
      <svg
        className="w-full h-full max-w-[480px] max-h-[480px] mx-auto text-border-custom"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Bounding target brackets */}
        <path d="M 20 50 L 20 20 L 50 20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 380 50 L 380 20 L 350 20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 20 350 L 20 380 L 50 380" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 380 350 L 380 380 L 350 380" stroke="currentColor" strokeWidth="1.5" />

        {/* Technical annotation text */}
        <text
          x="30"
          y="35"
          className="font-mono text-[9px] fill-text-secondary tracking-widest uppercase"
        >
          LOC: 21.235° N, 81.346° E
        </text>
        <text
          x="30"
          y="370"
          className="font-mono text-[9px] fill-text-secondary tracking-widest uppercase"
        >
          SYS: V1.0_READY
        </text>

        {/* Grid dots background */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" className="fill-border-custom" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />

        {/* Network connections */}
        <motion.path
          d="M 100 200 L 200 100 M 100 200 L 200 200 M 100 200 L 200 300 M 200 100 L 300 200 M 200 200 L 300 200 M 200 300 L 300 200"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          initial={isReducedMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: 24 }}
          animate={isReducedMotion ? {} : { strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 4 }}
        />

        {/* Primary Data nodes */}
        <motion.circle
          cx="100"
          cy="200"
          r="6"
          className="fill-background stroke-text-primary"
          strokeWidth="1.5"
          whileHover={isReducedMotion ? {} : { scale: 1.3, fill: 'var(--accent)' }}
        />
        <motion.circle
          cx="200"
          cy="100"
          r="6"
          className="fill-background stroke-text-primary"
          strokeWidth="1.5"
          whileHover={isReducedMotion ? {} : { scale: 1.3, fill: 'var(--accent)' }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="6"
          className="fill-background stroke-text-primary"
          strokeWidth="1.5"
          whileHover={isReducedMotion ? {} : { scale: 1.3, fill: 'var(--accent)' }}
        />
        <motion.circle
          cx="200"
          cy="300"
          r="6"
          className="fill-background stroke-text-primary"
          strokeWidth="1.5"
          whileHover={isReducedMotion ? {} : { scale: 1.3, fill: 'var(--accent)' }}
        />
        <motion.circle
          cx="300"
          cy="200"
          r="6"
          className="fill-background stroke-text-primary"
          strokeWidth="1.5"
          whileHover={isReducedMotion ? {} : { scale: 1.3, fill: 'var(--accent)' }}
        />

        {/* Floating coordinates overlay */}
        <g className="fill-accent">
          <circle cx="200" cy="200" r="2" />
        </g>
      </svg>
    );
  };

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
            className="flex items-center space-x-2"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-2xs uppercase tracking-wider text-text-secondary">
              {siteConfig.status.label}
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

        {/* Right Column: Premium SVG network graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transitionSpring, delay: delayStep * 4 }}
          className="md:col-span-5 flex items-center justify-center w-full aspect-square border border-border-custom bg-surface/40 backdrop-blur-md rounded-md p-6 relative overflow-hidden"
        >
          {renderSVGNodes()}
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
