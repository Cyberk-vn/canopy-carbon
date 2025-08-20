"use client";

import { InsightSection } from "./insight-section";

export function InsightSection2() {
  const sectionData = {
    title: "Profiling Aviation Emissions: Sector Footprint & CORSIA Framework",
    description: "This paper explores aviation's rising emissions and its role as a hard-to-abate sector. It outlines key propulsion constraints, explaining why electrification remains a major technical and regulatory challenge. The paper concludes with an overview of CORSIA—the primary international framework guiding emissions management and offsets within the aviation sector.",
    images: [
      {
        src: "/assets/canopy-insight/sector&corsia-offset-1.png",
        alt: "Aviation Sector Book 1",
      },
      {
        src: "/assets/canopy-insight/sector&corsia-offset-2.png",
        alt: "Aviation Sector Book 2",
      },
      {
        src: "/assets/canopy-insight/sector&corsia-offset-3.png",
        alt: "Aviation Sector Book 3",
      },
      {
        src: "/assets/canopy-insight/sector&corsia-offset-4.png",
        alt: "Aviation Sector Book 4",
      },
      {
        src: "/assets/canopy-insight/sector&corsia-offset-5.png",
        alt: "Aviation Sector Book 5",
      },
    ],
  };

  return <InsightSection {...sectionData} showDecorators={true} />;
}

export default InsightSection2;