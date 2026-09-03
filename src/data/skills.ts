import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern, responsive, and accessible client-side interfaces using component architectures.',
    skills: [
      { name: 'HTML5', level: 'Frequently Used', category: 'frontend', highlight: true },
      { name: 'CSS3', level: 'Frequently Used', category: 'frontend', highlight: true },
      { name: 'JavaScript', level: 'Frequently Used', category: 'frontend', highlight: true },
      { name: 'TypeScript', level: 'Frequently Used', category: 'frontend', highlight: true },
      { name: 'React', level: 'Frequently Used', category: 'frontend', highlight: true },
      { name: 'Tailwind CSS', level: 'Frequently Used', category: 'frontend', highlight: true },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Server architectures, RESTful API routing, data validation, and business logic.',
    skills: [
      { name: 'Node.js', level: 'Frequently Used', category: 'backend', highlight: true },
      { name: 'Express.js', level: 'Frequently Used', category: 'backend', highlight: true },
      { name: 'PHP', level: 'Working Knowledge', category: 'backend', highlight: true },
      { name: 'Laravel', level: 'Working Knowledge', category: 'backend', highlight: true },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational data modeling, schema normalization, ACID queries, and document stores.',
    skills: [
      { name: 'PostgreSQL', level: 'Frequently Used', category: 'databases', highlight: true },
      { name: 'MySQL', level: 'Frequently Used', category: 'databases', highlight: true },
      { name: 'MongoDB', level: 'Working Knowledge', category: 'databases', highlight: false },
      { name: 'Supabase', level: 'Currently Learning', category: 'databases', highlight: false },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Workflows',
    description: 'Version control, build automation, interface prototyping, and deployment pipelines.',
    skills: [
      { name: 'Git', level: 'Frequently Used', category: 'tools', highlight: true },
      { name: 'GitHub', level: 'Frequently Used', category: 'tools', highlight: true },
      { name: 'VS Code', level: 'Frequently Used', category: 'tools', highlight: true },
      { name: 'Vite', level: 'Frequently Used', category: 'tools', highlight: true },
      { name: 'Postman', level: 'Working Knowledge', category: 'tools', highlight: false },
      { name: 'Figma', level: 'Working Knowledge', category: 'tools', highlight: false },
      { name: 'Vercel', level: 'Working Knowledge', category: 'tools', highlight: false },
    ],
  },
  {
    id: 'other',
    title: 'Architecture & Core Practices',
    description: 'Foundational computer science principles, system integration, and robust design.',
    skills: [
      { name: 'REST APIs', level: 'Frequently Used', category: 'other', highlight: true },
      { name: 'Responsive Design', level: 'Frequently Used', category: 'other', highlight: true },
      { name: 'CRUD systems', level: 'Frequently Used', category: 'other', highlight: true },
      { name: 'Authentication (JWT/Sessions)', level: 'Working Knowledge', category: 'other', highlight: true },
    ],
  },
];

export const currentlyLearningSkills = [
  'Advanced React patterns & architecture',
  'Scalable backend system architecture',
  'Deep TypeScript strict type patterns',
  'PostgreSQL query indexing & optimization',
  'Modern containerized & edge deployment',
  'AI-assisted software development workflows',
];
