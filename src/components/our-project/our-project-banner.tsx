"use client";

import { motion } from "motion/react";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { OurProjectBannerProps } from "@/src/types/banner";
import { useSimpleMotion, SIMPLE_ANIMATIONS } from "@/src/hooks/responsive/use-simple-motion";

export function OurProjectBanner({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: OurProjectBannerProps) {
  // Simple Motion animations
  const titleMotion = useSimpleMotion('our-project-title');
  const subtitleMotion = useSimpleMotion('our-project-subtitle');
  
  return (
    <div className="relative w-full bg-[#232A26]">
      <NavigationMenu
        menuItems={menuItems}
        logoUrl={logoUrl}
        mobileMenuIconColor="#F1F5F9"
        mobileMenuStyles={mobileMenuStyles}
        activeItem="Our Project"
      />

      {/* Main Content Section */}
      <div className="relative z-10 px-6 md:px-[120px] pb-16 pt-16 md:pt-20">
        <div className="max-w-[392px] mx-auto md:mx-0 md:max-w-[600px] lg:max-w-[800px]">
          <div className="flex flex-col gap-3">
            <motion.h1
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...titleMotion}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-open-sans font-semibold text-xl leading-[1.5em] text-[#DDDDDD]"
            >
              Our portfolio is anchored in forest-based nature solutions that
              deliver measurable climate impact through protection and
              restoration.
            </motion.h1>

            <motion.p
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...subtitleMotion}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="font-open-sans font-normal text-sm text-[#949494]"
              style={{ lineHeight: "1.428" }}
            >
              Each one developed in accordance with standards and methodologies
              recognized by the ICVCM as compliant with the Core Carbon
              Principles (CCP).
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjectBanner;
