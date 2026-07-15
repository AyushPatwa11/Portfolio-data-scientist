import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * Generates sitemap.xml for SEO indexing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projects'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}
