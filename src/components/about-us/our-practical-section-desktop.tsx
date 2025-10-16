"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import FadeContent from "@/src/components/animation/fade-content";

// Image imports
import LogoDecorator from "../../../public/assets/banner-shared-component/circle-large.avif";
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
// Vertical gap: 60px between cards (increased from 40px)
// Horizontal: Leftward curve scaling proportionally
const cardPositions: CardPosition[] = [
  {
    // Card 1: 90px margin-top, furthest right (shifted right +120px, then left -140px at 2200px, shifted down +80px)
    left1280: 668.49, // 548.49 + 120
    top1280: 170, // 90 + 80 (shifted down)
    width1280: 525.78,
    left1440: 736.69, // 616.69 + 120
    top1440: 170, // 90 + 80 (shifted down)
    width1440: 591,
    left2200: 1012.31, // 1062.31 - 140 (adjusted left for 2200px)
    top2200: 170, // 90 + 80 (shifted down) - FURTHEST RIGHT
    width2200: 903.05,
  },
  {
    // Card 2: 60px gap from Card 1 (shifted right +120px, then left -140px at 2200px, shifted down +80px)
    left1280: 607.63, // 487.63 + 120
    top1280: 330, // 170 + 100 (height) + 60 (gap)
    width1280: 521.16,
    left1440: 668.21, // 548.21 + 120
    top1440: 350, // 170 + 120 (height) + 60 (gap)
    width1440: 585.95,
    left2200: 897.67, // 957.67 - 140 (adjusted left for 2200px)
    top2200: 380, // 170 + 150 (height) + 60 (gap)
    width2200: 895.41,
  },
  {
    // Card 3: 60px gap from Card 2 (shifted right +120px, then left -140px at 2200px, shifted down +80px)
    left1280: 562.28, // 442.28 + 120
    top1280: 490, // 330 + 100 + 60
    width1280: 498.22,
    left1440: 617.19, // 497.19 + 120
    top1440: 530, // 350 + 120 + 60
    width1440: 560,
    left2200: 779.67, // 879.67 - 140 (adjusted left for 2200px)
    top2200: 590, // 380 + 150 + 60
    width2200: 855.68,
  },
  {
    // Card 4: 60px gap from Card 3 (shifted right +120px, then left -80px at 2200px, shifted down +80px)
    left1280: 450.06, // 330.06 + 120
    top1280: 650, // 490 + 100 + 60
    width1280: 498.22,
    left1440: 491.19, // 371.19 + 120
    top1440: 710, // 530 + 120 + 60
    width1440: 560,
    left2200: 607.34, // 687.34 - 80 (adjusted left for 2200px)
    top2200: 780, // 590 + 150 + 60
    width2200: 855.68,
  },
  {
    // Card 5: 60px gap from Card 4, furthest left (shifted right +120px, then left -80px at 2200px, shifted down +80px)
    left1280: 313.17, // 193.17 + 120
    top1280: 810, // 650 + 100 + 60
    width1280: 498.22,
    left1440: 337.19, // 217.19 + 120
    top1440: 890, // 710 + 120 + 60
    width1440: 560,
    left2200: 411.95, // 451.95 - 80 (adjusted left for 2200px)
    top2200: 1010, // 800 + 150 + 60
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

      <div className="max-w-[2150px] mx-auto relative">
        <motion.div
          {...SIMPLE_ANIMATIONS.fadeInUp}
          {...containerMotion}
          className="relative hidden xl:block overflow-hidden"
          style={{
            minHeight: createResponsiveValue(1100, 1200, 1268),
          }}
        >
          {/* Logo Decorator - Sizes: 1280px(-98.16), 1440px(-110.31), 2200px(0) - left position */}
          <div
            className="absolute z-10 pointer-events-none"
            style={{
              left: "clamp(-110.31px, max(calc(-98.16px + (-110.31 - -98.16) * ((100vw - 1280px) / 160)), calc(-110.31px + (0 - -110.31) * ((100vw - 1440px) / 760))), 0px)",
            }}
          >
            <Image
              src={LogoDecorator}
              alt="Logo decorator"
              width={697}
              height={595}
              className="object-contain"
              style={{
                width: createResponsiveValue(524, 589, 697),
                height: createResponsiveValue(510, 573, 595),
              }}
            />
          </div>

          {/* Canopy Logo centered inside decorator - full opacity, offset 10px down and 10px left */}
          {/* <div
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
            }}
          >
            <Image
              src={CanopyLogo}
              alt="Canopy Development"
              width={260}
              height={226}
              className="object-contain"
              style={{
                width: createResponsiveValue(200, 220, 260),
                height: createResponsiveValue(174, 191, 226),
              }}
            />
          </div> */}

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
                  className="font-['Work_Sans'] font-semibold text-[#506159] text-left ml-4"
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
                  className="font-['Work_Sans'] font-normal text-[#798C9B] text-left leading-[32px] max-w-[760px]"
                  style={{
                    fontSize: createResponsiveValue(13.33, 15, 18),
                    letterSpacing: "0%",
                  }}
                >
                  {card.description}
                </p>
              </FadeContent>
            );
          })}

          {/* Line Decorators */}
          {/* Bottom left rectangle (1280px: shifted down +250px, shifted left -80px) */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(132.44, 224, 278.91), // 1280px: 212.44 - 80, others unchanged
              top: createResponsiveValue(1080, 1180, 1248), // 1280px: 830 + 250, others unchanged
              width: createResponsiveValue(280, 315, 481.32),
              height: createResponsiveValue(3.56, 4, 6.11),
            }}
          />

          {/* Left vertical line (1280px: shifted down +250px, shifted left -80px) */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(142.87, 235.73, 296.84), // 1280px: 222.87 - 80, others unchanged
              top: createResponsiveValue(760, 800, 788), // 1280px: 510 + 250, others unchanged
              width: createResponsiveValue(1.78, 2, 3.06),
              height: createResponsiveValue(258, 290, 370),
            }}
          />

          {/* Bottom right rectangle - Aligned with development-decorator-image center */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(800, 1050.5, 1580.5),
              top: createResponsiveValue(1084, 1184, 1248),
              width: createResponsiveValue(315, 315, 315),
              height: createResponsiveValue(3.56, 4, 6.11),
            }}
          />

          {/* Shorter line below bottom right rectangle - centered */}
          <div
            className="absolute z-10 bg-[#EEF0F2]"
            style={{
              left: createResponsiveValue(838, 1088.5, 1618.5), // 38px offset from parent left
              top: createResponsiveValue(1092, 1192, 1260), // 8px below parent rectangle
              width: createResponsiveValue(240, 240, 240),
              height: createResponsiveValue(0.89, 1, 2), // 1px height scaled proportionally
            }}
          />

          {/* Canopy Development Logo - Aligned with development-decorator-image center */}
          <div
            className="absolute z-10"
            style={{
              left: createResponsiveValue(800, 1100.5, 1630.5),
              bottom: createResponsiveValue(90, 90, 90),
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
