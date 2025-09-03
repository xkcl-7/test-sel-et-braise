import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { DishCard } from "@/components/shared/DishCard";
import { Separator } from "@/components/ui/separator";
import { generateSEO } from "@/lib/seo";
import { getMenuByCategory } from "@/data/menu";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Notre Carte",
  description: "Découvrez notre carte de bistronomie méditerranéenne : entrées, plats au feu de bois, desserts créatifs. Cuisine de saison avec produits frais et locaux.",
});

const menuCategories = [
  {
    id: 'entrees',
    name: 'Entrées',
    description: 'Pour commencer en douceur',
  },
  {
    id: 'plats', 
    name: 'Plats',
    description: 'Nos créations au feu de bois',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'La note sucrée finale',
  },
] as const;

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Notre Carte</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Une cuisine méditerranéenne authentique, sublimée par la cuisson au feu de bois
            </p>
            <p className="text-muted-foreground">
              Nos plats sont préparés avec des produits de saison, 
              sélectionnés auprès de producteurs locaux pour vous garantir 
              fraîcheur et saveurs authentiques.
            </p>
          </div>
        </Container>
      </Section>

      {/* Menu Sections */}
      {menuCategories.map((category, categoryIndex) => {
        const dishes = getMenuByCategory(category.id);
        
        return (
          <Section key={category.id} background={categoryIndex % 2 === 1 ? "muted" : "none"}>
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} showPrice={true} />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Allergies & Info */}
      <Section background="accent" padding="lg">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Informations importantes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-3">Allergènes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tous nos plats peuvent contenir des traces d'allergènes. 
                  N'hésitez pas à signaler vos allergies à notre équipe.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Principales allergènes présents :</strong> Gluten, Œufs, Lait, 
                  Poissons, Crustacés, Mollusques, Fruits à coque, Graines de sésame.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Nos engagements</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Produits de saison et locaux</li>
                  <li>• Pêche durable et responsable</li>
                  <li>• Viandes issues d'élevages français</li>
                  <li>• Vins nature et biodynamiques</li>
                  <li>• Cuisson au feu de bois traditionnel</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <p className="text-sm text-muted-foreground">
              Les prix sont indiqués en euros, service compris. 
              Notre carte évolue selon les saisons et les arrivages.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
