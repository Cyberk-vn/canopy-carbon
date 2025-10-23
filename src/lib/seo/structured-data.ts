import { SEO_CONFIG, PageKey } from "./seo-config";

/**
 * JSON-LD Structured Data Generators
 * Following schema.org specifications for better search engine understanding
 */

/**
 * Generate Organization schema for the company
 * This should be included in the root layout
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.organization.name,
    legalName: SEO_CONFIG.organization.legalName,
    url: SEO_CONFIG.organization.url,
    logo: {
      "@type": "ImageObject",
      url: SEO_CONFIG.organization.logo,
      width: 512,
      height: 512,
    },
    description: SEO_CONFIG.organization.description,
    foundingDate: SEO_CONFIG.organization.foundingDate,
    contactPoint: SEO_CONFIG.organization.contactPoint,
    sameAs: SEO_CONFIG.organization.sameAs,
  };
};

/**
 * Generate WebSite schema with search action
 */
export const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.siteUrl}/#website`,
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.siteDescription,
    publisher: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    inLanguage: SEO_CONFIG.language,
  };
};

/**
 * Generate WebPage schema for individual pages
 */
export const generateWebPageSchema = (
  pageKey: PageKey,
  customData?: {
    name?: string;
    description?: string;
    datePublished?: string;
    dateModified?: string;
  }
) => {
  const pagePath = getPagePath(pageKey);
  const pageUrl = `${SEO_CONFIG.siteUrl}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: customData?.name || getPageTitle(pageKey),
    description: customData?.description || getPageDescription(pageKey),
    isPartOf: {
      "@id": `${SEO_CONFIG.siteUrl}/#website`,
    },
    about: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    inLanguage: SEO_CONFIG.language,
    ...(customData?.datePublished && {
      datePublished: customData.datePublished,
    }),
    ...(customData?.dateModified && { dateModified: customData.dateModified }),
  };
};

/**
 * Generate BreadcrumbList schema for navigation
 */
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  };
};

/**
 * Generate Article schema for blog posts/insights
 * Use this for individual insight articles
 */
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || SEO_CONFIG.defaultOGImage.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || SEO_CONFIG.organization.name,
      url: SEO_CONFIG.siteUrl,
    },
    publisher: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
};

/**
 * Generate CollectionPage schema for project listings
 */
export const generateCollectionPageSchema = (
  pageKey: PageKey,
  numberOfItems?: number
) => {
  const pagePath = getPagePath(pageKey);
  const pageUrl = `${SEO_CONFIG.siteUrl}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collectionpage`,
    url: pageUrl,
    name: getPageTitle(pageKey),
    description: getPageDescription(pageKey),
    isPartOf: {
      "@id": `${SEO_CONFIG.siteUrl}/#website`,
    },
    about: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    inLanguage: SEO_CONFIG.language,
    ...(numberOfItems && { numberOfItems }),
  };
};

/**
 * Helper function to render JSON-LD script tag
 * Use this in your components to inject structured data
 */
export const renderJsonLd = (data: object) => {
  return {
    __html: JSON.stringify(data),
  };
};

// Helper functions
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

const getPageTitle = (pageKey: PageKey): string => {
  const titles: Record<PageKey, string> = {
    home: "Home",
    aboutUs: "About Us",
    ourProjects: "Our Projects",
    insights: "Insights",
    contactUs: "Contact Us",
  };
  return titles[pageKey];
};

const getPageDescription = (pageKey: PageKey): string => {
  const descriptions: Record<PageKey, string> = {
    home: SEO_CONFIG.siteDescription,
    aboutUs:
      "Learn about Canopy Carbon's mission to create long-term climate impact through science-led, community-aligned nature-based projects.",
    ourProjects:
      "Explore Canopy Carbon's portfolio of afforestation, reforestation, wetland restoration, and conservation initiatives.",
    insights:
      "Data-driven insights on climate strategy, carbon offset innovation, and sustainable investment.",
    contactUs:
      "Reach out to Canopy Carbon to collaborate on carbon credit offtakes, sustainable finance, or research partnerships.",
  };
  return descriptions[pageKey];
};
