"use client";

import { InsightSection } from "./insight-section";

// Static imports for InsightSection 3 images
import vcmCard1 from "@/public/assets/canopy-insight/vcm-history-third-set/1.png";
import vcmCard2 from "@/public/assets/canopy-insight/vcm-history-third-set/2.png";
import vcmCard3 from "@/public/assets/canopy-insight/vcm-history-third-set/3.png";
import vcmCard4 from "@/public/assets/canopy-insight/vcm-history-third-set/4.png";
import vcmCard5 from "@/public/assets/canopy-insight/vcm-history-third-set/5.png";

export function InsightSection3() {
  const sectionData = {
    title: "Carbon Market Cycles: Tracing the VCM's Evolution",
    description:
      "This paper traces the Voluntary Carbon Market's evolution through phases of growth, collapse, and reform. It examines the early boom in activity, the credibility crises that followed, and current efforts to rebuild trust through ICVCM and VCMI. Today's recalibration phase is viewed as critical to the VCM's long-term maturity and credibility.",
    images: [
      {
        src: vcmCard1,
        alt: "VCM Evolution History - Card 1",
      },
      {
        src: vcmCard2,
        alt: "VCM Evolution History - Card 2",
      },
      {
        src: vcmCard3,
        alt: "VCM Evolution History - Card 3",
      },
      {
        src: vcmCard4,
        alt: "VCM Evolution History - Card 4",
      },
      {
        src: vcmCard5,
        alt: "VCM Evolution History - Card 5",
      },
    ],
  };

  return <InsightSection {...sectionData} showDecorators={false} />;
}

export default InsightSection3;
