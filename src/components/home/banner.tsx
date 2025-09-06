"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BannerProps } from "@/src/types/banner";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { Container } from "@/src/components/shared";
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
      width={24}
      height={24}
      className="shrink-0"
    />
  );
}

// Desktop Service Card Component
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
        ease: "easeOut",
      }}
      className="bg-[#EEF0F2] w-[371px] p-6 flex-shrink-0"
    >
      <div className="w-full h-full flex flex-col gap-1">
        {/* Header - Icon */}
        <div className="flex items-center justify-center">
          <DesktopServiceCardIcon iconType={service.iconType} />
        </div>

        <div className="flex flex-col gap-1 mt-3">
          {/* Title - Abbreviation */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              ease: "easeOut",
              delay: 0.1,
            }}
          >
            <h2
              className="font-semibold text-[16px] leading-[24px] text-[#1D2E27]"
              style={{
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}
            >
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
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <h3
              className="font-semibold text-[14px] leading-[20px] text-[#5B5F58] text-center"
              style={{
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}
            >
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
              ease: "easeOut",
              delay: 0.3,
            }}
          >
            <p
              className="font-normal text-[12px] leading-[18px] text-[#5B5F58] text-center"
              style={{
                fontFamily: "Open Sans",
                fontWeight: "400",
              }}
            >
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
  const mobileDecoratorMotion = useSimpleMotion("mobile-banner-decorator");

  return (
    <div className="relative w-full h-[832px] lg:h-[1170px] overflow-hidden flex flex-col lg:mb-[40px]">
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

        {/* Mobile Layout Container - NEW FLEXBOX STRUCTURE */}
        <div className="absolute inset-0 z-[15] flex flex-col justify-between mt-[40%] gap-[30px]">
          {/* Mobile Decorator */}
          <div className="flex justify-end">
            <motion.div
              {...SIMPLE_ANIMATIONS.scaleIn}
              {...mobileDecoratorMotion}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-[319px] h-[319px]"
            >
              <Image
                src="/assets/banner-decorator-mobile.png"
                alt="Mobile banner decorator"
                width={319}
                height={319}
                className="object-contain object-right w-[319px] h-[319px]"
              />
            </motion.div>
          </div>

          {/* Mobile Content - MOVED FROM ORIGINAL LOCATION */}
          <div className="flex-1 flex items-start pl-6">
            <div className="flex flex-col gap-[6px]">
              {/* Main Title */}
              <motion.h1
                {...SIMPLE_ANIMATIONS.fadeInLeft}
                {...titleMotion}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="font-roboto text-[32px] leading-[38px] text-[#F0F0F0]"
                style={{
                  fontWeight: 900,
                }}
              >
                {title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                {...SIMPLE_ANIMATIONS.fadeInLeft}
                {...subtitleMotion}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="font-open-sans font-semibold text-[15px] leading-[24px] text-[#B7C0C9] max-w-[309px]"
                style={{
                  fontWeight: 600,
                }}
              >
                {subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* White Background Overlay - First 604px from top */}
      <div className="hidden lg:block absolute top-[604px] left-0 right-0 h-[566px] bg-[#FCFCFC] z-0"></div>

      {/* Desktop Layout - Grid Based */}
      <div className="hidden lg:block absolute inset-0 z-10">
        <Container maxWidth="default" padding="default" className="h-full">
          <div>
            <div
              className="grid h-full"
              style={{
                gridTemplateColumns: "68px 460px 78px 1fr",
                gridTemplateRows: "111px auto 80px",
              }}
            >
              {/* Logo Decorator */}
              <div className="col-start-2 row-start-2">
                <motion.div
                  {...SIMPLE_ANIMATIONS.fadeInLeft}
                  {...decoratorMotion}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src="/assets/desktop/home/decorator-icon.png"
                    alt="Canopy Carbon decorator icon"
                    width={460}
                    height={460}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="col-start-4 row-start-2 flex flex-col gap-2 justify-center mt-[195px]">
                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1.35,
                    ease: [0.175, 0.885, 0.32, 1.275],
                    delay: 0.2,
                  }}
                  className="font-bold text-[64px] leading-[68px] text-[#1E2E26]"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "700",
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
                    delay: 0.4,
                  }}
                  className="text-[16px] leading-[40px] font-normal text-[#B7C0C9] max-w-[618px]"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "400",
                  }}
                >
                  {subtitle}
                </motion.p>

                {/* Service Cards */}
                {services && (
                  <div className="flex items-end mt-[72px]">
                    <motion.div
                      {...SIMPLE_ANIMATIONS.fadeInUp}
                      transition={{
                        duration: 0.6,
                        delay: 0.7,
                        ease: "easeOut",
                      }}
                      className="grid grid-cols-2 grid-rows-2"
                      style={{
                        width: "766px",
                        gap: "24px",
                        gridTemplateColumns: "371px 371px",
                        gridTemplateRows: "auto auto",
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
                  </div>
                )}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.35,
                ease: [0.175, 0.885, 0.32, 1.275],
                delay: 0.5,
              }}
              className="font-open-sans font-bold text-[#9CA3AF] text-[24px] text-start max-w-[782px] ml-[68px]"
              style={{
                lineHeight: "34px",
                fontFamily: "Open Sans",
              }}
            >
              We originate and deliver large-scale nature-based carbon offset
              projects, engineered for long-term impact and institutional-grade
              integrity.
            </motion.p>
          </div>
        </Container>
      </div>

      <NavigationMenu
        menuItems={menuItems}
        logoUrl={logoUrl}
        mobileMenuStyles={mobileMenuStyles}
        activeItem="Home"
      />
    </div>
  );
}
