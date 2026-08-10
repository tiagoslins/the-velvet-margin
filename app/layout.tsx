import type { Metadata } from "next";
import "./globals.css";
import "./captacao.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thevelvetmargin.com.br"),
  title: {
    default: "The Velvet Margin | Álbum autoral de Tiago Lins",
    template: "%s | The Velvet Margin",
  },
  description: "The Velvet Margin é um álbum autoral de soul e blues sobre memória, trabalho, resistência e liberdade negra, aprovado no ProAC ICMS.",
  keywords: ["The Velvet Margin", "Tiago Lins", "soul", "blues", "música autoral", "ProAC ICMS", "cultura negra"],
  authors: [{ name: "Tiago Lins" }],
  creator: "Tiago Lins",
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: {
    title: "The Velvet Margin",
    description: "Entre a margem e a liberdade. Conheça o álbum e o projeto cultural aprovado no ProAC ICMS.",
    url: "https://thevelvetmargin.com.br",
    siteName: "The Velvet Margin",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-the-velvet-margin.webp", width: 1200, height: 630, alt: "The Velvet Margin — entre a margem e a liberdade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Velvet Margin",
    description: "Música, memória e resistência em busca de liberdade.",
    images: ["/og-the-velvet-margin.webp"],
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": "https://thevelvetmargin.com.br/#music-group",
      name: "The Velvet Margin",
      url: "https://thevelvetmargin.com.br",
      image: "https://thevelvetmargin.com.br/the-velvet-margin-album.webp",
      genre: ["Soul", "Blues"],
      founder: { "@type": "Person", name: "Tiago Lins" },
      sameAs: [
        "https://open.spotify.com/artist/4ZvGkVJryH92tSpCbEgJyJ",
        "https://music.apple.com/br/album/the-velvet-margin/6790796580",
        "https://music.youtube.com/playlist?list=OLAK5uy_mRDjAPjVRRPtaU5zkH0en4uXhLhHGPcVA",
      ],
    },
    {
      "@type": "MusicAlbum",
      "@id": "https://thevelvetmargin.com.br/album/#album",
      name: "The Velvet Margin",
      albumProductionType: "https://schema.org/StudioAlbum",
      byArtist: { "@id": "https://thevelvetmargin.com.br/#music-group" },
      numTracks: 10,
      image: "https://thevelvetmargin.com.br/the-velvet-margin-album.webp",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
