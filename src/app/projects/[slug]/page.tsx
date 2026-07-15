import * as React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft, ArrowRight, ShieldAlert } from 'lucide-react';
import { getProjectBySlug, getAdjacentProjects, getSortedProjects } from '@/lib/content';
import { Navbar } from '@/components/layout/navbar';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-renders all dynamic case studies at build time.
 */
export async function generateStaticParams() {
  const projects = getSortedProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Dynamic SEO metadata builder for project pages.
 */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Ayush Patwa Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
  };
}

/**
 * Dynamic Case Study Details Route.
 * Built with strict WCAG AA standards, semantic hierarchy,
 * and elegant responsive layouts.
 */
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);
  const caseStudy = project.caseStudy;

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Navigation Breadcrumb back */}
        <Link
          href="/#projects"
          className="inline-flex items-center space-x-2 text-xs font-mono text-text-secondary hover:text-text-primary mb-8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded py-1 px-2 border border-border-custom bg-surface/50"
          aria-label="Back to home projects grid"
        >
          <ArrowLeft size={12} />
          <span>BACK TO BUILDS</span>
        </Link>

        {/* Dynamic Case Study Header Section */}
        <header className="border-b border-border-custom pb-8 mb-8 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[10px] font-mono rounded-sm text-accent uppercase font-semibold">
              {project.category}
            </span>
            <span className="border border-border-custom px-2 py-0.5 text-[10px] font-mono rounded-sm text-text-secondary uppercase">
              {project.status}
            </span>
            <span className="border border-border-custom px-2 py-0.5 text-[10px] font-mono rounded-sm text-text-secondary uppercase">
              {project.difficulty}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base text-text-secondary leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Links panel */}
          <div className="flex items-center space-x-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-text-primary text-background hover:bg-accent hover:text-white px-4 py-2.5 text-xs font-mono font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all"
              aria-label="View project source code on GitHub"
            >
              <Github size={14} />
              <span>SOURCE_CODE</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border border-border-custom bg-surface hover:border-accent hover:text-accent px-4 py-2.5 text-xs font-mono font-medium rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all"
                aria-label="View project live demo"
              >
                <ExternalLink size={14} />
                <span>LIVE_DEMO</span>
              </a>
            )}
          </div>
        </header>

        {/* Details caseStudy grids */}
        {caseStudy ? (
          <article className="space-y-12">
            {/* Grid layout for Problem vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <section className="border border-border-custom bg-surface p-6 rounded-md hover:border-accent/20 transition-all space-y-3">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                  01 // The Problem Statement
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {caseStudy.problem}
                </p>
              </section>

              <section className="border border-border-custom bg-surface p-6 rounded-md hover:border-accent/20 transition-all space-y-3">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                  02 // The Technical Approach
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {caseStudy.solution}
                </p>
              </section>
            </div>

            {/* Challenges & Learnings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <section className="border border-border-custom bg-surface p-6 rounded-md hover:border-accent/20 transition-all space-y-3">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                  03 // Key Failures & Challenges
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {caseStudy.challenges}
                </p>
              </section>

              <section className="border border-border-custom bg-surface p-6 rounded-md hover:border-accent/20 transition-all space-y-3">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                  04 // Engineering Insights & Learnings
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {caseStudy.learnings}
                </p>
              </section>
            </div>

            {/* Future scaling section */}
            <section className="border border-border-custom bg-surface/50 p-6 rounded-md hover:border-accent/20 transition-all space-y-3">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                05 // Future Scaling & Improvements
              </h2>
              <p className="text-xs text-text-secondary leading-relaxed">
                {caseStudy.futureImprovements}
              </p>
            </section>
          </article>
        ) : (
          /* Fallback alert if caseStudy metadata is missing */
          <div className="border border-warning/30 bg-warning/5 text-warning p-6 rounded-md flex items-start space-x-3">
            <ShieldAlert size={18} className="mt-0.5 shrink-0" />
            <div>
              <h3 className="text-xs font-mono font-bold uppercase">Case Study Pending</h3>
              <p className="text-2xs mt-1 leading-relaxed text-text-secondary">
                This project metadata has loaded successfully, but the structured engineering write-up details are still being compiled. Explore the source repository directly above.
              </p>
            </div>
          </div>
        )}

        {/* Tech Stack Grid details */}
        <section className="mt-12 pt-8 border-t border-border-custom">
          <h3 className="font-mono text-2xs uppercase tracking-widest text-text-secondary mb-4">
            COMPILER_TECHNOLOGY_STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-surface border border-border-custom px-3 py-1 text-xs font-mono rounded-sm text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Adjacent Project Navigation links */}
        <footer className="mt-16 pt-8 border-t border-border-custom flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="inline-flex items-center space-x-2 text-xs font-mono text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label={`Navigate to previous project: ${prev.title}`}
            >
              <ArrowLeft size={14} />
              <span>PREV_PROJECT</span>
            </Link>
          ) : (
            <span className="text-2xs font-mono text-border-custom select-none">
              FIRST_PROJECT
            </span>
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="inline-flex items-center space-x-2 text-xs font-mono text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label={`Navigate to next project: ${next.title}`}
            >
              <span>NEXT_PROJECT</span>
              <ArrowRight size={14} />
            </Link>
          ) : (
            <span className="text-2xs font-mono text-border-custom select-none">
              LAST_PROJECT
            </span>
          )}
        </footer>
      </main>
    </div>
  );
}
