import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Layout,
  Database,
  MapPin,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Send,
  Code2,
} from 'lucide-react';
import { Container } from '../common/Container';
import { BentoCard } from '../common/BentoCard';
import { useLanguage } from '../../context/LanguageContext';

export const QuickOverview: React.FC = () => {
  const { isAmharic } = useLanguage();

  return (
    <section className="py-12 sm:py-16 relative border-y border-white/[0.06] bg-[#080A0F]">
      {/* Soft Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-600/[0.05] blur-[100px] rounded-full pointer-events-none -z-10" />

      <Container size="xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono font-semibold text-indigo-300 mb-2">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>{isAmharic ? 'አጠቃላይ እይታ' : 'Quick Developer Overview'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {isAmharic ? 'የእኔ ዋና የትኩረት አቅጣጫዎች' : 'Core Profile at a Glance'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mt-2 sm:mt-0 font-normal">
            {isAmharic
              ? 'ለቀጣሪዎች እና አጋሮች ግልጽ እና ፈጣን ማጠቃለያ።'
              : 'Key technical competencies, academic foundation, and current availability for recruiters.'}
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Full-Stack Development */}
          <BentoCard className="p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  01 / Stack
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                Full-Stack Development
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                End-to-end web engineering pairing interactive React frontends with modular
                Node.js, Express, and PHP/Laravel RESTful services.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
              {['React', 'TypeScript', 'Node.js', 'Express', 'PHP'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-gray-300 border border-white/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Card 2: Modern Responsive Interfaces */}
          <BentoCard className="p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Layout className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  02 / UI &amp; UX
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                Modern Responsive Interfaces
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Accessibility-first web interfaces built with Tailwind CSS, clean typographic rhythm,
                and seamless mobile-to-desktop adaptivity.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
              {['Tailwind CSS', 'Mobile-First', 'WCAG AA', 'Design Tokens'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-gray-300 border border-white/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Card 3: Backend & Database Systems */}
          <BentoCard className="p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  03 / Data
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                Backend &amp; Database Systems
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Normalized relational data modeling in PostgreSQL &amp; MySQL, ACID transaction
                integrity for invoicing, and parameterized queries.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
              {['PostgreSQL', 'MySQL', 'MongoDB', 'ACID', 'REST APIs'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-gray-300 border border-white/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Card 4: Based in Addis Ababa, Ethiopia */}
          <BentoCard className="p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  04 / Location
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-rose-300 transition-colors">
                Based in Addis Ababa, Ethiopia
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Operating in UTC+3 timezone with reliable high-speed fiber internet. Seamless
                collaboration with European, African, and global teams.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
              <span className="text-gray-400 font-mono">Timezone: UTC+3 (EAT)</span>
              <span className="text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Remote-Ready
              </span>
            </div>
          </BentoCard>

          {/* Card 5: BSc Computer Science */}
          <BentoCard className="p-5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  05 / Degree
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                BSc in Computer Science
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Graduated from Gambella University (2017 E.C.). Grounded in data structures,
                algorithms, database architecture, and software engineering.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
              <span className="text-gray-400 font-mono">Gambella University</span>
              <span className="text-indigo-300 font-mono">Graduated 2017 E.C.</span>
            </div>
          </BentoCard>

          {/* Card 6: Available for Opportunities */}
          <BentoCard className="p-5 flex flex-col justify-between group bg-gradient-to-br from-[#0D1117] via-[#111827] to-indigo-950/20 border-indigo-500/30">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  06 / Status
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                Available for Opportunities
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Open to junior full-stack developer roles, engineering internships, and contract
                projects. Quick response time guaranteed.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06]">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Let's talk about opportunities</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
};
