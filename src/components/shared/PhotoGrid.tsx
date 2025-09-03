import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/gallery/gallery-1-1200x800.jpg',
    alt: 'Plat méditerranéen grillé au feu de bois avec légumes de saison colorés',
  },
  {
    src: '/images/gallery/gallery-2-1200x800.jpg',
    alt: 'Ambiance chaleureuse du restaurant avec éclairage tamisé',
  },
  {
    src: '/images/gallery/gallery-3-1200x800.jpg',
    alt: 'Flammes dansantes du feu de bois dans la cheminée du restaurant',
  },
  {
    src: '/images/gallery/gallery-4-1200x800.jpg',
    alt: 'Cuisson au grill avec saucisses artisanales et légumes frais',
  },
  {
    src: '/images/gallery/gallery-5-1200x800.jpg',
    alt: 'Romarin frais et herbes aromatiques de Provence',
  },
  {
    src: '/images/gallery/gallery-6-1200x800.jpg',
    alt: 'Fines herbes et aromates du jardin méditerranéen',
  },
];

export function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((image, index) => (
        <div 
          key={index} 
          className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
