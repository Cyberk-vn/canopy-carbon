"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { AboutUsBannerProps } from "@/src/types/banner";
import FadeContent from "@/src/components/animation/fade-content";
import { STATISTICS_ANIMATIONS } from "@/src/hooks/responsive/use-simple-motion";

// Statistics carousel timer configuration
const STATISTICS_AUTO_SWITCH_INTERVAL = 3000;
const STATISTICS_RESUME_DELAY = 2000;

export function AboutUsBanner({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: AboutUsBannerProps) {
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
    <div className="relative w-full">
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
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.2) 28.85%, rgba(0, 0, 0, 0.37) 53.37%, #000000 100%)",
          }}
        />

        {/* Navigation Menu - Absolutely positioned */}
        <div className="absolute left-0 right-0 z-22">
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
          <div className="flex flex-col pt-[140px] md:pt-[158px] px-[24px] md:px-[58px]">
            {/* Decorative Image - Mobile Flexbox */}
            <FadeContent duration={800} delay={200} className="self-start">
              <div className="card-effect decorative-card ml-6">
                <Image
                  src="/assets/about-us/banner-child-image.png"
                  alt="Decorative Banner Element"
                  width={152}
                  height={236}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </FadeContent>

            {/* Spacing to position Mission/Vision at same location as original (425px from top) */}
            <div className="h-[59px] md:h-[31px]" />

            {/* Mission and Vision Content - Mobile Flexbox */}
            <FadeContent duration={1000} delay={600} className="w-full z-30">
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
            </FadeContent>
          </div>
        </div>
      </div>

      {/* Secondary Banner Section with Smooth Transition */}
      <div className="relative h-[515px] w-full z-10 -mt-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/about-us/contact-us-banner-second-bg.png"
            alt="Secondary Banner Background"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes="100vw"
          />
        </div>

        {/* Smooth Transition Overlay - Blends from main banner */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.9) 6%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-20 h-full px-6 md:px-[120px] md:py-10 flex flex-col justify-start gap-[36px]">
          {/* Thesis Section */}
          <FadeContent
            duration={800}
            delay={400}
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
          </FadeContent>

          {/* Statistics Cards Carousel */}
          <FadeContent
            duration={1000}
            delay={800}
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
          </FadeContent>
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

        .decorative-card {
          max-width: 280px;
          height: 320px;
          position: relative;
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
