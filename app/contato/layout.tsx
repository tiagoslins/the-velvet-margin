import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com The Velvet Margin para imprensa, apresentações, parcerias e patrocínio cultural.",
  alternates: { canonical: "/contato", languages: { "pt-BR": "/contato", en: "/en/contato" } },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
