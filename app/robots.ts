import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: "https://thevelvetmargin.com.br/sitemap.xml",
    host: "https://thevelvetmargin.com.br",
  };
}
