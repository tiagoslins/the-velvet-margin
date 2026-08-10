import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact", description: "Contact The Velvet Margin for press, performances, partnerships and cultural sponsorship.", alternates: { canonical: "/en/contato", languages: { "pt-BR": "/contato", en: "/en/contato" } } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
