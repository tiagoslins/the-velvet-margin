import type { Metadata } from "next";
export const metadata: Metadata = { title: "Press kit", description: "Download The Velvet Margin release, photographs, artwork, biographies, credits, contacts and sponsorship deck.", alternates: { canonical: "/en/imprensa", languages: { "pt-BR": "/imprensa", en: "/en/imprensa" } } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
