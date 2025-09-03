import type { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { generateSEO, generateRestaurantStructuredData } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = generateSEO({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateRestaurantStructuredData()),
          }}
        />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
