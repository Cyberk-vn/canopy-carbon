import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/src/lib/seo/seo-config";

/**
 * Generate Web App Manifest
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_CONFIG.siteName,
    short_name: "Canopy",
    description: SEO_CONFIG.siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2D5A3D", // Canopy green color
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "sustainability", "environment"],
    lang: "en",
    dir: "ltr",
  };
}
