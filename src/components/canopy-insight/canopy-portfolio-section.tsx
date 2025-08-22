"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useSimpleMotion, SIMPLE_ANIMATIONS } from "@/src/hooks/responsive/use-simple-motion";

export function CanopyPortfolioSection() {
  // Simple Motion animations
  const containerMotion = useSimpleMotion('canopy-portfolio-container');
  const titleMotion = useSimpleMotion('canopy-portfolio-title');
  const subtitleMotion = useSimpleMotion('canopy-portfolio-subtitle');
  
  return (
    <motion.div
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...containerMotion}
      className="relative w-full h-[400px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/canopy-insight/built-on-research-section-bg-image.png"
          alt="Canopy Portfolio Background"
          fill
          className="object-cover"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Background Color Overlay - Gradient */}
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 43%, rgba(255, 255, 255, 0.3) 53%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 h-full px-6 py-16 md:px-[120px] flex flex-col items-center">
        <div
          className="flex flex-col gap-3 max-w-[342px] text-center"
          style={{
            left: "24px",
            top: "66px",
          }}
        >
          {/* Main Title */}
          <motion.h2
            {...SIMPLE_ANIMATIONS.fadeInUp}
            {...titleMotion}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="font-open-sans font-semibold text-[#1E2E26]"
            style={{
              fontSize: "20px",
              lineHeight: "1.5em",
              textAlign: "center",
            }}
          >
            Built on research. Disciplined in thought. Precise in execution.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            {...SIMPLE_ANIMATIONS.fadeInUp}
            {...subtitleMotion}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="font-open-sans font-normal text-[#37423B]"
            style={{
              fontSize: "13px",
              lineHeight: "1.5384615384615385em",
              textAlign: "center",
            }}
          >
            Contribute to our next thought piece
          </motion.p>

          {/* Call to Action */}
          <div
            className="font-open-sans font-normal text-[#7D8F89] cursor-pointer hover:text-[#5A6B63] transition-colors duration-200"
            style={{
              fontSize: "11px",
              lineHeight: "1.6363636363636365em",
              textAlign: "center",
            }}
          >
            Collaborate →
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CanopyPortfolioSection;
