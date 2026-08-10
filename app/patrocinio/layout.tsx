import type { Metadata } from "next";
import "./compact-cards.css";

export const metadata: Metadata = {
  title: "Patrocínio cultural",
  description: "Conheça o projeto ProAC ICMS nº 56889 e as oportunidades de patrocínio cultural de The Velvet Margin.",
  alternates: { canonical: "/patrocinio", languages: { "pt-BR": "/patrocinio", en: "/en/patrocinio" } },
};

export default function SponsorshipLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
