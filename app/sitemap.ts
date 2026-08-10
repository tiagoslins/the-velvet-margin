import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://thevelvetmargin.com.br";
const routes = ["", "/banda", "/album", "/patrocinio", "/imprensa", "/contato"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-10T00:00:00-03:00");
  return routes.flatMap((route, index) => [
    { url: `${baseUrl}${route || "/"}`, lastModified, changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : 0.8 },
    { url: `${baseUrl}/en${route}`, lastModified, changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 0.9 : 0.7 },
  ]);
}
