import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';

export function ReservationCta() {
  return (
    <Section background="accent" padding="lg">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Réservez votre table
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Découvrez notre cuisine méditerranéenne dans une ambiance chaleureuse. 
            Réservation recommandée pour garantir votre place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/resa">
                Réserver en ligne
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="tel:+33142742847">
                01 42 74 28 47
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
