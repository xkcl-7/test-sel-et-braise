export function MapBlock() {
  const mapUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL;
  
  if (!mapUrl) {
    return (
      <div className="bg-muted rounded-lg p-8 text-center">
        <p className="text-muted-foreground">
          Carte non disponible - Configurez NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL dans votre fichier .env.local
        </p>
        <div className="mt-4">
          <p className="font-semibold">Adresse :</p>
          <p>12 rue des Gravilliers, 75003 Paris</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 rounded-lg overflow-hidden">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation du restaurant Sel & Braise"
      />
    </div>
  );
}
