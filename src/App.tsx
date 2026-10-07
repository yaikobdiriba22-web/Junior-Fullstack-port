import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Code2, Database, Github, GraduationCap, Linkedin, Mail, Menu, Server, X } from 'lucide-react';

const projects = [
  { title: 'Albright Academy', type: 'School Management Platform', description: 'A modern school management experience covering academic workflows, attendance, results, communication, and role-based dashboards.', stack: 'React • Next.js • PostgreSQL', link: 'https://albrightacademykg-g8.vercel.app/' },
  { title: 'Yacob Tech Academy', type: 'Learning Platform', description: 'An education platform concept for Computer Science, IT, ICT, and Software Engineering courses, mock exams, previous exams, and practice exams.', stack: 'React • TypeScript • APIs', link: 'https://yacobtechacademy.netlify.app/' },
  { title: 'James Tech for Kids', type: 'Technology Education', description: 'A responsive learning platform focused on helping young learners build technology skills through practical projects.', stack: 'React • Supabase • Vercel', link: 'https://james-tech-learn.vercel.app/#home' },
  { title: 'Drug Inventory Management System', type: 'Academic Project', description: 'A practical software project designed to organize medicine inventory workflows and improve visibility of stock information.', stack: 'Database • CRUD • Web Development', link: 'https://github.com/yaikobdiriba22-web' },
];
const skills = [
  ['Frontend', 'React, Next.js, TypeScript, JavaScript, HTML, CSS'],
  ['Backend', 'Node.js, Python, PHP, REST APIs'],
  ['Database', 'PostgreSQL, MySQL, MongoDB, SQL'],
  ['IT & Systems', 'Windows, networking, troubleshooting, system administration'],
  ['Tools', 'Git, GitHub, Docker, AWS, testing, documentation'],
  ['Core CS', 'Data structures, algorithms, Java, Ruby, problem solving'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ['About', 'Skills', 'Projects', 'Education', 'Contact'];
  const go = (id: string) => { setMenuOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); };
  const downloadCV = () => window.print();
  return (
    <div className="site">
      <header className="nav-shell">
        <a className="brand" href="#home" aria-label="Yaikob Diriba home" onClick={() => setMenuOpen(false)}><span className="brand-mark">YD</span><span>Yaikob Diriba</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">{nav.map(item => <button key={item} onClick={() => go(item)}>{item}</button>)}</nav>
        <button className="menu-btn" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Open to junior opportunities</div>
            <h1>Building useful digital products with <em>code & purpose.</em></h1>
            <p className="hero-text">I’m Yaikob Diriba Tadessa, a Computer Science graduate and Junior Full-Stack Developer focused on reliable web applications, IT systems, and practical technology solutions.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go('projects')}>View my work <ArrowUpRight size={18} /></button>
              <button className="secondary" onClick={downloadCV}>Download CV <ArrowUpRight size={17} /></button>
              <button className="text-action" onClick={() => go('contact')}>Let’s connect</button>
            </div>
            <div className="quick-links"><span className="availability-pill"><span className="pulse" /> Available for opportunities</span><a href="https://github.com/yaikobdiriba22-web" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://et.linkedin.com/in/yaikob-diriba-tadessa092206" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div>
          </div>
          <div className="hero-card"><div className="orb orb-one" /><div className="orb orb-two" /><div className="code-card"><div className="code-top"><span>yaikob.ts</span><span>● ● ●</span></div><pre>{`const developer = {
  name: 'Yaikob Diriba',
  role: 'Junior Full-Stack',
  focus: ['Web', 'IT', 'Systems'],
  mindset: 'Learn • Build • Grow'
};`}</pre></div><div className="floating-card top"><Code2 size={18} /><span>Full-Stack<br /><b>Development</b></span></div><div className="floating-card bottom"><Server size={18} /><span>IT &<br /><b>Systems</b></span></div></div>
        </section>
        <section id="about" className="section-pad compact"><div className="premium-rule" /><div className="section-label">01 — About</div><div className="split"><h2>Curious about technology.<br /><span>Serious about results.</span></h2><div><p>I enjoy turning real-world requirements into clean, maintainable software. My work sits at the intersection of full-stack development, databases, IT support, networking, and systems thinking.</p><p>With a BSc in Computer Science from Gambella University, I bring a strong academic foundation and a project-first approach to every opportunity.</p></div></div><div className="stat-row"><div><b>BSc</b><span>Computer Science</span></div><div><b>83%</b><span>Exit Exam</span></div><div><b>Full-Stack</b><span>Web Development</span></div><div><b>IT + Systems</b><span>Technical Focus</span></div></div></section>
        <section id="skills" className="dark-section section-pad"><div className="section-label">02 — Skills</div><div className="section-head"><h2>Tools I use to <span>build.</span></h2><p>From interface to database, I like understanding the whole system.</p></div><div className="skill-grid">{skills.map(([title, text], i) => <article className="skill-card" key={title}><div className="skill-icon">{i < 2 ? <Code2 /> : i < 4 ? <Database /> : <BriefcaseBusiness />}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section id="projects" className="section-pad"><div className="section-label">03 — Selected Work</div><div className="section-head"><h2>Projects that solve <span>real problems.</span></h2><p>A selection of academic, education, and full-stack work.</p></div><div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-number">0{i + 1}</div><div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><span className="stack">{project.stack}</span><a href={project.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16} /></a></div></article>)}</div></section>
        <section id="education" className="education-section section-pad"><div className="section-label">04 — Education</div><div className="education-card"><div className="edu-icon"><GraduationCap size={30} /></div><div><span>Gambella University</span><h2>BSc in Computer Science</h2><p>Academic foundation in software development, databases, data structures, algorithms, computer systems, and problem solving.</p></div><div className="edu-badge">Computer Science</div></div></section>
        <section id="contact" className="contact section-pad"><div className="contact-inner"><div><div className="section-label">05 — Contact</div><h2>Let’s build something <span>useful.</span></h2><p>Open to junior full-stack, IT support, systems, and technology opportunities.</p></div><div className="contact-actions"><button className="cv-button" onClick={downloadCV}>Download CV <ArrowUpRight size={17} /></button><a className="primary" href="mailto:yaikobdiriba22@gmail.com"><Mail size={18} /> yaikobdiriba22@gmail.com</a><div className="contact-social"><a href="https://et.linkedin.com/in/yaikob-diriba-tadessa092206" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href="https://github.com/yaikobdiriba22-web" target="_blank" rel="noreferrer"><Github /> GitHub</a></div></div></div></section>
        <section className="cv-print" aria-hidden="true"><div className="cv-print-header"><div><h1>Yaikob Diriba Tadessa</h1><p>Junior Full-Stack Developer | IT & Systems</p></div><div>yaikobdiriba22@gmail.com<br />0922067302<br />github.com/yaikobdiriba22-web<br />linkedin.com/in/yaikob-diriba-tadessa092206</div></div><h2>Profile</h2><p>Computer Science graduate focused on building reliable web applications, practical IT systems, and user-centered technology solutions.</p><h2>Technical Skills</h2><p>Frontend: React, Next.js, TypeScript, JavaScript, HTML, CSS · Backend: Node.js, Python, PHP, REST APIs · Database: PostgreSQL, MySQL, MongoDB, SQL · IT & Systems: Windows, networking, troubleshooting, system administration · Tools: Git, GitHub, Docker, AWS, testing, documentation.</p><h2>Selected Projects</h2><p><strong>Albright Academy</strong> — School management platform covering academic workflows, attendance, results, communication, and role-based dashboards.</p><p><strong>Yacob Tech Academy</strong> — Learning platform concept for Computer Science, IT, ICT, and Software Engineering courses, mock exams, previous exams, and practice exams.</p><p><strong>James Tech for Kids</strong> — Responsive technology education platform for young learners.</p><p><strong>Drug Inventory Management System</strong> — Academic project for medicine inventory workflows and stock visibility.</p><h2>Education</h2><p><strong>Gambella University</strong> — BSc in Computer Science · Exit Exam: 83%</p></section>
      </main>
      <footer><span>© {new Date().getFullYear()} Yaikob Diriba Tadessa</span><span>Junior Full-Stack Developer • IT & Systems</span><button onClick={() => go('home')} aria-label="Back to top"><ChevronDown className="rotate" size={18} /></button></footer>
    </div>
  );
}
export default App;