"use client";

import Image from "next/image";
import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";
import OurTeamHeaderImage from "../../../../public/assets/about-us/our-team-header-image.png";

interface MobileViewProps {
  data: DevelopmentSequenceSectionProps["data"];
}

// Timer configuration for development cards
const DEVELOPMENT_AUTO_SWITCH_INTERVAL = 2000;
const DEVELOPMENT_RESUME_DELAY = 2000;

// Timer configuration for climate action cards
const CLIMATE_ACTION_AUTO_SWITCH_INTERVAL = 3000;
const CLIMATE_ACTION_RESUME_DELAY = 2000;

export const MobileView = memo<MobileViewProps>(({ data }) => {
  // Contact redirect hook
  const { redirectToContact } = useContactRedirect();

  // State management for timer-based content switcher
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // State management for climate action timer-based content switcher
  const [activeClimateActionIndex, setActiveClimateActionIndex] = useState(0);
  const [isClimateActionPaused, setIsClimateActionPaused] = useState(false);
  // 6 Cards data from Figma design
  const developmentCards = [
    {
      id: 1,
      title: "Pre-Feasibility Study",
      description:
        "Preliminary review of regulatory context and spatial characteristics of the site, alongside early-stage carbon potential assessment.",
      learnMoreUrl: "#",
    },
    {
      id: 2,
      title: "Feasibility Study",
      description:
        "Ground-truthing of site conditions and validation of key success factors such as resource suitability and community alignment.",
      learnMoreUrl: "#",
    },
    {
      id: 3,
      title: "Implementation Design",
      description:
        "Structuring of operational plans across climate activities, stakeholder programs, and long-term management frameworks.",
      learnMoreUrl: "#",
    },
    {
      id: 4,
      title: "PDD Development",
      description:
        "Consolidation of project data into a formal Project Design Document aligned with relevant standards and methodologies.",
      learnMoreUrl: "#",
    },
    {
      id: 5,
      title: "Validation & Verification",
      description:
        "Independent third-party review for project validation, registration, and verification of outcomes in line with crediting requirements.",
      learnMoreUrl: "#",
    },
    {
      id: 6,
      title: "Issuance & Sale",
      description:
        "Coordination of credit issuance, offtake preparation, and registry administration—including commercial documentation and reporting.",
      learnMoreUrl: "#",
    },
  ];

  // 5 Cards data from Figma design
  const climateActionCards = [
    {
      id: 1,
      title: "Climate Action Implementation",
      description:
        "Execution of core interventions including forest protection, ARR, and enrichment—carried out in line with validated project design and ecological conditions.",
      learnMoreUrl: "#",
    },
    {
      id: 2,
      title: "Community Development Programs",
      description:
        "Ongoing FPIC, livelihoods support, participatory planning, and equitable benefit-sharing — designed to ensure long-term community alignment.",
      learnMoreUrl: "#",
    },
    {
      id: 3,
      title: "Biodiversity & Ecosystem Protection",
      description:
        "Habitat conservation, species monitoring, and threat mitigation strategies to uphold ecological integrity beyond carbon metrics.",
      learnMoreUrl: "#",
    },
    {
      id: 4,
      title: "SDG & Co-Benefit Delivery",
      description:
        "Structured implementation of SDG-aligned activities and preparation for verification under CCB or similar co-benefit standards.",
      learnMoreUrl: "#",
    },
    {
      id: 5,
      title: "Monitoring, Reporting & Verification",
      description:
        "Continuous data collection via patrols, satellite imagery, biomass tracking, and preparation for future audits and credit issuances.",
      learnMoreUrl: "#",
    },
  ];

  // Timer-based content switching
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % developmentCards.length
      );
    }, DEVELOPMENT_AUTO_SWITCH_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, developmentCards.length]);

  // Timer-based content switching for climate action cards
  useEffect(() => {
    if (isClimateActionPaused) return;

    const interval = setInterval(() => {
      setActiveClimateActionIndex(
        (prevIndex) => (prevIndex + 1) % climateActionCards.length
      );
    }, CLIMATE_ACTION_AUTO_SWITCH_INTERVAL);

    return () => clearInterval(interval);
  }, [isClimateActionPaused, climateActionCards.length]);

  // Pause/resume handlers for mouse interaction
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Touch interaction handlers for mobile development cards
  const handleMobileSwipe = (
    event: PointerEvent,
    info: {
      offset: { x: number; y: number };
      velocity: { x: number; y: number };
    }
  ) => {
    const swipeThreshold = 50;

    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? "prev" : "next";
      const newIndex =
        direction === "next"
          ? (activeSlideIndex + 1) % developmentCards.length
          : (activeSlideIndex - 1 + developmentCards.length) %
            developmentCards.length;

      setActiveSlideIndex(newIndex);
      setIsPaused(true);

      setTimeout(() => setIsPaused(false), DEVELOPMENT_RESUME_DELAY);
    }
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Resume after delay to prevent immediate restart
    setTimeout(() => setIsPaused(false), DEVELOPMENT_RESUME_DELAY);
  };

  // Climate action card interaction handlers
  const handleClimateActionMouseEnter = () => setIsClimateActionPaused(true);
  const handleClimateActionMouseLeave = () => setIsClimateActionPaused(false);

  const handleClimateActionTouchStart = () => {
    setIsClimateActionPaused(true);
  };

  const handleClimateActionTouchEnd = () => {
    // Resume after delay to prevent immediate restart
    setTimeout(
      () => setIsClimateActionPaused(false),
      CLIMATE_ACTION_RESUME_DELAY
    );
  };

  // Touch interaction handlers for mobile climate action cards
  const handleClimateActionMobileSwipe = (
    event: PointerEvent,
    info: {
      offset: { x: number; y: number };
      velocity: { x: number; y: number };
    }
  ) => {
    const swipeThreshold = 50;

    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? "prev" : "next";
      const newIndex =
        direction === "next"
          ? (activeClimateActionIndex + 1) % climateActionCards.length
          : (activeClimateActionIndex - 1 + climateActionCards.length) %
            climateActionCards.length;

      setActiveClimateActionIndex(newIndex);
      setIsClimateActionPaused(true);

      setTimeout(
        () => setIsClimateActionPaused(false),
        CLIMATE_ACTION_RESUME_DELAY
      );
    }
  };

  // Get current development card based on active slide index
  const currentCard = developmentCards[activeSlideIndex];

  // Get current climate action card based on active slide index
  const currentClimateActionCard = climateActionCards[activeClimateActionIndex];

  return (
    <div className="mx-auto lg:max-w-[600px] flex flex-col gap-[26px] py-[23px] md:px-8">
      {/* Header Section */}
      <div className="w-full flex flex-col gap-[33px]">
        {/* Top decorative lines */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-[9px]">
            <div
              className="w-[203px] h-0 border-t-[3px]"
              style={{ borderColor: "rgba(172, 184, 194, 0.2)" }}
            />
            <div className="flex justify-center">
              <div
                className="w-[100px] h-0 border-t-[2px]"
                style={{ borderColor: "rgba(172, 184, 194, 0.2)" }}
              />
            </div>
          </div>
        </div>

        {/* Content and Image Grid */}
        <div className="grid grid-cols-[1fr_136px] justify-around items-end pl-[29px]">
          {/* Text Content */}
          <div className="flex flex-col gap-[6px]">
            <h2 className=" font-bold text-[18px] xxs:text-[19px] xs:text-[20px] leading-[28px] text-[#475850] text-left">
              {data.sectionTitle}
            </h2>

            <p
              className=" font-semibold text-[13px] xs:text-[13.5px] leading-[1.5384615384615385] text-[#91A69E] text-left max-w-[234px]"
              style={{ letterSpacing: "-3%" }}
            >
              {data.sectionSubtitle}
            </p>
          </div>

          {/* Black Card với Dots Image */}
          <div className="relative w-[100px] h-[53px] justify-self-end">
            {/* Black background card */}
            <div
              className="absolute inset-0 rounded-tl-[8px]"
              style={{ backgroundColor: "rgba(29, 31, 31, 0.9)" }}
            />

            {/* Dots image - 50% overflow left */}
            <div className="absolute left-[-40px] top-[60%] -translate-y-1/2">
              <Image
                src={OurTeamHeaderImage}
                alt="Development sequence decorative element"
                width={81}
                height={46}
                className="w-[81px] h-[46px] object-cover"
                quality={100}
                priority
                sizes="(max-width: 768px) 81px, 81px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-6 pt-4">
        {/* Development Cards - Mobile: Auto-changing Timer-based */}
        <div className="w-full">
          <div
            className="w-full cursor-grab active:cursor-grabbing"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              touchAction: "pan-x",
            }}
          >
            {/* Interactive Motion Container with Drag */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleMobileSwipe}
              className="w-full transition-transform duration-200 hover:scale-[1.01]"
            >
              {/* Static Card Background Container */}
              <div className="h-full pb-0.5">
                <div className="w-full h-[273px] mx-auto">
                  {/* Static Outer Background Layer */}
                  <div
                    className="w-full h-full rounded-[5px] p-[1px] flex flex-col"
                    style={{ backgroundColor: "rgba(47, 58, 53, 0.4)" }}
                  >
                    {/* Animated Card Title - Outer */}
                    <div className="pl-10 pr-6 pt-[17px] pb-[15px]">
                      <AnimatePresence mode="wait">
                        <motion.h4
                          key={`development-title-${currentCard.id}`}
                          className="font-roboto font-black text-[16px] xxs:text-[17px] xs:text-[18px] leading-[20px] text-white"
                          style={{
                            fontWeight: 900,
                            willChange: "opacity",
                            backfaceVisibility: "hidden",
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "linear",
                          }}
                        >
                          {currentCard.title}
                        </motion.h4>
                      </AnimatePresence>
                    </div>

                    {/* Static + Animated Inner Card Container */}
                    <div className="flex-1 px-6 pb-[22px]">
                      <div
                        className="w-full h-[192px] rounded-[5px] px-4 py-5 flex flex-col gap-[7px]"
                        style={{
                          background: `linear-gradient(rgba(47, 58, 53, 0.45)), url('/assets/about-us/development-sequence/card-bg-image.png')`,
                          backgroundSize: "cover",
                          backgroundPosition: "top",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {/* Static Decorative Line */}
                        <div
                          className="w-[60px] h-[2px]"
                          style={{ backgroundColor: "#C5CDD4" }}
                        />

                        {/* Animated Content Zone */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`development-content-${currentCard.id}`}
                            className="flex-1 flex flex-col gap-[7px]"
                            style={{
                              willChange: "opacity",
                              backfaceVisibility: "hidden",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "linear",
                            }}
                          >
                            {/* Description */}
                            <div className="flex-1">
                              <p
                                className="font-roboto font-normal text-[12px] xxs:text-[13px] xs:text-[14px] leading-[20px] text-white tracking-[-0.01em] w-full overflow-hidden"
                                style={{
                                  letterSpacing: "-1%",
                                }}
                              >
                                {currentCard.description}
                              </p>
                            </div>

                            {/* Learn More Link */}
                            <button
                              onClick={redirectToContact}
                              className="font-roboto font-normal text-[9px] xxs:text-[10px] xs:text-[11px] leading-[2.22] text-white/60 hover:text-white transition-colors duration-200 inline-block text-left"
                            >
                              Learn More &gt;
                            </button>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Section Header */}
        <div className="flex flex-col items-center w-full mx-auto mt-[44px]">
          {/* Decorative Line */}
          <div
            className="w-[60px] h-0 mb-2 flex justify-center items-center"
            style={{ borderTop: "1px solid #D8DBD6" }}
          />

          {/* Description Text */}
          <p
            className=" font-semibold text-[14px] xxs:text-[15px] xs:text-[16px] leading-[20px] text-[#91A69E] text-center mb-3 w-full justify-center"
            style={{ letterSpacing: "-3%" }}
          >
            {data.contentSectionDescription}
          </p>

          {/* Title */}
          <h3
            className=" font-bold text-[12px] xxs:text-[13px] xs:text-[14px] leading-[1.6666666666666667] text-[#475850] text-center w-full"
            style={{ letterSpacing: "-3%" }}
          >
            {data.contentSectionTitle}
          </h3>
        </div>

        {/* Climate Action Implementation Card Section */}
        <div className="mt-5">
          {/* Mobile: Timer-based Auto-changing */}
          <div className="w-full">
            <div
              className="w-full cursor-grab active:cursor-grabbing"
              onMouseEnter={handleClimateActionMouseEnter}
              onMouseLeave={handleClimateActionMouseLeave}
              onTouchStart={handleClimateActionTouchStart}
              onTouchEnd={handleClimateActionTouchEnd}
              style={{
                touchAction: "pan-x",
              }}
            >
              {/* Interactive Motion Container with Drag */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleClimateActionMobileSwipe}
                className="w-full transition-transform duration-200 hover:scale-[1.01] overflow-hidden"
              >
                <div className="h-full">
                  <div className="w-full h-[273px] mx-auto relative z-10">
                    {/* Static Outer Background Layer */}
                    <div
                      className="w-full h-full rounded-[5px] p-[1px] flex flex-col"
                      style={{
                        backgroundColor: "rgba(207, 213, 219, 0.4)",
                      }}
                    >
                      {/* Animated Card Title - Outer */}
                      <div className="pl-10 pr-6 pt-[17px] pb-[15px]">
                        <AnimatePresence mode="wait">
                          <motion.h4
                            key={`climate-action-title-${currentClimateActionCard.id}`}
                            className="font-roboto font-black text-[16px] xxs:text-[17px] xs:text-[18px] leading-[1.25]"
                            style={{
                              color: "rgba(46, 47, 45, 0.7)",
                              willChange: "opacity",
                              backfaceVisibility: "hidden",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "linear",
                            }}
                          >
                            {currentClimateActionCard.title}
                          </motion.h4>
                        </AnimatePresence>
                      </div>

                      {/* Static + Animated Inner Card Container */}
                      <div className="flex-1 px-6 pb-[22px] h-[192px] relative">
                        {/* Full-width background image */}
                        <div
                          className="absolute inset-0 w-screen h-full left-1/2 transform -translate-x-1/2"
                          style={{
                            backgroundImage:
                              "url('/assets/about-us/inner-card-background-absolute.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            zIndex: 1,
                            opacity: 0.5,
                          }}
                        />

                        <div
                          className="w-full h-[192px] rounded-[5px] p-4 flex flex-col gap-2"
                          style={{
                            backgroundColor: "rgba(207, 213, 219, 0.15)",
                          }}
                        >
                          {/* Static Decorative Line */}
                          <div
                            className="w-[60px] h-[2px]"
                            style={{ backgroundColor: "#C5CDD4", zIndex: 2 }}
                          />

                          {/* Animated Content Zone */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`climate-action-content-${currentClimateActionCard.id}`}
                              className="flex-1 flex flex-col gap-2"
                              style={{
                                willChange: "opacity",
                                backfaceVisibility: "hidden",
                                zIndex: 2,
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: "linear",
                              }}
                            >
                              {/* Description */}
                              <div className="flex-1">
                                <p
                                  className="font-roboto font-normal text-[12px] xxs:text-[13px] xs:text-[14px] leading-[1.67] w-full overflow-hidden"
                                  style={{
                                    color: "rgba(46, 47, 45, 0.8)",
                                    letterSpacing: "-1%",
                                  }}
                                >
                                  {currentClimateActionCard.description}
                                </p>
                              </div>

                              {/* Learn More Link */}
                              <button
                                onClick={redirectToContact}
                                className="font-roboto font-normal text-[9px] xxs:text-[10px] xs:text-[11px] leading-[2.22] hover:opacity-80 transition-opacity duration-200 inline-block text-left"
                                style={{
                                  color: "rgba(46, 47, 45, 0.6)",
                                }}
                              >
                                Learn More &gt;
                              </button>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

MobileView.displayName = "MobileView";
