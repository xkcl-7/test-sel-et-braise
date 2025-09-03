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
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={dish.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-foreground">{dish.name}</h3>
          {showPrice && (
            <span className="text-lg font-semibold text-accent ml-2">
              {dish.price}€
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {dish.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {dish.vegetarian && (
            <Badge variant="secondary" className="text-xs">
              Végétarien
            </Badge>
          )}
          {dish.allergens && dish.allergens.length > 0 && (
            <Badge variant="outline" className="text-xs">
              Allergènes: {dish.allergens.join(', ')}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
