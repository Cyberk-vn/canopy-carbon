"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * Interface for individual portfolio project
 */
interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
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
  // Portfolio projects data - matching Figma design specifications exactly
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
    <section className="w-full bg-[#232A26] relative">
      {/* Header Section */}
      <div className="relative w-full h-[182px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/our-project/canopy-portfolio-section/canopy-portfolio-bg-381140.png"
            alt="Canopy Portfolio Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 36%, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, 1) 87%)",
          }}
        />

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-[120px]">
          <div className="max-w-[400px] text-center">
            {/* Title */}
            <h2 className="font-roboto font-extrabold text-[28px] leading-[1.143em] text-[#EDEDED] mb-[4px]">
              The Canopy Portfolio
            </h2>

            {/* Description */}
            <p className="font-open-sans font-light text-[12px] leading-[1.417em] text-[#F0F0F0] mb-[11px] max-w-[300px]">
              We execute our projects alongside key partners globally recognised
              for their domain expertise.
            </p>

            {/* Decorative Line */}
            <div className="w-[230px] h-[1px] bg-[#454545] mx-auto" />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative pb-[50px]">
        {/* Blueprint Background Image - Full Screen */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/our-project/canopy-portfolio-section/canopy-blue-print-bg.png"
            alt="Blueprint Background Pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay for Blueprint - Full Screen */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(123, 123, 123, 0.8) 45%, rgba(255, 255, 255, 0) 71%, rgba(255, 255, 255, 1) 97%)",
          }}
        />

        <div className="relative px-6 md:px-[120px]">
          <div className="max-w-[392px] mx-auto md:mx-0 md:max-w-[600px] lg:max-w-[800px]">
            {/* Project Card */}
            <div className="relative z-10 mx-[16px] pt-0 transition-all duration-500 ease-in-out">
              <div className="bg-white overflow-hidden shadow-lg h-[596px] flex flex-col">
                {/* Project Image */}
                <div className="relative w-full h-[350px] flex-shrink-0">
                  <Image
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    fill
                    className="object-cover transition-opacity duration-300"
                  />
                </div>

                {/* Project Content */}
                <div
                  className={`px-[15px] py-[24px] h-[250px] flex flex-col ${
                    currentProject.isComingSoon
                      ? "bg-[#16221C] bg-opacity-65"
                      : "bg-[#16221C]"
                  }`}
                >
                  {/* Project Title */}
                  <h3 className="font-roboto font-black text-[21px] leading-[1.429em] text-white text-center mb-[2.93px]">
                    {currentProject.title}
                  </h3>

                  {/* Project Location */}
                  <p className="font-open-sans font-light text-[12px] leading-[2.333em] text-white text-center mb-[4px]">
                    {currentProject.location}
                  </p>

                  {/* Project Description - Only show if not Coming Soon */}
                  {!currentProject.isComingSoon && (
                    <>
                      <div className="px-[15px] mb-[8px] flex-grow flex items-center">
                        <p className="font-roboto font-normal text-[12px] leading-[1.417em] tracking-[-0.04em] text-white text-center">
                          {currentProject.description}
                        </p>
                      </div>

                      {/* Read More Button */}
                      <div className="text-center mt-auto">
                        <button className="font-open-sans font-normal text-[12px] leading-[1.5em] text-[#7D8F89] hover:text-[#9CA9A3] transition-colors duration-300">
                          Read More →
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mt-[23.45px] px-0">
                {/* Left Arrow */}
                <button
                  onClick={handlePrevProject}
                  className="w-[22.76px] h-[23.45px] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80"
                  aria-label="Previous project"
                >
                  <Image
                    src="/assets/contact-us/our-project-section/arrow-left-circle.png"
                    alt="Previous"
                    width={23}
                    height={23}
                    className="object-contain"
                  />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextProject}
                  className="w-[22.76px] h-[23.45px] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80"
                  aria-label="Next project"
                >
                  <Image
                    src="/assets/contact-us/our-project-section/arrow-right-circle.png"
                    alt="Next"
                    width={23}
                    height={23}
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanopyPortfolioSection;
