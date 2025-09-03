import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { MenuItem } from '@/data/menu';

interface DishCardProps {
  dish: MenuItem;
  showPrice?: boolean;
  imageUrl?: string;
}

export function DishCard({ dish, showPrice = true, imageUrl }: DishCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
      {imageUrl && (
        <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={dish.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <CardContent className="p-4 sm:p-5 lg:p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight pr-2">
            {dish.name}
          </h3>
          {showPrice && (
            <span className="text-lg sm:text-xl font-bold text-accent shrink-0">
              {dish.price}€
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
          {dish.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {dish.vegetarian && (
            <Badge variant="secondary" className="text-xs sm:text-sm font-medium px-2 py-1">
              Végétarien
            </Badge>
          )}
          {dish.allergens && dish.allergens.length > 0 && (
            <Badge variant="outline" className="text-xs sm:text-sm font-medium px-2 py-1">
              Allergènes: {dish.allergens.join(', ')}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
