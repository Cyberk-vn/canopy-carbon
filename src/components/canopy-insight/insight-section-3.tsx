"use client";

import { InsightSection } from "./insight-section";

export function InsightSection3() {
  const sectionData = {
    title: "Carbon Market Cycles: Tracing the VCM's Evolution",
    description: "This paper traces the Voluntary Carbon Market's evolution through phases of growth, collapse, and reform. It examines the early boom in activity, the credibility crises that followed, and current efforts to rebuild trust through ICVCM and VCMI. Today's recalibration phase is viewed as critical to the VCM's long-term maturity and credibility.",
    images: [
      {
        src: "/assets/canopy-insight/vcm-evolution-offset-1.png",
        alt: "VCM Evolution Book 1",
      },
      {
        src: "/assets/canopy-insight/vcm-evolution-offset-2.png",
        alt: "VCM Evolution Book 2",
      },
      {
        src: "/assets/canopy-insight/vcm-evolution-offset-3.png",
        alt: "VCM Evolution Book 3",
      },
      {
        src: "/assets/canopy-insight/vcm-evolution-offset-4.png",
        alt: "VCM Evolution Book 4",
      },
      {
        src: "/assets/canopy-insight/vcm-evolution-offset-5.png",
        alt: "VCM Evolution Book 5",
      },
    ],
  };

  return <InsightSection {...sectionData} />;
}

export default InsightSection3;