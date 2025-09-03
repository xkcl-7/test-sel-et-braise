import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateSEO } from "@/lib/seo";
import { hoursData, formatOpeningHours } from "@/data/hours";
import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Réserver une table",
  description: "Réservez votre table au restaurant Sel & Braise. Bistronomie méditerranéenne dans le Marais. Réservation en ligne ou par téléphone.",
});

export default function ReservationPage() {
  const iframeUrl = process.env.NEXT_PUBLIC_RESERVATION_IFRAME_URL;

  return (
    <>
      {/* Hero Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Réserver une table</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Rejoignez-nous pour une expérience culinaire méditerranéenne unique
            </p>
          </div>
        </Container>
      </Section>

      {/* Reservation Widget */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reservation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Réservation en ligne</CardTitle>
                </CardHeader>
                <CardContent>
                  {iframeUrl ? (
                    <div className="w-full h-[600px] rounded-lg overflow-hidden">
                      <iframe
                        src={iframeUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Widget de réservation"
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="bg-muted rounded-lg p-8 text-center">
                      <h3 className="text-lg font-semibold mb-4">Widget de réservation</h3>
                      <p className="text-muted-foreground mb-6">
                        Le widget de réservation n'est pas encore configuré. 
                        Pour activer la réservation en ligne, ajoutez votre URL 
                        TheFork/Zenchef dans la variable d'environnement 
                        <code className="bg-background px-2 py-1 rounded text-sm">
                          NEXT_PUBLIC_RESERVATION_IFRAME_URL
                        </code>
                      </p>
                      <div className="space-y-4">
                        <Button asChild size="lg">
                          <Link href="tel:+33142742847">
                            <Phone className="w-4 h-4 mr-2" />
                            Appeler le 01 42 74 28 47
                          </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          Réservation par téléphone recommandée
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Restaurant Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <Link 
                        href="tel:+33142742847" 
                        className="text-accent hover:underline"
                      >
                        01 42 74 28 47
                      </Link>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Réservation recommandée</p>
                      <p className="text-sm text-muted-foreground">
                        Pour garantir votre table, nous vous conseillons 
                        de réserver à l'avance, particulièrement le week-end.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Horaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {hoursData.map((day) => (
                      <div key={day.day} className="flex justify-between text-sm">
                        <span className={day.closed ? 'text-muted-foreground' : ''}>{day.day}</span>
                        <span className={day.closed ? 'text-muted-foreground' : ''}>
                          {formatOpeningHours(day)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>12 rue des Gravilliers</p>
                    <p>75003 Paris</p>
                    <p className="text-sm text-muted-foreground">
                      Métro : Arts-et-Métiers (ligne 3, 11)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional Info */}
      <Section background="muted">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Informations utiles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-3">Groupes et événements</h3>
                <p className="text-muted-foreground mb-4">
                  Pour les groupes de plus de 8 personnes ou pour organiser un événement privé, 
                  contactez-nous directement par téléphone.
                </p>
                <p className="text-muted-foreground">
                  Nous proposons des menus sur mesure et pouvons privatiser une partie 
                  du restaurant selon vos besoins.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Annulation</h3>
                <p className="text-muted-foreground mb-4">
                  En cas d'empêchement, merci de nous prévenir au moins 2 heures à l'avance.
                </p>
                <p className="text-muted-foreground">
                  Nous comprenons que les imprévus arrivent et ferons notre possible 
                  pour vous proposer une nouvelle date.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
