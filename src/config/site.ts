/**
 * Core site identification and links configuration.
 */
export const siteConfig = {
  name: 'Ayush Patwa',
  shortName: 'AP',
  title: 'Ayush Patwa | Computer Science Student specializing in ML',
  description:
    'Portfolio of Ayush Patwa, Computer Science student specializing in Machine Learning, data pipelines, and software engineering.',
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
  location: 'Mumbai, Maharashtra, India',
  resumePath: '/resume/resume.pdf',
  resumeVersion: 'v1.2.0',
  resumeLastUpdated: 'July 2026',
  contactFormEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || '',
  githubFallbackRepos: [
    {
      name: 'Portfolio-data-scientist',
      description:
        'Personal portfolio website platform built in Next.js 16 and TypeScript, incorporating dynamic schema loaders.',
      language: 'TypeScript',
      topics: ['nextjs', 'typescript', 'tailwind-css', 'velite'],
      updatedAt: '2026-07-15',
      htmlUrl: 'https://github.com/AyushPatwa11/Portfolio-data-scientist',
      isPinned: true,
    },
  ],
};
