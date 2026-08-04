import type { Metadata } from "next";
import "./globals.css";
import "./captacao.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thevelvetmargin.com.br"),
  title: "The Velvet Margin | Álbum autoral de Tiago Lins",
  description: "The Velvet Margin é um álbum autoral de soul e blues sobre memória, trabalho, resistência e liberdade negra, aprovado no ProAC ICMS.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Velvet Margin",
    description: "Entre a margem e a liberdade. Conheça o álbum e o projeto cultural aprovado no ProAC ICMS.",
    url: "https://thevelvetmargin.com.br",
    siteName: "The Velvet Margin",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/the-velvet-margin-album.webp", width: 1200, height: 1200, alt: "Capa do álbum The Velvet Margin" }],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
