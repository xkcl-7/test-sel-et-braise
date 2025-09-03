import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Blog",
  description: "Actualités, recettes et secrets de cuisine méditerranéenne. Découvrez les coulisses du restaurant Sel & Braise et nos conseils culinaires.",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Le Blog de Sel & Braise</h1>
            <p className="text-xl text-muted-foreground">
              Découvrez nos actualités, recettes et secrets de cuisine méditerranéenne
            </p>
          </div>
        </Container>
      </Section>

      {/* Blog Posts */}
      <Section>
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-6">
                Aucun article disponible pour le moment.
              </p>
              <p className="text-muted-foreground">
                Revenez bientôt pour découvrir nos actualités et conseils culinaires !
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full transition-shadow duration-300 group-hover:shadow-lg">
                    {post.cover && (
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={post.cover}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    
                    <CardHeader className="space-y-4">
                      <div>
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <time className="text-xs text-muted-foreground">
                          {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                        </time>
                        
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
