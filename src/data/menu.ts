export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  allergens?: string[];
  vegetarian?: boolean;
  category: 'entrees' | 'plats' | 'desserts';
}

export const menuData: MenuItem[] = [
  // Entrées
  {
    id: 'burrata-figues',
    name: 'Burrata aux figues rôties',
    description: 'Figues de Provence rôties au thym, burrata di bufala, roquette sauvage, huile de pistache',
    price: 16,
    allergens: ['lait', 'fruits à coque'],
    vegetarian: true,
    category: 'entrees',
  },
  {
    id: 'carpaccio-saint-jacques',
    name: 'Carpaccio de Saint-Jacques',
    description: 'Noix de Saint-Jacques de plongée, agrumes, caviar d\'Aquitaine, huile de yuzu',
    price: 24,
    allergens: ['poissons', 'mollusques'],
    category: 'entrees',
  },
  {
    id: 'foie-gras-poire',
    name: 'Foie gras poêlé',
    description: 'Foie gras du Périgord, poire williams pochée, pain d\'épices maison',
    price: 28,
    category: 'entrees',
  },

  // Plats
  {
    id: 'loup-fenouil',
    name: 'Loup de ligne grillé',
    description: 'Filet de loup de la côte méditerranéenne, fenouil braisé, vierge d\'olive et citron confit',
    price: 32,
    allergens: ['poissons'],
    category: 'plats',
  },
  {
    id: 'cote-boeuf',
    name: 'Côte de bœuf au feu de bois',
    description: 'Côte de bœuf maturée 28 jours, légumes de saison grillés, jus corsé (pour 2 personnes)',
    price: 89,
    category: 'plats',
  },
  {
    id: 'agneau-herbes',
    name: 'Carré d\'agneau aux herbes',
    description: 'Carré d\'agneau des Pyrénées, croûte d\'herbes fraîches, tian de légumes du soleil',
    price: 36,
    category: 'plats',
  },
  {
    id: 'homard-risotto',
    name: 'Homard bleu au risotto',
    description: 'Homard bleu de Bretagne, risotto à l\'encre de seiche, bisque corsée',
    price: 42,
    allergens: ['crustacés', 'mollusques'],
    category: 'plats',
  },
  {
    id: 'pigeon-cerise',
    name: 'Pigeon aux cerises',
    description: 'Pigeon fermier, cerises griottines, foie gras poêlé, jus au porto',
    price: 38,
    category: 'plats',
  },

  // Desserts
  {
    id: 'soufflé-chocolat',
    name: 'Soufflé au chocolat grand cru',
    description: 'Soufflé au chocolat Valrhona 70%, cœur coulant, glace vanille bourbon',
    price: 14,
    allergens: ['lait', 'œufs', 'gluten'],
    vegetarian: true,
    category: 'desserts',
  },
  {
    id: 'tarte-citron',
    name: 'Tarte au citron revisitée',
    description: 'Pâte sablée aux amandes, crème citron de Menton, meringue italienne flambée',
    price: 12,
    allergens: ['lait', 'œufs', 'gluten', 'fruits à coque'],
    vegetarian: true,
    category: 'desserts',
  },
  {
    id: 'paris-brest-praline',
    name: 'Paris-Brest à la praline',
    description: 'Choux à la praline rose, crème mousseline, éclats de noisettes du Piémont',
    price: 13,
    allergens: ['lait', 'œufs', 'gluten', 'fruits à coque'],
    vegetarian: true,
    category: 'desserts',
  },
];

export const getMenuByCategory = (category: MenuItem['category']) => 
  menuData.filter(item => item.category === category);
