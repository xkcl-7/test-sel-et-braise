'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi - remplacez par votre logique d'inscription
    setIsSubmitted(true);
    setEmail('');
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Restez informé</CardTitle>
        <p className="text-muted-foreground">
          Recevez nos actualités, nouveautés de saison et événements spéciaux
        </p>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="text-center py-4">
            <p className="text-green-600 font-medium">
              ✓ Merci pour votre inscription !
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">S&apos;inscrire</Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
