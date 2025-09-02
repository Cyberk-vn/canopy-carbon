"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "@/src/components/shared/container";

export const OurPurposeSection = () => {
  // Simple Motion animations
  const containerMotion = useSimpleMotion("purpose-container");
  const imageMotion = useSimpleMotion("purpose-image");
  const contentMotion = useSimpleMotion("purpose-content");
  const desktopImageMotion = useSimpleMotion("purpose-desktop-image");
  const desktopContentMotion = useSimpleMotion("purpose-desktop-content");

  return (
    <motion.div
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...containerMotion}
      className="relative w-full px-0 md:px-[118px]"
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
                src="/assets/about-us/our-purpose-main-image.png"
                alt="Our Purpose"
                fill
                className="object-cover"
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
                className="font-open-sans text-[#95A4B0]"
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
                className="font-open-sans"
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
                  src="/assets/about-us/app-icon.png"
                  alt="Canopy Carbon App Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout*/}
        <Container className="hidden md:block">
          <div
            className="flex gap-8 lg:gap-12 mb-[35px]"
            style={{
              marginTop: "79px",
              height: "160px",
              width: "714px",
            }}
          >
            <motion.div
              {...SIMPLE_ANIMATIONS.fadeInRight}
              {...desktopContentMotion}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex-1 flex flex-col justify-center max-w-[714px]"
            >
              {/* Title Section */}
              <div className="flex flex-col gap-[40px] max-w-[714px]">
                {/* Main Purpose Text */}
                <p
                  className="font-open-sans text-[#95A4B0]"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "1.4em",
                  }}
                >
                  Canopy Carbon was founded to address this structural supply
                  shortfall - by delivering nature-based projects with
                  uncompromising execution and long-term credibility.
                </p>

                {/* Our Purpose Label */}
                <p
                  className="font-open-sans text-[rgba(139,147,140,0.8)]"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "1.5em",
                    height: "18px",
                  }}
                >
                  - Our Purpose
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
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
