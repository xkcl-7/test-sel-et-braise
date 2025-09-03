import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-woodfire-1920x1280.jpg"
          alt="Feu de bois crépitant dans la cheminée du restaurant Sel & Braise"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sel & Braise
          </h1>
          <p className="text-xl sm:text-2xl mb-4 opacity-90">
            Bistronomie méditerranéenne au feu de bois
          </p>
          <p className="text-lg mb-8 opacity-75 max-w-2xl mx-auto">
            Produits de saison, pêche locale, vins nature dans le cœur du Marais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/resa">
                Réserver une table
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
              <Link href="/menu">
                Voir la carte
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
