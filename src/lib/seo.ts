import type { Metadata } from 'next';

const siteConfig = {
  name: 'Sel & Braise',
  description: 'Bistronomie méditerranéenne au feu de bois à Paris. Produits de saison, pêche locale, vins nature.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
};

export function generateSEO({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const seoDescription = description || siteConfig.description;
  const seoImage = image || siteConfig.ogImage;

  return {
    title: seoTitle,
    description: seoDescription,
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

export function generateRestaurantStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Sel & Braise',
    description: 'Bistronomie méditerranéenne au feu de bois',
    image: `${siteConfig.url}/images/restaurant-hero.jpg`,
    url: siteConfig.url,
    telephone: '+33142742847',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 rue des Gravilliers',
      addressLocality: 'Paris',
      postalCode: '75003',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8632,
      longitude: 2.3516,
    },
    openingHours: [
      'Tu-Sa 12:00-14:00',
      'Tu-Sa 19:00-23:00',
    ],
    servesCuisine: 'Méditerranéenne',
    hasMenu: `${siteConfig.url}/menu`,
    sameAs: [
      'https://www.instagram.com/selbraise',
      'https://www.facebook.com/selbraise',
    ],
  };
}
