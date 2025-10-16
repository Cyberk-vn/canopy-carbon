"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "../shared";

// Image imports
import PrincipleDecoratorImage from "../../../public/assets/desktop/our-projects/principle-decorator-image.avif";

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

// Responsive scaling helper for card dimensions across breakpoints
// lg (1024px) -> xxl (1440px) -> 3xl (1920px)
const createResponsiveValueCard = (
  valueLg: number,
  valueXxl: number,
  value3xl: number
): string => {
  return `clamp(
    ${valueLg}px,
    min(
      calc(${valueLg}px + (${valueXxl} - ${valueLg}) * ((100vw - 1024px) / 416)),
      calc(${valueXxl}px + (${value3xl} - ${valueXxl}) * ((100vw - 1440px) / 480))
    ),
    ${value3xl}px
  )`;
};

// Principle card data structure
interface PrincipleCard {
  id: string;
  text: string;
  backgroundColor: string;
  row: 1 | 2;
  lineHeight: string;
}

const principleCards: PrincipleCard[] = [
  // Row 1
  {
    id: "card-1",
    text: "Effective Governance",
    backgroundColor: "#232A26",
    row: 1,
    lineHeight: "1.2em",
  },
  {
    id: "card-2",
    text: "Tracking",
    backgroundColor: "#272F2A",
    row: 1,
    lineHeight: "1.6em",
  },
  {
    id: "card-3",
    text: "Transparency",
    backgroundColor: "#2B332F",
    row: 1,
    lineHeight: "1.6em",
  },
  {
    id: "card-4",
    text: "Independent Audit",
    backgroundColor: "#2F3833",
    row: 1,
    lineHeight: "1.2em",
  },
  {
    id: "card-5",
    text: "Additionality",
    backgroundColor: "#333D37",
    row: 1,
    lineHeight: "1.6em",
  },
  // Row 2
  {
    id: "card-6",
    text: "Permanence",
    backgroundColor: "#232A26",
    row: 2,
    lineHeight: "1.6em",
  },
  {
    id: "card-7",
    text: "Robust Quantification",
    backgroundColor: "#272F2A",
    row: 2,
    lineHeight: "1.2em",
  },
  {
    id: "card-8",
    text: "No Double Counting",
    backgroundColor: "#2B332F",
    row: 2,
    lineHeight: "1.2em",
  },
  {
    id: "card-9",
    text: "Safeguards & Benefits",
    backgroundColor: "#2F3833",
    row: 2,
    lineHeight: "1.2em",
  },
  {
    id: "card-10",
    text: "Contribution to Net Zero",
    backgroundColor: "#333D37",
    row: 2,
    lineHeight: "1.2em",
  },
];

// Component props interface
interface CorePrincipleSectionDesktopProps {
  showRows?: 1 | 2; // Optional prop to control rows, defaults to 2
}

const CorePrincipleSectionDesktop: React.FC<
  CorePrincipleSectionDesktopProps
> = ({ showRows = 2 }) => {
  // Filter cards based on rows to show
  const visibleCards = principleCards.filter((card) => card.row <= showRows);

  // Determine grid rows configuration
  const gridRows = showRows === 1 ? "1fr" : "repeat(2, 1fr)";
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
            className={`w-full flex flex-col ${
              showRows === 1 ? "justify-center" : ""
            }`}
            style={{
              gap: createResponsiveValue(48, 64),
              minHeight:
                showRows === 1 ? createResponsiveValue(400, 500) : "auto",
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

            {/* Principle Cards Grid - 5 columns x dynamic rows */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: gridRows,
                width: createResponsiveValue(654, 872),
                height:
                  showRows === 1
                    ? createResponsiveValue(94, 125.5)
                    : createResponsiveValue(188, 251),
                gap: createResponsiveValue(8, 11),
              }}
            >
              {visibleCards.map((card, index) => (
                <motion.div
                  key={`${card.id}-tablet`}
                  initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: card.backgroundColor,
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
                      lineHeight: card.lineHeight,
                    }}
                  >
                    {card.text}
                  </span>
                </motion.div>
              ))}
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
        <div className="flex flex-row max-w-[1920px] mx-auto py-[11px] gap-[80px]">
          {/* Decorator Image */}
          <div
            className="flex-shrink-0"
            style={{
              width: createResponsiveValueDesktop(304, 428, 428),
              height: createResponsiveValueDesktop(488, 686, 686),
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
            className={`flex flex-col mt-[30px] gap-5 ${
              showRows === 1 ? "justify-center" : ""
            }`}
            style={{
              width: createResponsiveValueDesktop(654, 752, 972),
              minHeight:
                showRows === 1
                  ? createResponsiveValueDesktop(400, 500, 600)
                  : "auto",
            }}
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.8, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#9C9C9C] flex items-center w-full mb-[60px] font-open-sans 3xl:font-avenir-heavy font-normal"
              style={{
                fontSize: createResponsiveValueDesktop(17, 24, 28),
                lineHeight: "1.25em",
                height: createResponsiveValueDesktop(21, 30, 46),
              }}
            >
              The Core Carbon Principles
            </motion.h2>

            {/* Principle Cards Grid - 5 columns x dynamic rows */}
            <div
              className="grid ml-2"
              style={{
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: gridRows,
                gap: createResponsiveValueDesktop(6, 8, 12),
                minHeight:
                  showRows === 1
                    ? createResponsiveValueCard(90, 114, 145)
                    : createResponsiveValueCard(186, 236, 302),
              }}
            >
              {visibleCards.map((card, index) => (
                <motion.div
                  key={`${card.id}-desktop`}
                  initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex flex-col justify-start items-center"
                  style={{
                    backgroundColor: card.backgroundColor,
                    width: createResponsiveValueCard(124, 144, 182),
                    height: createResponsiveValueCard(90, 114, 145),
                    paddingTop: createResponsiveValueDesktop(16, 24, 32),
                    paddingLeft: createResponsiveValueDesktop(11, 16, 24),
                    paddingRight: createResponsiveValueDesktop(11, 16, 24),
                    paddingBottom: createResponsiveValueDesktop(6, 8, 12),
                    gap: createResponsiveValueDesktop(7, 10, 15),
                  }}
                >
                  <span
                    className="text-[#9C9C9C] font-open-sans text-center 3xl:font-avenir-heavy 3xl:font-normal"
                    style={{
                      fontSize: createResponsiveValueDesktop(11, 15, 20),
                      lineHeight: card.lineHeight,
                    }}
                  >
                    {card.text}
                  </span>
                </motion.div>
              ))}
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
                className="text-[#7F7F7F] text-left font-open-sans font-normal leading-normal max-w-[1042px] 3xl:mt-5"
                style={{
                  fontSize: createResponsiveValueDesktop(11, 15, 18),
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
