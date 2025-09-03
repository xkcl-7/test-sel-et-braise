import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prose } from "./Prose";
import { Callout } from "./Callout";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface HeadingProps {
  children: React.ReactNode;
  id?: string;
  [key: string]: unknown;
}

interface LinkProps {
  href?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

interface CodeProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

interface ImageProps {
  src: string;
  alt?: string;
  [key: string]: unknown;
}

const components = {
  h2: ({ children, id, ...props }: HeadingProps) => (
    <h2 id={id} className="group relative" {...props}>
      {children}
      {id && (
        <Link 
          href={`#${id}`} 
          className="absolute -left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
        >
          #
        </Link>
      )}
    </h2>
  ),
  h3: ({ children, id, ...props }: HeadingProps) => (
    <h3 id={id} className="group relative" {...props}>
      {children}
      {id && (
        <Link 
          href={`#${id}`} 
          className="absolute -left-5 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground text-sm"
        >
          #
        </Link>
      )}
    </h3>
  ),
  img: ({ src, alt, ...props }: ImageProps) => (
    <div className="my-8">
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={400}
        className="rounded-lg shadow-md"
        {...props}
      />
    </div>
  ),
  Callout,
  a: ({ href, children, ...props }: LinkProps) => {
    if (!href) return <span {...props}>{children}</span>;
    
    if (href.startsWith("http")) {
      return (
        <Link 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent font-medium hover:underline"
          {...props}
        >
          {children}
        </Link>
      );
    }
    
    return (
      <Link 
        href={href} 
        className="text-accent font-medium hover:underline"
        {...props}
      >
        {children}
      </Link>
    );
  },
  pre: ({ children, ...props }: CodeProps) => (
    <pre className="bg-muted border rounded-lg p-4 overflow-x-auto text-sm" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }: CodeProps) => (
    <code className="px-1.5 py-0.5 rounded bg-muted text-foreground font-mono text-sm" {...props}>
      {children}
    </code>
  ),
  blockquote: ({ children, ...props }: CodeProps) => (
    <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6" {...props}>
      {children}
    </blockquote>
  ),
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<string, React.ComponentType<any>>;

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <Prose>
      <MDXRemote
        source={source}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        components={components as any}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }]
            ],
          },
        }}
      />
    </Prose>
  );
}
