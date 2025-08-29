"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

const MapSection = () => {
  // Motion animation hooks
  const leftSectionMotion = useSimpleMotion("map-left-section");
  const rightSectionMotion = useSimpleMotion("map-right-section");
  const mapImageMotion = useSimpleMotion("map-image");
  const titleMotion = useSimpleMotion("map-title");

  return (
    <section
      className="relative overflow-hidden w-full focus:outline-none"
      tabIndex={0}
      role="region"
      aria-label="Our Operations Map"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block w-full px-6">
        <div className="flex flex-row gap-8 h-[900px]">
          {/* Left Side (60%) - Map and Title */}
          <motion.div
            className="flex-[3] max-w-[70%] flex items-end justify-start"
            {...SIMPLE_ANIMATIONS.fadeInLeft}
            {...leftSectionMotion}
          >
            {/* Left subsection - 15% */}
            <div className="w-[15%]"></div>

            {/* Right subsection - 85% */}
            <div className="w-[85%]">
              {/* Map Image */}
              <motion.div
                className="w-full mb-5"
                {...SIMPLE_ANIMATIONS.scaleIn}
                {...mapImageMotion}
              >
                <Image
                  src="/assets/map-image.png"
                  alt="Map showing Canopy Carbon's current operational focus in Indonesia with strategic locations highlighted for carbon project development"
                  width={1198}
                  height={623}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>

              {/* Title below map with 20px top spacing */}
              <motion.div
                className="flex flex-row items-center gap-8"
                style={{ marginTop: "20px" }}
                {...SIMPLE_ANIMATIONS.fadeInUp}
                {...titleMotion}
              >
                {/* Title Text with Hidden to Show Animation */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <h2
                    className="font-open-sans font-semibold text-[#94A4B1] text-[32px] text-start max-w-[1000px]"
                    style={{
                      lineHeight: "1.4285714285714286em",
                      fontFamily: "Open Sans",
                    }}
                  >
                    Our current efforts are centered in Indonesia, prioritising
                    tight oversight, execution quality, and the development of
                    robust operational foundations for scale.
                  </h2>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side (40%) - Decorator Icon */}
          <motion.div
            className="flex-[2] max-w-[30%] flex items-end justify-start"
            {...SIMPLE_ANIMATIONS.fadeInRight}
            {...rightSectionMotion}
          >
            <div className="w-full h-full flex items-start justify-end">
              <Image
                src="/assets/desktop/home/decorator-icon.png"
                alt="Decorative icon representing our global carbon initiatives"
                width={600}
                height={600}
                className="w-full h-auto max-w-[600px] object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile: Horizontal scrollable image */}
        <div className="w-full">
          <div
            className="overflow-x-scroll overflow-y-hidden scrollbar-hide mb-6"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              className="w-[736px] h-[383px]"
              style={{
                minWidth: "736px",
                width: "736px",
              }}
            >
              <Image
                src="/assets/map-image.svg"
                alt="Map showing Canopy Carbon's current operational focus in Indonesia with strategic locations highlighted for carbon project development"
                width={736}
                height={383}
                className="w-[736px] h-[383px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Mobile Title Text with Hidden to Show Animation */}
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h3
                className="text-[9px] font-open-sans leading-[18px] text-start text-[#3B464F] tracking-[-0.02em] mb-[12px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                Scroll right to see more of our presence.
              </motion.h3>
              <motion.h2
                className="text-[14px] font-light leading-[20px] text-start text-[#3B464F] tracking-[-0.02em]"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  letterSpacing: "-2%",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Our current efforts are centered in Indonesia, prioritising
                tight oversight, execution quality, and the development of
                robust operational foundations for scale.
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          /* Enhanced mobile touch scrolling */
          -webkit-overflow-scrolling: touch;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Ensure smooth touch scrolling on iOS and Android */
        @supports (-webkit-touch-callout: none) {
          .scrollbar-hide {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};

export default MapSection;
