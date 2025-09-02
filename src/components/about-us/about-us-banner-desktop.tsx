"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { AboutUsBannerProps } from "@/src/types/banner";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "../shared";

export function AboutUsBannerDesktop({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: AboutUsBannerProps) {
  // Simple Motion animations with persistence
  const decorativeImageMotion = useSimpleMotion(
    "about-desktop-decorative-image"
  );
  const missionVisionMotion = useSimpleMotion("about-desktop-mission-vision");
  const thesisMotion = useSimpleMotion("about-desktop-thesis");
  const statisticsMotion = useSimpleMotion("about-desktop-statistics");

  // Statistics data for desktop
  const statisticsData = [
    {
      id: 1,
      number: "> 70%",
      title: "Global Carbon Budget Utilised",
      description:
        "Over 70% of our global CO₂ budget has already been used as of 2024 — around 2.65 trillion tonnes out of the 3.67 trillion tCO₂e budget believed to limit warming to safer thresholds.",
    },
    {
      id: 2,
      number: "42%",
      title: "Emissions Rate Reduction Needed",
      description:
        "To achieve 1.5°C targets, the IPCC recommends that global GHG emissions must fall by at least 42% from 2019 levels by 2030. Instead, global annual emissions were ~3.6% higher in 2024.",
    },
    {
      id: 3,
      number: "5-10x",
      title: "Scale Up in Human-Led Removals",
      description:
        "Anthropogenic CO₂ removals amount to ~ 2 GtCO₂ per year today. A multifold scale-up is needed this century to meet climate targets and balance residual emissions.",
    },
    {
      id: 4,
      number: "2042-45",
      title: "Complete Budget Depletion",
      description:
        "At current rates, the global CO₂ budget could be fully depleted by 2042, unless urgent action is taken to scale removals and cut emissions dramatically.",
    },
  ];
  return (
    <Container maxWidth="default" className="max-w-[1440px]">
      <div className="relative w-[1440px]">
        {/* Main Banner Section */}
        <div className="relative min-h-[840px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/desktop/about-us/contact-us-banner-bg-image.svg"
              alt="About Us Banner Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.2) 28.85%, rgba(0, 0, 0, 0.37) 53.37%, #000000 100%)",
            }}
          />

          {/* Unified Grid Layout - Navigation + Content */}
          <div
            className="relative z-20"
            style={{
              display: "grid",
              gridTemplateColumns: "120px 340px 151px 714px 1fr",
              gridTemplateRows: "auto 50px auto",
              minHeight: "100%",
            }}
          >
            {/* Navigation Menu - Grid Row 1, spans all columns */}
            <div
              style={{
                gridColumn: "1 / -1",
                gridRow: "1",
              }}
            >
              <NavigationMenu
                menuItems={menuItems}
                logoUrl={logoUrl}
                mobileMenuIconColor="#8C8C8C"
                mobileMenuStyles={mobileMenuStyles}
                activeItem="About Us"
              />
            </div>

            {/* Spacing row */}
            <div style={{ gridColumn: "1 / -1", gridRow: "2" }}></div>

            {/* Left padding */}
            <div style={{ gridColumn: "1", gridRow: "3" }}></div>
            {/* Decorative Image - Card Effect */}
            <motion.div
              {...SIMPLE_ANIMATIONS.scaleIn}
              {...decorativeImageMotion}
              className="ml-[76px]"
              style={{ gridColumn: "1/2", gridRow: "3" }}
            >
              <div className="relative w-[384px] h-[540px]">
                {/* Background decorator */}
                <div
                  className="absolute w-[340px] h-[500px] top-[40px] left-0"
                  style={{
                    background: "rgba(175, 175, 175, 0.3)",
                  }}
                />
                {/* Image */}
                <div className="absolute w-[340px] h-[500px] top-0 left-[44px] overflow-hidden">
                  <Image
                    src="/assets/about-us/banner-child-image.png"
                    alt="Decorative Banner Element"
                    width={340}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Mission and Vision Content */}
            <motion.div
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...missionVisionMotion}
              style={{
                gridColumn: "4",
                gridRow: "3",
                marginTop: "67px", // 117px total - 50px spacing row = 67px
              }}
            >
              <div className="flex flex-col gap-[40px] w-full">
                {/* Mission Section */}
                <div className="flex flex-col gap-[24px]">
                  <h2
                    className="font-open-sans font-bold text-white"
                    style={{
                      fontSize: "36px",
                      lineHeight: "44px",
                      fontWeight: 700,
                    }}
                  >
                    Mission
                  </h2>
                  <p
                    className="font-open-sans font-normal text-white"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                    }}
                  >
                    To expand the global supply of high-quality carbon offsets
                    through disciplined project execution and deep capital
                    market expertise, with technology as a supporting enabler.
                  </p>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col gap-[24px]">
                  <h2
                    className="font-open-sans font-bold text-white"
                    style={{
                      fontSize: "36px",
                      lineHeight: "44px",
                      fontWeight: 700,
                    }}
                  >
                    Vision
                  </h2>
                  <p
                    className="font-open-sans font-normal text-white"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                    }}
                  >
                    To become Southeast Asia&apos;s leading nature-based
                    solutions specialist, trusted globally for investing in,
                    developing, operating, and delivering premium carbon offsets
                    to both voluntary and compliance markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Secondary Banner Section with Smooth Transition */}
        <div className="relative h-[800px] w-full z-10 -mt-10">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/desktop/about-us/contact-us-banner-second-bg.svg"
              alt="Secondary Banner Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay Gradients - Top 200px height */}
          <div
            className="absolute top-0 left-0 right-0 z-20"
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, #000000 31.25%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          {/* Content */}
          <div
            className="relative z-30 h-[640px] flex justify-center mx-[67px] pt-[56px] pb-[116px]"
            style={{ background: "#0000004D" }}
          >
            <div className="w-[1217px] flex flex-col gap-[60px] pl-[49px] pr-[40px] pt-[43px] pb-[51px]">
              {/* Thesis Section */}
              <motion.div
                {...SIMPLE_ANIMATIONS.fadeInLeft}
                {...thesisMotion}
                className="flex items-center justify-center gap-[24px] w-[1200px] mx-auto"
              >
                {/* Decorative Line */}
                <div className="w-0 h-[180px] border-l-4 border-[#CFD5DB] flex-shrink-0" />

                <div className="flex flex-col gap-[20px] flex-1">
                  <p
                    className="font-open-sans font-bold text-[#DDE2E6]"
                    style={{
                      fontSize: "24px",
                      lineHeight: "33.6px",
                      fontWeight: 700,
                    }}
                  >
                    The urgency of climate change has outpaced the global
                    capacity to decarbonize. Without a dramatic scale-up in
                    high-quality carbon offsets, there is little chance of
                    meeting net-zero ambitions before breaching the carbon
                    budget.
                  </p>
                  <p
                    className="font-open-sans font-normal text-[#D8DBD6]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                    }}
                  >
                    - Our Thesis Statement
                  </p>
                </div>
              </motion.div>

              {/* Statistics Cards Grid */}
              <motion.div
                {...SIMPLE_ANIMATIONS.slideInUp}
                {...statisticsMotion}
                className="grid grid-cols-4 gap-[24px] w-full"
              >
                {statisticsData.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.5 + index * 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  >
                    <div className="flex flex-col items-center gap-[16px] w-full">
                      {/* Statistics Number */}
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "48px",
                          lineHeight: "44px",
                          letterSpacing: "-0.02em",
                          fontWeight: 800,
                        }}
                      >
                        {stat.number}
                      </div>

                      <div className="flex flex-col items-center gap-[6px] w-full">
                        {/* Statistics Title */}
                        <h4
                          className="font-open-sans font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "17px",
                            lineHeight: "24px",
                            fontWeight: 700,
                          }}
                        >
                          {stat.title}
                        </h4>

                        {/* Statistics Description */}
                        <p
                          className="font-open-sans font-normal text-white text-center"
                          style={{
                            fontSize: "12px",
                            lineHeight: "20px",
                            fontWeight: 400,
                          }}
                        >
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUsBannerDesktop;
