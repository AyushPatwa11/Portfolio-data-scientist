import { projects, experiences, certificates, hackathons, learning, timeline } from '../../.velite';
import { Project, Experience, Certificate, Hackathon, Learning, Timeline } from '@/types';

/**
 * Loads and sorts projects by order values (excluding templates).
 */
export function getSortedProjects(): Project[] {
  return [...projects]
    .filter((p) => p.slug !== 'project-template' && !p.slug.includes('template'))
    .sort((a, b) => a.order - b.order);
}

/**
 * Loads and filters featured projects.
 */
export function getFeaturedProjects(): Project[] {
  return getSortedProjects().filter((project) => project.featured);
}

/**
 * Loads and sorts experiences chronologically (excluding templates).
 */
export function getSortedExperiences(): Experience[] {
  return [...experiences]
    .filter(
      (exp) =>
        !exp.company.toLowerCase().includes('template') &&
        !exp.company.toLowerCase().includes('organization') &&
        !exp.role.toLowerCase().includes('template'),
    )
    .sort((a, b) => {
      if (a.endDate === 'Present') return -1;
      if (b.endDate === 'Present') return 1;
      return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    });
}

/**
 * Loads certificates (excluding templates).
 */
export function getCertificates(): Certificate[] {
  return [...certificates].filter(
    (cert) =>
      !cert.title.toLowerCase().includes('template') &&
      !cert.issuer.toLowerCase().includes('issuing'),
  );
}

/**
 * Loads hackathons (excluding templates).
 */
export function getHackathons(): Hackathon[] {
  return [...hackathons].filter(
    (hack) =>
      !hack.title.toLowerCase().includes('template') &&
      !hack.title.toLowerCase().includes('hackathon name'),
  );
}

/**
 * Loads and sorts learning telemetry values (excluding templates).
 */
export function getSortedLearning(): Learning[] {
  return [...learning]
    .filter(
      (learn) =>
        !learn.title.toLowerCase().includes('template') &&
        !learn.title.toLowerCase().includes('title of the'),
    )
    .sort((a, b) => a.order - b.order);
}

/**
 * Loads and sorts timeline milestones (excluding templates).
 */
export function getSortedTimeline(): Timeline[] {
  return [...timeline]
    .filter(
      (time) =>
        !time.title.toLowerCase().includes('template') &&
        !time.title.toLowerCase().includes('milestone title'),
    )
    .sort((a, b) => a.order - b.order);
}

/**
 * Finds a project by its slug value.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return getSortedProjects().find((project) => project.slug === slug);
}

/**
 * Gets adjacent projects for navigation (prev/next loops).
 */
export function getAdjacentProjects(slug: string) {
  const all = getSortedProjects();
  const index = all.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  return { prev, next };
}
