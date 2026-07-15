'use client';

import * as React from 'react';
import { Award, ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCertificates } from '@/lib/content';
import { transitionEase } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Certifications Section Component.
 * Dynamic listings of verified professional/academic courses.
 * Displays an elegant placeholder if no credentials are populated yet.
 */
export function CertificatesSection() {
  const isReducedMotion = useReducedMotion();

  // Load and filter out templates
  const certificates = React.useMemo(() => {
    try {
      return getCertificates().filter(
        (cert) =>
          !cert.title.toLowerCase().includes('template') &&
          !cert.issuer.toLowerCase().includes('issuing'),
      );
    } catch (e) {
      console.error('Failed to load certificates', e);
      return [];
    }
  }, []);

  return (
    <section
      id="certificates"
      className="py-16 md:py-24 border-t border-border-custom bg-background/50"
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 07 // Credentials ]
          </p>
          <h2
            id="certificates-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            Certifications
          </h2>
        </div>

        {/* Dynamic Display Logic */}
        {certificates.length === 0 ? (
          /* Recruiter-friendly fallback empty placeholder */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={isReducedMotion ? { duration: 0 } : transitionEase}
            className="border border-border-custom bg-surface p-8 md:p-12 rounded-md text-center max-w-xl mx-auto flex flex-col items-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full border border-border-custom flex items-center justify-center text-text-secondary bg-background/50">
              <Award size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold text-text-primary">
              Verified Credentials
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              Verified credentials in progress. Completed certifications will be displayed here with
              direct verification links.
            </p>
          </motion.div>
        ) : (
          /* Certifications Grid List */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={isReducedMotion ? { duration: 0 } : transitionEase}
                className="border border-border-custom bg-surface p-6 rounded-md hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Title Header */}
                  <div className="flex items-center justify-between text-text-secondary font-mono text-2xs uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck size={14} className="text-accent" />
                      <span>{cert.issuer}</span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <Calendar size={10} />
                      <span>{cert.issueDate}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-base font-semibold text-text-primary leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Verification link */}
                {cert.verifyUrl && (
                  <div className="pt-6 border-t border-border-custom/50 mt-6">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      aria-label={`Verify certificate: ${cert.title}`}
                    >
                      <ExternalLink size={12} />
                      <span>VERIFY_CREDENTIAL</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
