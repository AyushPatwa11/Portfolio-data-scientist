'use client';

import { motion } from 'framer-motion';
import { getSortedTimeline } from '@/lib/content';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Timeline Journey Component.
 * Implements a vertical path detailing academic and technical progression.
 * Data is dynamically loaded from Velite-compiled schemas.
 */
export function Journey() {
  const isReducedMotion = useReducedMotion();
  const milestones = getSortedTimeline();

  return (
    <section
      id="journey"
      className="py-16 md:py-24 border-t border-border-custom bg-background"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 02 // Progression ]
          </p>
          <h2
            id="journey-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            My Journey
          </h2>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical axis line */}
          <div className="absolute left-[15px] sm:left-1/2 top-2 bottom-2 w-[1px] bg-border-custom -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.title}
                  {...getFadeInUpProps(isReducedMotion)}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Tick Node Indicator */}
                  <div className="absolute left-[15px] sm:left-1/2 w-4 h-4 rounded-full bg-background border border-text-secondary -translate-x-1/2 flex items-center justify-center z-10 top-1">
                    <motion.div
                      whileHover={isReducedMotion ? {} : { scale: 1.5 }}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  </div>

                  {/* Left / Right Card wrapper */}
                  <div
                    className={`w-full sm:w-1/2 pl-10 sm:pl-0 ${isEven ? 'sm:pl-8' : 'sm:pr-8'}`}
                  >
                    <div className="border border-border-custom bg-surface p-6 rounded-md hover:border-accent/40 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold text-accent tracking-wider">
                          {milestone.year}
                        </span>
                        <span className="border border-border-custom px-2 py-0.5 text-[9px] font-mono rounded-sm text-text-secondary uppercase">
                          {milestone.category}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer Column for balance on desktop grids */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
