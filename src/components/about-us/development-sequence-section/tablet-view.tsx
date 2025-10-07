"use client";

import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";

interface TabletViewProps {
  data: DevelopmentSequenceSectionProps["data"];
}

// Helper function to create responsive value for tablet with 2 breakpoints
// 768px-1280px: Smooth scaling across the range
const createResponsiveValue = (value768: number, value1280: number): string => {
  return `clamp(
    ${value768}px,
    calc(${value768}px + (${value1280} - ${value768}) * ((100vw - 768px) / 512)),
    ${value1280}px
  )`;
};

export const TabletView = memo<TabletViewProps>(({ data }) => {
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
    <div className="w-full bg-[#FCFCFC]">
      <div
        className="hidden md:block xl:hidden"
        style={{
          paddingTop: "79px",
          paddingLeft: "26px",
          paddingRight: "26px",
          paddingBottom: createResponsiveValue(80, 93),
        }}
      >
        {/* Header Section */}
        <div
          className="flex flex-col"
          style={{
            gap: "24px",
            marginBottom: createResponsiveValue(40, 93),
          }}
        >
          {/* Title */}
          <h2
            className="font-open-sans font-bold text-[#5A6F65]"
            style={{
              fontSize: createResponsiveValue(24, 32),
              lineHeight: "1.4em",
            }}
          >
            Canopy Project <br />
            Development Roadmap
          </h2>

          {/* Subtitle */}
          <p
            className="font-open-sans font-semibold text-[#BCC9C4]"
            style={{
              fontSize: createResponsiveValue(24, 20),
              lineHeight: "1.4em",
              letterSpacing: "-3%",
            }}
          >
            Our nature-based projects follow a structured development pathway,
            segmented into six distinct phases.
          </p>
        </div>

        {/* Development Cards Flex - 3 columns, 2 rows */}
        <div className="flex gap-[20px] flex-wrap">
          {developmentCards.map((card) => (
            <div
              key={card.id}
              style={{
                width: "calc((100% - 40px) / 3)",
                height: createResponsiveValue(228, 266),
              }}
            >
              {/* Multi-layer Background System following Figma */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  backgroundColor: "#4E5754",
                  borderRadius: createResponsiveValue(5, 5.83),
                }}
              >
                {/* Background Image Layer - scales from 768px to 1280px */}
                <div
                  className="absolute w-full"
                  style={{
                    left: "0",
                    top: createResponsiveValue(68, 79.33),
                    height: createResponsiveValue(122, 142.33),
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
                  style={{
                    backgroundColor: "#4E5753",
                    borderRadius: createResponsiveValue(5, 5.83),
                  }}
                />

                {/* Content Container - Frame 135 - all dimensions scale */}
                <div
                  className="relative z-10 flex flex-col"
                  style={{
                    width: "100%",
                    height: createResponsiveValue(227, 264.83),
                    padding: createResponsiveValue(24, 28),
                    gap: createResponsiveValue(15, 17.5),
                    marginTop: createResponsiveValue(1, 1.17),
                  }}
                >
                  {/* Card Title - scales proportionally */}
                  <div
                    className="flex items-center"
                    style={{ height: createResponsiveValue(27, 31.5) }}
                  >
                    <h4
                      className="font-roboto font-black leading-[1.25]"
                      style={{
                        color: "#7D8F89",
                        fontSize: createResponsiveValue(16, 18.67),
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>

                  {/* Description Text - font scales proportionally */}
                  <div className="flex-1">
                    <p
                      className="font-roboto font-normal leading-[1.67]"
                      style={{
                        color: "#E9E7DF",
                        letterSpacing: "-1%",
                        fontSize: createResponsiveValue(12, 14),
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

      {/* Climate Action Section - Ongoing Project Workstreams */}
      <div
        className="hidden md:block xl:hidden mx-[25px]"
        style={{
          paddingTop: createResponsiveValue(80, 133.3),
          paddingBottom: createResponsiveValue(80, 133.3),
        }}
      >
        {/* Header Section */}
        <div
          style={{
            marginBottom: createResponsiveValue(65, 108.3),
          }}
        >
          {/* Title */}
          <h2
            className="font-open-sans font-bold text-[#475850]"
            style={{
              fontSize: createResponsiveValue(24, 40),
              lineHeight: "1em",
              letterSpacing: "-3%",
              marginBottom: 27,
            }}
          >
            Ongoing Project Workstreams
          </h2>

          {/* Description */}
          <p
            className="font-open-sans font-semibold text-[#91A69E]"
            style={{
              fontSize: createResponsiveValue(24, 40),
              lineHeight: "1.4em",
              letterSpacing: "-3%",
              maxWidth: createResponsiveValue(644, 1073.3),
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
            gap: createResponsiveValue(16, 26.7),
          }}
        >
          {climateActionCards.map((card) => (
            <div
              key={card.id}
              className="relative"
              style={{
                width: "100%",
                height: createResponsiveValue(130, 216.7),
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
                  left: createResponsiveValue(24, 40),
                  top: createResponsiveValue(34.5, 57.5),
                  width: createResponsiveValue(190, 316.7),
                  height: createResponsiveValue(56, 93.3),
                }}
              >
                <h4
                  className="font-roboto font-black text-left"
                  style={{
                    color: "rgba(46, 47, 45, 0.7)",
                    fontSize: createResponsiveValue(18, 30),
                    lineHeight: "1.56em",
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
                  left: createResponsiveValue(237, 395),
                  top: createResponsiveValue(15, 25),
                  width: createResponsiveValue(436, 726.7),
                  padding: createResponsiveValue(20, 33.3),
                }}
              >
                <p
                  className="font-roboto font-normal text-[#909FAC] text-left"
                  style={{
                    fontSize: createResponsiveValue(12, 20),
                    lineHeight: "1.67em",
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
    </div>
  );
});

TabletView.displayName = "TabletView";
