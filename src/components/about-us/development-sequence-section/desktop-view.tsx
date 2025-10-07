"use client";

import Image from "next/image";
import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";
import { Container } from "../../shared";
import LogoDecorator from "../../../../public/assets/banner-shared-component/circle.png";

interface DesktopViewProps {
  data: DevelopmentSequenceSectionProps["data"];
}

// Helper function to create responsive value for desktop with 3 breakpoints
// 1280px-1440px-2200px: Smooth scaling across the range
const createResponsiveValue = (
  value1280: number,
  value1440: number,
  value2200: number
): string => {
  return `clamp(
    ${value1280}px,
    min(
      calc(${value1280}px + (${value1440} - ${value1280}) * ((100vw - 1280px) / 160)),
      calc(${value1440}px + (${value2200} - ${value1440}) * ((100vw - 1440px) / 760))
    ),
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
      title: "Climate Action Implementation",
      description:
        "Execution of core interventions including forest protection, ARR, and enrichment—carried out in line with validated project design and ecological conditions.",
      learnMoreUrl: "#",
    },
    {
      id: 2,
      title: "Community Development Programs",
      description:
        "Habitat conservation, species monitoring, and threat mitigation strategies to uphold ecological integrity beyond carbon metrics.",
      learnMoreUrl: "#",
    },
    {
      id: 3,
      title: "Biodiversity & Ecosystem Protection",
      description:
        "Habitat conservation, species monitoring, and threat mitigation strategies to uphold ecological integrity beyond carbon metrics.",
      learnMoreUrl: "#",
    },
    {
      id: 4,
      title: "SDG & Co-Benefit Delivery",
      description:
        "Structured implementation of SDG-aligned activities and preparation for verification under CCB or similar co-benefit standards.",
      learnMoreUrl: "#",
    },
    {
      id: 5,
      title: "Monitoring, Reporting & Verification",
      description:
        "Continuous data collection via patrols, satellite imagery, biomass tracking, and preparation for future audits and credit issuances.",
      learnMoreUrl: "#",
    },
  ];

  return (
    <Container maxWidth="full">
      {/* Desktop Layout ≥1280px - Keep exactly as-is */}
      <div className="hidden xl:block overflow-hidden max-w-[2200px] mx-auto mt-[40px]">
        {/* Two Column Layout */}
        <div className="flex">
          {/* Left Column: Title, Description, and Cards */}
          <div
            className="flex-1"
            style={{
              marginLeft: "68px",
              marginTop: "79px",
              marginBottom: "93px",
              marginRight: "230px",
            }}
          >
            {/* Header Section */}
            <div className="mb-[93px] ml-[68px]">
              <h2 className="font-open-sans font-bold text-[32px] leading-[1.4] text-[#5A6F65] mb-[24px]">
                Canopy Project <br /> Development Roadmap
              </h2>
              <p
                className="font-open-sans font-semibold text-[20px] leading-[1.4] text-[#BCC9C4] max-w-[788px]"
                style={{ letterSpacing: "-3%" }}
              >
                Our nature-based projects follow a structured development
                pathway, segmented into six distinct phases.
              </p>
            </div>

            {/* Development Cards Flex - 3 columns, 2 rows */}
            <div className="flex gap-[20px] flex-wrap">
              {developmentCards.map((card) => (
                <div
                  key={card.id}
                  style={{
                    width: "calc((100% - 40px) / 3)",
                    height: "228px",
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
                        padding: "24px",
                        gap: "15px",
                        marginTop: "1px",
                      }}
                    >
                      {/* Card Title - scales from 1280px to 2200px */}
                      <div
                        className="flex items-center"
                        style={{
                          height: createResponsiveValue(17.78, 20, 30.56),
                        }}
                      >
                        <h4
                          className="font-roboto font-black"
                          style={{
                            color: "#7D8F89",
                            fontSize: createResponsiveValue(14.22, 16, 24.44),
                            lineHeight: createResponsiveValue(17.78, 20, 30.56),
                          }}
                        >
                          {card.title}
                        </h4>
                      </div>

                      {/* Description Text - scales from 1280px to 2200px */}
                      <div className="flex-1">
                        <p
                          className="font-roboto font-normal"
                          style={{
                            color: "#E9E7DF",
                            letterSpacing: "-1%",
                            fontSize: createResponsiveValue(10.67, 12, 18.33),
                            lineHeight: createResponsiveValue(17.78, 20, 30.56),
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Full Height Decorator Image */}
          <div
            className="flex-shrink-0"
            style={{ marginBottom: "93px", marginRight: "65px" }}
          >
            <div className="h-full flex items-stretch">
              <Image
                src="/assets/desktop/about-us/development-decorator-image.svg"
                alt="Development sequence decorative element"
                width={354}
                height={948}
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Climate Action Section - Side by Side Layout */}
      <div
        className="hidden xl:block overflow-hidden max-w-[2200px] mx-auto"
        style={{
          paddingTop: createResponsiveValue(21.33, 30, 45.83),
          paddingBottom: createResponsiveValue(21.33, 30, 45.83),
        }}
      >
        <div className="flex" style={{ position: "relative" }}>
          {/* Left Column: Title, Description, and Cards */}
          <div
            style={{
              marginLeft: createResponsiveValue(104.89, 148, 226.22),
              marginTop: createResponsiveValue(48.22, 68, 103.89),
            }}
          >
            {/* Header Section */}
            <div
              style={{
                marginBottom: 65,
              }}
            >
              {/* Title */}
              <h2
                className="font-['Work_Sans'] font-bold text-[#596E64]"
                style={{
                  fontSize: createResponsiveValue(17.01, 24, 36.67),
                  lineHeight: "1em",
                  letterSpacing: "-3%",
                  marginBottom: 27,
                }}
              >
                Ongoing Project Workstreams
              </h2>

              {/* Description */}
              <p
                className="font-['Work_Sans'] font-semibold text-[#BCC9C4]"
                style={{
                  fontSize: createResponsiveValue(17.01, 24, 36.67),
                  lineHeight: "1.4em",
                  letterSpacing: "-3%",
                  maxWidth: createResponsiveValue(456.59, 644.43, 984.39),
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
                gap: createResponsiveValue(11.33, 16, 24.44),
              }}
            >
              {climateActionCards.map((card, index) => (
                <div
                  key={card.id}
                  className="relative"
                  style={{
                    width: createResponsiveValue(636.22, 898, 1371.78),
                    height:
                      index === 0
                        ? createResponsiveValue(103.44, 146, 223.11)
                        : createResponsiveValue(92.11, 130, 198.56),
                  }}
                >
                  {/* Background Rectangle */}
                  <div
                    className="absolute inset-0 rounded-[5px]"
                    style={{
                      backgroundColor: "rgba(207, 213, 219, 0.4)",
                    }}
                  />

                  {/* Card Title */}
                  <div
                    className="absolute flex items-center"
                    style={{
                      left: createResponsiveValue(
                        index === 0 ? 17.71 : 21.18,
                        index === 0 ? 25 : 29.88,
                        index === 0 ? 38.19 : 45.65
                      ),
                      top:
                        index === 0
                          ? createResponsiveValue(15.22, 21.48, 32.83)
                          : index === 1
                          ? createResponsiveValue(14.52, 20.5, 31.33)
                          : createResponsiveValue(24.44, 34.5, 52.72),
                      width: createResponsiveValue(
                        index === 1 ? 125.22 : 134.56,
                        index === 1 ? 176.7 : 189.84,
                        index === 1 ? 270.06 : 290.06
                      ),
                      height:
                        index === 0
                          ? createResponsiveValue(34.02, 48, 73.33)
                          : index === 1 || index === 2
                          ? createResponsiveValue(59.54, 84, 128.33)
                          : createResponsiveValue(39.69, 56, 85.56),
                    }}
                  >
                    <h4
                      className="font-['Work_Sans'] font-medium text-left"
                      style={{
                        color: "rgba(46, 47, 45, 0.7)",
                        fontSize: createResponsiveValue(12.76, 18, 27.5),
                        lineHeight: index === 0 ? "1.33em" : "1.56em",
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>

                  {/* Description Frame */}
                  <div
                    className="absolute rounded-[8px]"
                    style={{
                      backgroundColor: "#F3F5F6",
                      left: createResponsiveValue(167.85, 236.84, 361.95),
                      top:
                        index === 0
                          ? createResponsiveValue(12.76, 18, 27.5)
                          : createResponsiveValue(17.36, 24.5, 37.42),
                      width: createResponsiveValue(405.34, 571.89, 874.31),
                      padding:
                        index === 0
                          ? `${createResponsiveValue(
                              10.63,
                              15,
                              22.92
                            )} ${createResponsiveValue(
                              14.17,
                              20,
                              30.56
                            )} ${createResponsiveValue(21.26, 30, 45.83)}`
                          : createResponsiveValue(14.17, 20, 30.56),
                    }}
                  >
                    <p
                      className="font-['Work_Sans'] font-normal text-[#909FAC] text-left"
                      style={{
                        fontSize: createResponsiveValue(9.92, 14, 21.39),
                        lineHeight: "1.43em",
                        letterSpacing: "-1%",
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Climate Decorator Image - hidden 50px on top */}
          <div
            className="absolute overflow-hidden"
            style={{
              right: createResponsiveValue(60, 10.78, 95.56),
              top: createResponsiveValue(-28.19, -39.78, -53),
              width: `min(${createResponsiveValue(374.27, 390, 560)}, 560px)`,
              height: `min(${createResponsiveValue(315.56, 325, 478)}, 478px)`,
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
