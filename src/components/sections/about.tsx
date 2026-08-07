'use client';

import { Compass, Activity, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * About Me Component.
 * Grounded in reality (no fake commits, coordinates, or system uptimes).
 * Displays personal engineering bio and academic location telemetry.
 */
export function About() {
  const isReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-t border-border-custom bg-background/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 01 // Overview ]
          </p>
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            About Me
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Large Bento Card: Philosophy Bio */}
          <motion.div
            {...getFadeInUpProps(isReducedMotion)}
            className="md:col-span-8 border border-border-custom bg-surface p-6 md:p-8 rounded-md flex flex-col justify-between hover:border-accent/40 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-accent">
                <Compass size={18} />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Engineering Philosophy
                </span>
              </div>
              <p className="font-display text-lg sm:text-xl font-medium text-text-primary leading-relaxed">
                Fusing algorithmic software engineering with rigorous mathematical model design. I
                build clean data pipelines and machine learning models, bridging the gap between raw
                data and deployable intelligence.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                As a Computer Science student, I believe that data science is not just about running
                library imports. It is about understanding the underlying mathematics, handling
                datasets diligently, and deploying code that works reliably in production. I spend
                my time optimizing SQL queries, building validation loops, and studying system
                architectures.
              </p>
            </div>

            {/* Bounding info stamp */}
            <div className="mt-8 pt-4 border-t border-border-custom flex justify-between items-center text-text-secondary font-mono text-[9px]">
              <span>AYUSH_PATWA // B.TECH_CSE_3RD_YEAR</span>
              <span>
                SITE_STATUS:{' '}
                {process.env.NODE_ENV === 'production' ? 'PRODUCTION_RELEASE' : 'DEVELOPMENT_BUILD'}
              </span>
            </div>
          </motion.div>

          {/* Right Bento Cards Stack: Academic details */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Status Card */}
            <motion.div
              {...getFadeInUpProps(isReducedMotion)}
              className="border border-border-custom bg-surface p-6 rounded-md flex-1 flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between text-text-secondary font-mono text-2xs uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <Activity size={14} className="text-accent" />
                  <span>Academic Telemetry</span>
                </div>
              </div>

              <div className="space-y-4 my-6">
                <div>
                  <p className="text-2xs font-mono text-text-secondary uppercase tracking-widest">
                    Course Focus
                  </p>
                  <p className="text-base font-bold text-text-primary">Algorithms, Databases, ML</p>
                </div>
                <div>
                  <p className="text-2xs font-mono text-text-secondary uppercase tracking-widest">
                    Coding Language Focus
                  </p>
                  <p className="text-base font-bold text-text-primary">Python, Java, SQL</p>
                </div>
              </div>

              <div className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">
                Current: 5th Semester student
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              {...getFadeInUpProps(isReducedMotion)}
              className="border border-border-custom bg-surface p-6 rounded-md flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between text-text-secondary font-mono text-2xs uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-accent" />
                  <span>Location</span>
                </div>
              </div>

              <div className="my-4">
                <p className="text-xl font-bold text-text-primary">{siteConfig.location}</p>
                <p className="text-xs text-text-secondary mt-1">
                  Active in {siteConfig.timezone} timezone.
                </p>
              </div>

              <div className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">
                Availability: Internship Ready
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
