"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";
import { useInsightCardPositions } from "@/src/hooks/responsive/use-insight-card-positions";

interface InsightSectionProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  showDecorators?: boolean;
}

export function InsightSection({
  title,
  description,
  images,
  showDecorators = true,
}: InsightSectionProps) {
  // Contact redirect hook
  const { redirectToContact } = useContactRedirect();

  // Card positions hook for responsive stacking
  const { dimensions, getCardPositions } = useInsightCardPositions();
  const cardPositions = getCardPositions();

  // Simple Motion animations
  const containerMotion = useSimpleMotion(
    `insight-section-${title.slice(0, 10)}`
  );
  const titleMotion = useSimpleMotion(`insight-title-${title.slice(0, 10)}`);
  const descriptionMotion = useSimpleMotion(
    `insight-description-${title.slice(0, 10)}`
  );
  const imagesMotion = useSimpleMotion(`insight-images-${title.slice(0, 10)}`);

  const sectionContent = (
    <motion.div
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...containerMotion}
      className="w-full flex flex-col"
      style={{ backgroundColor: "#FCFCFC" }}
    >
      {/* Content Container using flexbox */}
      <div className="flex flex-col pt-[22px] pb-9">
        {/* Title */}
        <motion.div
          {...SIMPLE_ANIMATIONS.fadeInLeft}
          {...titleMotion}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full mb-3 text-left px-5 text-[19px] xxs:text-[20px]"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "26px",
            color: "#6A7D8E",
          }}
        >
          {title}
        </motion.div>

        {/* Description */}
        <motion.div
          {...SIMPLE_ANIMATIONS.fadeInLeft}
          {...descriptionMotion}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="w-full mb-[23px] text-left px-5 text-[13px]"
          style={{
            fontFamily: "Open Sans",
            fontWeight: 400,
            lineHeight: "18px",
            letterSpacing: "-0.02px",
            color: "#6C7173CC",
          }}
        >
          {description}
        </motion.div>

        {/* Mobile Card Image Container - Stacked Images */}
        <motion.div
          {...SIMPLE_ANIMATIONS.slideInUp}
          {...imagesMotion}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-full flex flex-col gap-4 px-[15px]"
        >
          <div
            className="relative w-full"
            style={{ height: `${dimensions.containerHeight}px` }}
          >
            {/* Stack 5 images from left to right with dynamic overlap */}
            {images.slice(0, 5).map((image, index) => {
              const isFirst = index === 0;
              const zIndex = 50 - index * 10; // First image has highest z-index
              const position = cardPositions[index] || cardPositions[0];

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${position.left}px`,
                    top: `${position.top}px`,
                    width: `${dimensions.cardWidth}px`,
                    zIndex,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={dimensions.cardWidth}
                    height={dimensions.cardHeight}
                    quality={isFirst ? 90 : 50}
                    className="w-full h-auto"
                    style={{
                      boxShadow: "0px 12px 12px 0px #011B0D4D",
                      filter: isFirst ? "none" : "blur(.3px)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Request Access Button */}
          <motion.button
            onClick={redirectToContact}
            className="w-full h-[32px] rounded-[2px] flex items-center justify-center mx-auto"
            style={{ backgroundColor: "rgba(125, 143, 137, 0.4)" }}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(125, 143, 137, 0.6)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.98,
              backgroundColor: "rgba(125, 143, 137, 0.8)",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.span
              style={{
                fontFamily: "Open Sans",
                fontWeight: 400,
                fontSize: "11px",
                lineHeight: "1.8181818181818181em",
                color: "#717B73",
              }}
              whileHover={{
                color: "#5A6B5F",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{
                color: "#4A5A4F",
                transition: { duration: 0.1, ease: "easeIn" },
              }}
            >
              Request Access
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Container with proper responsive behavior */}
      <div className="w-full px-[9px] flex justify-center">
        {sectionContent}
      </div>

      {/* Double Line Decorators - Center */}
      {showDecorators && (
        <div className="flex justify-center mt-[9px] mb-[9px]">
          <div className="relative w-[111.93px] h-[4px]">
            <div
              className="absolute top-0 left-0 w-full h-0"
              style={{
                borderTop: "1px solid rgba(172, 184, 194, 0.1)",
              }}
            />
            <div
              className="absolute top-[4px] left-0 w-full h-0"
              style={{
                borderTop: "1px solid rgba(172, 184, 194, 0.1)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default InsightSection;
