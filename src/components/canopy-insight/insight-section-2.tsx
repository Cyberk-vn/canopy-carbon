"use client";

import { InsightSection } from "./insight-section";

export function InsightSection2() {
  const sectionData = {
    title: "Profiling Aviation Emissions: Sector Footprint & CORSIA Framework",
    description: "This paper explores aviation's rising emissions and its role as a hard-to-abate sector. It outlines key propulsion constraints, explaining why electrification remains a major technical and regulatory challenge. The paper concludes with an overview of CORSIA—the primary international framework guiding emissions management and offsets within the aviation sector.",
    images: [
      {
        src: "/assets/canopy-insight/airline-emissions-second-set/1.png",
        alt: "Aviation Emissions Profile - Card 1",
      },
      {
        src: "/assets/canopy-insight/airline-emissions-second-set/2.png",
        alt: "Aviation Emissions Profile - Card 2",
      },
      {
        src: "/assets/canopy-insight/airline-emissions-second-set/3.png",
        alt: "Aviation Emissions Profile - Card 3",
      },
      {
        src: "/assets/canopy-insight/airline-emissions-second-set/4.png",
        alt: "Aviation Emissions Profile - Card 4",
      },
      {
        src: "/assets/canopy-insight/airline-emissions-second-set/5.png",
        alt: "Aviation Emissions Profile - Card 5",
      },
    ],
  };

  return <InsightSection {...sectionData} showDecorators={true} />;
}

export default InsightSection2;