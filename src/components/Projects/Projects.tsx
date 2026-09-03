import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { BentoCard } from '../common/BentoCard';
import { projects } from '../../data/projects';
import { Project, ProjectCategory } from '../../types';
import { ProjectMockupPreview } from './ProjectMockupPreview';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { useLanguage } from '../../context/LanguageContext';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<Project | null>(null);
  const { isAmharic } = useLanguage();

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: isAmharic ? 'ሁሉም ስራዎች' : 'All Projects' },
    { id: 'fullstack', label: isAmharic ? 'ሙሉ-ቁልል (Full-Stack)' : 'Full-Stack' },
    { id: 'business', label: isAmharic ? 'የቢዝነስ ሲስተሞች' : 'Business Systems' },
    { id: 'web', label: isAmharic ? 'የድር መተግበሪያዎች' : 'Web Applications' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => {
          if (selectedCategory === 'fullstack') return p.category === 'fullstack';
          if (selectedCategory === 'business') return p.category === 'business';
          if (selectedCategory === 'web') return p.category === 'web' || p.category === 'fullstack';
          return true;
        });

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'የተመረጡ ስራዎች' : 'Selected Work'}
          title={isAmharic ? 'የገነባኋቸው ዋና ዋና የሶፍትዌር ሲስተሞች' : 'Selected Work'}
          subtitle={
            isAmharic
              ? 'የሙሉ-ቁልል (Full-Stack) ክህሎቶቼን በማዳበር የገነባኋቸው ተጨባጭ መተግበሪያዎች እና ሲስተሞች ስብስብ።'
              : "A selection of applications and systems I've built while developing my full-stack skills."
          }
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                  : 'bg-white/[0.04] text-gray-400 hover:text-white border-white/[0.08] backdrop-blur-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Bento Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Asymmetric bento span calculation
              const isLead = idx === 0;
              const isSecond = idx === 1;
              const colSpanClass = isLead
                ? 'md:col-span-12 lg:col-span-12'
                : isSecond
                ? 'md:col-span-12 lg:col-span-7'
                : idx === 2
                ? 'md:col-span-12 lg:col-span-5'
                : 'md:col-span-6 lg:col-span-4';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`${colSpanClass} flex flex-col`}
                >
                  <BentoCard className="h-full flex flex-col justify-between group overflow-hidden border-white/[0.08] hover:border-white/[0.18] transition-all duration-300">
                    {/* Lead Card: Split horizontal layout on desktop */}
                    {isLead ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 flex-1">
                        {/* Mockup Preview Area */}
                        <div className="lg:col-span-7 flex flex-col justify-center overflow-hidden rounded-2xl bg-[#080A0F] border border-white/[0.08] p-3 sm:p-4 group-hover:border-white/[0.16] transition-all">
                          <div className="transform group-hover:scale-[1.01] transition-transform duration-300">
                            <ProjectMockupPreview type={project.mockupType} />
                          </div>
                        </div>

                        {/* Details Area */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                                ★ Featured • {project.category}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                {project.status}
                              </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2 tracking-tight">
                              {project.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                              {project.description}
                            </p>

                            {/* Problem Solved Statement */}
                            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-5 text-xs text-gray-300">
                              <span className="font-semibold text-indigo-300 block mb-1">
                                {isAmharic ? 'የተፈታው ቁልፍ ችግር:' : 'Key Problem Solved:'}
                              </span>
                              <p className="text-gray-400 text-[11px] leading-relaxed">
                                {project.caseStudy.problem}
                              </p>
                            </div>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                              {project.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-gray-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                            <Button
                              variant="primary"
                              size="sm"
                              icon={<BookOpen className="w-3.5 h-3.5" />}
                              onClick={() => setActiveCaseStudyProject(project)}
                              className="text-xs"
                            >
                              {isAmharic ? 'ሙሉ ማብራሪያ (Case Study)' : 'View Case Study'}
                            </Button>

                            <div className="flex items-center gap-2">
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.08] transition-all"
                                  title="Source Code on GitHub"
                                >
                                  <Github className="w-4 h-4" />
                                </a>
                              )}
                              {project.demoUrl && (
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-indigo-300 hover:text-white border border-white/[0.08] text-xs font-semibold transition-all group/btn"
                                >
                                  <span>{isAmharic ? 'ማሳያ' : 'Live Demo'}</span>
                                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard / Medium Card Layout */
                      <div className="flex flex-col justify-between h-full">
                        {/* Mockup Preview */}
                        <div className="p-4 sm:p-5 bg-[#080A0F] border-b border-white/[0.08] overflow-hidden">
                          <div className="transform group-hover:scale-[1.01] transition-transform duration-300">
                            <ProjectMockupPreview type={project.mockupType} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                                {project.category}
                              </span>
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/[0.04] text-gray-300 border border-white/[0.08]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                {project.status}
                              </span>
                            </div>

                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5 tracking-tight">
                              {project.title}
                            </h3>

                            <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
                              {project.description}
                            </p>

                            {/* Key Problem snippet */}
                            <p className="text-[11px] text-gray-500 line-clamp-2 mb-4">
                              <strong className="text-gray-400">Problem: </strong>
                              {project.caseStudy.problem}
                            </p>

                            {/* Tech Pills */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {project.technologies.slice(0, 4).map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-gray-300"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 4 && (
                                <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-gray-400">
                                  +{project.technologies.length - 4}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Footer Actions */}
                          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                            <button
                              onClick={() => setActiveCaseStudyProject(project)}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer group/cta"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>{isAmharic ? 'ዝርዝር ማብራሪያ' : 'Case Study'}</span>
                              <ArrowRight className="w-3 h-3 transform group-hover/cta:translate-x-1 transition-transform" />
                            </button>

                            <div className="flex items-center gap-1.5">
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.08] transition-all"
                                  title="GitHub Source"
                                >
                                  <Github className="w-3.5 h-3.5" />
                                </a>
                              )}
                              {project.demoUrl && (
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-indigo-400 hover:text-indigo-300 border border-white/[0.08] transition-all"
                                  title="Live Demo"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </BentoCard>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Active In-Depth Case Study Modal */}
        {activeCaseStudyProject && (
          <ProjectCaseStudyModal
            project={activeCaseStudyProject}
            onClose={() => setActiveCaseStudyProject(null)}
          />
        )}
      </Container>
    </section>
  );
};
