import { ProcessStep } from '../types';

export const developmentProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the user, business problem, and core operational requirements.',
    details: [
      'Clarify target audience goals and pain points',
      'Identify critical workflows and data dependencies',
      'Outline scope boundaries to avoid unnecessary complexity',
    ],
    iconName: 'Search',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define architecture, screens, database schemas, and development approach.',
    details: [
      'Design normalized relational database entities & relationships',
      'Map out RESTful endpoint contracts & payload structures',
      'Create responsive UI layouts and component wireframes',
    ],
    iconName: 'Compass',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop clean frontend components and reliable backend functionality.',
    details: [
      'Write modular, strictly typed TypeScript & React components',
      'Implement secure backend APIs with robust authentication',
      'Apply atomic database queries with transactional safety',
    ],
    iconName: 'Code2',
  },
  {
    step: '04',
    title: 'Test',
    description: 'Check responsiveness, usability, validation rules, and edge cases.',
    details: [
      'Test cross-device layouts (320px mobile to 4K ultra-wide)',
      'Validate form constraints, sanitize inputs, and verify error states',
      'Ensure WCAG contrast legibility and keyboard navigation',
    ],
    iconName: 'CheckCircle2',
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Prepare the application for production, performance profiling, and hosting.',
    details: [
      'Configure environment variables securely',
      'Optimize bundles with Vite code-splitting and asset compression',
      'Deploy to cloud hosting platforms with continuous integration',
    ],
    iconName: 'Rocket',
  },
];
