import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MDXContent } from "@/components/mdx/MDXContent";
import { generateSEO } from "@/lib/seo";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/mdx";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {};
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    image: post.cover,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same tags, excluding current)
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug)
    .filter(p => p.tags?.some(tag => post.tags?.includes(tag)))
    .slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <Section padding="xl">
        <Container size="md">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Link>
            </Button>
            
            <div className="space-y-4">
              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>
                    {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                  </time>
                </div>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
              
              {/* Description */}
              {post.description && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              )}
            </div>
          </div>

          {/* Cover Image */}
          {post.cover && (
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-12">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
        </Container>
      </Section>

      {/* Article Content */}
      <Section>
        <Container size="md">
          <article className="prose prose-lg max-w-none">
            <MDXContent source={post.content} />
          </article>
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <>
          <Separator className="my-12" />
          
          <Section>
            <Container size="md">
              <h2 className="text-2xl font-bold mb-8">Articles similaires</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug} 
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="border rounded-lg p-6 transition-shadow group-hover:shadow-md">
                      {relatedPost.cover && (
                        <div className="relative h-32 rounded-md overflow-hidden mb-4">
                          <Image
                            src={relatedPost.cover}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      
                      <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.description}
                      </p>
                      
                      <time className="text-xs text-muted-foreground mt-3 block">
                        {format(new Date(relatedPost.date), "d MMMM yyyy", { locale: fr })}
                      </time>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        </>
      )}
    </>
  );
}
