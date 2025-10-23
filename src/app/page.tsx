import {
  Banner,
  OurServiceSection,
  OurExecutionSection,
  MapSection,
} from "@/src/components/home";
import { FooterSection } from "@/src/components/common";
import { ServiceCardData } from "@/src/types/service";
import RoadmapSection from "@/src/components/home/roadmap-section";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";
import { Metadata } from "next";
import {
  generateWebPageSchema,
  renderJsonLd,
} from "@/src/lib/seo/structured-data";

// EXPLICIT metadata export for Home page
// Following playbook requirement: each page must export metadata explicitly
export const metadata: Metadata = {
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

  // Open Graph metadata
  openGraph: {
    type: "website",
    url: "/",
    title:
      "Canopy Carbon – Building Climate Infrastructure Through Nature-Based Solutions",
    description:
      "Canopy Carbon pioneers large-scale, high-integrity nature-based carbon projects. We restore ecosystems, empower communities, and deliver measurable climate impact.",
    siteName: "Canopy Carbon",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Canopy Carbon - Nature-Based Climate Infrastructure",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Canopy Carbon – Building Climate Infrastructure",
    description:
      "Canopy Carbon pioneers large-scale, high-integrity nature-based carbon projects.",
    images: ["/opengraph-image.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const menuItems = getMenuItems();
  const mobileMenuStyles = getMobileMenuStyles("home");

  // Generate structured data for Home page
  const webPageSchema = generateWebPageSchema("home");

  const serviceData: ServiceCardData[] = [
    {
      id: "arr",
      abbreviation: "ARR",
      fullTitle: "Afforestation, Reforestation, and Revegetation",
      description:
        "Restoring degraded land or establish new forests to generate durable carbon sinks with biodiversity, community and resilience benefits.",
      iconType: "arr",
    },
    {
      id: "redd",
      abbreviation: "REDD+",
      fullTitle: "Reducing Emissions from Deforestation",
      description:
        "Preventing forest loss by protecting high-risk areas through structured patrolling, monitoring systems, and community-aligned enforcement.",
      iconType: "redd",
    },
    {
      id: "wrc",
      abbreviation: "WRC",
      fullTitle: "Wetland Restoration and Conservation",
      description:
        "Restoring and conserving peatland ecosystems to generate high-integrity carbon credits while supporting water regulation and soil stability.",
      iconType: "wrc",
    },
    {
      id: "biochar",
      abbreviation: "Biochar",
      fullTitle: "Agricultural Waste Management",
      description:
        "Managing palm-based agricultural residues, primarily by converting biomass into biochar — cutting emissions and producing carbon-rich material for industrial use.",
      mobileDescription:
        "Managing agricultural residues, primarily by converting biomass into biochar, cutting emissions and producing materials for industrial use.",
      iconType: "biochar",
    },
  ];

  return (
    <>
      {/* WebPage Schema for Home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(webPageSchema)}
      />

      <div className="min-h-screen flex flex-col gap-10 bg-[#FCFCFC] lg:bg-white xxl:gap-0">
        <Banner
          title="Canopy Carbon"
          subtitle="A Climate Infrastructure Company Specialising in Nature-Based Solutions."
          menuItems={menuItems}
          logoUrl={getLogoUrl()}
          mobileMenuStyles={mobileMenuStyles}
          services={serviceData}
        />

        <OurServiceSection
          title="We originate and deliver large-scale nature-based carbon offset projects, engineered for long-term impact and institutional-grade integrity.pt"
          services={serviceData}
        />

        <RoadmapSection />

        <OurExecutionSection />

        <MapSection />
        <FooterSection />
      </div>
    </>
  );
}
