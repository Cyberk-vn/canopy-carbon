"use client";

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
import { useResponsive } from "@/src/lib/utils/use-responsive";
import {
  generateWebPageSchema,
  renderJsonLd,
} from "@/src/lib/seo/structured-data";

// Static imports for InsightSection 1 images
import offsetsCard1 from "@/public/assets/canopy-insight/offsets-role-first-set/1.png";
import offsetsCard2 from "@/public/assets/canopy-insight/offsets-role-first-set/2.png";
import offsetsCard3 from "@/public/assets/canopy-insight/offsets-role-first-set/3.png";
import offsetsCard4 from "@/public/assets/canopy-insight/offsets-role-first-set/4.png";
import offsetsCard5 from "@/public/assets/canopy-insight/offsets-role-first-set/5.png";

const CanopyInsightPage = () => {
  const { isMobile } = useResponsive();

  // Generate structured data for Insights page
  const webPageSchema = generateWebPageSchema("insights");

  return (
    <>
      {/* WebPage Schema for Insights */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(webPageSchema)}
      />

      <div className="min-h-screen bg-white">
        <CanopyInsightSection />

        {/* Gradient overlay for desktop to smooth transition */}
        {!isMobile && (
          <div className="relative w-full h-32 bg-gradient-to-t from-white to-transparent -mt-32 z-10" />
        )}

        {isMobile && (
          <div className="relative -mt-[221px] z-20">
            <InsightSection
              title="Beyond Emissions Reduction: The Strategic Case for Carbon Offsets"
              description="This paper reframes carbon offsets not just as a compensatory tool, but as a strategic enabler in global decarbonisation. It shows how offsets support hard-to-abate sectors, channel finance to climate-positive projects, and bridge the gap while emissions reductions align with net zero. When designed with integrity, carbon offsets are not a concession—but a climate necessity."
              images={[
                {
                  src: offsetsCard1,
                  alt: "Carbon Offsets Strategic Case - Card 1",
                },
                {
                  src: offsetsCard2,
                  alt: "Carbon Offsets Strategic Case - Card 2",
                },
                {
                  src: offsetsCard3,
                  alt: "Carbon Offsets Strategic Case - Card 3",
                },
                {
                  src: offsetsCard4,
                  alt: "Carbon Offsets Strategic Case - Card 4",
                },
                {
                  src: offsetsCard5,
                  alt: "Carbon Offsets Strategic Case - Card 5",
                },
              ]}
              showDecorators={true}
            />
          </div>
        )}
        {!isMobile && (
          <InsightSectionDesktop
            title="Beyond Emissions Reduction: The Strategic Case for Carbon Offsets"
            description="This paper reframes carbon offsets not merely as a compensatory tool, but as a strategic enabler within global decarbonisation pathways. It explores how offsets support hard-to-abate sectors, accelerate finance towards climate-positive projects, and serve as an essential bridge while systemic emissions reductions catch up to net zero targets. The paper makes the case that when designed with integrity, carbon offsets are not a concession—but a climate necessity."
            imageSrcLarge="/assets/desktop/canopy-insight/bayond-emission-card-1-big-screen.png"
          />
        )}

        {isMobile && <InsightSection2 />}
        {!isMobile && <InsightSection2Desktop />}

        {isMobile && <InsightSection3 />}
        {!isMobile && <InsightSection3Desktop />}

        {isMobile && <CanopyPortfolioSection />}
        {!isMobile && <CanopyPortfolioSectionDesktop />}
        <FooterSection />
      </div>
    </>
  );
};

export default CanopyInsightPage;
