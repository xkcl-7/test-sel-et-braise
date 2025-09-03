import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Separator } from '@/components/ui/separator';
import { hoursData, formatOpeningHours } from '@/data/hours';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-muted/20 to-muted/40 border-t border-border/50">
      <Container size="lg">
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Restaurant Info */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Sel & Braise</h3>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0 text-accent" />
                  <div className="leading-relaxed">
                    12 rue des Gravilliers<br />
                    75003 Paris
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-accent" />
                  <span className="font-medium">01 42 74 28 47</span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Horaires</h3>
              <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                {hoursData.map((day) => (
                  <div key={day.day} className="flex justify-between items-center">
                    <span className="font-medium">{day.day}</span>
                    <span>{formatOpeningHours(day)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social & Links */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Suivez-nous</h3>
              <div className="flex space-x-4 mb-6">
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 hover:bg-accent/10 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 hover:bg-accent/10 rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
              <div className="space-y-2 text-sm sm:text-base">
                <Link 
                  href="/legal/mentions" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 inline-block"
                >
                  Mentions légales
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-8 sm:my-10" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base text-muted-foreground">
            <p className="font-medium">&copy; {currentYear} Sel & Braise. Tous droits réservés.</p>
            <p className="text-center sm:text-right italic">
              Bistronomie méditerranéenne au feu de bois
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
