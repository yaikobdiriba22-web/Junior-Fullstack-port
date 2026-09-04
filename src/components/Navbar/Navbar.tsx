import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  FileText,
  Send,
  Home,
  User,
  FolderGit2,
  Cpu,
  Workflow,
  Mail,
  ChevronRight,
  Github,
  Linkedin,
  Youtube,
  Send as TelegramIcon,
  Download,
} from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { socials } from '../../data/socials';
import { usePWAInstall } from '../../hooks/usePWAInstall';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenEasterEgg?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { isAmharic } = useLanguage();
  const { isInstallable, isInstalled, install } = usePWAInstall();

  const navItems = [
    { label: isAmharic ? 'መነሻ' : 'Home', href: '#hero', id: 'hero', icon: Home },
    { label: isAmharic ? 'ስለ እኔ' : 'About', href: '#about', id: 'about', icon: User },
    { label: isAmharic ? 'ስራዎቼ' : 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { label: isAmharic ? 'ክህሎቶች' : 'Skills', href: '#skills', id: 'skills', icon: Cpu },
    { label: isAmharic ? 'ሂደት' : 'Process', href: '#process', id: 'process', icon: Workflow },
    { label: isAmharic ? 'አግኙኝ' : 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'process', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A0F]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Left: YD logo / Yaikob Diriba */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-2.5 text-white select-none cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[10px] bg-[#080A0F] flex items-center justify-center text-white font-black text-xs tracking-wider">
                YD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="leading-none text-white font-bold tracking-tight text-base sm:text-lg group-hover:text-indigo-300 transition-colors">
                Yaikob Diriba
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase mt-0.5">
                Junior Full-Stack
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.1] rounded-full -z-10 border border-white/[0.12]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Language switcher, CV & Hire Me button */}
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageSwitcher layoutIdPrefix="desktop" />

            {isInstallable && !isInstalled && (
              <Button
                variant="ghost"
                size="sm"
                icon={<Download className="w-3.5 h-3.5 text-indigo-400" />}
                onClick={() => install()}
                className="text-xs border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-200"
              >
                {isAmharic ? 'መተግበሪያ ጫን' : 'Install App'}
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              icon={<FileText className="w-3.5 h-3.5" />}
              onClick={onOpenCV}
              className="text-xs"
            >
              {isAmharic ? 'ሲቪ (CV)' : 'Download CV'}
            </Button>

            <Button
              variant="primary"
              size="sm"
              icon={<Send className="w-3.5 h-3.5" />}
              onClick={() => handleNavClick('#contact')}
              className="text-xs"
            >
              {isAmharic ? 'ቀጥታ አግኙኝ' : 'Hire Me'}
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher layoutIdPrefix="mobile" />
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </Container>

      {/* Slide-out Mobile Navigation Menu (Framer Motion Drawer) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dimmed Backdrop Overlay */}
            <motion.div
              key="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 md:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Drawer Panel */}
            <motion.aside
              key="mobile-drawer-panel"
              role="dialog"
              aria-modal="true"
              aria-label={isAmharic ? 'የሞባይል ማውጫ' : 'Mobile Navigation Menu'}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[86vw] bg-[#0A0D14] border-l border-white/[0.1] shadow-2xl shadow-black z-50 md:hidden flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-600/20">
                    <div className="w-full h-full rounded-[10px] bg-[#080A0F] flex items-center justify-center text-white font-black text-xs">
                      YD
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">Yaikob Diriba</div>
                    <div className="text-[10px] text-gray-400 font-mono">Junior Full-Stack</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Drawer Body */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Language Switcher inside Drawer */}
                <div className="mb-4">
                  <LanguageSwitcher variant="drawer" />
                </div>

                {/* Availability status badge */}
                <div className="mb-4 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[11px] font-mono text-emerald-300 font-medium">
                    {isAmharic ? 'ለስራ እና ፍሪላንስ ዝግጁ' : 'Available for Junior Roles'}
                  </span>
                </div>

                {/* Staggered Navigation Items */}
                <motion.nav
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-1.5"
                >
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          show: {
                            opacity: 1,
                            x: 0,
                            transition: { type: 'spring', stiffness: 350, damping: 25 },
                          },
                        }}
                        onClick={() => handleNavClick(item.href)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all text-left cursor-pointer group ${
                          isActive
                            ? 'bg-indigo-600/20 text-white border border-indigo-500/30 shadow-xs'
                            : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className={`w-4 h-4 transition-colors ${
                              isActive
                                ? 'text-indigo-400'
                                : 'text-gray-500 group-hover:text-indigo-300'
                            }`}
                          />
                          <span>{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-xs shadow-indigo-400" />
                          )}
                          <ChevronRight
                            className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
                              isActive ? 'text-indigo-400' : 'text-gray-600'
                            }`}
                          />
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.nav>

                {/* Quick Actions inside Drawer */}
                <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col gap-2.5">
                  {isInstallable && !isInstalled && (
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<Download className="w-4 h-4" />}
                      onClick={async () => {
                        setMobileMenuOpen(false);
                        await install();
                      }}
                      className="w-full justify-center text-xs py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-md shadow-indigo-500/25"
                    >
                      {isAmharic ? 'መተግበሪያውን ስልክ ላይ ጫን' : 'Install App to Device'}
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    icon={<FileText className="w-4 h-4" />}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCV();
                    }}
                    className="w-full justify-center text-xs py-2.5"
                  >
                    {isAmharic ? 'ሲቪ (CV) ያውርዱ' : 'Download CV'}
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    icon={<Send className="w-4 h-4" />}
                    onClick={() => handleNavClick('#contact')}
                    className="w-full justify-center text-xs py-2.5 shadow-sm shadow-indigo-600/30"
                  >
                    {isAmharic ? 'ቀጥታ አግኙኝ (Hire Me)' : 'Hire Me'}
                  </Button>
                </div>
              </div>

              {/* Drawer Footer with Connected Social Channels */}
              <div className="p-5 border-t border-white/[0.08] bg-black/25">
                <div className="flex items-center justify-between mb-3 text-xs text-gray-400 font-mono">
                  <span>Connect Channels</span>
                  <span className="text-[10px] text-gray-500">Addis Ababa, ET</span>
                </div>
                <div className="flex items-center justify-around gap-2">
                  <a
                    href={socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={socials.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-red-400 transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={socials.telegram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-sky-400 transition-colors"
                    title="Telegram"
                  >
                    <TelegramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
