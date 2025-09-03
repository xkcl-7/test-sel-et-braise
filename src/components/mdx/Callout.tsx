import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  children: React.ReactNode;
  title?: string;
}

const calloutStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-100',
    icon: Info,
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-100',
    icon: AlertCircle,
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-800 dark:text-red-100',
    icon: XCircle,
  },
  success: {
    container: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-100',
    icon: CheckCircle,
  },
};

export function Callout({ type = 'info', children, title }: CalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div className={cn('border rounded-lg p-4 my-6', style.container)}>
      <div className="flex items-start space-x-3">
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          {title && (
            <div className="font-semibold mb-2">{title}</div>
          )}
          <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
