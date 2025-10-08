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
// Mobile icons (PNG)
import MobileArrIcon from "../../../public/assets/icon/arr-icon.png";
import MobileReddIcon from "../../../public/assets/icon/redd-icon.png";
import MobileWrcIcon from "../../../public/assets/icon/wrc-icon.png";
import MobileBiocharIcon from "../../../public/assets/icon/blochar-icon.png";

// Desktop/Tablet icons (SVG)
import DesktopArrIcon from "../../../public/assets/desktop/icon/arr-icon.svg";
import DesktopReddIcon from "../../../public/assets/desktop/icon/redd-icon.svg";
import DesktopWrcIcon from "../../../public/assets/desktop/icon/wrc-icon.svg";
import DesktopBiocharIcon from "../../../public/assets/desktop/icon/blochar-icon.svg";

// Desktop Service Card Icon Component (uses SVG icons)
function DesktopServiceCardIcon({
  iconType,
}: {
  iconType: ServiceCardData["iconType"];
}) {
  const getIconSrc = () => {
    switch (iconType) {
      case "arr":
        return DesktopArrIcon;
      case "redd":
        return DesktopReddIcon;
      case "wrc":
        return DesktopWrcIcon;
      case "biochar":
        return DesktopBiocharIcon;
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

// Mobile Service Card Icon Component (uses PNG icons)
function MobileServiceCardIcon({
  iconType,
}: {
  iconType: ServiceCardData["iconType"];
}) {
  const getIconSrc = () => {
    switch (iconType) {
      case "arr":
        return MobileArrIcon;
      case "redd":
        return MobileReddIcon;
      case "wrc":
        return MobileWrcIcon;
      case "biochar":
        return MobileBiocharIcon;
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

// Tablet Service Card Component (768px - 1024px)
// Using exact 768px Figma specifications
function TabletServiceCard({
  service,
  index,
}: {
  service: ServiceCardData;
  index: number;
}) {
  const cardMotion = useSimpleMotion(
    `banner-tablet-service-card-${service.id}`
  );

  return (
    <motion.div
      {...SIMPLE_ANIMATIONS.scaleIn}
      {...cardMotion}
      transition={{
        duration: 0.5,
        delay: index * 0.15 + 0.7,
        ease: "easeOut",
      }}
      className="bg-[#EEF0F2] w-full flex flex-col items-center"
      style={{
        padding: "24px",
        gap: "16px",
      }}
    >
      {/* Header with Icon and Title */}
      <div className="flex flex-col items-center" style={{ gap: "12px" }}>
        {/* Icon */}
        <div className="flex items-center justify-center">
          <DesktopServiceCardIcon iconType={service.iconType} />
        </div>

        {/* Title - Abbreviation (768px: OS 600 16px 1.5em #1D2E27) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.95,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="font-['Open_Sans'] text-[#1D2E27] text-center"
          style={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "1.5em",
          }}
        >
          {service.abbreviation}
        </motion.h2>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center w-full" style={{ gap: "4px" }}>
        {/* Subtitle - Full Title (768px: OS 600 14px 1.4286em #5B5F58) */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.95,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="font-['Open_Sans'] text-[#5B5F58] text-center"
          style={{
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "1.4285714285714286em",
          }}
        >
          {service.fullTitle}
        </motion.h3>

        {/* Description (768px: OS 400 12px 1.5em #5B5F58) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.95,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="font-['Open_Sans'] text-[#5B5F58] text-center"
          style={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "1.5em",
          }}
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
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
      className="bg-[#EEF0F2] w-full max-w-[280px] lg:max-w-[300px] xl:max-w-[340px] xxl:max-w-[400px] 2xl:max-w-[450px] 3xl:max-w-[500px] p-4 lg:p-5 xl:p-6 xxl:p-7 2xl:p-8 flex-shrink-0"
    >
      <div className="w-full h-full flex flex-col gap-1">
        {/* Header - Icon */}
        <div className="flex items-center justify-center">
          <DesktopServiceCardIcon iconType={service.iconType} />
        </div>

        <div className="flex flex-col gap-1 mt-3">
          {/* Title - Abbreviation (ARR, REDD, etc.)
              768px: OS 600 16px 1.5em → 1440px: Roboto 800 15px 1.6em → 1920px: OS 700 14px 1.7143em */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              ease: "easeOut",
              delay: 0.1,
            }}
          >
            <h2
              className="md:font-['Open_Sans'] xl:font-['Roboto'] 2xl:font-['Open_Sans'] text-[#1D2E27]"
              style={{
                fontWeight:
                  "clamp(700, min(calc(600 + 200 * (100vw - 768px) / 672), calc(800 - 100 * (100vw - 1440px) / 480)), 800)",
                fontSize: "clamp(14px, calc(16px - 2 * (100vw - 768px) / 1152), 16px)",
                lineHeight:
                  "clamp(1.5em, calc(1.5em + 0.2142857 * (100vw - 768px) / 1152), 1.7142857em)",
              }}
            >
              {service.abbreviation}
            </h2>
          </motion.div>

          {/* Subtitle - Full Title
              768px: OS 600 14px 1.4286em → 1440px: OS 600 11px 1.8182em → 1920px: OS 600 12px 1.6667em */}
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
              className="font-['Open_Sans'] text-[#5B5F58] text-center"
              style={{
                fontWeight: 600,
                fontSize:
                  "clamp(11px, max(calc(14px - 3 * (100vw - 768px) / 672), calc(11px + 1 * (100vw - 1440px) / 480)), 14px)",
                lineHeight:
                  "clamp(1.4285714em, max(calc(1.4285714em + 0.3896104 * (100vw - 768px) / 672), calc(1.8181818em - 0.1515151 * (100vw - 1440px) / 480)), 1.8181818em)",
              }}
            >
              {service.fullTitle}
            </h3>
          </motion.div>

          {/* Description
              768px: OS 400 12px 1.5em → 1440px: OS 400 11px 1.6364em → 1920px: OS 400 14px 1.2857em */}
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
              className="font-['Open_Sans'] text-[#5B5F58] text-center"
              style={{
                fontWeight: 400,
                fontSize:
                  "clamp(11px, max(calc(12px - 1 * (100vw - 768px) / 672), calc(11px + 3 * (100vw - 1440px) / 480)), 14px)",
                lineHeight:
                  "clamp(1.2857143em, max(calc(1.5em + 0.1363636 * (100vw - 768px) / 672), calc(1.6363636em - 0.3506493 * (100vw - 1440px) / 480)), 1.6363636em)",
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
    <div className="relative w-full h-[832px] md:h-[1050px] lg:h-[1200px] xl:h-[1440px] xxl:h-[1600px] overflow-hidden flex flex-col lg:mb-[40px]">
      {/* Mobile Background - Keep existing mobile layout */}
      <div className="md:hidden absolute inset-0 z-0">
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
                className=" font-semibold text-[15px] xxs:text-[16px] xs:text-[17px] leading-[24px] text-[#B7C0C9] max-w-[309px] xxs:max-w-[320px] xs:max-w-[335px]"
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
      <div className="hidden xxl:block absolute lg:top-[600px] xl:top-[650px] 2xl:top-[803px] left-0 right-0 h-[920px] bg-[#FCFCFC] z-0"></div>

      {/* Tablet/Medium Desktop Layout - 768px to 1024px */}
      <div
        className="hidden md:block lg:hidden absolute inset-0 z-10 bg-[#FCFCFC] h-full"
        style={{ pointerEvents: "none" }}
      >
        <Container maxWidth="full" padding="none" className="h-full">
          <div
            className="mx-auto w-full h-full flex flex-col mt-10"
            style={{
              maxWidth: "100%",
              paddingLeft: "clamp(16px, 2vw, 24px)",
              paddingRight: "clamp(16px, 2vw, 24px)",
              paddingTop: "clamp(24px, 3vw, 32px)",
              paddingBottom: "clamp(24px, 3vw, 32px)",
            }}
          >
            {/* Main Content Container - Flex with 2-column grid inside */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Top Section - Decorator + Title/Description */}
              <div
                className="grid gap-6 items-center bg-white py-8 md:py-10 lg:py-12"
                style={{
                  gridTemplateColumns: "clamp(184px, 15vw, 300px) 1fr",
                }}
              >
                {/* Decorator Image */}
                <motion.div
                  {...SIMPLE_ANIMATIONS.scaleIn}
                  {...decoratorMotion}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="w-full aspect-square flex-shrink-0"
                  style={{
                    maxWidth: "clamp(184px, 15vw, 300px)",
                    height: "clamp(184px, 15vw, 300px)",
                  }}
                >
                  <Image
                    src={DesktopDecoratorIcon}
                    alt="Canopy Carbon decorator icon"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                    priority
                  />
                </motion.div>

                {/* Title + Description */}
                <div className="flex flex-col gap-3 md:gap-4 justify-center">
                  {/* Main Title */}
                  <motion.h1
                    {...SIMPLE_ANIMATIONS.fadeInLeft}
                    {...titleMotion}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="font-bold leading-[1.3] text-[#1E2E26]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "700",
                      fontSize: "clamp(28px, 4vw, 38px)",
                    }}
                  >
                    {title}
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    {...SIMPLE_ANIMATIONS.fadeInLeft}
                    {...subtitleMotion}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="font-normal leading-[1.5] text-[#B7C0C9]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "400",
                      fontSize: "clamp(16px, 2.2vw, 20px)",
                      maxWidth: "clamp(481px, 70vw, 800px)",
                    }}
                  >
                    {subtitle}
                  </motion.p>
                </div>
              </div>

              {/* Bottom Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                className="font-bold leading-[1.5] text-[#94A4B1]"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  maxWidth: "clamp(514px, 90vw, 720px)",
                }}
              >
                We originate and deliver large-scale nature-based carbon offset
                projects, engineered for long-term impact and
                institutional-grade integrity.
              </motion.p>

              {/* Service Cards - 2x2 Grid */}
              {services && (
                <motion.div
                  {...SIMPLE_ANIMATIONS.fadeInUp}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    ease: "easeOut",
                  }}
                  className="grid grid-cols-2 grid-rows-2 gap-6 w-full"
                  style={{
                    maxWidth: "100%",
                  }}
                >
                  {services.map((service, index) => (
                    <TabletServiceCard
                      key={service.id}
                      service={service}
                      index={index}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Desktop Layout - Grid Based */}
      <div
        className="hidden lg:block absolute inset-0 z-10"
        style={{ pointerEvents: "none" }}
      >
        <Container maxWidth="full" padding="default" className="h-full">
          <div className="max-w-[2200px] mx-auto h-full">
            <div
              className="grid h-full 3xl:grid-cols-[120px_600px_120px_1fr]"
              style={{
                gridTemplateColumns:
                  "clamp(40px, 4vw, 120px) clamp(320px, 32vw, 600px) clamp(40px, 4vw, 120px) minmax(auto, 1100px)",
                gridTemplateRows:
                  "clamp(220px, 8vh, 150px) auto clamp(60px, 6vh, 120px) auto",
              }}
            >
              {/* Logo Decorator */}
              <div className="col-start-2 row-start-2 lg:h-[350px] xl:h-[420px] xxl:h-[460px] 2xl:h-[520px] 3xl:h-[600px]">
                <motion.div
                  {...SIMPLE_ANIMATIONS.fadeInLeft}
                  {...decoratorMotion}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="flex justify-end items-end h-full"
                >
                  <Image
                    src={DesktopDecoratorIcon}
                    alt="Canopy Carbon decorator icon"
                    width={460}
                    height={460}
                    className="object-contain w-full max-w-[320px] lg:max-w-[350px] xl:max-w-[420px] xxl:max-w-[460px] 2xl:max-w-[520px] 3xl:max-w-[600px] h-auto"
                    priority
                  />
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="col-start-4 row-start-2 lg:mr-[32px] xl:mr-[68px] xxl:mr-0 gap-[260px]">
                <div className="gap-2 flex flex-col justify-start">
                  {/* Main Title */}
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1.35,
                      ease: [0.175, 0.885, 0.32, 1.275],
                      delay: 0.2,
                    }}
                    className="font-bold text-[48px] lg:text-[52px] xl:text-[58px] xxl:text-[64px] 2xl:text-[72px] 3xl:text-[80px] leading-[1.1] lg:leading-[56px] xl:leading-[62px] xxl:leading-[68px] 2xl:leading-[76px] 3xl:leading-[84px] text-[#1E2E26]"
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
                    className="text-[16px] lg:text-[17px] xl:text-[18px] xxl:text-[19px] 2xl:text-[20px] 3xl:text-[22px] leading-[40px] lg:leading-[42px] xl:leading-[44px] xxl:leading-[46px] 2xl:leading-[48px] 3xl:leading-[52px] font-normal text-[#B7C0C9] max-w-[618px] xl:max-w-[680px] xxl:max-w-[740px] 2xl:max-w-[800px] 3xl:max-w-[900px]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "400",
                    }}
                  >
                    {subtitle}
                  </motion.p>
                </div>

                {/* Service Cards */}
                {services && (
                  <div className="flex items-end mt-[48px] lg:mt-[200px] xl:mt-[230px] xxl:mt-[277px] 2xl:mt-[277px] 3xl:mt-[300px]">
                    <motion.div
                      {...SIMPLE_ANIMATIONS.fadeInUp}
                      transition={{
                        duration: 0.6,
                        delay: 0.7,
                        ease: "easeOut",
                      }}
                      className="grid grid-cols-2 grid-rows-2 w-full max-w-[580px] lg:max-w-[620px] xl:max-w-[700px] xxl:max-w-[800px] 2xl:max-w-[900px] 3xl:max-w-[1000px] gap-4 xl:gap-5 xxl:gap-6 2xl:gap-7 3xl:gap-8"
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

              {/* Bottom Description */}
              <div className="col-start-2 col-span-3 row-start-4 lg:ml-[165px] xxl:ml-[195px]">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.35,
                    ease: [0.175, 0.885, 0.32, 1.275],
                    delay: 0.5,
                  }}
                  className="font-work-sans font-semibold text-[18px] lg:text-[20px] xl:text-[22px] xxl:text-[24px] 2xl:text-[26px] 3xl:text-[32px] leading-[28px] lg:leading-[30px] xl:leading-[32px] xxl:leading-[34px] 2xl:leading-[36px] 3xl:leading-[38px] text-start max-w-[600px] lg:max-w-[540px] xl:max-w-[630px] xxl:max-w-[680px] 2xl:max-w-[710px] 3xl:max-w-[800px]"
                  style={{
                    color: "#A1AEB9",
                    verticalAlign: "middle",
                    letterSpacing: "0%",
                  }}
                >
                  We originate and deliver large-scale nature-based carbon
                  offset projects, engineered for long-term impact and
                  institutional-grade integrity.
                </motion.p>
              </div>
            </div>
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
