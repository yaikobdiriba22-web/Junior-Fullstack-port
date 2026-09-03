import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Server,
  Database,
  Wrench,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Compass,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { BentoCard } from '../common/BentoCard';
import { skillCategories, currentlyLearningSkills } from '../../data/skills';
import { SkillCategory, SkillProficiency } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { isAmharic } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return Code;
      case 'backend':
        return Server;
      case 'databases':
        return Database;
      case 'tools':
        return Wrench;
      case 'other':
      default:
        return Cpu;
    }
  };

  const getLevelBadgeClass = (level: SkillProficiency) => {
    switch (level) {
      case 'Frequently Used':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Working Knowledge':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
      case 'Currently Learning':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
    }
  };

  const filteredCategories =
    selectedFilter === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedFilter);

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'የቴክኖሎጂ ክህሎቶች' : 'Technology Stack'}
          title={isAmharic ? 'በተግባር የምጠቀምባቸው ቴክኖሎጂዎች' : 'Skills & Technologies'}
          subtitle={
            isAmharic
              ? 'ግልጽ እና እውነተኛ የክህሎት ምደባ፦ በተደጋጋሚ የምጠቀምባቸው፣ የተግባር እውቀት ያለኝ እና አሁን የምማራቸው።'
              : 'An honest breakdown of technologies I work with, classified by real production frequency.'
          }
        />

        {/* Honest Classification Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] max-w-2xl mx-auto text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-gray-300 font-medium">Frequently Used</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
            <span className="text-gray-300 font-medium">Working Knowledge</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-gray-300 font-medium">Currently Learning</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
              selectedFilter === 'all'
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                : 'bg-white/[0.04] text-gray-400 hover:text-white border-white/[0.08]'
            }`}
          >
            {isAmharic ? 'ሁሉም ክህሎቶች' : 'All Domains'}
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                selectedFilter === cat.id
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                  : 'bg-white/[0.04] text-gray-400 hover:text-white border-white/[0.08]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.id);
            return (
              <BentoCard
                key={cat.id}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 leading-tight mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] transition-colors"
                      >
                        <span className="text-xs font-medium text-gray-200">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-gray-500 font-mono flex items-center justify-between">
                  <span>{cat.skills.length} core competencies</span>
                  <span className="text-indigo-400">Verified</span>
                </div>
              </BentoCard>
            );
          })}
        </div>

        {/* Currently Learning Section (Section 19) */}
        <div className="mt-12">
          <BentoCard className="p-6 sm:p-8 bg-gradient-to-br from-[#0D1117] via-[#111827] to-indigo-950/20 border-indigo-500/30">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Growth Mindset &amp; Ongoing Study</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  Currently Sharpening My Skills In:
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  As a junior full-stack developer, I maintain deliberate daily learning habits to
                  expand my technical depth beyond core frameworks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1 lg:max-w-lg">
                {currentlyLearningSkills.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-gray-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
};
