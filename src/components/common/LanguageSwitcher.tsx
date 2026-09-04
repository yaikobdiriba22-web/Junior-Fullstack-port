import React from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'pill' | 'compact' | 'drawer';
  layoutIdPrefix?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'pill',
  layoutIdPrefix = 'default',
}) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        onClick={toggleLanguage}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer backdrop-blur-md ${className}`}
        aria-label={`Current language: ${language === 'en' ? 'English' : 'Amharic'}. Click to switch.`}
        title={`Switch to ${language === 'en' ? 'አማርኛ (Amharic)' : 'English'}`}
      >
        <span className="text-sm select-none" role="img" aria-label="Language">
          {language === 'am' ? '🇪🇹' : '🌐'}
        </span>
        <span className="font-bold tracking-wider uppercase">
          {language === 'am' ? 'አማ' : 'EN'}
        </span>
      </button>
    );
  }

  if (variant === 'drawer') {
    return (
      <div className={`p-3 rounded-2xl bg-white/[0.03] border border-white/10 ${className}`}>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>Language / ቋንቋ</span>
          </span>
          <span className="text-[11px] font-mono text-gray-400">
            {language === 'am' ? 'አማርኛ 🇪🇹' : 'English 🌐'}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            onClick={() => setLanguage('en')}
            className={`relative py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              language === 'en'
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {language === 'en' && (
              <motion.span
                layoutId="activeDrawerLangPill"
                className="absolute inset-0 rounded-lg bg-indigo-600 shadow-sm shadow-indigo-600/30"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
              />
            )}
            <span className="relative z-10 select-none">🌐</span>
            <span className="relative z-10 font-sans">English</span>
          </button>

          <button
            onClick={() => setLanguage('am')}
            className={`relative py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              language === 'am'
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {language === 'am' && (
              <motion.span
                layoutId="activeDrawerLangPill"
                className="absolute inset-0 rounded-lg bg-indigo-600 shadow-sm shadow-indigo-600/30"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
              />
            )}
            <span className="relative z-10 select-none">🇪🇹</span>
            <span className="relative z-10 font-sans">አማርኛ</span>
          </button>
        </div>
      </div>
    );
  }

  // Default 'pill' variant for Navbar & Header
  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xs ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
          language === 'en'
            ? 'text-white'
            : 'text-gray-400 hover:text-gray-200'
        }`}
        aria-pressed={language === 'en'}
      >
        {language === 'en' && (
          <motion.span
            layoutId={`activeNavLangIndicator_${layoutIdPrefix}`}
            className="absolute inset-0 rounded-full bg-indigo-600 shadow-sm shadow-indigo-600/30"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
          />
        )}
        <span className="relative z-10 font-mono text-[11px] tracking-wide">EN</span>
      </button>

      <button
        onClick={() => setLanguage('am')}
        className={`relative px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
          language === 'am'
            ? 'text-white font-bold'
            : 'text-gray-400 hover:text-gray-200'
        }`}
        aria-pressed={language === 'am'}
      >
        {language === 'am' && (
          <motion.span
            layoutId={`activeNavLangIndicator_${layoutIdPrefix}`}
            className="absolute inset-0 rounded-full bg-indigo-600 shadow-sm shadow-indigo-600/30"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1 font-sans text-[11px]">
          <span className="text-xs select-none">🇪🇹</span>
          <span>አማ</span>
        </span>
      </button>
    </div>
  );
};
