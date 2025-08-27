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
  const calculateDecoratorPosition = () => {
    const lineHeight = 20; // px
    const estimatedLines = Math.ceil(title.length / 25);
    const actualLines = Math.max(1, Math.min(estimatedLines, 6));

    const textHeight = actualLines * lineHeight;
    const decoratorPosition = Math.round(textHeight * 0.75) - 24;

    return `${Math.max(0, decoratorPosition)}px`;
  };

  const wordBackgroundConfig: WordBackgroundConfig = {
    backgroundColor: getOverlayBackgroundColor(),
    wordPadding: "0 1px",
    wordSpacing: "0.25em",
    preserveLineBreaks: true,
  };

  return (
    <div className={`relative w-full max-w-[334px] ${className}`}>
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
        className="mobile-service-title-text relative max-w-[334px] safari-hw-accel"
        style={{
          fontFamily: "Open Sans",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "20px",
          color: "#94A4B1",
          letterSpacing: "normal",
          textAlign: "left",
          zIndex: 2,
          width: "312px",
          minHeight: "20px",
          overflow: "visible",
          display: "block",
          WebkitAppearance: "none",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          textOverflow: "unset",
          wordWrap: "break-word",
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
