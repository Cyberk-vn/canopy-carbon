"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

interface PracticalCard {
  title: string;
  description: string;
  titleAlignment: "left" | "right";
  backgroundColor: string;
  textAlignment: "left" | "right";
  position: {
    x: number;
    y: number;
  };
}

const practicalCards: PracticalCard[] = [
  {
    title: "In Line with Global Best Practices",
    description:
      "We align our projects with globally recognized standards like the ICVCM Core Carbon Principles to ensure top-tier environmental and market integrity.",
    titleAlignment: "left",
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    textAlignment: "left",
    position: { x: 0, y: 0 },
  },
  {
    title: "Systematic Operational Frameworks",
    description:
      "Each ARR and forest protection activity follows a structured in-house rollout, shaped by field experience and supported by practical tech and team expertise.",
    titleAlignment: "right",
    backgroundColor: "#FCFCFC",
    textAlignment: "right",
    position: { x: 30, y: 186 },
  },
  {
    title: "Co-Benefits at the Core",
    description:
      "Beyond carbon, we pursue SDG outcomes and adopt co-benefit labels like CCB to create real impact across environmental and social dimensions.",
    titleAlignment: "right",
    backgroundColor: "#FCFCFC",
    textAlignment: "right",
    position: { x: 30, y: 558 },
  },
  {
    title: "Community-Integrated Design",
    description:
      "We place community consultation at the heart of development to ensure local relevance and contextual appropriateness.",
    titleAlignment: "left",
    backgroundColor: "#FCFCFC",
    textAlignment: "left",
    position: { x: 0, y: 372 },
  },
  {
    title: "Market-Aligned Agility",
    description:
      "We adapt to evolving market and regulatory shifts, aligning flexibly with new methodologies and frameworks like Article 6 and CORSIA.",
    titleAlignment: "left",
    backgroundColor: "#FFFFFF",
    textAlignment: "left",
    position: { x: 0, y: 744 },
  },
];

export const OurPracticalSection = () => {
  const containerMotion = useSimpleMotion("practical-container");

  return (
    <motion.div
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...containerMotion}
      className="w-full min-h-[975px] md:min-h-[600px]"
    >
      {/* Background Layer - Using Grid */}
      <div className="w-full h-full grid grid-rows-1 grid-cols-1">
        {/* Background Images - Stacked */}
        <div className="row-start-1 col-start-1 w-full h-full">
          <div className="w-full h-full flex flex-col md:flex-row">
            {/* Mobile Background Stack */}
            <div className="w-full h-[975px] md:hidden flex flex-col">
              <div className="h-[121px]"></div>
              <div className="flex-1 relative">
                <Image
                  src="/assets/about-us/our-pratical-bg-mobile-image.png"
                  alt="Mobile Background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Desktop Background */}
            <div className="hidden md:block w-full h-full relative">
              <Image
                src="/assets/about-us/our-practical-bg-image.png"
                alt="Background"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Layer - Using Flex Grid */}
        <div className="row-start-1 col-start-1 z-10 w-full h-full">
          {/* Mobile Layout - Proper CSS Grid */}
          <div className="md:hidden w-full h-full pt-[53px]">
            <div className="grid grid-cols-1 gap-[34px] auto-rows-max">
              {practicalCards.map((card, index) => {
                const isRightAligned = index === 1 || index === 3;

                return (
                  <div
                    key={index}
                    className={`w-full flex flex-col gap-[5px] ${
                      isRightAligned ? "justify-self-end" : "justify-self-start"
                    }`}
                    style={{
                      maxWidth: isRightAligned ? "359px" : "363px",
                      alignItems: isRightAligned ? "flex-end" : "flex-start",
                    }}
                  >
                    {/* Card Title - Aligned with card text content */}
                    <div
                      className={`max-w-[226px] ${
                        isRightAligned
                          ? "text-right items-end justify-end mr-[33px]"
                          : "text-left ml-[44px]"
                      }`}
                    >
                      <h3
                        className="font-open-sans font-light text-black"
                        style={{
                          fontSize: "16px",
                          lineHeight: "20px",
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Card Background with Content */}
                    <div
                      className="rounded-[10px] pt-[13px] pr-[28px] pb-[47px] max-h-[121px] h-[121px] min-h-[121px] flex items-start"
                      style={{
                        backgroundColor: card.backgroundColor,
                      }}
                    >
                      <p
                        className={`font-open-sans font-semibold text-[#798C9B] w-full ${
                          isRightAligned
                            ? "text-right mr-[33px]"
                            : "text-left ml-[44px]"
                        }`}
                        style={{
                          fontSize: "12px",
                          lineHeight: "1.6666666666666667em",
                        }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block py-16 px-0 md:px-16 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {practicalCards.map((card, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                    index % 2 === 0
                      ? "lg:justify-self-start"
                      : "lg:justify-self-end"
                  }`}
                  style={{
                    backgroundColor: card.backgroundColor,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Card Title */}
                  <h3
                    className={`font-open-sans font-light text-black mb-4 ${
                      card.titleAlignment === "right"
                        ? "text-right"
                        : "text-left"
                    }`}
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.25em",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`font-open-sans font-semibold text-[#798C9B] ${
                      card.textAlignment === "right"
                        ? "text-right"
                        : "text-left"
                    }`}
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6666666666666667em",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurPracticalSection;
