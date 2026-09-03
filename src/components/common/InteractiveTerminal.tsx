import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Code2, Database, Server, Check, Play, Sparkles } from 'lucide-react';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'server' | 'schema' | 'terminal'>('stack');
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    'yacob-tech: ready on port 3000',
    'connected to postgresql @ pool_size=10',
    'verified jwt auth guards & rbac middleware',
    'ready for enterprise deployment & client projects',
  ]);

  const handleRunBuild = () => {
    if (running) return;
    setRunning(true);
    setLogs((prev) => [...prev, '$ npm run build:production', 'compiling typescript schemas...']);
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '✓ vite build complete in 420ms',
        '✓ 0 type errors found (strict: true)',
        '✓ production bundle optimized & verified',
      ]);
      setRunning(false);
    }, 900);
  };

  const codeSnippets = {
    stack: `// developer_profile.ts
export const yaikob = {
  name: "Yaikob Diriba",
  role: "Junior Full-Stack Developer",
  education: "BSc Computer Science (Gambella University)",
  stack: {
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    backend:  ["Node.js", "Express", "PHP / Laravel"],
    database: ["PostgreSQL", "MySQL", "MongoDB"],
    focus:    ["Business Systems", "POS", "School Portals"]
  },
  status: "🟢 Available for Opportunities & Projects"
};`,
    server: `// api/routes/business.ts
import { Router } from 'express';
import { authenticateToken, requireRole } from '../middleware/auth';
import { db } from '../db/client';

export const router = Router();

router.post('/orders/checkout', authenticateToken, async (req, res) => {
  const client = await db.getClient();
  try {
    await client.query('BEGIN');
    // Atomic stock check & VAT invoice transaction
    const order = await processAtomicOrder(client, req.body);
    await client.query('COMMIT');
    return res.status(201).json({ success: true, order });
  } catch (error) {
    await client.query('ROLLBACK');
    return res.status(400).json({ error: 'Transaction failed' });
  }
});`,
    schema: `-- schema.sql: Normalized Business Operations
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admission_no VARCHAR(32) UNIQUE NOT NULL,
  full_name VARCHAR(128) NOT NULL,
  grade_level INT NOT NULL,
  guardian_contact VARCHAR(64),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  session_date DATE NOT NULL,
  status VARCHAR(16) CHECK (status IN ('present', 'absent', 'excused')),
  CONSTRAINT unique_student_session UNIQUE (student_id, session_date)
);`,
  };

  return (
    <div className="w-full rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl shadow-indigo-950/40 overflow-hidden backdrop-blur-xl">
      {/* Top Bar with window controls & tabs */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400 font-mono">
            <span className="text-gray-500">workspace/</span>
            <span className="text-indigo-400 font-semibold">yacob-tech</span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'stack'
                ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Profile.ts</span>
          </button>
          <button
            onClick={() => setActiveTab('server')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'server'
                ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Server.ts</span>
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'schema'
                ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Schema.sql</span>
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI</span>
          </button>
        </div>
      </div>

      {/* Editor / Output Area */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed min-h-[290px] max-h-[360px] overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab !== 'terminal' ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <pre className="text-slate-300 overflow-x-auto whitespace-pre font-mono">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </motion.div>
          ) : (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex flex-col gap-2 font-mono text-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-gray-400">~/yacob-tech $</span>
                <button
                  onClick={handleRunBuild}
                  disabled={running}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/30 text-[11px] font-semibold cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3 h-3" />
                  {running ? 'Compiling...' : 'Run Test Build'}
                </button>
              </div>
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    log.startsWith('✓')
                      ? 'text-emerald-400'
                      : log.startsWith('$')
                      ? 'text-cyan-300'
                      : 'text-gray-400'
                  }`}
                >
                  <span className="text-gray-600 select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
              <div className="flex items-center gap-1 text-indigo-400 pt-1">
                <span>$</span>
                <span className="w-2 h-4 bg-indigo-400 inline-block animate-pulse" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer status bar */}
      <div className="px-4 py-2 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-emerald-400">
            <Check className="w-3 h-3" /> Full-Stack Ready
          </span>
          <span className="hidden sm:inline-block text-gray-600">|</span>
          <span className="hidden sm:inline-block text-gray-400">UTF-8 / TypeScript 5.8</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span className="text-cyan-300">Gambella Univ CS 2017 E.C.</span>
        </div>
      </div>
    </div>
  );
};
