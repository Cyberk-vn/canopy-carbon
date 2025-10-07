"use client";

import { motion } from "motion/react";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { OurProjectBannerProps } from "@/src/types/banner";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

export function OurProjectBanner({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: OurProjectBannerProps) {
  // Simple Motion animations
  const titleMotion = useSimpleMotion("our-project-title");
  const subtitleMotion = useSimpleMotion("our-project-subtitle");

  return (
    <div className="relative w-full bg-[#232A26]">
      <NavigationMenu
        menuItems={menuItems}
        logoUrl={logoUrl}
        mobileMenuIconColor="#F1F5F9"
        mobileMenuStyles={mobileMenuStyles}
        activeItem="Our Projects"
        useWhiteMenuIcon={true}
      />

      {/* Main Content Section */}
      <div className="relative z-10 px-6 pb-[16px] pt-[73px]">
        <div className="mx-auto">
          <div className="flex flex-col gap-3">
            <motion.h1
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...titleMotion}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className=" font-semibold text-xl xxs:text-[21px] xs:text-[22px] leading-[30px] text-[#DDDDDD]"
            >
              Our portfolio is anchored in forest-based nature solutions that
              deliver measurable climate impact <br /> through protection and{" "}
              <br />
              restoration.
            </motion.h1>

            <motion.p
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...subtitleMotion}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className=" font-normal text-sm xxs:text-[15px] xs:text-[16px] text-[#949494]"
              style={{ lineHeight: "20px" }}
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
