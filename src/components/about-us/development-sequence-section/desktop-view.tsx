"use client";

import Image from "next/image";
import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";
import { Container } from "../../shared";

interface DesktopViewProps {
  data: DevelopmentSequenceSectionProps["data"];
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
    <Container maxWidth="default">
      {/* Desktop Layout ≥1440px - Keep exactly as-is */}
      <div className="hidden xxl:block w-[1440px] max-w-[1440px] overflow-hidden">
        {/* Two Column Layout */}
        <div className="flex w-[1440px]">
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
            <div className="mb-[93px]">
              <h2 className="font-open-sans font-bold text-[32px] leading-[1.4] text-[#475850] mb-[24px]">
                {data.sectionTitle}
              </h2>
              <p
                className="font-open-sans font-semibold text-[20px] leading-[1.4] text-[#91A69E] max-w-[788px]"
                style={{ letterSpacing: "-3%" }}
              >
                {data.sectionSubtitle}
              </p>
            </div>

            {/* Development Cards Grid */}
            <div
              className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5"
              style={{ gap: "20px" }}
            >
              {developmentCards.map((card) => (
                <div key={card.id} className="w-[252px] h-[228px]">
                  {/* Multi-layer Background System */}
                  <div className="relative w-full h-full rounded-[5px] overflow-hidden">
                    {/* Background Image Layer */}
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url('/assets/desktop/about-us/background-image-development-content-card.svg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 94%)",
                      }}
                    />

                    {/* Color Overlay */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-[5px]"
                      style={{ backgroundColor: "rgba(47, 58, 53, 0.4)" }}
                    />

                    {/* Content Container */}
                    <div className="relative z-10 w-full h-full p-4 flex flex-col gap-[15px]">
                      {/* Card Title */}
                      <div className="h-[27px] flex items-center">
                        <h4 className="font-roboto font-black text-[16px] leading-[1.25] text-white">
                          {card.title}
                        </h4>
                      </div>

                      {/* Description Frame */}
                      <div
                        className="flex-1 p-3 rounded-[8px] flex flex-col gap-2"
                        style={{ backgroundColor: "#989D9B" }}
                      >
                        {/* Description Text */}
                        <div className="flex-1">
                          <p
                            className="font-roboto font-normal text-[12px] leading-[1.67] text-white"
                            style={{ letterSpacing: "-1%" }}
                          >
                            {card.description}
                          </p>
                        </div>
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
                width={288}
                height={781}
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Climate Action Two Column Layout */}
        <div className="flex w-[1440px]">
          {/* Left Column: Title, Description, and Cards */}
          <div
            className="w-[897px]"
            style={{
              marginLeft: "69px",
              marginTop: "120px",
              marginBottom: "93px",
              marginRight: "84px",
            }}
          >
            {/* Header Section */}
            <div className="mb-[60px] text-center">
              <p
                className="font-open-sans font-semibold text-[28px] leading-[1.4] text-[#91A69E] max-w-[840px] mx-auto mb-[60px]"
                style={{ letterSpacing: "-3%" }}
              >
                {data.contentSectionDescription}
              </p>
              <h2
                className="font-open-sans font-bold text-[24px] leading-[1] text-[#475850]"
                style={{ letterSpacing: "-3%" }}
              >
                {data.contentSectionTitle}
              </h2>
            </div>

            {/* Climate Cards Grid - Row Layout */}
            <div className="flex flex-col gap-4">
              {climateActionCards.map((card) => (
                <div key={card.id} className="w-[898px] h-[130px]">
                  {/* Card Background */}
                  <div className="relative w-full h-full">
                    {/* Background Rectangle */}
                    <div
                      className="absolute w-[897.83px] h-[129.9px] rounded-[5px]"
                      style={{
                        backgroundColor: "rgba(207, 213, 219, 0.4)",
                        left: "-0.15px",
                        top: "-0.5px",
                      }}
                    />

                    {/* Card Title */}
                    <div
                      className="absolute w-[189.84px] h-[56px] flex items-center justify-start"
                      style={{
                        left: "29.88px",
                        top: "34.5px",
                      }}
                    >
                      <h4
                        className="font-roboto font-black text-[18px] leading-[1.5555555556] text-left"
                        style={{ color: "rgba(46, 47, 45, 0.7)" }}
                      >
                        {card.title}
                      </h4>
                    </div>

                    {/* Description Frame */}
                    <div
                      className="absolute flex items-center justify-center gap-2 p-5 rounded-[8px]"
                      style={{
                        backgroundColor: "#F3F5F6",
                        left: "236.84px",
                        top: "24.5px",
                      }}
                    >
                      <p
                        className="font-roboto font-normal text-[12px] leading-[1.6666666667] text-[#909FAC] text-left w-[571.89px]"
                        style={{ letterSpacing: "-1%" }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Climate Decorator Image */}
          <div
            className="w-[357px] h-[359px]"
            style={{ marginRight: "32px", marginTop: "0px" }}
          >
            <Image
              src="/assets/desktop/about-us/climate-background-image-decorator.svg"
              alt="Climate action decorative element"
              width={357}
              height={359}
              className="w-[357px] h-[359px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Responsive Layout 768px-1439px - Proportionally scaled implementations */}
      <div className="hidden md:block xxl:hidden w-full">
        {/* Tablet Layout 768px-1249px - Proportionally scaled from 1440px (ratio: 0.711) */}
        <div className="hidden md:block xlg:hidden w-full overflow-hidden">
          {/* Development Section - Tablet */}
          <div className="flex w-full">
            {/* Left Column: Title, Description, and Cards */}
            <div
              className="flex-1"
              style={{
                marginLeft: "48px",
                marginTop: "56px",
                marginBottom: "66px",
                marginRight: "80px",
              }}
            >
              {/* Header Section */}
              <div style={{ marginBottom: "66px" }}>
                <h2 className="font-open-sans font-bold text-[26px] leading-[1.4] text-[#475850] mb-[24px]">
                  {data.sectionTitle}
                </h2>
                <p
                  className="font-open-sans font-semibold text-[16px] leading-[1.4] text-[#91A69E] max-w-[560px]"
                  style={{ letterSpacing: "-3%" }}
                >
                  {data.sectionSubtitle}
                </p>
              </div>

              {/* Development Cards Grid - 2x3 Layout */}
              <div
                className="grid grid-cols-2 grid-rows-3"
                style={{ gap: "20px" }}
              >
                {developmentCards.map((card) => (
                  <div key={card.id} className="w-full" style={{ height: "162px" }}>
                    {/* Multi-layer Background System */}
                    <div className="relative w-full h-full rounded-[5px] overflow-hidden">
                      {/* Background Image Layer */}
                      <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                          backgroundImage: `url('/assets/desktop/about-us/background-image-development-content-card.svg')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />

                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 94%)",
                        }}
                      />

                      {/* Color Overlay */}
                      <div
                        className="absolute inset-0 w-full h-full rounded-[5px]"
                        style={{ backgroundColor: "rgba(47, 58, 53, 0.4)" }}
                      />

                      {/* Content Container */}
                      <div className="relative z-10 w-full h-full p-3 flex flex-col gap-[11px]">
                        {/* Card Title */}
                        <div className="h-[19px] flex items-center">
                          <h4 className="font-roboto font-black text-[14px] leading-[1.25] text-white">
                            {card.title}
                          </h4>
                        </div>

                        {/* Description Frame */}
                        <div
                          className="flex-1 p-2 rounded-[8px] flex flex-col gap-2"
                          style={{ backgroundColor: "#989D9B" }}
                        >
                          {/* Description Text */}
                          <div className="flex-1">
                            <p
                              className="font-roboto font-normal text-[11px] leading-[1.5] text-white"
                              style={{ letterSpacing: "-1%" }}
                            >
                              {card.description}
                            </p>
                          </div>
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
              style={{ marginBottom: "66px", marginRight: "46px" }}
            >
              <div className="h-full flex items-stretch">
                <Image
                  src="/assets/desktop/about-us/development-decorator-image.svg"
                  alt="Development sequence decorative element"
                  width={205}
                  height={555}
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Climate Action Section - Tablet */}
          <div className="flex w-full">
            {/* Left Column: Title, Description, and Cards */}
            <div
              className="flex-1"
              style={{
                marginLeft: "40px",
                marginTop: "85px",
                marginBottom: "66px",
                marginRight: "40px",
              }}
            >
              {/* Header Section */}
              <div className="mb-[43px] text-center">
                <p
                  className="font-open-sans font-semibold text-[22px] leading-[1.4] text-[#91A69E] max-w-[597px] mx-auto mb-[43px]"
                  style={{ letterSpacing: "-3%" }}
                >
                  {data.contentSectionDescription}
                </p>
                <h2
                  className="font-open-sans font-bold text-[19px] leading-[1] text-[#475850]"
                  style={{ letterSpacing: "-3%" }}
                >
                  {data.contentSectionTitle}
                </h2>
              </div>

              {/* Climate Cards Grid - Row Layout */}
              <div className="flex flex-col" style={{ gap: "8px" }}>
                {climateActionCards.map((card) => (
                  <div key={card.id} className="w-full" style={{ height: "92px" }}>
                    {/* Card Background */}
                    <div className="relative w-full h-full">
                      {/* Background Rectangle */}
                      <div
                        className="absolute rounded-[5px] inset-0"
                        style={{
                          backgroundColor: "rgba(207, 213, 219, 0.4)",
                        }}
                      />

                      {/* Card Title */}
                      <div
                        className="absolute flex items-center justify-start"
                        style={{
                          width: "135px",
                          height: "40px",
                          left: "21px",
                          top: "24px",
                        }}
                      >
                        <h4
                          className="font-roboto font-black text-[15px] leading-[1.5555555556] text-left"
                          style={{ color: "rgba(46, 47, 45, 0.7)" }}
                        >
                          {card.title}
                        </h4>
                      </div>

                      {/* Description Frame */}
                      <div
                        className="absolute flex items-center justify-center gap-2 p-4 rounded-[8px]"
                        style={{
                          backgroundColor: "#F3F5F6",
                          left: "168px",
                          top: "17px",
                          right: "20px",
                          height: "58px",
                        }}
                      >
                        <p
                          className="font-roboto font-normal text-[11px] leading-[1.5] text-[#909FAC] text-left"
                          style={{ letterSpacing: "-1%" }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Climate Decorator Image */}
            <div
              style={{
                width: "254px",
                height: "255px",
                marginRight: "23px",
                marginTop: "0px",
              }}
            >
              <Image
                src="/assets/desktop/about-us/climate-background-image-decorator.svg"
                alt="Climate action decorative element"
                width={254}
                height={255}
                className="object-contain"
                style={{ width: "254px", height: "255px" }}
              />
            </div>
          </div>
        </div>

        {/* Large Tablet Layout 1250px-1439px - Proportionally scaled from 1440px (ratio: 0.889) */}
        <div className="hidden xlg:block xxl:hidden w-full overflow-hidden">
          {/* Development Section - Large Tablet */}
          <div className="flex w-full">
            {/* Left Column: Title, Description, and Cards */}
            <div
              className="flex-1"
              style={{
                marginLeft: "60px",
                marginTop: "70px",
                marginBottom: "83px",
                marginRight: "120px",
              }}
            >
              {/* Header Section */}
              <div style={{ marginBottom: "83px" }}>
                <h2 className="font-open-sans font-bold text-[29px] leading-[1.4] text-[#475850] mb-[24px]">
                  {data.sectionTitle}
                </h2>
                <p
                  className="font-open-sans font-semibold text-[18px] leading-[1.4] text-[#91A69E] max-w-[701px]"
                  style={{ letterSpacing: "-3%" }}
                >
                  {data.sectionSubtitle}
                </p>
              </div>

              {/* Development Cards Grid - 3x2 Layout */}
              <div
                className="grid grid-cols-3 grid-rows-2"
                style={{ gap: "22px" }}
              >
                {developmentCards.map((card) => (
                  <div key={card.id} className="w-full" style={{ height: "203px" }}>
                    {/* Multi-layer Background System */}
                    <div className="relative w-full h-full rounded-[5px] overflow-hidden">
                      {/* Background Image Layer */}
                      <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                          backgroundImage: `url('/assets/desktop/about-us/background-image-development-content-card.svg')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />

                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 94%)",
                        }}
                      />

                      {/* Color Overlay */}
                      <div
                        className="absolute inset-0 w-full h-full rounded-[5px]"
                        style={{ backgroundColor: "rgba(47, 58, 53, 0.4)" }}
                      />

                      {/* Content Container */}
                      <div className="relative z-10 w-full h-full p-4 flex flex-col gap-[13px]">
                        {/* Card Title */}
                        <div className="h-[24px] flex items-center">
                          <h4 className="font-roboto font-black text-[15px] leading-[1.25] text-white">
                            {card.title}
                          </h4>
                        </div>

                        {/* Description Frame */}
                        <div
                          className="flex-1 p-3 rounded-[8px] flex flex-col gap-2"
                          style={{ backgroundColor: "#989D9B" }}
                        >
                          {/* Description Text */}
                          <div className="flex-1">
                            <p
                              className="font-roboto font-normal text-[11px] leading-[1.6] text-white"
                              style={{ letterSpacing: "-1%" }}
                            >
                              {card.description}
                            </p>
                          </div>
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
              style={{ marginBottom: "83px", marginRight: "58px" }}
            >
              <div className="h-full flex items-stretch">
                <Image
                  src="/assets/desktop/about-us/development-decorator-image.svg"
                  alt="Development sequence decorative element"
                  width={256}
                  height={694}
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Climate Action Section - Large Tablet */}
          <div className="flex w-full">
            {/* Left Column: Title, Description, and Cards */}
            <div
              className="flex-1"
              style={{
                marginLeft: "50px",
                marginTop: "107px",
                marginBottom: "83px",
                marginRight: "50px",
              }}
            >
              {/* Header Section */}
              <div className="mb-[53px] text-center">
                <p
                  className="font-open-sans font-semibold text-[25px] leading-[1.4] text-[#91A69E] max-w-[747px] mx-auto mb-[53px]"
                  style={{ letterSpacing: "-3%" }}
                >
                  {data.contentSectionDescription}
                </p>
                <h2
                  className="font-open-sans font-bold text-[22px] leading-[1] text-[#475850]"
                  style={{ letterSpacing: "-3%" }}
                >
                  {data.contentSectionTitle}
                </h2>
              </div>

              {/* Climate Cards Grid - Row Layout */}
              <div className="flex flex-col" style={{ gap: "10px" }}>
                {climateActionCards.map((card) => (
                  <div key={card.id} className="w-full" style={{ height: "116px" }}>
                    {/* Card Background */}
                    <div className="relative w-full h-full">
                      {/* Background Rectangle */}
                      <div
                        className="absolute rounded-[5px] inset-0"
                        style={{
                          backgroundColor: "rgba(207, 213, 219, 0.4)",
                        }}
                      />

                      {/* Card Title */}
                      <div
                        className="absolute flex items-center justify-start"
                        style={{
                          width: "169px",
                          height: "50px",
                          left: "27px",
                          top: "31px",
                        }}
                      >
                        <h4
                          className="font-roboto font-black text-[17px] leading-[1.5555555556] text-left"
                          style={{ color: "rgba(46, 47, 45, 0.7)" }}
                        >
                          {card.title}
                        </h4>
                      </div>

                      {/* Description Frame */}
                      <div
                        className="absolute flex items-center justify-center gap-2 p-4 rounded-[8px]"
                        style={{
                          backgroundColor: "#F3F5F6",
                          left: "211px",
                          top: "22px",
                          right: "25px",
                          height: "72px",
                        }}
                      >
                        <p
                          className="font-roboto font-normal text-[11px] leading-[1.6] text-[#909FAC] text-left"
                          style={{ letterSpacing: "-1%" }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Climate Decorator Image */}
            <div
              style={{
                width: "317px",
                height: "319px",
                marginRight: "28px",
                marginTop: "0px",
              }}
            >
              <Image
                src="/assets/desktop/about-us/climate-background-image-decorator.svg"
                alt="Climate action decorative element"
                width={317}
                height={319}
                className="object-contain"
                style={{ width: "317px", height: "319px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

DesktopView.displayName = "DesktopView";
