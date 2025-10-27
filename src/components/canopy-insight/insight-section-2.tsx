"use client";

import { InsightSection } from "./insight-section";

// Static imports for InsightSection 2 images
import aviationCard1 from "@/public/assets/canopy-insight/airline-emissions-second-set/1.png";
import aviationCard2 from "@/public/assets/canopy-insight/airline-emissions-second-set/2.png";
import aviationCard3 from "@/public/assets/canopy-insight/airline-emissions-second-set/3.png";
import aviationCard4 from "@/public/assets/canopy-insight/airline-emissions-second-set/4.png";
import aviationCard5 from "@/public/assets/canopy-insight/airline-emissions-second-set/5.png";

export function InsightSection2() {
  const sectionData = {
    title: "Profiling Aviation Emissions: Sector Footprint & CORSIA Framework",
    description: "This paper explores aviation's rising emissions and its role as a hard-to-abate sector. It outlines key propulsion constraints, explaining why electrification remains a major technical and regulatory challenge. The paper concludes with an overview of CORSIA—the primary international framework guiding emissions management and offsets within the aviation sector.",
    images: [
      {
        src: aviationCard1,
        alt: "Aviation Emissions Profile - Card 1",
      },
      {
        src: aviationCard2,
        alt: "Aviation Emissions Profile - Card 2",
      },
      {
        src: aviationCard3,
        alt: "Aviation Emissions Profile - Card 3",
      },
      {
        src: aviationCard4,
        alt: "Aviation Emissions Profile - Card 4",
      },
      {
        src: aviationCard5,
        alt: "Aviation Emissions Profile - Card 5",
      },
    ],
  };

  return <InsightSection {...sectionData} showDecorators={true} />;
}

export default InsightSection2;