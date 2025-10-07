"use client";

import Image from "next/image";
import { NavigationMenu } from "../common";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";
import FadeContent from "@/src/components/animation/fade-content";

export function CanopyInsightSection() {
  const menuItems = getMenuItems();
  const mobileMenuStyles = getMobileMenuStyles("canopy-insight");

  return (
    <div className="relative lg:h-[700px] h-[927px] mx-auto">
      <Image
        src="/assets/desktop/canopy-insight/canopy-banner-background-image.png"
        alt="Canopy Insight Banner"
        fill
        priority
        className="object-cover hidden lg:block"
      />
      <Image
        src="/assets/desktop/canopy-insight/canopy-bg-tablet.png"
        alt="Canopy Insight Banner"
        fill
        priority
        className="object-cover hidden md:block lg:hidden"
      />
      <Image
        src="/assets/desktop/canopy-insight/canopy-bg-mobile.png"
        alt="Canopy Insight Banner"
        fill
        priority
        className="object-cover block md:hidden"
      />
      <div
        className="absolute bottom-0 left-0 right-0 lg:h-[444px] z-10"
        style={{
          background:
            "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 42.89%)",
        }}
      />
      <div className="relative z-20 flex h-full flex-col">
        <div>
          <NavigationMenu
            menuItems={menuItems}
            logoUrl={getLogoUrl()}
            mobileMenuIconColor="rgba(139, 147, 140, 0.5)"
            mobileMenuStyles={mobileMenuStyles}
            activeItem="Canopy Insights"
          />
        </div>

        <div className="relative flex flex-1 flex-col items-center pt-25 lg:pt-0 lg:justify-center gap-11 lg:flex-row lg:container lg:mx-auto px-6 lg:px-0">
          <FadeContent
            duration={500}
            delay={100}
            threshold={0.1}
            easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            initialOpacity={0}
          >
            <Image
              src="/assets/desktop/canopy-insight/canopy-insight-image.png"
              alt="Canopy Insight Bird"
              width={356}
              height={447}
              className="object-cover lg:w-[356px] lg:h-[447px] md:w-[228px] md:h-[286px] w-[206px] h-[259px]"
            />
          </FadeContent>
          <div className="lg:w-[705px] lg:mb-25">
            <FadeContent
              duration={600}
              delay={200}
              threshold={0.1}
              easing="ease-out"
              initialOpacity={0}
              className="canopy-fade-up-content"
            >
              <div className="mb-3 md:mb-8 lg:mb-14 text-4xl font-work-sans text-[#2A4035] font-semibold md:text-[36px] lg:text-[45px]">
                Canopy Insights
              </div>

              <div className="text-sm lg:text-sm md:text-base leading-[24px] text-[#777777] lg:max-w-[622px]">
                <p className="hidden sm:block">
                  At Canopy, every strategic decision is grounded in rigorous
                  analysis. Canopy Insights is our dedicated platform for
                  publishing thought leadership, field research, and market
                  intelligence—distilling complex dynamics across carbon
                  markets, standards, and project design. We believe that
                  excellence begins with clarity, and that deep understanding is
                  a cornerstone of lasting credibility and meaningful impact.
                </p>
                <p className="block sm:hidden">
                  At Canopy, every strategic decision is grounded in rigorous
                  analysis. Canopy Insights is our dedicated platform for
                  publishing thought leadership, field research, and market
                  intelligence.
                </p>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanopyInsightSection;
