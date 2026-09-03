import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'indigo' | 'cyan' | 'emerald' | 'amber' | 'slate' | 'rose';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'indigo',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    indigo: 'bg-white/5 text-indigo-300 border-indigo-500/20',
    cyan: 'bg-white/5 text-cyan-300 border-cyan-500/20',
    emerald: 'bg-white/5 text-emerald-300 border-emerald-500/20',
    amber: 'bg-white/5 text-amber-300 border-amber-500/20',
    slate: 'bg-white/5 text-slate-300 border-white/10',
    rose: 'bg-white/5 text-rose-300 border-rose-500/20',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[10px] font-medium',
    md: 'px-3 py-1 text-xs font-semibold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border backdrop-blur-xs transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
