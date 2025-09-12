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

// Image imports
import BannerBgMobile from "../../../public/assets/banner-bg-mobile.png";
import BannerDecoratorMobile from "../../../public/assets/banner-decorator-mobile.png";
import DesktopDecoratorIcon from "../../../public/assets/desktop/home/decorator-icon.png";

// Icon imports for service cards
import ArrIcon from "../../../public/assets/icon/arr-icon.png";
import ReddIcon from "../../../public/assets/icon/redd-icon.png";
import WrcIcon from "../../../public/assets/icon/wrc-icon.png";
import BiocharIcon from "../../../public/assets/icon/blochar-icon.png";

// Desktop Service Card Icon Component
function DesktopServiceCardIcon({
  iconType,
}: {
  iconType: ServiceCardData["iconType"];
}) {
  const getIconSrc = () => {
    switch (iconType) {
      case "arr":
        return ArrIcon;
      case "redd":
        return ReddIcon;
      case "wrc":
        return WrcIcon;
      case "biochar":
        return BiocharIcon;
      default:
        return null;
    }
  };

  const iconSrc = getIconSrc();
  if (!iconSrc) return null;

  return (
    <Image
      src={iconSrc}
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
      className="bg-[#EEF0F2] w-full max-w-[280px] lg:max-w-[300px] xl:max-w-[340px] xxl:max-w-[371px] xxl:w-[371px] p-4 lg:p-5 xxl:p-6 flex-shrink-0"
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
              className="font-semibold text-[14px] lg:text-[15px] xxl:text-[16px] leading-[20px] lg:leading-[22px] xxl:leading-[24px] text-[#1D2E27]"
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
              className="font-semibold text-[13px] lg:text-[13px] xxl:text-[14px] leading-[18px] lg:leading-[19px] xxl:leading-[20px] text-[#5B5F58] text-center"
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
              className="font-normal text-[11px] lg:text-[11px] xxl:text-[12px] leading-[16px] lg:leading-[17px] xxl:leading-[18px] text-[#5B5F58] text-center"
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
          src={BannerBgMobile}
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
                src={BannerDecoratorMobile}
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
                className="font-roboto text-[32px] xxs:text-[33px] xs:text-[34px] leading-[38px] text-[#F0F0F0]"
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
                className="font-open-sans font-semibold text-[15px] xxs:text-[16px] xs:text-[17px] leading-[24px] text-[#B7C0C9] max-w-[309px] xxs:max-w-[320px] xs:max-w-[335px]"
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
                gridTemplateColumns:
                  "clamp(40px, 5vw, 68px) clamp(320px, 32vw, 460px) clamp(40px, 5.5vw, 78px) 1fr",
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
                    src={DesktopDecoratorIcon}
                    alt="Canopy Carbon decorator icon"
                    width={460}
                    height={460}
                    className="object-contain w-full h-auto max-w-[320px] lg:max-w-[350px] xl:max-w-[420px] xxl:max-w-[460px]"
                    priority
                  />
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="col-start-4 row-start-2 flex flex-col gap-2 justify-center mt-[120px] lg:mt-[140px] xl:mt-[170px] xxl:mt-[195px] mr-[68px] xxl:mr-0">
                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1.35,
                    ease: [0.175, 0.885, 0.32, 1.275],
                    delay: 0.2,
                  }}
                  className="font-bold text-[48px] lg:text-[52px] xl:text-[58px] xxl:text-[64px] leading-[1.1] lg:leading-[56px] xl:leading-[62px] xxl:leading-[68px] text-[#1E2E26]"
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
                  <div className="flex items-end mt-[48px] lg:mt-[56px] xl:mt-[64px] xxl:mt-[72px]">
                    <motion.div
                      {...SIMPLE_ANIMATIONS.fadeInUp}
                      transition={{
                        duration: 0.6,
                        delay: 0.7,
                        ease: "easeOut",
                      }}
                      className="grid grid-cols-2 grid-rows-2 w-full max-w-[580px] lg:max-w-[620px] xl:max-w-[700px] xxl:w-[766px] gap-4 xxl:gap-6"
                      style={{
                        gridTemplateColumns: "1fr 1fr",
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
              className="font-open-sans font-bold text-[#9CA3AF] text-[18px] lg:text-[20px] xl:text-[22px] xxl:text-[24px] text-start max-w-[600px] lg:max-w-[680px] xl:max-w-[730px] xxl:max-w-[782px] ml-[40px] lg:ml-[50px] xl:ml-[60px] xxl:ml-[68px]"
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
