import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Separator } from '@/components/ui/separator';
import { hoursData, formatOpeningHours } from '@/data/hours';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurant Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sel & Braise</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    12 rue des Gravilliers<br />
                    75003 Paris
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>01 42 74 28 47</span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Horaires</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                {hoursData.map((day) => (
                  <div key={day.day} className="flex justify-between">
                    <span>{day.day}</span>
                    <span>{formatOpeningHours(day)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social & Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4 mb-6">
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
              <div className="space-y-2 text-sm">
                <Link 
                  href="/legal/mentions" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mentions légales
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-8" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Sel & Braise. Tous droits réservés.</p>
            <p className="mt-2 sm:mt-0">
              Bistronomie méditerranéenne au feu de bois
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
