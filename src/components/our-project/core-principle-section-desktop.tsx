"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "../shared";

// Image imports
import PrincipleDecoratorImage from "../../../public/assets/desktop/our-projects/principle-decorator-image.svg";

// Responsive scaling helper for 768px-1024px (tablet)
const createResponsiveValue = (value768: number, value1024: number): string => {
  return `clamp(
    ${value768}px,
    calc(${value768}px + (${value1024} - ${value768}) * ((100vw - 768px) / 256)),
    ${value1024}px
  )`;
};

// Responsive scaling helper for 1024px-2200px (desktop)
// Using 1440px as base from Figma
const createResponsiveValueDesktop = (
  value1024: number,
  value1440: number,
  value2200: number
): string => {
  return `clamp(
    ${value1024}px,
    min(
      calc(${value1024}px + (${value1440} - ${value1024}) * ((100vw - 1024px) / 416)),
      calc(${value1440}px + (${value2200} - ${value1440}) * ((100vw - 1440px) / 760))
    ),
    ${value2200}px
  )`;
};

const CorePrincipleSectionDesktop: React.FC = () => {
  return (
    <Container maxWidth="full">
      {/* Tablet Layout - 768px to 1024px - No Decorator */}
      <section className="hidden md:block lg:hidden w-full bg-[#1E2421]">
        <div
          style={{
            paddingLeft: createResponsiveValue(48, 64),
            paddingRight: createResponsiveValue(48, 64),
            paddingTop: createResponsiveValue(48, 64),
            paddingBottom: createResponsiveValue(80, 107),
          }}
        >
          {/* Content Section - No Decorator */}
          <div
            className="w-full flex flex-col"
            style={{
              gap: createResponsiveValue(48, 64),
            }}
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.8, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#9C9C9C] flex items-center"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: createResponsiveValue(24, 32),
                lineHeight: "1.25em",
                height: createResponsiveValue(30, 40),
              }}
            >
              The Core Carbon Principle
            </motion.h2>

            {/* Principle Cards Grid - 5 columns x 2 rows */}
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                width: createResponsiveValue(654, 872),
                height: createResponsiveValue(188, 251),
                gap: createResponsiveValue(8, 11),
              }}
            >
              {/* Column 1 - Background #232A26 */}
              <motion.div
                key="card-1-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#232A26]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Effective Governance
                </span>
              </motion.div>

              {/* Column 2 - Background #272F2A */}
              <motion.div
                key="card-2-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#272F2A]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  Tracking
                </span>
              </motion.div>

              {/* Column 3 - Background #2B332F */}
              <motion.div
                key="card-3-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#2B332F]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  Transparency
                </span>
              </motion.div>

              {/* Column 4 - Background #2F3833 */}
              <motion.div
                key="card-4-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 3 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#2F3833]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Independent Audit
                </span>
              </motion.div>

              {/* Column 5 - Background #333D37 */}
              <motion.div
                key="card-5-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 4 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#333D37]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  Additionality
                </span>
              </motion.div>

              {/* Row 2 - Column 1 - Background #232A26 */}
              <motion.div
                key="card-6-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 5 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#232A26]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  Permanence
                </span>
              </motion.div>

              {/* Row 2 - Column 2 - Background #272F2A */}
              <motion.div
                key="card-7-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 6 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#272F2A]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Robust Quantification
                </span>
              </motion.div>

              {/* Row 2 - Column 3 - Background #2B332F */}
              <motion.div
                key="card-8-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 7 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#2B332F]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  No Double Counting
                </span>
              </motion.div>

              {/* Row 2 - Column 4 - Background #2F3833 */}
              <motion.div
                key="card-9-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 8 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#2F3833]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Safeguards & Benefits
                </span>
              </motion.div>

              {/* Row 2 - Column 5 - Background #333D37 */}
              <motion.div
                key="card-10-tablet"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 9 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#333D37]"
                style={{
                  padding: `${createResponsiveValue(
                    8,
                    11
                  )} ${createResponsiveValue(16, 21)}`,
                  gap: createResponsiveValue(10, 13),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValue(15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Contribution to Net Zero
                </span>
              </motion.div>
            </div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0.6, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
              style={{
                width: createResponsiveValue(654.74, 873),
              }}
            >
              <p
                className="text-[#949494] text-left"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: createResponsiveValue(14, 19),
                  lineHeight: "1.362em",
                  letterSpacing: "-0.02em",
                }}
              >
                Developed and published in 2023 by the Integrity Council for the
                Voluntary Carbon Market (ICVCM), the CCP was formulated in
                response to growing concerns over integrity in global carbon
                markets. The CCP is widely regarded today as a foundational
                benchmark for defining high-integrity carbon projects. The ICVCM
                Committee regularly reviews methodologies developed by
                standard-setting bodies and issues CCP labels to validate their
                alignment with the framework.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Desktop Layout - 1024px+ - With Decorator */}
      <section className="hidden lg:block w-full bg-[#1E2421]">
        <div
          className="flex flex-row max-w-[2200px] mx-auto pt-[11px]"
          style={{
            gap: 45,
          }}
        >
          {/* Decorator Image */}
          <div
            className="flex-shrink-0"
            style={{
              width: createResponsiveValueDesktop(304, 428, 424),
              height: createResponsiveValueDesktop(488, 686, 689),
            }}
          >
            <Image
              src={PrincipleDecoratorImage}
              alt="Principle decorator"
              width={428}
              height={686}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div
            className="flex flex-col mt-[40px]"
            style={{
              width: createResponsiveValueDesktop(693, 974, 1488),
              gap: 19,
            }}
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.8, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#9C9C9C] flex items-center w-full mb-[20px]"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: createResponsiveValueDesktop(17, 24, 28),
                lineHeight: "1.25em",
                height: createResponsiveValueDesktop(21, 30, 46),
              }}
            >
              The Core Carbon Principles
            </motion.h2>

            {/* Principle Cards Grid - 5 columns x 2 rows */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                width: createResponsiveValueDesktop(535, 752, 1149),
                height: createResponsiveValueDesktop(169, 237, 362),
                gap: createResponsiveValueDesktop(6, 8, 12),
              }}
            >
              {/* Column 1 - Background #232A26 */}
              <motion.div
                key="card-1-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#232A26]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Effective Governance
                </span>
              </motion.div>

              {/* Column 2 - Background #272F2A */}
              <motion.div
                key="card-2-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#272F2A]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  Tracking
                </span>
              </motion.div>

              {/* Column 3 - Background #2B332F */}
              <motion.div
                key="card-3-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#2B332F]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  Transparency
                </span>
              </motion.div>

              {/* Column 4 - Background #2F3833 */}
              <motion.div
                key="card-4-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 3 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#2F3833]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Independent Audit
                </span>
              </motion.div>

              {/* Column 5 - Background #333D37 */}
              <motion.div
                key="card-5-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 4 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#333D37]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  Additionality
                </span>
              </motion.div>

              {/* Row 2 - Column 1 - Background #232A26 */}
              <motion.div
                key="card-6-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 5 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#232A26]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  Permanence
                </span>
              </motion.div>

              {/* Row 2 - Column 2 - Background #272F2A */}
              <motion.div
                key="card-7-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 6 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#272F2A]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Robust Quantification
                </span>
              </motion.div>

              {/* Row 2 - Column 3 - Background #2B332F */}
              <motion.div
                key="card-8-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 7 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#2B332F]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.6em",
                  }}
                >
                  No Double Counting
                </span>
              </motion.div>

              {/* Row 2 - Column 4 - Background #2F3833 */}
              <motion.div
                key="card-9-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 8 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#2F3833]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Safeguards & Benefits
                </span>
              </motion.div>

              {/* Row 2 - Column 5 - Background #333D37 */}
              <motion.div
                key="card-10-desktop"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 9 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center bg-[#333D37]"
                style={{
                  paddingTop: "0px",
                  paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                  paddingRight: createResponsiveValueDesktop(11, 16, 24),
                  paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                  gap: createResponsiveValueDesktop(7, 10, 15),
                }}
              >
                <span
                  className="text-[#9C9C9C] text-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: createResponsiveValueDesktop(11, 15, 20),
                    lineHeight: "1.4em",
                  }}
                >
                  Contribution to Net Zero
                </span>
              </motion.div>
            </div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0.6, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
              style={{
                width: createResponsiveValueDesktop(592, 833, 1272),
              }}
            >
              <p
                className="text-[#949494] text-left"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  fontSize: createResponsiveValueDesktop(11, 15, 18),
                  lineHeight: "1.362em",
                  letterSpacing: "-0.02em",
                }}
              >
                Developed and published in 2023 by the Integrity Council for the
                Voluntary Carbon Market (ICVCM), the CCP was formulated in
                response to growing concerns over integrity in global carbon
                markets. The CCP is widely regarded today as a foundational
                benchmark for defining high-integrity carbon projects. The ICVCM
                Committee regularly reviews methodologies developed by
                standard-setting bodies and issues CCP labels to validate their
                alignment with the framework.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CorePrincipleSectionDesktop;
