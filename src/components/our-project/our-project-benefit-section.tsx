"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useShouldLoadPair } from "@/src/hooks/responsive/use-lazy-carousel";

// Image imports
import BenefitLogoImage from "../../../public/assets/our-project/benefit-section/benefit-logo.svg";
import LeftLogo from "../../../public/assets/our-project/benefit-section/left-logo.png";
import RightLogo from "../../../public/assets/our-project/benefit-section/right-logo.png";
import ArrowLeftCircle from "../../../public/assets/about-us/our-project-section/arrow-left-circle.svg";
import ArrowRightCircle from "../../../public/assets/about-us/our-project-section/arrow-right-circle.svg";

// UN SDG carousel images imports - High Quality
import SDG01Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_01.jpg";
import SDG02Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_02.jpg";
import SDG03Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_03.jpg";
import SDG04Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_04.jpg";
import SDG05Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_05.jpg";
import SDG06Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_06.jpg";
import SDG07Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_07.jpg";
import SDG08Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_08.jpg";
import SDG09Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_09.jpg";
import SDG10Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_10.jpg";
import SDG11Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_11.jpg";
import SDG12Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_12.jpg";
import SDG13Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_13.jpg";
import SDG14Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_14.jpg";
import SDG15Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_15.jpg";
import SDG16Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_16.jpg";
import SDG17Image from "../../../public/assets/our-project/benefit-section/sdg-Icons/E_PRINT_17.jpg";

/**
 * BenefitLogo component - Static logo that should not re-render when carousel changes
 * Extracted outside parent component and memoized for optimal performance
 */
const BenefitLogo = React.memo(() => (
  <div className="relative w-[106px] h-[118px] flex-shrink-0 mx-auto">
    <Image
      src={BenefitLogoImage}
      alt="Co-Benefits & Safeguards logo"
      fill
      className="object-contain"
      loading="lazy"
      sizes="106px"
    />
  </div>
));

BenefitLogo.displayName = "BenefitLogo";

/**
 * LazyCarouselImage component - Optimized carousel image with lazy loading
 * Extracted outside parent component and memoized for optimal performance
 */
interface LazyCarouselImageProps {
  image: CarouselImage;
  pairIndex: number;
  imageIndex: number;
  currentPairIndex: number;
  carouselInView: boolean;
  totalPairs: number;
}

const LazyCarouselImage = React.memo<LazyCarouselImageProps>(
  ({
    image,
    pairIndex,
    imageIndex,
    currentPairIndex,
    carouselInView,
    totalPairs,
  }) => {
    const shouldLoad = useShouldLoadPair(
      pairIndex,
      currentPairIndex,
      totalPairs
    );
    const isVisible = carouselInView && shouldLoad;
    const isActivePair = pairIndex === currentPairIndex;

    return (
      <motion.div
        key={image.id}
        className="w-[124px] h-[124px] relative flex-shrink-0 rounded-[2px] overflow-hidden bg-gray-200"
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 10,
        }}
        animate={{
          opacity: isActivePair ? 1 : 0.7,
          scale: isActivePair ? 1 : 0.95,
          y: 0,
          zIndex: isActivePair ? 10 : 5,
          filter: isActivePair ? "brightness(1) saturate(1.05)" : "brightness(0.92) saturate(0.95)",
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: -10,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          delay: imageIndex * 0.02,
        }}
      >
        {isVisible ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            placeholder="blur"
            priority={true}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-500 border-t-transparent rounded-full animate-spin opacity-50"></div>
          </div>
        )}
      </motion.div>
    );
  }
);

LazyCarouselImage.displayName = "LazyCarouselImage";

/**
 * Interface for individual carousel image
 */
interface CarouselImage {
  id: string;
  src: string | StaticImageData;
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
          src: SDG01Image,
          alt: "SDG 1: No Poverty",
          name: "no-poverty",
        },
        {
          id: "sdg-2",
          src: SDG02Image,
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
          src: SDG03Image,
          alt: "SDG 3: Good Health and Well-being",
          name: "good-health",
        },
        {
          id: "sdg-4",
          src: SDG04Image,
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
          src: SDG05Image,
          alt: "SDG 5: Gender Equality",
          name: "gender-equaliaty",
        },
        {
          id: "sdg-6",
          src: SDG06Image,
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
          src: SDG07Image,
          alt: "SDG 7: Affordable and Clean Energy",
          name: "affordable",
        },
        {
          id: "sdg-8",
          src: SDG08Image,
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
          src: SDG09Image,
          alt: "SDG 9: Industry, Innovation and Infrastructure",
          name: "industry",
        },
        {
          id: "sdg-10",
          src: SDG10Image,
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
          src: SDG11Image,
          alt: "SDG 11: Sustainable Cities and Communities",
          name: "sustainable",
        },
        {
          id: "sdg-12",
          src: SDG12Image,
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
          src: SDG13Image,
          alt: "SDG 13: Climate Action",
          name: "climate-action",
        },
        {
          id: "sdg-14",
          src: SDG14Image,
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
          src: SDG15Image,
          alt: "SDG 15: Life on Land",
          name: "life-on-land",
        },
        {
          id: "sdg-16",
          src: SDG16Image,
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
          src: SDG17Image,
          alt: "SDG 17: Partnerships for the Goals",
          name: "partnership",
        },
      ],
    },
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  // Intersection observer for the carousel section
  const { ref: carouselRef, inView: carouselInView } = useInView({
    threshold: 0.1,
    rootMargin: "50px 0px",
    triggerOnce: true, // Only trigger once for better performance
  });

  const handlePrevPair = () => {
    setCurrentPairIndex((prev) =>
      prev === 0 ? carouselPairs.length - 1 : prev - 1
    );
  };

  const handleNextPair = () => {
    setCurrentPairIndex((prev) => (prev + 1) % carouselPairs.length);
  };

  return (
    <section className="w-full bg-[#232A26] pt-[35px] md:px-[120px]">
      <div className="mx-auto md:mx-0 md:max-w-[600px] lg:max-w-[800px]">
        {/* Title and Content Section */}
        <motion.div
          initial={{ opacity: 0.8, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-6 mb-[21px] px-6"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0.7, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className=" font-semibold text-[20px] xxs:text-[21px] xs:text-[22px] leading-[1.5em] text-[#CCCCCC] text-start max-w-[342px] items-start justify-start"
          >
            Our Co-Benefits & Safeguards Strategy
          </motion.h2>

          {/* Benefit Logo */}
          <motion.div
            initial={{ opacity: 0.6, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <BenefitLogo />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0.6, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className=" font-normal text-[13px] xxs:text-[14px] xs:text-[15px] leading-[1.538em] text-[#949494] text-left max-w-[342px] xxs:max-w-[360px] xs:max-w-[390px]"
          >
            Every Canopy project is built to deliver both carbon and broader
            benefits—supporting ecosystems, communities, and climate goals. We
            follow global best practices, aim for certifications like CCB, apply
            ICVCM principles, and contribute to as many of the 17 UN SDGs as
            possible to ensure impact beyond carbon.
          </motion.p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0.7, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="relative px-4 min-h-[271px] h-full"
        >
          {/* Carousel Background */}
          <div className="bg-white pt-[21px] pb-[18px h-[271px]">
            {/* Title logos */}
            <div className="flex justify-center items-center gap-[5px] mb-[26px] px-[9px]">
              <div className="w-[155px] h-[39px] relative">
                <Image
                  src={LeftLogo}
                  alt="Left certification logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  placeholder="blur"
                  sizes="155px"
                />
              </div>
              <div className="w-[147px] h-[36px] relative">
                <Image
                  src={RightLogo}
                  alt="Right certification logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  placeholder="blur"
                  sizes="147px"
                />
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative flex justify-center items-center">
              {/* Carousel Images with Layered Fade */}
              <div className="relative flex justify-center items-center gap-[15px] min-h-[124px]">
                <AnimatePresence>
                  {carouselPairs.map((pair, pairIndex) => (
                    <div
                      key={pair.id}
                      className="absolute flex justify-center items-center gap-[15px]"
                      style={{
                        opacity: pairIndex === currentPairIndex ? 1 : 0,
                        pointerEvents: pairIndex === currentPairIndex ? "auto" : "none",
                      }}
                    >
                      {pair.images.map((image, index) => (
                        <LazyCarouselImage
                          key={`${pair.id}-${image.id}`}
                          image={image}
                          pairIndex={pairIndex}
                          imageIndex={index}
                          currentPairIndex={currentPairIndex}
                          carouselInView={carouselInView}
                          totalPairs={carouselPairs.length}
                        />
                      ))}
                    </div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Left Arrow */}
              <button
                onClick={handlePrevPair}
                className="absolute left-[12px] w-6 h-6 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 z-10"
                aria-label="Previous pair"
              >
                <Image
                  src={ArrowLeftCircle}
                  alt="Previous"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6"
                  loading="lazy"
                />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNextPair}
                className="absolute right-[12px] w-6 h-6 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 z-10"
                aria-label="Next pair"
              >
                <Image
                  src={ArrowRightCircle}
                  alt="Next"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient Transition Overlay */}
      <div
        className="w-full h-[98px] -mt-[40px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 76.92%)",
        }}
      />
    </section>
  );
};

export default OurProjectBenefitSection;
