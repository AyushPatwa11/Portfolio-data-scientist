import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getSortedProjects } from '@/lib/content';

/**
 * Generates sitemap.xml dynamically for SEO indexing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projects'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectRoutes = getSortedProjects().map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
