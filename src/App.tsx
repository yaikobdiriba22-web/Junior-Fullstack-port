import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { QuickOverview } from './components/Overview/QuickOverview';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Services } from './components/Services/Services';
import { DevelopmentProcess } from './components/Process/DevelopmentProcess';
import { Journey } from './components/Journey/Journey';
import { GitHubSection } from './components/GitHub/GitHubSection';
import { YacobTech } from './components/Blog/YacobTech';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { CVModal } from './components/CVModal/CVModal';
import { EasterEggModal } from './components/EasterEgg/EasterEggModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  useEffect(() => {
    // Console message as requested
    console.log(
      '%c🚀 Yaikob Diriba — Junior Full-Stack Developer',
      'color: #6366f1; font-size: 14px; font-weight: bold;'
    );
    console.log(
      '%cDesigned & built with curiosity and code. Gambella University graduate (2017 E.C.).',
      'color: #06b6d4; font-size: 12px;'
    );

    // Global keyboard shortcut: Ctrl+K or Cmd+K to trigger developer console easter egg
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsEasterEggOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#080A0F] text-[#F3F4F6] selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300 font-sans relative overflow-x-hidden">
        {/* Subtle Atmospheric Aurora Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] max-w-[650px] h-[50%] max-h-[650px] bg-indigo-900/15 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[45%] max-w-[600px] h-[45%] max-h-[600px] bg-cyan-900/10 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="fixed top-[40%] right-[-10%] w-[35%] max-w-[500px] h-[35%] max-h-[500px] bg-purple-950/15 blur-[160px] rounded-full pointer-events-none -z-10" />

        {/* Navigation */}
        <Navbar
          onOpenCV={() => setIsCVOpen(true)}
          onOpenEasterEgg={() => setIsEasterEggOpen(true)}
        />

        {/* Main Sections Ordered Intentionally */}
        <main id="main-content">
          {/* 1. Hero Section with Interactive Terminal & Bento Visual */}
          <Hero onOpenCV={() => setIsCVOpen(true)} />

          {/* 2. Bento Quick Overview (Section 10) */}
          <QuickOverview onOpenCV={() => setIsCVOpen(true)} />

          {/* 3. About Section with Bento Grid (Section 11) */}
          <About onOpenCV={() => setIsCVOpen(true)} />

          {/* 4. Selected Work with Asymmetric Bento Grid (Sections 12 & 13) */}
          <Projects />

          {/* 5. Technology Stack with Honest Classifications (Section 15) */}
          <Skills />

          {/* 6. What I Can Build (Section 16) */}
          <Services />

          {/* 7. Development Process Timeline (Section 17) */}
          <DevelopmentProcess />

          {/* 8. Education / Academic Foundation (Section 18) */}
          <Journey />

          {/* 9. GitHub & Open Source Code Presence (Section 20) */}
          <GitHubSection />

          {/* 10. Technical Articles & Insights */}
          <YacobTech />

          {/* 11. Closing Contact CTA & Validated Form (Section 21) */}
          <Contact />
        </main>

        {/* 12. Minimalist Footer (Section 22) */}
        <Footer onOpenEasterEgg={() => setIsEasterEggOpen(true)} />

        {/* Modals */}
        <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
        <EasterEggModal
          isOpen={isEasterEggOpen}
          onClose={() => setIsEasterEggOpen(false)}
          onOpenCV={() => setIsCVOpen(true)}
        />
      </div>
    </LanguageProvider>
  );
}
