export type ProjectCategory = 'all' | 'fullstack' | 'web' | 'business' | 'uiux';

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  challenges: string[];
  learnings: string[];
  databaseSchemaPreview?: string;
  apiEndpointsPreview?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Production-Ready';
  featured: boolean;
  bentoSize?: 'large' | 'landscape' | 'medium' | 'small';
  githubUrl?: string;
  demoUrl?: string;
  mockupType: 'dashboard' | 'pos' | 'lms' | 'restaurant' | 'employee' | 'portfolio';
  caseStudy: ProjectCaseStudy;
}

export type SkillProficiency = 'Frequently Used' | 'Working Knowledge' | 'Currently Learning';

export interface SkillItem {
  name: string;
  iconName?: string;
  level: SkillProficiency;
  category: 'frontend' | 'backend' | 'databases' | 'tools' | 'other';
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
}

export interface TimelineMilestone {
  period: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  type: 'education' | 'milestone' | 'growth';
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  externalUrl?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
  displayValue: string;
}
