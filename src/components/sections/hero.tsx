'use client';

import * as React from 'react';
import { ArrowRight, FileText, Mail, ChevronDown, Github, Linkedin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/experience/reveal';

/**
 * Premium Hero Section Component.
 * 
 * Implements a balanced split layout optimized for recruiter scanning.
 * Integrated with the Experience System Reveal triggers and Visual UI components.
 */
export function Hero() {
  const isReducedMotion = useReducedMotion();

  // Render responsive interactive data nodes representing neural network configurations
  const renderSVGNodes = () => {
    return (
      <svg
        className="w-full h-full max-w-[420px] max-h-[420px] mx-auto text-border-custom"
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
          LOC: 19.076° N, 72.877° E
        </text>
        <text
          x="30"
          y="370"
          className="font-mono text-[9px] fill-text-secondary tracking-widest uppercase"
        >
          SYS: V2.0_FROZEN
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
      className="relative min-h-[calc(100vh-68px)] flex flex-col justify-center py-16 md:py-24"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typographic Statements */}
        <div className="md:col-span-7 flex flex-col space-y-6 text-left">
          {/* Availability Status Badge */}
          <Reveal variant="fade-up" delay={0.05} className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-2xs uppercase tracking-wider text-text-secondary">
              {siteConfig.status.label}
            </span>
          </Reveal>

          {/* Name & Headline */}
          <Reveal variant="fade-up" delay={0.1} className="space-y-2">
            <p className="font-mono text-2xs text-accent uppercase tracking-widest">[ AYUSH PATWA ]</p>
            <h1
              id="hero-title"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]"
            >
              Building intelligent systems
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
                with data & machine learning.
              </span>
            </h1>
          </Reveal>

          {/* One-Sentence Value Proposition */}
          <Reveal variant="fade-up" delay={0.15}>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-lg">
              Computer Science student translating mathematical models into robust pipelines and deployable, production-ready AI applications.
            </p>
          </Reveal>

          {/* Primary and Secondary CTA Buttons */}
          <Reveal variant="fade-up" delay={0.2} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a href="#projects" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full">
                <span>View Projects</span>
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </a>
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" className="w-full">
                <FileText size={14} className="mr-1" />
                <span>Download Resume</span>
              </Button>
            </a>
          </Reveal>

          {/* Inline Lightweight Social Icons */}
          <Reveal variant="fade-up" delay={0.25} className="flex items-center space-x-4 pt-4 border-t border-border-custom/50 w-full max-w-xs">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
              aria-label="View GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
              aria-label="View LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={siteConfig.links.email}
              className="text-text-secondary hover:text-accent transition-colors p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
              aria-label="Send Direct Email"
            >
              <Mail size={16} />
            </a>
          </Reveal>

          {/* Three Trust Signals */}
          <Reveal variant="fade-up" delay={0.3} className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-[10px] font-mono text-text-secondary uppercase tracking-wider">
            <span className="flex items-center">
              <span className="mr-1.5" aria-hidden="true">📍</span> Raipur, India
            </span>
            <span className="flex items-center">
              <span className="mr-1.5" aria-hidden="true">🤖</span> AI & Data Science
            </span>
            <span className="flex items-center">
              <span className="mr-1.5" aria-hidden="true">🟢</span> Open to Internships
            </span>
          </Reveal>
        </div>

        {/* Right Column: Refined Interactive Neural Graph inside static Card */}
        <Reveal
          variant="scale"
          delay={0.35}
          className="md:col-span-5 flex items-center justify-center w-full aspect-square relative"
        >
          <Card
            variant="static"
            className="w-full h-full flex items-center justify-center bg-surface/40 backdrop-blur-md p-6 relative overflow-hidden"
          >
            {renderSVGNodes()}
          </Card>
        </Reveal>
      </div>

      {/* Scroll indicator overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
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
