"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import FadeContent from "@/src/components/animation/fade-content";

// Image imports
import LogoDecorator from "../../../public/assets/banner-shared-component/circle.png";
import CanopyLogo from "../../../public/assets/desktop/about-us/canopy-development-logo.svg";

interface PracticalCard {
  title: string;
  description: string;
}

interface CardPosition {
  left768: number;
  top768: number;
  width768: number;
  left1280: number;
  top1280: number;
  width1280: number;
}

const practicalCards: PracticalCard[] = [
  {
    title: "In Line with Global Best Practices",
    description:
      "We align our projects with globally recognized standards like the ICVCM Core Carbon Principles to ensure top-tier environmental and market integrity.",
  },
  {
    title: "Systematic Operational Frameworks",
    description:
      "Each ARR and forest protection activity follows a structured in-house rollout, shaped by field experience and supported by practical tech and team expertise.",
  },
  {
    title: "Community-Integrated Design",
    description:
      "We place community consultation at the heart of development to ensure local relevance and contextual appropriateness.",
  },
  {
    title: "Co-Benefits at the Core",
    description:
      "Beyond carbon, we pursue SDG outcomes and adopt co-benefit labels like CCB to create real impact across environmental and social dimensions.",
  },
  {
    title: "Market-Aligned Agility",
    description:
      "We adapt to evolving market and regulatory shifts, aligning flexibly with new methodologies and frameworks like Article 6 and CORSIA.",
  },
];

// Tablet: 768px-1280px with synchronized vertical gaps
// Card heights: ~128px (768px), ~100px (1280px)
// Vertical gap: scales with card height to maintain visual consistency
const cardPositions: CardPosition[] = [
  {
    // Card 1: 29px margin-top at 768px, furthest right
    left768: 284.5,
    top768: 29,
    width768: 424,
    left1280: 548.49,
    top1280: 90,
    width1280: 525.78,
  },
  {
    // Card 2
    left768: 246.5,
    top768: 157,
    width768: 474,
    left1280: 487.63,
    top1280: 230,
    width1280: 521.16,
  },
  {
    // Card 3
    left768: 165.21,
    top768: 284.34,
    width768: 560,
    left1280: 442.28,
    top1280: 370,
    width1280: 498.22,
  },
  {
    // Card 4
    left768: 57.79,
    top768: 391.73,
    width768: 560,
    left1280: 330.06,
    top1280: 510,
    width1280: 498.22,
  },
  {
    // Card 5: furthest left
    left768: 25.5,
    top768: 502.26,
    width768: 560,
    left1280: 193.17,
    top1280: 650,
    width1280: 498.22,
  },
];

// Helper function to create responsive value for tablet with 2 breakpoints
// 768px-1280px: Smooth scaling across the range
const createResponsiveValue = (value768: number, value1280: number): string => {
  return `clamp(
    ${value768}px,
    calc(${value768}px + (${value1280} - ${value768}) * ((100vw - 768px) / 512)),
    ${value1280}px
  )`;
};

export const OurPracticalSectionTablet = () => {
  const containerMotion = useSimpleMotion("practical-container");

  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          {...SIMPLE_ANIMATIONS.fadeInUp}
          {...containerMotion}
          className="relative bg-[#FFFFFF] hidden md:block xl:hidden overflow-hidden"
          style={{
            minHeight: createResponsiveValue(686, 850),
          }}
        >
          {/* Gradient Background Overlay - fills to right edge */}
          <div
            className="absolute z-0 pointer-events-none"
            style={{
              left: createResponsiveValue(500, 534),
              right: 0,
              top: createResponsiveValue(-0.02, -0.02),
              bottom: 0,
              background:
                "linear-gradient(142deg, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 1) 100%)",
            }}
          />

          {/* Logo Decorator - Sizes: 768px(293x285), 1280px(524x510) */}
          <div
            className="absolute z-10 pointer-events-none opacity-60 overflow-hidden"
            style={{
              left: createResponsiveValue(-72.59, -98.16),
              top: createResponsiveValue(-48.3, -62.22),
              width: createResponsiveValue(293, 524),
              height: createResponsiveValue(285, 510),
            }}
          >
            <Image
              src={LogoDecorator}
              alt="Logo decorator"
              fill
              className="object-contain"
            />
          </div>

          {/* Cards - Absolute positioning with exact Figma coordinates */}
          {practicalCards.map((card, index) => {
            const position = cardPositions[index];

            return (
              <FadeContent
                key={index}
                duration={800}
                easing="ease-out"
                delay={index * 150}
                threshold={0.1}
                initialOpacity={0}
                className="absolute z-20 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  left: createResponsiveValue(
                    position.left768,
                    position.left1280
                  ),
                  top: createResponsiveValue(position.top768, position.top1280),
                  width: createResponsiveValue(
                    position.width768,
                    position.width1280
                  ),
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Card Title */}
                <h3
                  className="font-['Work_Sans'] font-semibold text-[#506159] text-left leading-[1.4em]"
                  style={{
                    fontSize: createResponsiveValue(16, 17.78),
                    marginBottom: createResponsiveValue(16, 8),
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p
                  className="font-['Work_Sans'] font-normal text-[#798C9B] text-left leading-[1.5em]"
                  style={{
                    fontSize: createResponsiveValue(14, 13.33),
                  }}
                >
                  {card.description}
                </p>
              </FadeContent>
            );
          })}

          {/* Line Decorators */}
          {/* Bottom horizontal line */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(75, 92.71),
              top: createResponsiveValue(671, 835),
              width: createResponsiveValue(900, 1119.4),
              height: "1px",
            }}
          />

          {/* Bottom right diagonal line */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(775, 965.33),
              top: createResponsiveValue(678, 842),
              width: createResponsiveValue(171, 213.33),
              height: "1px",
            }}
          />

          {/* Bottom left rectangle */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(75, 92.44),
              top: createResponsiveValue(666, 830),
              width: createResponsiveValue(225, 280),
              height: createResponsiveValue(3.2, 3.56),
            }}
          />

          {/* Bottom right rectangle */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(748, 931.56),
              top: createResponsiveValue(670, 834),
              width: createResponsiveValue(225, 280),
              height: createResponsiveValue(3.2, 3.56),
            }}
          />

          {/* Canopy Development Logo - positioned at bottom right */}
          <div
            className="absolute z-10"
            style={{
              right: createResponsiveValue(0, 0),
              bottom: createResponsiveValue(0, 0),
              width: createResponsiveValue(186, 232),
              height: createResponsiveValue(186, 232),
            }}
          >
            <Image
              src={CanopyLogo}
              alt="Canopy Development"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurPracticalSectionTablet;
