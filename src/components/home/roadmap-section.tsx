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
            {/* CSS Grid Layout */}
            <div
              className={cn(
                "max-w-[2200px] mx-auto grid w-full",
                "h-[700px] xl:h-[760px] xxl:h-[818px] 2xl:h-[920px] 3xl:h-[1023px]",
                "grid-rows-[97px_auto_256px] xl:grid-rows-[97px_auto_auto_1fr] xxl:grid-rows-[97px_auto_auto_1fr]",
                "2xl:grid-rows-[109px_auto_auto_1fr] 3xl:grid-rows-[121px_auto_auto_1fr]",
                "grid-cols-[68px_1fr_40px] xl:grid-cols-[68px_1fr_40px_375px_40px] xxl:grid-cols-[68px_1fr_40px_422px_40px]",
                "2xl:grid-cols-[68px_1fr_40px_422px_40px] 3xl:grid-cols-[68px_1fr_40px_469px_40px]"
              )}
            >
              {/* Tree Image + Background Decoration Group */}
              <motion.div
                className={cn(
                  "relative z-10 -mt-40 lg:hidden xl:block",
                  "xl:h-[700px] xxl:h-[751px] 2xl:h-[845px] 3xl:h-[939px]"
                )}
                style={{
                  gridColumn: "4 / 5",
                  gridRow: "1 / 4",
                  width: "100%",
                }}
                {...SIMPLE_ANIMATIONS.fadeInRight}
                {...rightSideMotion}
              >
                {/* Background decoration */}
                <div
                  className={cn(
                    "absolute bg-[#1D1F1F] xl:h-[660px] xxl:h-[770px]",
                    "xl:left-[160px] xxl:left-[146px] 2xl:left-[119px] 3xl:left-[133px]",
                    "xl:w-[215px] xxl:w-[269px] 2xl:w-[303px] 3xl:w-[336px]"
                  )}
                  style={{
                    top: "0px",
                  }}
                ></div>

                {/* Tree Image */}
                <div
                  className={cn("absolute xl:w-[320px] xxl:w-[375px]")}
                  style={{
                    left: "0px",
                    top: "70px",
                  }}
                >
                  <div
                    className={cn("card-effect xl:w-[320px] xxl:w-[375px]")}
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={TreeImage}
                      alt="Decorative tree image representing sustainable forest management"
                      width={375}
                      height={657}
                      className={cn(
                        "xl:w-[320px] xxl:w-[375px] w-auto h-auto object-cover"
                      )}
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              <div
                className={cn(
                  "z-10 -mt-10 flex flex-col",
                  "gap-[60px] xl:gap-[90px]"
                )}
                style={{
                  gridColumn: "2",
                  gridRow: "1/4",
                }}
              >
                {/* Roadmap Image */}
                <motion.div
                  {...SIMPLE_ANIMATIONS.fadeInLeft}
                  {...leftSideMotion}
                >
                  <div className={cn("w-full")}>
                    <Image
                      src={RoadMapImage}
                      alt="Canopy Carbon Project Development Roadmap - Complete visual showing the 8-step process from origination to credit issuance"
                      width={885}
                      height={363}
                      className={cn("w-full h-auto object-contain")}
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
                    className={cn(
                      "font-light text-[#0D1117]",
                      "text-[28px] xl:text-[32px] xxl:text-[32px] 2xl:text-[36px] 3xl:text-[40px]",
                      "leading-[38px] xl:leading-[43.6px] xxl:leading-[43.6px] 2xl:leading-[49px] 3xl:leading-[54px]",
                      "max-w-[300px] xl:max-w-[335px] xxl:max-w-[335px] 2xl:max-w-[377px] 3xl:max-w-[419px]"
                    )}
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "300",
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
                    className={cn(
                      "font-semibold text-[#7D8F89] text-start",
                      "text-[20px] xl:text-[24px] xxl:text-[24px] 2xl:text-[27px] 3xl:text-[30px]",
                      "leading-[28px] xl:leading-[34px] xxl:leading-[34px] 2xl:leading-[38px] 3xl:leading-[42px]",
                      "max-w-[700px] xl:max-w-[751px] xxl:max-w-[751px] 2xl:max-w-[845px] 3xl:max-w-[939px]"
                    )}
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                      letterSpacing: "2%",
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
                </motion.div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default RoadmapSection;
