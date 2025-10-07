"use client";

import Image from "next/image";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { AboutUsBannerProps } from "@/src/types/banner";
import { Container } from "../shared";
import FadeContent from "../animation/fade-content";

// Image imports
import AboutUsBannerBgDesktop from "../../../public/assets/desktop/about-us/contact-us-banner-bg-image.svg";
import BannerChildImage from "../../../public/assets/about-us/banner-child-image.png";
import AboutUsBannerSecondBgDesktop from "../../../public/assets/desktop/about-us/contact-us-banner-second-bg.svg";

export function AboutUsBannerDesktop({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: AboutUsBannerProps) {
  return (
    <Container maxWidth="default" className="max-w-[1440px]">
      {/* Desktop Layout ≥1440px - Keep exactly as-is */}
      <div className="hidden xxl:block relative w-[1440px]">
        {/* Main Banner Section */}
        <div className="relative min-h-[840px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={AboutUsBannerBgDesktop}
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
            <FadeContent
              duration={600}
              delay={200}
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
                    src={BannerChildImage}
                    alt="Decorative Banner Element"
                    width={340}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </FadeContent>

            {/* Mission and Vision Content */}
            <FadeContent
              duration={800}
              delay={400}
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
                    className=" font-bold text-white"
                    style={{
                      fontSize: "36px",
                      lineHeight: "44px",
                      fontWeight: 700,
                    }}
                  >
                    Mission
                  </h2>
                  <p
                    className=" font-normal text-white"
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
                    className=" font-bold text-white"
                    style={{
                      fontSize: "36px",
                      lineHeight: "44px",
                      fontWeight: 700,
                    }}
                  >
                    Vision
                  </h2>
                  <p
                    className=" font-normal text-white"
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
            </FadeContent>
          </div>
        </div>

        {/* Secondary Banner Section with Smooth Transition */}
        <div className="relative h-[800px] w-full z-10 -mt-10">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={AboutUsBannerSecondBgDesktop}
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
            <div className="w-[1217px] flex flex-col gap-[60px] pr-[40px] pt-[43px] pb-[51px]">
              {/* Thesis Section */}
              <FadeContent
                duration={1000}
                delay={600}
                className="flex items-center justify-center gap-[24px] w-[1200px] mx-auto"
              >
                {/* Decorative Line */}
                <div className="w-0 h-[180px] border-l-4 border-[#CFD5DB] flex-shrink-0" />

                <div className="flex flex-col gap-[20px] flex-1">
                  <p
                    className=" font-bold text-[#DDE2E6]"
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
                    className=" font-normal text-[#D8DBD6]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                    }}
                  >
                    - Our Thesis Statement
                  </p>
                </div>
              </FadeContent>

              {/* Statistics Cards Grid */}
              <FadeContent
                duration={1200}
                delay={800}
                className="grid grid-cols-4 gap-[24px] w-full"
              >
                {/* Statistics Card 1 */}
                <FadeContent
                  duration={300}
                  delay={1000}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{ width: "286px", height: "306px" }}
                >
                  <div className="flex flex-col items-center gap-[16px] w-full">
                    {/* Statistics Number */}
                    <div
                      className="font-avenir text-[#9DAE83] text-center"
                      style={{
                        fontSize: "48px",
                        lineHeight: "44px",
                        letterSpacing: "-2%",
                        fontWeight: 800,
                      }}
                    >
                      &gt; 70%
                    </div>

                    <div className="flex flex-col items-center gap-[6px] w-full">
                      {/* Statistics Title */}
                      <h4
                        className=" font-bold text-[#9DAE83] text-center"
                        style={{
                          fontSize: "17px",
                          lineHeight: "24px",
                          fontWeight: 700,
                        }}
                      >
                        Global Carbon Budget Utilised
                      </h4>

                      {/* Statistics Description */}
                      <p
                        className=" font-normal text-white text-center"
                        style={{
                          fontSize: "12px",
                          lineHeight: "20px",
                          fontWeight: 400,
                        }}
                      >
                        Over 70% of our global CO₂ budget has already been used
                        as of 2024 — around 2.65 trillion tonnes out of the 3.67
                        trillion tCO₂e budget believed to limit warming to safer
                        thresholds.
                      </p>
                    </div>
                  </div>
                </FadeContent>

                {/* Statistics Card 2 */}
                <FadeContent
                  duration={300}
                  delay={1100}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{ width: "286px", height: "306px" }}
                >
                  <div className="flex flex-col items-center gap-[16px] w-full">
                    {/* Statistics Number */}
                    <div
                      className="font-avenir text-[#9DAE83] text-center"
                      style={{
                        fontSize: "48px",
                        lineHeight: "44px",
                        letterSpacing: "-2%",
                        fontWeight: 800,
                      }}
                    >
                      42%
                    </div>

                    <div className="flex flex-col items-center gap-[6px] w-full">
                      {/* Statistics Title */}
                      <h4
                        className=" font-bold text-[#9DAE83] text-center"
                        style={{
                          fontSize: "17px",
                          lineHeight: "24px",
                          fontWeight: 700,
                        }}
                      >
                        Emissions Rate Reduction Needed
                      </h4>

                      {/* Statistics Description */}
                      <p
                        className=" font-normal text-white text-center"
                        style={{
                          fontSize: "12px",
                          lineHeight: "20px",
                          fontWeight: 400,
                        }}
                      >
                        To achieve 1.5°C targets, the IPCC recommends that
                        global GHG emissions must fall by at least 42% from 2019
                        levels by 2030. Instead, global annual emissions were
                        ~3.6% higher in 2024.
                      </p>
                    </div>
                  </div>
                </FadeContent>

                {/* Statistics Card 3 */}
                <FadeContent
                  duration={300}
                  delay={1200}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{ width: "286px", height: "306px" }}
                >
                  <div className="flex flex-col items-center gap-[16px] w-full">
                    {/* Statistics Number */}
                    <div
                      className="font-avenir text-[#9DAE83] text-center"
                      style={{
                        fontSize: "48px",
                        lineHeight: "44px",
                        letterSpacing: "-2%",
                        fontWeight: 800,
                      }}
                    >
                      5-10x
                    </div>

                    <div className="flex flex-col items-center gap-[6px] w-full">
                      {/* Statistics Title */}
                      <h4
                        className=" font-bold text-[#9DAE83] text-center"
                        style={{
                          fontSize: "17px",
                          lineHeight: "24px",
                          fontWeight: 700,
                        }}
                      >
                        Scale Up in Human-Led Removals
                      </h4>

                      {/* Statistics Description */}
                      <p
                        className=" font-normal text-white text-center"
                        style={{
                          fontSize: "12px",
                          lineHeight: "20px",
                          fontWeight: 400,
                        }}
                      >
                        Anthropogenic CO₂ removals amount to ~ 2 GtCO₂ per year
                        today. <br /> A multifold scale-up is needed this
                        century to meet climate targets and balance residual
                        emissions.
                      </p>
                    </div>
                  </div>
                </FadeContent>

                {/* Statistics Card 4 */}
                <FadeContent
                  duration={300}
                  delay={1300}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{ width: "286px", height: "306px" }}
                >
                  <div className="flex flex-col items-center gap-[16px] w-full">
                    {/* Statistics Number */}
                    <div
                      className="font-avenir text-[#9DAE83] text-center"
                      style={{
                        fontSize: "48px",
                        lineHeight: "44px",
                        letterSpacing: "-2%",
                        fontWeight: 800,
                      }}
                    >
                      2042-45
                    </div>

                    <div className="flex flex-col items-center gap-[6px] w-full">
                      {/* Statistics Title */}
                      <h4
                        className=" font-bold text-[#9DAE83] text-center"
                        style={{
                          fontSize: "17px",
                          lineHeight: "24px",
                          fontWeight: 700,
                        }}
                      >
                        Complete Budget
                        <br />
                        Depletion
                      </h4>

                      {/* Statistics Description */}
                      <p
                        className=" font-normal text-white text-center"
                        style={{
                          fontSize: "12px",
                          lineHeight: "20px",
                          fontWeight: 400,
                        }}
                      >
                        At current rates, the global CO₂ budget could be fully
                        depleted by 2042, unless urgent action is taken to scale
                        removals and cut emissions dramatically.
                      </p>
                    </div>
                  </div>
                </FadeContent>
              </FadeContent>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Layout 768px-1439px - Proportionally scaled implementations */}
      <div className="hidden md:block xxl:hidden w-full">
        {/* Tablet Layout 768px-1249px - Proportionally scaled from 1440px (ratio: 0.711) */}
        <div className="hidden md:block xlg:hidden">
          <div
            className="relative w-full overflow-hidden"
            style={{ minHeight: "680px" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={AboutUsBannerBgDesktop}
                alt="About Us Banner Background"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1250px) 100vw"
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

            {/* Proportional Grid Layout - Tablet scaled */}
            <div
              className="relative z-20"
              style={{
                display: "grid",
                gridTemplateColumns: "85px 242px 107px 508px 1fr",
                gridTemplateRows: "auto 36px auto",
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

              {/* Decorative Image - Card Effect (scaled: 0.711) */}
              <FadeContent
                duration={600}
                delay={200}
                style={{
                  gridColumn: "1/2",
                  gridRow: "3",
                  marginLeft: "54px",
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: "273px",
                    height: "384px",
                  }}
                >
                  {/* Background decorator (scaled) */}
                  <div
                    className="absolute"
                    style={{
                      width: "242px",
                      height: "355px",
                      top: "28px",
                      left: "0",
                      background: "rgba(175, 175, 175, 0.3)",
                    }}
                  />
                  {/* Image (scaled) */}
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      width: "242px",
                      height: "355px",
                      top: "0",
                      left: "31px",
                    }}
                  >
                    <Image
                      src={BannerChildImage}
                      alt="Decorative Banner Element"
                      width={242}
                      height={355}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </FadeContent>

              {/* Mission and Vision Content (scaled positioning) */}
              <FadeContent
                duration={800}
                delay={400}
                style={{
                  gridColumn: "4",
                  gridRow: "3",
                  marginTop: "48px",
                }}
              >
                <div className="flex flex-col w-full" style={{ gap: "28px" }}>
                  {/* Mission Section */}
                  <div className="flex flex-col" style={{ gap: "17px" }}>
                    <h2
                      className=" font-bold text-white"
                      style={{
                        fontSize: "32px",
                        lineHeight: "38px",
                        fontWeight: 700,
                      }}
                    >
                      Mission
                    </h2>
                    <p
                      className=" font-normal text-white"
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        fontWeight: 400,
                      }}
                    >
                      To expand the global supply of high-quality carbon offsets
                      through disciplined project execution and deep capital
                      market expertise, with technology as a supporting enabler.
                    </p>
                  </div>

                  {/* Vision Section */}
                  <div className="flex flex-col" style={{ gap: "17px" }}>
                    <h2
                      className=" font-bold text-white"
                      style={{
                        fontSize: "32px",
                        lineHeight: "38px",
                        fontWeight: 700,
                      }}
                    >
                      Vision
                    </h2>
                    <p
                      className=" font-normal text-white"
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        fontWeight: 400,
                      }}
                    >
                      To become Southeast Asia&apos;s leading nature-based
                      solutions specialist, trusted globally for investing in,
                      developing, operating, and delivering premium carbon
                      offsets to both voluntary and compliance markets.
                    </p>
                  </div>
                </div>
              </FadeContent>
            </div>
          </div>

          {/* Tablet Secondary Section (proportionally scaled) */}
          <div
            className="relative w-full z-10"
            style={{
              height: "850px",
              marginTop: "-7px",
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={AboutUsBannerSecondBgDesktop}
                alt="Secondary Banner Background"
                fill
                className="object-cover"
                sizes="(max-width: 1250px) 100vw"
              />
            </div>

            <div
              className="absolute top-0 left-0 right-0 z-20"
              style={{
                height: "142px",
                background:
                  "linear-gradient(180deg, #000000 31.25%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            <div
              className="relative z-30 flex justify-center"
              style={{
                background: "#0000004D",
                height: "708px",
                marginLeft: "48px",
                marginRight: "48px",
                paddingTop: "40px",
                paddingBottom: "82px",
              }}
            >
              <div
                className="flex flex-col"
                style={{
                  width: "865px",
                  gap: "43px",
                  paddingRight: "28px",
                  paddingTop: "31px",
                  paddingBottom: "36px",
                }}
              >
                {/* Thesis Section (scaled) */}
                <FadeContent
                  duration={1000}
                  delay={600}
                  className="flex items-center justify-center"
                  style={{ 
                    gap: "17px", 
                    marginLeft: "49px",
                    marginRight: "49px"
                  }}
                >
                  {/* Decorative Line (scaled) */}
                  <div
                    className="border-[#CFD5DB] flex-shrink-0"
                    style={{
                      width: "0",
                      height: "128px",
                      borderLeftWidth: "3px",
                    }}
                  />

                  <div className="flex flex-col flex-1" style={{ gap: "14px" }}>
                    <p
                      className=" font-bold text-[#DDE2E6]"
                      style={{
                        fontSize: "18px",
                        lineHeight: "25px",
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
                      className=" font-normal text-[#D8DBD6]"
                      style={{
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      - Our Thesis Statement
                    </p>
                  </div>
                </FadeContent>

                {/* Statistics Grid - Tablet 2x2 layout (scaled cards) */}
                <FadeContent
                  duration={1200}
                  delay={800}
                  className="grid grid-cols-2 w-full max-w-4xl mx-auto"
                  style={{ gap: "20px" }}
                >
                  {/* Statistics Card 1 (scaled: 286px × 306px → 203px × 218px) */}
                  <FadeContent
                    duration={300}
                    delay={1000}
                    className="flex flex-col items-center gap-[7px] w-full"
                    style={{
                      height: "240px",
                      paddingLeft: "11px",
                      paddingRight: "11px",
                      paddingTop: "26px",
                      paddingBottom: "26px",
                    }}
                  >
                    <div
                      className="flex flex-col items-center w-full"
                      style={{ gap: "11px" }}
                    >
                      {/* Statistics Number (enhanced: 34px → 42px) */}
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "42px",
                          lineHeight: "38px",
                          letterSpacing: "-2%",
                          fontWeight: 800,
                        }}
                      >
                        &gt; 70%
                      </div>

                      <div
                        className="flex flex-col items-center w-full"
                        style={{ gap: "4px" }}
                      >
                        {/* Statistics Title (enhanced: 14px → 15px) */}
                        <h4
                          className=" font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "15px",
                            lineHeight: "21px",
                            fontWeight: 700,
                          }}
                        >
                          Global Carbon Budget Utilised
                        </h4>

                        {/* Statistics Description (enhanced: 11px → 12px) */}
                        <p
                          className=" font-normal text-white text-center"
                          style={{
                            fontSize: "12px",
                            lineHeight: "18px",
                            fontWeight: 400,
                            paddingLeft: "32px",
                            paddingRight: "32px",
                          }}
                        >
                          Over 70% of our global CO₂ budget has already been
                          used as of 2024 — around 2.65 trillion tonnes out of
                          the 3.67 trillion tCO₂e budget.
                        </p>
                      </div>
                    </div>
                  </FadeContent>

                  {/* Statistics Card 2 */}
                  <FadeContent
                    duration={300}
                    delay={1100}
                    className="flex flex-col items-center gap-[7px] w-full"
                    style={{
                      height: "240px",
                      paddingLeft: "11px",
                      paddingRight: "11px",
                      paddingTop: "26px",
                      paddingBottom: "26px",
                    }}
                  >
                    <div
                      className="flex flex-col items-center w-full"
                      style={{ gap: "11px" }}
                    >
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "42px",
                          lineHeight: "38px",
                          letterSpacing: "-2%",
                          fontWeight: 800,
                        }}
                      >
                        42%
                      </div>

                      <div
                        className="flex flex-col items-center w-full"
                        style={{ gap: "4px" }}
                      >
                        <h4
                          className=" font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "15px",
                            lineHeight: "21px",
                            fontWeight: 700,
                          }}
                        >
                          Emissions Rate Reduction Needed
                        </h4>

                        <p
                          className=" font-normal text-white text-center"
                          style={{
                            fontSize: "12px",
                            lineHeight: "18px",
                            fontWeight: 400,
                            paddingLeft: "32px",
                            paddingRight: "32px",
                          }}
                        >
                          To achieve 1.5°C targets, the IPCC recommends that
                          global GHG emissions must fall by at least 42% from
                          2019 levels by 2030.
                        </p>
                      </div>
                    </div>
                  </FadeContent>

                  {/* Statistics Card 3 */}
                  <FadeContent
                    duration={300}
                    delay={1200}
                    className="flex flex-col items-center gap-[7px] w-full"
                    style={{
                      height: "240px",
                      paddingLeft: "11px",
                      paddingRight: "11px",
                      paddingTop: "26px",
                      paddingBottom: "26px",
                    }}
                  >
                    <div
                      className="flex flex-col items-center w-full"
                      style={{ gap: "11px" }}
                    >
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "42px",
                          lineHeight: "38px",
                          letterSpacing: "-2%",
                          fontWeight: 800,
                        }}
                      >
                        5-10x
                      </div>

                      <div
                        className="flex flex-col items-center w-full"
                        style={{ gap: "4px" }}
                      >
                        <h4
                          className=" font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "15px",
                            lineHeight: "21px",
                            fontWeight: 700,
                          }}
                        >
                          Scale Up in Human-Led Removals
                        </h4>

                        <p
                          className=" font-normal text-white text-center"
                          style={{
                            fontSize: "12px",
                            lineHeight: "18px",
                            fontWeight: 400,
                            paddingLeft: "32px",
                            paddingRight: "32px",
                          }}
                        >
                          Anthropogenic CO₂ removals amount to ~ 2 GtCO₂ per
                          year today. A multifold scale-up is needed this
                          century to meet climate targets.
                        </p>
                      </div>
                    </div>
                  </FadeContent>

                  {/* Statistics Card 4 */}
                  <FadeContent
                    duration={300}
                    delay={1300}
                    className="flex flex-col items-center gap-[7px] w-full"
                    style={{
                      height: "240px",
                      paddingLeft: "11px",
                      paddingRight: "11px",
                      paddingTop: "26px",
                      paddingBottom: "26px",
                    }}
                  >
                    <div
                      className="flex flex-col items-center w-full"
                      style={{ gap: "11px" }}
                    >
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "42px",
                          lineHeight: "38px",
                          letterSpacing: "-2%",
                          fontWeight: 800,
                        }}
                      >
                        2042-45
                      </div>

                      <div
                        className="flex flex-col items-center w-full"
                        style={{ gap: "4px" }}
                      >
                        <h4
                          className=" font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "15px",
                            lineHeight: "21px",
                            fontWeight: 700,
                          }}
                        >
                          Complete Budget Depletion
                        </h4>

                        <p
                          className=" font-normal text-white text-center"
                          style={{
                            fontSize: "12px",
                            lineHeight: "18px",
                            fontWeight: 400,
                            paddingLeft: "32px",
                            paddingRight: "32px",
                          }}
                        >
                          At current rates, the global CO₂ budget could be fully
                          depleted by 2042, unless urgent action is taken to
                          scale removals and cut emissions dramatically.
                        </p>
                      </div>
                    </div>
                  </FadeContent>
                </FadeContent>
              </div>
            </div>
          </div>
        </div>

        {/* Large Tablet Layout 1250px-1439px - Proportionally scaled from 1440px (ratio: 0.889) */}
        <div className="hidden xlg:block xxl:hidden">
          <div
            className="relative w-full overflow-hidden"
            style={{ minHeight: "747px" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={AboutUsBannerBgDesktop}
                alt="About Us Banner Background"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1440px) 100vw"
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

            {/* Proportional Grid Layout - Large Tablet scaled */}
            <div
              className="relative z-20"
              style={{
                display: "grid",
                gridTemplateColumns: "107px 302px 134px 635px 1fr",
                gridTemplateRows: "auto 44px auto",
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

              {/* Decorative Image - Card Effect (scaled: 0.889) */}
              <FadeContent
                duration={600}
                delay={200}
                style={{
                  gridColumn: "1/2",
                  gridRow: "3",
                  marginLeft: "68px",
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: "341px",
                    height: "480px",
                  }}
                >
                  {/* Background decorator (scaled) */}
                  <div
                    className="absolute"
                    style={{
                      width: "302px",
                      height: "445px",
                      top: "36px",
                      left: "0",
                      background: "rgba(175, 175, 175, 0.3)",
                    }}
                  />
                  {/* Image (scaled) */}
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      width: "302px",
                      height: "445px",
                      top: "0",
                      left: "39px",
                    }}
                  >
                    <Image
                      src={BannerChildImage}
                      alt="Decorative Banner Element"
                      width={302}
                      height={445}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </FadeContent>

              {/* Mission and Vision Content (scaled positioning) */}
              <FadeContent
                duration={800}
                delay={400}
                style={{
                  gridColumn: "4",
                  gridRow: "3",
                  marginTop: "60px",
                }}
              >
                <div
                  className="flex flex-col w-full"
                  style={{
                    gap: "36px",
                    paddingRight: "36px",
                  }}
                >
                  {/* Mission Section */}
                  <div className="flex flex-col" style={{ gap: "21px" }}>
                    <h2
                      className=" font-bold text-white"
                      style={{
                        fontSize: "32px",
                        lineHeight: "39px",
                        fontWeight: 700,
                      }}
                    >
                      Mission
                    </h2>
                    <p
                      className=" font-normal text-white"
                      style={{
                        fontSize: "14px",
                        lineHeight: "21px",
                        fontWeight: 400,
                      }}
                    >
                      To expand the global supply of high-quality carbon offsets
                      through disciplined project execution and deep capital
                      market expertise, with technology as a supporting enabler.
                    </p>
                  </div>

                  {/* Vision Section */}
                  <div className="flex flex-col" style={{ gap: "21px" }}>
                    <h2
                      className=" font-bold text-white"
                      style={{
                        fontSize: "32px",
                        lineHeight: "39px",
                        fontWeight: 700,
                      }}
                    >
                      Vision
                    </h2>
                    <p
                      className=" font-normal text-white"
                      style={{
                        fontSize: "14px",
                        lineHeight: "21px",
                        fontWeight: 400,
                      }}
                    >
                      To become Southeast Asia&apos;s leading nature-based
                      solutions specialist, trusted globally for investing in,
                      developing, operating, and delivering premium carbon
                      offsets to both voluntary and compliance markets.
                    </p>
                  </div>
                </div>
              </FadeContent>
            </div>
          </div>

          {/* Large Tablet Secondary Section (proportionally scaled) */}
          <div
            className="relative w-full z-10"
            style={{
              height: "711px",
              marginTop: "-9px",
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={AboutUsBannerSecondBgDesktop}
                alt="Secondary Banner Background"
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 100vw"
              />
            </div>

            <div
              className="absolute top-0 left-0 right-0 z-20"
              style={{
                height: "178px",
                background:
                  "linear-gradient(180deg, #000000 31.25%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            <div
              className="relative z-30 flex justify-center"
              style={{
                background: "#0000004D",
                height: "569px",
                marginLeft: "60px",
                marginRight: "60px",
                paddingTop: "50px",
                paddingBottom: "103px",
              }}
            >
              <div
                className="flex flex-col"
                style={{
                  width: "1082px",
                  gap: "53px",
                  paddingRight: "36px",
                  paddingTop: "38px",
                  paddingBottom: "45px",
                }}
              >
                {/* Thesis Section (scaled) */}
                <FadeContent
                  duration={1000}
                  delay={600}
                  className="flex items-center justify-center"
                  style={{ gap: "21px", width: "1067px", margin: "0 auto" }}
                >
                  {/* Decorative Line (scaled) */}
                  <div
                    className="border-[#CFD5DB] flex-shrink-0"
                    style={{
                      width: "0",
                      height: "160px",
                      borderLeftWidth: "4px",
                    }}
                  />

                  <div className="flex flex-col flex-1" style={{ gap: "18px" }}>
                    <p
                      className=" font-bold text-[#DDE2E6]"
                      style={{
                        fontSize: "21px",
                        lineHeight: "30px",
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
                      className=" font-normal text-[#D8DBD6]"
                      style={{
                        fontSize: "14px",
                        lineHeight: "21px",
                        fontWeight: 400,
                      }}
                    >
                      - Our Thesis Statement
                    </p>
                  </div>
                </FadeContent>

                {/* Statistics Grid - Large Tablet 4x1 layout (scaled cards) */}
                <FadeContent
                  duration={1200}
                  delay={800}
                  className="grid grid-cols-4 w-full"
                  style={{ gap: "21px" }}
                >
                  {/* Statistics Card 1 (scaled: 286px × 306px → 254px × 272px) */}
                  <FadeContent
                    duration={300}
                    delay={1000}
                    className="flex flex-col items-center gap-[9px]"
                    style={{
                      width: "254px",
                      height: "272px",
                      paddingLeft: "14px",
                      paddingRight: "14px",
                      paddingTop: "32px",
                      paddingBottom: "32px",
                    }}
                  >
                    <div
                      className="flex flex-col items-center w-full"
                      style={{ gap: "14px" }}
                    >
                      {/* Statistics Number (scaled: 48px → 43px) */}
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "43px",
                          lineHeight: "39px",
                          letterSpacing: "-2%",
                          fontWeight: 800,
                        }}
                      >
                        &gt; 70%
                      </div>

                      <div
                        className="flex flex-col items-center w-full"
                        style={{ gap: "5px" }}
                      >
                        {/* Statistics Title (scaled: 17px → 15px) */}
                        <h4
                          className=" font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "15px",
                            lineHeight: "21px",
                            fontWeight: 700,
                          }}
                        >
                          Global Carbon Budget Utilised
                        </h4>

                        {/* Statistics Description (scaled: 12px → 11px) */}
                        <p
                          className=" font-normal text-white text-center"
                          style={{
                            fontSize: "11px",
                            lineHeight: "18px",
                            fontWeight: 400,
                          }}
                        >
                          Over 70% of our global CO₂ budget has already been
                          used as of 2024 — around 2.65 trillion tonnes out of
                          the 3.67 trillion tCO₂e budget believed to limit
                          warming to safer thresholds.
                        </p>
                      </div>
                    </div>
                  </FadeContent>

                  {/* Statistics Card 2 */}
                  <FadeContent
                    duration={300}
                    delay={1100}
                    className="flex flex-col items-center gap-[9px]"
                    style={{
                      width: "254px",
                      height: "272px",
                      paddingLeft: "14px",
                      paddingRight: "14px",
                      paddingTop: "32px",
                      paddingBottom: "32px",
                    }}
                  >
                    <div
                      className="flex flex-col items-center w-full"
                      style={{ gap: "14px" }}
                    >
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "43px",
                          lineHeight: "39px",
                          letterSpacing: "-2%",
                          fontWeight: 800,
                        }}
                      >
                        42%
                      </div>

                      <div
                        className="flex flex-col items-center w-full"
                        style={{ gap: "5px" }}
                      >
                        <h4
                          className=" font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "15px",
                            lineHeight: "21px",
                            fontWeight: 700,
                          }}
                        >
                          Emissions Rate Reduction Needed
                        </h4>

                        <p
                          className=" font-normal text-white text-center"
                          style={{
                            fontSize: "11px",
                            lineHeight: "18px",
                            fontWeight: 400,
                          }}
                        >
                          To achieve 1.5°C targets, the IPCC recommends that
                          global GHG emissions must fall by at least 42% from
                          2019 levels by 2030. Instead, global annual emissions
                          were ~3.6% higher in 2024.
                        </p>
                      </div>
                    </div>
                  </FadeContent>

                  {/* Statistics Card 3 */}
                  <FadeContent
                    duration={300}
                    delay={1200}
                    className="flex flex-col items-center gap-[9px]"
                    style={{
                      width: "254px",
                      height: "272px",
                      paddingLeft: "14px",
                      paddingRight: "14px",
                      paddingTop: "32px",
                      paddingBottom: "32px",
                    }}
                  >
                    <div
                      className="flex flex-col items-center w-full"
                      style={{ gap: "14px" }}
                    >
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "43px",
                          lineHeight: "39px",
                          letterSpacing: "-2%",
                          fontWeight: 800,
                        }}
                      >
                        5-10x
                      </div>

                      <div
                        className="flex flex-col items-center w-full"
                        style={{ gap: "5px" }}
                      >
                        <h4
                          className=" font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "15px",
                            lineHeight: "21px",
                            fontWeight: 700,
                          }}
                        >
                          Scale Up in Human-Led Removals
                        </h4>

                        <p
                          className=" font-normal text-white text-center"
                          style={{
                            fontSize: "11px",
                            lineHeight: "18px",
                            fontWeight: 400,
                          }}
                        >
                          Anthropogenic CO₂ removals amount to ~ 2 GtCO₂ per
                          year today. A multifold scale-up is needed this
                          century to meet climate targets and balance residual
                          emissions.
                        </p>
                      </div>
                    </div>
                  </FadeContent>

                  {/* Statistics Card 4 */}
                  <FadeContent
                    duration={300}
                    delay={1300}
                    className="flex flex-col items-center gap-[9px]"
                    style={{
                      width: "254px",
                      height: "272px",
                      paddingLeft: "14px",
                      paddingRight: "14px",
                      paddingTop: "32px",
                      paddingBottom: "32px",
                    }}
                  >
                    <div
                      className="flex flex-col items-center w-full"
                      style={{ gap: "14px" }}
                    >
                      <div
                        className="font-avenir text-[#9DAE83] text-center"
                        style={{
                          fontSize: "43px",
                          lineHeight: "39px",
                          letterSpacing: "-2%",
                          fontWeight: 800,
                        }}
                      >
                        2042-45
                      </div>

                      <div
                        className="flex flex-col items-center w-full"
                        style={{ gap: "5px" }}
                      >
                        <h4
                          className=" font-bold text-[#9DAE83] text-center"
                          style={{
                            fontSize: "15px",
                            lineHeight: "21px",
                            fontWeight: 700,
                          }}
                        >
                          Complete Budget
                          <br />
                          Depletion
                        </h4>

                        <p
                          className=" font-normal text-white text-center"
                          style={{
                            fontSize: "11px",
                            lineHeight: "18px",
                            fontWeight: 400,
                          }}
                        >
                          At current rates, the global CO₂ budget could be fully
                          depleted by 2042, unless urgent action is taken to
                          scale removals and cut emissions dramatically.
                        </p>
                      </div>
                    </div>
                  </FadeContent>
                </FadeContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUsBannerDesktop;
