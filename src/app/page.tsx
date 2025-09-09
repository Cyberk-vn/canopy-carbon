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

export default function Home() {
  const menuItems = getMenuItems();
  const mobileMenuStyles = getMobileMenuStyles("home");

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
        "Managing agricultural residues, primarily by converting biomass into biochar, cutting emissions and producing materials for industrial use.",
      iconType: "biochar",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col gap-10 bg-[#FCFCFC] lg:bg-white">
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
