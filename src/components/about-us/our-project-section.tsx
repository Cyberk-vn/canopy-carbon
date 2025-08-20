"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  OurProjectSectionProps,
  CarouselImage,
  CarouselCardGroup,
} from "../../types/our-project";
import { useScrollAnimation } from "@/src/hooks/responsive/use-scroll-animation";

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
  backgroundImage: string;
  logoImage?: string;
}

// Default data for the component
const defaultData = {
  carouselData: {
    images: [
      {
        id: "1",
        src: "/assets/about-us/book-card-1.png",
        alt: "Team collaboration book card 1",
      },
      {
        id: "2",
        src: "/assets/about-us/book-card-2.png",
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
            src: "/assets/about-us/our-project-section/book-card-1-group/card-1.png",
            alt: "Book card group 1 - card 1",
          },
          {
            id: "card-1-2",
            src: "/assets/about-us/our-project-section/book-card-1-group/card-2.png",
            alt: "Book card group 1 - card 2",
          },
          {
            id: "card-1-3",
            src: "/assets/about-us/our-project-section/book-card-1-group/card-3.png",
            alt: "Book card group 1 - card 3",
          },
          {
            id: "card-1-4",
            src: "/assets/about-us/our-project-section/book-card-1-group/card-4.png",
            alt: "Book card group 1 - card 4",
          },
          {
            id: "card-1-5",
            src: "/assets/about-us/our-project-section/book-card-1-group/card-5.png",
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
            src: "/assets/about-us/our-project-section/book-card-2-group/card-1.png",
            alt: "Book card group 2 - card 1",
          },
          {
            id: "card-2-2",
            src: "/assets/about-us/our-project-section/book-card-2-group/card-2.png",
            alt: "Book card group 2 - card 2",
          },
          {
            id: "card-2-3",
            src: "/assets/about-us/our-project-section/book-card-2-group/card-3.png",
            alt: "Book card group 2 - card 3",
          },
          {
            id: "card-2-4",
            src: "/assets/about-us/our-project-section/book-card-2-group/card-4.png",
            alt: "Book card group 2 - card 4",
          },
          {
            id: "card-2-5",
            src: "/assets/about-us/our-project-section/book-card-2-group/card-5.png",
            alt: "Book card group 2 - card 5",
          },
          {
            id: "card-2-6",
            src: "/assets/about-us/our-project-section/book-card-2-group/card-6.png",
            alt: "Book card group 2 - card 6",
          },
        ],
      },
    ],
    description:
      "Our team upholds operational excellence through structured SOPs—formulated from field experience and refined over time—to ensure disciplined, accountable implementation across all workstreams.",
    buttonText: "Request Access",
    buttonAction: () => {
      // Default action - could be replaced with actual form submission or navigation
      console.log("Request Access clicked");
    },
  },
  descriptionData: {
    mainText:
      "At Canopy, we're institutionalizing the NBS carbon project model—bringing executional discipline, radical transparency, and long-term vision to deliver large-scale, high-integrity projects that anchor the emergence of carbon as a legitimate asset class.",
    backgroundImage:
      "/assets/about-us/our-project-section/description-bg.png",
    logoImage:
      "/assets/about-us/our-project-section/logo-description-absolute.png",
  },
};

export const OurProjectSection = ({
  data = defaultData,
}: OurProjectSectionProps) => {
  const { carouselData, descriptionData } = data;

  return (
    <section 
      ref={useScrollAnimation({ animationType: 'fadeInUp', threshold: 0.1 })}
      className="w-full px-0 md:px-[118px]"
    >
      <div className="w-full">
        <div className="flex flex-col lg:hidden">
          <div 
            ref={useScrollAnimation({ animationType: 'scaleIn', delay: 0, threshold: 0.3 })}
            className="w-full flex justify-center px-4 relative z-[2]"
          >
            <OurTeamCarouselInline
              data={{
                ...carouselData,
                buttonAction: carouselData.buttonAction || (() => {}),
              }}
            />
          </div>

          {/* Description Section - Mobile with 20px overlap */}
          <div 
            ref={useScrollAnimation({ animationType: 'fadeInUp', delay: 10, threshold: 0.3 })}
            className="w-full relative z-[1] -mt-5"
          >
            <DescriptionSectionInline data={descriptionData} />
          </div>
        </div>

        {/* Desktop Layout - Flexbox Side by Side */}
        <div className="hidden lg:flex lg:gap-3 lg:items-start">
          {/* Left Side - Carousel */}
          <div 
            ref={useScrollAnimation({ animationType: 'fadeInLeft', delay: 0, threshold: 0.3 })}
            className="flex-shrink-0 w-[368px] relative z-[2]"
          >
            <OurTeamCarouselInline
              data={{
                ...carouselData,
                buttonAction: carouselData.buttonAction || (() => {}),
              }}
            />
          </div>

          {/* Right Side - Description with 20px overlap */}
          <div 
            ref={useScrollAnimation({ animationType: 'fadeInRight', delay: 10, threshold: 0.3 })}
            className="flex-1 min-w-0 max-w-[492.87px] relative z-[1] -ml-5"
          >
            <DescriptionSectionInline data={descriptionData} />
          </div>
        </div>
      </div>
    </section>
  );
};

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

  const getCardPositions = (cardCount: number) => {
    const FIXED_LAST_CARD_POSITION = { left: 196.82, top: 0 };

    if (cardCount <= 5) {
      const positions = [
        { left: 0, top: 22.78 }, // Card 1
        { left: 49.81, top: 17.31 }, // Card 2
        { left: 98.71, top: 12.76 }, // Card 3
        { left: 148.22, top: 6.68 }, // Card 4
        FIXED_LAST_CARD_POSITION,
      ];
      return positions.slice(0, cardCount).map((pos) => ({
        left: `${pos.left}px`,
        top: `${pos.top}px`,
      }));
    } else {
      const positions = [
        { left: 0, top: 22.78 },
        { left: 41, top: 17.31 },
        { left: 82, top: 12.76 },
        { left: 123, top: 6.68 },
        { left: 164, top: 0 },
        FIXED_LAST_CARD_POSITION,
      ];
      return positions.slice(0, cardCount).map((pos) => ({
        left: `${pos.left}px`,
        top: `${pos.top}px`,
      }));
    }
  };

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
    <div className="w-full flex flex-col">
      <div className="flex gap-[8px] ml-[13px] mb-1">
        <div className="w-[76.44px] h-[43px] relative flex-shrink-0">
          <Image
            src="/assets/about-us/our-team-header-image.png"
            alt="Header decoration 1"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-full max-w-[368px] sm:w-[368px] rounded-[5px] touch-pan-y relative"
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
        <div className="flex flex-col mb-[14px]">
          <div className="relative mb-12">
            <div className="relative w-full max-w-[342px] h-[225.67px] mx-auto">
              {currentGroup.cards.map((card, index) => {
                const cardPositions = getCardPositions(
                  currentGroup.cards.length
                );
                const position =
                  cardPositions[index] ||
                  cardPositions[cardPositions.length - 1];

                const isLastCard = index === currentGroup.cards.length - 1;
                const isFirstCard = index === 0;
                const isMiddleCard = !isFirstCard && !isLastCard;
                let horizontalOffset = 0;

                if (!isLastCard && slideDirection === "left") {
                  horizontalOffset = isTransitioning ? 200 : 0;
                } else if (!isLastCard && slideDirection === "right") {
                  horizontalOffset = isTransitioning ? -200 : 0;
                }

                // Enhanced effects for middle cards
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
                  <div
                    key={card.id}
                    className="absolute w-[145.18px] h-[202.89px] cursor-pointer group"
                    style={{
                      left: position.left,
                      top: position.top,
                      boxShadow:
                        middleCardEffects.boxShadow ||
                        "0px 4px 16px 0px rgba(1, 27, 13, 0.08)",
                      opacity: 1,
                      transform: `translateX(${horizontalOffset}px) translateY(0px) scaleX(1) scaleY(1) rotate(0deg)`,
                      filter: middleCardEffects.filter || "none",
                      zIndex: currentGroup.cards.length - index,
                      transitionProperty:
                        "transform, box-shadow, left, top, filter",
                      transitionDuration: isPositionTransitioning
                        ? "1.0s"
                        : slideDirection
                        ? "1.2s"
                        : "0.5s",
                      transitionTimingFunction: slideDirection
                        ? "cubic-bezier(0.25, 0.8, 0.25, 1)"
                        : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      transitionDelay: isPositionTransitioning
                        ? `${index * 0.05}s`
                        : slideDirection
                        ? `${index * 0.03}s`
                        : "0s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = `translateX(${horizontalOffset}px) translateY(-5px) scale(1.05) rotate(0deg)`;
                      e.currentTarget.style.boxShadow = isMiddleCard
                        ? "0px 12px 28px 0px rgba(1, 27, 13, 0.2), 0px 4px 8px 0px rgba(255, 255, 255, 0.15)"
                        : "0px 8px 24px 0px rgba(1, 27, 13, 0.15)";
                      if (isMiddleCard) {
                        e.currentTarget.style.filter =
                          "brightness(1.15) saturate(1.3)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = `translateX(${horizontalOffset}px) translateY(0px) scale(1) rotate(0deg)`;
                      e.currentTarget.style.boxShadow =
                        middleCardEffects.boxShadow ||
                        "0px 4px 16px 0px rgba(1, 27, 13, 0.08)";
                      e.currentTarget.style.filter =
                        middleCardEffects.filter || "none";
                    }}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-cover rounded-[2px]"
                      priority={index < 2}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Custom Navigation Controls using Flexbox */}
          <div className="flex justify-between items-center w-full">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <Image
                src="/assets/about-us/our-project-section/arrow-left-circle.png"
                alt="Previous"
                width={32}
                height={32}
                className="object-contain"
              />
            </button>

            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <Image
                src="/assets/about-us/our-project-section/arrow-right-circle.png"
                alt="Next"
                width={32}
                height={32}
                className="object-contain"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[342px]">
          <p
            className="font-open-sans mb-4"
            style={{
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: "1.5384615384615385em",
              color: "#2E2F2D",
              textAlign: "left",
            }}
          >
            {description}
          </p>

          {/* Request Access Button */}
          <button
            onClick={buttonAction}
            className="w-full h-8 rounded-[2px] transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: "rgba(87, 81, 81, 0.1)",
            }}
          >
            <span
              className="font-open-sans"
              style={{
                fontSize: "9px",
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

// Inline Description Component (consolidated from description-section.tsx)
const DescriptionSectionInline = ({
  data,
}: {
  data: InlineDescriptionData;
}) => {
  const { mainText, backgroundImage, logoImage } = data;

  return (
    <div className="w-full h-auto">
      {/* Main Description Container using Flexbox Layout */}
      <div className="flex flex-col w-full min-h-[453px] lg:min-h-[492px] relative overflow-hidden8">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute left-0 top-0 w-full h-full">
            <Image
              src={backgroundImage}
              alt="Description background"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.8) 85%, rgba(255, 255, 255, 1) 100%)",
            }}
          />
        </div>

        {/* Absolute positioned logo at top-right */}
        {logoImage && (
          <div className="absolute right-0 top-0 z-20 w-auto h-auto">
            <Image
              src={logoImage}
              alt="Logo description absolute"
              width={295}
              height={295}
              className="object-contain"
              style={{
                maxWidth: "170px",
                maxHeight: "260px",
              }}
            />
          </div>
        )}

        {/* Content Container - Flexbox layout to push text to bottom */}
        <div className="absolute bottom-0 z-10 flex flex-col justify-end h-full px-5 md:px-8 pb-6 ml-4">
          <div className="flex-1" />

          <div className="w-full max-w-[354px]">
            <p
              className="font-open-sans"
              style={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: "1.5384615384615385em",
                textAlign: "left",
                color: "#2E2F2D",
              }}
            >
              {mainText}
            </p>
          </div>

          <div className="flex flex-col gap-[7px] mt-6 w-full max-w-[203px]">
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
    </div>
  );
};
