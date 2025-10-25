"use client";

import Image from "next/image";
import { NavigationMenu } from "../common";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";
import FadeInView from "@/src/components/animation/fade-in-view";
import { cn } from "@/src/lib/utils";

// Static image imports
import canopyBannerBg from "@/public/assets/desktop/canopy-insight/canopy-banner-background-image.png";
import canopyBanner2k from "@/public/assets/canopy-insight/canopy-banner-2k-bg-image.png";
import canopyBgTablet from "@/public/assets/desktop/canopy-insight/canopy-bg-tablet.png";
import canopyBgMobile from "@/public/assets/desktop/canopy-insight/canopy-bg-mobile.png";
import canopyInsightBird from "@/public/assets/desktop/canopy-insight/canopy-insight-image.png";
import canopyInsightBird2k from "@/public/assets/desktop/canopy-insight/canopy-insight-2k-image.png";

export function CanopyInsightSection() {
  const menuItems = getMenuItems();
  const mobileMenuStyles = getMobileMenuStyles("canopy-insight");

  return (
    <div
      className={cn(
        "relative xl:h-[700px] h-[1000px] 2xl:h-[1089px] 3xl:h-[1198px] mx-auto bg-[#DCDCDC4D]"
      )}
    >
      <Image
        src={canopyBannerBg}
        alt="Canopy Insight Banner"
        fill
        priority
        className={cn("object-cover hidden lg:block 2xl:hidden")}
      />
      <Image
        src={canopyBanner2k}
        alt="Canopy Insight Banner"
        fill
        priority
        className={cn("object-cover hidden 2xl:block pt-[50px]")}
      />
      <Image
        src={canopyBgTablet}
        alt="Canopy Insight Banner"
        fill
        priority
        className={cn("object-cover hidden md:block lg:hidden")}
      />
      <Image
        src={canopyBgMobile}
        alt="Canopy Insight Banner"
        fill
        priority
        className={cn("object-cover block md:hidden")}
      />
      {/* Desktop/Tablet gradient overlay */}
      <div
        className="absolute inset-0 z-10 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, #FCFCFC 27%, rgba(0, 0, 0, 0.14) 60.00000133849027%, rgba(255, 255, 255, 0.8) 86.6666693436472%, #FCFCFC 100%)",
        }}
      />
      <div
        className={cn(
          "relative z-20 flex h-full flex-col",
          "md:pt-[37px] 3xl:pt-0"
        )}
      >
        <div>
          <NavigationMenu
            menuItems={menuItems}
            logoUrl={getLogoUrl()}
            mobileMenuIconColor="rgba(139, 147, 140, 0.5)"
            mobileMenuStyles={mobileMenuStyles}
            activeItem="Canopy Insights"
          />
        </div>

        <div
          className={cn(
            "relative flex flex-1 flex-col",
            "pt-25 xxl:pt-[87px] 3xl:pt-[200px]",
            "gap-11 2xl:gap-[72px]",
            "lg:justify-center 2xl:justify-start",
            "xl:flex-row",
            "w-full max-w-[1920px] mx-auto",
            "px-6 md:px-[30px] xl:px-7"
          )}
        >
          <FadeInView
            duration={0.5}
            delay={0.1}
            amount={0.1}
            className="flex items-center justify-center xl:items-start xl:justify-start"
          >
            {/* Regular bird image - shown up to 2xl */}
            <Image
              src={canopyInsightBird}
              alt="Canopy Insight Bird"
              width={356}
              height={447}
              className={cn(
                "object-cover lg:w-[356px] lg:h-[447px] md:w-[228px] md:h-[286px] w-[206px] h-[259px] 2xl:w-[462px] 2xl:h-[598px]",
                "3xl:hidden"
              )}
            />
            {/* 2K bird image - shown only at 3xl */}
            <Image
              src={canopyInsightBird2k}
              alt="Canopy Insight Bird"
              width={526}
              height={648}
              className={cn(
                "object-cover hidden 3xl:block",
                "3xl:w-[526px] 3xl:h-[648px]"
              )}
            />
          </FadeInView>
          <div
            className={cn(
              "relative lg:w-[705px] lg:mb-25 2xl:mt-[65px] 3xl:mt-15"
            )}
          >
            <FadeInView
              duration={0.6}
              delay={0.2}
              amount={0.1}
              className={cn("canopy-fade-up-content")}
            >
              <div
                className={cn(
                  "mb-3 md:mb-8 lg:mb-14 text-4xl font-open-sans md:font-work-sans text-[#2A4035] font-semibold md:text-[36px] lg:text-[45px] 2xl:text-[64px]",
                  "3xl:font-avenir-heavy 3xl:font-normal 3xl:text-[65px] 3xl:leading-[91px]"
                )}
              >
                Canopy Insights
              </div>

              <div
                className={cn(
                  "relative text-sm lg:text-sm md:text-base xl:text-base leading-[24px] text-[#6C7173] lg:max-w-[622px] xl:max-w-[715px]",
                  "3xl:font-open-sans 3xl:font-normal 3xl:text-[16px] 3xl:leading-[28px]"
                )}
              >
                <div
                  className={cn(
                    "absolute hidden lg:block bg-[#FFFFFF4D] -z-10 top-[-24px] bottom-[-46px] left-[-45px] 2xl:left-[-75px] right-[-24px] 2xl:right-[-90px]"
                  )}
                />
                <p className={cn("hidden sm:block")}>
                  At Canopy, every strategic decision is grounded in rigorous
                  analysis. Canopy Insights is our dedicated platform for
                  publishing thought leadership, field research, and market
                  intelligence—distilling complex dynamics across carbon
                  markets, standards, and project design. We believe that
                  excellence begins with clarity, and that deep understanding is
                  a cornerstone of lasting credibility and meaningful impact.
                </p>
                <p className={cn("block sm:hidden")}>
                  At Canopy, every strategic decision is grounded in rigorous
                  analysis. Canopy Insights is our dedicated platform for
                  publishing thought leadership, field research, and market
                  intelligence.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanopyInsightSection;
