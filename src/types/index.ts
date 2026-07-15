/**
 * Unified TypeScript Type Declarations for the Portfolio.
 * Aligned with Velite schemas.
 */

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  challenges: string;
  learnings: string;
  futureImprovements: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'concept';
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  techStack: string[];
  github: string;
  demo?: string;
  thumbnail?: string;
  publishedAt: string;
  updatedAt: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
  skillsUsed: string[];
  isClubLeadership: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  verifyUrl?: string;
}

export interface Hackathon {
  title: string;
  role: string;
  projectBuilt: string;
  result: string;
  devpostUrl?: string;
  impact: string;
}

export interface Learning {
  category: 'ML COURSE' | 'DSA TOPIC' | 'ACTIVE BOOK' | 'DAILY SPRINT' | 'CURRENT GOAL';
  title: string;
  progress?: string;
  status: 'In Progress' | 'Active Focus' | 'Up Next';
  order: number;
}

export interface Timeline {
  year: string;
  title: string;
  description: string;
  category: string;
  order: number;
}

export interface Skill {
  name: string;
  category: string;
  years?: string;
  description?: string;
  displayOrder: number;
  visible: boolean;
}
