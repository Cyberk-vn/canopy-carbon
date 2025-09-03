"use client";

import { motion } from "motion/react";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { OurProjectBannerProps } from "@/src/types/banner";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

export function OurProjectBannerDesktop({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: OurProjectBannerProps) {
  // Simple Motion animations with persistence
  const titleMotion = useSimpleMotion("our-project-desktop-title");
  const subtitleMotion = useSimpleMotion("our-project-desktop-subtitle");

  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Main Banner Section */}
      <div className="relative min-h-[438px] w-full overflow-hidden bg-[#232A26]">
          {/* Unified Grid Layout - Navigation + Content */}
          <div
            className="relative z-20"
            style={{
              display: "grid",
              gridTemplateColumns: "68px 1fr 68px",
              gridTemplateRows: "32px auto 80px auto",
              minHeight: "100%",
            }}
          >
            {/* Top spacing */}
            <div style={{ gridColumn: "1 / -1", gridRow: "1" }}></div>

            {/* Navigation Menu - Grid Row 2, spans all columns */}
            <div
              style={{
                gridColumn: "1 / -1",
                gridRow: "2",
              }}
            >
              <NavigationMenu
                menuItems={menuItems}
                logoUrl={logoUrl}
                mobileMenuIconColor="#F1F5F9"
                mobileMenuStyles={mobileMenuStyles}
                activeItem="Our Project"
                useWhiteMenuIcon={true}
                desktopTextColor="#F1F5F9"
                desktopMargin="mx-[68px]"
                removePadding={true}
              />
            </div>

            {/* Spacing row */}
            <div style={{ gridColumn: "1 / -1", gridRow: "3" }}></div>

            {/* Main Content Section */}
            <div
              className="flex flex-col justify-center"
              style={{
                gridColumn: "2",
                gridRow: "4",
              }}
            >
              <div className="flex flex-col gap-6">
                <motion.h1
                  {...SIMPLE_ANIMATIONS.fadeInUp}
                  {...titleMotion}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="font-open-sans font-semibold text-[28px] leading-[38px] text-[#DDDDDD]"
                >
                  Our portfolio is anchored in forest-based nature solutions
                  that deliver measurable climate impact through protection and
                  restoration.
                </motion.h1>

                <motion.p
                  {...SIMPLE_ANIMATIONS.fadeInUp}
                  {...subtitleMotion}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="font-open-sans font-normal text-[20px] leading-[27px] tracking-[-0.02em] text-[#949494] max-w-[790px]"
                >
                  Each one developed in accordance with standards and
                  methodologies recognized by the ICVCM as compliant with the
                  Core Carbon Principles (CCP).
                </motion.p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default OurProjectBannerDesktop;
