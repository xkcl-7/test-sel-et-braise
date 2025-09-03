import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { Separator } from "@/components/ui/separator";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Mentions légales",
  description: "Mentions légales du restaurant Sel & Braise - Paris 3ème. Informations sur l'éditeur, hébergeur et données personnelles.",
  noIndex: true,
});

export default function MentionsLegalesPage() {
  return (
    <Section padding="xl">
      <Container size="md">
        <div className="prose prose-lg max-w-none">
          <h1>Mentions légales</h1>
          
          <p className="text-muted-foreground">
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
          </p>

          <Separator className="my-8" />

          <h2>Éditeur du site</h2>
          <div className="not-prose bg-muted/30 rounded-lg p-6 my-6">
            <p><strong>Raison sociale :</strong> Sel & Braise SARL</p>
            <p><strong>Adresse :</strong> 12 rue des Gravilliers, 75003 Paris</p>
            <p><strong>Téléphone :</strong> 01 42 74 28 47</p>
            <p><strong>Email :</strong> contact@sel-braise.fr</p>
            <p><strong>SIRET :</strong> 123 456 789 00012</p>
            <p><strong>RCS :</strong> Paris B 123 456 789</p>
            <p><strong>TVA Intracommunautaire :</strong> FR 12 123456789</p>
          </div>

          <p><strong>Directeur de publication :</strong> [Nom du directeur]</p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong><br/>
            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, United States<br/>
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale 
            sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
            reproduction sont réservés, y compris pour les documents téléchargeables 
            et les représentations iconographiques et photographiques.
          </p>

          <p>
            La reproduction de tout ou partie de ce site sur un support quelconque 
            quel qu'il soit est formellement interdite sauf autorisation expresse 
            du directeur de publication.
          </p>

          <h2>Protection des données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) 
            et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, 
            de rectification, de suppression et de portabilité de vos données personnelles.
          </p>

          <h3>Données collectées</h3>
          <p>Les données personnelles collectées sur ce site sont :</p>
          <ul>
            <li>Adresses email via le formulaire de newsletter (facultatif)</li>
            <li>Données de navigation via les cookies techniques</li>
          </ul>

          <h3>Finalité du traitement</h3>
          <p>Ces données sont utilisées pour :</p>
          <ul>
            <li>L'envoi de notre newsletter (avec votre consentement)</li>
            <li>L'amélioration de la navigation sur notre site</li>
            <li>Les statistiques de fréquentation anonymisées</li>
          </ul>

          <h3>Durée de conservation</h3>
          <p>
            Les données sont conservées pour la durée nécessaire à l'accomplissement 
            des finalités pour lesquelles elles ont été collectées, et au maximum 3 ans 
            après le dernier contact.
          </p>

          <h3>Vos droits</h3>
          <p>
            Pour exercer vos droits (accès, rectification, suppression, portabilité), 
            vous pouvez nous contacter à l'adresse : <strong>contact@sel-braise.fr</strong>
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires au bon fonctionnement 
            du site et des cookies de mesure d'audience (si Plausible est configuré).
          </p>

          <p>
            Les cookies techniques ne nécessitent pas de consentement. 
            Les cookies de mesure d'audience sont anonymisés et respectueux de votre vie privée.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible 
            et le site est périodiquement remis à jour, mais peut toutefois contenir 
            des inexactitudes, des omissions ou des lacunes.
          </p>

          <p>
            L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
          </p>

          <h2>Liens hypertextes</h2>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent site web 
            en direction d'autres ressources présentes sur le réseau Internet ne 
            sauraient engager la responsabilité de Sel & Braise SARL.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. 
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>

          <Separator className="my-8" />

          <p className="text-sm text-muted-foreground">
            <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </Container>
    </Section>
  );
}
