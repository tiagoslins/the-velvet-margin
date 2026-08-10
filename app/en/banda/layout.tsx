import type { Metadata } from "next";
import "../../banda/band-fixes.css";
export const metadata: Metadata = { title: "Artists and team", description: "Meet the artists, musicians and professionals behind The Velvet Margin.", alternates: { canonical: "/en/banda", languages: { "pt-BR": "/banda", en: "/en/banda" } } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
