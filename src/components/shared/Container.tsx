import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const containerSizes = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl', 
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-[1440px]', // Professional max-width standard
};

export function Container({ children, className, size = 'full' }: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16',
      containerSizes[size], 
      className
    )}>
      {children}
    </div>
  );
}
