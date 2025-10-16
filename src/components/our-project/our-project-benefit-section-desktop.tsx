"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Container } from "../shared";

// Image imports - Logos
import LeftLogo from "../../../public/assets/our-project/benefit-section/left-logo.png";
import RightLogo from "../../../public/assets/our-project/benefit-section/right-logo.png";

// SDG Icons - High Quality
import SDG01 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_01.jpg";
import SDG02 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_02.jpg";
import SDG03 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_03.jpg";
import SDG04 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_04.jpg";
import SDG05 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_05.jpg";
import SDG06 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_06.jpg";
import SDG07 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_07.jpg";
import SDG08 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_08.jpg";
import SDG09 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_09.jpg";
import SDG10 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_10.jpg";
import SDG11 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_11.jpg";
import SDG12 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_12.jpg";
import SDG13 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_13.jpg";
import SDG14 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_14.jpg";
import SDG15 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_15.jpg";
import SDG16 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_16.jpg";
import SDG17 from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_17.jpg";

// SDG Icons data array
const sdgIcons = [
  { src: SDG01, alt: "No Poverty" },
  { src: SDG02, alt: "Zero Hunger" },
  { src: SDG03, alt: "Good Health and Well-being" },
  { src: SDG04, alt: "Quality Education" },
  { src: SDG05, alt: "Gender Equality" },
  { src: SDG06, alt: "Clean Water and Sanitation" },
  { src: SDG07, alt: "Affordable and Clean Energy" },
  { src: SDG08, alt: "Decent Work and Economic Growth" },
  { src: SDG09, alt: "Industry, Innovation and Infrastructure" },
  { src: SDG10, alt: "Reduced Inequalities" },
  { src: SDG11, alt: "Sustainable Cities and Communities" },
  { src: SDG12, alt: "Responsible Consumption and Production" },
  { src: SDG13, alt: "Climate Action" },
  { src: SDG14, alt: "Life Below Water" },
  { src: SDG15, alt: "Life on Land" },
  { src: SDG16, alt: "Peace, Justice and Strong Institutions" },
  { src: SDG17, alt: "Partnerships for the Goals" },
];

const OurProjectBenefitSectionDesktop: React.FC = () => {
  const benefitTableRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(benefitTableRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <Container maxWidth="full">
      <section className="w-full bg-[#232A26] md:px-10 pt-12 pb-0 lg:px-6">
        <div className="flex flex-col gap-[64px] justify-start items-start max-w-[1920px] mx-auto">
          {/* Title and Content Section */}
          <motion.div
            initial={{ opacity: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-start w-full xl:items-center xl:mx-auto xl:-ml-34 md:mt-12 xxl:mt-12"
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.7, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="font-open-sans md:font-bold 3xl:font-avenir-heavy 3xl:font-normal text-start xl:text-center w-auto text-[#DEDEDE] mr-10 mb-[18px]"
              style={{
                fontSize:
                  "clamp(32px, calc(32px + max(0px, (36 - 32) * ((100vw - 1440px) / 480))), 35px)",
              }}
            >
              Our Co-Benefits & Safeguards Strategy
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0.6, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="font-open-sans font-normal text-start text-[#949494] leading-[28px]"
              style={{
                width:
                  "clamp(593.55px, calc(593.55px + max(0px, (681 - 593.55) * ((100vw - 1440px) / 480))), 681px)",
                fontSize:
                  "clamp(14px, calc(14px + max(0px, (16 - 14) * ((100vw - 1440px) / 480))), 16px)",
              }}
            >
              Every Canopy project is designed not just to generate carbon
              benefits, but to also deliver meaningful outcomes for people and
              ecosystems. We follow globally recognized best practices to ensure
              our work respects biodiversity, uplifts communities, and aligns
              with long-term climate goals. Our safeguards strategy aims to
              achieve certifications such as the CCB Standard, apply principles
              under the ICVCM&apos;s Core Carbon Principles, and contribute to
              as many of the 17 UN Sustainable Development Goals as possible.
              Through this approach, we ensure every project creates value that
              extends beyond carbon.
            </motion.p>
          </motion.div>

          {/* Benefit Icons Table Section */}
          <div className="w-full" style={{ position: "relative" }}>
            {/* Dark Background Wrapper - Above gradient - Breaks out of max-w constraint */}
            <div
              className="md:bg-transparent xl:bg-[#1E2421] md:pt-0 md:pb-0 xl:pt-[30px] xl:pb-[46px] 3xl:pt-[34px] 3xl:pb-[69px]"
              style={{
                position: "relative",
                zIndex: 10,
                width:
                  "calc(100vw - clamp(40px, calc(40px + max(0px, (96 - 40) * ((100vw - 1440px) / 480))), 96px))",
                marginLeft:
                  "calc(50% - 50vw + clamp(20px, calc(20px + max(0px, (48 - 20) * ((100vw - 1440px) / 480))), 48px))",
                marginRight:
                  "clamp(20px, calc(20px + max(0px, (48 - 20) * ((100vw - 1440px) / 480))), 48px)",
              }}
            >
              <div className="w-full md:overflow-x-auto 3xl:overflow-x-visible">
                <motion.div
                  ref={benefitTableRef}
                  initial={{ opacity: 0.7, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 30 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white md:mx-auto max-w-[1772px] pb-[75px] pt-[20px] px-[24px]"
                  style={{
                    width:
                      "clamp(1304px, calc(1304px + max(0px, (1772 - 1304) * ((100vw - 1440px) / 480))), 1772px)",
                  }}
                >
                  {/* Benefit Icons Table */}
                  {/* 768-1440px: 1256px content + 48px padding = 1304px total (9 icons/row = 2 rows) */}
                  {/* 1440-1920px: Fluid scaling to 1772px total */}
                  {/* Content width: 768/1440px = 1256px | 1920px = 1724px */}
                  <div
                    className="flex flex-col"
                    style={{
                      gap: "clamp(36px, calc(36px + max(0px, (64 - 36) * ((100vw - 1440px) / 480))), 64px)",
                    }}
                  >
                    {/* Logo Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                      className="flex items-center ml-[13px]"
                      style={{
                        gap: "20px",
                      }}
                    >
                      {/* Left Logo - Multi-breakpoint scaling:
                        768px: 276.26×69.53 | 1440px: 354.76×89.28 | 1920px: 600×151 */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                        style={{
                          width:
                            "clamp(276.26px, calc(276.26px + (354.76 - 276.26) * ((100vw - 768px) / 672) + max(0px, (600 - 354.76) * ((100vw - 1440px) / 480))), 600px)",
                          height:
                            "clamp(69.53px, calc(69.53px + (89.28 - 69.53) * ((100vw - 768px) / 672) + max(0px, (151 - 89.28) * ((100vw - 1440px) / 480))), 151px)",
                        }}
                      >
                        <Image
                          src={LeftLogo}
                          alt="SD VISta Logo"
                          width={600}
                          height={151}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                      {/* Right Logo - Multi-breakpoint scaling:
                        768px: 283.55×69.53 | 1440px: 364.12×89.28 | 1920px: 469×115 */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                        style={{
                          width:
                            "clamp(283.55px, calc(283.55px + (364.12 - 283.55) * ((100vw - 768px) / 672) + max(0px, (469 - 364.12) * ((100vw - 1440px) / 480))), 469px)",
                          height:
                            "clamp(69.53px, calc(69.53px + (89.28 - 69.53) * ((100vw - 768px) / 672) + max(0px, (115 - 89.28) * ((100vw - 1440px) / 480))), 115px)",
                        }}
                      >
                        <Image
                          src={RightLogo}
                          alt="Safeguards Logo"
                          width={469}
                          height={115}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>

                    {/* SDG Icons Grid */}
                    {/* Icons: 768-1440px = fixed 117.9px | 1440-1920px = scale to 163px */}
                    {/* Column Gap: 768-1440px = fixed 24px | 1440-1920px = scale to 32px */}
                    {/* Row Gap: Fluid 32px (1440px) to 48px (1920px+) between rows */}
                    <div
                      className="flex flex-wrap"
                      style={{
                        columnGap:
                          "clamp(24px, calc(24px + max(0px, (32 - 24) * ((100vw - 1440px) / 480))), 32px)",
                        rowGap:
                          "clamp(32px, calc(32px + max(0px, (48 - 32) * ((100vw - 1440px) / 480))), 48px)",
                      }}
                    >
                      {sdgIcons.map((icon, index) => (
                        <motion.div
                          key={icon.alt}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1, y: 0 }
                              : { opacity: 0, scale: 0.8, y: 20 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + index * 0.05,
                            ease: "easeOut",
                          }}
                          style={{
                            width:
                              "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                            height:
                              "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          }}
                        >
                          <Image
                            src={icon.src}
                            alt={icon.alt}
                            width={163}
                            height={163}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Gradient Bottom Overlay - Absolute positioned */}
            <div
              style={{
                position: "absolute",
                bottom: "-111px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100vw",
                height:
                  "clamp(205px, calc(205px + (385 - 205) * ((100vw - 768px) / 672) + max(0px, (513 - 385) * ((100vw - 1440px) / 480))), 513px)",
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurProjectBenefitSectionDesktop;
