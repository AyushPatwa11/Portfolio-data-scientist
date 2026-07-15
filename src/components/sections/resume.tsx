'use client';

import { FileText, Download, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Resume Action & Preview Section.
 * Structured with dynamic configurable paths, version tags,
 * and strict accessibility indicators.
 */
export function ResumeSection() {
  const isReducedMotion = useReducedMotion();

  return (
    <section
      id="resume"
      className="py-16 md:py-24 border-t border-border-custom bg-background/50"
      aria-labelledby="resume-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 10 // Credentials ]
          </p>
          <h2
            id="resume-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            Professional Resume
          </h2>
        </div>

        {/* Bento grid panel */}
        <motion.div
          {...getFadeInUpProps(isReducedMotion)}
          className="border border-border-custom bg-surface p-6 md:p-8 rounded-md max-w-3xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-accent/40 transition-colors"
        >
          {/* Info Details left */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center space-x-2 text-accent">
              <FileText size={18} />
              <span className="font-mono text-xs uppercase tracking-wider">
                Verifiable CV Summary
              </span>
            </div>

            <p className="font-display text-base font-semibold text-text-primary">
              Computer Science student specializing in Machine Learning, data pipelines, and
              software engineering.
            </p>

            <p className="text-xs text-text-secondary leading-relaxed">
              Proficient in Python, Java, SQL, and Git. Focused on translating statistical data
              pipelines into clean, deployable algorithms.
            </p>

            {/* Version & Date Telemetry */}
            <div className="flex items-center space-x-4 pt-2 text-[10px] font-mono text-text-secondary uppercase">
              <span className="flex items-center space-x-1">
                <Calendar size={10} />
                <span>Updated: {siteConfig.resumeLastUpdated}</span>
              </span>
              <span className="flex items-center space-x-1">
                <ShieldCheck size={10} />
                <span>Release: {siteConfig.resumeVersion}</span>
              </span>
            </div>
          </div>

          {/* Action buttons right */}
          <div className="flex flex-col sm:flex-row md:flex-col items-stretch gap-3 shrink-0">
            {/* Download PDF button */}
            <a
              href={siteConfig.resumePath}
              download={`${siteConfig.name.replace(' ', '_')}_Resume.pdf`}
              className="flex items-center justify-center space-x-2 bg-text-primary text-background hover:bg-accent hover:text-white px-5 py-3 text-xs font-mono font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all"
              aria-label="Download resume PDF file"
            >
              <Download size={14} />
              <span>DOWNLOAD_PDF</span>
            </a>

            {/* Open in new tab button */}
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-border-custom bg-surface text-text-primary hover:border-accent hover:text-accent px-5 py-3 text-xs font-mono font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all"
              aria-label="Open resume PDF in new tab"
            >
              <ExternalLink size={14} />
              <span>VIEW_FULLSCREEN</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
