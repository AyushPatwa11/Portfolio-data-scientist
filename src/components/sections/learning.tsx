'use client';

import * as React from 'react';
import { BookOpen, Award, Flame, Library, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getSortedLearning } from '@/lib/content';
import { transitionEase } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Current Learning Dashboard Component.
 * Dynamically lists courses, DSA topics, and active books in study loops.
 * Employs clean empty states and desaturated styling cards.
 */
export function LearningDashboard() {
  const isReducedMotion = useReducedMotion();
  const learningItems = getSortedLearning();

  // Map categories to standard icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ML COURSE':
        return Award;
      case 'DSA TOPIC':
        return Flame;
      case 'ACTIVE BOOK':
        return Library;
      case 'DAILY SPRINT':
        return BookOpen;
      default:
        return HelpCircle;
    }
  };

  return (
    <section
      id="learning"
      className="py-16 md:py-24 border-t border-border-custom bg-background"
      aria-labelledby="learning-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 05 // Active Studies ]
          </p>
          <h2
            id="learning-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            Current Learning Dashboard
          </h2>
          <p className="text-sm text-text-secondary mt-1 max-w-xl">
            A dynamic dashboard showing the books, courses, and skills I am actively studying.
          </p>
        </div>

        {/* Dynamic content cards list */}
        {learningItems.length === 0 ? (
          /* Recruiter-friendly Empty State */
          <div className="border border-border-custom bg-surface p-8 rounded-md text-center max-w-md mx-auto">
            <p className="text-sm font-medium text-text-primary">Dashboard Updating</p>
            <p className="text-xs text-text-secondary mt-1">
              Active learning telemetry is being compiled. Check back soon.
            </p>
          </div>
        ) : (
          /* Grid of active learning items */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningItems.map((item) => {
              const Icon = getCategoryIcon(item.category);
              const isActive = item.status === 'Active Focus';

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={isReducedMotion ? { duration: 0 } : transitionEase}
                  className={`border p-6 rounded-md bg-surface flex items-start space-x-4 hover:border-accent/40 transition-colors ${
                    isActive ? 'border-accent/30' : 'border-border-custom'
                  }`}
                >
                  {/* Status Indicator Icon Box */}
                  <div
                    className={`p-2.5 rounded-sm border shrink-0 ${
                      isActive
                        ? 'bg-accent/5 border-accent/20 text-accent'
                        : 'bg-background border-border-custom text-text-secondary'
                    }`}
                  >
                    <Icon size={16} />
                  </div>

                  {/* Details Card */}
                  <div className="flex-grow space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xs text-text-secondary uppercase tracking-widest">
                        {item.category}
                      </span>
                      <span
                        className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-sm border ${
                          isActive
                            ? 'bg-accent/10 border-accent/20 text-accent font-semibold'
                            : 'bg-background border-border-custom text-text-secondary'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-display text-sm font-semibold text-text-primary leading-tight">
                      {item.title}
                    </h3>

                    {/* Progress Badge if defined */}
                    {item.progress && (
                      <div className="pt-1 flex items-center space-x-2">
                        <span className="font-mono text-[9px] text-text-secondary uppercase">
                          Progress:
                        </span>
                        <span className="font-mono text-[10px] text-text-primary font-bold bg-background border border-border-custom px-1.5 py-0.5 rounded-sm">
                          {item.progress}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
