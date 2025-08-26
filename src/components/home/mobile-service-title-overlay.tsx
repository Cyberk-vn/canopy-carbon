"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { WordBackgroundRenderer } from "./word-background-renderer";
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

  // Word-level background configuration
  const wordBackgroundConfig: WordBackgroundConfig = {
    backgroundColor: getOverlayBackgroundColor(),
    wordPadding: "0 1px", // Minimal padding around each word
    wordSpacing: "0.25em", // Space between words for decorator visibility
    preserveLineBreaks: true,
  };

  return (
    <div className={`relative w-full max-w-[334px] ${className}`}>
      {/* Layer 1: Full-Width Line+Plus Decorator (Behind) */}
      <motion.div
        {...SIMPLE_ANIMATIONS.fadeInRight}
        {...decoratorMotion}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute flex items-center w-full"
        style={{
          top: "66px",
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
        className="mobile-service-title-text relative max-w-[334px]"
        style={{
          // Design specifications from Figma
          fontFamily: "Open Sans",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "20px",
          color: "#94A4B1",
          letterSpacing: "normal",
          textAlign: "left",
          zIndex: 2,

          width: "312px",
          maxHeight: "80px",
          overflow: "hidden",

          // CSS line-clamp for 4 lines
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",

          // Fallback for browsers without line-clamp
          wordWrap: "break-word",
          hyphens: "auto",
        }}
      >
        <WordBackgroundRenderer
          text={title}
          config={wordBackgroundConfig}
          fontSize={14}
          className="word-level-masking"
        />
      </motion.p>
    </div>
  );
};
