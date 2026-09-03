import React from 'react';
import {
  Download,
  Printer,
  GraduationCap,
  Briefcase,
  Code2,
  Mail,
  MapPin,
  FileText,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { profile } from '../../data/profile';
import { socials } from '../../data/socials';
import { projects } from '../../data/projects';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Curriculum Vitae / Resume"
      subtitle="Yaikob Diriba — Junior Full-Stack Developer"
      maxWidth="4xl"
    >
      <div className="space-y-6 text-slate-200">
        {/* Actions bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>Digital Resume Document Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5" />}
              onClick={handlePrint}
              className="text-xs"
            >
              Print
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<Download className="w-3.5 h-3.5" />}
              as="a"
              href={socials.cvUrl}
              download="Yaikob-Diriba-CV.pdf"
              className="text-xs"
            >
              Download PDF
            </Button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6 text-xs sm:text-sm font-sans leading-relaxed">
          {/* Header */}
          <div className="border-b border-white/10 pb-5">
            <h1 className="text-2xl font-black text-white">{profile.fullName}</h1>
            <p className="text-sm font-semibold text-indigo-400 mt-0.5">{profile.role}</p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" /> Ethiopia
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" /> {socials.email.handle}
              </span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" /> {socials.github.handle}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              Motivated Computer Science graduate from Gambella University specializing in junior full-stack development. Experienced in designing responsive React/TypeScript user interfaces, developing structured RESTful APIs with Node.js/Express, and managing normalized PostgreSQL/MySQL relational schemas. Dedicated to engineering practical systems for educational, retail, and business operations.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
              Education
            </h2>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white text-sm">BSc in Computer Science</h3>
                  <p className="text-indigo-300 text-xs">Gambella University — Ethiopia</p>
                </div>
                <span className="font-mono text-xs text-gray-400">Graduated: 2017 E.C.</span>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Core coursework: Data Structures &amp; Algorithms, Relational Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Object-Oriented Analysis &amp; Design.
              </p>
            </div>
          </div>

          {/* Core Technical Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-xs sm:text-sm">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{proj.description}</p>
                  <p className="text-indigo-300 font-mono text-[11px] mt-2">
                    Stack: {proj.technologies.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
              Technical Skillset
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div>
                <span className="font-semibold text-slate-200 block">Frontend:</span>
                <span className="text-slate-400">
                  React, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Responsive Design
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-200 block">Backend &amp; DB:</span>
                <span className="text-slate-400">
                  Node.js, Express.js, PHP, Laravel, PostgreSQL, MySQL, RESTful APIs, JWT Auth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
