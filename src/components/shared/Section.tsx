import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'none' | 'muted' | 'accent';
}

const paddingClasses = {
  none: '',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-24',
};

const backgroundClasses = {
  none: '',
  muted: 'bg-muted/30',
  accent: 'bg-accent/5',
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
