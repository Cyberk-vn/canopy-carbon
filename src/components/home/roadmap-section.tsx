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

// Image imports
import TreeImage from "../../../public/assets/desktop/home/tree.jpg";
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
          max-width: 423px;
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
      `}</style>

      <section className="w-full py-0">
        {/* Mobile Layout - Keep existing mobile design */}
        <div className="lg:hidden flex flex-col w-full gap-[40px] mx-auto px-6">
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

        {/* Desktop Layout */}
        <div className="hidden lg:block w-full bg-white">
          <Container maxWidth="default" padding="none">
            {/* CSS Grid Layout */}
            <div
              className="grid w-full"
              style={{
                gridTemplateColumns: "clamp(40px, 4.7vw, 68px) 1fr clamp(40px, 4.2vw, 60px) clamp(280px, 25vw, 359px) clamp(40px, 4.7vw, 68px)",
                gridTemplateRows: "97px auto auto 1fr",
                minHeight: "clamp(650px, 56.8vw, 818px)",
              }}
            >
              {/* Tree Image + Background Decoration Group */}
              <motion.div
                className="relative z-10"
                style={{
                  gridColumn: "4",
                  gridRow: "2 / 4",
                  width: "100%",
                  maxWidth: "359px",
                  height: "clamp(500px, 43.4vw, 625px)",
                }}
                {...SIMPLE_ANIMATIONS.fadeInRight}
                {...rightSideMotion}
              >
                {/* Background decoration */}
                <div
                  className="absolute bg-[#1D1F1F]"
                  style={{
                    left: "clamp(120px, 42%, 151px)",
                    top: "0px",
                    width: "clamp(160px, 57%, 208px)",
                    height: "clamp(500px, 43.4vw, 625px)",
                  }}
                ></div>

                {/* Tree Image */}
                <div
                  className="absolute"
                  style={{
                    left: "0px",
                    top: "54px",
                  }}
                >
                  <div className="decorative-card card-effect">
                    <Image
                      src={TreeImage}
                      alt="Decorative tree image representing sustainable forest management"
                      width={302}
                      height={547}
                      className="w-full h-auto max-w-[240px] lg:max-w-[260px] xl:max-w-[280px] xxl:max-w-[302px] object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Roadmap Image */}
              <motion.div
                className="z-10"
                style={{
                  gridColumn: "2",
                  gridRow: "2",
                }}
                {...SIMPLE_ANIMATIONS.fadeInLeft}
                {...leftSideMotion}
              >
                <div className="w-full max-w-[700px] lg:max-w-[750px] xl:max-w-[820px] xxl:max-w-[885px]">
                  <Image
                    src={RoadMapImage}
                    alt="Canopy Carbon Project Development Roadmap - Complete visual showing the 8-step process from origination to credit issuance"
                    width={885}
                    height={363}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </motion.div>

              {/* Title and Description */}
              <motion.div
                className="z-10 flex flex-col space-y-6"
                style={{
                  gridColumn: "2",
                  gridRow: "3",
                  marginTop: "clamp(48px, 5.5vw, 79px)", // Responsive spacing from Roadmap Image
                }}
                {...SIMPLE_ANIMATIONS.fadeInLeft}
                {...leftSideMotion}
              >
                <motion.h2
                  className="text-[24px] lg:text-[28px] xl:text-[30px] xxl:text-[32px] font-light leading-[1.36] lg:leading-[38px] xl:leading-[41px] xxl:leading-[43.6px] text-[#0D1117] max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] xxl:max-w-[335px]"
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
                  className="font-semibold text-[#7D8F89] text-[18px] lg:text-[20px] xl:text-[22px] xxl:text-[24px] text-start max-w-[580px] lg:max-w-[650px] xl:max-w-[700px] xxl:max-w-[751px]"
                  style={{
                    lineHeight: "clamp(26px, 2.36vw, 34px)",
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
                  Every Canopy project follows a rigorous development sequence,
                  from origination to issuance.
                </motion.p>
              </motion.div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default RoadmapSection;
