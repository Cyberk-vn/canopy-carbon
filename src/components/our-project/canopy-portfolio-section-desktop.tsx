"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "../shared";

interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  readMoreLink?: string;
  isComingSoon?: boolean;
}

const CanopyPortfolioSectionDesktop: React.FC = () => {
  const portfolioProjects: PortfolioProject[] = [
    {
      id: "project-1",
      title: "CK-01 Wetland",
      location: "Pulang Pisau, Central Kalimantan",
      description:
        "A VM047 & VM007 project, CK-01 covers over 13,500 hectares with an indigenous community of 8 villages. The project integrates reforestation, forest and biodiversity conservation, and wetland restoration.",
      imageUrl:
        "/assets/our-project/portfolio/carousel-images/portfolio-image-1.png",
      readMoreLink: "#",
    },
    {
      id: "project-2",
      title: "CK-02 Wetland",
      location: "Barito Timur, Central Kalimantan",
      description:
        "A VM047 & VM007 project, CK-02 spans over 8,400 hectares and engages 8 villages. It focuses on reforestation and forest and biodiversity conservation.",
      imageUrl:
        "/assets/our-project/portfolio/carousel-images/portfolio-image-2.png",
      readMoreLink: "#",
    },
    {
      id: "project-3",
      title: "CK-03 Terrestrial",
      location: "Lamandau Central Kalimantan",
      description:
        "A VM047 & VM048 project, CK-03 covers close to 29,000 hectares. It involves 10 villages and is a large-scale reforestation initiative with supporting forest and biodiversity conservation components.",
      imageUrl:
        "/assets/our-project/portfolio/carousel-images/portfolio-image-3.png",
      readMoreLink: "#",
    },
    {
      id: "project-4",
      title: "SM-01 Biochar",
      location: "Pekanbaru, East Sumatra",
      description:
        "An agricultural waste management initiative developed in partnership with a globally recognized biochar specialist. The facility is designed to process 100 tons of input waste per day.",
      imageUrl:
        "/assets/our-project/portfolio/carousel-images/portfolio-image-4.png",
      readMoreLink: "#",
    },
    {
      id: "project-5",
      title: "Coming Soon",
      location: "More impact driven projects brewing...",
      description: "",
      imageUrl:
        "/assets/our-project/portfolio/carousel-images/portfolio-image-5.png",
      isComingSoon: true,
    },
  ];

  return (
    <Container>
      <section
        className="w-full relative mx-auto"
        style={{ maxWidth: "1440px", height: "1516px" }}
      >
        {/* Top Background Section - portfolio-background-1 with gradient */}
        <div
          className="absolute"
          style={{ width: "100%", height: "625px", top: "0", left: "0" }}
        >
          {/* Background Image 1 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/assets/desktop/our-projects/portfolio-background-1-536692.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Top Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 7%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 87%)",
            }}
          />
        </div>

        {/* Bottom Background Section - portfolio-background-2 with gradient - NO GAP */}
        <div
          className="absolute"
          style={{ width: "100%", height: "891px", top: "625px", left: "0" }}
        >
          {/* Background Image 2 with white overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backgroundImage: `url('/assets/desktop/our-projects/portfolio-background-2-77a3ad.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "normal",
            }}
          />

          {/* Bottom Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(123, 123, 123, 0.8) 45%, rgba(255, 255, 255, 0) 78%, rgba(255, 255, 255, 1) 97%)",
            }}
          />
        </div>

        {/* Content Container - positioned with exact spacing: top 81px, left/right 120px, bottom 83px */}
        <div
          className="absolute z-20 flex flex-col items-center"
          style={{
            top: "81px",
            left: "120px",
            right: "120px",
            bottom: "83px",
            width: "1200px",
          }}
        >
          <div className="w-[1200px] flex flex-col items-center gap-14">
            {/* Title and Description Section */}
            <motion.div
              initial={{ opacity: 0.8, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0.7, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="font-open-sans font-extrabold text-[32px] leading-[1.36181640625em] text-[#EDEDED] text-center h-[30px] flex items-center"
              >
                The Canopy Portfolio
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0.6, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="font-open-sans font-light text-[19px] leading-[1.0526315789473684em] text-[#F0F0F0] text-center"
              >
                We execute our projects alongside key partners globally
                recognised for their domain expertise.
              </motion.p>
            </motion.div>

            {/* Project Cards Grid - 2 rows x 3 columns */}
            <motion.div
              initial={{ opacity: 0.8, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="w-[989px] h-[1222px] grid grid-cols-3 grid-rows-2 gap-[28px]"
            >
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0.7, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="w-[311px] h-[596px] flex flex-col overflow-hidden rounded-[5px] shadow-lg"
                >
                  {/* Project Image */}
                  <div className="w-full h-[384px] flex-shrink-0 rounded-t-[5px] overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={311}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div
                    className={`w-full h-[212px] px-[15px] pt-[24px] rounded-b-[5px] flex flex-col flex-shrink-0 ${
                      project.isComingSoon
                        ? "bg-[rgba(22,34,28,0.65)]"
                        : "bg-[#16221C]"
                    }`}
                  >
                    {/* Project Title */}
                    <h3 className="font-roboto font-black text-[21px] leading-[1.4285714285714286em] text-white text-center mb-[2px] h-[29.31px] flex items-center justify-center">
                      {project.title}
                    </h3>

                    {/* Project Location */}
                    <p className="font-open-sans font-light text-[12px] leading-[2.3333333333333335em] text-white text-center mb-[4px] h-[27.36px] flex items-center justify-center">
                      {project.location}
                    </p>

                    {/* Project Description - Only show if not Coming Soon */}
                    {!project.isComingSoon && (
                      <>
                        <div className="flex-grow flex items-center justify-center overflow-hidden h-[67px]">
                          <p
                            className="font-roboto font-normal text-center text-[12px] leading-[17px] text-white"
                            style={{
                              letterSpacing: "-0.04px",
                              fontWeight: 400,
                            }}
                          >
                            {project.description}
                          </p>
                        </div>

                        {/* Read More Button */}
                        <div className="text-center h-[48px] flex items-center justify-center">
                          <button className="font-open-sans font-normal text-[12px] leading-[1.5em] text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300">
                            Read More →
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CanopyPortfolioSectionDesktop;
