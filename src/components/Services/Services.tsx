import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Layout,
  Server,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { BentoCard } from '../common/BentoCard';
import { whatICanBuild } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

export const Services: React.FC = () => {
  const { isAmharic } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return Globe;
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Building2':
      default:
        return Building2;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'የስራ መስኮች' : 'What I Can Build'}
          title={isAmharic ? 'ልገነባቸው የምችላቸው የዲጂታል ምርቶች' : 'Capabilities & Solutions'}
          subtitle={
            isAmharic
              ? 'ተግባራዊ የድር መተግበሪያዎች፣ ዘመናዊ የተጠቃሚ ገጾች፣ የኋላ ሰርቨር ሲስተሞች እና የንግድ ማኔጅመንት መድረኮች።'
              : 'Focused software engineering capabilities tailored for teams, clients, and real operations.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatICanBuild.map((service, idx) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <BentoCard
                key={service.id}
                className="p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                      0{idx + 1} / Capability
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono text-[11px]">{service.idealFor}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-semibold text-indigo-400 hover:text-indigo-300 transition-colors shrink-0 ml-3"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
