import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, Share2, PlusSquare, Smartphone, WifiOff, Check } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useLanguage } from '../../context/LanguageContext';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const isOnline = useOnlineStatus();
  const { language } = useLanguage();
  const isAmharic = language === 'am';

  const [dismissed, setDismissed] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('yd_pwa_prompt_dismissed');
    if (isDismissed) {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('yd_pwa_prompt_dismissed', 'true');
  };

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }
    const success = await install();
    if (success) {
      setJustInstalled(true);
      setTimeout(() => setJustInstalled(false), 5000);
    }
  };

  // If already running in standalone mode, only show offline banner when disconnected
  if (isInstalled && isOnline) {
    return null;
  }

  return (
    <>
      {/* Offline Status Alert Banner */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-0 left-0 right-0 z-50 bg-amber-600/95 backdrop-blur-md text-white text-xs py-2 px-4 flex items-center justify-center gap-2 shadow-lg"
          >
            <WifiOff className="w-4 h-4 text-amber-200 shrink-0" />
            <span>
              {isAmharic
                ? 'ከመስመር ውጭ ነዎት (Offline Mode)። ከመሸጎጫ (Cache) እየሰራ ነው።'
                : 'You are currently offline. Portfolio is running from offline PWA cache.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Install Prompt (shows if installable or iOS and not dismissed) */}
      <AnimatePresence>
        {!dismissed && !isInstalled && (isInstallable || isIOS) && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-5 right-5 z-45 max-w-sm w-[calc(100vw-2.5rem)] sm:w-auto"
          >
            <div className="bg-[#0F1420]/95 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 shadow-2xl shadow-black/80 flex items-center gap-3.5">
              {/* App Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/20 shrink-0">
                <div className="w-full h-full rounded-[10px] bg-[#080A0F] flex items-center justify-center text-white font-black text-xs">
                  YD
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white tracking-wide">
                    {isAmharic ? 'መተግበሪያውን ጫን' : 'Install Yaikob App'}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                    PWA
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 truncate mt-0.5">
                  {isAmharic
                    ? 'ከመስመር ውጭ ፈጣን የስራ ተሞክሮ'
                    : 'Fast offline access & home screen launch'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleInstallClick}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all cursor-pointer active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isAmharic ? 'ጫን' : 'Install'}</span>
                </button>

                <button
                  onClick={handleDismiss}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS "Add to Home Screen" Instruction Modal */}
      <AnimatePresence>
        {showIOSGuide && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowIOSGuide(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0D1117] border border-white/[0.12] rounded-3xl max-w-sm w-full p-6 shadow-2xl relative text-center"
              >
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-xl bg-white/[0.04]"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {isAmharic ? 'በ iPhone / iPad ላይ ይጫኑ' : 'Install on iOS Safari'}
                </h3>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  {isAmharic
                    ? 'በ Safari ውስጥ ሆነው በቀላሉ ወደ ስልክዎ ዋና ገፅ መተግበሪያውን ማከል ይችላሉ፡'
                    : 'To install this portfolio as a standalone application on your Apple device:'}
                </p>

                <div className="space-y-3 text-left bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 mb-5 text-xs text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center font-bold text-xs shrink-0">
                      1
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>{isAmharic ? 'የማጋሪያ ቁልፍን ይጫኑ' : 'Tap the Share icon'}</span>
                      <Share2 className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center font-bold text-xs shrink-0">
                      2
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>
                        {isAmharic ? 'ወደ ታች ዝቅ ብለው' : 'Scroll and select'}{' '}
                        <strong>"{isAmharic ? 'ወደ መነሻ ገጽ አክል' : 'Add to Home Screen'}"</strong>
                      </span>
                      <PlusSquare className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center font-bold text-xs shrink-0">
                      3
                    </div>
                    <div>
                      <span>
                        {isAmharic ? 'በላይኛው ቀኝ ጥግ' : 'Tap'} <strong>{isAmharic ? '"አክል" ይጫኑ' : '"Add"'}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="w-full py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-medium text-xs transition-colors"
                >
                  {isAmharic ? 'ተረድቻለሁ' : 'Got it'}
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success alert after install */}
      <AnimatePresence>
        {justInstalled && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white text-xs px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>
              {isAmharic ? 'መተግበሪያው በተሳካ ሁኔታ ተጭኗል!' : 'Application successfully installed!'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
