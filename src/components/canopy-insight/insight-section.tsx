"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useSimpleMotion, SIMPLE_ANIMATIONS } from "@/src/hooks/responsive/use-simple-motion";

interface InsightSectionProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  showDecorators?: boolean;
  isEmbedded?: boolean; // For when section is embedded in banner
}

export function InsightSection({
  title,
  description,
  images,
  showDecorators = true,
  isEmbedded = false,
}: InsightSectionProps) {
  // Simple Motion animations
  const containerMotion = useSimpleMotion(`insight-section-${title.slice(0, 10)}`);
  const titleMotion = useSimpleMotion(`insight-title-${title.slice(0, 10)}`);
  const descriptionMotion = useSimpleMotion(`insight-description-${title.slice(0, 10)}`);
  const imagesMotion = useSimpleMotion(`insight-images-${title.slice(0, 10)}`);
  
  const sectionContent = (
    <motion.div
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...containerMotion}
      className="w-full flex flex-col"
      style={{ backgroundColor: "#FCFCFC" }}
    >
      {/* Content Container using flexbox */}
      <div
        className="flex flex-col pt-[22px] pb-6"
        style={{
          paddingInline: isEmbedded ? "0px" : "20px",
        }}
      >
        {/* Title */}
        <motion.div
          {...SIMPLE_ANIMATIONS.fadeInLeft}
          {...titleMotion}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full mb-3 text-left"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "19px",
            lineHeight: "1.368421052631579em",
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
          className="w-full mb-8 text-left"
          style={{
            fontFamily: "Open Sans",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "1.3846153846153846em",
            letterSpacing: "-2%",
            color: "rgba(108, 113, 115, 0.8)",
          }}
        >
          {description}
        </motion.div>

        {/* Book Images Container */}
        <motion.div
          {...SIMPLE_ANIMATIONS.slideInUp}
          {...imagesMotion}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-full flex flex-col gap-4"
        >
          {/* Overlapping Images Group - Respects section max-width */}
          <div
            className="relative w-full h-[159.43px] mx-auto overflow-hidden"
            style={{
              boxShadow: "0px 5px 10px 0px rgba(1, 27, 13, 0.3)",
            }}
          >
            {images.map((image, index) => {
              const maxContainerWidth = 332;
              const imageWidth = 114;
              const totalImages = images.length;
              const availableOverlapSpace = maxContainerWidth - imageWidth;
              const spacing = Math.min(
                57,
                availableOverlapSpace / (totalImages - 1)
              );

              return (
                <div
                  key={index}
                  className="absolute top-0 w-[114px] h-[159.43px]"
                  style={{
                    left: `${index * spacing}px`,
                    zIndex: 10 + (totalImages - index) * 10,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={114}
                    height={159}
                    className="object-cover w-full h-full"
                    style={{
                      boxShadow: "0px 4px 16px 0px rgba(1, 27, 13, 0.3)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Request Access Button */}
          <button
            className="w-full max-w-[332px] h-[32px] rounded-[2px] flex items-center justify-center transition-all duration-200 hover:bg-opacity-60 mx-auto"
            style={{ backgroundColor: "rgba(125, 143, 137, 0.4)" }}
          >
            <span
              style={{
                fontFamily: "Open Sans",
                fontWeight: 400,
                fontSize: "11px",
                lineHeight: "1.8181818181818181em",
                color: "#717B73",
              }}
            >
              Request Access
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Container with proper responsive behavior */}
      <div className="w-full px-2 flex justify-center">{sectionContent}</div>

      {/* Double Line Decorators - Center */}
      {showDecorators && (
        <div className="flex justify-center mt-8 mb-8">
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
