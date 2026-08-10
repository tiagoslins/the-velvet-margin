import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "The Velvet Margin | Original album by Tiago Lins" },
  description: "An original soul and blues album about memory, labor, resistance and Black freedom, approved by ProAC ICMS.",
  alternates: { canonical: "/en", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: { locale: "en_US" },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en"><script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='en'" }} />{children}</div>;
}
