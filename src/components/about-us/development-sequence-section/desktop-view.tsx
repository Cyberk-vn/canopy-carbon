"use client";

import Image from "next/image";
import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";

interface DesktopViewProps {
  data: DevelopmentSequenceSectionProps['data'];
}

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

  // 5 Cards data from Figma design
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
        "Ongoing FPIC, livelihoods support, participatory planning, and equitable benefit-sharing — designed to ensure long-term community alignment.",
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
    <div className="mx-auto lg:max-w-[600px]">
      {/* Header Section */}
      <div className="w-full max-w-[367px] mb-5">
        {/* Top decorative lines */}
        <div className="flex justify-center items-center mb-10">
          <div className="flex flex-col items-center gap-[9px]">
            <div
              className="w-[203px] h-0 border-t-[3px]"
              style={{ borderColor: "rgba(172, 184, 194, 0.2)" }}
            />
            <div className="flex justify-center">
              <div
                className="w-[100px] h-0 border-t-[2px]"
                style={{ borderColor: "rgba(172, 184, 194, 0.2)" }}
              />
            </div>
          </div>
        </div>

        {/* Content and Image Grid */}
        <div className="grid grid-cols-[1fr_136px] items-end">
          {/* Text Content */}
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-open-sans font-bold text-[18px] leading-[1.5555555555555556] text-[#475850] text-left">
              {data.sectionTitle}
            </h2>

            <p
              className="font-open-sans font-semibold text-[13px] leading-[1.5384615384615385] text-[#91A69E] text-left max-w-[234px]"
              style={{ letterSpacing: "-3%" }}
            >
              {data.sectionSubtitle}
            </p>
          </div>

          {/* Decorative Image */}
          <div className="w-[136px] h-[55px] justify-self-end">
            <Image
              src="/assets/about-us/development-sequence/right-title-effect-image-side.png"
              alt="Development sequence decorative element"
              width={136}
              height={55}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-12">
        {/* Development Cards - Desktop: Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {developmentCards.map((card) => (
            <div key={card.id} className="w-full h-[273px] mx-auto">
              {/* Outer Background Layer */}
              <div
                className="w-full h-full rounded-[5px] p-[1px] flex flex-col"
                style={{ backgroundColor: "rgba(47, 58, 53, 0.4)" }}
              >
                {/* Card Title - Outer */}
                <div className="pl-10 pr-6 pt-4 pb-2">
                  <h4 className="font-roboto font-black text-[16px] leading-[1.5] text-white">
                    {card.title}
                  </h4>
                </div>

                {/* Inner Card Container */}
                <div className="flex-1 px-6 pb-4">
                  <div
                    className="w-full h-[192px] rounded-[5px] p-4 flex flex-col gap-2"
                    style={{
                      background: `linear-gradient(rgba(47, 58, 53, 0.45), rgba(47, 58, 53, 0.45)), url('/assets/about-us/development-sequence/card-bg-image.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="w-[60px] h-[2px]"
                      style={{ backgroundColor: "#C5CDD4" }}
                    />

                    {/* Description */}
                    <div className="flex-1">
                      <p className="font-roboto font-normal text-[12px] leading-[1.67] text-white tracking-[-0.01em] w-full overflow-hidden">
                        {card.description}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    {card.learnMoreUrl && (
                      <a
                        href={card.learnMoreUrl}
                        className="font-roboto font-normal text-[9px] leading-[2.22] text-white/60 hover:text-white transition-colors duration-200 inline-block"
                      >
                        Learn More &gt;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section Header */}
        <div className="mb-8 flex flex-col items-center w-full mx-auto mt-8">
          {/* Decorative Line */}
          <div
            className="w-[60px] h-0 mb-2"
            style={{ borderTop: "1px solid #D8DBD6" }}
          />

          {/* Description Text */}
          <p
            className="font-open-sans font-semibold text-[14px] leading-[1.4285714285714286] text-[#91A69E] text-center w-full mb-2"
            style={{ letterSpacing: "-3%" }}
          >
            {data.contentSectionDescription}
          </p>

          {/* Title */}
          <h3
            className="font-open-sans font-bold text-[12px] leading-[1.6666666666666667] text-[#475850] text-center w-full"
            style={{ letterSpacing: "-3%" }}
          >
            {data.contentSectionTitle}
          </h3>
        </div>

        {/* Climate Action Implementation Card Section */}
        <div className="mt-8">
          {/* Desktop: Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {climateActionCards.map((card) => (
              <div key={card.id} className="w-full h-[273px] mx-auto">
                {/* Outer Background Layer */}
                <div
                  className="w-full h-full rounded-[5px] p-[1px] flex flex-col"
                  style={{
                    backgroundColor: "rgba(207, 213, 219, 0.4)",
                  }}
                >
                  {/* Card Title - Outer */}
                  <div className="pl-10 pr-6 pt-4 pb-2">
                    <h4
                      className="font-roboto font-black text-[16px] leading-[1.25]"
                      style={{ color: "rgba(46, 47, 45, 0.7)" }}
                    >
                      {card.title}
                    </h4>
                  </div>

                  {/* Inner Card Container */}
                  <div className="flex-1 px-6 pb-4">
                    <div
                      className="w-full h-[192px] rounded-[5px] p-4 flex flex-col gap-2"
                      style={{
                        backgroundColor: "rgba(207, 213, 219, 0.15)",
                      }}
                    >
                      <div
                        className="w-[60px] h-[2px]"
                        style={{ backgroundColor: "#C5CDD4" }}
                      />

                      {/* Description */}
                      <div className="flex-1">
                        <p
                          className="font-roboto font-normal text-[12px] leading-[1.67] w-full overflow-hidden"
                          style={{
                            color: "rgba(46, 47, 45, 0.8)",
                            letterSpacing: "-1%",
                          }}
                        >
                          {card.description}
                        </p>
                      </div>

                      {/* Learn More Link */}
                      <a
                        href={card.learnMoreUrl}
                        className="font-roboto font-normal text-[9px] leading-[2.22] hover:opacity-80 transition-opacity duration-200 inline-block"
                        style={{ color: "rgba(46, 47, 45, 0.6)" }}
                      >
                        Learn More &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

DesktopView.displayName = "DesktopView";