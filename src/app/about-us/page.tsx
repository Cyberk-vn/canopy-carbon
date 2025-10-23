import { Metadata } from "next";
import { AboutUsClientContent } from "./AboutUsClientContent";

// EXPLICIT metadata export for About Us page
// Following playbook requirement: each page must export metadata explicitly
// This ensures social media bots (Facebook, Telegram, Twitter) can read meta tags from SSR HTML
export const metadata: Metadata = {
  title:
    "About Canopy Carbon | Restoring Ecosystems with Integrity and Purpose",
  description:
    "Learn about Canopy Carbon's mission to create long-term climate impact through science-led, community-aligned nature-based projects. Discover how our structured development sequence ensures measurable outcomes.",
  keywords: [
    "carbon development",
    "ecosystem restoration",
    "sustainable forestry",
    "biodiversity",
    "climate finance",
    "project integrity",
  ],

  // Open Graph metadata for Facebook, LinkedIn, Telegram
  openGraph: {
    type: "website",
    url: "/about-us",
    title:
      "About Canopy Carbon | Restoring Ecosystems with Integrity and Purpose",
    description:
      "Learn about Canopy Carbon's mission to create long-term climate impact through science-led, community-aligned nature-based projects.",
    siteName: "Canopy Carbon",
    images: [
      {
        url: "/about-us/opengraph-image.png", // Relative path - metadataBase will convert to absolute
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "About Canopy Carbon - Restoring Ecosystems with Integrity",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title:
      "About Canopy Carbon | Restoring Ecosystems with Integrity and Purpose",
    description:
      "Learn about Canopy Carbon's mission to create long-term climate impact through science-led, community-aligned nature-based projects.",
    images: ["/about-us/opengraph-image.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "/about-us",
  },
};

// Server Component - ensures metadata is in SSR HTML
export default function AboutUsPage() {
  return <AboutUsClientContent />;
}
