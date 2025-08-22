import {
  CanopyInsightBanner,
  CanopyPortfolioSection,
  InsightSection,
  InsightSection2,
  InsightSection3,
} from "@/src/components/canopy-insight";
import { FooterSection } from "@/src/components/common";

const CanopyInsightPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <CanopyInsightBanner />
      <InsightSection
        title="The Need for Offsets"
        description="An in-depth exploration of why the demand for carbon offset has gone through several phases."
        images={[
          {
            src: "/assets/canopy-insight/need-for-offset-1.png",
            alt: "Need for Offset 1",
          },
          {
            src: "/assets/canopy-insight/need-for-offset-2.png",
            alt: "Need for Offset 2",
          },
          {
            src: "/assets/canopy-insight/need-for-offset-3.png",
            alt: "Need for Offset 3",
          },
          {
            src: "/assets/canopy-insight/need-for-offset-4.png",
            alt: "Need for Offset 4",
          },
          {
            src: "/assets/canopy-insight/need-for-offset-5.png",
            alt: "Need for Offset 5",
          },
        ]}
        showDecorators={true}
      />
      <InsightSection2 />
      <InsightSection3 />
      <CanopyPortfolioSection />
      <FooterSection />
    </div>
  );
};

export default CanopyInsightPage;
