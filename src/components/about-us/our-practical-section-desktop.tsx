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
  left1280: number;
  top1280: number;
  width1280: number;
  left1440: number;
  top1440: number;
  width1440: number;
  left2200: number;
  top2200: number;
  width2200: number;
}

const practicalCards: PracticalCard[] = [
  {
    title: "In Line with Global Best Practices",
    description:
      "We develop our projects in accordance with globally recognized standards that adhere to rigorous frameworks like the ICVCM Core Carbon Principles—ensuring alignment with the highest levels of environmental and market integrity.",
  },
  {
    title: "Systematic Operational Frameworks",
    description:
      "Each ARR and avoided deforestation activity follows a structured in-house rollout strategy, refined through field experience. We also assess practical tech applications and leverage our in-house team to build solutions where relevant.",
  },
  {
    title: "Community-Integrated Design",
    description:
      "We embed community consultation and feedback at the core of our development model, ensuring that all activities are contextually appropriate and locally supported.",
  },
  {
    title: "Co-Benefits at the Core",
    description:
      "Our strategy goes beyond carbon—pursuing SDG-aligned outcomes and adopting co-benefit labels like CCB to drive real-world impact across environmental, social, and economic dimensions.",
  },
  {
    title: "Market-Aligned Agility",
    description:
      "Our development strategies are built to evolve with shifting regulatory and voluntary market dynamics, enabling flexible alignment with updated methodologies and emerging frameworks such as Article 6 and CORSIA.",
  },
];

// Desktop: 1280px-2200px with synchronized vertical gaps
// Card 1: 90px margin-top (constant)
// Card heights: ~100px (1280px), ~120px (1440px), ~150px (2200px)
// Vertical gap: 40px between cards (constant across all sizes)
// Horizontal: Leftward curve scaling proportionally
const cardPositions: CardPosition[] = [
  {
    // Card 1: 90px margin-top, furthest right
    left1280: 548.49, // Scales from 1440px
    top1280: 90, // margin (90)
    width1280: 525.78,
    left1440: 616.69,
    top1440: 90, // margin (90)
    width1440: 591,
    left2200: 942.31,
    top2200: 90, // margin (90) - FURTHEST RIGHT
    width2200: 903.05,
  },
  {
    // Card 2: 40px gap from Card 1
    left1280: 487.63, // Scales proportionally
    top1280: 230, // 90 + 100 (height) + 40 (gap)
    width1280: 521.16,
    left1440: 548.21,
    top1440: 250, // 90 + 120 (height) + 40 (gap)
    width1440: 585.95,
    left2200: 837.67,
    top2200: 280, // 90 + 150 (height) + 40 (gap)
    width2200: 895.41,
  },
  {
    // Card 3: 40px gap from Card 2
    left1280: 442.28, // Scales proportionally
    top1280: 370, // 230 + 100 + 40
    width1280: 498.22,
    left1440: 497.19,
    top1440: 410, // 250 + 120 + 40
    width1440: 560,
    left2200: 759.67,
    top2200: 470, // 280 + 150 + 40
    width2200: 855.68,
  },
  {
    // Card 4: 40px gap from Card 3
    left1280: 330.06, // Scales proportionally
    top1280: 510, // 370 + 100 + 40
    width1280: 498.22,
    left1440: 371.19,
    top1440: 570, // 410 + 120 + 40
    width1440: 560,
    left2200: 567.34,
    top2200: 660, // 470 + 150 + 40
    width2200: 855.68,
  },
  {
    // Card 5: 40px gap from Card 4, furthest left
    left1280: 193.17, // Scales proportionally
    top1280: 650, // 510 + 100 + 40
    width1280: 498.22,
    left1440: 217.19,
    top1440: 730, // 570 + 120 + 40
    width1440: 560,
    left2200: 331.95,
    top2200: 850, // 660 + 150 + 40
    width2200: 855.68,
  },
];

// Helper function to create responsive value for desktop with 3 breakpoints
// 1280px-1440px-2200px: Smooth scaling across all sizes
const createResponsiveValue = (
  value1280: number,
  value1440: number,
  value2200: number
): string => {
  // Two-stage interpolation:
  // 1280px-1440px: interpolate first section
  // 1440px-2200px: interpolate second section
  return `clamp(
    ${value1280}px,
    min(
      calc(${value1280}px + (${value1440} - ${value1280}) * ((100vw - 1280px) / 160)),
      calc(${value1440}px + (${value2200} - ${value1440}) * ((100vw - 1440px) / 760))
    ),
    ${value2200}px
  )`;
};

export const OurPracticalSectionDesktop = () => {
  const containerMotion = useSimpleMotion("practical-container");

  return (
    <div className="w-full bg-[#FFFFFF] relative">
      {/* Gradient Background Overlay - fills full screen width */}
      <div
        className="absolute z-0 pointer-events-none hidden xl:block"
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          background:
            "linear-gradient(142deg, rgba(249, 249, 249, 0) 0%, rgba(249, 249, 249, 1) 100%)",
        }}
      />

      <div className="max-w-[2200px] mx-auto relative">
        <motion.div
          {...SIMPLE_ANIMATIONS.fadeInUp}
          {...containerMotion}
          className="relative hidden xl:block overflow-hidden"
          style={{
            minHeight: createResponsiveValue(850, 970, 1140),
          }}
        >
          {/* Logo Decorator - Sizes: 1280px(-98.16), 1440px(-110.31), 2200px(0) - left position */}
          <div
            className="absolute z-10 pointer-events-none opacity-60 overflow-hidden"
            style={{
              left: "clamp(-110.31px, max(calc(-98.16px + (-110.31 - -98.16) * ((100vw - 1280px) / 160)), calc(-110.31px + (0 - -110.31) * ((100vw - 1440px) / 760))), 0px)",
              top: createResponsiveValue(-100, -70, -80),
              width: createResponsiveValue(524, 589, 697),
              height: createResponsiveValue(510, 573, 595),
            }}
          >
            <Image
              src={LogoDecorator}
              alt="Logo decorator"
              fill
              className="object-contain"
            />
          </div>

          {/* Canopy Logo centered inside decorator - full opacity, offset 10px down and 10px left */}
          <div
            className="absolute z-10 pointer-events-none"
            style={{
              left: `calc(clamp(-110.31px, max(calc(-98.16px + (-110.31 - -98.16) * ((100vw - 1280px) / 160)), calc(-110.31px + (0 - -110.31) * ((100vw - 1440px) / 760))), 0px) + ${createResponsiveValue(
                524,
                589,
                697
              )} / 2 - 50px)`,
              top: `calc(${createResponsiveValue(
                -100,
                -70,
                -80
              )} + ${createResponsiveValue(510, 573, 595)} / 2 + 50px)`,
              transform: "translate(-50%, -50%)",
              width: createResponsiveValue(200, 220, 260),
              height: createResponsiveValue(174, 191, 226),
            }}
          >
            <Image
              src={CanopyLogo}
              alt="Canopy Development"
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
                    position.left1280,
                    position.left1440,
                    position.left2200
                  ),
                  top: createResponsiveValue(
                    position.top1280,
                    position.top1440,
                    position.top2200
                  ),
                  width: createResponsiveValue(
                    position.width1280,
                    position.width1440,
                    position.width2200
                  ),
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Card Title - 1280px: 17.78px → 1440px: WS 600 20px → 1920px: WS 600 22px */}
                <h3
                  className="font-['Work_Sans'] font-semibold text-[#506159] text-left"
                  style={{
                    fontSize: createResponsiveValue(17.78, 20, 22),
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    marginBottom: createResponsiveValue(8, 9, 10),
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description - 1280px: 13.33px → 1440px: WS 400 15px → 1920px: WS 400 18px */}
                <p
                  className="font-['Work_Sans'] font-normal text-[#798C9B] text-left"
                  style={{
                    fontSize: createResponsiveValue(13.33, 15, 18),
                    lineHeight: "150%",
                    letterSpacing: "0%",
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
              left: createResponsiveValue(92.71, 104.3, 159.37),
              top: createResponsiveValue(835, 955, 1125),
              width: createResponsiveValue(1119.4, 1258.32, 1922.71),
              height: "1px",
            }}
          />

          {/* Bottom right diagonal line */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(965.33, 1086, 1659.41),
              top: createResponsiveValue(842, 962, 1132),
              width: createResponsiveValue(213.33, 240, 366.72),
              height: "1px",
            }}
          />

          {/* Bottom left rectangle */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(92.44, 104, 158.91),
              top: createResponsiveValue(830, 950, 1120),
              width: createResponsiveValue(280, 315, 481.32),
              height: createResponsiveValue(3.56, 4, 6.11),
            }}
          />

          {/* Left vertical line */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(102.87, 115.73, 176.84),
              top: createResponsiveValue(510, 570, 660),
              width: createResponsiveValue(1.78, 2, 3.06),
              height: createResponsiveValue(258, 290, 370),
            }}
          />

          {/* Bottom right rectangle */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(931.56, 1048, 1601.34),
              top: createResponsiveValue(834, 954, 1124),
              width: createResponsiveValue(280, 315, 481.32),
              height: createResponsiveValue(3.56, 4, 6.11),
            }}
          />

          {/* Canopy Development Logo - positioned at bottom right */}
          <div
            className="absolute z-10"
            style={{
              right: createResponsiveValue(0, 0, 0),
              bottom: createResponsiveValue(0, 0, 0),
              width: 200,
              height: 174,
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

export default OurPracticalSectionDesktop;
