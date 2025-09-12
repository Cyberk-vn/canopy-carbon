"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "@/src/components/shared";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";

// Image imports
import MapDesktop from "../../../public/assets/desktop/home/map-desktop.svg";
import DecoratorIcon from "../../../public/assets/desktop/home/decorator-icon.png";
import MapImageMobile from "../../../public/assets/map-image.svg";

const MapSection = () => {
  // Contact redirect hook
  const { redirectToContact } = useContactRedirect();

  // Motion animation hooks
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
      <div className="hidden lg:block w-full">
        <Container
          maxWidth="default"
          className="pl-[40px] xl:pl-[50px] xxl:pl-[68px] xxl:overflow-x-hidden"
        >
          <div
            className="grid w-full overflow-hidden grid-cols-[700px_1fr] xl:grid-cols-[850px_1fr] xxl:grid-cols-[994px_1fr]"
            style={{
              gridTemplateRows: "90px auto 48px auto 1fr",
              minHeight: "816px",
            }}
          >
            {/* Map Image */}
            <motion.div
              className="z-10"
              style={{
                gridColumn: "1",
                gridRow: "2",
              }}
              {...SIMPLE_ANIMATIONS.scaleIn}
              {...mapImageMotion}
            >
              <div className="w-full max-w-[680px] xl:max-w-[820px] xxl:max-w-[972px]">
                <Image
                  src={MapDesktop}
                  alt="Map showing Canopy Carbon's current operational focus in Indonesia with strategic locations highlighted for carbon project development"
                  width={972}
                  height={495}
                  className="w-full h-auto object-contain lg:bg-white"
                  priority
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              className="z-10 flex flex-row items-start justify-start w-full"
              style={{
                gridColumn: "1",
                gridRow: "4",
              }}
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...titleMotion}
            >
              {/* Title Text with Hidden to Show Animation */}
              <motion.div
                className="flex-1 max-w-[520px] xl:max-w-[580px] xxl:max-w-[664px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <h2
                  className="font-open-sans font-bold text-[#9CA3AF] text-[16px] xl:text-[18px] xxl:text-[20px] text-start"
                  style={{
                    lineHeight: "clamp(1.4em, 1.45em, 1.5em)",
                    fontFamily: "Open Sans",
                  }}
                >
                  Our current efforts are centered in Indonesia, prioritising
                  tight oversight, execution quality, and the development of
                  robust operational foundations for scale.
                </h2>
              </motion.div>

              {/* Read More Component */}
              <motion.div
                onClick={redirectToContact}
                className="flex items-end justify-end gap-[6px] ml-4 h-full cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  x: 5,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1, ease: "easeIn" },
                }}
              >
                {/* Arrow Icon */}
                <motion.div
                  className="w-5 h-5 flex items-center justify-center"
                  whileHover={{
                    x: 3,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  <motion.svg
                    width="5"
                    height="10"
                    viewBox="0 0 5 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <motion.path
                      d="M0.5 0.5L4 5L0.5 9.5"
                      stroke="#9DAE83"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      whileHover={{
                        stroke: "#7D9563",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    />
                  </motion.svg>
                </motion.div>
                <motion.span
                  className="text-[14px] xl:text-[15px] xxl:text-[16px] font-normal text-[#2A2E35]"
                  style={{
                    fontFamily: "Open Sans",
                    lineHeight: "1.5em",
                  }}
                  whileHover={{
                    color: "#1A1E25",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{
                    color: "#0A0E15",
                    transition: { duration: 0.1, ease: "easeIn" },
                  }}
                >
                  Read More
                </motion.span>
              </motion.div>
            </motion.div>
            {/* Decorator Icon */}
            <motion.div
              className="z-10 flex items-start justify-start xl:justify-center xxl:justify-start"
              style={{
                gridColumn: "2",
                gridRow: "1 / 5",
              }}
              {...SIMPLE_ANIMATIONS.fadeInRight}
              {...rightSectionMotion}
            >
              <div className="w-full max-w-[280px] xl:max-w-[380px] xxl:w-[340px] xxl:h-[425px] xxl:overflow-hidden flex items-center justify-start">
                <Image
                  src={DecoratorIcon}
                  alt="Decorative icon representing our global carbon initiatives"
                  width={425}
                  height={425}
                  className="w-full h-full max-w-[280px] xl:max-w-[380px] xxl:w-[425px] xxl:h-[425px] object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </Container>
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
                src={MapImageMobile}
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
                className="text-[9px] xxs:text-[10px] xs:text-[11px] font-open-sans leading-[18px] text-start text-[#3B464F] tracking-[-0.02em] mb-[12px]"
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
                className="text-[14px] xxs:text-[15px] xs:text-[16px] font-light leading-[20px] text-start text-[#3B464F] tracking-[-0.02em]"
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
