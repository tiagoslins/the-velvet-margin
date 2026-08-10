import type { Metadata } from "next";
export const metadata: Metadata = { title: "The album", description: "Explore the concept, ten tracks and music previews from The Velvet Margin.", alternates: { canonical: "/en/album", languages: { "pt-BR": "/album", en: "/en/album" } } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
