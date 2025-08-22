"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BannerProps } from "@/src/types/banner";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
// import { ServiceCard } from "./service-card"; // Temporarily commented - unused
import { ServiceCardData } from "@/src/types/service";

// Desktop Service Card Icon Component
function DesktopServiceCardIcon({
  iconType,
}: {
  iconType: ServiceCardData["iconType"];
}) {
  const getIconPath = () => {
    switch (iconType) {
      case "arr":
        return "/assets/icon/arr-icon.png";
      case "redd":
        return "/assets/icon/redd-icon.png";
      case "wrc":
        return "/assets/icon/wrc-icon.png";
      case "biochar":
        return "/assets/icon/blochar-icon.png";
      default:
        return null;
    }
  };

  const iconPath = getIconPath();
  if (!iconPath) return null;

  return (
    <Image
      src={iconPath}
      alt={`${iconType} icon`}
      width={32}
      height={32}
      className="shrink-0"
    />
  );
}

// Desktop Service Card Component for Banner Overlay
function DesktopServiceCard({
  service,
  index,
}: {
  service: ServiceCardData;
  index: number;
}) {
  const cardMotion = useSimpleMotion(`banner-service-card-${service.id}`);

  return (
    <motion.div
      {...SIMPLE_ANIMATIONS.scaleIn}
      {...cardMotion}
      transition={{
        duration: 0.5,
        delay: index * 0.15 + 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="bg-[#EEF0F2] w-[470px] h-[240px] p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0"
    >
      <div className="w-full h-full flex flex-col gap-1">
        {/* Header - Icon */}
        <div className="flex items-center justify-center h-12">
          <DesktopServiceCardIcon iconType={service.iconType} />
        </div>

        <div className="flex flex-col gap-1 mt-2">
          {/* Title - Abbreviation */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.95,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1
            }}
          >
            <h2 className="font-inter font-bold text-[#1e2e26] text-[14px]">
              {service.abbreviation}
            </h2>
          </motion.div>

          {/* Subtitle - Full Title */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.95,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2
            }}
          >
            <h3 className="font-open-sans font-semibold text-[#7b7b7b] leading-[1.5] text-[12px]">
              {service.fullTitle}
            </h3>
          </motion.div>

          {/* Description */}
          <motion.div 
            className="flex-1 flex items-start justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.95,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3
            }}
          >
            <p className="font-open-sans font-normal text-[#5B5F58] text-xs leading-[1.43] text-center max-w-[360px]">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Banner({
  title,
  subtitle,
  menuItems,
  logoUrl,
  mobileMenuStyles,
  services,
}: BannerProps) {
  // Simple Motion animations with persistence
  const titleMotion = useSimpleMotion("home-title");
  const subtitleMotion = useSimpleMotion("home-subtitle");
  const decoratorMotion = useSimpleMotion("home-decorator");

  return (
    <div className="relative w-full h-[832px] lg:h-[1300px] overflow-hidden flex flex-col">
      {/* Mobile Background - Keep existing mobile layout */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src="/assets/banner-bg-mobile.png"
          alt="Canopy Carbon mobile background"
          fill
          className="object-cover"
          priority
        />

        {/* Mobile Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        />
      </div>

      {/* Desktop Layout - New 4/6 Split Layout */}
      <div className="hidden lg:flex absolute inset-0 z-0">
        {/* Left Side - Decorator Icon (4/10 width) */}
        <div className="w-2/5 flex items-center justify-center bg-white">
          <motion.div
            {...SIMPLE_ANIMATIONS.fadeInLeft}
            {...decoratorMotion}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src="/assets/desktop/home/decorator-icon.png"
              alt="Canopy Carbon decorator icon"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Right Side - Content (6/10 width) */}
        <div className="w-3/5 bg-white flex flex-col justify-end pr-8 gap-40">
          <div>
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1.35,
                ease: [0.175, 0.885, 0.32, 1.275],
                delay: 0.2
              }}
              className="text-[88px] leading-[110px] font-normal text-black mb-6"
              style={{
                fontFamily: "sans-serif",
                letterSpacing: "normal",
                fontWeight: "400",
                lineHeight: "1.25em",
              }}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1.35,
                ease: [0.175, 0.885, 0.32, 1.275],
                delay: 0.4
              }}
              className="text-[20px] leading-[33.4px] font-normal text-[#94A4B1] mb-8"
              style={{
                fontFamily: "sans-serif",
                letterSpacing: "normal",
                fontWeight: "400",
                lineHeight: "1.25em",
              }}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Service Cards - Desktop Only */}
          {services && (
            <motion.div
              {...SIMPLE_ANIMATIONS.fadeInUp}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="grid grid-cols-2 grid-rows-2"
              style={{
                width: "980px",
                gap: "40px",
                gridTemplateColumns: "470px 470px",
                gridTemplateRows: "240px 240px",
              }}
            >
              {services.map((service, index) => (
                <DesktopServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <NavigationMenu
        menuItems={menuItems}
        logoUrl={logoUrl}
        mobileMenuStyles={mobileMenuStyles}
        activeItem="Home"
      />

      {/* Mobile Content - Keep existing mobile layout */}
      <div className="lg:hidden flex-1 z-30 flex items-end pb-[50%] pl-4">
        <div className="flex flex-col gap-6">
          {/* Main Title */}
          <motion.h1
            {...SIMPLE_ANIMATIONS.fadeInLeft}
            {...titleMotion}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-roboto font-black text-3xl md:text-5xl leading-[1.0625] text-[#F0F0F0]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...SIMPLE_ANIMATIONS.fadeInLeft}
            {...subtitleMotion}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="font-open-sans font-semibold text-lg md:text-2xl leading-[1.25] text-[#B7C0C9]"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
