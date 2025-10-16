"use client";

import { InsightSectionDesktop } from "./insight-section-desktop";

export function InsightSection2Desktop() {
  const sectionData = {
    title: "Profiling Aviation Emissions: Sector Footprint & CORSIA Framework",
    description:
      "This paper begins by examining the aviation sector’s growing emissions trajectory and its designation as a hard-to-abate industry. It explores the underlying technical constraints of aircraft propulsion, highlighting why electrification remains a major technological and regulatory hurdle. The paper concludes with an overview of the Carbon Offsetting and Reduction Scheme for International Aviation (CORSIA), explaining how the framework currently serves as the primary mechanism to manage aviation-related emissions at scale.",
    imagePosition: "left" as const,
    imageSrc: "/assets/desktop/canopy-insight/bayond-emission-card-3.png",
    imageSrcLarge:
      "/assets/desktop/canopy-insight/bayond-emission-card-3-big-screen.png",
  };

  return <InsightSectionDesktop {...sectionData} />;
}

export default InsightSection2Desktop;
