"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import FadeContent from "@/src/components/animation/fade-content";
import { Container } from "../shared";

// Image imports
import LogoDecorator from "../../../public/assets/desktop/about-us/logo-decorator.svg";

interface PracticalCard {
  title: string;
  description: string;
  backgroundColor: string;
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
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    position: { x: 395, y: 0 },
  },
  {
    title: "Co-Benefits at the Core",
    description:
      "Beyond carbon, we pursue SDG outcomes and adopt co-benefit labels like CCB to create real impact across environmental and social dimensions.",
    backgroundColor: "#FCFCFC",
    position: { x: 334, y: 167 },
  },
  {
    title: "Community-Integrated Design",
    description:
      "We place community consultation at the heart of development to ensure local relevance and contextual appropriateness.",
    backgroundColor: "#FCFCFC",
    position: { x: 280, y: 327 },
  },
  {
    title: "Systematic Operational Frameworks",
    description:
      "Each ARR and forest protection activity follows a structured in-house rollout, shaped by field experience and supported by practical tech and team expertise.",
    backgroundColor: "#FCFCFC",
    position: { x: 154, y: 473.72 },
  },
  {
    title: "Market-Aligned Agility",
    description:
      "We adapt to evolving market and regulatory shifts, aligning flexibly with new methodologies and frameworks like Article 6 and CORSIA.",
    backgroundColor: "#FFFFFF",
    position: { x: 0, y: 635.43 },
  },
];

// Responsive card positions - Tablet (768px-1249px) - Scale ratio: 0.711
const tabletCardPositions = [
  { x: 281, y: 0 },
  { x: 237, y: 119 },
  { x: 199, y: 233 },
  { x: 110, y:337 },
  { x: 0, y: 452 },
];

// Responsive card positions - Large Tablet (1250px-1439px) - Scale ratio: 0.889
const largeTabletCardPositions = [
  { x: 351, y: 0 },
  { x: 297, y: 148 },
  { x: 249, y: 291 },
  { x: 137, y: 421 },
  { x: 0, y: 565 },
];

export const OurPracticalSectionDesktop = () => {
  const containerMotion = useSimpleMotion("practical-container");

  return (
    <Container maxWidth="default" className="max-w-[1440px]">
      {/* Desktop Layout ≥1440px - Keep exactly as-is */}
      <motion.div
        {...SIMPLE_ANIMATIONS.fadeInUp}
        {...containerMotion}
        className="hidden xxl:block relative min-h-[879px] pt-[120px] w-[1440px]"
      >
        {/* Logo Decorator */}
        <div
          className="absolute z-10"
          style={{
            left: "45.03px",
            top: "80.5px",
            width: "421.7px",
            height: "410.12px",
          }}
        >
          <Image
            src={LogoDecorator}
            alt="Logo decorator"
            width={421.7}
            height={410.12}
          />
        </div>

        {/* Curve Content Group */}
        <div
          className="absolute z-20"
          style={{
            left: "218.19px",
            top: "80.5px",
            width: "955px",
            height: "723.43px",
          }}
        >
          {practicalCards.map((card, index) => (
            <FadeContent
              key={index}
              duration={800}
              easing="ease-out"
              delay={index * 150}
              threshold={0.1}
              initialOpacity={0}
              className="absolute transition-all duration-300 hover:transform hover:scale-105"
              style={{
                left: `${card.position.x}px`,
                top: `${card.position.y}px`,
                backdropFilter: "blur(10px)",
                width: "560px",
              }}
            >
              {/* Card Title */}
              <h3
                className="font-open-sans font-light text-black text-left mb-4"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.4em",
                }}
              >
                {card.title}
              </h3>

              {/* Card Description */}
              <p
                className="font-open-sans font-semibold text-[#798C9B] text-left"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.399999976158142em",
                }}
              >
                {card.description}
              </p>
            </FadeContent>
          ))}
        </div>
      </motion.div>

      {/* Responsive Layout 768px-1439px - Proportionally scaled implementations */}
      <div className="hidden md:block xxl:hidden w-full">
        {/* Tablet Layout 768px-1249px - Proportionally scaled from 1440px (ratio: 0.711) */}
        <motion.div
          {...SIMPLE_ANIMATIONS.fadeInUp}
          {...containerMotion}
          className="hidden md:block xlg:hidden relative w-full"
          style={{ minHeight: "625px", paddingTop: "85px" }}
        >
          {/* Logo Decorator - Scaled */}
          <div
            className="absolute z-10"
            style={{
              left: "32px",
              top: "57px",
              width: "300px",
              height: "292px",
            }}
          >
            <Image
              src={LogoDecorator}
              alt="Logo decorator"
              width={300}
              height={292}
            />
          </div>

          {/* Curve Content Group - Scaled */}
          <div
            className="absolute z-20"
            style={{
              left: "155px",
              top: "57px",
              width: "679px",
              height: "514px",
            }}
          >
            {practicalCards.map((card, index) => (
              <FadeContent
                key={`tablet-${index}`}
                duration={800}
                easing="ease-out"
                delay={index * 150}
                threshold={0.1}
                initialOpacity={0}
                className="absolute transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  left: `${tabletCardPositions[index].x}px`,
                  top: `${tabletCardPositions[index].y}px`,
                  backdropFilter: "blur(10px)",
                  width: "398px",
                }}
              >
                {/* Card Title - Responsive */}
                <h3
                  className="font-open-sans font-light text-black text-left mb-3"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.4em",
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description - Responsive */}
                <p
                  className="font-open-sans font-semibold text-[#798C9B] text-left"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.4em",
                  }}
                >
                  {card.description}
                </p>
              </FadeContent>
            ))}
          </div>
        </motion.div>

        {/* Large Tablet Layout 1250px-1439px - Proportionally scaled from 1440px (ratio: 0.889) */}
        <motion.div
          {...SIMPLE_ANIMATIONS.fadeInUp}
          {...containerMotion}
          className="hidden xlg:block xxl:hidden relative w-full"
          style={{ minHeight: "782px", paddingTop: "107px" }}
        >
          {/* Logo Decorator - Scaled */}
          <div
            className="absolute z-10"
            style={{
              left: "40px",
              top: "72px",
              width: "375px",
              height: "365px",
            }}
          >
            <Image
              src={LogoDecorator}
              alt="Logo decorator"
              width={375}
              height={365}
            />
          </div>

          {/* Curve Content Group - Scaled */}
          <div
            className="absolute z-20"
            style={{
              left: "194px",
              top: "72px",
              width: "849px",
              height: "644px",
            }}
          >
            {practicalCards.map((card, index) => (
              <FadeContent
                key={`large-tablet-${index}`}
                duration={800}
                easing="ease-out"
                delay={index * 150}
                threshold={0.1}
                initialOpacity={0}
                className="absolute transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  left: `${largeTabletCardPositions[index].x}px`,
                  top: `${largeTabletCardPositions[index].y}px`,
                  backdropFilter: "blur(10px)",
                  width: "498px",
                }}
              >
                {/* Card Title - Responsive */}
                <h3
                  className="font-open-sans font-light text-black text-left mb-3"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.4em",
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description - Responsive */}
                <p
                  className="font-open-sans font-semibold text-[#798C9B] text-left"
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.4em",
                  }}
                >
                  {card.description}
                </p>
              </FadeContent>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default OurPracticalSectionDesktop;
