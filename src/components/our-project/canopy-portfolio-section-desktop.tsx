"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useSimpleMotion } from "@/src/hooks/responsive/use-simple-motion";

// Image imports
import PortfolioBackground1 from "../../../public/assets/desktop/our-projects/portfolio-background-1-536692.png";
import PortfolioBackground2 from "../../../public/assets/desktop/our-projects/portfolio-background-2-77a3ad.png";
import PortfolioImage1 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-1.png";
import PortfolioImage2 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-2.png";
import PortfolioImage3 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-3.png";
import PortfolioImage4 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-4.png";
import PortfolioImage5 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-5.png";

interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: StaticImageData;
  readMoreLink?: string;
  isComingSoon?: boolean;
}

// Responsive scaling helper for tablet range (768px → 1280px)
const createResponsiveValueTablet = (
  value768: number,
  value1280: number
): string => {
  return `clamp(${value768}px, calc(${value768}px + (${value1280} - ${value768}) * ((100vw - 768px) / 512)), ${value1280}px)`;
};

// Responsive scaling helper for desktop range (1440px → 1920px)
const createResponsiveValueDesktop = (
  value1440: number,
  value1920: number
): string => {
  return `clamp(${value1440}px, calc(${value1440}px + (${value1920} - ${value1440}) * ((100vw - 1440px) / 480)), ${value1920}px)`;
};

const CanopyPortfolioSectionDesktop: React.FC = () => {
  const router = useRouter();
  const titleMotion = useSimpleMotion("portfolio-title");
  const cardsMotion = useSimpleMotion("portfolio-cards");
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);

  const handleContactRedirect = () => {
    router.push("/contact-us");
  };

  const portfolioProjects: PortfolioProject[] = [
    {
      id: "project-1",
      title: "CK-01 Wetland",
      location: "Pulang Pisau, Central Kalimantan",
      description:
        "A VM047 & VM007 project, CK-01 covers over 13,500 hectares with an indigenous community of 8 villages. The project integrates reforestation, forest and biodiversity conservation, and wetland restoration.",
      imageUrl: PortfolioImage1,
      readMoreLink: "#",
    },
    {
      id: "project-2",
      title: "CK-02 Wetland",
      location: "Barito Timur, Central Kalimantan",
      description:
        "A VM047 & VM007 project, CK-02 spans over 8,400 hectares and engages 8 villages. It focuses on reforestation and forest and biodiversity conservation.",
      imageUrl: PortfolioImage2,
      readMoreLink: "#",
    },
    {
      id: "project-3",
      title: "CK-03 Terrestrial",
      location: "Lamandau Central Kalimantan",
      description:
        "A VM047 & VM048 project, CK-03 covers close to 29,000 hectares. It involves 10 villages and is a large-scale reforestation initiative with supporting forest and biodiversity conservation components.",
      imageUrl: PortfolioImage3,
      readMoreLink: "#",
    },
    {
      id: "project-4",
      title: "SM-01 Biochar",
      location: "Pekanbaru, East Sumatra",
      description:
        "An agricultural waste management initiative developed in partnership with a globally recognized biochar specialist. The facility is designed to process 100 tons of input waste per day.",
      imageUrl: PortfolioImage4,
      readMoreLink: "#",
    },
    {
      id: "project-5",
      title: "Coming Soon",
      location: "More impact driven projects brewing...",
      description: "",
      imageUrl: PortfolioImage5,
      isComingSoon: true,
    },
  ];

  return (
    <>
      {/* TABLET LAYOUT (768px - 1280px) */}
      <section
        className="hidden md:block xl:hidden w-full relative bg-[#232A26] overflow-hidden"
        style={{
          height: "2040px",
        }}
      >
        {/* Top Background Section */}
        <div
          className="absolute left-0 right-0 overflow-hidden"
          style={{
            width: "100%",
            height: "411.96px",
            top: "0",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${PortfolioBackground1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60.99% 60.99% at 50% 39.01%, #000000 0%, rgba(0, 0, 0, 0.2) 6.73%, rgba(0, 0, 0, 0.2) 29.81%, #000000 86.54%)",
            }}
          />
          {/* Top Edge Fade - Smooth transition from black */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 5%, rgba(0, 0, 0, 0) 15%)",
            }}
          />
        </div>

        {/* Bottom Background Section */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: "100%",
            height: "1753.71px",
            top: "292.04px",
            left: "0",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backgroundImage: `url(${PortfolioBackground2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "normal",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.4) 57%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 98%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 mx-auto pt-[121px] px-[63px]">
          {/* Title and Description Section */}
          <motion.div
            {...titleMotion}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center mx-auto"
            style={{
              gap: createResponsiveValueTablet(24, 32),
              maxWidth: "616px",
            }}
          >
            <div
              className="flex flex-col w-full"
              style={{ gap: createResponsiveValueTablet(24, 32) }}
            >
              {/* Title */}
              <h2
                className="font-semibold text-[#EDEDED] text-left"
                style={{
                  fontSize: "36px",
                  lineHeight: "1.173em",
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                The Canopy Portfolio
              </h2>

              {/* Description */}
              <p
                className="text-[#F0F0F0] text-left"
                style={{
                  fontSize: "19px",
                  lineHeight: "1.111em",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 300,
                }}
              >
                We execute our projects alongside key partners globally
                recognised for their domain expertise.
              </p>

              {/* Decorative Line */}
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#FFFFFF",
                }}
              />
            </div>
          </motion.div>

          {/* Project Cards Grid - Flex row wrap */}
          <motion.div
            {...cardsMotion}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-row flex-wrap justify-center mx-auto"
            style={{
              gap: "24px",
              marginTop: 150,
              maxWidth: "616px",
            }}
          >
            {portfolioProjects.map((project, index) => {
              const isHovered =
                hoveredCard === project.id && !project.isComingSoon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={project.isComingSoon ? {} : { scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut",
                    },
                    y: {
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut",
                    },
                    scale: { duration: 0.3, ease: "easeOut" },
                  }}
                  onMouseEnter={() =>
                    !project.isComingSoon && setHoveredCard(project.id)
                  }
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex flex-col relative rounded-[5px] shadow-lg ${
                    !project.isComingSoon ? "cursor-pointer" : ""
                  }`}
                  style={{
                    width: "296px",
                    height: "512px",
                    overflow: "visible",
                  }}
                >
                  {/* Project Image */}
                  <div
                    className="flex-shrink-0 rounded-t-[5px] overflow-hidden"
                    style={{
                      width: "296px",
                      height: "350.12px",
                    }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={296}
                      height={350}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div
                    className={`flex flex-col absolute bottom-0 left-0 right-0 rounded-b-[5px] ${
                      project.isComingSoon
                        ? "bg-[rgba(22,34,28,0.65)]"
                        : "bg-[#16221C]"
                    }`}
                    style={{
                      width: "296px",
                      height: isHovered ? "240.92px" : "160.92px",
                      padding: "15px",
                      paddingTop: isHovered ? "25px" : "15px",
                      transition:
                        "height 0.3s ease-out, padding-top 0.3s ease-out",
                    }}
                  >
                    {/* Project Title */}
                    <h3
                      className="text-white text-left"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 900,
                        fontSize: "18px",
                        lineHeight: "1.667em",
                        marginBottom: "2px",
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Project Location */}
                    <p
                      className="text-white text-left"
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: "12px",
                        lineHeight: "1.667em",
                        marginBottom: "8px",
                      }}
                    >
                      {project.location}
                    </p>

                    {/* Project Description - Only show if not Coming Soon */}
                    {!project.isComingSoon ? (
                      <>
                        <div className="flex-grow overflow-hidden">
                          <p
                            className="text-left"
                            style={{
                              fontFamily: "'Roboto', sans-serif",
                              fontWeight: 400,
                              fontSize: "10px",
                              lineHeight: "1.4em",
                              letterSpacing: "-4%",
                              color: "#69726D",
                            }}
                          >
                            {project.description}
                          </p>
                        </div>

                        {/* Read More Button */}
                        <div
                          className="text-left flex items-center mt-2"
                          style={{
                            opacity: isHovered ? 1 : 0,
                            maxHeight: isHovered ? "50px" : "0",
                            overflow: "hidden",
                            transition:
                              "opacity 0.3s ease-out, max-height 0.3s ease-out",
                          }}
                        >
                          <button
                            className="text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: 400,
                              fontSize: "12px",
                              lineHeight: "1.5em",
                            }}
                          >
                            Read More →
                          </button>
                        </div>
                      </>
                    ) : (
                      /* Find out more Button for Coming Soon */
                      <div className="text-left flex items-center mt-2">
                        <button
                          onClick={handleContactRedirect}
                          className="text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300"
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "1.5em",
                          }}
                        >
                          Find out more →
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* DESKTOP LAYOUT (1440px - 1920px) */}
      <section
        className="hidden xl:block w-full relative bg-[#232A26]"
        style={{
          height: createResponsiveValueDesktop(1548, 2372),
        }}
      >
        {/* Top Background Section - Full Width */}
        <div
          className="absolute left-0 right-0"
          style={{
            width: "100%",
            height: createResponsiveValueDesktop(432.13, 656),
            top: "85px",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${PortfolioBackground1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute left-0 right-0"
            style={{
              top: 0,
              bottom: "50px",
              background:
                "radial-gradient(60.99% 60.99% at 50% 39.01%, #000000 0%, rgba(0, 0, 0, 0.2) 6.73%, rgba(0, 0, 0, 0.2) 29.81%, #000000 86.54%)",
            }}
          />
          {/* Top Edge Fade - Smooth transition from black */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: 0,
              bottom: "0px",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 5%, rgba(0, 0, 0, 0.4) 25%, rgba(0, 0, 0, 0) 40%)",
            }}
          />
        </div>

        {/* Bottom Background Section - Full Width */}
        <div
          className="absolute left-0 right-0"
          style={{
            width: "100%",
            height: createResponsiveValueDesktop(1160, 1766),
            top: createResponsiveValueDesktop(438, 690),
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backgroundImage: `url(${PortfolioBackground2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "normal",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 0.81) 24%, rgba(0, 0, 0, 0.4) 53%, rgba(255, 255, 255, 0) 78%, rgba(255, 255, 255, 1) 97%)",
            }}
          />
        </div>

        {/* Content Container - Max width 2200px, centered */}
        <div
          className="relative z-20 mx-auto"
          style={{
            maxWidth: "2200px",
            paddingLeft: createResponsiveValueDesktop(120, 203),
            paddingRight: createResponsiveValueDesktop(120, 203),
          }}
        >
          {/* Title and Description Section - Positioned on Top Background */}
          <motion.div
            {...titleMotion}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center mx-auto"
            style={{
              paddingTop: createResponsiveValueDesktop(175, 250),
              maxWidth: createResponsiveValueDesktop(1199, 1599),
            }}
          >
            <div
              className="flex flex-col"
              style={{
                width: createResponsiveValueDesktop(803, 1070),
              }}
            >
              {/* Title */}
              <h2
                className="font-semibold text-[#E6E6E6] text-left 3xl:font-avenir-heavy leading-normal 3xl:font-normal"
                style={{
                  fontSize: createResponsiveValueDesktop(36, 50),
                }}
              >
                The Canopy Portfolio
              </h2>

              {/* Description */}
              <p
                className="text-[#999999] text-left font-open-sans leading-[36px] font-normal"
                style={{
                  fontSize: createResponsiveValueDesktop(18, 20),
                  width: createResponsiveValueDesktop(807, 1076),
                }}
              >
                We execute our projects alongside key partners globally
                recognised for their domain expertise.
              </p>

              {/* Decorative Line */}
              <div
                className="h-[3px] bg-white mt-[8px] -ml-4"
                style={{
                  width: createResponsiveValueDesktop(948.13, 1126),
                }}
              />
            </div>
          </motion.div>

          {/* Project Cards - Staggered Layout - Positioned on Bottom Background */}
          <motion.div
            {...cardsMotion}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center w-full"
            style={{
              marginTop: createResponsiveValueDesktop(170, 342),
              gap: createResponsiveValueDesktop(89.5, 120),
            }}
          >
            {/* First Row - 3 Cards */}
            <div
              className="flex justify-center"
              style={{
                gap: createResponsiveValueDesktop(118, 160),
              }}
            >
              {portfolioProjects.slice(0, 3).map((project, index) => {
                const isHovered =
                  hoveredCard === project.id && !project.isComingSoon;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={project.isComingSoon ? {} : { scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{
                      opacity: {
                        duration: 0.5,
                        delay: 0.4 + index * 0.1,
                        ease: "easeOut",
                      },
                      y: {
                        duration: 0.5,
                        delay: 0.4 + index * 0.1,
                        ease: "easeOut",
                      },
                      scale: { duration: 0.3, ease: "easeOut" },
                    }}
                    onMouseEnter={() =>
                      !project.isComingSoon && setHoveredCard(project.id)
                    }
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`flex flex-col relative rounded-[5px] shadow-lg ${
                      !project.isComingSoon ? "cursor-pointer" : ""
                    }`}
                    style={{
                      width: createResponsiveValueDesktop(296, 398),
                      height: createResponsiveValueDesktop(512, 681),
                      overflow: "visible",
                    }}
                  >
                    {/* Project Image */}
                    <div
                      className="flex-shrink-0 rounded-t-[5px] overflow-hidden"
                      style={{
                        width: "100%",
                        height: createResponsiveValueDesktop(350.12, 464),
                      }}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={398}
                        height={464}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Content */}
                    <div
                      className={`flex flex-col absolute bottom-0 left-0 right-0 rounded-b-[5px] ${
                        project.isComingSoon
                          ? "bg-[rgba(22,34,28,0.65)]"
                          : "bg-[#16221C]"
                      }`}
                      style={{
                        width: "100%",
                        height: isHovered
                          ? `calc(${createResponsiveValueDesktop(
                              160.92,
                              217
                            )} + 80px)`
                          : createResponsiveValueDesktop(160.92, 217),
                        padding: "20px",
                        paddingTop: isHovered ? "30px" : "20px",
                        transition:
                          "height 0.3s ease-out, padding-top 0.3s ease-out",
                      }}
                    >
                      {/* Project Title */}
                      <h3
                        className="text-white text-left leading-normal"
                        style={{
                          fontFamily:
                            createResponsiveValueDesktop(1440, 1920) ===
                            createResponsiveValueDesktop(1440, 1440)
                              ? "'Roboto', sans-serif"
                              : "'Open Sans', sans-serif",
                          fontWeight:
                            createResponsiveValueDesktop(1440, 1920) ===
                            createResponsiveValueDesktop(1440, 1440)
                              ? 900
                              : 700,
                          fontSize: createResponsiveValueDesktop(18, 23),
                          marginBottom: "2px",
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Project Location */}
                      <p
                        className="text-white text-left font-normal leading-normal"
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight:
                            createResponsiveValueDesktop(1440, 1920) ===
                            createResponsiveValueDesktop(1440, 1440)
                              ? 400
                              : 600,
                          fontSize: createResponsiveValueDesktop(12, 15),
                          marginBottom: "4px",
                        }}
                      >
                        {project.location}
                      </p>

                      {/* Project Description - Only show if not Coming Soon */}
                      {!project.isComingSoon ? (
                        <>
                          <div className="flex-grow overflow-hidden">
                            <p
                              className="text-left text-[#C4C9C6] max-w-[340px]"
                              style={{
                                fontFamily:
                                  createResponsiveValueDesktop(1440, 1920) ===
                                  createResponsiveValueDesktop(1440, 1440)
                                    ? "'Roboto', sans-serif"
                                    : "'Open Sans', sans-serif",
                                fontWeight: 400,
                                fontSize: createResponsiveValueDesktop(10, 12),
                                lineHeight: "17px",
                              }}
                            >
                              {project.description}
                            </p>
                          </div>

                          {/* Read More Button */}
                          <div
                            className="text-left flex items-center mt-2"
                            style={{
                              opacity: isHovered ? 1 : 0,
                              maxHeight: isHovered ? "50px" : "0",
                              overflow: "hidden",
                              transition:
                                "opacity 0.3s ease-out, max-height 0.3s ease-out",
                            }}
                          >
                            <button
                              className="text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300"
                              style={{
                                fontFamily: "'Open Sans', sans-serif",
                                fontWeight: 400,
                                fontSize: createResponsiveValueDesktop(12, 14),
                                lineHeight: "1.5em",
                              }}
                            >
                              Read More →
                            </button>
                          </div>
                        </>
                      ) : (
                        /* Find out more Button for Coming Soon */
                        <div className="text-left flex items-center mt-2">
                          <button
                            onClick={handleContactRedirect}
                            className="text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: 400,
                              fontSize: createResponsiveValueDesktop(12, 14),
                              lineHeight: "1.5em",
                            }}
                          >
                            Find out more →
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Second Row - 2 Cards */}
            <div
              className="flex justify-center"
              style={{
                gap: createResponsiveValueDesktop(118, 160),
              }}
            >
              {portfolioProjects.slice(3, 5).map((project, index) => {
                const isHovered =
                  hoveredCard === project.id && !project.isComingSoon;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={project.isComingSoon ? {} : { scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{
                      opacity: {
                        duration: 0.5,
                        delay: 0.7 + index * 0.1,
                        ease: "easeOut",
                      },
                      y: {
                        duration: 0.5,
                        delay: 0.7 + index * 0.1,
                        ease: "easeOut",
                      },
                      scale: { duration: 0.3, ease: "easeOut" },
                    }}
                    onMouseEnter={() =>
                      !project.isComingSoon && setHoveredCard(project.id)
                    }
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`flex flex-col relative rounded-[5px] shadow-lg ${
                      !project.isComingSoon ? "cursor-pointer" : ""
                    }`}
                    style={{
                      width: createResponsiveValueDesktop(296, 398),
                      height: createResponsiveValueDesktop(512, 681),
                      overflow: "visible",
                    }}
                  >
                    {/* Project Image */}
                    <div
                      className="flex-shrink-0 rounded-t-[5px] overflow-hidden"
                      style={{
                        width: "100%",
                        height: createResponsiveValueDesktop(350.12, 464),
                      }}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={398}
                        height={464}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Content */}
                    <div
                      className={`flex flex-col absolute bottom-0 left-0 right-0 rounded-b-[5px] ${
                        project.isComingSoon
                          ? "bg-[rgba(22,34,28,0.65)]"
                          : "bg-[#16221C]"
                      }`}
                      style={{
                        width: "100%",
                        height: isHovered
                          ? `calc(${createResponsiveValueDesktop(
                              160.92,
                              217
                            )} + 80px)`
                          : createResponsiveValueDesktop(160.92, 217),
                        padding: "20px",
                        paddingTop: isHovered ? "30px" : "20px",
                        transition:
                          "height 0.3s ease-out, padding-top 0.3s ease-out",
                      }}
                    >
                      {/* Project Title */}
                      <h3
                        className="text-white text-left"
                        style={{
                          fontFamily:
                            createResponsiveValueDesktop(1440, 1920) ===
                            createResponsiveValueDesktop(1440, 1440)
                              ? "'Roboto', sans-serif"
                              : "'Open Sans', sans-serif",
                          fontWeight:
                            createResponsiveValueDesktop(1440, 1920) ===
                            createResponsiveValueDesktop(1440, 1440)
                              ? 900
                              : 700,
                          fontSize: createResponsiveValueDesktop(18, 24),
                          lineHeight: "1.4em",
                          marginBottom: "2px",
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Project Location */}
                      <p
                        className="text-white text-left"
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontWeight:
                            createResponsiveValueDesktop(1440, 1920) ===
                            createResponsiveValueDesktop(1440, 1440)
                              ? 300
                              : 600,
                          fontSize: createResponsiveValueDesktop(12, 16),
                          lineHeight: "2.3em",
                          marginBottom: "4px",
                        }}
                      >
                        {project.location}
                      </p>

                      {/* Project Description - Only show if not Coming Soon */}
                      {!project.isComingSoon ? (
                        <>
                          <div className="flex-grow overflow-hidden">
                            <p
                              className="text-left text-white"
                              style={{
                                fontFamily:
                                  createResponsiveValueDesktop(1440, 1920) ===
                                  createResponsiveValueDesktop(1440, 1440)
                                    ? "'Roboto', sans-serif"
                                    : "'Open Sans', sans-serif",
                                fontWeight: 400,
                                fontSize: createResponsiveValueDesktop(10, 12),
                                lineHeight: "1.4em",
                                letterSpacing: "-0.04px",
                              }}
                            >
                              {project.description}
                            </p>
                          </div>

                          {/* Read More Button */}
                          <div
                            className="text-left flex items-center mt-2"
                            style={{
                              opacity: isHovered ? 1 : 0,
                              maxHeight: isHovered ? "50px" : "0",
                              overflow: "hidden",
                              transition:
                                "opacity 0.3s ease-out, max-height 0.3s ease-out",
                            }}
                          >
                            <button
                              className="text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300"
                              style={{
                                fontFamily: "'Open Sans', sans-serif",
                                fontWeight: 400,
                                fontSize: createResponsiveValueDesktop(12, 14),
                                lineHeight: "1.5em",
                              }}
                            >
                              Read More →
                            </button>
                          </div>
                        </>
                      ) : (
                        /* Find out more Button for Coming Soon */
                        <div className="text-left flex items-center mt-2">
                          <button
                            onClick={handleContactRedirect}
                            className="text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300"
                            style={{
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: 400,
                              fontSize: createResponsiveValueDesktop(12, 14),
                              lineHeight: "1.5em",
                            }}
                          >
                            Find out more →
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CanopyPortfolioSectionDesktop;
