import {
  CanopyPortfolioSection,
  CanopyPortfolioSectionDesktop,
  InsightSection,
  InsightSectionDesktop,
  InsightSection2,
  InsightSection2Desktop,
  InsightSection3,
  InsightSection3Desktop,
} from "@/src/components/canopy-insight";
import CanopyInsightSection from "@/src/components/canopy-insight/canopy-insight-section";
import { FooterSection } from "@/src/components/common";

const CanopyInsightPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <CanopyInsightSection />

      <div className="block md:hidden relative -mt-[221px] z-20">
        <InsightSection
          title="Beyond Emissions Reduction: The Strategic Case for Carbon Offsets"
          description="This paper reframes carbon offsets not just as a compensatory tool, but as a strategic enabler in global decarbonisation. It shows how offsets support hard-to-abate sectors, channel finance to climate-positive projects, and bridge the gap while emissions reductions align with net zero. When designed with integrity, carbon offsets are not a concession—but a climate necessity."
          images={[
            {
              src: "/assets/canopy-insight/bayond-emission-card-mobile-1.png",
              alt: "Beyond Emissions Card Mobile",
            },
          ]}
          showDecorators={true}
        />
      </div>
      <div className="hidden md:block">
        <InsightSectionDesktop
          title="Beyond Emissions Reduction: The Strategic Case for Carbon Offsets"
          description="This paper reframes carbon offsets not just as a compensatory tool, but as a strategic enabler in global decarbonisation. It shows how offsets support hard-to-abate sectors, channel finance to climate-positive projects, and bridge the gap while emissions reductions align with net zero. When designed with integrity, carbon offsets are not a concession—but a climate necessity."
          imageSrcLarge="/assets/desktop/canopy-insight/bayond-emission-card-1-big-screen.png"
        />
      </div>

      <div className="block md:hidden">
        <InsightSection2 />
      </div>
      <div className="hidden md:block">
        <InsightSection2Desktop />
      </div>

      <div className="block md:hidden">
        <InsightSection3 />
      </div>
      <div className="hidden md:block">
        <InsightSection3Desktop />
      </div>

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
