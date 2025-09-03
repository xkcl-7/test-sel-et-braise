import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { reviewsData, averageRating } from '@/data/reviews';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <div>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <StarRating rating={Math.round(averageRating)} />
          <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
        </div>
        <p className="text-muted-foreground">
          Basé sur {reviewsData.length} avis clients
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviewsData.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <time className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-muted-foreground italic">&ldquo;{review.text}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
