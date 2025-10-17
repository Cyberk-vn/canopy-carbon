"use client";

import Image from "next/image";
import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";
import { motion } from "motion/react";
import { Container } from "../../shared";
import LogoDecorator from "../../../../public/assets/banner-shared-component/circle.png";
import DevelopmentDecoratorImage from "../../../../public/assets/desktop/about-us/development-decorator-image.avif";

interface DesktopViewProps {
  data: DevelopmentSequenceSectionProps["data"];
}

// Helper function to create responsive value for desktop
// 1280px-2200px: Smooth linear scaling across the entire range
// Fixed: Removed min() constraint that was preventing proper scaling to max value
const createResponsiveValue = (
  value1280: number,
  value2200: number
): string => {
  // Calculate linear interpolation from 1280px to 2200px viewport
  // Formula: minValue + (maxValue - minValue) * ((100vw - minViewport) / viewportRange)
  return `clamp(
    ${value1280}px,
    calc(${value1280}px + (${value2200} - ${value1280}) * ((100vw - 1280px) / 920)),
    ${value2200}px
  )`;
};

export const DesktopView = memo<DesktopViewProps>(({ data }) => {
  // 6 Cards data from Figma design
  const developmentCards = [
    {
      id: 1,
      title: "Pre-Feasibility Study",
      description:
        "Preliminary review of regulatory context and spatial characteristics of the site, alongside early-stage carbon potential assessment.",
      learnMoreUrl: "#",
    },
    {
      id: 2,
      title: "Feasibility Study",
      description:
        "Ground-truthing of site conditions and validation of key success factors such as resource suitability and community alignment.",
      learnMoreUrl: "#",
    },
    {
      id: 3,
      title: "Implementation Design",
      description:
        "Structuring of operational plans across climate activities, stakeholder programs, and long-term management frameworks.",
      learnMoreUrl: "#",
    },
    {
      id: 4,
      title: "PDD Development",
      description:
        "Consolidation of project data into a formal Project Design Document aligned with relevant standards and methodologies.",
      learnMoreUrl: "#",
    },
    {
      id: 5,
      title: "Validation & Verification",
      description:
        "Independent third-party review for project validation, registration, and verification of outcomes in line with crediting requirements.",
      learnMoreUrl: "#",
    },
    {
      id: 6,
      title: "Issuance & Sale",
      description:
        "Coordination of credit issuance, offtake preparation, and registry administration—including commercial documentation and reporting.",
      learnMoreUrl: "#",
    },
  ];

  // 5 Climate Action Cards data from Figma design
  const climateActionCards = [
    {
      id: 1,
      title: (
        <>
          Climate Action <br /> Implementation
        </>
      ),
      description:
        "Execution of core interventions including forest protection, ARR, and enrichment—carried out in line with validated project design and ecological conditions.",
      learnMoreUrl: "#",
    },
    {
      id: 2,
      title: (
        <>
          Community <br /> Development <br /> Programs
        </>
      ),
      description:
        "Ongoing FPIC, livelihoods support, participatory planning, and equitable benefit-sharing — designed to ensure long-term community alignment.",
      learnMoreUrl: "#",
    },
    {
      id: 3,
      title: (
        <>
          Biodiversity & <br /> Ecosystem <br /> Protection
        </>
      ),
      description:
        "Habitat conservation, species monitoring, and threat mitigation strategies to uphold ecological integrity beyond carbon metrics.",
      learnMoreUrl: "#",
    },
    {
      id: 4,
      title: (
        <>
          SDG & Co-
          <br />
          Benefit <br /> Delivery
        </>
      ),
      description:
        "Structured implementation of SDG-aligned activities and preparation for verification under CCB or similar co-benefit standards.",
      learnMoreUrl: "#",
    },
    {
      id: 5,
      title: (
        <>
          Monitoring, <br /> Reporting & <br /> Verification
        </>
      ),
      description:
        "Continuous data collection via patrols, satellite imagery, biomass tracking, and preparation for future audits and credit issuances.",
      learnMoreUrl: "#",
    },
  ];

  return (
    <Container maxWidth="full">
      {/* Desktop Layout ≥1280px - Keep exactly as-is */}
      <div className="hidden xxl:block overflow-hidden max-w-[1920] mx-auto mt-[40px] pl-[68px]">
        {/* Two Column Layout */}
        <div className="flex gap-[167px] xxl:gap-[167px] 3xl:gap-[250px]">
          {/* Left Column: Title, Description, and Cards */}
          <div className="flex-1 max-w-[1022px] ml-[98px] mt-[130px] mb-[93px]">
            {/* Header Section */}
            <div className="mb-[130px] ml-[20px]">
              <h2 className="font-open-sans xxl:font-avenir-heavy xxl:font-normal font-bold xxl:text-[24px] 3xl:text-[30px] leading-[1.1] text-[#596E64] mb-[24px]">
                Canopy Project <br /> Development Roadmap
              </h2>
              <p className="font-open-sans xxl:font-avenir-heavy font-semibold xxl:font-normal xxl:text-[24px] 3xl:text-[33px] leading-[1.1] text-[#BCC9C4] max-w-[788px] xxl:max-w-[970px]">
                Our nature projects progress through structured development
                phases, guided by disciplined decision-making at every step.
              </p>
            </div>

            {/* Development Cards Flex - 3 columns, 2 rows */}
            <div className="flex gap-[40px] flex-wrap">
              {developmentCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: "314px",
                    height: "273px",
                  }}
                >
                  {/* Multi-layer Background System following Figma */}
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{ backgroundColor: "#4E5754" }}
                  >
                    {/* Background Image Layer - positioned at y: 68px from Figma */}
                    <div
                      className="absolute w-full"
                      style={{
                        left: "0",
                        top: "68px",
                        height: "122px",
                        backgroundImage: `url('/assets/desktop/about-us/background-image-development-content-card.svg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />

                    {/* Gradient Overlay - Rectangle 57 */}
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 94%)",
                      }}
                    />

                    {/* Color Overlay - Rectangle 55 */}
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{ backgroundColor: "#4E5753" }}
                    />

                    {/* Content Container - Frame 135 */}
                    <div
                      className="relative z-10 flex flex-col"
                      style={{
                        width: "100%",
                        height: "227px",
                        padding: "36px 40px",
                        gap: "15px",
                        marginTop: "1px",
                      }}
                    >
                      {/* Card Title - scales from 1280px to 2200px */}
                      <div
                        className="flex items-center"
                        style={{
                          height: createResponsiveValue(17.78, 30.56),
                        }}
                      >
                        <h4
                          className="font-roboto font-black xxl:font-avenir-heavy xxl:font-normal text-[#7D8F89]"
                          style={{
                            fontSize: createResponsiveValue(14.22, 20),
                            lineHeight: createResponsiveValue(17.78, 30.56),
                          }}
                        >
                          {card.title}
                        </h4>
                      </div>

                      {/* Description Text - scales from 1280px to 2200px */}
                      <div className="flex-1">
                        <p
                          className="font-roboto font-normal xxl:font-open-sans xxl:font-normal text-[#E0E4E8]"
                          style={{
                            fontSize: createResponsiveValue(10.67, 13),
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Full Height Decorator Image */}
          <div className="flex-shrink-0 mb-[93px] xxl:pr-[68px] 4xl:pr-0">
            <div className="h-full flex items-stretch">
              <Image
                src={DevelopmentDecoratorImage}
                alt="Development sequence decorative element"
                width={398}
                height={1097}
                className="h-full object-cover xxl:w-[354px] 3xl:w-[398px] xxl:h-[1097px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Climate Action Section - Side by Side Layout */}
      <div
        className="hidden xl:block overflow-hidden max-w-[1990px] mx-auto"
        style={{
          paddingTop: createResponsiveValue(21.33, 70.83),
          paddingBottom: createResponsiveValue(21.33, 90.83),
        }}
      >
        <div className="flex" style={{ position: "relative" }}>
          {/* Left Column: Title, Description, and Cards */}
          <div
            className="ml-[166px]"
            style={{
              marginTop: createResponsiveValue(48.22, 103.89),
            }}
          >
            {/* Header Section */}
            <div className="ml-[20px] mb-[65px]">
              {/* Title */}
              <h2 className="font-open-sans xxl:font-avenir-heavy xxl:font-normal font-bold xxl:text-[24px] 3xl:text-[30px] leading-[1.4] text-[#596E64] mb-[24px]">
                Ongoing Project Workstreams
              </h2>

              {/* Description */}
              <p
                className="font-open-sans xxl:font-avenir-heavy font-semibold xxl:font-normal xxl:text-[24px] 3xl:text-[33px] leading-normal text-[#BCC9C4] max-w-[788px] xxl:max-w-[970px]"
                style={{
                  maxWidth: createResponsiveValue(456.59, 984.39),
                }}
              >
                Nature-based projects demand ongoing, multifaceted execution far
                beyond initial validation.
              </p>
            </div>

            {/* Climate Cards - Vertical Layout */}
            <div
              className="flex flex-col"
              style={{
                gap: createResponsiveValue(11.33, 18),
              }}
            >
              {climateActionCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className="flex items-start"
                  initial={{
                    opacity: 0,
                    x: -50,
                    rotateY: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    x: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                    rotateY: {
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                    },
                  }}
                  whileHover={{
                    rotateY: 2,
                    x: 5,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    width: createResponsiveValue(636.22, 1310),
                    maxWidth: "1105px",
                    height: "175px",
                    backgroundColor: "rgba(207, 213, 219, 0.4)",
                    padding: createResponsiveValue(14.89, 32.11),
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Left: Card Title - Fixed width (same for all cards) */}
                  <div
                    className="flex items-start flex-shrink-0"
                    style={{
                      width: createResponsiveValue(150, 324),
                      paddingRight: createResponsiveValue(20, 40),
                    }}
                  >
                    <h4
                      className="xl:font-['Roboto'] xl:text-[#2E2F2DB2] 2xl:font-['Work_Sans'] 2xl:text-[#3B464F] text-left xxl:font-[600]"
                      style={{
                        fontSize:
                          "clamp(18px, calc(18px + 6 * ((100vw - 1440px) / 480)), 24px)",
                        lineHeight: index === 0 ? "120%" : "140%",
                        letterSpacing: "1%",
                        display: "-webkit-box",
                        WebkitLineClamp: index === 0 ? 2 : 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>

                  {/* Right: Description - Fills remaining space */}
                  <div
                    className="flex-1 rounded-[8px] flex items-start -mt-3"
                    style={{
                      backgroundColor: "#F3F5F6",
                      paddingTop: createResponsiveValue(10, 15),
                      paddingBottom: createResponsiveValue(14.17, 30.56),
                      paddingLeft: createResponsiveValue(14.17, 30.56),
                      paddingRight: createResponsiveValue(14.17, 30.56),
                    }}
                  >
                    <p
                      className="xl:font-['Roboto'] xl:text-[#909FAC] 2xl:font-['Work_Sans'] 2xl:text-[#9CA3AF] font-normal text-left"
                      style={{
                        fontSize:
                          "clamp(12px, calc(12px + 4 * ((100vw - 1440px) / 480)), 16px)",
                        lineHeight:
                          "clamp(20px, calc(20px + 4 * ((100vw - 1440px) / 480)), 24px)",
                        letterSpacing: "-1%",
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Climate Decorator Image - hidden 50px on top */}
          <div
            className="absolute overflow-hidden"
            style={{
              right: createResponsiveValue(10, 0),
              top: createResponsiveValue(-28.19, -53),
              width: createResponsiveValue(374.27, 560),
              height: createResponsiveValue(315.56, 478),
            }}
          >
            <Image
              src={LogoDecorator}
              alt="Climate action decorative element"
              width={560}
              height={478}
              className="w-full h-full object-cover opacity-60"
              style={{
                objectPosition: "center bottom",
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
});

DesktopView.displayName = "DesktopView";
