"use client";

import { InsightSection } from "./insight-section";

export function InsightSection3() {
  const sectionData = {
    title: "Carbon Market Cycles: Tracing the VCM's Evolution",
    description:
      "This paper traces the historical evolution of the Voluntary Carbon Market (VCM) through its distinct growth, contraction, and recalibration cycles. It unpacks the market’s early boom, the credibility crises that followed, and the ongoing efforts to restore trust through frameworks like ICVCM and VCMI. By analysing the market’s structural shifts and maturing expectations, the paper positions today’s recalibration phase as a critical juncture in the VCM’s long-term institutionalisation.",
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
