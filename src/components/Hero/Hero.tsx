import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Layers,
  Code2,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { HeroVisual } from './HeroVisual';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/LanguageContext';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { isAmharic } = useLanguage();

  const trustIndicators = [
    {
      icon: GraduationCap,
      label: isAmharic ? 'የኮምፒውተር ሳይንስ ዲግሪ' : 'BSc Computer Science',
      desc: isAmharic ? 'ጋምቤላ ዩኒቨርሲቲ (2017 ዓ.ም)' : 'Gambella University (2017 E.C.)',
      color: 'text-indigo-400',
    },
    {
      icon: Layers,
      label: isAmharic ? 'ሙሉ የድረ-ገጽ ግንባታ' : 'Full-Stack Engineering',
      desc: isAmharic ? 'React፣ Node.js፣ Express፣ PHP' : 'React, TypeScript, Node.js, PHP',
      color: 'text-cyan-400',
    },
    {
      icon: Code2,
      label: isAmharic ? 'ዘመናዊ የፊት ገጽ' : 'Modern UI/UX Systems',
      desc: isAmharic ? 'Tailwind CSS እና ተደራሽነት' : 'Tailwind CSS, responsive design',
      color: 'text-purple-400',
    },
    {
      icon: ShieldCheck,
      label: isAmharic ? 'የመረጃ ቋት እና ሲስተሞች' : 'Databases & APIs',
      desc: isAmharic ? 'PostgreSQL፣ MySQL እና REST' : 'PostgreSQL, MySQL, RESTful APIs',
      color: 'text-emerald-400',
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#080A0F]"
    >
      {/* Subtle Aurora Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-300 mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-200">
                {isAmharic ? 'ለስራ ዝግጁ' : 'Available for opportunities'}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-indigo-300 font-mono">
                {isAmharic ? 'አዲስ አበባ፣ ኢትዮጵያ' : 'Addis Ababa, Ethiopia'}
              </span>
            </div>

            {/* Greeting and Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
              {isAmharic ? 'ሰላም፣ እኔ ' : "Hello, I'm "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400">
                Yaikob Diriba
              </span>
              {isAmharic ? ' ነኝ' : ''}
            </h1>

            {/* Clear, Unexaggerated Role Positioning */}
            <p className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 tracking-tight">
              Junior Full-Stack Developer
            </p>

            {/* Believable, Confident Biography */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              {isAmharic
                ? 'ዘመናዊ የፊት እና የኋላ ቴክኖሎጂዎችን በመጠቀም ሀሳቦችን ወደ ንጹህ እና ተደራሽ ዲጂታል ምርቶች እለውጣለሁ፤ ተግባራዊ እና ተጠቃሚ-ተኮር የድረ-ገጽ መተግበሪያዎችን እገነባለሁ።'
                : 'I build responsive, practical and user-friendly web applications, turning ideas into clean digital products using modern frontend and backend technologies.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  const el = document.getElementById('projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto"
              >
                {isAmharic ? 'ስራዎቼን ይመልከቱ' : 'View My Work'}
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                onClick={onOpenCV}
                className="w-full sm:w-auto"
              >
                {isAmharic ? 'ሲቪ (CV) ያውርዱ' : 'Download CV'}
              </Button>
            </div>

            {/* Secondary Recruiter Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-400">
              <span className="text-gray-500 font-mono">
                {isAmharic ? 'ፈጣን ግንኙነት:' : 'Direct links:'}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white border border-white/[0.08] transition-all hover:-translate-y-0.5 backdrop-blur-md"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white border border-white/[0.08] transition-all hover:-translate-y-0.5 backdrop-blur-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={socials.email.url}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white border border-white/[0.08] transition-all hover:-translate-y-0.5 backdrop-blur-md"
                  aria-label="Send Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bento Developer Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Hero Credibility Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 sm:mt-20 pt-8 border-t border-white/[0.08]"
        >
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] backdrop-blur-md transition-all"
              >
                <div
                  className={`p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] shrink-0 ${item.color}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {item.label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
