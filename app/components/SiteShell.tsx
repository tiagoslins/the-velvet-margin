"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en";
const LanguageContext = createContext<{language: Language; setLanguage: (language: Language) => void}>({language: "pt", setLanguage: () => {}});

const nav = {
  pt: [["Início", "/"], ["Artistas & Equipe", "/banda"], ["O Álbum", "/album"], ["Para empresas", "/patrocinio"], ["Imprensa", "/imprensa"], ["Contato", "/contato"]],
  en: [["Home", "/en"], ["Artists & Team", "/en/banda"], ["The Album", "/en/album"], ["For Companies", "/en/patrocinio"], ["Press", "/en/imprensa"], ["Contact", "/en/contato"]],
};

export function useSiteLanguage() { return useContext(LanguageContext); }

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const language: Language = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
  const homePath = language === "en" ? "/en" : "/";

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const setLanguage = (next: Language) => {
    if (next === language) return;
    const portuguesePath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    router.push(next === "en" ? `/en${portuguesePath === "/" ? "" : portuguesePath}` : portuguesePath);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <header className="site-header">
        <Link className="wordmark" href={homePath} aria-label="The Velvet Margin">THE VELVET MARGIN</Link>
        <button className="menu-button" type="button" aria-label={language === "pt" ? "Abrir menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /><b>Menu</b></button>
        <div className={`header-panel ${menuOpen ? "open" : ""}`}>
          <nav id="site-nav" aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}>
            {nav[language].map(([label, href]) => <Link className={pathname === href || pathname === `${href}/` ? "active" : ""} key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          </nav>
          <div className="language-switch" aria-label={language === "pt" ? "Idioma" : "Language"}>
            <button className={language === "pt" ? "active" : ""} onClick={() => setLanguage("pt")}>PT</button><span>/</span>
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <Link className="wordmark" href={homePath}>THE VELVET MARGIN</Link>
        <p>{language === "pt" ? "Da memória nasce a resistência. Da resistência, a liberdade." : "From memory comes resistance. From resistance, freedom."}</p>
        <div><a href="mailto:thevelvetmargin@hotmail.com">thevelvetmargin@hotmail.com</a><a href="https://wa.me/5511958608379" target="_blank" rel="noreferrer">(11) 95860-8379</a><span>© 2026 — {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</span></div>
      </footer>
    </LanguageContext.Provider>
  );
}
