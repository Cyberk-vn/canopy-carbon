"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "@/src/components/shared/container";

// Image imports
import OurPurposeMainImage from "../../../public/assets/about-us/our-purpose-main-image.png";
import AppIcon from "../../../public/assets/about-us/app-icon.png";

export const OurPurposeSection = () => {
  // Simple Motion animations
  const containerMotion = useSimpleMotion("purpose-container");
  const imageMotion = useSimpleMotion("purpose-image");
  const contentMotion = useSimpleMotion("purpose-content");
  const desktopContentMotion = useSimpleMotion("purpose-desktop-content");

  return (
    <motion.div
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...containerMotion}
      className="relative w-full px-0"
    >
      {/* Main Container - Mobile First */}
      <div className="relative w-full md:max-w-none">
        <div className="grid grid-cols-[35%_65%] w-full h-[377px] md:hidden -mt-[49px] relative z-20 gap-[27px]">
          {/* Left Side with Card Effect - Mobile */}
          <div className="relative flex items-start justify-center overflow-visible">
            {/* Background Overlap - Mobile */}
            <div
              className="absolute z-10"
              style={{
                left: "0",
                top: "0",
                width: "104px",
                height: "380px",
                backgroundColor: "#1D1F1F",
              }}
            />

            {/* Decorative Image - Card Effect */}
            <motion.div
              {...SIMPLE_ANIMATIONS.scaleIn}
              {...imageMotion}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="card-effect purpose-card relative z-20"
              style={{
                width: "118px",
                height: "331px",
                marginLeft: "21px",
                marginTop: "30px",
              }}
            >
              <Image
                src={OurPurposeMainImage}
                alt="Our Purpose"
                fill
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 768px) 118px, 150px"
              />
            </motion.div>
          </div>

          {/* Right Side Content - Mobile */}
          <motion.div
            {...SIMPLE_ANIMATIONS.fadeInRight}
            {...contentMotion}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-end items-center h-full max-w-[200px] w-[200px] -mt-[19px]"
          >
            {/* Title Section */}
            <div className="flex flex-col gap-[14px] mb-8">
              {/* Main Purpose Text - Figma styling */}
              <p
                className=" text-[#95A4B0]"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  letterSpacing: "-3%",
                }}
              >
                Canopy Carbon was founded to address this structural supply
                shortfall - by delivering nature-based projects with
                uncompromising execution and long-term credibility.
              </p>

              {/* Our Purpose Label - Figma styling */}
              <p
                className=""
                style={{
                  fontSize: "10px",
                  fontWeight: 300,
                  lineHeight: "18px",
                  color: "rgba(139, 147, 140, 0.8)",
                }}
              >
                -Our Purpose
              </p>
            </div>

            {/* App Icon - Centered below text */}
            <div className="flex justify-end">
              <div className="w-[250px] h-[77px] relative opacity-45">
                <Image
                  src={AppIcon}
                  alt="Canopy Carbon App Icon"
                  fill
                  className="object-contain"
                  loading="lazy"
                  placeholder="blur"
                  sizes="250px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout - 768px-1024px → 1024px-2200px responsive */}
        <div className="hidden md:flex flex-col w-full bg-[#FCFCFC] pb-[62px]">
          <div className="flex flex-col w-full max-w-[2200px] mx-auto">
            {/* Content Container */}
            <motion.div
              {...SIMPLE_ANIMATIONS.fadeInRight}
              {...desktopContentMotion}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col md:max-w-[694px] lg:max-w-[754px] 3xl:max-w-[987px]"
              style={{
                marginLeft:
                  "clamp(31.5px, calc(-184.48px + 28.12vw), 118.98px)",
                marginRight:
                  "clamp(31.5px, calc(-184.48px + 28.12vw), 118.98px)",
                marginTop: "clamp(70px, calc(-121.41px + 24.95vw), 118.96px)",
                gap: "clamp(22px, calc(90.25px - 8.91vw), 40px)",
              }}
            >
              {/* Main Purpose Text - 768px: OS 20px → 1440px: OS 24px → 1920px: WS 32px */}
              <p
                className="md:font-open-sans xl:font-work-sans text-[#95A4B0]"
                style={{
                  fontSize:
                    "clamp(20px, calc(20px + 4 * min(672px, max(0px, 100vw - 768px)) / 672 + 8 * max(0px, 100vw - 1440px) / 480), 32px)",
                  fontWeight: 600,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                }}
              >
                Canopy Carbon was founded to address this structural supply
                shortfall -{" "}
                <span className="text-[#C4CCD3]">
                  by delivering nature-based projects with uncompromising
                  execution and long-term credibility.
                </span>
              </p>

              {/* Our Purpose Label */}
              <p
                className="font-open-sans text-[rgba(139,147,140,0.8)] h-[18px] font-normal lg:font-light"
                style={{
                  fontSize: "clamp(12px, calc(28.13px - 2.11vw), 16px)",
                  lineHeight: "clamp(2em, calc(0.91em + 0.14vw), 1.5em)",
                }}
              >
                - Our Purpose
              </p>
            </motion.div>

            {/* Bottom Decorative Line */}
            <div
              className="border-b-2 border-[#E5E5E5] md:mt-[67px] lg:mt-[18px] md:max-w-[694px] lg:max-w-[827px] 3xl:max-w-[1127px]"
              style={{
                marginLeft:
                  "clamp(31.5px, calc(-184.48px + 28.12vw), 118.98px)",
                marginRight:
                  "clamp(31.5px, calc(-184.48px + 28.12vw), 118.98px)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Card Effect Styles - Updated with #1D1F1F color */}
      <style jsx>{`
        .card-effect {
          background: #1d1f1f;
          box-shadow: -25px 0px 0 0px #1d1f1f, -25px 20px 0 0px #1d1f1f;
          transition: transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }

        .card-effect:hover {
          transform: translate(8px, -8px);
          box-shadow: -35px 0px 0 0px #1d1f1f, -35px 30px 0 0px #1d1f1f;
        }

        .purpose-card {
          position: relative;
        }

        .purpose-card:hover {
          animation: glitch 0.3s infinite;
        }

        @keyframes glitch {
          0% {
            transform: translate(2px, 2px) translate(5px, -5px);
          }
          25% {
            transform: translate(-2px, -2px) translate(5px, -5px);
          }
          50% {
            transform: translate(-2px, 2px) translate(5px, -5px);
          }
          75% {
            transform: translate(2px, -2px) translate(5px, -5px);
          }
          100% {
            transform: translate(2px, 2px) translate(5px, -5px);
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .card-effect {
            background: rgba(29, 31, 31, 0.4);
            box-shadow: none;
          }

          .card-effect:hover {
            transform: translate(3px, -3px);
            box-shadow: none;
          }
        }

        /* Large screen adjustments */
        @media (min-width: 1024px) {
          .purpose-card {
            width: 150px !important;
            height: 420px !important;
            left: 27px !important;
            top: 40px !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default OurPurposeSection;
