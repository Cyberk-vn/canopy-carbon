"use client";

import Image from "next/image";
import { NavigationMenu } from "../common";
import {
  getMenuItems,
  getLogoUrl,
  getMobileMenuStyles,
} from "@/src/lib/navigation";
import FadeContent from "@/src/components/animation/fade-content";

export function CanopyInsightBannerDesktop() {
  const menuItems = getMenuItems();
  const mobileMenuStyles = getMobileMenuStyles("canopy-insight");

  return (
    <div
      className="relative w-[1440px] h-[700px] mx-auto bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url('/assets/desktop/canopy-insight/canopy-banner-background-image.png')`,
      }}
    >
      {/* Navigation Menu Section - 32px from top, 120px margins */}
      <div className="z-20">
        <NavigationMenu
          menuItems={menuItems}
          logoUrl={getLogoUrl()}
          mobileMenuIconColor="rgba(139, 147, 140, 0.5)"
          mobileMenuStyles={mobileMenuStyles}
          activeItem="Canopy Insights"
        />
      </div>

      {/* Main Content Section - flex layout for content and decorative image */}
      <div className="flex-1 flex items-start justify-center px-[120px] gap-[177px]">
        {/* Left Side: Title and Description */}
        <FadeContent
          duration={600}
          delay={200}
          threshold={0.1}
          easing="ease-out"
          initialOpacity={0}
          className="w-[714px] flex-shrink-0 canopy-fade-up-content"
          style={{
            paddingTop: "156.5px",
          }}
        >
          {/* Main Title - Open Sans 600, 64px, line-height: 1.0625em (68px) */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "64px",
              lineHeight: "1.0625em",
              color: "#0D1117",
            }}
          >
            Canopy Insights
          </h1>

          {/* Description - Open Sans 400, 24px, line-height: 1.333em (32px) */}
          <p
            style={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "1.3333333333333333em",
              color: "#777777",
            }}
          >
            At Canopy, every strategic decision is grounded in rigorous
            analysis. Canopy Insights is our dedicated platform for publishing
            thought leadership, field research, and market intelligence.
          </p>
        </FadeContent>

        {/* Right Side: Decorative Image Group */}
        <div className="flex-1 flex justify-start">
          <FadeContent
            duration={500}
            delay={100}
            threshold={0.1}
            easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            initialOpacity={0}
            className="relative canopy-scale-in-image"
            style={{
              width: "309px",
              height: "388.5px",
              marginTop: "76px",
            }}
          >
            {/* Background decorator - 273px × 354px at relative position */}
            <div
              className="absolute"
              style={{
                left: "0px",
                top: "34.5px",
                width: "273px",
                height: "354px",
                backgroundColor: "#232A26",
              }}
            />

            {/* Main bird image - 276px × 354px at relative position */}
            <div
              className="absolute"
              style={{
                left: "33px",
                top: "0px",
                width: "276px",
                height: "354px",
              }}
            >
              <Image
                src="/assets/desktop/canopy-insight/canopy-insight-image.png"
                alt="Canopy Insight Bird"
                width={276}
                height={354}
                className="object-cover w-full h-full"
              />
            </div>
          </FadeContent>
        </div>
      </div>
    </div>
  );
}

export default CanopyInsightBannerDesktop;
