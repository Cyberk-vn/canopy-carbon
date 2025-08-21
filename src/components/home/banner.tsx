"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BannerProps } from "@/src/types/banner";
import { useSimpleMotion, SIMPLE_ANIMATIONS } from "@/src/hooks/responsive/use-simple-motion";
import { NavigationMenu } from "@/src/components/common/navigation-menu";

export function Banner({ title, subtitle, menuItems, logoUrl, mobileMenuStyles }: BannerProps) {

  // Simple Motion animations with persistence
  const titleMotion = useSimpleMotion('home-title');
  const subtitleMotion = useSimpleMotion('home-subtitle');
  return (
    <div className="relative w-full h-[832px] lg:h-[700px] overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <div className="hidden lg:block">
          <Image
            src="/assets/banner-shared-component/background.png"
            alt="Canopy Carbon background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile Background */}
        <div className="lg:hidden block">
          <Image
            src="/assets/banner-bg-mobile.png"
            alt="Canopy Carbon mobile background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        />

        {/* Decorative Circle */}
        <div className="absolute z-20 right-4 md:right-[120px] top-[164px] hidden lg:block">
          <div className="relative">
            <Image
              src="/assets/banner-shared-component/circle.png"
              alt=""
              width={371}
              height={371}
              className="opacity-60"
            />
            {/* Circle Overlay */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.4) 100%)",
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </div>
      </div>

      <NavigationMenu menuItems={menuItems} logoUrl={logoUrl} mobileMenuStyles={mobileMenuStyles} />

      {/* Main Content */}
      <div className="flex-1 z-30 flex items-end lg:items-center pb-[50%] lg:pb-0 pl-4 md:pl-[120px]">
        <div className="flex flex-col gap-6">
          {/* Main Title */}
          <motion.h1
            {...SIMPLE_ANIMATIONS.fadeInLeft}
            {...titleMotion}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-roboto font-black text-3xl md:text-5xl lg:text-[64px] leading-[1.0625] text-[#F0F0F0]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...SIMPLE_ANIMATIONS.fadeInLeft}
            {...subtitleMotion}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="font-open-sans font-semibold text-lg md:text-2xl lg:text-[32px] leading-[1.25] text-[#B7C0C9] max-w-[617.84px]"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
