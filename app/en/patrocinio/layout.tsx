import type { Metadata } from "next";
import "../../patrocinio/compact-cards.css";
export const metadata: Metadata = { title: "Cultural sponsorship", description: "Explore ProAC ICMS project no. 56889 and sponsorship opportunities for The Velvet Margin.", alternates: { canonical: "/en/patrocinio", languages: { "pt-BR": "/patrocinio", en: "/en/patrocinio" } } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
