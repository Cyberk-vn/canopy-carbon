import { Metadata, Viewport } from "next";
import { SEO_CONFIG, PAGE_SEO, PageKey } from "./seo-config";

/**
 * Page-specific theme colors matching each page's primary background
 * These colors will appear in the browser chrome (address bar, task switcher)
 */
const PAGE_THEME_COLORS: Record<PageKey, string> = {
  home: "#010101", // Warm off-white (matches main wrapper)
  aboutUs: "#E8E8E8", // Pure white (clean, professional)
  ourProjects: "#242A26", // Dark blue-green charcoal (unique dark theme)
  insights: "#E8E9EB", // Pure white (content-focused)
  contactUs: "#FFFFFF", // Pure white (approachable)
};

/**
 * Generate complete metadata for a page
 * @param pageKey - The page identifier from PAGE_SEO
 * @param customizations - Optional metadata overrides
 * @returns Next.js Metadata object
 */
export const generateMetadata = (
  pageKey: PageKey,
  customizations?: Partial<Metadata>
): Metadata => {
  const pageData = PAGE_SEO[pageKey];
  const canonicalUrl = `${SEO_CONFIG.siteUrl}${getPagePath(pageKey)}`;
  const pagePath = getPagePath(pageKey);

  // Use opengraph-image.png if it exists, otherwise use config path
  const ogImageUrl =
    pagePath === "/"
      ? `${SEO_CONFIG.siteUrl}/opengraph-image.png`
      : `${SEO_CONFIG.siteUrl}${pagePath}/opengraph-image.png`;

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,

    // Robots meta tags
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Open Graph metadata
    openGraph: {
      type: "website",
      locale: SEO_CONFIG.locale,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      title: pageData.title,
      description: pageData.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: pageData.title,
          type: "image/png",
        },
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [ogImageUrl],
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Additional metadata
    authors: [{ name: SEO_CONFIG.organization.name }],
    creator: SEO_CONFIG.organization.name,
    publisher: SEO_CONFIG.organization.name,

    // Merge custom metadata
    ...customizations,
  };
};

/**
 * Get the URL path for a given page key
 */
const getPagePath = (pageKey: PageKey): string => {
  const paths: Record<PageKey, string> = {
    home: "/",
    aboutUs: "/about-us",
    ourProjects: "/our-project",
    insights: "/canopy-insight",
    contactUs: "/contact-us",
  };

  return paths[pageKey];
};

/**
 * Generate viewport configuration for a page
 * @param pageKey - The page identifier from PAGE_SEO
 * @returns Next.js Viewport object with page-specific theme color
 */
export const generateViewport = (pageKey: PageKey): Viewport => {
  return {
    themeColor: PAGE_THEME_COLORS[pageKey],
  };
};

/**
 * Generate metadata for the root layout
 */
export const generateRootMetadata = (): Metadata => {
  return {
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    title: {
      default: SEO_CONFIG.defaultTitle,
      template: SEO_CONFIG.titleTemplate,
    },
    description: SEO_CONFIG.siteDescription,
    keywords: SEO_CONFIG.defaultKeywords,

    // Application name
    applicationName: SEO_CONFIG.siteName,

    // Icons
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "96x96", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },

    // Manifest
    manifest: "/manifest.webmanifest",

    // Verification (add your verification codes when available)
    verification: {
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },

    // Open Graph
    openGraph: {
      type: "website",
      locale: SEO_CONFIG.locale,
      url: SEO_CONFIG.siteUrl,
      siteName: SEO_CONFIG.siteName,
      title: SEO_CONFIG.defaultTitle,
      description: SEO_CONFIG.siteDescription,
      images: [
        {
          ...SEO_CONFIG.defaultOGImage,
          type: "image/png",
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: SEO_CONFIG.defaultTitle,
      description: SEO_CONFIG.siteDescription,
      images: [SEO_CONFIG.defaultOGImage.url],
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
