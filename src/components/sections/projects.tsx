'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink, BookOpen, Inbox } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/lib/content';
import { siteConfig } from '@/config/site';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Featured Projects Section.
 * Displays up to 2 featured projects.
 * Falls back to an elegant empty state if no featured projects are published.
 */
export function Projects() {
  const isReducedMotion = useReducedMotion();
  const featuredProjects = getFeaturedProjects().slice(0, 2);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-border-custom bg-background"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 03 // Selected Builds ]
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2
                id="projects-heading"
                className="font-display text-3xl font-bold tracking-tight text-text-primary"
              >
                Featured Projects
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                A selection of data pipelines, statistical modules, and software platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic content area */}
        {featuredProjects.length === 0 ? (
          /* Recruiter-friendly Empty State */
          <motion.div
            {...getFadeInUpProps(isReducedMotion)}
            className="border border-border-custom bg-surface p-8 md:p-12 rounded-md text-center max-w-xl mx-auto flex flex-col items-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full border border-border-custom flex items-center justify-center text-text-secondary bg-background/50">
              <Inbox size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold text-text-primary">
              Case Studies Incoming
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              Detailed reviews of ML pipeline models and data visualizations are currently in
              preparation. In the meantime, you can explore my active code repositories directly on
              GitHub.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full justify-center animate-none">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-text-primary text-background hover:bg-accent hover:text-white px-5 py-2.5 text-xs font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <Github size={14} />
                <span>Explore GitHub</span>
              </a>
            </div>
          </motion.div>
        ) : (
          /* Grid showing featured projects */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.slug}
                {...getFadeInUpProps(isReducedMotion)}
                className="group border border-border-custom bg-surface rounded-md overflow-hidden flex flex-col justify-between hover:border-accent/40 transition-colors"
              >
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-video w-full border-b border-border-custom bg-background/50 overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} Preview`}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      fill
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-2xs text-text-secondary select-none">
                      [ VISUAL_REPRESENTATION ]
                    </div>
                  )}
                  {/* Status Badges overlays */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-surface/90 backdrop-blur-sm border border-border-custom px-2 py-0.5 text-[9px] font-mono rounded-sm text-text-primary font-medium uppercase">
                      {project.status}
                    </span>
                    <span className="bg-accent/90 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono rounded-sm text-white font-medium uppercase">
                      {project.difficulty}
                    </span>
                  </div>
                </div>

                {/* Card Content Description */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-2xs text-accent tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-text-primary mt-1">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technical tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-background border border-border-custom px-2 py-0.5 text-[9px] font-mono rounded-sm text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Action bar */}
                <div className="px-6 pb-6 pt-2 border-t border-border-custom/50 flex items-center justify-between gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center space-x-1.5 text-xs font-mono font-bold text-text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    aria-label={`Read case study for ${project.title}`}
                  >
                    <BookOpen size={14} />
                    <span>CASE STUDY</span>
                  </Link>

                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border-custom hover:border-accent hover:text-accent rounded transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={14} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-border-custom hover:border-accent hover:text-accent rounded transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* More projects on GitHub Telemetry Block */}
        {featuredProjects.length > 0 && (
          <motion.div
            {...getFadeInUpProps(isReducedMotion)}
            className="mt-12 border border-border-custom bg-surface p-6 rounded-md flex flex-col md:flex-row items-center justify-between gap-8 hover:border-accent/40 transition-colors"
          >
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-accent">
                <Github size={16} />
                <span className="font-mono text-2xs uppercase tracking-wider">GitHub Activity</span>
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">
                More projects on GitHub
              </h3>
              <p className="text-xs text-text-secondary max-w-md leading-relaxed">
                Explore a wider range of machine learning pipelines, script utilities, and collaborative models directly in my repositories.
              </p>
            </div>

            {/* Visual Grid Mockup */}
            <div className="hidden lg:flex flex-col gap-1 select-none">
              <div className="flex gap-1">
                {Array.from({ length: 24 }).map((_, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, rowIndex) => {
                      const opacities = [
                        'bg-background border border-border-custom/50',
                        'bg-accent/10',
                        'bg-accent/30',
                        'bg-accent/60',
                        'bg-accent'
                      ];
                      // Generate organic looking contribution density
                      const seed = (colIndex * 3 + rowIndex * 7) % 5;
                      const opacityClass = opacities[seed];
                      return (
                        <div
                          key={rowIndex}
                          className={`w-2.5 h-2.5 rounded-sm ${opacityClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center font-mono text-[8px] text-text-secondary uppercase tracking-widest mt-1.5">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-sm bg-background border border-border-custom/50" />
                  <div className="w-2 h-2 rounded-sm bg-accent/10" />
                  <div className="w-2 h-2 rounded-sm bg-accent/30" />
                  <div className="w-2 h-2 rounded-sm bg-accent/60" />
                  <div className="w-2 h-2 rounded-sm bg-accent" />
                </div>
                <span>More</span>
              </div>
            </div>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <button
                type="button"
                className="w-full md:w-auto border border-border-custom bg-surface text-text-primary hover:border-accent hover:text-accent px-5 py-3 text-xs font-mono font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <Github size={14} />
                <span>EXPLORE_GITHUB_PROFILE</span>
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
