import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'none' | 'muted' | 'accent';
}

const paddingClasses = {
  none: '',
  sm: 'py-6 sm:py-8',
  md: 'py-8 sm:py-12 lg:py-16',
  lg: 'py-12 sm:py-16 lg:py-20 xl:py-24',
  xl: 'py-16 sm:py-20 lg:py-24 xl:py-32',
};

const backgroundClasses = {
  none: '',
  muted: 'bg-gradient-to-b from-muted/20 to-muted/40',
  accent: 'bg-gradient-to-b from-accent/5 to-accent/10',
};

export function Section({ 
  children, 
  className, 
  padding = 'lg',
  background = 'none' 
}: SectionProps) {
  return (
    <section className={cn(
      paddingClasses[padding],
      backgroundClasses[background],
      className
    )}>
      {children}
    </section>
  );
}
