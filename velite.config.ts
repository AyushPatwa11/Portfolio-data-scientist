import { defineConfig, defineCollection, s } from 'velite';

// Define Projects schema matching user specification
const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s.object({
    slug: s.slug(),
    title: s.string().max(80),
    description: s.string().max(180),
    featured: s.boolean().default(false),
    status: s.enum(['completed', 'in-progress', 'concept']),
    category: s.string(),
    difficulty: s.enum(['Beginner', 'Intermediate', 'Advanced']),
    techStack: s.array(s.string()),
    github: s.string().url(),
    demo: s.string().url().optional(),
    thumbnail: s.string().optional(),
    publishedAt: s.string(),
    updatedAt: s.string(),
    order: s.number().default(0),
    caseStudy: s
      .object({
        problem: s.string(),
        solution: s.string(),
        challenges: s.string(),
        learnings: s.string(),
        futureImprovements: s.string(),
      })
      .optional(),
    content: s.mdx(),
  }),
});

// Define Experience schema
const experiences = defineCollection({
  name: 'Experience',
  pattern: 'experience/**/*.json',
  schema: s.object({
    company: s.string(),
    role: s.string(),
    startDate: s.string(),
    endDate: s.string(),
    location: s.string(),
    bullets: s.array(s.string()),
    skillsUsed: s.array(s.string()),
    isClubLeadership: s.boolean().default(false),
  }),
});

// Define Certificates schema - simplified and verified
const certificates = defineCollection({
  name: 'Certificate',
  pattern: 'certificates/**/*.json',
  schema: s.object({
    title: s.string(),
    issuer: s.string(),
    issueDate: s.string(),
    verifyUrl: s.string().url().optional(),
  }),
});

// Define Hackathons schema
const hackathons = defineCollection({
  name: 'Hackathon',
  pattern: 'hackathons/**/*.json',
  schema: s.object({
    title: s.string(),
    role: s.string(),
    projectBuilt: s.string(),
    result: s.string(),
    devpostUrl: s.string().url().optional(),
    impact: s.string(),
  }),
});

// Define Dynamic Learning schema (Now dashboard items loaded from content)
const learning = defineCollection({
  name: 'Learning',
  pattern: 'learning/**/*.json',
  schema: s.object({
    category: s.enum(['ML COURSE', 'DSA TOPIC', 'ACTIVE BOOK', 'DAILY SPRINT', 'CURRENT GOAL']),
    title: s.string(),
    progress: s.string().optional(),
    status: s.enum(['In Progress', 'Active Focus', 'Up Next']),
    order: s.number().default(0),
  }),
});

// Define Timeline schema
const timeline = defineCollection({
  name: 'Timeline',
  pattern: 'timeline/**/*.json',
  schema: s.object({
    year: s.string(),
    title: s.string(),
    description: s.string(),
    category: s.string(),
    order: s.number().default(0),
  }),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash].[ext]',
    clean: true,
  },
  collections: {
    projects,
    experiences,
    certificates,
    hackathons,
    learning,
    timeline,
  },
});
