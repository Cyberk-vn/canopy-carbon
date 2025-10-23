/**
 * SEO Configuration for Canopy Carbon
 * Central configuration for all SEO-related metadata and structured data
 */

/**
 * Get the base URL based on the environment
 * Supports both production and Vercel preview deployments
 */
const getBaseUrl = (): string => {
  // Check for Vercel environment variables
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  // Check for custom environment variable
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Default to production URL
  return "https://www.canopycarbon.org";
};

const BASE_URL = getBaseUrl();

export const SEO_CONFIG = {
  // Base configuration
  siteUrl: BASE_URL,
  siteName: "Canopy Carbon",
  siteDescription:
    "Canopy Carbon pioneers large-scale, high-integrity nature-based carbon projects. We restore ecosystems, empower communities, and deliver measurable climate impact for a resilient future.",

  // Default metadata
  defaultTitle:
    "Canopy Carbon – Building Climate Infrastructure Through Nature-Based Solutions",
  titleTemplate: "%s | Canopy Carbon",

  // Organization information
  organization: {
    name: "Canopy Carbon",
    legalName: "Canopy Carbon",
    url: BASE_URL,
    logo: `${BASE_URL}/assets/banner-shared-component/logo.png`,
    description:
      "A Climate Infrastructure Company Specialising in Nature-Based Solutions.",
    foundingDate: "2025",

    // Contact information (add when available)
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@canopycarbon.org", // Update with actual email
    },

    // Social media profiles (add when available)
    sameAs: [
      // "https://www.linkedin.com/company/canopy-carbon",
      // "https://twitter.com/canopycarbon",
    ],
  },

  // Default Open Graph image
  defaultOGImage: {
    url: `${BASE_URL}/assets/banner-shared-component/logo.png`,
    width: 1200,
    height: 630,
    alt: "Canopy Carbon - Nature-Based Climate Solutions",
  },

  // Language and locale
  locale: "en_US",
  language: "en",

  // Keywords
  defaultKeywords: [
    "carbon credits",
    "nature-based solutions",
    "climate infrastructure",
    "reforestation",
    "wetland restoration",
    "sustainability",
    "carbon offset projects",
    "afforestation",
    "REDD+",
    "biochar",
    "ecosystem restoration",
  ],
};

/**
 * Page-specific SEO data based on the provided SEO content
 */
export const PAGE_SEO = {
  home: {
    title:
      "Canopy Carbon – Building Climate Infrastructure Through Nature-Based Solutions",
    description:
      "Canopy Carbon pioneers large-scale, high-integrity nature-based carbon projects. We restore ecosystems, empower communities, and deliver measurable climate impact for a resilient future.",
    keywords: [
      "carbon credits",
      "nature-based solutions",
      "climate infrastructure",
      "reforestation",
      "wetland restoration",
      "sustainability",
      "carbon offset projects",
    ],
    ogImage: "/assets/banner-shared-component/logo.png",
  },

  aboutUs: {
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
    ogImage: "/assets/about-us/contact-us-banner-bg-image.png",
  },

  ourProjects: {
    title: "Canopy Carbon Projects | High-Integrity Nature-Based Carbon Assets",
    description:
      "Explore Canopy Carbon's portfolio of afforestation, reforestation, wetland restoration, and conservation initiatives. Each project is engineered for long-term climate resilience and verified carbon integrity.",
    keywords: [
      "carbon offset projects",
      "reforestation",
      "wetland conservation",
      "biochar",
      "climate finance",
      "carbon portfolio",
    ],
    ogImage: "/assets/our-project/portfolio/canopy-portfolio-bg-image.png",
  },

  insights: {
    title:
      "Canopy Insights | Thought Leadership in Nature-Based Climate Solutions",
    description:
      "Canopy Carbon shares data-driven insights on climate strategy, carbon offset innovation, and sustainable investment. Explore how integrity-led projects redefine the path to net zero.",
    keywords: [
      "climate insights",
      "carbon offset strategy",
      "net zero",
      "climate finance",
      "sustainability thought leadership",
    ],
    ogImage: "/assets/canopy-insight/banner-background-image.png",
  },

  contactUs: {
    title: "Contact Canopy Carbon | Partner in Climate Integrity",
    description:
      "Reach out to Canopy Carbon to collaborate on carbon credit offtakes, sustainable finance, or research partnerships. Together, we deliver credible, nature-based climate impact.",
    keywords: [
      "carbon partnerships",
      "climate collaboration",
      "sustainability network",
      "carbon finance",
      "carbon credit buyers",
    ],
    ogImage: "/assets/contact-us/background-footer-image.png",
  },
};

export type PageKey = keyof typeof PAGE_SEO;
