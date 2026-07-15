'use client';

import { Trophy, Code2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { getHackathons } from '@/lib/content';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Achievements Section Component.
 * Dynamic listings of hackathons and coding achievements.
 * Hides completely (returns null) if no items are published.
 */
export function AchievementsSection() {
  const isReducedMotion = useReducedMotion();
  const achievements = getHackathons();

  // Hide section entirely if empty
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 border-t border-border-custom bg-background"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 08 // Milestones ]
          </p>
          <h2
            id="achievements-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            Achievements
          </h2>
        </div>

        {/* Achievements Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              {...getFadeInUpProps(isReducedMotion)}
              className="border border-border-custom bg-surface p-6 rounded-md hover:border-accent/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-text-secondary font-mono text-2xs uppercase tracking-wider">
                  <div className="flex items-center space-x-2">
                    <Trophy size={14} className="text-accent" />
                    <span>{ach.result}</span>
                  </div>
                </div>

                <h3 className="font-display text-base font-semibold text-text-primary leading-snug">
                  {ach.title}
                </h3>

                <div className="space-y-2 pt-2 text-xs text-text-secondary">
                  <p className="flex items-center gap-1.5">
                    <Code2 size={12} className="shrink-0 text-text-secondary" />
                    <span>
                      Built:{' '}
                      <strong className="text-text-primary font-medium">{ach.projectBuilt}</strong>{' '}
                      ({ach.role})
                    </span>
                  </p>
                  <p className="leading-relaxed">{ach.impact}</p>
                </div>
              </div>

              {/* Devpost link */}
              {ach.devpostUrl && (
                <div className="pt-6 border-t border-border-custom/50 mt-6">
                  <a
                    href={ach.devpostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    aria-label={`View details for ${ach.title}`}
                  >
                    <ExternalLink size={12} />
                    <span>VIEW_SUBMISSION</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
