"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

const RoadmapSection = () => {
  const leftSideMotion = useSimpleMotion("roadmap-left-side");
  const rightSideMotion = useSimpleMotion("roadmap-right-side");
  const titleMotion = useSimpleMotion("roadmap-title");
  const imageMotion = useSimpleMotion("roadmap-image");

  return (
    <>
      {/* Card Effect Styles */}
      <style jsx>{`
        .card-effect {
          background: #1e2e26;
          transition: transform 0.3s;
          overflow: hidden;
        }

        .decorative-card {
          width: 423px;
          height: 766px;
          position: relative;
        }

        @media (min-width: 1280px) {
          .decorative-card {
            width: 423px;
            height: 766px;
          }
        }

        @media (min-width: 1536px) {
          .decorative-card {
            width: 423px;
            height: 766px;
          }
        }

        .decorative-card:hover {
          animation: glitch 0.3s infinite;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .card-effect {
            box-shadow: -16px 16px 0 rgba(175, 175, 175, 0.3);
          }

          .decorative-card {
            max-width: 152px;
            height: 236px;
          }
        }
      `}</style>

      <section className="w-full bg-white py-0">
        {/* Mobile Layout - Keep existing mobile design */}
        <div className="lg:hidden flex flex-col w-full gap-[30px] mx-auto px-6">
          {/* Section Title */}
          <motion.h2
            className="text-[20px] font-light leading-[30px] text-start text-[#2E2F2D] flex items-start justify-start max-w-[90%]"
            style={{ fontFamily: "Open Sans", fontWeight: "300" }}
            {...SIMPLE_ANIMATIONS.fadeInUp}
            {...titleMotion}
          >
            Full-Cycle Project Development Expertise
          </motion.h2>

          {/* Mobile Image */}
          <motion.div
            className="w-full"
            {...SIMPLE_ANIMATIONS.scaleIn}
            {...imageMotion}
          >
            <Image
              src="/assets/road-map-section-mobile.png"
              alt="Canopy Carbon Project Development Roadmap - Mobile optimized view of the 8-step process from origination to credit issuance"
              width={375}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Desktop Layout - Three-part layout: 20% - 60% - 20% */}
        <div className="hidden lg:block w-full">
          <div className="flex w-full items-start min-h-fit">
            {/* Left Spacer - 20% */}
            <div className="w-[15%]"></div>

            {/* Center Content - 60% split into 6/4 parts */}
            <div className="w-[70%] grid grid-cols-10 gap-8 xl:gap-12 2xl:gap-16 relative">
              {/* Shadow div - positioned to the right of right side content */}
              <div
                className="absolute w-[300px] h-[880px] bg-black z-0"
                style={{
                  top: "-80px",
                  left: "calc(60% + 300px)",
                }}
              ></div>

              {/* Left Side - 6 columns */}
              <motion.div
                className="col-span-6 flex flex-col justify-between h-full relative z-10"
                {...SIMPLE_ANIMATIONS.fadeInLeft}
                {...leftSideMotion}
              >
                {/* Roadmap Image */}
                <div className="w-full flex justify-start">
                  <div className="w-full">
                    <Image
                      src="/assets/desktop/home/road-map.png"
                      alt="Canopy Carbon Project Development Roadmap - Complete visual showing the 8-step process from origination to credit issuance"
                      width={1044}
                      height={377}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="flex flex-col space-y-4 xl:space-y-6 mt-auto">
                  <motion.h2
                    className="text-[35px] font-light leading-[0.94] text-[#2E2F2D] max-w-[500px]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "400",
                      lineHeight: "47px",
                    }}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.35,
                      ease: [0.175, 0.885, 0.32, 1.275],
                      delay: 0.4,
                    }}
                  >
                    Full-Cycle Project Development Expertise
                  </motion.h2>

                  <motion.p
                    className="font-open-sans font-semibold text-[#94A4B1] text-[32px] text-start max-w-[1000px]"
                    style={{
                      lineHeight: "1.4285714285714286em",
                      fontFamily: "Open Sans",
                    }}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.95,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.7,
                    }}
                  >
                    Every Canopy project follows a rigorous development
                    sequence, from origination to issuance.
                  </motion.p>
                </div>
              </motion.div>

              {/* Right Side - 4 columns */}
              <motion.div
                className="col-span-4 flex justify-start items-start w-[423px] h-[766px] relative z-10"
                {...SIMPLE_ANIMATIONS.fadeInRight}
                {...rightSideMotion}
              >
                {/* Main tree image */}
                <div className="decorative-card card-effect">
                  <Image
                    src="/assets/desktop/home/tree.jpg"
                    alt="Decorative tree image representing sustainable forest management"
                    width={423}
                    height={766}
                    className="w-[423px] h-[766px] object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Spacer - 20% */}
            <div className="w-[15%]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadmapSection;
