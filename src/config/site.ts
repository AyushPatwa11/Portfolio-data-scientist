/**
 * Core site identification and links configuration.
 */
export const siteConfig = {
  name: 'Ayush Patwa',
  shortName: 'AP',
  title: 'Ayush Patwa | AI/ML — Data Science — Full-Stack Developer',
  description:
    'Portfolio of Ayush Patwa, AI/ML, Data Science, and Full-Stack Developer specializing in intelligent systems, machine learning models, and full-stack applications.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ayushpatwa.dev',
  ogImage: (process.env.NEXT_PUBLIC_SITE_URL || 'https://ayushpatwa.dev') + '/og/og.jpg',
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'AyushPatwa11',
  links: {
    github: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'AyushPatwa11'}`,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/ayush-patwa',
    email: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'ayuspatwa52@gmail.com'}`,
  },
  status: {
    label: 'Looking for AI/ML & Full-Stack Opportunities',
    active: true,
  },
  timezone: 'Asia/Kolkata',
  location: 'Bhilai, Chhattisgarh, India',
  resumePath: '/resume/resume.pdf',
  resumeVersion: 'v2.0.0',
  resumeLastUpdated: 'August 2026',
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
