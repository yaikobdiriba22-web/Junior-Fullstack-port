import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Code2,
  TrendingUp,
  BookOpen,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { BentoCard } from '../common/BentoCard';
import { journeyMilestones } from '../../data/journey';
import { useLanguage } from '../../context/LanguageContext';

export const Journey: React.FC = () => {
  const { isAmharic } = useLanguage();

  return (
    <section id="journey" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'የትምህርት ጉዞ' : 'Education & Milestones'}
          title={isAmharic ? 'የትምህርት እና የተግባር እድገት ታሪክ' : 'Academic Foundation & Path'}
          subtitle={
            isAmharic
              ? 'የኮምፒውተር ሳይንስ ዲግሪ በጋምቤላ ዩኒቨርሲቲ እና የተግባራዊ የሶፍትዌር ግንባታ ምዕራፎች።'
              : 'Grounded in a 4-year Computer Science curriculum, followed by intensive full-stack product building.'
          }
        />

        {/* Primary Education Card (Section 18 Highlight) */}
        <BentoCard className="max-w-3xl mx-auto mb-14 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  BSc in Computer Science
                </h3>
                <p className="text-sm font-semibold text-indigo-300">
                  Gambella University — Ethiopia
                </p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 font-semibold">
              Graduation: 2017 E.C. (2025/2026)
            </div>
          </div>

          <div className="mt-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2 font-semibold">
              Core Academic Focus Areas:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {[
                'Software development & OOP paradigms',
                'Web technologies & internet protocols',
                'Relational database architecture & SQL',
                'Networking fundamentals & infrastructure',
                'Computer systems & operating principles',
                'Data structures & algorithm design',
              ].map((focus, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Timeline Sequence */}
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-500/30 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {journeyMilestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex items-start gap-4 sm:gap-6 pl-1 sm:pl-2"
              >
                {/* Node */}
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#080A0F] border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shrink-0 z-10 shadow-md shadow-indigo-500/20">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                {/* Card */}
                <BentoCard className="flex-1 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-indigo-400">
                      {milestone.period}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase">
                      {milestone.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 tracking-tight">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-indigo-300 font-medium mb-3">
                    {milestone.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/[0.06] text-xs text-gray-300">
                    {milestone.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-[11px]">
                        <span className="text-indigo-400 font-mono mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
