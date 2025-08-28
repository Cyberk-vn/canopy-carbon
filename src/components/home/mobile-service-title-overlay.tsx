"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { SinglePhraseBackgroundRenderer } from "./single-phrase-background-renderer";
import { getOverlayBackgroundColor } from "@/src/lib/utils/background-utils";
import type { WordBackgroundConfig } from "@/src/lib/utils/word-background-utils";
import type { MobileTitleProps } from "@/src/types/text-layout";

/**
 * Mobile Service Title Component with Word-Level Background Overlay
 * Uses precise word-level masking: decorator visible between words
 */
export const MobileServiceTitleOverlay: React.FC<MobileTitleProps> = ({
  title,
  className = "",
}) => {
  // Motion hooks for animations
  const titleMotion = useSimpleMotion("mobile-service-title");
  const decoratorMotion = useSimpleMotion("mobile-service-decorator");
  const calculateDecoratorPosition = () => {
    const lineHeight = 20;
    const estimatedLines = Math.ceil(title.length / 25);
    const actualLines = Math.max(1, Math.min(estimatedLines, 6));

    const textHeight = actualLines * lineHeight;
    const decoratorPosition = Math.round(textHeight * 0.75) - 24;

    return `${Math.max(0, decoratorPosition)}px`;
  };

  const wordBackgroundConfig: WordBackgroundConfig = {
    backgroundColor: getOverlayBackgroundColor(),
    wordPadding: "0 0.5px",
    wordSpacing: "",
    preserveLineBreaks: true,
  };

  // Target phrase for single phrase background renderer
  const TARGET_PHRASE = "institutional-grade integrity.pt";

  return (
    <div className={`relative w-full max-w-[330px] ${className}`}>
      <motion.div
        {...SIMPLE_ANIMATIONS.fadeInRight}
        {...decoratorMotion}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute flex items-center w-full"
        style={{
          top: calculateDecoratorPosition(),
          left: "0px",
          zIndex: 1,
        }}
      >
        {/* Full-width line background */}
        <div
          className="bg-[#B7C0C9] flex-grow"
          style={{
            height: "1px",
            opacity: 0.25,
          }}
        />

        {/* Plus Icon at end */}
        <Image
          src="/assets/icon/plus-icon.png"
          alt="Plus icon"
          width={16}
          height={16}
          className="flex-shrink-0 ml-2"
          style={{
            width: "16px",
            height: "16px",
          }}
        />
      </motion.div>

      <motion.p
        {...SIMPLE_ANIMATIONS.fadeInUp}
        {...titleMotion}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mobile-service-title-text relative safari-hw-accel text-start w-[312px]"
        style={{
          fontFamily: "Open Sans",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "20px",
          color: "#94A4B1",
          letterSpacing: "-0.01em",
          wordSpacing: "normal",
          wordBreak: "break-word",
          whiteSpace: "normal",
          zIndex: 2,
          minHeight: "20px",
          overflow: "visible",
          display: "block",
          WebkitAppearance: "none",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          textOverflow: "unset",
          overflowWrap: "break-word",
          hyphens: "auto",
          WebkitHyphens: "auto",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          willChange: "transform",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitTouchCallout: "none",
          WebkitUserSelect: "text",
          userSelect: "text",
        }}
      >
        <SinglePhraseBackgroundRenderer
          text={title}
          targetPhrase={TARGET_PHRASE}
          config={wordBackgroundConfig}
          fontSize={14}
          className="single-phrase-masking"
        />
      </motion.p>
    </div>
  );
};
