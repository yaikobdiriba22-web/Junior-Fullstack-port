import { Service } from '../types';

export const whatICanBuild: Service[] = [
  {
    id: 'web-applications',
    title: 'Web Applications',
    description:
      'Responsive, practical applications built around real user needs, turning workflows into intuitive digital products.',
    iconName: 'Globe',
    deliverables: [
      'Full-stack architecture connecting React frontends with Node/PHP APIs',
      'Secure user sessions, JWT token auth, and role-based permissions',
      'Real-time data synchronization and persistent database storage',
      'Fast initial page load and seamless client-side interactions',
    ],
    idealFor: 'Teams, startups, and businesses needing practical custom web software.',
  },
  {
    id: 'frontend-interfaces',
    title: 'Frontend Interfaces',
    description:
      'Modern, accessible user interfaces engineered with precision across desktop, tablet, and mobile devices.',
    iconName: 'Layout',
    deliverables: [
      'Clean component architecture using React, TypeScript, and Tailwind CSS',
      'Mobile-first responsive design from 320px up to 1920px+',
      'Accessible forms, keyboard navigation, and WCAG AA contrast',
      'Subtle micro-interactions and smooth layout transitions',
    ],
    idealFor: 'Projects requiring clean visual polish, high responsiveness, and user clarity.',
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    description:
      'Reliable server logic, RESTful APIs, relational databases, and secure authentication pipelines.',
    iconName: 'Server',
    deliverables: [
      'Structured REST API design in Node.js/Express and PHP/Laravel',
      'Normalized PostgreSQL & MySQL relational schema design with ACID guarantees',
      'Input validation, payload sanitization, and error middleware',
      'Database indexing and optimized queries for fast response times',
    ],
    idealFor: 'Applications needing rock-solid data integrity and clean API contracts.',
  },
  {
    id: 'business-systems',
    title: 'Business Systems',
    description:
      'Specialized management platforms automating operational overhead: school administration, POS, employee, and inventory portals.',
    iconName: 'Building2',
    deliverables: [
      'Multi-role administrative portals (Admin, Staff, Clients, Students)',
      'Point-of-sale checkout registers with instant receipt & VAT computation',
      'Attendance tracking matrices, grade computations, and audit logs',
      'Exportable reporting and summary analytics dashboards',
    ],
    idealFor: 'Schools, retail shops, restaurants, and organizations seeking digitized operations.',
  },
];
