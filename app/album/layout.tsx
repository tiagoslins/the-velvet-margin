import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O álbum",
  description: "Conheça o conceito, as dez faixas e as prévias musicais do álbum autoral The Velvet Margin.",
  alternates: { canonical: "/album", languages: { "pt-BR": "/album", en: "/en/album" } },
};

export default function AlbumLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
