'use client';

import { Briefcase, Landmark, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { getSortedExperiences } from '@/lib/content';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Experience Section Component.
 * Dynamically displays internships, club leadership, and projects.
 * Incorporates fallback logic and template filter loops.
 */
export function ExperienceSection() {
  const isReducedMotion = useReducedMotion();
  const experiences = getSortedExperiences();

  return (
    <section
      id="experience"
      className="py-16 md:py-24 border-t border-border-custom bg-background"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 06 // Work & Leadership ]
          </p>
          <h2
            id="experience-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            Experience
          </h2>
        </div>

        {/* Dynamic Display Logic */}
        {experiences.length === 0 ? (
          /* Recruiter-friendly fallback empty state */
          <motion.div
            {...getFadeInUpProps(isReducedMotion)}
            className="border border-border-custom bg-surface p-8 md:p-12 rounded-md text-center max-w-xl mx-auto flex flex-col items-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full border border-border-custom flex items-center justify-center text-text-secondary bg-background/50">
              <Briefcase size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold text-text-primary">
              Strengthening Foundations
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              {
                "I'm currently focused on strengthening my skills through projects, coursework, and continuous learning while preparing for internships."
              }
            </p>
          </motion.div>
        ) : (
          /* Experience List Grid */
          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((exp) => (
              <motion.article
                key={`${exp.company}-${exp.role}`}
                {...getFadeInUpProps(isReducedMotion)}
                className="group border border-border-custom bg-surface p-6 rounded-md hover:border-accent/40 transition-colors"
              >
                {/* Header Coordinate Area */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border-custom/50 pb-4 mb-4">
                  <div>
                    <span className="font-mono text-2xs text-accent tracking-wider uppercase">
                      {exp.isClubLeadership ? 'CLUB LEADERSHIP' : 'ENGINEERING'}
                    </span>
                    <h3 className="font-display text-lg font-bold text-text-primary mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-text-secondary flex items-center gap-1.5 mt-0.5">
                      <Landmark size={14} className="text-text-secondary" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  {/* Dates & Location Stamps */}
                  <div className="flex flex-col sm:items-end text-xs font-mono text-text-secondary space-y-1">
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar size={12} />
                      <span>
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets lists */}
                <ul className="list-disc pl-4 space-y-2 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-xs text-text-secondary leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Skills tags footer */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="bg-background border border-border-custom px-2 py-0.5 text-[9px] font-mono rounded-sm text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
