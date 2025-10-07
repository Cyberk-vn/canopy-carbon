"use client";

import Image from "next/image";
import { NavigationMenu } from "@/src/components/common/navigation-menu";
import { AboutUsBannerProps } from "@/src/types/banner";
import { Container } from "../shared";
import FadeContent from "../animation/fade-content";

// Image imports
import AboutUsBannerBgDesktop from "../../../public/assets/desktop/about-us/contact-us-banner-bg-image.png";
import BannerChildImage from "../../../public/assets/about-us/banner-child-image.png";
import AboutUsBannerSecondBgDesktop from "../../../public/assets/desktop/about-us/contact-us-banner-second-bg.svg";

export function AboutUsBannerDesktop({
  menuItems,
  logoUrl,
  mobileMenuStyles,
}: AboutUsBannerProps) {
  return (
    <Container maxWidth="full">
      <div className="hidden md:block relative">
        {/* Main Banner Section with Flex Layout - scales 768px: 607px → 1440px: 925px (522px+85px → 840px+85px) */}
        <div
          className="relative w-full overflow-hidden bg-[#121212]"
          style={{
            minHeight: "clamp(607px, calc(243px + 47.32vw), 925px)",
          }}
        >
          {/* Background Image - scales 768px: 958x581px → 1440px: 1440x840px → full screen width */}
          <div
            className="absolute left-0 right-0 overflow-hidden"
            style={{
              top: "85px",
              height: "clamp(581px, calc(285px + 38.54vw), 1350px)",
            }}
          >
            <Image
              src={AboutUsBannerBgDesktop}
              alt="About Us Banner Background"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay - left to right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(92.27deg, #000000 28.03%, rgba(0, 0, 0, 0) 94.19%)",
              }}
            />
          </div>

          {/* Navigation + Content Layout */}
          <div className="relative z-20 flex flex-col gap-0">
            {/* Header - Navigation Menu - Full Width */}
            <div className="w-full h-[85px]">
              <NavigationMenu
                menuItems={menuItems}
                logoUrl={logoUrl}
                mobileMenuIconColor="#8C8C8C"
                mobileMenuStyles={mobileMenuStyles}
                activeItem="About Us"
                useAboutUsDesign={true}
              />
            </div>

            {/* Content with Max Width */}
            <div className="max-w-[2200px] mx-auto w-full">
              {/* Spacing between Navigation and Content - 62px */}
              <div className="w-full h-[62px]"></div>

              {/* Flex Container - Sidebar and Content side by side with 42px gap */}
              <div
                className="w-full flex gap-[42px]"
                style={{
                  paddingLeft: "clamp(27px, 3.54vw, 58px)",
                  paddingRight: "clamp(60px, 8.33vw, 120px)",
                }}
              >
              {/* Sidebar - Decorative Image Card Effect - Container encompasses image + decorator bounds */}
              <div
                style={{
                  flexShrink: 0,
                  width: "clamp(250px, 26.808vw, 462px)",
                  height: "clamp(368px, calc(34px + 36.6vw), 634px)",
                  position: "relative",
                }}
              >
                <FadeContent duration={600} delay={200}>
                  <div className="relative w-full h-full">
                    {/* Background decorator - 768px: 219px→1440px: 350px→max: 393x427px, top: 124px→188px, extends left from image, always 34px below image */}
                    <div
                      className="absolute"
                      style={{
                        top: "clamp(124px, calc(51px + 9.52vw), 207px)",
                        left: "calc(clamp(60px, 1.7vw, 100px) - clamp(37px, 3.958vw, 87px))",
                        width: "clamp(219px, 24.31vw, 393px)",
                        height: "clamp(244px, calc(27.08vw - 17px), 427px)",
                        background: "rgba(175, 175, 175, 0.3)",
                      }}
                    />
                    {/* Image - scales proportionally: 768px (213x334px) → 1440px (329x527px) → max (375x600px) */}
                    <div
                      className="absolute top-0 overflow-hidden"
                      style={{
                        width: "clamp(213px, 22.85vw, 375px)",
                        height: "clamp(334px, 36.6vw, 600px)",
                        left: "clamp(60px, 1.7vw, 100px)",
                      }}
                    >
                      <Image
                        src={BannerChildImage}
                        alt="Decorative Banner Element"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </FadeContent>
              </div>

              {/* Content - Mission and Vision */}
              <div
                className="flex-1"
                style={{
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  paddingBottom: "71px",
                }}
              >
                <FadeContent duration={800} delay={400}>
                  <div className="flex flex-col gap-[32px] w-full max-w-[714px]">
                    {/* Mission Section - scales 768px→1440px→2200px */}
                    <div className="flex flex-col gap-[6px]">
                      <h2
                        className="font-open-sans font-bold text-white"
                        style={{
                          fontSize:
                            "clamp(18px, calc(24.43px - 0.446vw), 21px)",
                          lineHeight:
                            "clamp(18px, calc(43.71px - 1.786vw), 30px)",
                          fontWeight: 700,
                        }}
                      >
                        Mission
                      </h2>
                      <p
                        className="font-open-sans font-normal text-white"
                        style={{
                          fontSize:
                            "clamp(12px, calc(9.714px + 0.298vw), 16px)",
                          lineHeight:
                            "clamp(20px, calc(14.057px + 0.774vw), 31px)",
                          fontWeight: 400,
                        }}
                      >
                        To expand the global supply of high-quality carbon
                        offsets through disciplined project execution and deep
                        capital market expertise, with technology as a
                        supporting enabler.
                      </p>
                    </div>

                    {/* Vision Section - scales 768px→1440px→2200px */}
                    <div className="flex flex-col gap-[6px]">
                      <h2
                        className="font-open-sans font-bold text-white"
                        style={{
                          fontSize:
                            "clamp(18px, calc(24.43px - 0.446vw), 21px)",
                          lineHeight:
                            "clamp(18px, calc(43.71px - 1.786vw), 30px)",
                          fontWeight: 700,
                        }}
                      >
                        Vision
                      </h2>
                      <p
                        className="font-open-sans font-normal text-white"
                        style={{
                          fontSize:
                            "clamp(12px, calc(9.714px + 0.298vw), 16px)",
                          lineHeight:
                            "clamp(20px, calc(14.057px + 0.774vw), 31px)",
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
            </div>
          </div>
        </div>

        {/* Secondary Banner Section with Smooth Transition - 768-1280px: 877px → 1280px+: 744px fixed */}
        <div className="relative w-full z-10 -mt-10 mx-auto justify-center items-center flex md:h-[877px] xl:h-[744px]">
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

          {/* Content - 768-1280px: fixed, 1280-1440px: scales */}
          <div
            className="relative z-30 flex justify-center max-w-[2200px] mx-auto w-full xl:mb-[111px]"
            style={{
              background: "#0000004D",
              marginLeft: "clamp(35px, calc(-221px + 20vw), 67px)",
              marginRight: "clamp(35px, calc(-221px + 20vw), 67px)",
              height: "clamp(640px, calc(1972px - 92.5vw), 788px)",
              paddingTop: "clamp(44px, calc(-52px + 7.5vw), 56px)",
              paddingBottom: "clamp(44px, calc(-532px + 45vw), 116px)",
            }}
          >
            <div className="flex flex-col gap-[32px] xl:gap-[60px] w-full">
              {/* Thesis Section - md: 768px-1280px fixed 0px → xl: 1280px-2200px scales 102px-175px */}
              <FadeContent
                duration={1000}
                delay={600}
                className="flex items-center justify-start gap-[24px] pr-0 pl-0 pt-0 xl:pt-[43px] pb-0"
                style={{
                  paddingLeft: "clamp(0px, calc(-1305.6px + 110.156vw), 175px)",
                }}
              >
                {/* Decorative Line */}
                <div className="w-0 h-[180px] border-l-4 border-[#CFD5DB] xl:border-[#B4BEC7] flex-shrink-0" />

                <div className="flex flex-col gap-[20px] max-w-[744px]">
                  <p
                    className="font-open-sans xl:font-work-sans text-[#DDE2E6] xl:text-[#B4BEC7]"
                    style={{
                      fontSize: "clamp(16px, calc(4.86px + 1.19vw), 24px)",
                      lineHeight: "140%",
                    }}
                  >
                    <span className="font-bold xl:font-semibold">
                      The urgency of climate change has outpaced the global
                      capacity to decarbonize. Without a dramatic scale-up in
                      high-quality carbon offsets, there is little chance of
                      meeting net-zero ambitions before breaching the carbon
                      budget.
                    </span>
                  </p>
                  <p className="font-open-sans text-[#D8DBD6] text-[16px] leading-[24px] font-normal xl:text-[14px] xl:leading-[171.4%] xl:font-light">
                    - Our Thesis Statement
                  </p>
                </div>
              </FadeContent>

              {/* Statistics Cards Grid - 2x2 on 768px-1280px, 4 cols on 1440px+ */}
              <FadeContent
                duration={1200}
                delay={800}
                className="grid grid-cols-2 xl:grid-cols-4 gap-[24px] w-full justify-items-center"
              >
                {/* Statistics Card 1 - 768-1280px: 324x264px → 1440px: 286x306px */}
                <FadeContent
                  duration={300}
                  delay={1000}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{
                    width: "clamp(286px, calc(628px - 23.75vw), 324px)",
                    height: "clamp(264px, calc(-72px + 26.25vw), 306px)",
                  }}
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
                        className="font-open-sans font-bold text-[#9DAE83] text-center"
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
                        className="font-open-sans font-normal text-white text-center"
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

                {/* Statistics Card 2 - 768-1280px: 324x264px → 1440px: 286x306px */}
                <FadeContent
                  duration={300}
                  delay={1100}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{
                    width: "clamp(286px, calc(628px - 23.75vw), 324px)",
                    height: "clamp(264px, calc(-72px + 26.25vw), 306px)",
                  }}
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
                        className="font-open-sans font-bold text-[#9DAE83] text-center"
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
                        className="font-open-sans font-normal text-white text-center"
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

                {/* Statistics Card 3 - 768-1280px: 324x264px → 1440px: 286x306px */}
                <FadeContent
                  duration={300}
                  delay={1200}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{
                    width: "clamp(286px, calc(628px - 23.75vw), 324px)",
                    height: "clamp(264px, calc(-72px + 26.25vw), 306px)",
                  }}
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
                        className="font-open-sans font-bold text-[#9DAE83] text-center"
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
                        className="font-open-sans font-normal text-white text-center"
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

                {/* Statistics Card 4 - 768-1280px: 324x264px → 1440px: 286x306px */}
                <FadeContent
                  duration={300}
                  delay={1300}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{
                    width: "clamp(286px, calc(628px - 23.75vw), 324px)",
                    height: "clamp(264px, calc(-72px + 26.25vw), 306px)",
                  }}
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
                        className="font-open-sans font-bold text-[#9DAE83] text-center"
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
                        className="font-open-sans font-normal text-white text-center"
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
    </Container>
  );
}

export default AboutUsBannerDesktop;
