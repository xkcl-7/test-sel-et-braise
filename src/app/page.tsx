import { Hero } from "@/components/shared/Hero";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { DishCard } from "@/components/shared/DishCard";
import { PhotoGrid } from "@/components/shared/PhotoGrid";
import { ReservationCta } from "@/components/shared/ReservationCta";
import { Reviews } from "@/components/shared/Reviews";
import { MapBlock } from "@/components/shared/MapBlock";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { menuData } from "@/data/menu";
import { Flame, Leaf, Wine } from "lucide-react";

// Featured dishes - first 3 mains
const featuredDishes = menuData.filter(dish => dish.category === 'plats').slice(0, 3);

const usps = [
  {
    icon: Flame,
    title: "Feu de bois",
    description: "Cuisson authentique au feu de bois pour des saveurs uniques"
  },
  {
    icon: Leaf,
    title: "Saisonnalité",
    description: "Produits frais et de saison, sélectionnés avec soin"
  },
  {
    icon: Wine,
    title: "Vins nature",
    description: "Sélection de vins nature et biodynamiques"
  }
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Dishes */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Signatures du Chef</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos plats emblématiques, préparés avec passion et savoir-faire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => {
              const dishImages = [
                '/images/dishes/signature-fish-1600x1600.jpg',
                '/images/dishes/signature-veg-1600x1600.jpg', 
                '/images/dishes/signature-meat-1600x1600.jpg'
              ];
              return (
                <DishCard 
                  key={dish.id} 
                  dish={dish} 
                  showPrice={false}
                  imageUrl={dishImages[index]}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* USPs */}
      <Section background="muted">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usps.map((usp, index) => {
              const Icon = usp.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                  <p className="text-muted-foreground">{usp.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Photo Gallery */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ambiance & Saveurs</h2>
            <p className="text-lg text-muted-foreground">
              Un aperçu de notre univers culinaire
            </p>
          </div>
          
          <PhotoGrid />
        </Container>
      </Section>

      {/* Reservation CTA */}
      <ReservationCta />

      {/* Reviews */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Avis de nos clients</h2>
          </div>
          
          <Reviews />
        </Container>
      </Section>

      {/* Location & Info */}
      <Section background="muted">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nous trouver</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    12 rue des Gravilliers<br />
                    75003 Paris
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+33142742847" className="hover:text-accent transition-colors">
                      01 42 74 28 47
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                  <NewsletterForm />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Localisation</h3>
              <MapBlock />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
