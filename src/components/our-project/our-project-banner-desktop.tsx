"use client";

import { motion } from "motion/react";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { OurProjectBannerProps } from "@/src/types/banner";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

// Responsive scaling helper for 768px-1024px (tablet)
const createResponsiveValueTablet = (
  value768: number,
  value1024: number
): string => {
  return `clamp(
    ${value768}px,
    calc(${value768}px + (${value1024} - ${value768}) * ((100vw - 768px) / 256)),
    ${value1024}px
  )`;
};

// Responsive scaling helper for 1024px-2200px (desktop)
// Using 1440px as base from Figma
const createResponsiveValueDesktop = (
  value1024: number,
  value1440: number,
  value2200: number
): string => {
  return `clamp(
    ${value1024}px,
    min(
      calc(${value1024}px + (${value1440} - ${value1024}) * ((100vw - 1024px) / 416)),
      calc(${value1440}px + (${value2200} - ${value1440}) * ((100vw - 1440px) / 760))
    ),
    ${value2200}px
  )`;
};

export function OurProjectBannerDesktop({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: OurProjectBannerProps) {
  // Simple Motion animations with persistence
  const titleMotion = useSimpleMotion("our-project-desktop-title");
  const subtitleMotion = useSimpleMotion("our-project-desktop-subtitle");

  return (
    <div className="relative w-full">
      {/* Tablet Layout - 768px to 1024px */}
      <div className="hidden md:block lg:hidden relative w-full overflow-hidden bg-[#232A26]">
        <div className="relative z-20 flex flex-col">
          {/* Top spacing - 32px fixed */}
          <div className="w-full h-[32px]"></div>

          {/* Navigation Menu - Full Width */}
          <div className="w-full">
            <NavigationMenu
              menuItems={menuItems}
              logoUrl={logoUrl}
              mobileMenuIconColor="#F1F5F9"
              mobileMenuStyles={mobileMenuStyles}
              activeItem="Our Projects"
              useWhiteMenuIcon={true}
              desktopTextColor="#F1F5F9"
              removePadding={true}
              useOurProjectDesign={true}
            />
          </div>

          {/* Content Wrapper with Max Width */}
          <div className="max-w-[2200px] mx-auto w-full">
            {/* Spacing between Navigation and Content */}
            <div
              style={{
                height: createResponsiveValueTablet(28, 38),
              }}
            ></div>

            {/* Main Content Section */}
            <div
              className="flex flex-col"
              style={{
                paddingLeft: createResponsiveValueTablet(21.5, 29),
                paddingRight: createResponsiveValueTablet(21.5, 29),
                paddingBottom: createResponsiveValueTablet(80, 107),
                gap: createResponsiveValueTablet(24, 32),
              }}
            >
              <motion.h1
                {...SIMPLE_ANIMATIONS.fadeInUp}
                {...titleMotion}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-[#DDDDDD]"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: createResponsiveValueTablet(20, 27),
                  lineHeight: "1.362em",
                  maxWidth: createResponsiveValueTablet(694, 925),
                }}
              >
                Our portfolio is anchored in forest-based nature solutions that
                deliver measurable climate impact through protection and
                restoration.
              </motion.h1>

              <motion.p
                {...SIMPLE_ANIMATIONS.fadeInUp}
                {...subtitleMotion}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-[#949494]"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: createResponsiveValueTablet(20, 27),
                  lineHeight: "1.362em",
                  letterSpacing: "-0.02em",
                  maxWidth: createResponsiveValueTablet(680, 907),
                }}
              >
                Each one developed in accordance with standards and
                methodologies recognized by the ICVCM as compliant with the Core
                Carbon Principles (CCP).
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - 1024px to 2200px */}
      <div className="hidden lg:block relative w-full overflow-hidden bg-[#232A26]">
        <div className="relative z-20 flex flex-col">
          {/* Top spacing */}
          <div className="h-[32px] block 3xl:hidden"></div>

          {/* Navigation Menu - Full Width */}
          <div className="w-full">
            <NavigationMenu
              menuItems={menuItems}
              logoUrl={logoUrl}
              mobileMenuIconColor="#F1F5F9"
              mobileMenuStyles={mobileMenuStyles}
              activeItem="Our Projects"
              useWhiteMenuIcon={true}
              desktopTextColor="#F1F5F9"
              removePadding={true}
              useOurProjectDesign={true}
            />
          </div>

          {/* Content Wrapper with Max Width */}
          <div className="max-w-[1920] mx-auto w-full">
            {/* Spacing between Navigation and Content */}
            <div
              style={{
                height: createResponsiveValueDesktop(73, 80, 122),
              }}
            ></div>

            {/* Main Content Section */}
            <div
              className="flex flex-col"
              style={{
                paddingLeft: createResponsiveValueDesktop(102, 143, 170),
                paddingRight: createResponsiveValueDesktop(49, 68, 104),
                paddingBottom: createResponsiveValueDesktop(57, 80, 122),
                gap: createResponsiveValueDesktop(15, 21, 24),
              }}
            >
              <motion.h1
                {...SIMPLE_ANIMATIONS.fadeInUp}
                {...titleMotion}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-[#DEDEDE] font-work-sans 3xl:font-avenir-heavy"
                style={{
                  fontWeight: 600,
                  fontSize: createResponsiveValueDesktop(20, 28, 35),
                  lineHeight: "1.173em",
                  maxWidth: createResponsiveValueDesktop(803, 1126, 1248),
                }}
              >
                Our portfolio is anchored in forest-based nature solutions that
                deliver measurable climate impact through protection and
                restoration.
              </motion.h1>

              <motion.p
                {...SIMPLE_ANIMATIONS.fadeInUp}
                {...subtitleMotion}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-[#949494] font-open-sans font-normal"
                style={{
                  fontSize: createResponsiveValueDesktop(13, 18, 22),
                  lineHeight: "1.362em",
                  letterSpacing: "-0.02em",
                  maxWidth: createResponsiveValueDesktop(563, 790, 1010),
                }}
              >
                Each one developed in accordance with standards and
                methodologies recognized by the ICVCM as compliant with the Core
                Carbon Principles (CCP).
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjectBannerDesktop;
