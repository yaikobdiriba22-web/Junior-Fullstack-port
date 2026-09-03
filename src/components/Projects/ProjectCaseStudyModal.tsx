import React from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Database,
  Layers,
  Sparkles,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Project } from '../../types';
import { ProjectMockupPreview } from './ProjectMockupPreview';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { isAmharic } = useLanguage();

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.subtitle}
      maxWidth="4xl"
    >
      <div className="space-y-8 text-slate-200">
        {/* Status and Action Buttons Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">
              {isAmharic ? 'የፕሮጀክት ሁኔታ፦' : 'Project Status:'}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold font-mono ${
                project.status === 'Completed'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : project.status === 'Production-Ready'
                  ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                  : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {isAmharic
                ? project.status === 'Completed'
                  ? 'የተጠናቀቀ'
                  : project.status === 'Production-Ready'
                  ? 'ለስራ ዝግጁ'
                  : 'በሂደት ላይ'
                : project.status}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                icon={<Github className="w-3.5 h-3.5" />}
                as="a"
                href={project.githubUrl}
                target="_blank"
                className="text-xs"
              >
                {isAmharic ? 'ኮዱን በGitHub ይመልከቱ' : 'View Repository'}
              </Button>
            )}
            {project.demoUrl && (
              <Button
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                as="a"
                href={project.demoUrl}
                target="_blank"
                className="text-xs"
              >
                {isAmharic ? 'የቀጥታ ቅድመ እይታ' : 'Project Preview'}
              </Button>
            )}
          </div>
        </div>

        {/* Live Interface Mockup */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            {isAmharic ? 'የይነገጽ ቅርጽና እይታ' : 'Interactive Interface Layout'}
          </h4>
          <ProjectMockupPreview type={project.mockupType} />
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-rose-500/5 border border-rose-500/20">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{isAmharic ? 'የተፈታው ችግር' : 'The Problem It Solves'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
              <Lightbulb className="w-4 h-4 shrink-0" />
              <span>{isAmharic ? 'የተገነባው መፍትሄ' : 'Engineered Solution'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>{isAmharic ? 'ዋና ዋና ባህሪያት' : 'Key Functional Capabilities'}</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {caseStudy.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture & Tech Stack */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>{isAmharic ? 'የስርዓቱ አርክቴክቸርና ዳታ' : 'Architecture & Data Pipeline'}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
            {caseStudy.architecture}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="indigo" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* API & Schema Preview if available */}
        {caseStudy.apiEndpointsPreview && (
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
            <div className="flex items-center gap-2 text-indigo-400 mb-2 font-bold">
              <Code2 className="w-3.5 h-3.5" />
              <span>{isAmharic ? 'ዋና ዋና የREST Endpoints' : 'Core REST Endpoints'}</span>
            </div>
            <div className="space-y-1 text-slate-400">
              {caseStudy.apiEndpointsPreview.map((endpoint, eIdx) => (
                <div key={eIdx} className="text-[11px] font-mono">
                  <span className="text-slate-600 mr-2">&gt;</span>
                  <span className="text-slate-200">{endpoint}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engineering Challenges & Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
            <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{isAmharic ? 'ያጋጠሙ ተግዳሮቶች' : 'Challenges Overcome'}</span>
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {caseStudy.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 select-none">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
            <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{isAmharic ? 'የተገኙ ልምዶችና እውቀት' : 'Key Learnings & Growth'}</span>
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {caseStudy.learnings.map((l, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 select-none">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};
