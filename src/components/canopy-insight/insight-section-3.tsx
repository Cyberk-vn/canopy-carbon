"use client";

import { InsightSection } from "./insight-section";

export function InsightSection3() {
  const sectionData = {
    title: "Carbon Market Cycles: Tracing the VCM's Evolution",
    description:
      "This paper traces the Voluntary Carbon Market's evolution through phases of growth, collapse, and reform. It examines the early boom in activity, the credibility crises that followed, and current efforts to rebuild trust through ICVCM and VCMI. Today's recalibration phase is viewed as critical to the VCM's long-term maturity and credibility.",
    images: [
      {
        src: "/assets/canopy-insight/bayond-emission-card-mobile-3.png",
        alt: "VCM Evolution Mobile Card",
      },
    ],
  };

  return <InsightSection {...sectionData} showDecorators={false} />;
}

export default InsightSection3;
