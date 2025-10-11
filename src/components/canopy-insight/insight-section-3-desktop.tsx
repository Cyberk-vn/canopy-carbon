"use client";

import { InsightSectionDesktop } from "./insight-section-desktop";

export function InsightSection3Desktop() {
  const sectionData = {
    title: "Profiling Aviation Emissions: Sector Footprint & CORSIA Framework",
    description:
      "This paper explores aviation’s rising emissions and its role as a hard-to-abate sector. It outlines key propulsion constraints, explaining why electrification remains a major technical and regulatory challenge. The paper concludes with an overview of CORSIA—the primary international framework guiding emissions management and offsets within the aviation sector.",
    imagePosition: "right" as const,
    imageSrc: "/assets/desktop/canopy-insight/bayond-emission-card-2.png",
    imageSrcLarge:
      "/assets/desktop/canopy-insight/bayond-emission-card-2-big-screen.png",
  };

  return <InsightSectionDesktop {...sectionData} />;
}

export default InsightSection3Desktop;
