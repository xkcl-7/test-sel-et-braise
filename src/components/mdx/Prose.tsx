import { cn } from '@/lib/utils';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        'prose prose-gray dark:prose-invert max-w-none',
        // Headings
        'prose-headings:scroll-mt-20 prose-headings:font-semibold',
        'prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6',
        'prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8',
        'prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6',
        // Links
        'prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline',
        // Lists
        'prose-ul:my-4 prose-li:my-1',
        'prose-ol:my-4',
        // Code
        'prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:bg-muted prose-code:text-foreground prose-code:font-mono prose-code:text-sm',
        'prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg prose-pre:p-4',
        // Blockquotes
        'prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground',
        // Tables
        'prose-table:table-auto prose-table:border-collapse',
        'prose-th:border prose-th:border-muted prose-th:bg-muted/50 prose-th:px-3 prose-th:py-2',
        'prose-td:border prose-td:border-muted prose-td:px-3 prose-td:py-2',
        // Images
        'prose-img:rounded-lg prose-img:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}
