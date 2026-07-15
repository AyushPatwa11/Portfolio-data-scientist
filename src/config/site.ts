/**
 * Core site identification and links configuration.
 */
export const siteConfig = {
  name: 'Ayush Patwa',
  shortName: 'AP',
  title: 'Ayush Patwa | Computer Science Student specializing in ML',
  description: 'Portfolio of Ayush Patwa, Computer Science student specializing in Machine Learning, data pipelines, and software engineering.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ayushpatwa.dev',
  ogImage: (process.env.NEXT_PUBLIC_SITE_URL || 'https://ayushpatwa.dev') + '/og/og.jpg',
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'AyushPatwa11',
  links: {
    github: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'AyushPatwa11'}`,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/ayush-patwa',
    email: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'ayushpatwa11@gmail.com'}`,
  },
  status: {
    label: 'Looking for ML/SE Internships',
    active: true,
  },
  timezone: 'Asia/Kolkata',
  location: 'Mumbai, India',
};
