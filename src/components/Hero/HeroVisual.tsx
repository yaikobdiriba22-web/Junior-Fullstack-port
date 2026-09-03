import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  GraduationCap,
  Sparkles,
  Code2,
  Terminal,
  Check,
  Copy,
  Layers,
  Database,
  Server,
  Cpu,
} from 'lucide-react';
import { BentoCard } from '../common/BentoCard';
import { useLanguage } from '../../context/LanguageContext';

export const HeroVisual: React.FC = () => {
  const { t, isAmharic } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeSnippetTab, setActiveSnippetTab] = useState<'profile' | 'tech'>('profile');

  const handleCopyCode = () => {
    const code = `// Yaikob Diriba - Junior Full-Stack Developer
const developer = {
  name: "Yaikob Diriba",
  role: "Junior Full-Stack Developer",
  location: "Addis Ababa, Ethiopia",
  education: "BSc Computer Science (Gambella University, 2017 E.C.)",
  stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  status: "Available for junior developer jobs & internships"
};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-3.5 select-none">
      {/* Top Bento Row: Profile Identity & Availability Card */}
      <BentoCard className="p-4 sm:p-5 bg-gradient-to-br from-[#0D1117] via-[#111827] to-[#0D1117]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            {/* Elegant Monogram Avatar */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-600/30">
                <div className="w-full h-full rounded-[14px] bg-[#080A0F] flex items-center justify-center text-white font-black text-base tracking-wider">
                  YD
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#080A0F]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Yaikob Diriba
                </h3>
                <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 font-mono border border-indigo-500/20">
                  Full-Stack
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium mt-0.5">
                Junior Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="hidden sm:flex flex-col items-end">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
            <span className="text-[10px] text-gray-500 font-mono mt-1">Open to roles</span>
          </div>
        </div>

        {/* Quick Identity Tags */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-white/[0.08] text-xs">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate">Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="truncate">BSc Computer Science</span>
          </div>
        </div>
      </BentoCard>

      {/* Middle Bento Row: Interactive Developer Code Snippet */}
      <BentoCard className="p-4 sm:p-5 bg-[#0D1117]">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1 ml-2 font-mono text-[11px] text-gray-400">
              <button
                onClick={() => setActiveSnippetTab('profile')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  activeSnippetTab === 'profile'
                    ? 'bg-white/10 text-white'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                profile.ts
              </button>
              <button
                onClick={() => setActiveSnippetTab('tech')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  activeSnippetTab === 'tech'
                    ? 'bg-white/10 text-white'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                stack.json
              </button>
            </div>
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/10 transition-colors"
            title="Copy code snippet"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-mono">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span className="font-mono">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code View */}
        <pre className="text-[11px] sm:text-[12px] font-mono leading-relaxed text-gray-300 overflow-x-auto p-1 scrollbar-none">
          {activeSnippetTab === 'profile' ? (
            <code>
              <span className="text-indigo-400">const</span>{' '}
              <span className="text-cyan-300">yaikob</span> = &#123;{'\n'}
              {'  '}role: <span className="text-emerald-300">"Junior Full-Stack Developer"</span>,{'\n'}
              {'  '}degree: <span className="text-emerald-300">"BSc Computer Science"</span>,{'\n'}
              {'  '}university: <span className="text-emerald-300">"Gambella University"</span>,{'\n'}
              {'  '}gradYear: <span className="text-amber-300">"2017 E.C. (2025/2026)"</span>,{'\n'}
              {'  '}focus: [<span className="text-emerald-300">"Clean UI"</span>, <span className="text-emerald-300">"APIs"</span>, <span className="text-emerald-300">"Databases"</span>],{'\n'}
              {'  '}status: <span className="text-emerald-400">"● Open for Opportunities"</span>{'\n'}
              &#125;;
            </code>
          ) : (
            <code>
              &#123;{'\n'}
              {'  '}<span className="text-indigo-400">"frontend"</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Tailwind"</span>],{'\n'}
              {'  '}<span className="text-indigo-400">"backend"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"PHP/Laravel"</span>],{'\n'}
              {'  '}<span className="text-indigo-400">"database"</span>: [<span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"MySQL"</span>],{'\n'}
              {'  '}<span className="text-indigo-400">"tools"</span>: [<span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"Vite"</span>, <span className="text-emerald-300">"VS Code"</span>]{'\n'}
              &#125;
            </code>
          )}
        </pre>
      </BentoCard>

      {/* Bottom Bento Row: Core Stack Badges & Live Status */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <BentoCard className="p-3 bg-[#0D1117] flex items-center gap-2 text-xs">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] text-gray-500 block leading-none">Frontend</span>
            <span className="font-semibold text-white text-[11px]">React / TS</span>
          </div>
        </BentoCard>

        <BentoCard className="p-3 bg-[#0D1117] flex items-center gap-2 text-xs">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Server className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] text-gray-500 block leading-none">Backend</span>
            <span className="font-semibold text-white text-[11px]">Node / Express</span>
          </div>
        </BentoCard>

        <BentoCard className="p-3 bg-[#0D1117] flex items-center gap-2 text-xs">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Database className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] text-gray-500 block leading-none">Database</span>
            <span className="font-semibold text-white text-[11px]">PostgreSQL</span>
          </div>
        </BentoCard>

        <BentoCard className="p-3 bg-[#0D1117] flex items-center gap-2 text-xs">
          <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] text-gray-500 block leading-none">Styling</span>
            <span className="font-semibold text-white text-[11px]">Tailwind CSS</span>
          </div>
        </BentoCard>
      </div>
    </div>
  );
};
