"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en";
const LanguageContext = createContext<{language: Language; setLanguage: (language: Language) => void}>({language: "pt", setLanguage: () => {}});

const nav = {
  pt: [["Início", "/"], ["Artistas & Equipe", "/banda"], ["O Álbum", "/album"], ["Para empresas", "/patrocinio"], ["Contato", "/contato"]],
  en: [["Home", "/"], ["Artists & Team", "/banda"], ["The Album", "/album"], ["For Companies", "/patrocinio"], ["Contact", "/contato"]],
};

export function useSiteLanguage() { return useContext(LanguageContext); }

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = window.localStorage.getItem("tvm-language");
    if (saved === "en") setLanguageState("en");
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("tvm-language", next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="The Velvet Margin">THE VELVET MARGIN</Link>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /><b>Menu</b></button>
        <div className={`header-panel ${menuOpen ? "open" : ""}`}>
          <nav id="site-nav" aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}>
            {nav[language].map(([label, href]) => <Link className={pathname === href ? "active" : ""} key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          </nav>
          <div className="language-switch" aria-label={language === "pt" ? "Idioma" : "Language"}>
            <button className={language === "pt" ? "active" : ""} onClick={() => setLanguage("pt")}>PT</button><span>/</span>
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <Link className="wordmark" href="/">THE VELVET MARGIN</Link>
        <p>{language === "pt" ? "Da memória nasce a resistência. Da resistência, a liberdade." : "From memory comes resistance. From resistance, freedom."}</p>
        <div><a href="mailto:contato@thevelvetmargin.com.br">contato@thevelvetmargin.com.br</a><a href="https://wa.me/5511958608379" target="_blank" rel="noreferrer">(11) 95860-8379</a><span>© 2026 — {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</span></div>
      </footer>
    </LanguageContext.Provider>
  );
}
