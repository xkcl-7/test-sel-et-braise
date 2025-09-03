export interface MDXFrontMatter {
  title: string;
  description: string;
  date: string;
  cover?: string;
  tags?: string[];
  published?: boolean;
}

export interface BlogPost extends MDXFrontMatter {
  slug: string;
  content: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
