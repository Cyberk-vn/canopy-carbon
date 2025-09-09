"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import {
  OurProjectSectionProps,
  CarouselImage,
  CarouselCardGroup,
} from "../../../types/our-project";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { useResponsiveCardDimensions } from "@/src/hooks/responsive/use-responsive-card-dimensions";

// Image imports
import BookCard1 from "../../../../public/assets/about-us/book-card-1.png";
import BookCard2 from "../../../../public/assets/about-us/book-card-2.png";

// Group 1 card images
import Group1Card1 from "../../../../public/assets/about-us/our-project-section/book-card-1-group/card-1.png";
import Group1Card2 from "../../../../public/assets/about-us/our-project-section/book-card-1-group/card-2.png";
import Group1Card3 from "../../../../public/assets/about-us/our-project-section/book-card-1-group/card-3.png";
import Group1Card4 from "../../../../public/assets/about-us/our-project-section/book-card-1-group/card-4.png";
import Group1Card5 from "../../../../public/assets/about-us/our-project-section/book-card-1-group/card-5.png";

// Group 2 card images
import Group2Card1 from "../../../../public/assets/about-us/our-project-section/book-card-2-group/card-1.png";
import Group2Card2 from "../../../../public/assets/about-us/our-project-section/book-card-2-group/card-2.png";
import Group2Card3 from "../../../../public/assets/about-us/our-project-section/book-card-2-group/card-3.png";
import Group2Card4 from "../../../../public/assets/about-us/our-project-section/book-card-2-group/card-4.png";
import Group2Card5 from "../../../../public/assets/about-us/our-project-section/book-card-2-group/card-5.png";
import Group2Card6 from "../../../../public/assets/about-us/our-project-section/book-card-2-group/card-6.png";

// Description section images
import DescriptionBg from "../../../../public/assets/about-us/our-project-section/description-bg.png";
import LogoDescriptionAbsolute from "../../../../public/assets/about-us/our-project-section/logo-description-absolute.png";

// Navigation and header images
import OurTeamHeaderImage from "../../../../public/assets/about-us/our-team-header-image.png";
import ArrowLeftCircle from "../../../../public/assets/about-us/our-project-section/arrow-left-circle.svg";
import ArrowRightCircle from "../../../../public/assets/about-us/our-project-section/arrow-right-circle.svg";

// Inline component interfaces
interface InlineCarouselData {
  images: CarouselImage[];
  cardGroups?: CarouselCardGroup[];
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

interface InlineDescriptionData {
  mainText: string;
  backgroundImage: string | StaticImageData;
  logoImage?: string | StaticImageData;
}

interface MobileViewProps {
  data?: OurProjectSectionProps["data"];
}

// Default data for the mobile view
const defaultData = {
  carouselData: {
    images: [
      {
        id: "1",
        src: BookCard1,
        alt: "Team collaboration book card 1",
      },
      {
        id: "2",
        src: BookCard2,
        alt: "Team collaboration book card 2",
      },
    ],
    cardGroups: [
      {
        id: "group-1",
        groupName: "Book Card Group 1",
        cards: [
          {
            id: "card-1-1",
            src: Group1Card1,
            alt: "Book card group 1 - card 1",
          },
          {
            id: "card-1-2",
            src: Group1Card2,
            alt: "Book card group 1 - card 2",
          },
          {
            id: "card-1-3",
            src: Group1Card3,
            alt: "Book card group 1 - card 3",
          },
          {
            id: "card-1-4",
            src: Group1Card4,
            alt: "Book card group 1 - card 4",
          },
          {
            id: "card-1-5",
            src: Group1Card5,
            alt: "Book card group 1 - card 5",
          },
        ],
      },
      {
        id: "group-2",
        groupName: "Book Card Group 2",
        cards: [
          {
            id: "card-2-1",
            src: Group2Card1,
            alt: "Book card group 2 - card 1",
          },
          {
            id: "card-2-2",
            src: Group2Card2,
            alt: "Book card group 2 - card 2",
          },
          {
            id: "card-2-3",
            src: Group2Card3,
            alt: "Book card group 2 - card 3",
          },
          {
            id: "card-2-4",
            src: Group2Card4,
            alt: "Book card group 2 - card 4",
          },
          {
            id: "card-2-5",
            src: Group2Card5,
            alt: "Book card group 2 - card 5",
          },
          {
            id: "card-2-6",
            src: Group2Card6,
            alt: "Book card group 2 - card 6",
          },
        ],
      },
    ],
    description:
      "Our team upholds operational excellence through structured SOPs—formulated from field experience and refined over time—to ensure disciplined, accountable implementation across all workstreams.",
    buttonText: "Request Access",
    buttonAction: () => {
      console.log("Request Access clicked");
    },
  },
  descriptionData: {
    mainText:
      "At Canopy, we're institutionalizing the NBS carbon project model—bringing executional discipline, radical transparency, and long-term vision to deliver large-scale, high-integrity projects that anchor the emergence of carbon as a legitimate asset class.",
    backgroundImage: DescriptionBg,
    logoImage: LogoDescriptionAbsolute,
  },
};

export const MobileView = memo<MobileViewProps>(({ data = defaultData }) => {
  const { carouselData = defaultData.carouselData, descriptionData } = data;

  // Simple Motion animations
  const containerMotion = useSimpleMotion("about-project-mobile-container");
  const mobileCarouselMotion = useSimpleMotion("about-project-mobile-carousel");
  const mobileDescriptionMotion = useSimpleMotion(
    "about-project-mobile-description"
  );

  return (
    <motion.section
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...containerMotion}
      className="w-full h-full"
    >
      <div className="w-full">
        <div className="flex flex-col">
          <motion.div
            {...SIMPLE_ANIMATIONS.scaleIn}
            {...mobileCarouselMotion}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center relative z-[1] min-h-[360px] px-[11px] overflow-visible"
            style={{ height: "auto" }}
          >
            <OurTeamCarouselInline
              data={{
                ...carouselData,
                buttonAction: carouselData.buttonAction || (() => {}),
              }}
            />
          </motion.div>

          {/* Description Section - Mobile with 20px overlap */}
          <motion.div
            {...SIMPLE_ANIMATIONS.fadeInUp}
            {...mobileDescriptionMotion}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full relative -z-[1] -mt-5 flex justify-center items-center h-full"
          >
            <DescriptionSectionInline data={descriptionData} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

MobileView.displayName = "MobileView";

// Inline Carousel Component with Position-Based Movement Animation
const OurTeamCarouselInline = ({ data }: { data: InlineCarouselData }) => {
  const { cardGroups, description, buttonText, buttonAction } = data;
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [isPositionTransitioning, setIsPositionTransitioning] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previousCardCountRef = useRef<number>(0);

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;
  const totalGroups = cardGroups?.length || 0;

  // Get current card count for responsive calculations
  const currentCardCount = cardGroups?.[currentGroupIndex]?.cards.length || 0;

  // Use responsive card dimensions with unified height
  const { dimensions, getCardPositions } = useResponsiveCardDimensions(
    cardGroups || [],
    currentCardCount
  );

  // Handle group changes and position transitions
  useEffect(() => {
    if (cardGroups && cardGroups[currentGroupIndex]) {
      const cardCount = cardGroups[currentGroupIndex].cards.length;
      const previousCardCount = previousCardCountRef.current;

      // Detect if we're switching between different card counts (5 <-> 6)
      const isCardCountChange =
        previousCardCount !== 0 && previousCardCount !== cardCount;

      if (isCardCountChange) {
        setIsPositionTransitioning(true);
        setTimeout(() => setIsPositionTransitioning(false), 600);
      }

      // Update previous card count reference
      previousCardCountRef.current = cardCount;

      // Reset slide direction after transition completes
      if (slideDirection) {
        setTimeout(() => {
          setSlideDirection(null);
        }, 1200);
      }
    }
  }, [currentGroupIndex, cardGroups, slideDirection]);

  const startAutoPlay = useCallback(() => {
    if (totalGroups <= 1 || isAutoPlayPaused) return;

    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }

    autoPlayTimeoutRef.current = setTimeout(() => {
      setSlideDirection("left");
      setTimeout(() => {
        setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
      }, 50);
    }, 4000);
  }, [totalGroups, isAutoPlayPaused]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlayPaused(true);
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }

    // Clear any existing user interaction timeout
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }

    // Resume auto-play after 3 seconds of no interaction
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, 3000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [startAutoPlay, currentGroupIndex]);

  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
    };
  }, []);

  // Handle swipe detection
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && totalGroups > 1) {
      handleNext();
    }
    if (isRightSwipe && totalGroups > 1) {
      handlePrev();
    }
  };

  const handleNext = () => {
    if (isTransitioning || totalGroups <= 1) return;

    pauseAutoPlay();
    setIsTransitioning(true);
    setSlideDirection("left"); // Sliding left for next

    // Switch to next group immediately with slide animation
    setTimeout(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
      setIsTransitioning(false);
    }, 50); // Immediate switch with minimal delay
  };

  const handlePrev = () => {
    if (isTransitioning || totalGroups <= 1) return;

    pauseAutoPlay();
    setIsTransitioning(true);
    setSlideDirection("right"); // Sliding right for previous

    // Switch to previous group immediately with slide animation
    setTimeout(() => {
      setCurrentGroupIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
      setIsTransitioning(false);
    }, 50); // Immediate switch with minimal delay
  };

  // Fallback if no card groups available
  if (!cardGroups || cardGroups.length === 0) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <p className="text-gray-500">No card groups available</p>
      </div>
    );
  }

  const currentGroup = cardGroups[currentGroupIndex];

  return (
    <div
      className="w-full flex flex-col overflow-visible z-10"
      style={{ backgroundColor: "rgba(250, 250, 250, 0)" }}
    >
      <div className="flex gap-[8px] ml-[13px] mb-1 absolute mt-[15px] z-40">
        <div className="w-[107px] h-[43px] relative flex-shrink-0">
          <Image
            src={OurTeamHeaderImage}
            alt="Header decoration 1"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            sizes="107px"
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-full rounded-[5px] touch-pan-y relative mt-[38px] px-[13px]"
        style={{
          backgroundColor: "rgba(250, 250, 250, 0.6)",
          paddingBottom: "20px",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="absolute left-0 right-0 bottom-0 h-5 pointer-events-none rounded-b-[5px]"
          style={{
            backgroundColor: "rgba(250, 250, 250, 0.2)",
            zIndex: 10,
          }}
        />
        <div className="flex flex-col mb-[14px] mt-[62px]">
          <div className="flex flex-col justify-center items-center mb-12">
            <div
              className="relative w-full mx-auto flex flex-col items-center overflow-hidden"
              style={{ height: `${dimensions.containerHeight}px` }}
            >
              {currentGroup.cards.map((card, index) => {
                const cardPositions = getCardPositions();
                const position =
                  cardPositions[index] ||
                  cardPositions[cardPositions.length - 1];

                const isLastCard = index === currentGroup.cards.length - 1;
                const isFirstCard = index === 0;
                const isMiddleCard = !isFirstCard && !isLastCard;
                let horizontalOffset = 0;

                if (!isLastCard && slideDirection === "left") {
                  horizontalOffset = isTransitioning
                    ? Math.min(
                        dimensions.cardWidth * 1.4,
                        dimensions.availableWidth * 0.3
                      )
                    : 0;
                } else if (!isLastCard && slideDirection === "right") {
                  horizontalOffset = isTransitioning
                    ? Math.max(
                        -dimensions.cardWidth * 1.4,
                        -dimensions.availableWidth * 0.3
                      )
                    : 0;
                }

                const middleCardEffects = isMiddleCard
                  ? {
                      filter: isTransitioning
                        ? "brightness(1.1) saturate(1.2)"
                        : "brightness(1) saturate(1)",
                      boxShadow: isTransitioning
                        ? "0px 8px 20px 0px rgba(1, 27, 13, 0.15), 0px 2px 6px 0px rgba(255, 255, 255, 0.1)"
                        : "0px 4px 16px 0px rgba(1, 27, 13, 0.08)",
                    }
                  : {};

                return (
                  <motion.div
                    key={card.id}
                    className="absolute cursor-pointer group flex items-center"
                    style={{
                      width: `${dimensions.cardWidth}px`,
                      height: `${dimensions.cardHeight}px`,
                      zIndex: currentGroup.cards.length - index,
                    }}
                    initial={{
                      left: position.left,
                      top: position.top,
                      x: horizontalOffset,
                      y: 0,
                      scale: 1,
                    }}
                    animate={{
                      left: position.left,
                      top: position.top,
                      x: horizontalOffset,
                      y: 0,
                      scale: 1,
                      boxShadow:
                        middleCardEffects.boxShadow ||
                        "0px 4px 16px 0px rgba(1, 27, 13, 0.08)",
                      filter:
                        middleCardEffects.filter || "brightness(1) saturate(1)",
                    }}
                    transition={{
                      duration: isPositionTransitioning
                        ? 1.0
                        : slideDirection
                        ? 1.2
                        : 0.5,
                      ease: slideDirection ? "circOut" : "anticipate",
                      delay: isPositionTransitioning
                        ? index * 0.05
                        : slideDirection
                        ? index * 0.03
                        : 0,
                      type: "spring",
                      stiffness: slideDirection ? 100 : 200,
                      damping: slideDirection ? 25 : 20,
                    }}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      priority={true}
                      placeholder="blur"
                      sizes={`${dimensions.cardWidth}px`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Custom Navigation Controls using Flexbox */}
          <div className="flex justify-between items-center w-full">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="w-6 h-6 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <Image
                src={ArrowLeftCircle}
                alt="Previous"
                width={24}
                height={24}
                className="object-contain"
                loading="lazy"
              />
            </button>

            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="w-6 h-6 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <Image
                src={ArrowRightCircle}
                alt="Next"
                width={24}
                height={24}
                className="object-contain"
                loading="lazy"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-[15px]">
          <p
            className="font-open-sans text-[13px] xxs:text-[14px] xs:text-[15px]"
            style={{
              fontWeight: 300,
              lineHeight: "20px",
              color: "#2E2F2D",
              textAlign: "left",
            }}
          >
            {description}
          </p>

          {/* Request Access Button */}
          <button
            onClick={buttonAction}
            className="w-full h-8 rounded-[2px] transition-all duration-300 hover:opacity-80 justify-center flex items-center"
            style={{
              backgroundColor: "rgba(87, 81, 81, 0.1)",
            }}
          >
            <span
              className="font-open-sans text-[9px] xxs:text-[10px] xs:text-[11px]"
              style={{
                fontWeight: 400,
                lineHeight: "2.2222222222222223em",
                color: "rgba(0, 0, 0, 0.4)",
              }}
            >
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline Description Component
const DescriptionSectionInline = ({
  data,
}: {
  data: InlineDescriptionData;
}) => {
  const { mainText, backgroundImage, logoImage } = data;

  return (
    <div className="flex flex-col w-full min-h-[453px] relative overflow-hidden h-[480px]">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute -left-4 top-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt="Description background"
            fill
            className="object-cover object-left"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes="100vw"
          />
        </div>

        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.8) 85%, rgba(255, 255, 255, 1) 100%)",
          }}
        />

        {/* Background overlay with #FCFCFC gradient */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #FCFCFC 0%, rgba(252, 252, 252, 0) 80%, rgba(252, 252, 252, 0) 100%)",
          }}
        />
      </div>

      {/* Absolute positioned logo at top-right */}
      {logoImage && (
        <div className="absolute -right-13 top-0 z-20 w-auto h-auto overflow-hidden">
          <Image
            src={logoImage}
            alt="Logo description absolute"
            width={295}
            height={295}
            className="object-contain"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            style={{
              maxWidth: "295px",
              maxHeight: "295px",
            }}
            sizes="295px"
          />
        </div>
      )}

      {/* Content Container - Flexbox layout to push text to bottom */}
      <div className="absolute bottom-0 z-10 flex flex-col justify-end h-full md:px-8 pb-6 ml-4">
        <div className="flex-1" />

        <div className="w-full max-w-[354px] xxs:max-w-[364px] xs:max-w-[390px]">
          <p
            className="font-open-sans text-[13px] xxs:text-[13.5px] xs:text-[14.3px]"
            style={{
              fontWeight: 300,
              lineHeight: "1.5384615384615385em",
              textAlign: "left",
              color: "#2E2F2D",
            }}
          >
            {mainText}
          </p>
        </div>

        <div className="flex flex-col gap-[7px] mt-[8px] w-full max-w-[203px]">
          <div
            className="w-full h-0"
            style={{
              borderTop: "3px solid rgba(91, 95, 88, 0.04)",
            }}
          />
          <div
            className="w-[100px] h-0"
            style={{
              borderTop: "2px solid rgba(91, 95, 88, 0.04)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
