import React from 'react';
import {
  Users,
  GraduationCap,
  Calendar,
  CheckCircle2,
  TrendingUp,
  ShoppingCart,
  Receipt,
  Package,
  BookOpen,
  PlayCircle,
  Award,
  Utensils,
  Clock,
  MapPin,
  FileText,
  DollarSign,
  Sparkles,
  Layers,
  Code2,
  Globe,
} from 'lucide-react';

interface MockupProps {
  type: 'dashboard' | 'pos' | 'lms' | 'restaurant' | 'employee' | 'portfolio';
}

export const ProjectMockupPreview: React.FC<MockupProps> = ({ type }) => {
  switch (type) {
    case 'dashboard':
      return (
        <div className="w-full bg-[#080A0F] rounded-xl p-4 border border-white/[0.08] text-xs font-sans text-slate-300 select-none">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
              <GraduationCap className="w-3.5 h-3.5" /> School Portal Admin
            </span>
            <span className="bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">
              Academic Year: 2025/2026
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Enrolled Students</span>
              <span className="text-sm font-bold text-white">1,248</span>
            </div>
            <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Today's Attendance</span>
              <span className="text-sm font-bold text-emerald-400">96.4%</span>
            </div>
            <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Faculty Members</span>
              <span className="text-sm font-bold text-cyan-400">42</span>
            </div>
          </div>

          {/* Attendance Table Sample */}
          <div className="rounded-lg bg-[#0D1117] border border-white/[0.06] p-2.5">
            <div className="text-[11px] font-bold text-slate-300 mb-2 flex items-center justify-between">
              <span>Section 11-A Attendance Matrix</span>
              <span className="text-[10px] text-emerald-400 font-mono">● Live Sync</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between p-1.5 rounded bg-[#080A0F] border border-white/[0.04]">
                <span>Abebe Bikila (Adm #1042)</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono">
                  Present
                </span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-[#080A0F] border border-white/[0.04]">
                <span>Selamawit T. (Adm #1043)</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono">
                  Present
                </span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-[#080A0F] border border-white/[0.04]">
                <span>Dawit Haile (Adm #1044)</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 font-mono">
                  Excused
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'pos':
      return (
        <div className="w-full bg-[#080A0F] rounded-xl p-4 border border-white/[0.08] text-xs font-sans text-slate-300 select-none">
          {/* POS Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <ShoppingCart className="w-3.5 h-3.5" /> POS Register &amp; Invoicing
            </span>
            <span className="text-emerald-400 font-mono">Register #01 [Active]</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
            {/* Cart Items */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Current Cart</span>
              <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06] flex justify-between items-center text-[11px]">
                <div>
                  <p className="font-semibold text-white">Item #SKU-204</p>
                  <p className="text-[10px] text-slate-400">Qty: 2 x $24.00</p>
                </div>
                <span className="font-mono font-bold text-slate-200">$48.00</span>
              </div>
              <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06] flex justify-between items-center text-[11px]">
                <div>
                  <p className="font-semibold text-white">Item #SKU-891</p>
                  <p className="text-[10px] text-slate-400">Qty: 1 x $15.00</p>
                </div>
                <span className="font-mono font-bold text-slate-200">$15.00</span>
              </div>
            </div>

            {/* Bill Summary */}
            <div className="p-3 rounded-lg bg-[#0D1117] border border-white/[0.06] flex flex-col justify-between">
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono">$63.00</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>VAT (15%)</span>
                  <span className="font-mono">$9.45</span>
                </div>
                <div className="flex justify-between font-bold text-white pt-1 border-t border-white/[0.08] text-xs">
                  <span>Total Due</span>
                  <span className="text-cyan-400 font-mono text-sm">$72.45</span>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-emerald-400 font-mono">
                <span className="flex items-center gap-1">
                  <Receipt className="w-3 h-3" /> Auto Receipt Generated
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'lms':
      return (
        <div className="w-full bg-[#080A0F] rounded-xl p-4 border border-white/[0.08] text-xs font-sans text-slate-300 select-none">
          {/* LMS Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
              <BookOpen className="w-3.5 h-3.5" /> Academy Learning Platform
            </span>
            <span className="text-xs bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
              Progress: 78%
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-[#0D1117] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-purple-500/20 text-purple-300">
                  <PlayCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Module 4: Relational Normalization</p>
                  <p className="text-[10px] text-slate-400">Video Lecture + Interactive Exercise</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">✓ Done</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#0D1117]/60 border border-indigo-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-indigo-500/20 text-indigo-300">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Module 5: ACID Transactions Quiz</p>
                  <p className="text-[10px] text-indigo-300 font-mono">10 Questions • 15 Mins</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold">
                Start Quiz
              </span>
            </div>
          </div>
        </div>
      );

    case 'employee':
      return (
        <div className="w-full bg-[#080A0F] rounded-xl p-4 border border-white/[0.08] text-xs font-sans text-slate-300 select-none">
          {/* Employee Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Users className="w-3.5 h-3.5" /> Staff Roster &amp; Payroll
            </span>
            <span className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20">
              Pay Period: March 2026
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-[#0D1117] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs">
                  BT
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Bethelhem Tadesse</p>
                  <p className="text-[10px] text-slate-400 font-mono">Lead Designer • IT Dept</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Slip Approved
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#0D1117] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs">
                  MA
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Michael Alemu</p>
                  <p className="text-[10px] text-slate-400 font-mono">Senior Accountant • Finance</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-indigo-300 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                Tax Calculated
              </span>
            </div>
          </div>
        </div>
      );

    case 'restaurant':
      return (
        <div className="w-full bg-[#080A0F] rounded-xl p-4 border border-white/[0.08] text-xs font-sans text-slate-300 select-none">
          {/* Restaurant Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Utensils className="w-3.5 h-3.5" /> Table &amp; Kitchen Display
            </span>
            <span className="text-amber-400 font-mono">Dinner Rush Mode</span>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span className="text-[10px] text-emerald-400 block font-mono">T-01 (4 Guests)</span>
              <span className="text-xs font-bold text-emerald-300">Seated</span>
            </div>
            <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-center">
              <span className="text-[10px] text-rose-400 block font-mono">T-02 (2 Guests)</span>
              <span className="text-xs font-bold text-rose-300">Bill Sent</span>
            </div>
            <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06] text-center">
              <span className="text-[10px] text-slate-400 block font-mono">T-03 (6 Guests)</span>
              <span className="text-xs font-bold text-slate-400">Available</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06] flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Kitchen Order Ticket #44: 2x Burger, 1x Pasta</span>
            </div>
            <span className="text-[10px] font-mono text-amber-400 font-semibold">In Prep (6m)</span>
          </div>
        </div>
      );

    case 'portfolio':
      return (
        <div className="w-full bg-[#080A0F] rounded-xl p-4 border border-white/[0.08] text-xs font-sans text-slate-300 select-none">
          {/* Portfolio Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <Code2 className="w-3.5 h-3.5" /> Developer Portfolio System
            </span>
            <span className="text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Lighthouse 100/100
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Localization</span>
              <span className="text-xs font-bold text-white">English / Amharic</span>
            </div>
            <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block">Design Architecture</span>
              <span className="text-xs font-bold text-indigo-300">Dark Bento System</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#0D1117] border border-white/[0.06] flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-mono">Stack: React + TS + Tailwind</span>
            <span className="text-[10px] font-mono text-cyan-400">Zero Bloat</span>
          </div>
        </div>
      );
  }
};
