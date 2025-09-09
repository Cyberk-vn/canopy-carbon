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

export const OurPracticalSectionDesktop = () => {
  const containerMotion = useSimpleMotion("practical-container");

  return (
    <Container maxWidth="default" className="max-w-[1440px]">
      <motion.div
        {...SIMPLE_ANIMATIONS.fadeInUp}
        {...containerMotion}
        className="relative min-h-[879px] pt-[120px] w-[1440px]"
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
    </Container>
  );
};

export default OurPracticalSectionDesktop;
