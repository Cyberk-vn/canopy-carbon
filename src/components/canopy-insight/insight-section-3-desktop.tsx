"use client";

import { InsightSectionDesktop } from "./insight-section-desktop";

export function InsightSection3Desktop() {
  const sectionData = {
    title: "Carbon Market Cycles: Tracing the VCM's Evolution",
    description:
      "This paper traces the historical evolution of the Voluntary Carbon Market (VCM) through its distinct growth, contraction, and recalibration cycles. It unpacks the market’s early boom, the credibility crises that followed, and the ongoing efforts to restore trust through frameworks like ICVCM and VCMI. By analysing the market’s structural shifts and maturing expectations, the paper positions today’s recalibration phase as a critical juncture in the VCM’s long-term institutionalisation.",
    imagePosition: "right" as const,
    imageSrc: "/assets/desktop/canopy-insight/bayond-emission-card-2.png",
    imageSrcLarge:
      "/assets/desktop/canopy-insight/bayond-emission-card-2-big-screen.png",
  };

  return <InsightSectionDesktop {...sectionData} />;
}

export default InsightSection3Desktop;
