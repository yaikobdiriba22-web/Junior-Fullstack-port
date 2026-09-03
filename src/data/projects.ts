import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'school-management-system',
    title: 'School Management & Administration System',
    subtitle: 'Comprehensive multi-role educational administrative suite',
    description:
      'A web-based platform designed to simplify student registration, attendance, grades, teacher management, and school administration across multiple academic terms.',
    category: 'fullstack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    status: 'Completed',
    featured: true,
    bentoSize: 'large',
    githubUrl: 'https://github.com/yaikobdiriba22-web/Albright',
    demoUrl: 'https://github.com/yaikobdiriba22-web/Albright#preview',
    mockupType: 'dashboard',
    caseStudy: {
      overview:
        'Educational institutions often rely on fragmented paper records and disparate spreadsheets, leading to attendance inaccuracies, delayed report cards, and communication bottlenecks between staff and guardians. This platform unifies academic administration into a secure, responsive web ecosystem.',
      problem:
        'Schools faced high administrative overhead when calculating term grade averages, recording attendance across 40+ student classrooms, and giving parents timely visibility into academic progress.',
      solution:
        'Architected a Role-Based Access Control (RBAC) web application with four tailored portals: Super Admin, Teacher, Student, and Parent. Built automated grade point calculation routines, daily attendance recording sheets, and exportable transcript reports.',
      keyFeatures: [
        'Multi-Role Authentication (Admin, Teacher, Student, Parent) with granular permission guards',
        'Student & Teacher Information System with batch enrollment and profile management',
        'Interactive Attendance Matrix with single-click status logging and absentee alerts',
        'Dynamic Grading Engine with customizable weightage, exam recording, and automated GPA calculation',
        'Parent Portal with attendance breakdown and term report card downloads',
        'Analytical Admin Dashboard tracking student enrollment trends, revenue fee status, and faculty loads',
      ],
      architecture:
        'Frontend is built as a single-page application using React + TypeScript with React Context for auth state. The backend is a modular Node.js/Express REST API communicating with a normalized PostgreSQL database via parameterized SQL queries to prevent injection.',
      challenges: [
        'Handling concurrent attendance submissions across multiple classrooms during morning peak periods without locking database tables.',
        'Structuring complex SQL joins across terms, courses, assessments, and grade weights while maintaining sub-100ms response times for student report generation.',
      ],
      learnings: [
        'Mastered relational database normalization and foreign key cascading rules in PostgreSQL.',
        'Implemented rigorous server-side input validation and sanitized API payloads to enforce academic integrity.',
        'Designed accessible, high-density tabular data interfaces optimized for desktop office displays.',
      ],
      databaseSchemaPreview:
        'Tables: users, roles, students, teachers, classes, subjects, enrollments, attendance, assessments, grades, term_reports',
      apiEndpointsPreview: [
        'POST /api/auth/login - JWT Authentication & Role Dispatch',
        'GET /api/students - Paginated student directory with class filters',
        'POST /api/attendance/bulk - Batch classroom daily attendance recording',
        'POST /api/grades/calculate - GPA and term report card compilation',
        'GET /api/analytics/overview - School-wide operational metrics',
      ],
    },
  },
  {
    id: 'pos-business-management-system',
    title: 'POS & Business Management System',
    subtitle: 'Point-of-sale, stock tracking, and VAT-compliant invoicing',
    description:
      'A responsive retail and wholesale business management platform handling real-time point-of-sale transactions, barcode-ready inventory tracking, customer credit ledgers, and VAT-compliant invoicing.',
    category: 'business',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    status: 'Completed',
    featured: true,
    bentoSize: 'landscape',
    githubUrl: 'https://github.com/yaikobdiriba22-web/pos',
    demoUrl: 'https://github.com/yaikobdiriba22-web/pos#preview',
    mockupType: 'pos',
    caseStudy: {
      overview:
        'Local retail and wholesale businesses frequently struggle with stock reconciliation, slow cashier checkout queues, and compliance with statutory VAT reporting requirements.',
      problem:
        'Manual bookkeeping resulted in unexpected stockouts, cash drawer discrepancies at shift end, and tedious manual VAT calculation on itemized sales receipts.',
      solution:
        'Engineered an ultra-fast, keyboard-accessible POS checkout interface backed by transactional inventory deductions and instantaneous printable receipts with embedded VAT calculations.',
      keyFeatures: [
        'High-Speed POS Register with quick-search product catalog and barcode scanner compatibility',
        'Real-Time Inventory Management with automatic low-stock alerts and supplier purchase orders',
        'VAT-Compliant Invoicing & Receipt Generator with customizable tax rates and business details',
        'Customer Ledger & Credit Tracking for frequent trade clients and debt settlements',
        'End-of-Day Register Reconciliation and cash drawer settlement reporting',
        'Visual Sales Analytics highlighting top-selling items, revenue velocity, and peak sales hours',
      ],
      architecture:
        'Client-side optimistic UI updates ensure instantaneous checkout response. Backend runs ACID-compliant PostgreSQL transactions (BEGIN ... COMMIT) to ensure inventory quantities and ledger entries are synchronized atomically.',
      challenges: [
        'Preventing race conditions where multiple cashiers sell the last available stock item simultaneously.',
        'Designing a high-contrast, compact POS layout that remains fast on modest hardware with keyboard-only shortcuts (F1-F12 keys).',
      ],
      learnings: [
        'Gained deep experience in SQL transaction isolation levels and pessimistic locking (SELECT ... FOR UPDATE).',
        'Understood business accounting fundamentals: COGS, gross margins, credit debt aging, and tax compliance.',
        'Optimized DOM rendering in React using memoization for large 5,000+ item product lists.',
      ],
      databaseSchemaPreview:
        'Tables: products, categories, inventory_logs, customers, invoices, invoice_items, payment_transactions, tax_rates, cash_drawers',
      apiEndpointsPreview: [
        'POST /api/pos/checkout - Atomic sale creation, stock deduction & invoice generation',
        'GET /api/inventory/alerts - Low stock threshold notifications',
        'GET /api/invoices/:id/print - VAT invoice print payload',
        'GET /api/reports/sales-daily - Daily cash and digital payment breakdown',
      ],
    },
  },
  {
    id: 'academy-lms-platform',
    title: 'Academy Learning Management Platform',
    subtitle: 'Course delivery, interactive quizzes, and student progress tracker',
    description:
      'An e-learning web platform facilitating structured course authoring, video module streaming, student assignment submissions, auto-graded quizzes, and automated certificate generation.',
    category: 'fullstack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    status: 'Production-Ready',
    featured: true,
    bentoSize: 'medium',
    githubUrl: 'https://github.com/yaikobdiriba22-web/James-Tech-Academy-',
    demoUrl: 'https://github.com/yaikobdiriba22-web/James-Tech-Academy-#preview',
    mockupType: 'lms',
    caseStudy: {
      overview:
        'A modern digital academy solution crafted to enable educators to package structured video curricula and interactive homework, allowing learners to track completion milestones at their own pace.',
      problem:
        'Instructors lacked an intuitive dashboard to organize multi-chapter courses, track student drop-off points, and grade batch assignment submissions with structured rubrics.',
      solution:
        'Built a modern LMS with dedicated instructor course-builder tools, Markdown-supported lesson notes, video embedding, multiple-choice quiz engines with instant feedback, and certificate completion triggers.',
      keyFeatures: [
        'Modular Course Builder supporting sections, video lessons, downloadable resources, and quizzes',
        'Student Learning Interface with distraction-free theater mode, bookmarking, and notes taking',
        'Interactive Quiz Engine with timer, randomized question banks, and instant score computation',
        'Assignment Submission Portal with file uploads and instructor grading feedback',
        'Visual Student Progress Bar tracking percentage completion across all registered courses',
        'Instructor Revenue & Enrollment Analytics with course rating aggregation',
      ],
      architecture:
        'Utilized MongoDB document modeling to flexibly nest course curricula (sections and lectures within course documents) and index student progress records for instant retrieval without deep recursive relational joins.',
      challenges: [
        'Managing persistent video playback timestamps across page reloads and device switches.',
        'Implementing secure quiz verification on the server side so answers cannot be inspected in browser DevTools.',
      ],
      learnings: [
        'Mastered document-oriented NoSQL database modeling with Mongoose schemas and compound indexes.',
        'Implemented clean state persistence and custom React hooks for media playback tracking.',
        'Adopted strict accessibility patterns for quiz forms and keyboard tab navigation.',
      ],
      databaseSchemaPreview:
        'Collections: users, courses, sections, lessons, enrollments, quiz_attempts, assignments, certificates, reviews',
      apiEndpointsPreview: [
        'POST /api/courses/create - Multi-module course creation',
        'GET /api/courses/:id/learn - Protected curriculum delivery for enrolled students',
        'POST /api/quizzes/:id/submit - Server-side quiz evaluation & score recording',
        'PATCH /api/progress/lesson - Milestone update and certificate threshold checker',
      ],
    },
  },
  {
    id: 'employee-management-payroll',
    title: 'Employee Management & Payroll Portal',
    subtitle: 'HR workforce directory, shift rosters, leave requests & payroll slips',
    description:
      'An internal enterprise HR tool streamlining staff onboarding, department hierarchy management, time-off requests approval chains, and automated net salary payslip generation.',
    category: 'business',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    status: 'Completed',
    featured: true,
    bentoSize: 'small',
    githubUrl: 'https://github.com/yaikobdiriba22-web/James-ERP',
    demoUrl: 'https://github.com/yaikobdiriba22-web/James-ERP#preview',
    mockupType: 'employee',
    caseStudy: {
      overview:
        'Medium-sized enterprises face payroll calculation inaccuracies and fragmented leave tracking when relying on email chains or manual paper forms.',
      problem:
        'HR officers spent days manually computing tax deductions, pension contributions, and unpaid leave penalties at the end of each month.',
      solution:
        'Designed an automated HR portal in Laravel + MySQL that calculates tax brackets, generates downloadable PDF payslips, and coordinates multi-step supervisor leave approvals.',
      keyFeatures: [
        'Employee Directory with role-based profiles, employment contracts, and department assignments',
        'Leave Management Workflow with pending request notifications and manager approval actions',
        'Automated Payroll Engine calculating gross earnings, statutory tax withholdings, and net pay',
        'Downloadable Itemized Payslips with encrypted employee verification codes',
        'Shift Scheduling Calendar and attendance check-in logs',
      ],
      architecture:
        'Structured in Laravel following MVC conventions. Leveraged Eloquent relationships, database transactions for payroll commits, and Blade components styled with Tailwind CSS.',
      challenges: [
        'Accurately modeling multi-tiered tax deduction formulas with dynamic threshold allowances.',
        'Enforcing strict permission policies so managers can only approve leaves within their assigned department.',
      ],
      learnings: [
        'Gained strong command over backend authorization gates, policies, and middleware in Laravel.',
        'Engineered reproducible database migrations and seeders for realistic organizational testing.',
      ],
      databaseSchemaPreview:
        'Tables: employees, departments, designations, attendances, leave_types, leave_applications, payroll_periods, salary_slips',
      apiEndpointsPreview: [
        'GET /api/employees - Searchable company staff roster',
        'POST /api/leaves/apply - Submit leave request with duration calculation',
        'POST /api/payroll/generate - Batch payroll computation for current pay cycle',
      ],
    },
  },
  {
    id: 'restaurant-management-system',
    title: 'Restaurant Order & Table Management System',
    subtitle: 'Kitchen display system, floor table management & live orders',
    description:
      'A specialized hospitality management application featuring interactive dining floor table mapping, digital kitchen order tickets (KOT), item modifier selections, and bill splitting.',
    category: 'business',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    status: 'Production-Ready',
    featured: true,
    bentoSize: 'small',
    githubUrl: 'https://github.com/yaikobdiriba22-web/metech',
    demoUrl: 'https://github.com/yaikobdiriba22-web/metech#preview',
    mockupType: 'restaurant',
    caseStudy: {
      overview:
        'Restaurants lose revenue and customer goodwill when dining orders get delayed between waitstaff and kitchen line cooks, or when table occupancy states become disorganized.',
      problem:
        'Paper ticket order handoffs were prone to handwriting mistakes, special dietary modifier omissions, and table occupancy confusion during peak dinner rush hours.',
      solution:
        'Designed a visual Table Floor Layout with real-time occupancy status (Vacant, Seated, Bill Requested), paired with a Digital Kitchen Display Screen (KDS) showing prep timers.',
      keyFeatures: [
        'Visual Floor & Table Map with dynamic occupancy indicators and reservation flags',
        'Digital Kitchen Order Ticket (KOT) board with live item checklist and preparation timers',
        'Menu Catalog with customizable ingredient modifiers (spice levels, sides, extras)',
        'Split-Bill & Merge-Table capabilities for flexible customer payment settlements',
        'Daily Revenue & Ingredient Usage summary reports',
      ],
      architecture:
        'Frontend built with React and Tailwind grid systems to simulate real restaurant table geometry. Express.js REST API with polling update queues to keep table status and kitchen preparation boards synchronized.',
      challenges: [
        'Designing a touch-friendly UI operable by waitstaff on handheld tablets and kitchen staff on stationary touch monitors.',
        'Handling order modifications after the meal has already begun preparation.',
      ],
      learnings: [
        'Gained strong insights into fast-paced operational workflows and human-computer interaction in hospitality environments.',
        'Refined modular backend state machines for tracking order lifecycles (Created → In Prep → Ready → Served → Paid).',
      ],
      databaseSchemaPreview:
        'Tables: tables, menu_items, item_modifiers, dining_orders, order_items, kitchen_tickets, payments, staff_shifts',
      apiEndpointsPreview: [
        'GET /api/tables/status - Real-time floor plan state',
        'POST /api/orders/place - Table order placement with modifier flags',
        'PATCH /api/kitchen/tickets/:id - State transition for kitchen display',
      ],
    },
  },
  {
    id: 'developer-portfolio-showcase',
    title: 'Personal Developer Portfolio & Design System',
    subtitle: 'High-performance, accessible 2026 portfolio with bilingual i18n & case studies',
    description:
      'The very portfolio you are browsing: an ultra-fast, accessible single-page application built with modern dark Bento architecture, smooth micro-interactions, and deep case study breakdowns.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite'],
    status: 'Completed',
    featured: true,
    bentoSize: 'medium',
    githubUrl: 'https://github.com/yaikobdiriba22-web/Yaikob-Diriba-port',
    demoUrl: 'https://github.com/yaikobdiriba22-web/Yaikob-Diriba-port',
    mockupType: 'portfolio',
    caseStudy: {
      overview:
        'Recruiters review junior developer portfolios in under 30 seconds. A standout portfolio must communicate competence immediately through clean typography, impeccable responsive behavior, real project architecture, and zero bloat.',
      problem:
        'Many junior developer portfolios rely on generic templates, exaggerated claims, or broken responsiveness that fail to give recruiters confidence in the applicant’s actual coding ability.',
      solution:
        'Engineered a custom dark Bento design system inspired by Linear and Vercel. Integrated full internationalization (English/Amharic), keyboard-friendly modals, interactive code previews, and strict WCAG AA contrast compliance.',
      keyFeatures: [
        'Dark Bento Grid Architecture with subtle aurora glows and radial mouse lighting',
        'Bilingual Localization System (English / Amharic) powered by reactive React context',
        'In-Depth Project Case Study modals documenting architecture, schema, challenges, and learnings',
        'Accessible Contact Form with real-time field validation and localized feedback',
        'Interactive Developer Workspace visual with live simulated TypeScript compilation',
      ],
      architecture:
        'Crafted with React 19, TypeScript, and Tailwind CSS. Built with modular component architecture, zero heavy external canvas libraries, and CSS-driven transitions for smooth 60fps performance.',
      challenges: [
        'Maintaining strict type safety across multi-lingual dictionaries without fallback crashes.',
        'Ensuring complex interactive Bento layouts gracefully collapse to intuitive single-column layouts on 320px mobile screens.',
      ],
      learnings: [
        'Learned to view software presentation from the perspective of technical recruiters and hiring managers.',
        'Refined micro-interaction timing curves and responsive container mathematics for pristine visual polish.',
      ],
      databaseSchemaPreview:
        'Structured Typed Modules: projects.ts, skills.ts, profile.ts, journey.ts, socials.ts, languageContext.tsx',
      apiEndpointsPreview: [
        'GET /api/contact - Form validation and message dispatch',
        'Client-Side Routing / Modal state management',
      ],
    },
  },
];
