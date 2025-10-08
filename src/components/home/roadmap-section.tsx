"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "@/src/components/shared";
import MobileRoadmap from "./mobile-roadmap";
import { cn } from "@/src/lib/utils/cn";

// Image imports
import TreeImage from "../../../public/assets/desktop/home/tree.png";
import RoadMapImage from "../../../public/assets/desktop/home/road-map.svg";

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
          width: 100%;
          position: relative;
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

        /* Desktop specific - ensure no constraints */
        @media (min-width: 1440px) {
          .decorative-card {
            max-width: none;
            height: auto;
            width: 100%;
          }
        }
      `}</style>

      <section className="w-full py-0 xxl:-mt-10">
        {/* Mobile Layout - Keep existing mobile design */}
        <div className="md:hidden flex flex-col w-full gap-[40px] mx-auto px-6">
          {/* Section Title */}
          <motion.h2
            className="text-[20px] font-light leading-[30px] text-start text-[#2E2F2D] flex items-start justify-start max-w-[90%]"
            style={{ fontFamily: "Open Sans", fontWeight: "300" }}
            {...SIMPLE_ANIMATIONS.fadeInUp}
            {...titleMotion}
          >
            Full-Cycle Project Development Expertise
          </motion.h2>

          {/* Mobile Roadmap Implementation */}
          <motion.div
            className="w-full"
            {...SIMPLE_ANIMATIONS.scaleIn}
            {...imageMotion}
          >
            <MobileRoadmap />
          </motion.div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden w-full bg-white md:pt-12">
          <Container maxWidth="full" padding="none">
            <div
              className="mx-auto w-full"
              style={{
                maxWidth: "100%",
                paddingLeft: "24px",
                paddingRight: "24px",
              }}
            >
              {/* Title + Description Section */}
              <motion.div
                className="flex flex-col"
                style={{
                  gap: "clamp(24px, 3vw, 32px)",
                  marginBottom: "40px",
                }}
                {...SIMPLE_ANIMATIONS.fadeInUp}
                {...titleMotion}
              >
                {/* Title */}
                <div
                  className="flex flex-col gap-1"
                  style={{
                    maxWidth: "clamp(335px, 45vw, 500px)",
                  }}
                >
                  <motion.h2
                    className="font-normal text-[#0D1117]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "400",
                      fontSize: "clamp(28px, 3.5vw, 36px)",
                      lineHeight: "1.36",
                    }}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.35,
                      ease: [0.175, 0.885, 0.32, 1.275],
                      delay: 0.2,
                    }}
                  >
                    Full-Cycle Project
                  </motion.h2>
                  <motion.h2
                    className="font-normal text-[#0D1117]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "400",
                      fontSize: "clamp(28px, 3.5vw, 36px)",
                      lineHeight: "1.36",
                    }}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.35,
                      ease: [0.175, 0.885, 0.32, 1.275],
                      delay: 0.3,
                    }}
                  >
                    Development Expertise
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p
                  className="font-bold text-[#A3ADB8]"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    fontSize: "clamp(16px, 2vw, 20px)",
                    lineHeight: "1.3",
                    letterSpacing: "0.02em",
                    maxWidth: "clamp(624px, 80vw, 900px)",
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.95,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5,
                  }}
                >
                  Every Canopy project follows a rigorous development sequence,
                  from origination to issuance.
                </motion.p>
              </motion.div>

              {/* Roadmap Image */}
              <motion.div
                className="w-full"
                {...SIMPLE_ANIMATIONS.fadeInUp}
                {...imageMotion}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.7,
                }}
              >
                <div
                  className="w-full"
                  style={{
                    aspectRatio: "696/285",
                  }}
                >
                  <Image
                    src={RoadMapImage}
                    alt="Canopy Carbon Project Development Roadmap - Complete visual showing the 8-step process from origination to credit issuance"
                    width={696}
                    height={285}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block w-full bg-white">
          <Container maxWidth="full" padding="none">
            {/* Flex Layout for Desktop */}
            <div className="mx-auto flex w-full items-start justify-center gap-10 px-4">
              {/* Left Column: Roadmap & Text */}
              <div className="z-10 flex flex-col gap-[60px] xl:gap-[90px]">
                {/* Roadmap Image */}
                <motion.div
                  {...SIMPLE_ANIMATIONS.fadeInLeft}
                  {...leftSideMotion}
                >
                  <div>
                    <Image
                      src={RoadMapImage}
                      alt="Canopy Carbon Project Development Roadmap - Complete visual showing the 8-step process from origination to credit issuance"
                      width={926}
                      height={267}
                      priority
                    />
                  </div>
                </motion.div>

                {/* Title and Description */}
                <motion.div
                  className={cn("z-10 flex flex-col space-y-6")}
                  {...SIMPLE_ANIMATIONS.fadeInLeft}
                  {...leftSideMotion}
                >
                  <motion.h2
                    className="font-light text-[#0D1117] lg:text-[32px] 2xl:text-[35px] leading-[38px] max-w-[366px]"
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
                    className="font-semibold text-[#9CA3AF] lg:text-2xl font-work-sans 2xl:text-[32px] leading-[28px] max-w-[739px] 2xl:max-w-[985px]"
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
                </motion.div>
              </div>

              {/* Right Column: Tree Image */}
              <motion.div
                className="relative z-10 shrink-0 -mt-40 lg:hidden xl:block"
                style={{ width: "425px", height: "750px" }}
                {...SIMPLE_ANIMATIONS.fadeInRight}
                {...rightSideMotion}
              >
                {/* Background decoration */}
                <div className="absolute bg-[#1D1F1F] lg:h-[750px] lg:left-[146px] lg:w-[269px]"></div>

                {/* Tree Image */}
                <div className="absolute left-0 top-15 lg:w-[375px]">
                  <Image
                    src={TreeImage}
                    alt="Decorative tree image representing sustainable forest management"
                    width={375}
                    height={657}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default RoadmapSection;
