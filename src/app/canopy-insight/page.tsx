import {
  CanopyInsightBanner,
  CanopyInsightBannerDesktop,
  CanopyPortfolioSection,
  CanopyPortfolioSectionDesktop,
  InsightSection,
  InsightSectionDesktop,
  InsightSection2,
  InsightSection2Desktop,
  InsightSection3,
  InsightSection3Desktop,
} from "@/src/components/canopy-insight";
import { FooterSection } from "@/src/components/common";

const CanopyInsightPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Render both banners and use CSS to show/hide - prevents flash */}
      <div className="block md:hidden">
        <CanopyInsightBanner />
      </div>
      <div className="hidden md:block">
        <CanopyInsightBannerDesktop />
      </div>
      
      {/* Responsive Insight Section */}
      <div className="block md:hidden">
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
      </div>
      <div className="hidden md:block">
        <InsightSectionDesktop
          title="Beyond Emissions Reduction: The Strategic Case for Carbon Offsets"
          description="This paper reframes carbon offsets not just as a compensatory tool, but as a strategic enabler in global decarbonisation. It shows how offsets support hard-to-abate sectors, channel finance to climate-positive projects, and bridge the gap while emissions reductions align with net zero. When designed with integrity, carbon offsets are not a concession—but a climate necessity."
          showDecorators={true}
        />
      </div>
      
      {/* Responsive Insight Section 2 */}
      <div className="block md:hidden">
        <InsightSection2 />
      </div>
      <div className="hidden md:block">
        <InsightSection2Desktop />
      </div>
      
      {/* Responsive Insight Section 3 */}
      <div className="block md:hidden">
        <InsightSection3 />
      </div>
      <div className="hidden md:block">
        <InsightSection3Desktop />
      </div>
      
      {/* Responsive Portfolio Section */}
      <div className="block md:hidden">
        <CanopyPortfolioSection />
      </div>
      <div className="hidden md:block">
        <CanopyPortfolioSectionDesktop />
      </div>
      <FooterSection />
    </div>
  );
};

export default CanopyInsightPage;
