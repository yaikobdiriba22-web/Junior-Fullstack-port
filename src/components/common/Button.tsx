import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  as = 'button',
  href,
  target,
  rel,
  download,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-xl';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 font-semibold',
    md: 'px-5 py-2.5 text-sm gap-2 font-semibold',
    lg: 'px-6 py-3 text-base gap-2.5 font-bold',
  };

  const variantStyles = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 active:scale-[0.98] border border-indigo-400/20 font-bold',
    secondary:
      'bg-white/5 hover:bg-white/10 text-white border border-white/10 shadow-sm active:scale-[0.98] font-bold backdrop-blur-md',
    outline:
      'bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-[0.98] font-bold backdrop-blur-md',
    ghost:
      'bg-transparent hover:bg-white/10 text-slate-300 hover:text-white active:scale-[0.98]',
    glow: 'bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 border border-white/20 active:scale-[0.98] font-bold',
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
