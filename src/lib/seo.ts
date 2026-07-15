import { Metadata } from 'next';
import { seoConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';

/**
 * Constructs structured JSON-LD data for Person entity profiles.
 */
export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: 'Data Science & Computer Science Student',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'B.Tech Computer Science Engineering',
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };
}

/**
 * Builds custom metadata options with defaults from seoConfig.
 */
export function constructMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...seoConfig,
    ...overrides,
    openGraph: {
      ...seoConfig.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...seoConfig.twitter,
      ...overrides.twitter,
    },
  };
}
