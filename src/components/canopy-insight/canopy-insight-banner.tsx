"use client";

import Image from "next/image";
import { NavigationMenu } from "../common";
import { InsightSection } from "./insight-section";

export function CanopyInsightBanner() {
  // Menu items data - following the same pattern as other pages
  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Our Project", url: "/our-project" },
    { text: "Canopy Insight", url: "/canopy-insight" },
  ];

  return (
    <div className="w-full min-h-[1183px] mx-auto">
      {/* Background Image Section with CSS background and overlay */}
      <div
        className="relative w-full min-h-[927px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/canopy-insight/banner-background-image.png')`,
        }}
      >
        {/* Background Overlay - using CSS instead of absolute positioning */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 45%, rgba(255, 255, 255, 1) 100%)",
          }}
        />

        {/* Additional Banner Background Overlay - starts from Decorative Lines Container */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "70%",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 1) 100%)",
            zIndex: 5,
          }}
        />

        {/* Navigation Menu */}
        <div className="relative z-20">
          <NavigationMenu
            menuItems={menuItems}
            logoUrl="/assets/banner-shared-component/logo.png"
            mobileMenuIconColor="rgba(139, 147, 140, 0.5)"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[92px] pt-[120px] pb-[20px]">
          {/* Decorative Image with Card Effect */}
          <div className="relative w-[206px] h-[259px] mb-8 lg:mb-0">
            {/* Effect background */}
            <div
              className="absolute left-0 top-[23px] w-[182px] h-[236px]"
              style={{
                backgroundColor: "#232A26",
              }}
            />

            {/* Banner decorator image with card effect */}
            <div className="card-effect decorative-card absolute left-[22px] top-0 w-[184px] h-[236px]">
              <Image
                src="/assets/canopy-insight/banner-decorator-image.png"
                alt="Banner Decorator"
                width={184}
                height={236}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Spacer for layout balance */}
          <div className="flex-1" />
        </div>

        {/* Content Section with improved layout */}
        <div className="relative z-10 px-6 lg:py-12 justify-center items-center">
          {/* Title and Description Container */}
          <div className="max-w-[342px] mb-12">
            <h1 className="font-sans font-semibold text-[#2A4035] text-[30px] leading-[38px] mb-[13px]">
              Canopy Insights
            </h1>
            <p className="font-sans text-[#777777] text-[13px] leading-[19px]">
              At Canopy, every strategic decision is grounded in rigorous
              analysis. Canopy Insights is our dedicated platform for publishing
              thought leadership, field research, and market intelligence.
            </p>
          </div>

          {/* Decorative Lines Container */}
          <div className="relative flex justify-between max-w-[364px] h-[48px]">
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
          </div>

          {/* Insight Section 1 - Using common InsightSection component */}
          <InsightSection
            title="Beyond Emissions Reduction: The Strategic Case for Carbon Offsets"
            description="This paper reframes carbon offsets not just as a compensatory tool, but as a strategic enabler in global decarbonisation. It shows how offsets support hard-to-abate sectors, channel finance to climate-positive projects, and bridge the gap while emissions reductions align with net zero. When designed with integrity, carbon offsets are not a concession—but a climate necessity."
            images={[
              {
                src: "/assets/canopy-insight/need-for-offset-1.png",
                alt: "Carbon Offsets Book 1",
              },
              {
                src: "/assets/canopy-insight/need-for-offset-2.png",
                alt: "Carbon Offsets Book 2",
              },
              {
                src: "/assets/canopy-insight/need-for-offset-3.png",
                alt: "Carbon Offsets Book 3",
              },
              {
                src: "/assets/canopy-insight/need-for-offset-4.png",
                alt: "Carbon Offsets Book 4",
              },
              {
                src: "/assets/canopy-insight/need-for-offset-5.png",
                alt: "Carbon Offsets Book 5",
              },
            ]}
            isEmbedded={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CanopyInsightBanner;
