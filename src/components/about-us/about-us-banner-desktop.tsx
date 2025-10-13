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
      <div className="hidden md:block relative overflow-hidden">
        {/* Main Banner Section with Flex Layout - scales 768px: 622px → 1440px: 840px → 1920px: 1079px */}
        <div
          className="relative w-full overflow-hidden bg-[#121212]"
          style={{
            minHeight: "clamp(622px, calc(317.333px + 39.670vw), 1079px)",
          }}
        >
          {/* Background Image - scales 768px: 958x681px → 1440px: 1440x820px → 1920px: 1920x1080px → centered with overflow hidden */}
          <div
            className="absolute left-0 right-0 overflow-hidden md:top-[85px] 3xl:top-[123px]"
            style={{
              height: "clamp(537px, calc(232.333px + 39.670vw), 994px)",
            }}
          >
            <Image
              src={AboutUsBannerBgDesktop}
              alt="About Us Banner Background"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay - bottom to top - full screen */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.06) 28.85%, rgba(0, 0, 0, 0.111) 53.37%, rgba(0, 0, 0, 0.3) 100%)",
              }}
            />
            {/* Gradient overlay - left to right - scales 768px: 670px → 1440px: 670px → 1920px: 1800px */}
            <div
              className="absolute top-0 left-0 bottom-0"
              style={{
                width:
                  "clamp(670.03515625px, calc(670.03515625px + (1800px - 670.03515625px) * ((100vw - 1440px) / (1920px - 1440px))), 1800px)",
                background:
                  "linear-gradient(92.27deg, #000000 28.03%, rgba(0, 0, 0, 0) 94.19%)",
              }}
            />
          </div>

          {/* Navigation + Content Layout */}
          <div className="relative z-20 flex flex-col gap-0">
            {/* Header - Navigation Menu - Full Width */}
            <div className="w-full md:h-[85px] xxl:h-[123px] md:mt-[37px] 2xl:mt-0">
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
            <div className="max-w-[1920px] mx-auto w-full">
              {/* Spacing between Navigation and Content - 62px */}
              <div className="w-full h-[116px]"></div>

              {/* Flex Container - Sidebar and Content side by side with 42px gap */}
              <div
                className="w-full flex gap-[40px] justify-end items-end"
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
                          left: "calc(clamp(60px, 1.7vw, 100px) - clamp(37px, 3.958vw, 60px))",
                          width: "clamp(219px, 24.31vw, 393px)",
                          height: "clamp(244px, calc(27.08vw - 17px), 427px)",
                          background: "rgba(175, 175, 175, 0.2)",
                        }}
                      />
                      {/* Image - scales proportionally: 768px (213x334px) → 1440px (329x527px) → max (375x600px) */}
                      <div
                        className="absolute top-0 overflow-hidden"
                        style={{
                          width: "clamp(213px, 22.85vw, 375px)",
                          height: "clamp(334px, 36.6vw, 600px)",
                          left: "clamp(80px, 1.7vw, 100px)",
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
                      {/* Mission Section - scales 768px: 21px/30px → 1440px: 18px/100% → 1920px: 20px/100% */}
                      <div className="flex flex-col md:gap-[6px] xxl:gap-[14px] 3xl:gap-[18px]">
                        <h2
                          className="text-white md:font-open-sans xl:font-work-sans xxl:font-avenir-heavy"
                          style={{
                            fontSize:
                              "clamp(18px, calc(21px + (20px - 21px) * ((100vw - 768px) / (1920px - 768px))), 20px)",
                            lineHeight:
                              "clamp(100%, calc(30px + (100% - 30px) * ((100vw - 768px) / (1440px - 768px))), 30px)",
                            fontWeight:
                              "clamp(600, calc(700 + (600 - 700) * ((100vw - 768px) / (1440px - 768px))), 700)",
                          }}
                        >
                          Mission
                        </h2>
                        <p
                          className="font-open-sans font-normal text-[#C4CCD3]"
                          style={{
                            fontSize:
                              "clamp(12px, calc(12px + (16px - 12px) * ((100vw - 768px) / (1920px - 768px))), 17px)",
                            lineHeight:
                              "clamp(20px, calc(20px + (180% - 20px) * ((100vw - 768px) / (1440px - 768px))), 180%)",
                            fontWeight: 400,
                          }}
                        >
                          To expand the global supply of high-quality carbon
                          offsets through disciplined project execution and deep
                          capital market expertise, with technology as a
                          supporting enabler.
                        </p>
                      </div>

                      {/* Vision Section - scales 768px: 21px/30px → 1440px: 18px/100% → 1920px: 20px/100% */}
                      <div className="flex flex-col md:gap-[6px] xxl:gap-[14px] 3xl:gap-[18px]">
                        <h2
                          className="text-white md:font-open-sans xl:font-work-sans xxl:font-avenir-heavy"
                          style={{
                            fontSize:
                              "clamp(18px, calc(21px + (20px - 21px) * ((100vw - 768px) / (1920px - 768px))), 20px)",
                            lineHeight:
                              "clamp(100%, calc(30px + (100% - 30px) * ((100vw - 768px) / (1440px - 768px))), 30px)",
                            fontWeight:
                              "clamp(600, calc(700 + (600 - 700) * ((100vw - 768px) / (1440px - 768px))), 700)",
                          }}
                        >
                          Vision
                        </h2>
                        <p
                          className="font-open-sans font-normal text-[#C4CCD3]"
                          style={{
                            fontSize:
                              "clamp(12px, calc(12px + (16px - 12px) * ((100vw - 768px) / (1920px - 768px))), 17px)",
                            lineHeight:
                              "clamp(20px, calc(20px + (180% - 20px) * ((100vw - 768px) / (1440px - 768px))), 180%)",
                            fontWeight: 400,
                          }}
                        >
                          To become Southeast Asia&apos;s leading nature-based
                          solutions specialist, trusted globally for investing
                          in, developing, operating, and delivering premium
                          carbon offsets to both voluntary and compliance
                          markets.
                        </p>
                      </div>
                    </div>
                  </FadeContent>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Banner Section with Smooth Transition - scales 768px: 877px → 1268px: 877px → 1440px: 744px → 1920px: 992px */}
        <div
          className="relative w-full z-10 mx-auto justify-center items-center flex"
          style={{
            height:
              "clamp(744px, max(min(877px, calc(877px - 133 * (100vw - 1268px) / 172)), calc(744px + 248 * (100vw - 1440px) / 480)), 992px)",
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={AboutUsBannerSecondBgDesktop}
              alt="Secondary Banner Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay Gradients - Top 460px height */}
          <div
            className="absolute top-0 left-0 right-0 z-20"
            style={{
              height: "460px",
              background:
                "linear-gradient(180deg, #000000 31.25%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          {/* Content - scales 768px: 674x788px → 1280px: 788px → 1440px: 1306x689px → 1920px: 1835x815px */}
          <div
            className="relative z-30 flex justify-center mx-auto xxl:mb-[100px]"
            style={{
              background: "#0000004D",
              width: "clamp(674px, calc(-100px + 100.78125vw), 1835px)",
              height:
                "clamp(689px, max(min(788px, calc(788px - 99 * (100vw - 1280px) / 160)), calc(689px + 126 * (100vw - 1440px) / 480)), 845px)",
              paddingTop: "clamp(44px, calc(-52px + 7.5vw), 56px)",
              paddingBottom: "clamp(44px, calc(-532px + 45vw), 116px)",
            }}
          >
            <div className="flex flex-col gap-[32px] xl:gap-[60px] w-full">
              {/* Thesis Section - md: 768px-1280px fixed 0px → xl: 1280px-2200px scales 102px-175px */}
              <FadeContent
                duration={1000}
                delay={600}
                className="flex items-start justify-start gap-[32px] pr-0 pl-0 pt-0 xl:pt-[43px] pb-0"
                style={{
                  paddingLeft: "clamp(0px, calc(-1305.6px + 110.156vw), 175px)",
                }}
              >
                {/* Decorative Line */}
                <div className="w-0 h-[180px] 3xl:h-[270px] border-l-4 border-[#CFD5DB] xl:border-[#B4BEC7] flex-shrink-0" />

                <div className="flex flex-col gap-[20px] md:max-w-[616px] xxl:max-w-[744px] 3xl:max-w-[960px]">
                  {/* Thesis Statement - 768px: OS 700 16px 1.4em #DDE2E6 → 1440px: WS 600 24px 1.4em #B4BEC7 → 1920px: WS 600 32px 1.3125em #B4BEC7 */}
                  <p
                    className="md:font-open-sans xl:font-work-sans leading-normal md:text-[#DDE2E6] xl:text-[#B4BEC7] xxl:font-avenir-heavy"
                    style={{
                      fontSize:
                        "clamp(16px, calc(16px + 16 * max(0px, 100vw - 1440px) / 480), 33px)",
                    }}
                  >
                    <span className="md:font-bold xl:font-semibold xxl:font-normal">
                      The urgency of climate change has outpaced the global
                      capacity to decarbonize. Without a dramatic scale-up in
                      high-quality carbon offsets, there is little chance of
                      meeting net-zero ambitions before breaching the carbon
                      budget.
                    </span>
                  </p>
                  {/* Attribution - 768px: OS 400 16px 1.5em → 1440px: OS 300 14px 1.7143em → 1920px: OS 300 16px 1.5em */}
                  <p
                    className="font-open-sans text-[#ABAEB0]"
                    style={{
                      fontWeight:
                        "clamp(300, calc(400 - 100 * max(0px, 100vw - 1280px) / 160), 400)",
                      fontSize:
                        "clamp(14px, calc(16px - 2 * min(160px, max(0px, 100vw - 1280px)) / 160 + 2 * max(0px, 100vw - 1440px) / 480), 15px)",
                      lineHeight:
                        "clamp(1.5em, calc(1.5em + 0.2143em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.2143em * max(0px, 100vw - 1440px) / 480), 1.7143em)",
                    }}
                  >
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
                {/* Statistics Card 1 - 768px: 324x264px → 1440px: 286x306px → 1920px: 342x306px */}
                <FadeContent
                  duration={300}
                  delay={1000}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{
                    width:
                      "clamp(286px, max(min(324px, calc(324px - 38 * (100vw - 1280px) / 160)), calc(286px + 56 * (100vw - 1440px) / 480)), 342px)",
                    height:
                      "clamp(264px, calc(264px + 42 * min(160px, max(0px, 100vw - 1280px)) / 160), 306px)",
                  }}
                >
                  <div className="flex flex-col items-center gap-[16px] xl:gap-[20px] w-full">
                    {/* Statistics Number - 768px: Avenir 800 48px 0.9167em → 1440px: OS 700 48px 0.9167em → 1920px: OS 700 60px 1.3618em */}
                    <div
                      className="md:font-avenir xl:font-open-sans text-[#9DAE83] text-center font-[700]"
                      style={{
                        fontSize:
                          "clamp(48px, calc(48px + 12 * max(0px, 100vw - 1440px) / 480), 60px)",
                        lineHeight:
                          "clamp(0.9167em, calc(0.9167em + 0.4451em * max(0px, 100vw - 1440px) / 480), 1.3618em)",
                        letterSpacing: "-2%",
                      }}
                    >
                      &gt; 70%
                    </div>

                    <div className="flex flex-col items-center gap-1 w-full">
                      {/* Statistics Title - 768px: OS 700 17px 1.4118em → 1440px: OS 700 13px 1.8462em → 1920px: OS 700 18px 1.3333em */}
                      <h4
                        className="font-open-sans text-[#9DAE83] text-center font-[700]"
                        style={{
                          fontSize:
                            "clamp(13px, calc(17px - 4 * min(160px, max(0px, 100vw - 1280px)) / 160 + 5 * max(0px, 100vw - 1440px) / 480), 17px)",
                          lineHeight:
                            "clamp(1.3333em, calc(1.4118em + 0.4344em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.5129em * max(0px, 100vw - 1440px) / 480), 1.8462em)",
                        }}
                      >
                        Global Carbon Budget Utilised
                      </h4>

                      {/* Statistics Description - 768px: OS 400 12px 1.6667em → 1440px: OS 400 13px 1.5385em → 1920px: OS 400 18px 1.3618em */}
                      <p
                        className="font-open-sans font-normal text-[#BFBFBF] text-center"
                        style={{
                          fontSize:
                            "clamp(12px, calc(12px + 1 * min(160px, max(0px, 100vw - 1280px)) / 160 + 5 * max(0px, 100vw - 1440px) / 480), 18px)",
                          lineHeight:
                            "clamp(1.3618em, calc(1.6667em - 0.1282em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.1767em * max(0px, 100vw - 1440px) / 480), 1.6667em)",
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

                {/* Statistics Card 2 - 768px: 324x264px → 1440px: 286x306px → 1920px: 342x306px */}
                <FadeContent
                  duration={300}
                  delay={1100}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{
                    width:
                      "clamp(286px, max(min(324px, calc(324px - 38 * (100vw - 1280px) / 160)), calc(286px + 56 * (100vw - 1440px) / 480)), 392px)",
                    height:
                      "clamp(264px, calc(264px + 42 * min(160px, max(0px, 100vw - 1280px)) / 160), 306px)",
                  }}
                >
                  <div className="flex flex-col items-center gap-[16px] xl:gap-[20px] w-full">
                    {/* Statistics Number - 768px: Avenir 800 48px 0.9167em → 1440px: OS 700 48px 0.9167em → 1920px: OS 700 60px 1.3618em */}
                    <div
                      className="md:font-avenir xl:font-open-sans text-[#9DAE83] text-center font-[700]"
                      style={{
                        fontSize:
                          "clamp(48px, calc(48px + 12 * max(0px, 100vw - 1440px) / 480), 60px)",
                        lineHeight:
                          "clamp(0.9167em, calc(0.9167em + 0.4451em * max(0px, 100vw - 1440px) / 480), 1.3618em)",
                        letterSpacing: "-2%",
                      }}
                    >
                      42%
                    </div>

                    <div className="flex flex-col items-center gap-1 w-full">
                      {/* Statistics Title - 768px: OS 700 17px 1.4118em → 1440px: OS 700 13px 1.8462em → 1920px: OS 700 18px 1.3333em */}
                      <h4
                        className="font-open-sans text-[#9DAE83] text-center font-[700]"
                        style={{
                          fontSize:
                            "clamp(13px, calc(17px - 4 * min(160px, max(0px, 100vw - 1280px)) / 160 + 5 * max(0px, 100vw - 1440px) / 480), 17px)",
                          lineHeight:
                            "clamp(1.3333em, calc(1.4118em + 0.4344em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.5129em * max(0px, 100vw - 1440px) / 480), 1.8462em)",
                        }}
                      >
                        Emissions Rate Reduction Needed
                      </h4>

                      {/* Statistics Description - 768px: OS 400 12px 1.6667em → 1440px: OS 400 13px 1.5385em → 1920px: OS 400 18px 1.3618em */}
                      <p
                        className="font-open-sans font-normal text-[#BFBFBF] text-center"
                        style={{
                          fontSize:
                            "clamp(12px, calc(12px + 1 * min(160px, max(0px, 100vw - 1280px)) / 160 + 5 * max(0px, 100vw - 1440px) / 480), 18px)",
                          lineHeight:
                            "clamp(1.3618em, calc(1.6667em - 0.1282em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.1767em * max(0px, 100vw - 1440px) / 480), 1.6667em)",
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

                {/* Statistics Card 3 - 768px: 324x264px → 1440px: 286x306px → 1920px: 342x306px */}
                <FadeContent
                  duration={300}
                  delay={1200}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{
                    width:
                      "clamp(286px, max(min(324px, calc(324px - 38 * (100vw - 1280px) / 160)), calc(286px + 56 * (100vw - 1440px) / 480)), 342px)",
                    height:
                      "clamp(264px, calc(264px + 42 * min(160px, max(0px, 100vw - 1280px)) / 160), 306px)",
                  }}
                >
                  <div className="flex flex-col items-center gap-[16px] xl:gap-[20px] w-full">
                    {/* Statistics Number - 768px: Avenir 800 48px 0.9167em → 1440px: OS 700 48px 0.9167em → 1920px: OS 700 60px 1.3618em */}
                    <div
                      className="md:font-avenir xl:font-open-sans text-[#9DAE83] text-center font-[700]"
                      style={{
                        fontSize:
                          "clamp(48px, calc(48px + 12 * max(0px, 100vw - 1440px) / 480), 60px)",
                        lineHeight:
                          "clamp(0.9167em, calc(0.9167em + 0.4451em * max(0px, 100vw - 1440px) / 480), 1.3618em)",
                        letterSpacing: "-2%",
                      }}
                    >
                      5-10x
                    </div>

                    <div className="flex flex-col items-center gap-1 w-full">
                      {/* Statistics Title - 768px: OS 700 17px 1.4118em → 1440px: OS 700 13px 1.8462em → 1920px: OS 700 18px 1.3333em */}
                      <h4
                        className="font-open-sans text-[#9DAE83] text-center font-[700]"
                        style={{
                          fontSize:
                            "clamp(13px, calc(17px - 4 * min(160px, max(0px, 100vw - 1280px)) / 160 + 5 * max(0px, 100vw - 1440px) / 480), 17px)",
                          lineHeight:
                            "clamp(1.3333em, calc(1.4118em + 0.4344em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.5129em * max(0px, 100vw - 1440px) / 480), 1.8462em)",
                        }}
                      >
                        Scale Up in Human-Led Removals
                      </h4>

                      {/* Statistics Description - 768px: OS 400 12px 1.6667em → 1440px: OS 400 13px 1.5385em → 1920px: OS 400 18px 1.3618em */}
                      <p
                        className="font-open-sans font-normal text-[#BFBFBF] text-center"
                        style={{
                          fontSize:
                            "clamp(12px, calc(12px + 1 * min(160px, max(0px, 100vw - 1280px)) / 160 + 5 * max(0px, 100vw - 1440px) / 480), 18px)",
                          lineHeight:
                            "clamp(1.3618em, calc(1.6667em - 0.1282em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.1767em * max(0px, 100vw - 1440px) / 480), 1.6667em)",
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

                {/* Statistics Card 4 - 768px: 324x264px → 1440px: 286x306px → 1920px: 342x306px */}
                <FadeContent
                  duration={300}
                  delay={1300}
                  className="flex flex-col items-center gap-[10px] px-[16px] py-[36px]"
                  style={{
                    width:
                      "clamp(286px, max(min(324px, calc(324px - 38 * (100vw - 1280px) / 160)), calc(286px + 56 * (100vw - 1440px) / 480)), 342px)",
                    height:
                      "clamp(264px, calc(264px + 42 * min(160px, max(0px, 100vw - 1280px)) / 160), 306px)",
                  }}
                >
                  <div className="flex flex-col items-center gap-[16px] xl:gap-[20px] w-full">
                    {/* Statistics Number - 768px: Avenir 800 48px 0.9167em → 1440px: OS 700 48px 0.9167em → 1920px: OS 700 60px 1.3618em */}
                    <div
                      className="md:font-avenir xl:font-open-sans text-[#9DAE83] text-center font-[700]"
                      style={{
                        fontSize:
                          "clamp(48px, calc(48px + 12 * max(0px, 100vw - 1440px) / 480), 60px)",
                        lineHeight:
                          "clamp(0.9167em, calc(0.9167em + 0.4451em * max(0px, 100vw - 1440px) / 480), 1.3618em)",
                        letterSpacing: "-2%",
                      }}
                    >
                      2042-45
                    </div>

                    <div className="flex flex-col items-center gap-1 w-full">
                      {/* Statistics Title - 768px: OS 700 17px 1.4118em → 1440px: OS 700 13px 1.8462em → 1920px: OS 700 18px 1.3333em */}
                      <h4
                        className="font-open-sans text-[#9DAE83] text-center font-[700]"
                        style={{
                          fontSize:
                            "clamp(13px, calc(17px - 4 * min(160px, max(0px, 100vw - 1280px)) / 160 + 5 * max(0px, 100vw - 1440px) / 480), 17px)",
                          lineHeight:
                            "clamp(1.3333em, calc(1.4118em + 0.4344em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.5129em * max(0px, 100vw - 1440px) / 480), 1.8462em)",
                        }}
                      >
                        Complete Budget Depletion
                      </h4>

                      {/* Statistics Description - 768px: OS 400 12px 1.6667em → 1440px: OS 400 13px 1.5385em → 1920px: OS 400 18px 1.3618em */}
                      <p
                        className="font-open-sans font-normal text-[#BFBFBF] text-center"
                        style={{
                          fontSize:
                            "clamp(12px, calc(12px + 1 * min(160px, max(0px, 100vw - 1280px)) / 160 + 5 * max(0px, 100vw - 1440px) / 480), 18px)",
                          lineHeight:
                            "clamp(1.3618em, calc(1.6667em - 0.1282em * min(160px, max(0px, 100vw - 1280px)) / 160 - 0.1767em * max(0px, 100vw - 1440px) / 480), 1.6667em)",
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
