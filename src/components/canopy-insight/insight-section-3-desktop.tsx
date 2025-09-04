"use client";

import { InsightSectionDesktop } from "./insight-section-desktop";

export function InsightSection3Desktop() {
  const sectionData = {
    title: "Profiling Aviation Emissions: Sector Footprint & CORSIA Framework",
    description:
      "This paper explores aviation’s rising emissions and its role as a hard-to-abate sector. It outlines key propulsion constraints, explaining why electrification remains a major technical and regulatory challenge. The paper concludes with an overview of CORSIA—the primary international framework guiding emissions management and offsets within the aviation sector.",
    imagePosition: "right" as const,
    titleFontSize: "32px",
    imageSrc: "/assets/desktop/canopy-insight/bayond-emission-card-3.png",
  };

  return <InsightSectionDesktop {...sectionData} showDecorators={false} />;
}

export default InsightSection3Desktop;
