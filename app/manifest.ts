import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Velvet Margin",
    short_name: "Velvet Margin",
    description: "Música, memória e resistência em busca de liberdade.",
    start_url: "/",
    display: "standalone",
    background_color: "#070706",
    theme_color: "#070706",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
