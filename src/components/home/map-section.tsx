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
      <div className="hidden xl:block w-full mt-[221px]">
        <Container
          maxWidth="full"
          className="map-section-container overflow-hidden"
        >
          <div className="max-w-[1920px] mx-auto flex w-full overflow-hidden">
            {/* Content Section (69%) - Map + Title */}
            <div
              className="flex flex-col 3xl:mt-[260px] xl:mt-[145px]"
              style={{
                width: "68%",
                gap: "12px",
              }}
            >
              {/* Map Image */}
              <motion.div
                className="z-10 flex items-end justify-end w-full"
                {...SIMPLE_ANIMATIONS.scaleIn}
                {...mapImageMotion}
              >
                <div className="w-full max-w-none">
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
                className="z-10 flex flex-row items-start justify-start w-full max-w-[900px] 3xl:max-w-[1129px]"
                {...SIMPLE_ANIMATIONS.fadeInUp}
                {...titleMotion}
              >
                {/* Title Text with Hidden to Show Animation */}
                <motion.div
                  className="flex-1 max-w-none pr-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <h2 className="font-avenir-heavy font-normal text-[#A1AEB9] text-[16px] xl:text-[18px] xxl:text-[20px] 2xl:text-[22px] 3xl:text-[33px] text-start">
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
                  <motion.div
                    className="w-6 h-6 flex items-center justify-center"
                    whileHover={{
                      x: 3,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <Image
                      src="/assets/icon/arrow-right.png"
                      alt="Arrow icon"
                      width={30}
                      height={30}
                      className="w-8 h-8 object-contain"
                    />
                  </motion.div>
                  <motion.span
                    className="text-[13px] font-normal text-[#282626] font-open-sans leading-normal"
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
            </div>

            {/* Decorator Icon Sidebar (31%) */}
            <motion.div
              className="z-10 flex items-start justify-start overflow-hidden"
              style={{
                width: "32%",
              }}
              {...SIMPLE_ANIMATIONS.fadeInRight}
              {...rightSectionMotion}
            >
              <div
                className="flex items-center justify-start overflow-hidden w-full"
                style={{
                  height: "calc(600 * var(--decorator-scale, 1))",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "calc(600 * var(--decorator-scale, 1))",
                    height: "calc(600 * var(--decorator-scale, 1))",
                  }}
                >
                  <Image
                    src={DecoratorIcon}
                    alt="Decorative icon representing our global carbon initiatives"
                    width={744}
                    height={744}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block xl:hidden w-full">
        <Container maxWidth="full" padding="none">
          <div
            className="mx-auto px-6 py-8"
            style={{
              maxWidth: "clamp(768px, 90vw, 1280px)",
            }}
          >
            {/* Map Image */}
            <motion.div
              className="w-full flex justify-center"
              style={{
                marginBottom: "clamp(24px, 3vw, 40px)",
              }}
              {...SIMPLE_ANIMATIONS.scaleIn}
              {...mapImageMotion}
            >
              <div
                className="max-w-full"
                style={{
                  aspectRatio: "972/495",
                }}
              >
                <Image
                  src={MapDesktop}
                  alt="Map showing Canopy Carbon's current operational focus in Indonesia with strategic locations highlighted for carbon project development"
                  width={972}
                  height={495}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Title Text */}
            <motion.div
              className="flex justify-start"
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...titleMotion}
            >
              <motion.h2
                className=" font-bold text-[#9CA3AF] text-start"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 700,
                  fontSize: "clamp(16px, 2vw, 20px)",
                  lineHeight: "1.875em",
                  maxWidth: "clamp(500px, 70vw, 800px)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                Our current efforts are centered in Indonesia, prioritising
                tight oversight, execution quality, and the development of
                robust operational foundations for scale.
              </motion.h2>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
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
                className="text-[9px] xxs:text-[10px] xs:text-[11px]  leading-[18px] text-start text-[#3B464F] tracking-[-0.02em] mb-[12px]"
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

        /* Fluid padding-left for map section container */
        /* Smoothly scales from 68px at 1280px to 130px at 1440px to 300px at 1920px */
        :global(.map-section-container) {
          padding-left: clamp(
            68px,
            calc(
              68px + (130 - 68) * ((100vw - 1280px) / (1440 - 1280)) +
                max(0px, (300 - 130) * ((100vw - 1440px) / (1920 - 1440)))
            ),
            300px
          );
        }

        /* Fallback for browsers that don't support clamp() */
        @supports not (padding-left: clamp(68px, 100px, 300px)) {
          :global(.map-section-container) {
            padding-left: 68px;
          }
          @media (min-width: 1440px) {
            :global(.map-section-container) {
              padding-left: 130px;
            }
          }
          @media (min-width: 1920px) {
            :global(.map-section-container) {
              padding-left: 300px;
            }
          }
        }

        /* Grid row and decorator icon scaling for different viewports */
        /* Decorator icon scales up to 600x600px max at 1920px (3xl) and stays fixed beyond that */
        :global(.xxl\\:block) {
          --decorator-scale: 1;
          --grid-row-2: 1418px; /* Base size at 1440px (945px * 1.5) */
        }

        @media (min-width: 1600px) {
          :global(.xxl\\:block) {
            --decorator-scale: 1.11; /* 1600/1440 */
            --grid-row-2: 1575px; /* 1050px * 1.5 */
          }
        }

        @media (min-width: 1920px) {
          :global(.xxl\\:block) {
            --decorator-scale: 1; /* Capped at 1x to maintain 600x600px max size */
            --grid-row-2: 1886px; /* 1257px * 1.5 */
          }
        }

        /* Removed larger viewport scales to maintain 600x600px max size */
        @media (min-width: 2560px) {
          :global(.xxl\\:block) {
            --decorator-scale: 1; /* Keep 600x600px */
            --grid-row-2: 2523px;
          }
        }

        @media (min-width: 3440px) {
          :global(.xxl\\:block) {
            --decorator-scale: 1; /* Keep 600x600px */
            --grid-row-2: 3389px;
          }
        }
      `}</style>
    </section>
  );
};

export default MapSection;
