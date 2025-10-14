"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import LogoDecorator from "../../../public/assets/banner-shared-component/circle.png";

// Responsive scaling helper for desktop range (1440px → 1920px)
const createResponsiveValue = (
  value1440: number,
  value1920: number
): string => {
  return `clamp(${value1440}px, calc(${value1440}px + (${value1920} - ${value1440}) * ((100vw - 1440px) / 480)), ${value1920}px)`;
};

const CollaborateWithUsSectionDesktop: React.FC = () => {
  return (
    <section
      className="hidden md:block bg-white w-full overflow-hidden md:py-[48px] md:px-[48px] md:mt-[48px]"
      style={{
        paddingTop: createResponsiveValue(80, 107),
        paddingBottom: createResponsiveValue(80, 107),
        paddingLeft: createResponsiveValue(68, 90),
        paddingRight: createResponsiveValue(68, 90),
      }}
    >
      {/* Main Layout Container - Flexbox Layout */}
      <div className="flex justify-center items-center max-w-[2200px] mx-auto">
        {/* Main Content Container - Responsive width */}
        <div
          className="bg-[#F9F9F9] h-fit relative md:w-full md:p-[32px] md:mr-0 xl:mr-0"
          style={{
            width: createResponsiveValue(957, 1410),
            marginRight: createResponsiveValue(44, 59),
            paddingLeft: createResponsiveValue(64, 180),
            paddingRight: createResponsiveValue(64, 160),
            paddingTop: createResponsiveValue(32, 46),
            paddingBottom: createResponsiveValue(32, 75),
          }}
        >
          <div
            className="flex flex-col md:gap-[32px]"
            style={{ gap: createResponsiveValue(32, 80) }}
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.7, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="text-[#1E2E26] text-left md:text-[24px] md:font-bold xl:font-semibold"
              style={{
                fontSize: createResponsiveValue(32, 38),
                lineHeight: "1.362em",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Collaborate With Us
            </motion.h2>

            {/* Description + Button Cards Section */}
            <motion.div
              initial={{ opacity: 0.8, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col md:gap-[24px]"
              style={{ gap: createResponsiveValue(24, 64) }}
            >
              {/* Description */}
              <motion.div
                initial={{ opacity: 0.6, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col gap-[12px]"
                style={{
                  maxWidth: createResponsiveValue(651, 859),
                }}
              >
                <p
                  className="text-[#808080] text-left font-normal leading-normal md:text-[16px] md:max-w-none"
                  style={{
                    fontSize: createResponsiveValue(16, 18),
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  We believe meaningful climate solutions are built through
                  partnership. At Canopy, we welcome collaboration with{" "}
                  <span className="text-[#798C5C]">
                    project proponents, financiers, corporate buyers, and
                    technical specialists
                  </span>{" "}
                  who share our vision for high-integrity, nature-based
                  development.
                </p>
                <p
                  className="text-[#808080] text-left font-normal leading-normal md:text-[16px] md:max-w-none"
                  style={{
                    fontSize: createResponsiveValue(16, 18),
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  Whether you&apos;re looking to{" "}
                  <span className="text-[#798C5C]">
                    co-develop a project, secure long-term carbon offtake, or
                    bring technical innovation to the field
                  </span>
                  , we&apos;d love to hear from you. Together, we can scale
                  impact where it matters most.
                </p>
              </motion.div>

              {/* Button Cards - Responsive Grid */}
              <motion.div
                initial={{ opacity: 0.6, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex justify-stretch items-stretch gap-[16px] md:flex-wrap xl:flex-nowrap"
              >
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                  className="flex-1 flex items-center justify-center bg-[#E9E9E9] md:basis-[calc(50%-8px)]"
                  style={{
                    width: createResponsiveValue(195, 254),
                    height: createResponsiveValue(39, 52),
                    padding: "16px",
                  }}
                >
                  <span
                    className="text-[#596E64] font-avenir-heavy leading-normal font-normal text-center md:text-[14px] md:font-bold"
                    style={{
                      fontSize: createResponsiveValue(14, 20),
                    }}
                  >
                    Co-Develop
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
                  className="flex-1 flex items-center justify-center bg-[#E9E9E9] md:basis-[calc(50%-8px)]"
                  style={{
                    width: createResponsiveValue(195, 254),
                    height: createResponsiveValue(39, 52),
                    padding: "16px",
                  }}
                >
                  <span
                    className="text-[#596E64] font-avenir-heavy leading-normal font-normal text-center md:text-[14px] md:font-bold"
                    style={{
                      fontSize: createResponsiveValue(14, 20),
                    }}
                  >
                    Purchase Credits
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
                  className="flex-1 flex items-center justify-center bg-[#E9E9E9] md:basis-[calc(50%-8px)]"
                  style={{
                    width: createResponsiveValue(195, 254),
                    height: createResponsiveValue(39, 52),
                    padding: "16px",
                  }}
                >
                  <span
                    className="text-[#596E64] font-avenir-heavy leading-normal font-normal text-center md:text-[14px] md:font-bold"
                    style={{
                      fontSize: createResponsiveValue(14, 20),
                    }}
                  >
                    Fund Pipeline
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
                  className="flex-1 flex items-center justify-center bg-[#E9E9E9] md:basis-[calc(50%-8px)]"
                  style={{
                    width: createResponsiveValue(195, 254),
                    height: createResponsiveValue(39, 52),
                    padding: "16px",
                  }}
                >
                  <span
                    className="text-[#596E64] font-avenir-heavy leading-normal font-normal text-center md:text-[14px] md:font-bold"
                    style={{
                      fontSize: createResponsiveValue(14, 20),
                    }}
                  >
                    Co-Innovate
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorator Image - Absolute on tablet, relative on desktop */}
        <div
          className="md:hidden md:right-0 md:top-0 xl:relative xl:flex items-start justify-start"
          style={{ paddingTop: createResponsiveValue(14, 62) }}
        >
          <motion.div
            initial={{ opacity: 0.64, x: 20 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="md:w-[300px] md:h-[302px]"
            style={{
              width: createResponsiveValue(300, 369),
              height: createResponsiveValue(302, 369),
            }}
          >
            <Image
              src={LogoDecorator}
              alt="Collaborate decoration"
              width={369}
              height={369}
              className="object-contain w-full h-full opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateWithUsSectionDesktop;
