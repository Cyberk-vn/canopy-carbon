"use client";

import { NavigationMenu } from "../common";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";
import FadeContent from "@/src/components/animation/fade-content";

export function CanopyInsightBanner() {
  const menuItems = getMenuItems();
  const mobileMenuStyles = getMobileMenuStyles("canopy-insight");

  return (
    <div className="w-full min-h-[927px] mx-auto">
      {/* Background Image Section with CSS background and overlay */}
      <div
        className="relative w-full min-h-[927px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/canopy-insight/canopy-insights-banner-background-image-mobile.svg')`,
        }}
      >
        {/* Navigation Menu */}
        <div className="relative z-20 mt-[3px]">
          <NavigationMenu
            menuItems={menuItems}
            logoUrl={getLogoUrl()}
            mobileMenuIconColor="rgba(139, 147, 140, 0.5)"
            mobileMenuStyles={mobileMenuStyles}
            activeItem="Canopy Insight"
          />
        </div>

        {/* Background Overlay - positioned at 422px from top */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-5"
          style={{
            top: "422px",
            background:
              "linear-gradient(360deg, #FFFFFF 0%, #FFFFFF 55.29%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Content Section with improved layout */}
        <FadeContent
          duration={500}
          delay={200}
          className="absolute z-10 justify-center items-center"
          style={{ top: "494px" }}
        >
          {/* Title and Description Container */}
          <div className=" mb-[39px] mx-6">
            <h1
              className=" font-semibold text-[#2A4035] text-[30px] leading-[38px] mb-[13px] max-w-[342px] w-[342px]"
              style={{
                fontWeight: 600,
                lineHeight: "38px",
              }}
            >
              Canopy Insights
            </h1>
            <p
              className=" text-[#777777] text-[13px] leading-[19px] max-w-[342px] w-[342px]"
              style={{
                fontWeight: 400,
                lineHeight: "19px",
              }}
            >
              At Canopy, every strategic decision is grounded in rigorous
              analysis. Canopy Insights is our dedicated platform for publishing
              thought leadership, field research, and market intelligence.
            </p>
          </div>
        </FadeContent>

        {/* Decorative Lines Container - Full Width - Independent positioning */}
        <FadeContent
          duration={500}
          delay={400}
          className="absolute left-0 right-0 z-10 flex justify-between h-[48px] px-6"
          style={{ top: "660px" }}
        >
          {/* Left Decorator */}
          <div className="relative w-[92px] h-[5px]">
            <div className="absolute top-0 left-0 w-full border-t-2 border-[rgba(172,184,194,0.4)]" />
            <div className="absolute top-[5px] left-[23.11px] w-[45.32px] border-t border-[rgba(172,184,194,0.4)]" />
          </div>

          {/* Right Decorator */}
          <div className="relative w-[92px] h-[5px] mt-[20px]">
            <div className="absolute top-[5px] left-0 w-full border-t-2 border-[rgba(172,184,194,0.4)]" />
            <div className="absolute top-0 left-[23.57px] w-[45.32px] border-t border-[rgba(172,184,194,0.4)]" />
          </div>
        </FadeContent>
      </div>
    </div>
  );
}

export default CanopyInsightBanner;
