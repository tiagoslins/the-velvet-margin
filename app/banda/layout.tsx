import type { Metadata } from "next";
import "./band-fixes.css";

export const metadata: Metadata = {
  title: "Artistas e equipe",
  description: "Conheça os artistas, músicos e profissionais que dão forma, som e direção ao projeto The Velvet Margin.",
  alternates: { canonical: "/banda", languages: { "pt-BR": "/banda", en: "/en/banda" } },
};

export default function BandLayout({ children }: { children: React.ReactNode }) {
  return children;
}
