'use client';

import * as React from 'react';
import { Cpu, Terminal, Database, Code, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import skillsData from '@/../content/skills.json';
import { Skill } from '@/types';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Skills Section Component.
 * Dynamic categorized skills lists.
 * Implements strict accessibility focus rings and desaturated metrics.
 */
export function Skills() {
  const isReducedMotion = useReducedMotion();

  // Load and filter skills data dynamically
  const skillsList = React.useMemo(() => {
    return (skillsData as Skill[])
      .filter((s) => s.visible)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }, []);

  // Define unique categories and their corresponding Lucide icons
  const categories = [
    { name: 'Programming Languages', icon: Terminal },
    { name: 'Data Science & AI', icon: Cpu },
    { name: 'Databases', icon: Database },
    { name: 'Frontend', icon: Code },
    { name: 'Backend', icon: ShieldCheck },
    { name: 'Tools & Platforms', icon: Terminal },
  ];

  // Group skills by category map
  const groupedSkills = React.useMemo(() => {
    const map: Record<string, Skill[]> = {};
    skillsList.forEach((skill) => {
      if (!map[skill.category]) {
        map[skill.category] = [];
      }
      map[skill.category].push(skill);
    });
    return map;
  }, [skillsList]);

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-t border-border-custom bg-background/50"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 04 // Core Tooling ]
          </p>
          <h2
            id="skills-heading"
            className="font-display text-3xl font-bold tracking-tight text-text-primary"
          >
            Skills Matrix
          </h2>
        </div>

        {/* Categories Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const items = groupedSkills[category.name] || [];

            if (items.length === 0) return null;

            return (
              <motion.div
                key={category.name}
                {...getFadeInUpProps(isReducedMotion)}
                className="border border-border-custom bg-surface p-6 rounded-md hover:border-accent/30 transition-colors flex flex-col justify-between"
                role="listitem"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center space-x-2.5 text-accent mb-6 border-b border-border-custom/50 pb-3">
                    <IconComponent size={16} aria-hidden="true" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                      {category.name}
                    </span>
                  </div>

                  {/* Skills lists inside category */}
                  <div className="space-y-4">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex flex-col space-y-1 focus-within:outline-none"
                        tabIndex={0}
                        aria-label={`${skill.name}, ${skill.years || ''}`}
                        role="group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                          {skill.years && (
                            <span className="font-mono text-[9px] text-text-secondary uppercase border border-border-custom px-1.5 py-0.5 rounded-sm bg-background">
                              {skill.years}
                            </span>
                          )}
                        </div>
                        {skill.description && (
                          <p className="text-2xs text-text-secondary leading-normal">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
