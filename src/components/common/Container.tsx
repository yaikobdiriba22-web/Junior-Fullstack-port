import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  const sizeMap = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-8xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeMap[size], className)}>
      {children}
    </div>
  );
};
