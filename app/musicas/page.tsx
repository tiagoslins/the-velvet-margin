"use client";

import Link from "next/link";
import { useEffect } from "react";
import { SiteShell, useSiteLanguage } from "../components/SiteShell";

export default function MusicPage() {
  return <SiteShell><MusicRedirect /></SiteShell>;
}

function MusicRedirect() {
  const { language } = useSiteLanguage();
  const pt = language === "pt";
  const albumPath = `${pt ? "" : "/en"}/album/#previews`;

  useEffect(() => {
    window.location.replace(albumPath);
  }, [albumPath]);

  return <main className="inner-page press-page"><header className="press-page-header"><p className="kicker">{pt ? "ÁLBUM E MÚSICAS" : "ALBUM AND MUSIC"}</p><h1>{pt ? "As músicas agora fazem parte da página do álbum." : "Music is now part of the album page."}</h1><p>{pt ? "Você será direcionado automaticamente para as prévias." : "You will be redirected automatically to the previews."}</p><Link className="button button-gold" href={albumPath}>{pt ? "Ir para as prévias" : "Go to previews"}</Link></header></main>;
}
