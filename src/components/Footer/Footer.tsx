import React from 'react';
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  ArrowUp,
  MessageCircle,
  Sparkles,
  Heart,
} from 'lucide-react';
import { Container } from '../common/Container';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  onOpenEasterEgg?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEasterEgg }) => {
  const { isAmharic } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#080A0F] text-gray-400 py-12 sm:py-16 relative overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-white/[0.08]">
          {/* Brand Column (6 cols) */}
          <div className="md:col-span-6 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-600/20">
                <div className="w-full h-full rounded-[10px] bg-[#080A0F] flex items-center justify-center text-white font-mono font-bold text-xs">
                  YD
                </div>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  Yaikob Diriba
                </span>
                <span className="text-[11px] text-indigo-400 block font-mono">
                  Junior Full-Stack Developer
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              {isAmharic
                ? 'ተግባራዊ፣ ዘመናዊ እና ተደራሽ የድረ-ገጽ መተግበሪያዎች ግንባታ። አዲስ አበባ፣ ኢትዮጵያ።'
                : 'Building practical, modern, and accessible web applications. Based in Addis Ababa, Ethiopia.'}
            </p>

            <p className="text-xs text-gray-500 font-mono">
              Designed &amp; built with curiosity and code.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h5 className="font-mono uppercase tracking-wider text-gray-300 font-bold mb-3 text-[11px]">
              Navigation
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-gray-300 font-bold mb-3">
              Connect
            </h5>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] transition-all"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] transition-all"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socials.email.url}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] transition-all"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={socials.telegram?.url || 'https://t.me/yaikobdiriba'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] transition-all"
                title="Telegram"
                aria-label="Telegram"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.08] transition-all"
                title="YouTube"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-gray-500 font-mono text-[11px]">
            © 2026 Yaikob Diriba. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.08] transition-all text-xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
