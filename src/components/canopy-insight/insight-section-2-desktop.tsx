"use client";

import { InsightSectionDesktop } from "./insight-section-desktop";

export function InsightSection2Desktop() {
  const sectionData = {
    title: "Carbon Market Cycles: Tracing the VCM's Evolution",
    description:
      "This paper traces the Voluntary Carbon Market’s evolution through phases of growth, collapse, and reform. It examines the early boom in activity, the credibility crises that followed, and current efforts to rebuild trust through ICVCM and VCMI. Today’s recalibration phase is viewed as critical to the VCM’s long-term maturity and credibility.",
    imagePosition: "left" as const,
    titleFontSize: "32px",
    imageSrc: "/assets/desktop/canopy-insight/bayond-emission-card-2.png",
  };

  return <InsightSectionDesktop {...sectionData} showDecorators={true} />;
}

export default InsightSection2Desktop;
