import { BlogPost } from '../types';

export const yacobTechPosts: BlogPost[] = [
  {
    id: 'building-scalable-relational-schemas',
    title: 'Designing Practical Relational Schemas for Business Portals',
    excerpt:
      'A practical breakdown of how to structure normalized PostgreSQL tables, foreign key constraints, and indexing strategies for high-frequency transactional apps like POS and School ERPs.',
    category: 'Databases & Architecture',
    readTime: '5 min read',
    date: 'Tech Insights',
    tags: ['PostgreSQL', 'Database Design', 'SQL', 'Best Practices'],
    externalUrl: 'https://www.youtube.com/@YacobTech123',
  },
  {
    id: 'clean-react-typescript-patterns',
    title: 'Clean React + TypeScript Patterns for Junior Developers',
    excerpt:
      'Key habits that separate messy code from maintainable UI: strict prop interfaces, avoiding unnecessary `any`, utilizing custom hooks for state decoupling, and reusable design tokens.',
    category: 'Frontend Engineering',
    readTime: '6 min read',
    date: 'Tech Insights',
    tags: ['React', 'TypeScript', 'Clean Code', 'Web Dev'],
    externalUrl: 'https://www.youtube.com/@YacobTech123',
  },
  {
    id: 'securing-express-apis-jwt',
    title: 'Role-Based Authentication & Route Protection in Express.js',
    excerpt:
      'Step-by-step implementation of JWT token verification, password hashing with bcrypt, role-permission middlewares, and securing sensitive API endpoints against unauthorized access.',
    category: 'Backend Security',
    readTime: '7 min read',
    date: 'Tech Insights',
    tags: ['Node.js', 'Express', 'JWT', 'Security', 'RBAC'],
    externalUrl: 'https://www.youtube.com/@YacobTech123',
  },
  {
    id: 'ai-assisted-developer-workflows',
    title: 'How Junior Developers Can Leverage AI Tools Without Becoming Dependent',
    excerpt:
      'Balancing AI code generation with deep fundamental understanding. Using AI for rapid prototyping, syntax discovery, and test case generation while writing rock-solid verified code.',
    category: 'AI & Productivity',
    readTime: '4 min read',
    date: 'Tech Insights',
    tags: ['AI Tools', 'Developer Productivity', 'Career Growth'],
    externalUrl: 'https://www.youtube.com/@YacobTech123',
  },
];

export const contentCategories = [
  { name: 'All Insights', count: 4 },
  { name: 'Web Development', count: 2 },
  { name: 'Databases', count: 1 },
  { name: 'Backend & Security', count: 1 },
  { name: 'AI & Productivity', count: 1 },
];
