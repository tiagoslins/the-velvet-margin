import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Velvet Margin — Site Oficial",
  description: "Site oficial da banda The Velvet Margin. Soul, blues e canções autorais entre a margem e a liberdade.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
