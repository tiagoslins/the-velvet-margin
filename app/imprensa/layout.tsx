import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kit de imprensa",
  description: "Baixe release, fotografias, capa do álbum, biografias, ficha técnica, contatos e apresentação comercial de The Velvet Margin.",
  alternates: { canonical: "/imprensa", languages: { "pt-BR": "/imprensa", en: "/en/imprensa" } },
};

export default function PressLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
