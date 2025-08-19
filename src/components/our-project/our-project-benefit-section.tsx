"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * Interface for individual carousel image
 */
interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  name: string;
}

/**
 * Interface for carousel pair containing two images (or one for the last pair)
 */
interface CarouselPair {
  id: string;
  images: CarouselImage[];
}

/**
 * OurProjectBenefitSection Component
 *
 * Displays the Co-Benefits & Safeguards Strategy section with title, benefit logo,
 * description text, and image carousel with navigation. Features a carousel of
 * UN SDG image pairs that users can navigate through using arrow buttons.
 * The carousel displays pairs of related SDG images (9 pairs with 2 images each,
 * and 1 final pair with 1 image). Design matches Figma specifications exactly
 * with dark background and proper typography.
 *
 * Features:
 * - 10 carousel pairs mapping all 17 UN SDG goals
 * - Navigation via arrow buttons (non-sliding state change)
 * - Responsive design with proper image sizing and spacing
 * - Accessibility features with proper ARIA labels
 * - TypeScript interfaces for type safety
 *
 * @returns JSX.Element - The rendered benefit section
 */
const OurProjectBenefitSection: React.FC = () => {
  // Carousel pairs data - 10 pairs based on UN SDGs
  const carouselPairs: CarouselPair[] = [
    {
      id: "pair-1",
      images: [
        {
          id: "sdg-1",
          src: "/assets/our-project/benefit-section/carousel-images/no-poverty.png",
          alt: "SDG 1: No Poverty",
          name: "no-poverty",
        },
        {
          id: "sdg-2",
          src: "/assets/our-project/benefit-section/carousel-images/zero-hunger.png",
          alt: "SDG 2: Zero Hunger",
          name: "zero-hunger",
        },
      ],
    },
    {
      id: "pair-2",
      images: [
        {
          id: "sdg-3",
          src: "/assets/our-project/benefit-section/carousel-images/good-health.png",
          alt: "SDG 3: Good Health and Well-being",
          name: "good-health",
        },
        {
          id: "sdg-4",
          src: "/assets/our-project/benefit-section/carousel-images/quality-education.png",
          alt: "SDG 4: Quality Education",
          name: "quality-education",
        },
      ],
    },
    {
      id: "pair-3",
      images: [
        {
          id: "sdg-5",
          src: "/assets/our-project/benefit-section/carousel-images/gender-equaliaty.png",
          alt: "SDG 5: Gender Equality",
          name: "gender-equaliaty",
        },
        {
          id: "sdg-6",
          src: "/assets/our-project/benefit-section/carousel-images/clean-water.png",
          alt: "SDG 6: Clean Water and Sanitation",
          name: "clean-water",
        },
      ],
    },
    {
      id: "pair-4",
      images: [
        {
          id: "sdg-7",
          src: "/assets/our-project/benefit-section/carousel-images/affordable.png",
          alt: "SDG 7: Affordable and Clean Energy",
          name: "affordable",
        },
        {
          id: "sdg-8",
          src: "/assets/our-project/benefit-section/carousel-images/decent-work.png",
          alt: "SDG 8: Decent Work and Economic Growth",
          name: "decent-work",
        },
      ],
    },
    {
      id: "pair-5",
      images: [
        {
          id: "sdg-9",
          src: "/assets/our-project/benefit-section/carousel-images/industry.png",
          alt: "SDG 9: Industry, Innovation and Infrastructure",
          name: "industry",
        },
        {
          id: "sdg-10",
          src: "/assets/our-project/benefit-section/carousel-images/reduced.png",
          alt: "SDG 10: Reduced Inequalities",
          name: "reduced",
        },
      ],
    },
    {
      id: "pair-6",
      images: [
        {
          id: "sdg-11",
          src: "/assets/our-project/benefit-section/carousel-images/sustainable.png",
          alt: "SDG 11: Sustainable Cities and Communities",
          name: "sustainable",
        },
        {
          id: "sdg-12",
          src: "/assets/our-project/benefit-section/carousel-images/responsible.png",
          alt: "SDG 12: Responsible Consumption and Production",
          name: "responsible",
        },
      ],
    },
    {
      id: "pair-7",
      images: [
        {
          id: "sdg-13",
          src: "/assets/our-project/benefit-section/carousel-images/climate-action.png",
          alt: "SDG 13: Climate Action",
          name: "climate-action",
        },
        {
          id: "sdg-14",
          src: "/assets/our-project/benefit-section/carousel-images/life-below-water.png",
          alt: "SDG 14: Life Below Water",
          name: "life-below-water",
        },
      ],
    },
    {
      id: "pair-8",
      images: [
        {
          id: "sdg-15",
          src: "/assets/our-project/benefit-section/carousel-images/life-on-land.png",
          alt: "SDG 15: Life on Land",
          name: "life-on-land",
        },
        {
          id: "sdg-16",
          src: "/assets/our-project/benefit-section/carousel-images/peace.png",
          alt: "SDG 16: Peace, Justice and Strong Institutions",
          name: "peace",
        },
      ],
    },
    {
      id: "pair-9",
      images: [
        {
          id: "sdg-17",
          src: "/assets/our-project/benefit-section/carousel-images/partnership.png",
          alt: "SDG 17: Partnerships for the Goals",
          name: "partnership",
        },
      ],
    },
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  const handlePrevPair = () => {
    setCurrentPairIndex((prev) =>
      prev === 0 ? carouselPairs.length - 1 : prev - 1
    );
  };

  const handleNextPair = () => {
    setCurrentPairIndex((prev) => (prev + 1) % carouselPairs.length);
  };

  const BenefitLogo = () => (
    <div className="relative w-[106px] h-[118px] flex-shrink-0 mx-auto">
      <Image
        src="/assets/our-project/benefit-section/benefit-logo.png"
        alt="Co-Benefits & Safeguards logo"
        fill
        className="object-contain"
      />
    </div>
  );

  return (
    <section className="w-full bg-[#232A26] pt-[32px] px-6 md:px-[120px]">
      <div className="max-w-[392px] mx-auto md:mx-0 md:max-w-[600px] lg:max-w-[800px]">
        {/* Title and Content Section */}
        <div className="flex flex-col items-center gap-6 mb-[54px]">
          {/* Title */}
          <h2 className="font-open-sans font-semibold text-[20px] leading-[1.5em] text-[#CCCCCC] text-start max-w-[342px]">
            Our Co-Benefits & Safeguards Strategy
          </h2>

          {/* Benefit Logo */}
          <BenefitLogo />

          {/* Description */}
          <p className="font-open-sans font-normal text-[13px] leading-[1.538em] text-[#949494] text-left max-w-[342px]">
            Every Canopy project is built to deliver both carbon and broader
            benefits—supporting ecosystems, communities, and climate goals. We
            follow global best practices, aim for certifications like CCB, apply
            ICVCM principles, and contribute to as many of the 17 UN SDGs as
            possible to ensure impact beyond carbon.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Carousel Background */}
          <div className="bg-white px-6 pt-[18px] pb-[18px]">
            {/* Title logos */}
            <div className="flex justify-center items-center gap-[5px] mb-4">
              <div className="w-[155px] h-[39px] relative">
                <Image
                  src="/assets/our-project/benefit-section/left-logo.png"
                  alt="Left certification logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[147px] h-[36px] relative">
                <Image
                  src="/assets/our-project/benefit-section/right-logo.png"
                  alt="Right certification logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative flex justify-center items-center">
              {/* Current Pair Images */}
              <div className="flex justify-center items-center gap-[15px] transition-opacity duration-500 ease-in-out">
                {carouselPairs[currentPairIndex].images.map((image, index) => (
                  <div
                    key={image.id}
                    className="w-[124px] h-[124px] relative flex-shrink-0 rounded-[2px] overflow-hidden transform transition-all duration-500 ease-in-out"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={handlePrevPair}
                className="absolute left-[-20px] w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 z-10"
                aria-label="Previous pair"
              >
                <Image
                  src="/assets/contact-us/our-project-section/arrow-left-circle.png"
                  alt="Previous"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNextPair}
                className="absolute right-[-20px] w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 z-10"
                aria-label="Next pair"
              >
                <Image
                  src="/assets/contact-us/our-project-section/arrow-right-circle.png"
                  alt="Next"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjectBenefitSection;
