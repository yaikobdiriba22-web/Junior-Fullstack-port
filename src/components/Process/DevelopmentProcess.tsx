import React from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Compass,
  Code2,
  CheckCircle2,
  Rocket,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { BentoCard } from '../common/BentoCard';
import { developmentProcess } from '../../data/process';
import { useLanguage } from '../../context/LanguageContext';

export const DevelopmentProcess: React.FC = () => {
  const { isAmharic } = useLanguage();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return Search;
      case 'Compass':
        return Compass;
      case 'Code2':
        return Code2;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Rocket':
      default:
        return Rocket;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'የስራ ሂደት' : 'Development Process'}
          title={isAmharic ? 'ከሃሳብ እስከ ማሰማራት ያለው የሂደት ቅደም ተከተል' : 'Disciplined Development Process'}
          subtitle={
            isAmharic
              ? 'ተግባራዊ፣ ተጨባጭ እና ጥራት ያለው የሶፍትዌር ውጤት ለማምጣት የምከተላቸው 5 ደረጃዎች።'
              : 'A structured, predictable 5-stage engineering workflow ensuring reliable delivery.'
          }
        />

        {/* 5 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {developmentProcess.map((step, idx) => {
            const Icon = getStepIcon(step.iconName);
            return (
              <BentoCard
                key={step.step}
                className="p-5 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                    <span className="text-2xl font-black font-mono text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-300 group-hover:text-indigo-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-white/[0.06] text-[11px] text-gray-400">
                  {step.details.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5">
                      <span className="text-indigo-400 font-mono mt-0.5">•</span>
                      <span className="leading-tight">{bullet}</span>
                    </div>
                  ))}
                </div>
              </BentoCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
