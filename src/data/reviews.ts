export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    rating: 5,
    text: 'Une expérience culinaire exceptionnelle ! Le loup grillé était parfaitement cuit et les saveurs méditerranéennes sublimes. Service impeccable.',
    date: '2024-02-15',
  },
  {
    id: '2', 
    name: 'Thomas Martin',
    rating: 5,
    text: 'Découverte magnifique dans le Marais. La côte de bœuf au feu de bois était un délice, accompagnée d\'une sélection de vins nature remarquable.',
    date: '2024-02-08',
  },
  {
    id: '3',
    name: 'Sophie Laurent',
    rating: 4,
    text: 'Ambiance chaleureuse et cuisine raffinée. Le soufflé au chocolat était divin ! Parfait pour un dîner romantique.',
    date: '2024-01-28',
  },
];

export const averageRating = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length;
