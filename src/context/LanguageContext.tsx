import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'am';

export interface Translations {
  // Common & Navigation
  nav: {
    about: string;
    skills: string;
    projects: string;
    services: string;
    journey: string;
    yacobTech: string;
    contact: string;
    letsTalk: string;
    resume: string;
    availableForHire: string;
    navigation: string;
    quickTerminal: string;
  };
  // Hero Section
  hero: {
    status: string;
    location: string;
    greeting: string;
    im: string;
    name: string;
    role: string;
    shortBio: string;
    viewWork: string;
    downloadCV: string;
    connect: string;
    trustIndicators: {
      degreeTitle: string;
      degreeDesc: string;
      fullstackTitle: string;
      fullstackDesc: string;
      uiuxTitle: string;
      uiuxDesc: string;
      systemsTitle: string;
      systemsDesc: string;
    };
  };
  // About Section
  about: {
    badge: string;
    title: string;
    subtitle: string;
    availableBadge: string;
    locationLabel: string;
    locationValue: string;
    academicLabel: string;
    academicValue: string;
    focusLabel: string;
    focusValue: string;
    workLabel: string;
    workValue: string;
    copyEmail: string;
    philosophyTitle: string;
    philosophyP1: string;
    philosophyP2: string;
    philosophyP3: string;
    interestsTitle: string;
    interests: string[];
    universityTitle: string;
    universityDesc: string;
    viewTimeline: string;
  };
  // Skills Section
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    architectureTitle: string;
    architectureDesc: string;
    architectureSubtitle: string;
    interactiveStack: string;
    interactiveFlow: string;
    allCategories: string;
    catFrontend: string;
    catBackend: string;
    catDatabases: string;
    catTools: string;
    catDesign: string;
    catOther: string;
    competencies: string;
    practicalApplication: string;
    honestyNote: string;
    note: string;
    categories: {
      frontend: string;
      backend: string;
      database: string;
      tools: string;
      architecture: string;
      concepts: string;
    };
  };
  // Projects Section
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    fullstack: string;
    business: string;
    web: string;
    allProjects: string;
    businessSystems: string;
    webApps: string;
    keyProblemSolved: string;
    problemSolved: string;
    viewCaseStudy: string;
    livePreview: string;
    viewCode: string;
    statusCompleted: string;
    statusProductionReady: string;
  };
  // Services Section
  services: {
    badge: string;
    title: string;
    subtitle: string;
    deliverables: string;
    keyDeliverables: string;
    idealFor: string;
    inquireCTA: string;
    readyTitle: string;
    readyDesc: string;
    calloutTitle: string;
    calloutSubtitle: string;
    startDiscussion: string;
    startConversation: string;
  };
  // Journey Section
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    degreeTitle: string;
    degreeUniversity: string;
    graduatedYear: string;
    degreeDesc: string;
    milestones: {
      uniTitle: string;
      uniSubtitle: string;
      uniDesc: string;
      techTitle: string;
      techSubtitle: string;
      techDesc: string;
      prodTitle: string;
      prodSubtitle: string;
      prodDesc: string;
      currentTitle: string;
      currentSubtitle: string;
      currentDesc: string;
    };
  };
  // Yacob Tech Section
  yacobTech: {
    badge: string;
    title: string;
    subtitle: string;
    brandHeadline: string;
    brandDesc: string;
    visitChannel: string;
    coreTopicsTitle: string;
    communityNote: string;
    bannerTitle: string;
    bannerTag: string;
    bannerDesc: string;
    visitBtn: string;
    byAuthor: string;
    exploreTopic: string;
  };
  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directEmail: string;
    emailResponseTime: string;
    otherChannels: string;
    statusNoteTitle: string;
    statusNoteDesc: string;
    sendMessageTitle: string;
    sendMessageSubtitle: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    inquiryLabel: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    minChars: string;
    validTag: string;
    errorBanner: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    channelsTitle: string;
    channelsDesc: string;
    emailDirect: string;
    whatsappDirect: string;
    telegramDirect: string;
    youtubeDirect: string;
    success: {
      preparedTitle: string;
      preparedDesc: string;
    };
    validation: {
      fixErrors: string;
      valid: string;
      minChars: string;
    };
    labels: {
      name: string;
      email: string;
      inquiryScope: string;
      subject: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    inquiryOptions: {
      fullstack: string;
      business: string;
      frontend: string;
      job: string;
      other: string;
    };
    buttons: {
      sendAnother: string;
      sending: string;
      send: string;
    };
    options: {
      fullstack: string;
      business: string;
      frontend: string;
      job: string;
      other: string;
    };
  };
  // Footer
  footer: {
    desc: string;
    tagline: string;
    developer: string;
    developerLabel: string;
    roleDegree: string;
    navigation: string;
    navTitle: string;
    connectChannels: string;
    channelsTitle: string;
    easterEgg: string;
    devConsole: string;
    rights: string;
    copyright: string;
    builtWith: string;
    backToTop: string;
  };
  // CV Modal
  cvModal: {
    title: string;
    subtitle: string;
    downloadDoc: string;
    summaryTitle: string;
    summaryText: string;
    educationTitle: string;
    degreeName: string;
    universityName: string;
    gradYear: string;
    coursework: string;
    projectsTitle: string;
    coreCompetenciesTitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      journey: 'Journey',
      yacobTech: 'Yacob Tech',
      contact: 'Contact',
      letsTalk: "Let's Talk",
      resume: 'Resume / CV',
      availableForHire: 'Available for Hire',
      navigation: 'Navigation',
      quickTerminal: 'Quick Terminal (Ctrl+K)',
    },
    hero: {
      status: 'Open to Developer Roles & Projects',
      location: 'Ethiopia 📍',
      greeting: "Hi, I'm",
      im: "Hi, I'm",
      name: 'Yaikob Diriba',
      role: 'Junior Full-Stack Developer',
      shortBio:
        'I design and build responsive websites, business applications, and full-stack systems that solve real-world problems. Grounded in solid Computer Science fundamentals and hands-on production code.',
      viewWork: 'View My Work',
      downloadCV: 'Download CV',
      connect: 'Connect:',
      trustIndicators: {
        degreeTitle: 'BSc Computer Science',
        degreeDesc: 'Gambella University (2017 E.C.)',
        fullstackTitle: 'Full-Stack Architecture',
        fullstackDesc: 'React, Node, PostgreSQL',
        uiuxTitle: 'UI/UX & Product Thinking',
        uiuxDesc: 'Modern, Accessible Design',
        systemsTitle: 'Real-World Systems',
        systemsDesc: 'POS, School, LMS Portals',
      },
    },
    about: {
      badge: 'Background & Identity',
      title: 'About Me',
      subtitle:
        'Grounded in Computer Science theory, driven by hands-on full-stack product engineering.',
      availableBadge: 'Available',
      locationLabel: 'Location',
      locationValue: 'Ethiopia',
      academicLabel: 'Academic Qualification',
      academicValue: 'BSc in Computer Science (2017 E.C.)',
      focusLabel: 'Primary Focus',
      focusValue: 'Full-Stack & Business Systems',
      workLabel: 'Work Engagement',
      workValue: 'Junior Full-Stack / Projects / Remote',
      copyEmail: 'Copy Email',
      philosophyTitle: 'Software Engineering Philosophy',
      philosophyP1:
        "I'm Yaikob Diriba, a Computer Science graduate from Gambella University and an enthusiastic junior full-stack developer committed to turning practical business workflows into robust digital systems.",
      philosophyP2:
        'Rather than building superficial clones, my primary focus has been developing deeply functional web systems: from school portals with complex grade matrix calculations, to retail POS applications with atomic ACID transactions, to interactive learning platforms.',
      philosophyP3:
        'My workflow bridges modern frontend development with sound database normalization, strict typing in TypeScript, and RESTful API conventions in Node.js/Express and PHP/Laravel.',
      interestsTitle: 'Core Engineering Interests',
      interests: [
        'Full-Stack Web Engineering',
        'Database Architecture & Optimization',
        'Business Process Systems (POS, ERP, School Ops)',
        'UI/UX & Design Systems',
        'Developer Tooling & Automation',
      ],
      universityTitle: 'Gambella University',
      universityDesc: 'BSc in Computer Science (2017 E.C.)',
      viewTimeline: 'View Timeline',
    },
    skills: {
      badge: 'Technical Proficiency',
      title: 'Skills & Technology Stack',
      subtitle:
        'Honest, practical breakdown of technologies, frameworks, and architecture tools I work with daily.',
      architectureTitle: 'Technology Ecosystem Architecture',
      architectureDesc:
        'How components, APIs, and relational storage connect across my applications',
      architectureSubtitle: 'How components, APIs, and relational storage connect across my applications',
      interactiveStack: 'Interactive Stack Flow',
      interactiveFlow: 'Interactive Stack Flow',
      allCategories: 'All Categories',
      catFrontend: 'Frontend Development',
      catBackend: 'Backend & APIs',
      catDatabases: 'Databases & Storage',
      catTools: 'Dev Tools & CS Fundamentals',
      catDesign: 'UI/UX & Design Systems',
      catOther: 'Other Concepts',
      competencies: 'competencies',
      practicalApplication: 'Practical Application',
      honestyNote:
        '* Skills are based on verifiable academic foundations at Gambella University and hands-on repository projects — no exaggerated years of experience or arbitrary percentage bars.',
      note: '* Skills are based on verifiable academic foundations at Gambella University and hands-on repository projects — no exaggerated years of experience or arbitrary percentage bars.',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend & APIs',
        database: 'Databases & Storage',
        tools: 'Dev Tools & CS Fundamentals',
        architecture: 'System Architecture',
        concepts: 'Core CS Concepts',
      },
    },
    projects: {
      badge: 'Portfolio Showcase',
      title: 'Featured Projects',
      subtitle:
        "A selection of practical applications and systems I've built from the ground up.",
      all: 'All',
      allProjects: 'All Projects',
      fullstack: 'Full-Stack',
      business: 'Business Systems',
      businessSystems: 'Business Systems',
      web: 'Web Applications',
      webApps: 'Web Applications',
      keyProblemSolved: 'Key Problem Solved:',
      problemSolved: 'Key Problem Solved:',
      viewCaseStudy: 'View Case Study',
      livePreview: 'Live Preview',
      viewCode: 'View Repository',
      statusCompleted: 'Completed',
      statusProductionReady: 'Production-Ready',
    },
    services: {
      badge: 'Capabilities & Deliverables',
      title: 'What I Build & Deliver',
      subtitle:
        'Reliable software solutions for businesses, educational institutions, and digital products.',
      deliverables: 'Key Deliverables',
      keyDeliverables: 'Key Deliverables:',
      idealFor: 'Ideal For:',
      inquireCTA: 'Inquire About This Service',
      readyTitle: 'Have a Specific System or Project in Mind?',
      readyDesc:
        'Whether you need a full-stack web application, a database-backed portal, or a clean modern website, let’s discuss how I can contribute.',
      calloutTitle: 'Have a Specific System or Project in Mind?',
      calloutSubtitle: 'Whether you need a full-stack web application, a database-backed portal, or a clean modern website, let’s discuss how I can contribute.',
      startDiscussion: 'Start a Project Discussion',
      startConversation: 'Start a Project Discussion',
    },
    journey: {
      badge: 'Milestones & Progression',
      title: 'Education & Technical Journey',
      subtitle:
        'From rigorous Computer Science foundations at Gambella University to production-grade software development.',
      degreeTitle: 'BSc in Computer Science',
      degreeUniversity: 'Gambella University — Ethiopia',
      graduatedYear: 'Class of 2017 E.C. (2025/2026)',
      degreeDesc:
        'Completed a comprehensive 4-year Computer Science curriculum focused on software design, algorithms, relational database normalization, operating systems, and computer network architecture.',
      milestones: {
        uniTitle: 'BSc in Computer Science',
        uniSubtitle: 'Gambella University — Ethiopia (2017 E.C.)',
        uniDesc:
          'Completed a rigorous Computer Science degree with core immersion in algorithms, data structures, relational database systems, operating systems, and software engineering.',
        techTitle: 'Deep Dive into Modern Web Technologies',
        techSubtitle: 'Full-Stack JavaScript & Modern Frameworks',
        techDesc:
          'Transitioned academic programming knowledge into modern web development stacks with React, TypeScript, Node.js/Express, and PostgreSQL.',
        prodTitle: 'Building Real-World Business Applications',
        prodSubtitle: 'Practical Enterprise & Administrative Portals',
        prodDesc:
          'Engineered complete end-to-end applications designed around real organizational challenges: School Management, Retail POS, and LMS portals.',
        currentTitle: 'Open for Opportunities & Continuous Growth',
        currentSubtitle: 'Junior Full-Stack Developer & Content Creator',
        currentDesc:
          'Actively seeking junior full-stack developer roles, internships, and collaborative software projects to deliver tangible value.',
      },
    },
    yacobTech: {
      badge: 'Community & Content Hub',
      title: 'Yacob Tech',
      subtitle:
        'Documenting the developer journey, sharing tutorials, and exploring modern technologies.',
      brandHeadline: 'Empowering Developers with Practical Knowledge',
      brandDesc:
        'Under the Yacob Tech brand, I create approachable tech tutorials, share coding workflows, and build educational resources for aspiring software engineers in Ethiopia and beyond.',
      visitChannel: 'Visit Yacob Tech Channel',
      coreTopicsTitle: 'Core Content Focus Areas',
      communityNote:
        'Committed to making software engineering concepts intuitive, accessible, and grounded in real application.',
      bannerTitle: 'Yacob Tech Media & Tutorials',
      bannerTag: 'YouTube & Socials',
      bannerDesc:
        'Educational video breakdowns, software architecture patterns, and tech guides crafted for students and developers.',
      visitBtn: 'Visit Channel',
      byAuthor: 'By Yaikob Diriba',
      exploreTopic: 'Explore Discussion',
    },
    contact: {
      badge: 'Get In Touch',
      title: "Let's Build Something Meaningful",
      subtitle:
        'Open to junior full-stack developer positions, freelance systems engineering, and collaborative projects.',
      directEmail: 'Direct Email',
      emailResponseTime: 'Responses usually within 24 hours',
      otherChannels: 'Other Contact & Social Channels',
      statusNoteTitle: 'Based in Ethiopia (UTC+3)',
      statusNoteDesc: 'Available for remote contracts, global engineering teams, and local project engagements.',
      sendMessageTitle: 'Send a Direct Message',
      sendMessageSubtitle: 'Fill out the details below to start a discussion about your web project or software role.',
      formTitle: 'Send a Direct Message',
      formDesc:
        'Fill out the form below. I typically respond within 24 hours (UTC+3 / EAT).',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Alex Morgan',
      emailLabel: 'Email Address',
      emailPlaceholder: 'alex@company.com',
      inquiryLabel: 'Inquiry Scope',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. Full-Stack Role or Project Collaboration',
      messageLabel: 'Message Details',
      messagePlaceholder:
        'Briefly describe your project requirements, timeline, or position...',
      sendButton: 'Send Inquiry Message',
      sending: 'Transmitting Message...',
      minChars: 'Minimum 10 characters',
      validTag: 'Valid',
      errorBanner: 'Please correct the highlighted fields below before submitting.',
      successTitle: 'Message Dispatched Successfully!',
      successMessage:
        'Thank you for reaching out. A confirmation draft has been prepared, and I will review your message promptly.',
      sendAnother: 'Send Another Message',
      channelsTitle: 'Direct Communication Channels',
      channelsDesc:
        'Prefer a faster channel? Reach out directly via email, messaging, or social platforms.',
      emailDirect: 'Primary Email',
      whatsappDirect: 'WhatsApp Chat',
      telegramDirect: 'Telegram Channel',
      youtubeDirect: 'YouTube Channel',
      success: {
        preparedTitle: 'Message Prepared!',
        preparedDesc: 'Your message has been processed successfully and prepared in your email client.',
      },
      validation: {
        fixErrors: 'Please correct the highlighted fields below before submitting.',
        valid: 'Valid',
        minChars: 'Minimum 10 characters',
      },
      labels: {
        name: 'Your Name',
        email: 'Email Address',
        inquiryScope: 'Inquiry Scope',
        subject: 'Subject',
        message: 'Message Details',
      },
      placeholders: {
        name: 'e.g. Alex Morgan',
        email: 'alex@company.com',
        subject: 'e.g. Project Collaboration or Role',
        message: 'Briefly describe your project requirements, timeline, or position...',
      },
      inquiryOptions: {
        fullstack: 'Full-Stack Web App',
        business: 'Business Management / POS',
        frontend: 'Frontend Website / UI',
        job: 'Job / Recruitment Opportunity',
        other: 'Other Inquiry',
      },
      buttons: {
        sendAnother: 'Send Another Message',
        sending: 'Preparing Message...',
        send: 'Send Message',
      },
      options: {
        fullstack: 'Full-Stack Web App',
        business: 'Business Management / POS',
        frontend: 'Frontend Website / UI',
        job: 'Job / Recruitment Opportunity',
        other: 'Other Inquiry',
      },
    },
    footer: {
      desc: 'Building with technology. Learning every day. Creating useful solutions for real-world operations and businesses.',
      tagline:
        'Building with technology. Learning every day. Creating useful solutions for real-world operations and businesses.',
      developer: 'Developer',
      developerLabel: 'Developer:',
      roleDegree: 'Yaikob Diriba • BSc Computer Science',
      navigation: 'Navigation',
      navTitle: 'Navigation',
      connectChannels: 'Connect Channels',
      channelsTitle: 'Connect Channels',
      easterEgg: 'Dev Console [Easter Egg]',
      devConsole: 'Dev Console [Ctrl+K]',
      rights: '© 2026 Yaikob Diriba. All rights reserved.',
      copyright: '© 2026 Yaikob Diriba (Yacob Tech). All rights reserved.',
      builtWith: 'Built with React + TypeScript + Tailwind CSS',
      backToTop: 'Back to top',
    },
    cvModal: {
      title: 'Curriculum Vitae',
      subtitle: 'Yaikob Diriba — Junior Full-Stack Developer',
      downloadDoc: 'Download Printable Resume',
      summaryTitle: 'Professional Summary',
      summaryText:
        'Motivated Computer Science graduate from Gambella University (2017 E.C.) specializing in junior full-stack development. Experienced in designing responsive React/TypeScript user interfaces, developing structured RESTful APIs with Node.js/Express, and managing normalized PostgreSQL/MySQL relational schemas.',
      educationTitle: 'Education',
      degreeName: 'BSc in Computer Science',
      universityName: 'Gambella University — Ethiopia',
      gradYear: 'Graduated: 2017 E.C. (2025/2026 G.C.)',
      coursework:
        'Core coursework: Data Structures & Algorithms, Relational Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Object-Oriented Analysis & Design.',
      projectsTitle: 'Key Software Engineering Projects',
      coreCompetenciesTitle: 'Core Technical Competencies',
    },
  },
  am: {
    nav: {
      about: 'ስለ እኔ',
      skills: 'ክህሎቶች',
      projects: 'ፕሮጀክቶች',
      services: 'አገልግሎቶች',
      journey: 'የእድገት ጉዞ',
      yacobTech: 'ያዕቆብ ቴክ',
      contact: 'ያግኙኝ',
      letsTalk: 'እንነጋገር',
      resume: 'ሲቪ / ሪቪው',
      availableForHire: 'ለስራ ዝግጁ',
      navigation: 'ማውጫ',
      quickTerminal: 'ተርሚናል (Ctrl+K)',
    },
    hero: {
      status: 'ለሙሉ ጊዜ ስራና ለፕሮጀክቶች ክፍት ነኝ',
      location: 'ኢትዮጵያ 📍',
      greeting: 'ሰላም፣ እኔ',
      im: 'ሰላም፣ እኔ',
      name: 'ያዕቆብ ድሪባ',
      role: 'ጁኒየር የሙሉ-ስታክ ሶፍትዌር አበልጻጊ',
      shortBio:
        'ተግባራዊ የሆኑ ድረ-ገጾችን፣ የቢዝነስ ሲስተሞችን እና የሙሉ-ስታክ ሶፍትዌሮችን እገነባለሁ። በጋምቤላ ዩኒቨርሲቲ የኮምፒውተር ሳይንስ ትምህርት እና በተግባራዊ የኮድ ልምድ የታገዘ።',
      viewWork: 'ስራዎቼን ይመልከቱ',
      downloadCV: 'ሲቪ አውርድ',
      connect: 'ይገናኙ:',
      trustIndicators: {
        degreeTitle: 'የኮምፒውተር ሳይንስ ባችለር',
        degreeDesc: 'ጋምቤላ ዩኒቨርሲቲ (2017 ዓ.ም.)',
        fullstackTitle: 'የሙሉ-ስታክ ሲስተም ግንባታ',
        fullstackDesc: 'React፣ Node፣ PostgreSQL',
        uiuxTitle: 'UI/UX እና ዘመናዊ ዲዛይን',
        uiuxDesc: 'ቀላልና ሳቢ የተጠቃሚ ገጽታ',
        systemsTitle: 'ተግባራዊ የንግድ ሲስተሞች',
        systemsDesc: 'የሽያጭ (POS)፣ የት/ቤት መረጃ ፖርታል',
      },
    },
    about: {
      badge: 'ዳራ እና ማንነት',
      title: 'ስለ እኔ',
      subtitle:
        'በጠንካራ የኮምፒውተር ሳይንስ መሰረት ላይ የተገነባ፣ በተግባራዊ የሶፍትዌር ልማት የሚመራ።',
      availableBadge: 'ለስራ ዝግጁ',
      locationLabel: 'አድራሻ',
      locationValue: 'ኢትዮጵያ',
      academicLabel: 'የትምህርት ደረጃ',
      academicValue: 'የኮምፒውተር ሳይንስ ባችለር ድግሪ (2017 ዓ.ም.)',
      focusLabel: 'ዋና የትኩረት መስክ',
      focusValue: 'የሙሉ-ስታክ እና የንግድ ሲስተሞች ልማት',
      workLabel: 'የስራ ሁኔታ',
      workValue: 'ጁኒየር ዴቨሎፐር / ፕሮጀክቶች / የርቀት ስራ',
      copyEmail: 'ኢሜይል ቅዳ',
      philosophyTitle: 'የሶፍትዌር ኢንጂነሪንግ እይታዬ',
      philosophyP1:
        'እኔ ያዕቆብ ድሪባ እባላለሁ። ከጋምቤላ ዩኒቨርሲቲ በኮምፒውተር ሳይንስ የተመረቅኩ እና የተጨባጭ የቢዝነስ አሰራሮችን ወደ ዘመናዊ ዲጂታል ሲስተሞች ለመቀየር የምሰራ ጁኒየር የሙሉ-ስታክ ሶፍትዌር አበልጻጊ ነኝ።',
      philosophyP2:
        'የቀላል ድረ-ገጾች ቅጂ ከመስራት ይልቅ፣ ትኩረቴ ጠንካራ ተግባራዊ አገልግሎት የሚሰጡ ሲስተሞች ላይ ነው፡ ውስብስብ የውጤት ስሌት ያላቸው የትምህርት ቤት ፖርታሎች፣ አስተማማኝ የግብይት እና የክምችት መቆጣጠሪያ የችርቻሮ POS ሲስተሞች፣ እና የተደራጁ የመረጃ ቋቶች።',
      philosophyP3:
        'የስራ ሂደቴ ዘመናዊ የፊት-ገጽታ (Frontend) ቴክኖሎጂዎችን ከጥብቅ የዳታቤዝ አደረጃጀት፣ ከTypeScript የኮድ ጥራት እና ከNode.js/Express እንዲሁም PHP/Laravel አስተማማኝ ኤፒአይ (API) ጋር ያገናኛል።',
      interestsTitle: 'ዋና የቴክኒክ ፍላጎቶቼ',
      interests: [
        'የሙሉ-ስታክ ዌብ ኢንጂነሪንግ',
        'የዳታቤዝ አርክቴክቸር እና ማሻሻያ (Optimization)',
        'የቢዝነስ ስራ ማቀላጠፊያ ሲስተሞች (POS፣ የት/ቤት ስራዎች)',
        'UI/UX እና የተጠቃሚ ተሞክሮ ዲዛይን',
        'የዴቨሎፐር ማቀላጠፊያ መተግበሪያዎች እና አውቶሜሽን',
      ],
      universityTitle: 'ጋምቤላ ዩኒቨርሲቲ',
      universityDesc: 'የኮምፒውተር ሳይንስ ባችለር (2017 ዓ.ም.)',
      viewTimeline: 'የእድገት ጉዞን ይመልከቱ',
    },
    skills: {
      badge: 'የቴክኒክ ብቃት',
      title: 'ክህሎቶች እና የቴክኖሎጂ ቁልል',
      subtitle:
        'በየቀኑ የምጠቀምባቸው ቴክኖሎጂዎች፣ ፍሬምወርኮች እና የአርክቴክቸር መሳሪያዎች እውነተኛ ዝርዝር።',
      architectureTitle: 'የቴክኖሎጂ ስርዓት አርክቴክቸር',
      architectureDesc: 'ክፍሎች፣ ኤፒአይዎች እና ዳታቤዞች በመተግበሪያዎቼ ውስጥ እንዴት እንደሚገናኙ',
      architectureSubtitle: 'ክፍሎች፣ ኤፒአይዎች እና ዳታቤዞች በመተግበሪያዎቼ ውስጥ እንዴት እንደሚገናኙ',
      interactiveStack: 'የቴክኖሎጂ ፍሰት',
      interactiveFlow: 'የቴክኖሎጂ ፍሰት',
      allCategories: 'ሁሉም ዘርፎች',
      catFrontend: 'የፊት-ገጽታ (Frontend)',
      catBackend: 'የጀርባ-ገጽታ እና ኤፒአይ (Backend)',
      catDatabases: 'የመረጃ ቋት (Databases)',
      catTools: 'መሳሪያዎች እና የኮምፒውተር ሳይንስ መሰረቶች',
      catDesign: 'UI/UX እና ዲዛይን ሲስተም',
      catOther: 'ተጨማሪ ክህሎቶች',
      competencies: 'ክህሎቶች',
      practicalApplication: 'ተግባራዊ አጠቃቀም',
      honestyNote:
        '* ክህሎቶች በጋምቤላ ዩኒቨርሲቲ በትክክለኛ የትምህርት መሰረት እና በተጨባጭ ፕሮጀክቶች ላይ የተመሰረቱ ናቸው — የተጋነኑ የልምድ አመታት ወይም የሀሰት ፐርሰንቶች የሉም።',
      note: '* ክህሎቶች በጋምቤላ ዩኒቨርሲቲ በትክክለኛ የትምህርት መሰረት እና በተጨባጭ ፕሮጀክቶች ላይ የተመሰረቱ ናቸው — የተጋነኑ የልምድ አመታት ወይም የሀሰት ፐርሰንቶች የሉም።',
      categories: {
        frontend: 'የፊት-ገጽታ (Frontend)',
        backend: 'የጀርባ-ገጽታ እና ኤፒአይ (Backend)',
        database: 'የመረጃ ቋት (Databases)',
        tools: 'መሳሪያዎች እና የኮምፒውተር ሳይንስ',
        architecture: 'የሲስተም አርክቴክቸር',
        concepts: 'የኮምፒውተር ሳይንስ ፅንሰ-ሀሳቦች',
      },
    },
    projects: {
      badge: 'የስራዎች ማሳያ',
      title: 'ተለይተው የቀረቡ ፕሮጀክቶች',
      subtitle:
        'ከተጨባጭ ችግሮች ተነስተው ከባዶ የተገነቡ ተግባራዊ መተግበሪያዎች እና ሲስተሞች።',
      all: 'ሁሉም',
      allProjects: 'ሁሉም ፕሮጀክቶች',
      fullstack: 'ሙሉ-ስታክ (Full-Stack)',
      business: 'የንግድ ሲስተሞች',
      businessSystems: 'የንግድ ሲስተሞች',
      web: 'የዌብ መተግበሪያዎች',
      webApps: 'የዌብ መተግበሪያዎች',
      keyProblemSolved: 'የፈታው ዋና ችግር:',
      problemSolved: 'የፈታው ዋና ችግር:',
      viewCaseStudy: 'ዝርዝር ጥናት ይመልከቱ',
      livePreview: 'ቀጥታ እይታ',
      viewCode: 'ኮድ ይመልከቱ (GitHub)',
      statusCompleted: 'የተጠናቀቀ',
      statusProductionReady: 'ለስራ ዝግጁ',
    },
    services: {
      badge: 'አገልግሎቶች እና ችሎታዎች',
      title: 'የምሰራቸው እና የማቀርባቸው መፍትሄዎች',
      subtitle:
        'ለድርጅቶች፣ ለትምህርት ተቋማት እና ለዲጂታል ቢዝነሶች አስተማማኝ የሶፍትዌር መፍትሄዎች።',
      deliverables: 'ዋና ዋና ውጤቶች',
      keyDeliverables: 'ዋና ዋና ውጤቶች:',
      idealFor: 'ተስማሚ ለ:',
      inquireCTA: 'ስለዚህ አገልግሎት ይጠይቁ',
      readyTitle: 'ለየት ያለ ሲስተም ወይም ፕሮጀክት በአእምሮዎ አለ?',
      readyDesc:
        'የሙሉ-ስታክ ዌብ መተግበሪያ፣ በዳታቤዝ የተደገፈ ፖርታል ወይም ዘመናዊ ድረ-ገጽ ቢያስፈልግዎት፣ እንዴት አስተዋጽኦ ማድረግ እንደምችል እንወያይ።',
      calloutTitle: 'ለየት ያለ ሲስተም ወይም ፕሮጀክት በአእምሮዎ አለ?',
      calloutSubtitle: 'የሙሉ-ስታክ ዌብ መተግበሪያ፣ በዳታቤዝ የተደገፈ ፖርታል ወይም ዘመናዊ ድረ-ገጽ ቢያስፈልግዎት፣ እንዴት አስተዋጽኦ ማድረግ እንደምችል እንወያይ።',
      startDiscussion: 'ስለ ፕሮጀክቱ እንነጋገር',
      startConversation: 'ስለ ፕሮጀክቱ እንነጋገር',
    },
    journey: {
      badge: 'የእድገት ምዕራፎች',
      title: 'የትምህርት እና የቴክኒክ ጉዞዬ',
      subtitle:
        'ከጋምቤላ ዩኒቨርሲቲ ጠንካራ የኮምፒውተር ሳይንስ ትምህርት ጀምሮ እስከ እውነተኛ የሶፍትዌር ልማት ድረስ።',
      degreeTitle: 'የኮምፒውተር ሳይንስ ባችለር ድግሪ',
      degreeUniversity: 'ጋምቤላ ዩኒቨርሲቲ — ኢትዮጵያ',
      graduatedYear: 'ምርቃት፦ 2017 ዓ.ም. (2025/2026)',
      degreeDesc:
        'በሶፍትዌር ዲዛይን፣ አልጎሪዝም፣ ሪሌሽናል ዳታቤዝ፣ ኦፕሬቲንግ ሲስተም እና ኔትወርክ ላይ ያተኮረ የ4 አመት የኮምፒውተር ሳይንስ ጥልቅ ትምህርት አጠናቅቄያለሁ።',
      milestones: {
        uniTitle: 'የኮምፒውተር ሳይንስ ባችለር ድግሪ',
        uniSubtitle: 'ጋምቤላ ዩኒቨርሲቲ — ኢትዮጵያ (2017 ዓ.ም.)',
        uniDesc:
          'በአልጎሪዝም፣ በዳታ ስትራክቸር፣ በመረጃ ቋት አስተዳደር፣ በኮምፒውተር ኔትወርክ እና በሶፍትዌር ኢንጂነሪንግ ፅንሰ-ሀሳቦች የታገዘ ጥልቅ ትምህርት አጠናቅቄያለሁ።',
        techTitle: 'ወደ ዘመናዊ የዌብ ቴክኖሎጂዎች መሸጋገር',
        techSubtitle: 'የሙሉ-ስታክ JavaScript እና ዘመናዊ ፍሬምወርኮች',
        techDesc:
          'የትምህርት ቤት የኮድ እውቀትን ወደ ዘመናዊ የReact፣ TypeScript፣ Node.js/Express እና PostgreSQL የልማት መስክ አሳድጌያለሁ።',
        prodTitle: 'ተግባራዊ የንግድ እና የአስተዳደር ሲስተሞችን መገንባት',
        prodSubtitle: 'የትምህርት ቤት፣ የችርቻሮ እና የስልጠና ፖርታሎች',
        prodDesc:
          'ከትክክለኛ ድርጅታዊ ፍላጎቶች ጋር የተጣጣሙ የተሟሉ ሲስተሞችን ገንብቻለሁ፡ የት/ቤት አስተዳደር፣ የችርቻሮ POS እና የክምችት ቁጥጥር።',
        currentTitle: 'ለስራ እድሎች እና ለቀጣይ እድገት ዝግጁ',
        currentSubtitle: 'ጁኒየር የሙሉ-ስታክ ዴቨሎፐር እና የይዘት ፈጣሪ',
        currentDesc:
          'ጥራት ያለው አስተዋጽኦ ለማበርከት፣ ከተሞከሩ ባለሙያዎች ለመማር እና ጠቃሚ ዋጋ ለመፍጠር በጁኒየር የሙሉ-ስታክ ስራዎች ላይ ለመሰማራት ዝግጁ ነኝ።',
      },
    },
    yacobTech: {
      badge: 'የማህበረሰብ እና የቴክኖሎጂ ይዘት',
      title: 'ያዕቆብ ቴክ (Yacob Tech)',
      subtitle:
        'የቴክኖሎጂ ጉዞን መመዝገብ፣ ትምህርታዊ ቪዲዮዎችን ማጋራት እና ዘመናዊ ቴክኖሎጂዎችን መመርመር።',
      brandHeadline: 'ገንቢዎችን በተግባራዊ እውቀት ማብቃት',
      brandDesc:
        'በያዕቆብ ቴክ ብራንድ ስር ለጀማሪ እና መካከለኛ አበልጻጊዎች ተግባራዊ የቴክኖሎጂ ትምህርቶችን፣ የኮዲንግ አሰራሮችን እና መመሪያዎችን በቪዲዮ እና በጽሁፍ አቀርባለሁ።',
      visitChannel: 'የያዕቆብ ቴክ ቻናልን ይጎብኙ',
      coreTopicsTitle: 'ዋና የይዘት አቅጣጫዎች',
      communityNote:
        'የሶፍትዌር ኢንጂነሪንግ እውቀትን ቀላል፣ ተደራሽ እና በተግባር ላይ የተመሰረተ ለማድረግ ቁርጠኛ ነኝ።',
      bannerTitle: 'ያዕቆብ ቴክ ትምህርታዊ ሚዲያ',
      bannerTag: 'ዩቲዩብ እና ማህበራዊ ገጾች',
      bannerDesc:
        'ለጀማሪ እና መካከለኛ አበልጻጊዎች የተዘጋጁ የቪዲዮ ትምህርቶች፣ የሶፍትዌር አርክቴክቸር ማብራሪያዎች እና ተግባራዊ መመሪያዎች።',
      visitBtn: 'ቻናሉን ይጎብኙ',
      byAuthor: 'በያዕቆብ ድሪባ',
      exploreTopic: 'ይዘቱን ይመልከቱ',
    },
    contact: {
      badge: 'ያግኙኝ',
      title: 'ጠቃሚ ነገር አብረን እንስራ',
      subtitle:
        'ለጁኒየር የሙሉ-ስታክ ዴቨሎፐር የስራ መደቦች፣ ለፍሪላንስ ሲስተም ግንባታ እና ለጋራ ፕሮጀክቶች ዝግጁ ነኝ።',
      directEmail: 'ቀጥታ ኢሜይል',
      emailResponseTime: 'በአብዛኛው በ24 ሰዓት ውስጥ ምላሽ እሰጣለሁ',
      otherChannels: 'ሌሎች የመገናኛ መንገዶች',
      statusNoteTitle: 'አድራሻ፦ ኢትዮጵያ (UTC+3)',
      statusNoteDesc: 'ለየርቀት ስራዎች፣ ለሀገር ውስጥ ፕሮጀክቶች እና ለቴክኖሎጂ ትብብር ክፍት ነኝ።',
      sendMessageTitle: 'ቀጥታ መልእክት ይላኩ',
      sendMessageSubtitle: 'ስለ ዌብ ፕሮጀክትዎ ወይም የስራ እድል ውይይት ለመጀመር ከታች ያለውን ቅጽ ይሙሉ።',
      formTitle: 'ቀጥታ መልእክት ይላኩ',
      formDesc:
        'ከዚህ በታች ያለውን ቅጽ ይሙሉ፤ በአብዛኛው በ24 ሰዓት ውስጥ ምላሽ እሰጣለሁ (UTC+3 / የኢትዮጵያ ሰዓት)።',
      nameLabel: 'ሙሉ ስምዎ',
      namePlaceholder: 'ምሳሌ፦ ያዕቆብ ወይም አለሙ',
      emailLabel: 'የኢሜይል አድራሻ',
      emailPlaceholder: 'alex@company.com',
      inquiryLabel: 'የጉዳዩ አይነት',
      subjectLabel: 'ርዕስ',
      subjectPlaceholder: 'ምሳሌ፦ የሙሉ-ስታክ ስራ ወይም የፕሮጀክት ስራ',
      messageLabel: 'የመልእክት ዝርዝር',
      messagePlaceholder: 'ስለ ፕሮጀክትዎ፣ የስራ መደቡ ወይም ጥያቄዎ በአጭሩ ይግለጹ...',
      sendButton: 'መልእክቱን ላክ',
      sending: 'መልእክቱ እየተላከ ነው...',
      minChars: 'ቢያንስ 10 ፊደላት',
      validTag: 'ትክክል',
      errorBanner: 'እባክዎ ከመላክዎ በፊት የቀይ ምልክት ያለባቸውን ቦታዎች ያስተካክሉ።',
      successTitle: 'መልእክትዎ በተሳካ ሁኔታ ተልኳል!',
      successMessage:
        'ስላነጋገሩኝ አመሰግናለሁ! የኢሜይል ማረጋገጫ ተዘጋጅቷል፤ መልእክትዎን ፈጥኜ አይቼ ምላሽ እሰጣለሁ።',
      sendAnother: 'ሌላ መልእክት ይላኩ',
      channelsTitle: 'ቀጥታ መገናኛ መስመሮች',
      channelsDesc: 'ፈጣን መንገድ ይፈልጋሉ? በኢሜይል፣ በዋትስአፕ ወይም በሌሎች ማህበራዊ ገጾቼ ያግኙኝ።',
      emailDirect: 'ዋና ኢሜይል',
      whatsappDirect: 'ዋትስአፕ (WhatsApp)',
      telegramDirect: 'ቴሌግራም (Telegram)',
      youtubeDirect: 'ዩቲዩብ ቻናል',
      success: {
        preparedTitle: 'መልእክትዎ ተዘጋጅቷል!',
        preparedDesc: 'መልእክትዎ በተሳካ ሁኔታ ተዘጋጅቷል፤ በኢሜይልዎ መተግበሪያ ውስጥ ይላኩ።',
      },
      validation: {
        fixErrors: 'እባክዎ ከመላክዎ በፊት የቀይ ምልክት ያለባቸውን ቦታዎች ያስተካክሉ።',
        valid: 'ትክክል',
        minChars: 'ቢያንስ 10 ፊደላት',
      },
      labels: {
        name: 'ሙሉ ስምዎ',
        email: 'የኢሜይል አድራሻ',
        inquiryScope: 'የጉዳዩ አይነት',
        subject: 'ርዕስ',
        message: 'የመልእክት ዝርዝር',
      },
      placeholders: {
        name: 'ምሳሌ፦ ያዕቆብ ወይም አለሙ',
        email: 'alex@company.com',
        subject: 'ምሳሌ፦ የሙሉ-ስታክ ስራ ወይም የፕሮጀክት ስራ',
        message: 'ስለ ፕሮጀክትዎ፣ የስራ መደቡ ወይም ጥያቄዎ በአጭሩ ይግለጹ...',
      },
      inquiryOptions: {
        fullstack: 'የሙሉ-ስታክ ዌብ መተግበሪያ',
        business: 'የንግድ አስተዳደር / POS ሲስተም',
        frontend: 'የፊት-ገጽታ ድረ-ገጽ / UI',
        job: 'የስራ / የቅጥር እድል',
        other: 'ሌላ ጥያቄ',
      },
      buttons: {
        sendAnother: 'ሌላ መልእክት ይላኩ',
        sending: 'መልእክቱ እየተዘጋጀ ነው...',
        send: 'መልእክቱን ላክ',
      },
      options: {
        fullstack: 'የሙሉ-ስታክ ዌብ መተግበሪያ',
        business: 'የንግድ አስተዳደር / POS ሲስተም',
        frontend: 'የፊት-ገጽታ ድረ-ገጽ / UI',
        job: 'የስራ / የቅጥር እድል',
        other: 'ሌላ ጥያቄ',
      },
    },
    footer: {
      desc: 'በቴክኖሎጂ መገንባት። በየቀኑ መማር። ለተጨባጭ ስራዎች እና ቢዝነሶች ጠቃሚ መፍትሄዎችን መፍጠር።',
      tagline:
        'በቴክኖሎጂ መገንባት። በየቀኑ መማር። ለተጨባጭ ስራዎች እና ቢዝነሶች ጠቃሚ መፍትሄዎችን መፍጠር።',
      developer: 'አበልጻጊ',
      developerLabel: 'አበልጻጊ:',
      roleDegree: 'ያዕቆብ ድሪባ • የኮምፒውተር ሳይንስ ባችለር',
      navigation: 'ማውጫ',
      navTitle: 'ማውጫ',
      connectChannels: 'መገናኛዎች',
      channelsTitle: 'መገናኛዎች',
      easterEgg: 'ተርሚናል [Easter Egg]',
      devConsole: 'ተርሚናል [Ctrl+K]',
      rights: '© 2026 ያዕቆብ ድሪባ። መብቱ በህግ የተጠበቀ ነው።',
      copyright: '© 2026 ያዕቆብ ድሪባ (ያዕቆብ ቴክ)። መብቱ በህግ የተጠበቀ ነው።',
      builtWith: 'በReact + TypeScript + Tailwind CSS የተሰራ',
      backToTop: 'ወደ ላይ ተመለስ',
    },
    cvModal: {
      title: 'የስራ ታሪክ (Curriculum Vitae)',
      subtitle: 'ያዕቆብ ድሪባ — ጁኒየር የሙሉ-ስታክ ሶፍትዌር አበልጻጊ',
      downloadDoc: 'ሲቪን በPDF አውርድ',
      summaryTitle: 'የሙያ ማጠቃለያ',
      summaryText:
        'ከጋምቤላ ዩኒቨርሲቲ በኮምፒውተር ሳይንስ (2017 ዓ.ም.) የተመረቀ እና በጁኒየር የሙሉ-ስታክ ሶፍትዌር ልማት ላይ ያተኮረ ተነሳሽ ባለሙያ። በReact/TypeScript ሳቢ የፊት ገጾችን በመስራት፣ በNode.js/Express አስተማማኝ ኤፒአይዎችን በመገንባት እና በPostgreSQL/MySQL ዳታቤዞችን በማስተዳደር ልምድ ያለው።',
      educationTitle: 'ትምህርት',
      degreeName: 'የኮምፒውተር ሳይንስ ባችለር ድግሪ (BSc)',
      universityName: 'ጋምቤላ ዩኒቨርሲቲ — ኢትዮጵያ',
      gradYear: 'የተመረቀበት አመት፦ 2017 ዓ.ም. (2025/2026 እ.ኤ.አ.)',
      coursework:
        'ዋና ዋና ኮርሶች፦ ዳታ ስትራክቸር እና አልጎሪዝም፣ የዳታቤዝ አስተዳደር ሲስተም፣ ኦፕሬቲንግ ሲስተም፣ የኮምፒውተር ኔትወርክ፣ ሶፍትዌር ኢንጂነሪንግ፣ ኦብጀክት-ኦሬንትድ ትንተና እና ዲዛይን።',
      projectsTitle: 'ዋና ዋና የሶፍትዌር ኢንጂነሪንግ ፕሮጀክቶች',
      coreCompetenciesTitle: 'ዋና የቴክኒክ ክህሎቶች',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isAmharic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('yt-portfolio-lang') as Language | null;
      if (saved === 'en' || saved === 'am') return saved;
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('yt-portfolio-lang', language);
      document.documentElement.lang = language === 'am' ? 'am' : 'en';
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const t = translations[language];
  const isAmharic = language === 'am';

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isAmharic,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
