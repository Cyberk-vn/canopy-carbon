"use client";

import { InsightSection } from "./insight-section";

export function InsightSection3() {
  const sectionData = {
    title: "Carbon Market Cycles: Tracing the VCM's Evolution",
    description:
      "This paper traces the historical evolution of the Voluntary Carbon Market (VCM) through its distinct growth, contraction, and recalibration cycles. It unpacks the market's early boom, the credibility crises that followed, and the ongoing efforts to restore trust through frameworks like ICVCM and VCMI. By analysing the market's structural shifts and maturing expectations, the paper positions today's recalibration phase as a critical juncture in the VCM's long-term institutionalisation.",
    images: [
      {
        src: "/assets/canopy-insight/vcm-history-third-set/1.png",
        alt: "VCM Evolution History - Card 1",
      },
      {
        src: "/assets/canopy-insight/vcm-history-third-set/2.png",
        alt: "VCM Evolution History - Card 2",
      },
      {
        src: "/assets/canopy-insight/vcm-history-third-set/3.png",
        alt: "VCM Evolution History - Card 3",
      },
      {
        src: "/assets/canopy-insight/vcm-history-third-set/4.png",
        alt: "VCM Evolution History - Card 4",
      },
      {
        src: "/assets/canopy-insight/vcm-history-third-set/5.png",
        alt: "VCM Evolution History - Card 5",
      },
    ],
  };

  return <InsightSection {...sectionData} showDecorators={false} />;
}

export default InsightSection3;
