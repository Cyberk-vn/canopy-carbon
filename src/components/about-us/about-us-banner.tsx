"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { AboutUsBannerProps } from "@/src/types/banner";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
  STATISTICS_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

// Statistics carousel timer configuration
const STATISTICS_AUTO_SWITCH_INTERVAL = 6000;
const STATISTICS_RESUME_DELAY = 5000;

export function AboutUsBanner({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: AboutUsBannerProps) {
  // Simple Motion animations with persistence
  const decorativeImageMotion = useSimpleMotion("about-decorative-image");
  const missionVisionMotion = useSimpleMotion("about-mission-vision");
  const thesisMotion = useSimpleMotion("about-thesis");
  const statisticsMotion = useSimpleMotion("about-statistics");

  // State management for timer-based content switcher
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Statistics data
  const statisticsData = [
    {
      id: 1,
      number: "> 70%",
      title: "Global Carbon Budget Utilised",
      description:
        "Over 70% of our global CO₂ budget has already been used as of 2024 — around 2.65 trillion tonnes out of the 3.67 trillion tCO₂e budget believed to limit warming to safer thresholds.",
    },
    {
      id: 2,
      number: "42%",
      title: "Emissions Rate Reduction Needed",
      description:
        "To achieve 1.5°C targets, the IPCC recommends that global GHG emissions must fall by at least 42% from 2019 levels by 2030. Instead, global annual emissions were ~3.6% higher in 2024.",
    },
    {
      id: 3,
      number: "5-10x",
      title: "Scale Up in Human-Led Removals",
      description:
        "Anthropogenic CO₂ removals amount to ~ 2 GtCO₂ per year today. A multifold scale-up is needed this century to meet climate targets and balance residual emissions.",
    },
    {
      id: 4,
      number: "2042-45",
      title: "Complete Budget Depletion",
      description:
        "At current rates, the global CO₂ budget could be fully depleted by 2042, unless urgent action is taken to scale removals and cut emissions dramatically.",
    },
  ];

  // Timer-based content switching
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % statisticsData.length
      );
    }, STATISTICS_AUTO_SWITCH_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, statisticsData.length]);

  // Pause/resume handlers for mouse interaction
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Touch interaction handlers for mobile statistics
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
          ? (activeSlideIndex + 1) % statisticsData.length
          : (activeSlideIndex - 1 + statisticsData.length) %
            statisticsData.length;

      setActiveSlideIndex(newIndex);
      setIsPaused(true);

      setTimeout(() => setIsPaused(false), STATISTICS_RESUME_DELAY);
    }
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Resume after delay to prevent immediate restart
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Get current statistic based on active slide index
  const currentStatistic = statisticsData[activeSlideIndex];

  return (
    <div className="relative w-full h-[1306px] bg-black">
      {/* Main Banner Section */}
      <div className="relative h-[828px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/about-us/contact-us-banner-bg-image.png"
            alt="About Us Banner Background"
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
              "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 28.85%, rgba(0, 0, 0, 0.6) 53.37%, #000000 100%)",
          }}
        />

        {/* Navigation Menu - Absolutely positioned */}
        <div className="absolute left-0 right-0 z-20">
          <NavigationMenu
            menuItems={menuItems}
            logoUrl={logoUrl}
            mobileMenuIconColor="#8C8C8C"
            mobileMenuStyles={mobileMenuStyles}
            activeItem="About Us"
          />
        </div>

        {/* Mobile-Only Flexbox Layout */}
        <div className="block lg:hidden absolute inset-0 z-20">
          <div className="flex flex-col pt-[130px] md:pt-[158px] px-[24px] md:px-[58px]">
            {/* Decorative Image - Mobile Flexbox */}
            <motion.div
              {...SIMPLE_ANIMATIONS.scaleIn}
              {...decorativeImageMotion}
              className="self-start"
            >
              <div className="card-effect decorative-card ml-6">
                <Image
                  src="/assets/about-us/banner-child-image.png"
                  alt="Decorative Banner Element"
                  width={152}
                  height={236}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Spacing to position Mission/Vision at same location as original (425px from top) */}
            <div className="h-[59px] md:h-[31px]" />

            {/* Mission and Vision Content - Mobile Flexbox */}
            <motion.div
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...missionVisionMotion}
              className="w-full z-30"
            >
              <div className="flex flex-col gap-[14px] max-w-[390px] md:max-w-[600px]">
                {/* Mission Section */}
                <div className="flex flex-col gap-2">
                  <h2
                    className="font-open-sans font-bold text-white"
                    style={{
                      fontSize: "21px",
                      lineHeight: "30px",
                      fontWeight: 700,
                    }}
                  >
                    Mission
                  </h2>
                  <p
                    className="font-open-sans font-normal text-white"
                    style={{
                      fontSize: "12px",
                      lineHeight: "20px",
                      fontWeight: 400,
                    }}
                  >
                    To expand the global supply of high-quality carbon offsets
                    through disciplined project execution and deep capital
                    market expertise, with technology as a supporting enabler.
                  </p>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col gap-2">
                  <h2
                    className="font-open-sans font-bold text-white"
                    style={{
                      fontSize: "21px",
                      lineHeight: "30px",
                      fontWeight: 700,
                    }}
                  >
                    Vision
                  </h2>
                  <p
                    className="font-open-sans font-normal text-white"
                    style={{
                      fontSize: "12px",
                      lineHeight: "20px",
                      fontWeight: 400,
                    }}
                  >
                    To become Southeast Asia&apos;s leading nature-based
                    solutions specialist, trusted globally for investing in,
                    developing, operating, and delivering premium carbon offsets
                    to both voluntary and compliance markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Completely Preserved */}
        <div className="hidden lg:block">
          {/* Decorative Image - Card Effect */}
          <motion.div
            {...SIMPLE_ANIMATIONS.scaleIn}
            {...decorativeImageMotion}
            className="absolute left-[108px] top-[130px] z-10"
          >
            <div className="card-effect decorative-card">
              <Image
                src="/assets/about-us/banner-child-image.png"
                alt="Decorative Banner Element"
                width={152}
                height={236}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Mission and Vision Content */}
          <motion.div
            {...SIMPLE_ANIMATIONS.fadeInUp}
            {...missionVisionMotion}
            className="absolute top-[425px] left-0 right-0 px-[120px] pb-10 z-30"
          >
            <div className="flex flex-col gap-[14px] max-w-[800px]">
              {/* Mission Section */}
              <div className="flex flex-col gap-2">
                <h2
                  className="font-open-sans font-bold text-white"
                  style={{
                    fontSize: "21px",
                    lineHeight: "30px",
                    fontWeight: 700,
                  }}
                >
                  Mission
                </h2>
                <p
                  className="font-open-sans font-normal text-white"
                  style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: 400,
                  }}
                >
                  To expand the global supply of high-quality carbon offsets
                  through disciplined project execution and deep capital market
                  expertise, with technology as a supporting enabler.
                </p>
              </div>

              {/* Vision Section */}
              <div className="flex flex-col gap-2">
                <h2
                  className="font-open-sans font-bold text-white"
                  style={{
                    fontSize: "21px",
                    lineHeight: "30px",
                    fontWeight: 700,
                  }}
                >
                  Vision
                </h2>
                <p
                  className="font-open-sans font-normal text-white"
                  style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: 400,
                  }}
                >
                  To become Southeast Asia&apos;s leading nature-based solutions
                  specialist, trusted globally for investing in, developing,
                  operating, and delivering premium carbon offsets to both
                  voluntary and compliance markets.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Secondary Banner Section with Smooth Transition */}
      <div className="relative h-[478px] w-full z-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/about-us/contact-us-banner-second-bg.png"
            alt="Secondary Banner Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Smooth Transition Overlay - Blends from main banner */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 8%, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-20 h-full px-6 md:px-[120px] md:py-10 flex flex-col justify-start gap-[36px]">
          {/* Thesis Section */}
          <motion.div
            {...SIMPLE_ANIMATIONS.fadeInLeft}
            {...thesisMotion}
            className="flex flex-col gap-[3px] items-center md:items-start mt-4"
          >
            {/* Mobile Layout - Center aligned with decorative line */}
            <div className="block md:hidden w-full">
              <div className="flex flex-row justify-center items-center gap-2 w-full">
                {/* Decorative Line */}
                <div
                  className="flex-shrink-0 h-[100px] w-0"
                  style={{
                    borderLeft: "2px solid #CFD5DB",
                  }}
                />
                {/* Thesis Text */}
                <div className="flex-1">
                  <p
                    className="font-open-sans font-bold text-[#DDE2E6] text-left"
                    style={{
                      fontSize: "13px",
                      lineHeight: "20px",
                      fontWeight: 700,
                    }}
                  >
                    The urgency of climate change has outpaced the global
                    capacity to decarbonize. Without a dramatic scale-up in
                    high-quality carbon offsets, there is little chance of
                    meeting net-zero ambitions before breaching the carbon
                    budget.
                  </p>
                </div>
              </div>
              {/* Our Thesis Statement Label */}
              <div className="text-right w-full mt-[3px]">
                <h3
                  className="font-open-sans font-light text-[#D8DBD6]"
                  style={{
                    fontSize: "12px",
                    lineHeight: "10px",
                    fontWeight: 300,
                  }}
                >
                  Our Thesis Statement
                </h3>
              </div>
            </div>

            {/* Desktop Layout - Original design */}
            <div className="hidden md:block">
              <div className="text-right">
                <h3 className="font-open-sans font-light text-[12px] text-contact-text-light">
                  THESIS
                </h3>
              </div>
              <div className="max-w-[600px] lg:max-w-[800px] mt-4">
                <p className="font-open-sans font-bold text-[13px] leading-[20px] text-contact-text-secondary">
                  The urgency of climate change has outpaced the global capacity
                  to decarbonize. Without a dramatic scale-up in high-quality
                  carbon offsets, there is little chance of meeting net-zero
                  ambitions before breaching the carbon budget.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Statistics Cards Carousel */}
          <motion.div
            {...SIMPLE_ANIMATIONS.slideInUp}
            {...statisticsMotion}
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* Mobile: Enhanced Card with Touch Interactions */}
            <div className="block md:hidden w-full">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleMobileSwipe}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full cursor-grab active:cursor-grabbing"
                style={{
                  touchAction: "pan-x",
                }}
              >
                <div
                  className="flex flex-col gap-[10px] w-full h-[238px] max-h-[238px] transition-transform duration-200 hover:scale-[1.01]"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    padding: "24px 16px",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`statistic-${currentStatistic.id}`}
                      className="flex flex-col items-center justify-start gap-[15px] w-full h-full"
                      style={{
                        willChange: "opacity, transform",
                        backfaceVisibility: "hidden",
                      }}
                      {...STATISTICS_ANIMATIONS.smartCardSwitch}
                    >
                      {/* Statistics Number */}
                      <motion.div
                        key={`number-${currentStatistic.id}`}
                        className="font-avenir font-extrabold text-[#9DAE83] text-center w-full flex-shrink-0"
                        style={{
                          fontSize: "48px",
                          lineHeight: "44px",
                          letterSpacing: "-2%",
                        }}
                        {...STATISTICS_ANIMATIONS.progressiveNumberFade}
                      >
                        {currentStatistic.number}
                      </motion.div>

                      {/* Content Frame */}
                      <div className="flex flex-col items-start w-full flex-1 justify-start gap-[4px]">
                        {/* Statistics Title */}
                        <motion.h4
                          key={`title-${currentStatistic.id}`}
                          className="font-open-sans font-bold text-[#9DAE83] text-center w-full flex-shrink-0"
                          style={{
                            fontSize: "17px",
                            lineHeight: "24px",
                          }}
                          {...STATISTICS_ANIMATIONS.progressiveTitleFade}
                        >
                          {currentStatistic.title}
                        </motion.h4>

                        {/* Statistics Description */}
                        <motion.p
                          key={`description-${currentStatistic.id}`}
                          className="font-open-sans font-normal text-white text-center w-full flex-1 flex"
                          style={{
                            fontSize: "13px",
                            lineHeight: "20px",
                          }}
                          {...STATISTICS_ANIMATIONS.progressiveDescriptionFade}
                        >
                          {currentStatistic.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Desktop: Horizontal Scroll Cards */}
            <div className="hidden md:block">
              <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4">
                {statisticsData.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    className="flex-shrink-0 bg-black/40 backdrop-blur-sm rounded-lg p-6 md:p-8 min-w-[400px] max-w-[400px] h-[250px]"
                    style={{
                      willChange: "opacity, transform",
                      backfaceVisibility: "hidden",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.5 + index * 0.1, // Base delay + stagger
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  >
                    <div className="flex flex-col gap-4 h-full justify-between">
                      {/* Statistics Number */}
                      <div className="font-avenir font-black text-[48px] tracking-[-0.02em] text-contact-green flex-shrink-0">
                        {stat.number}
                      </div>

                      <div className="flex flex-col gap-2 flex-1 justify-center">
                        {/* Statistics Title */}
                        <h4 className="font-open-sans font-bold text-[17px] leading-[24px] text-contact-green flex-shrink-0">
                          {stat.title}
                        </h4>

                        {/* Statistics Description */}
                        <p className="font-open-sans font-normal text-[13px] leading-[20px] text-white flex-1 flex items-center">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Card Effect Styles */}
      <style jsx>{`
        .card-effect {
          background: rgba(175, 175, 175, 0.3);
          box-shadow: -12px 12px 0 rgba(175, 175, 175, 0.3);
          transition: transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }

        .card-effect:hover {
          transform: translate(5px, -5px);
          box-shadow: -17px 17px 0 rgba(175, 175, 175, 0.3);
        }

        .decorative-card {
          max-width: 280px;
          height: 320px;
          position: relative;
        }

        .decorative-card:hover {
          animation: glitch 0.3s infinite;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .card-effect {
            box-shadow: -24px 24px 0 rgba(175, 175, 175, 0.3);
          }

          .decorative-card {
            max-width: 152px;
            height: 236px;
          }
        }

        /* Touch-friendly mobile interactions */
        .touch-target {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .touch-target::before {
          content: "";
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: transparent;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Smooth transitions for mobile statistics */
        .mobile-stat-card {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Enhanced cursor states for mobile */
        @media (hover: hover) {
          .cursor-grab:hover {
            cursor: grab;
          }
          .cursor-grab:active {
            cursor: grabbing;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUsBanner;
