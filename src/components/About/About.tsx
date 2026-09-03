import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  MapPin,
  Code2,
  Sparkles,
  Compass,
  CheckCircle2,
  BookOpen,
  Users,
  Lightbulb,
  Zap,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { BentoCard } from '../common/BentoCard';
import { CopyButton } from '../common/CopyButton';
import { profile } from '../../data/profile';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/LanguageContext';

export const About: React.FC = () => {
  const { t, isAmharic } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: isAmharic ? 'የማወቅ ጉጉት እና ጥናት' : 'Curiosity & Learning',
      desc: isAmharic
        ? 'አዳዲስ ቴክኖሎጂዎችን ያለማቋረጥ እማራለሁ፤ መፍትሄዎችን በጥልቀት እመረምራለሁ።'
        : 'Eager to understand how complex systems operate under the hood and adapt to modern tooling.',
      color: 'text-amber-400',
    },
    {
      icon: Code2,
      title: isAmharic ? 'ንጹህ እና ሊነበብ የሚችል ኮድ' : 'Clean Code & Structure',
      desc: isAmharic
        ? 'ሊጠበቁ እና በቀላሉ ሊተረጎሙ የሚችሉ ሞጁላር ኮዶችን በስርዓት እጽፋለሁ።'
        : 'Writing readable, maintainable, and strictly-typed code with clear naming and modular separation.',
      color: 'text-indigo-400',
    },
    {
      icon: Zap,
      title: isAmharic ? 'ተግባራዊ ችግር ፈቺነት' : 'Practical Problem Solving',
      desc: isAmharic
        ? 'ተጠቃሚውን እና የንግዱን ፍላጎት በትክክል የሚያሟሉ ተግባራዊ መተግበሪያዎች።'
        : 'Prioritizing functional user outcomes and operational simplicity over unnecessary abstraction.',
      color: 'text-cyan-400',
    },
    {
      icon: Users,
      title: isAmharic ? 'የቡድን ስራ እና ትብብር' : 'Teamwork & Collaboration',
      desc: isAmharic
        ? 'ከአዛውንት እና አጋር መሐንዲሶች ጋር በትህትና እና በፍጥነት ተግባብቶ መስራት።'
        : 'Receptive to constructive code reviews, proactive communication, and continuous mentorship.',
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'ስለ እኔ' : 'About Me'}
          title={isAmharic ? 'ስለ ሙያዊ ጉዞዬ እና አቅሜ' : 'Background & Development Focus'}
          subtitle={
            isAmharic
              ? 'የኮምፒውተር ሳይንስ ምሩቅ እና ጁኒየር የሙሉ-ቁልል አልሚ።'
              : 'Grounded in computer science fundamentals, driven by practical full-stack execution.'
          }
        />

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Identity & Background (5 cols) */}
          <BentoCard className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              {/* Header Status with Signature Avatar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-600/20">
                  <div className="w-full h-full rounded-[14px] bg-[#080A0F] flex items-center justify-center text-sm font-black text-white tracking-wider">
                    YD
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.04] rounded-full text-[11px] font-semibold text-emerald-400 border border-white/[0.08] backdrop-blur-xs font-mono">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  {isAmharic ? 'ለስራ ዝግጁ' : 'Open to Opportunities'}
                </span>
              </div>

              {/* Identity Header */}
              <div className="mt-5 mb-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Yaikob Diriba Tadessa
                </h3>
                <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mt-0.5 font-mono">
                  Junior Full-Stack Developer
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2.5 py-1 bg-white/[0.04] rounded-full text-[11px] font-mono text-gray-300 border border-white/[0.08]">
                    📍 Addis Ababa, Ethiopia
                  </span>
                  <span className="px-2.5 py-1 bg-white/[0.04] rounded-full text-[11px] font-mono text-gray-300 border border-white/[0.08]">
                    🎓 Gambella Univ (2017 E.C.)
                  </span>
                </div>
              </div>

              {/* Verified Specs */}
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-gray-300">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-gray-500 text-[11px] block font-mono">Academic Foundation</span>
                    <span className="font-semibold text-white">
                      BSc in Computer Science (2017 E.C.)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-gray-300">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <span className="text-gray-500 text-[11px] block font-mono">Location &amp; Availability</span>
                    <span className="font-semibold text-white">
                      Addis Ababa, Ethiopia (UTC+3, Remote &amp; On-Site)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-gray-300">
                  <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-gray-500 text-[11px] block font-mono">Primary Engineering Stack</span>
                    <span className="font-semibold text-white">
                      React, TypeScript, Node.js, Express, PostgreSQL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Copy Email Footer */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
              <span className="text-gray-400 font-mono">yaikobdiriba1@gmail.com</span>
              <CopyButton text="yaikobdiriba1@gmail.com" />
            </div>
          </BentoCard>

          {/* Card 2: Professional Story & Working Principles (7 cols) */}
          <BentoCard className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>{isAmharic ? 'የግል ታሪክ እና ዓላማ' : 'Story & Mindset'}</span>
              </div>

              {/* Exact Recommended Professional Introduction */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight leading-snug">
                {isAmharic
                  ? 'ተግባራዊ ችግሮችን ወደ ንጹህ እና ዘመናዊ የሶፍትዌር መፍትሄዎች መለወጥ።'
                  : "Turning real-world requirements into clean, practical software solutions."}
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p>
                  {isAmharic
                    ? "እኔ የኮምፒውተር ሳይንስ ምሩቅ እና ጁኒየር የሙሉ-ቁልል (Full-Stack) አልሚ ነኝ፤ አስተማማኝ፣ ፈጣን እና ለተጠቃሚ ምቹ የሆኑ የድረ-ገጽ መተግበሪያዎችን በመገንባት ላይ አተኩራለሁ።"
                    : "I'm a Computer Science graduate and junior full-stack developer focused on building reliable, responsive and user-friendly applications."}
                </p>
                <p>
                  {isAmharic
                    ? "የገሃዱን ዓለም ችግሮች ወደ ተግባራዊ የሶፍትዌር መፍትሄዎች መለወጥ እወዳለሁ፤ በየዕለቱ ክህሎቶቼን በዘመናዊ የፊት ገጽ፣ የኋላ ሰርቨር እና የውሂብ ቋት ቴክኖሎጂዎች አሳድጋለሁ።"
                    : "I enjoy turning real-world problems into practical software solutions and continuously improving my skills across frontend, backend and modern development tools."}
                </p>
                <p>
                  {isAmharic
                    ? "በተጨማሪም በ Yacob Tech በኩል የሶፍትዌር ትምህርቶችን እና ቪዲዮዎችን በማዘጋጀት የቴክኖሎጂ እውቀትን ለሌሎች አጋራለሁ።"
                    : "Beyond writing code, I actively document software development tutorials and tech walkthroughs under Yacob Tech, reinforcing my understanding through community knowledge sharing."}
                </p>
              </div>

              {/* 4 Working Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/[0.08]">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className={`w-4 h-4 ${v.color}`} />
                        <h4 className="text-xs font-bold text-white">{v.title}</h4>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed">{v.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono">Graduation: 2017 E.C. (Gambella University)</span>
              <span className="text-emerald-400 font-semibold font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Degree
              </span>
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
};
