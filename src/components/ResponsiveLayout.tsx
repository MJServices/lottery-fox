import { ReactNode } from 'react';

interface ResponsiveLayoutProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | 'full';
  padding?: boolean;
}

export default function ResponsiveLayout({ 
  children, 
  className = '', 
  maxWidth = '7xl',
  padding = true 
}: ResponsiveLayoutProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    '8xl': 'max-w-8xl',
    '9xl': 'max-w-9xl',
    'full': 'max-w-full'
  };

  const paddingClasses = padding 
    ? 'px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12' 
    : '';

  return (
    <div className={`w-full ${maxWidthClasses[maxWidth]} mx-auto ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
}