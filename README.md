# Sel & Braise - Restaurant Landing Page

Site web officiel du restaurant Sel & Braise - Bistronomie méditerranéenne au feu de bois à Paris.

## ✨ Features

- 🏠 **Landing Page** moderne avec hero vidéo/image
- 🍽️ **Carte interactive** avec filtres par catégorie
- 📝 **Blog culinaire** en MDX avec articles de saison
- 📞 **Réservations** avec formulaire de contact
- 🖼️ **Galerie photos** optimisées (AVIF/WebP)
- 📱 **Responsive design** mobile-first
- ♿ **Accessibilité** complète (alt texts, navigation clavier)
- 🚀 **Performance** optimisée (Next.js 14+, Tailwind v4)
- 🎨 **Images professionnelles** : 37 photos Unsplash optimisées
- 🌐 **SEO** avancé avec metadata et JSON-LD
- 🇫🇷 **Contenu français** natif avec i18n ready

## 🚀 Stack technique

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Content:** MDX pour le blog
- **Images:** Next.js Image avec optimisation WebP/AVIF
- **SEO:** Metadata API + JSON-LD structuré
- **Package Manager:** pnpm

## 🏗️ Structure du projet

```
├── src/
│   ├── app/                    # App Router pages
│   │   ├── blog/               # Blog MDX
│   │   ├── legal/              # Mentions légales
│   │   ├── menu/               # Carte du restaurant
│   │   └── resa/               # Réservations
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── shared/             # Composants partagés
│   │   └── mdx/                # Composants MDX
│   ├── data/                   # Données statiques
│   ├── lib/                    # Utilitaires
│   └── types/                  # Types TypeScript
├── content/blog/               # Articles MDX
├── public/                     # Assets statiques
└── package.json
```

## 🛠️ Installation

### Prérequis
- Node.js 18+
- pnpm (recommandé)

### Installation
```bash
# Cloner le repo
git clone <your-repo>
cd sel-braise-restaurant

# Installer les dépendances
pnpm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Démarrer en développement
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## ⚙️ Configuration

### Variables d'environnement

Créez un fichier `.env.local` et configurez :

```env
# URL du site (production)
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr

# Widget de réservation (TheFork, Zenchef, etc.)
NEXT_PUBLIC_RESERVATION_IFRAME_URL=https://widget-reservation.com/embed

# Google Maps Embed
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...

# Analytics Plausible (optionnel)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=votre-domaine.fr
```

### Personnalisation du contenu

#### 1. Informations restaurant
Modifiez les données dans `src/data/` :
- `menu.ts` - Carte et plats
- `reviews.ts` - Avis clients  
- `hours.ts` - Horaires d'ouverture

#### 2. Couleurs et design
Modifiez `src/app/globals.css` section `@theme` :
```css
--color-brand-charcoal: #0F0F0F;  /* Fond principal */
--color-brand-sand: #FAF7F2;      /* Texte principal */
--color-brand-terracotta: #C96E4E; /* Couleur accent */
--color-brand-sage: #A3B79F;      /* Couleur muted */
```

#### 3. SEO et JSON-LD
Modifiez `src/lib/seo.ts` pour adapter :
- Nom du restaurant
- Description
- Adresse et coordonnées
- Réseaux sociaux

## 📝 Gestion du blog

### Ajouter un article

1. Créez un fichier `.mdx` dans `content/blog/` :

```mdx
---
title: "Titre de l'article"
description: "Description courte"
date: "2024-02-15"
cover: "/images/blog/mon-article.jpg"
tags: ["cuisine", "recette"]
published: true
---

## Votre contenu en Markdown

Utilisez les composants MDX disponibles :

<Callout type="info" title="Astuce">
Contenu de l'astuce
</Callout>
```

2. Le fichier sera automatiquement détecté et affiché sur `/blog`

### Composants MDX disponibles

- `<Callout>` - Encadrés informatifs
- Images automatiquement optimisées
- Liens avec ancres automatiques
- Code syntax highlighting

## 🖼️ Images ✨

### Structure optimisée (PRODUCTION READY)
```
public/images/
├── hero/                   # Images héro (2 tailles × 3 formats)
│   ├── hero-woodfire-1920x1280.jpg/webp/avif
│   └── hero-woodfire-2400x1600.jpg/webp/avif
├── dishes/                 # Plats signature (2 tailles)
│   ├── signature-fish-1600x1600.jpg
│   ├── signature-veg-1600x1600.jpg
│   └── signature-meat-1600x1600.jpg
├── gallery/                # Galerie restaurant (6 images)
│   ├── gallery-1-1200x800.jpg (plat méditerranéen)
│   ├── gallery-2-1200x800.jpg (ambiance restaurant)
│   ├── gallery-3-1200x800.jpg (feu de bois)
│   ├── gallery-4-1200x800.jpg (cuisson au grill)
│   ├── gallery-5-1200x800.jpg (romarin frais)
│   └── gallery-6-1200x800.jpg (herbes aromatiques)
├── blog/                   # Couvertures articles (1600x900)
│   ├── cover-feu-de-bois-1600x900.jpg
│   ├── cover-saisonnalite-1600x900.jpg
│   └── cover-vins-nature-1600x900.jpg
├── seo/                    # Images réseaux sociaux
│   ├── og-default-1200x630.jpg
│   └── og-square-1200x1200.jpg
├── alt.json               # Descriptions accessibilité (FR)
└── credits.json           # Attributions Unsplash
```

### Optimisations appliquées
- **37 images** professionnelles d'Unsplash (licence commerciale)
- **Formats multiples** : AVIF (60%), WebP (72%), JPEG (78%)
- **Tailles responsive** : Hero (1920×1280, 2400×1600), Plats (1600×1600)
- **Sharp.js pipeline** : Compression optimale sans perte de qualité
- **Métadonnées complètes** : Alt texts français + crédits sources
- **Taille totale** : 8.43 MB seulement pour 37 fichiers optimisés

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Variables d'environnement
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add NEXT_PUBLIC_RESERVATION_IFRAME_URL
# ... autres variables
```

### Build de production
```bash
pnpm build
pnpm start
```

## 🧪 Scripts disponibles

- `pnpm dev` - Serveur de développement
- `pnpm build` - Build de production
- `pnpm start` - Serveur de production
- `pnpm lint` - Linting ESLint
- `pnpm typecheck` - Vérification TypeScript

## 🎨 Personnalisation avancée

### Ajouter des pages
1. Créez un dossier dans `src/app/`
2. Ajoutez `page.tsx` avec la structure :

```tsx
import { generateSEO } from "@/lib/seo";
export const metadata = generateSEO({
  title: "Titre de la page",
  description: "Description"
});

export default function MaPage() {
  return <div>Contenu</div>;
}
```

### Nouveaux composants
Ajoutez vos composants dans `src/components/shared/` en suivant la structure existante.

### Nouveau style
Étendez les tokens Tailwind dans `src/app/globals.css` section `@theme`.

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablette : 768px - 1024px  
- Desktop : > 1024px

## ♿ Accessibilité

- Contrastes WCAG AA respectés
- Navigation clavier complète
- Textes alternatifs sur images
- Landmarks ARIA
- Focus visible sur tous les éléments interactifs

## 🔍 SEO

- Sitemap.xml généré automatiquement
- Robots.txt configuré
- JSON-LD Restaurant pour les rich snippets
- Open Graph et Twitter Cards
- Core Web Vitals optimisés

## 🆘 Support

### Problèmes courants

**Build error avec Tailwind :**
Vérifiez que vous utilisez Tailwind v4 et la syntaxe `@theme`.

**Images ne s'affichent pas :**
Vérifiez que les fichiers sont dans `public/images/` et que les chemins sont corrects.

**Widget de réservation :**
Configurez `NEXT_PUBLIC_RESERVATION_IFRAME_URL` dans `.env.local`.

### Contact
Pour toute question technique, créez une issue GitHub ou contactez l'équipe de développement.

---

**Version:** 1.0.0  
**Licence:** MIT  
**Dernière mise à jour:** Février 2024
