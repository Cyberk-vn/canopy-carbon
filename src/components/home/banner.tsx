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

// Tablet Service Card Component
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
      className="bg-[#EEF0F2] w-full flex flex-col gap-4"
      style={{
        maxWidth: "clamp(335px, 45vw, 550px)",
        padding: "clamp(24px, 3vw, 40px)",
      }}
    >
      {/* Header with Icon and Title */}
      <div className="flex flex-col items-center gap-3">
        {/* Icon */}
        <div className="flex items-center justify-center">
          <DesktopServiceCardIcon iconType={service.iconType} />
        </div>

        {/* Title - Abbreviation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.95,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="font-semibold leading-[1.5] text-[#1D2E27] text-center"
          style={{
            fontFamily: "Open Sans",
            fontWeight: "600",
            fontSize: "clamp(16px, 2.2vw, 24px)",
          }}
        >
          {service.abbreviation}
        </motion.h2>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 text-center">
        {/* Subtitle - Full Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.95,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="font-semibold leading-[1.4] text-[#5B5F58] text-center"
          style={{
            fontFamily: "Open Sans",
            fontWeight: "600",
            fontSize: "clamp(14px, 2vw, 20px)",
          }}
        >
          {service.fullTitle}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.95,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="font-normal leading-[1.5] text-[#5B5F58] text-center"
          style={{
            fontFamily: "Open Sans",
            fontWeight: "400",
            fontSize: "clamp(12px, 1.8vw, 16px)",
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
          {/* Title - Abbreviation */}
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
              className="font-semibold text-[14px] lg:text-[15px] xl:text-[16px] xxl:text-[17px] 2xl:text-[18px] 3xl:text-[20px] leading-[20px] lg:leading-[22px] xl:leading-[24px] xxl:leading-[26px] 2xl:leading-[28px] 3xl:leading-[30px] text-[#1D2E27]"
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
              className="font-semibold text-[13px] lg:text-[13px] xl:text-[14px] xxl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] leading-[18px] lg:leading-[19px] xl:leading-[20px] xxl:leading-[21px] 2xl:leading-[22px] 3xl:leading-[24px] text-[#5B5F58] text-center"
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
              className="font-normal text-[11px] lg:text-[11px] xl:text-[12px] xxl:text-[13px] 2xl:text-[14px] 3xl:text-[15px] leading-[16px] lg:leading-[17px] xl:leading-[18px] xxl:leading-[19px] 2xl:leading-[20px] 3xl:leading-[22px] text-[#5B5F58] text-center"
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
    <div className="relative w-full h-[832px] md:h-[1100px] xxl:h-[1600px] overflow-hidden flex flex-col lg:mb-[40px]">
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
      <div className="hidden xxl:block absolute lg:top-[600px] xl:top-[650px] 2xl:top-[803px] left-0 right-0 h-[920px] bg-[#FCFCFC] z-0"></div>

      {/* Tablet/Medium Desktop Layout - 768px to 1440px */}
      <div className="hidden md:block xxl:hidden absolute inset-0 z-10 bg-[#FCFCFC] h-full">
        <Container maxWidth="full" padding="default" className="h-full">
          <div
            className="mx-auto h-full flex flex-col py-6 md:py-8 mt-10"
            style={{ maxWidth: "clamp(768px, 95vw, 1440px)" }}
          >
            {/* Main Content Container - Flex with 2-column grid inside */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Top Section - Decorator + Title/Description */}
              <div
                className="grid gap-6 items-center bg-white px-6 py-8 md:py-10 lg:py-12"
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
                className="font-bold leading-[1.5] text-[#94A4B1] px-6"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  maxWidth: "clamp(514px, 70vw, 900px)",
                }}
              >
                We originate and deliver large-scale nature-based carbon offset
                projects, engineered for long-term impact and
                institutional-grade integrity.
              </motion.p>

              {/* Service Cards - 2x2 Grid */}
              {services && (
                <div className="px-6">
                  <motion.div
                    {...SIMPLE_ANIMATIONS.fadeInUp}
                    transition={{
                      duration: 0.6,
                      delay: 0.7,
                      ease: "easeOut",
                    }}
                    className="grid grid-cols-2 grid-rows-2 gap-6"
                    style={{
                      maxWidth: "clamp(695px, 90vw, 1200px)",
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
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Desktop Layout - Grid Based */}
      <div className="hidden xxl:block absolute inset-0 z-10">
        <Container maxWidth="full" padding="default" className="h-full">
          <div className="max-w-[1800px] mx-auto h-full">
            <div
              className="grid h-full 3xl:grid-cols-[120px_600px_120px_1fr]"
              style={{
                gridTemplateColumns:
                  "clamp(40px, 4vw, 120px) clamp(320px, 24vw, 600px) clamp(40px, 4vw, 120px) 1fr",
                gridTemplateRows:
                  "clamp(220px, 8vh, 150px) auto clamp(60px, 6vh, 120px)",
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
                    className="object-contain w-full max-w-[320px] lg:max-w-[350px] xl:max-w-[420px] xxl:max-w-[460px] 2xl:max-w-[520px] h-auto decorator-3xl-size"
                    priority
                  />
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="col-start-4 row-start-2 flex flex-col justify-start mr-[68px] xxl:mr-0 gap-[260px]">
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
                  <div className="flex items-end mt-[48px] lg:mt-[56px] xl:mt-[64px] xxl:mt-[72px] 2xl:mt-[80px] 3xl:mt-[88px]">
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
            </div>

            <div className="max-w-[1800px] mx-auto absolute bottom-[200px] left-0 right-0">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.35,
                  ease: [0.175, 0.885, 0.32, 1.275],
                  delay: 0.5,
                }}
                className="font-work-sans font-semibold text-[18px] lg:text-[20px] xl:text-[22px] xxl:text-[24px] 2xl:text-[26px] 3xl:text-[28px] leading-[28px] lg:leading-[30px] xl:leading-[32px] xxl:leading-[34px] 2xl:leading-[36px] 3xl:leading-[38px] text-start max-w-[600px] lg:max-w-[680px] xl:max-w-[700px] xxl:max-w-[745px] 2xl:max-w-[800px] 3xl:max-w-[850px] ml-[194px] lg:ml-[209px] xl:ml-[224px] xxl:ml-[239px] 2xl:ml-[254px] 3xl:ml-[269px] relative z-20"
                style={{
                  color: "#A1AEB9",
                  verticalAlign: "middle",
                  letterSpacing: "0%",
                }}
              >
                We originate and deliver large-scale nature-based carbon offset
                projects, engineered for long-term impact and
                institutional-grade integrity.
              </motion.p>
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
