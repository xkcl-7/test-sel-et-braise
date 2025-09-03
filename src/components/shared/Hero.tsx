import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';

export function Hero() {
  return (
    <section className="relative min-h-[100vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <Container className="relative z-10" size="lg">
        <div className="text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Sel & Braise
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-4 opacity-90 font-medium">
              Bistronomie méditerranéenne au feu de bois
            </p>
            <p className="text-base sm:text-lg lg:text-xl opacity-75 max-w-2xl mx-auto leading-relaxed">
              Produits de saison, pêche locale, vins nature dans le cœur du Marais
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base sm:text-lg px-8 py-4 h-auto shadow-2xl hover:shadow-3xl transition-all duration-300">
                <Link href="/resa">
                  Réserver une table
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
              >
                <Link href="/menu">
                  Voir la carte
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
