"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "../shared";

// Image imports - Logos
import LeftLogo from "../../../public/assets/our-project/benefit-section/left-logo.png";
import RightLogo from "../../../public/assets/our-project/benefit-section/right-logo.png";

// SDG Icons
import NoPoverty from "../../../public/assets/our-project/benefit-section/carousel-images/no-poverty.jpg";
import ZeroHunger from "../../../public/assets/our-project/benefit-section/carousel-images/zero-hunger.jpg";
import GoodHealth from "../../../public/assets/our-project/benefit-section/carousel-images/good-health.jpg";
import QualityEducation from "../../../public/assets/our-project/benefit-section/carousel-images/quality-education.jpg";
import GenderEquality from "../../../public/assets/our-project/benefit-section/carousel-images/gender-equaliaty.jpg";
import CleanWater from "../../../public/assets/our-project/benefit-section/carousel-images/clean-water.jpg";
import Affordable from "../../../public/assets/our-project/benefit-section/carousel-images/affordable.jpg";
import DecentWork from "../../../public/assets/our-project/benefit-section/carousel-images/decent-work.jpg";
import Industry from "../../../public/assets/our-project/benefit-section/carousel-images/industry.jpg";
import Reduced from "../../../public/assets/our-project/benefit-section/carousel-images/reduced.jpg";
import Sustainable from "../../../public/assets/our-project/benefit-section/carousel-images/sustainable.jpg";
import Responsible from "../../../public/assets/our-project/benefit-section/carousel-images/responsible.jpg";
import ClimateAction from "../../../public/assets/our-project/benefit-section/carousel-images/climate-action.jpg";
import LifeBelowWater from "../../../public/assets/our-project/benefit-section/carousel-images/life-below-water.jpg";
import LifeOnLand from "../../../public/assets/our-project/benefit-section/carousel-images/life-on-land.jpg";
import Peace from "../../../public/assets/our-project/benefit-section/carousel-images/peace.jpg";
import Partnership from "../../../public/assets/our-project/benefit-section/carousel-images/partnership.jpg";

const OurProjectBenefitSectionDesktop: React.FC = () => {
  return (
    <Container maxWidth="full">
      <section className="w-full bg-[#232A26] md:px-10 pt-12 pb-0 lg:px-6">
        <div className="flex flex-col gap-[64px] justify-start items-start max-w-[2200px] mx-auto">
          {/* Title and Content Section */}
          <motion.div
            initial={{ opacity: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-start gap-8 w-full xl:items-center xl:mx-auto"
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.7, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="font-open-sans md:font-bold 3xl:font-work-sans 3xl:font-semibold text-start max-w-[947.17px]"
              style={{
                color: "rgba(204, 204, 204, 0.8)",
                fontSize:
                  "clamp(32px, calc(32px + max(0px, (36 - 32) * ((100vw - 1440px) / 480))), 36px)",
                lineHeight: "1em",
              }}
            >
              Our Co-Benefits & Safeguards Strategy
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0.6, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="font-open-sans font-normal text-start text-[#949494]"
              style={{
                width:
                  "clamp(593.55px, calc(593.55px + max(0px, (681 - 593.55) * ((100vw - 1440px) / 480))), 681px)",
                fontSize:
                  "clamp(14px, calc(14px + max(0px, (16 - 14) * ((100vw - 1440px) / 480))), 16px)",
                lineHeight: "1.7em",
                letterSpacing: "-2%",
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
            {/* Dark Background Wrapper - Above gradient */}
            <div
              className="w-full md:bg-transparent xl:bg-[#1E2421] md:px-0 md:pt-0 md:pb-0 xl:px-[47px] xl:pt-[30px] xl:pb-[46px] 3xl:px-[34px] 3xl:pt-[34px] 3xl:pb-[69px]"
              style={{ position: "relative", zIndex: 10 }}
            >
              <div className="w-full md:overflow-x-auto 3xl:overflow-x-visible">
                <motion.div
                  initial={{ opacity: 0.7, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-white md:mx-auto"
                  style={{
                    width:
                      "clamp(1304px, calc(1304px + max(0px, (1772 - 1304) * ((100vw - 1440px) / 480))), 1772px)",
                    maxWidth: "1772px",
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
                      padding: "24px",
                    }}
                  >
                    {/* Logo Section */}
                    <div
                      className="flex items-center"
                      style={{
                        gap: "20px",
                      }}
                    >
                      {/* Left Logo - Multi-breakpoint scaling:
                        768px: 276.26×69.53 | 1440px: 354.76×89.28 | 1920px: 600×151 */}
                      <div
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
                      </div>
                      {/* Right Logo - Multi-breakpoint scaling:
                        768px: 283.55×69.53 | 1440px: 364.12×89.28 | 1920px: 469×115 */}
                      <div
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
                      </div>
                    </div>

                    {/* SDG Icons Grid */}
                    {/* Icons: 768-1440px = fixed 117.9px | 1440-1920px = scale to 163px */}
                    {/* Gap: 768-1440px = fixed 24px | 1440-1920px = scale to 32px */}
                    <div
                      className="flex flex-wrap"
                      style={{
                        gap: "clamp(24px, calc(24px + max(0px, (32 - 24) * ((100vw - 1440px) / 480))), 32px)",
                      }}
                    >
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={NoPoverty}
                          alt="No Poverty"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={ZeroHunger}
                          alt="Zero Hunger"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={GoodHealth}
                          alt="Good Health and Well-being"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={QualityEducation}
                          alt="Quality Education"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={GenderEquality}
                          alt="Gender Equality"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={CleanWater}
                          alt="Clean Water and Sanitation"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={Affordable}
                          alt="Affordable and Clean Energy"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={DecentWork}
                          alt="Decent Work and Economic Growth"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={Industry}
                          alt="Industry, Innovation and Infrastructure"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={Reduced}
                          alt="Reduced Inequalities"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={Sustainable}
                          alt="Sustainable Cities and Communities"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={Responsible}
                          alt="Responsible Consumption and Production"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={ClimateAction}
                          alt="Climate Action"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={LifeBelowWater}
                          alt="Life Below Water"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={LifeOnLand}
                          alt="Life on Land"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={Peace}
                          alt="Peace, Justice and Strong Institutions"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        style={{
                          width:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                          height:
                            "clamp(117.9px, calc(117.9px + max(0px, (163 - 117.9) * ((100vw - 1440px) / 480))), 163px)",
                        }}
                      >
                        <Image
                          src={Partnership}
                          alt="Partnerships for the Goals"
                          width={163}
                          height={163}
                          className="w-full h-full object-cover"
                        />
                      </div>
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
