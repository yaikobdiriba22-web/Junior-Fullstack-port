import React, { useState, useEffect } from 'react';
import { Terminal, Send, Sparkles, X, CornerDownLeft } from 'lucide-react';
import { Modal } from '../common/Modal';
import { useTheme } from '../../utils/theme';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({
  isOpen,
  onClose,
  onOpenCV,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<
    { command: string; output: string | React.ReactNode }[]
  >([
    {
      command: 'welcome',
      output:
        "Welcome to Yaikob's Developer CLI. Type 'help' for available commands or 'projects' to browse work.",
    },
  ]);
  const { theme, toggleTheme } = useTheme();

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output =
          'Commands: whoami | projects | skills | contact | cv | theme | clear | quote | exit';
        break;
      case 'whoami':
        output =
          'Yaikob Diriba — Junior Full-Stack Developer (BSc Computer Science, Gambella University). Ready to build useful systems.';
        break;
      case 'projects':
        output =
          '1. School Management System\n2. POS & Business System\n3. Academy LMS Platform\n4. Restaurant Management System';
        break;
      case 'skills':
        output =
          'Stack: React, TypeScript, Node.js, Express, PHP, Laravel, PostgreSQL, MySQL, Tailwind CSS.';
        break;
      case 'contact':
        output = 'Email: yaikobdiriba22@gmail.com | WhatsApp: +251 900 000 000';
        break;
      case 'cv':
      case 'resume':
        output = 'Opening digital CV preview...';
        setTimeout(() => {
          onClose();
          onOpenCV();
        }, 500);
        break;
      case 'theme':
        toggleTheme();
        output = `Toggled theme! Current mode is now active.`;
        break;
      case 'quote':
        output = '"First, solve the problem. Then, write the code." — John Johnson';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        onClose();
        setInput('');
        return;
      default:
        output = `Command not recognized: '${cmd}'. Type 'help' to see valid commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Developer CLI &amp; Command Palette"
      subtitle="Interactive terminal utility"
      maxWidth="2xl"
    >
      <div className="bg-black/80 rounded-2xl border border-white/10 p-4 font-mono text-xs text-gray-300 min-h-[300px] flex flex-col justify-between backdrop-blur-md">
        {/* Terminal logs */}
        <div className="space-y-3 overflow-y-auto max-h-[320px] custom-scrollbar pr-2">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-400">
                <span>yaikob@portfolio:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="text-gray-300 whitespace-pre-line pl-2 border-l border-white/10">
                {item.output}
              </div>
            </div>
          ))}
        </div>

        {/* Input prompt */}
        <form onSubmit={handleCommand} className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
          <span className="text-indigo-400 select-none">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'cv'..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-hidden placeholder-gray-600"
            autoFocus
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </Modal>
  );
};
