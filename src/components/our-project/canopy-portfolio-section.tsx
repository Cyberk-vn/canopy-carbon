"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";

// Image imports
import CanopyPortfolioBg from "../../../public/assets/our-project/canopy-portfolio-section/canopy-portfolio-bg-381140.png";
import CanopyBluePrintBg from "../../../public/assets/our-project/canopy-portfolio-section/canopy-blue-print-bg.png";
import PortfolioImage1 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-1.png";
import PortfolioImage2 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-2.png";
import PortfolioImage3 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-3.png";
import PortfolioImage4 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-4.png";
import PortfolioImage5 from "../../../public/assets/our-project/portfolio/carousel-images/portfolio-image-5.png";
import ArrowLeftCircle from "../../../public/assets/about-us/our-project-section/arrow-left-circle.svg";
import ArrowRightCircle from "../../../public/assets/about-us/our-project-section/arrow-right-circle.svg";

/**
 * Interface for individual portfolio project
 */
interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: StaticImageData;
  readMoreLink?: string;
  isComingSoon?: boolean;
}

/**
 * CanopyPortfolioSection Component
 *
 * Displays the Canopy Portfolio section featuring project showcase with carousel navigation.
 * The section includes a background header with title and description, followed by a project
 * carousel showing detailed project cards with images, descriptions, and navigation controls.
 * Design matches Figma specifications exactly with proper background overlays and typography.
 *
 * Features:
 * - Background header section with gradient overlay
 * - Project carousel with navigation arrows
 * - Detailed project cards with images and descriptions
 * - Responsive design with mobile-first approach
 * - TypeScript interfaces for type safety
 *
 * @returns JSX.Element - The rendered canopy portfolio section
 */
const CanopyPortfolioSection: React.FC = () => {
  // Contact redirect hook
  const { redirectToContact } = useContactRedirect();

  // Portfolio projects data - matching Figma design specifications exactly
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

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? portfolioProjects.length - 1 : prev - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % portfolioProjects.length);
  };

  const currentProject = portfolioProjects[currentProjectIndex];

  return (
    <section className="w-full bg-[#232A26] relative -mt-[25px]">
      {/* Header Section */}
      <div className="relative w-full h-[182px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={CanopyPortfolioBg}
            alt="Canopy Portfolio Background"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 36%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 80%)",
          }}
        />

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 md:px-[120px] pb-[33px]">
          <motion.div
            initial={{ opacity: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-[400px] text-center"
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.7, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="font-roboto font-extrabold text-[28px] leading-[1.143em] text-[#EDEDED] mb-[4px]"
            >
              The Canopy Portfolio
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0.6, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="font-open-sans font-light text-[12px] leading-[1.417em] text-[#F0F0F0] mb-[11px] max-w-[280px]"
            >
              We execute our projects alongside key partners globally recognised
              for their domain expertise.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ opacity: 0.5, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="w-[230px] h-[1px] bg-[#454545] mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative pb-[16px]">
        {/* Blueprint Background Image - Full Screen */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={CanopyBluePrintBg}
            alt="Blueprint Background Pattern"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlay for Blueprint - Full Screen */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, rgba(123, 123, 123, 0.8) 45.08%, rgba(255, 255, 255, 0) 71.06%, #FFFFFF 97.44%)",
          }}
        />

        <div className="relative px-6 md:px-[120px]">
          <div className="mx-auto md:mx-0 max-w-[637px] lg:max-w-[800px]">
            {/* Project Card */}
            <motion.div
              initial={{ opacity: 0.8, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="relative z-10 mx-[16px] pt-0 transition-all duration-500 ease-in-out"
            >
              <div className="overflow-hidden shadow-lg h-[596px] relative rounded-[5px] gap-0">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0.7, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                  className="relative w-full h-[384px] flex-shrink-0"
                >
                  <Image
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    fill
                    className="object-cover transition-opacity duration-300"
                    priority={currentProjectIndex === 0}
                    loading={currentProjectIndex === 0 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    sizes="(max-width: 768px) 100vw, 637px"
                  />
                </motion.div>

                {/* Project Content - Positioned absolutely over the bottom portion */}
                <motion.div
                  initial={{ opacity: 0.7, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                  className={`absolute bottom-0 left-0 right-0 px-[12px] pt-[24px] h-[212px] w-full flex flex-col justify-between rounded-b-[5px] ${
                    currentProject.isComingSoon
                      ? "bg-[rgba(22,34,28,0.65)]"
                      : "bg-[#16221C]"
                  }`}
                >
                  {/* Top Content Container */}
                  <div className="flex flex-col">
                    {/* Project Title */}
                    <motion.h3
                      initial={{ opacity: 0.7, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.0,
                        ease: "easeOut",
                      }}
                      className="font-roboto font-black text-[21px] leading-[1.429em] text-white text-center mb-[2.93px]"
                    >
                      {currentProject.title}
                    </motion.h3>

                    {/* Project Location */}
                    <motion.p
                      initial={{ opacity: 0.6, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.1,
                        ease: "easeOut",
                      }}
                      className="font-open-sans font-light text-[12px] leading-[2.333em] text-white text-center mb-[4px]"
                    >
                      {currentProject.location}
                    </motion.p>

                    {/* Project Description - Only show if not Coming Soon */}
                    {!currentProject.isComingSoon && (
                      <motion.div
                        initial={{ opacity: 0.6, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.2,
                          ease: "easeOut",
                        }}
                        className="overflow-hidden"
                      >
                        <p
                          className="font-roboto font-normal text-center text-[12px] leading-[17px] text-white"
                          style={{
                            letterSpacing: "-4%",
                          }}
                        >
                          {currentProject.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Read More Button - Only show if not Coming Soon */}
                  {!currentProject.isComingSoon && (
                    <motion.div
                      initial={{ opacity: 0.6, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.3,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="text-center mb-[14px] justify-center flex items-center"
                    >
                      <button
                        onClick={redirectToContact}
                        className="font-open-sans font-normal text-[12px] leading-[1.5em] text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300"
                      >
                        Read More →
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <motion.div
                initial={{ opacity: 0.6, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
                className="flex justify-between items-center mt-[23.45px] px-0"
              >
                {/* Left Arrow */}
                <motion.button
                  initial={{ opacity: 0.7, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevProject}
                  className="w-[22.76px] h-[23.45px] flex items-center justify-center transition-all duration-300 hover:opacity-80"
                  aria-label="Previous project"
                >
                  <Image
                    src={ArrowLeftCircle}
                    alt="Previous"
                    width={23}
                    height={23}
                    className="object-contain"
                    loading="lazy"
                  />
                </motion.button>

                {/* Right Arrow */}
                <motion.button
                  initial={{ opacity: 0.7, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextProject}
                  className="w-[22.76px] h-[23.45px] flex items-center justify-center transition-all duration-300 hover:opacity-80"
                  aria-label="Next project"
                >
                  <Image
                    src={ArrowRightCircle}
                    alt="Next"
                    width={23}
                    height={23}
                    className="object-contain"
                    loading="lazy"
                  />
                </motion.button>
              </motion.div>

              {/* Double Line Decorator */}
              <motion.div
                initial={{ opacity: 0.6, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.7, ease: "easeOut" }}
                className="flex justify-center pt-[13px]"
              >
                <div className="relative w-[203px] h-[9px]">
                  {/* First Line - Full Width */}
                  <div
                    className="absolute top-0 left-0 w-full h-0"
                    style={{
                      borderTop: "3px solid rgba(172, 184, 194, 0.2)",
                    }}
                  />
                  {/* Second Line - Half Width, Centered */}
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100px] h-0"
                    style={{
                      borderTop: "2px solid rgba(172, 184, 194, 0.2)",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanopyPortfolioSection;
