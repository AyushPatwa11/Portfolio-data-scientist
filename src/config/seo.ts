import { siteConfig } from './site';

/**
 * Technical SEO and Meta specifications.
 */
export const seoConfig = {
  defaultTitle: siteConfig.title,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.description,
  keywords: [
    'Ayush Patwa',
    'Data Scientist Portfolio',
    'Machine Learning Engineer student',
    'B.Tech CSE Mumbai',
    'AI pipeline visualization',
    'Python data wrangling',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@AyushPatwa',
    site: '@AyushPatwa',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};
