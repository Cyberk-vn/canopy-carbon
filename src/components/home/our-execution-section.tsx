"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ExecutionItem, OurExecutionSectionProps } from "@/src/types/execution";
import { EXECUTION_PRINCIPLES } from "@/src/types/execution-swipe";
import { Container } from "@/src/components/shared";
import { useResponsive } from "@/src/lib/utils/use-responsive";

// Image imports
import ExecutionImage1 from "../../../public/assets/desktop/home/our-execution-image-1.avif";
import ExecutionImage2 from "../../../public/assets/desktop/home/our-execution-image-2.avif";
import ExecutionImage3 from "../../../public/assets/desktop/home/our-execution-image-3.avif";
import ExecutionImage4 from "../../../public/assets/desktop/home/our-execution-image-4.avif";

// Desktop execution items (new grid layout images)
const desktopExecutionItems: ExecutionItem[] = [
  {
    id: 1,
    imageSrc: ExecutionImage1,
    altText: "Precision in Delivery",
    title: "Precision in Delivery",
  },
  {
    id: 2,
    imageSrc: ExecutionImage2,
    altText: "Community Focused",
    title: "Community Focused",
  },
  {
    id: 3,
    imageSrc: ExecutionImage3,
    altText: "Environmental Integrity",
    title: "Environmental Integrity",
  },
  {
    id: 4,
    imageSrc: ExecutionImage4,
    altText: "Radical Transparency",
    title: "Radical Transparency",
  },
];

const OurExecutionSection = ({ className = "" }: OurExecutionSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Responsive hook for conditional rendering
  const { isMobile } = useResponsive();

  // Mobile carousel state - matching mobile-view pattern
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [isAutoPlayTransition, setIsAutoPlayTransition] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;
  const totalGroups = 4; // 4 execution principles

  // Card dimensions for mobile
  const cardDimensions = {
    left: { width: 159, height: 250 },
    center: { width: 220, height: 326 },
    right: { width: 159, height: 250 },
  };

  // Auto-reset slide direction after animation completes
  useEffect(() => {
    if (slideDirection) {
      const timer = setTimeout(() => {
        setSlideDirection(null);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [slideDirection]);

  // Auto-play logic
  const startAutoPlay = useCallback(() => {
    if (totalGroups <= 1 || isAutoPlayPaused) return;

    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }

    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlayTransition(true);
      setSlideDirection("left");
      setTimeout(() => {
        setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
      }, 50);
    }, 3000);
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

  // Start auto-play on mount and when group changes
  useEffect(() => {
    if (!isMobile) return;

    startAutoPlay();
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [startAutoPlay, currentGroupIndex, isMobile]);

  // Cleanup on unmount
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

  // Touch event handlers
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
    setIsAutoPlayTransition(false);
    setIsTransitioning(true);
    setSlideDirection("left");

    setTimeout(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
      setIsTransitioning(false);
    }, 50);
  };

  const handlePrev = () => {
    if (isTransitioning || totalGroups <= 1) return;

    pauseAutoPlay();
    setIsAutoPlayTransition(false);
    setIsTransitioning(true);
    setSlideDirection("right");

    setTimeout(() => {
      setCurrentGroupIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
      setIsTransitioning(false);
    }, 50);
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden w-full ${className}`}
      role="region"
      aria-label="Our Execution Ethos"
    >
      <Container maxWidth="full" className="mt-6 lg:px-0">
        {/* Section Title - Mobile */}
        {isMobile && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 1.35,
              ease: [0.175, 0.885, 0.32, 1.275],
              delay: 0.3,
            }}
          >
            <h2
              className="text-[20px] font-light text-[#2E2F2D]"
              style={{ fontFamily: "Open Sans", lineHeight: "30px" }}
            >
              Our Execution Ethos
            </h2>
          </motion.div>
        )}

        {/* Section Title - Tablet/Desktop */}
        {!isMobile && (
          <motion.div
            className="text-center mb-[75px]"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 1.35,
              ease: [0.175, 0.885, 0.32, 1.275],
              delay: 0.3,
            }}
          >
            <h2
              className="md:text-[35px] text-[#2E2F2D]"
              style={{
                fontFamily: "Open Sans",
                lineHeight: "49px",
                fontWeight: 400,
              }}
            >
              Our Execution Ethos
            </h2>
          </motion.div>
        )}

        {/* Desktop Layout - 4 Cards Grid */}
        {!isMobile && (
          <div className="w-full">
            <div className="flex gap-[24px] 3xl:gap-[54px] w-full justify-center items-center max-w-[1680px] mx-auto md:px-[24px] lg:px-[68px]">
              {desktopExecutionItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex flex-col items-center"
                  style={{
                    flex: "1 1 337px",
                    minWidth: 0,
                    maxWidth: "337px",
                  }}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 50, scale: 0.95 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <div className="relative md:mb-[21px] lg:mb-[31px] w-full max-w-[337px] aspect-[337/577]">
                    <Image
                      src={item.imageSrc}
                      alt={item.altText}
                      fill
                      className="object-cover shadow-lg"
                      priority={index < 2}
                      sizes="(min-width: 1600px) 337px, (min-width: 1024px) calc(25vw - 20px), 100vw"
                    />
                  </div>

                  {item.title && (
                    <motion.h3
                      className="text-center text-[14px] text-[#1E2E26] lg:text-[18px] xl:text-[20px] font-open-sans font-[700] leading-[28px]"
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={
                        isInView
                          ? { opacity: 1, y: 0, scale: 1 }
                          : { opacity: 0, y: 15, scale: 0.98 }
                      }
                      transition={{
                        duration: 0.95,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: index * 0.1 + 0.8,
                      }}
                    >
                      {item.title}
                    </motion.h3>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile - Pre-rendered Groups with Position-Based Animation */}
        {isMobile && (
          <div
            className="relative w-full overflow-hidden px-6 my-[20px] pb-3"
            style={{ touchAction: "pan-y" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="relative mx-auto flex flex-col items-center"
              style={{ height: `${cardDimensions.center.height}px` }}
            >
              {/* Pre-render all 4 principle groups with AnimatePresence sync */}
              <AnimatePresence initial={false} mode="sync">
                {EXECUTION_PRINCIPLES.map((principle, groupIndex) => {
                  const isCurrentGroup = groupIndex === currentGroupIndex;
                  const images = principle.images;

                  return (
                    <motion.div
                      key={principle.id}
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isCurrentGroup ? 1 : 0,
                        pointerEvents: isCurrentGroup ? "auto" : "none",
                      }}
                      transition={{
                        opacity: { duration: 0.3, ease: "easeInOut" },
                      }}
                    >
                      <div className="flex items-center justify-center gap-4 h-full">
                        {/* Left card */}
                        <motion.div
                          className="flex-shrink-0"
                          animate={{
                            x:
                              slideDirection === "left" &&
                              isCurrentGroup &&
                              isTransitioning
                                ? cardDimensions.left.width * 1.4
                                : slideDirection === "right" &&
                                  isCurrentGroup &&
                                  isTransitioning
                                ? -cardDimensions.left.width * 1.4
                                : 0,
                            scale: isCurrentGroup && isTransitioning && isAutoPlayTransition ? 0.98 : 1,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            scale: { duration: 0.5, ease: "easeInOut" },
                          }}
                        >
                          <div
                            className="relative"
                            style={{
                              width: `${cardDimensions.left.width}px`,
                              height: `${cardDimensions.left.height}px`,
                              boxShadow:
                                "0px 2px 8px 0px rgba(1, 12, 27, 0.05)",
                              filter: "brightness(0.92) saturate(0.95)",
                            }}
                          >
                            <Image
                              src={images[0]}
                              alt={`${principle.title} - Left`}
                              width={cardDimensions.left.width}
                              height={cardDimensions.left.height}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </motion.div>

                        {/* Center card (Main) */}
                        <motion.div
                          className="flex-shrink-0 z-10"
                          animate={{
                            x:
                              slideDirection === "left" &&
                              isCurrentGroup &&
                              isTransitioning
                                ? cardDimensions.center.width * 1.4
                                : slideDirection === "right" &&
                                  isCurrentGroup &&
                                  isTransitioning
                                ? -cardDimensions.center.width * 1.4
                                : 0,
                            scale: isCurrentGroup && isTransitioning && isAutoPlayTransition ? 1.05 : 1,
                            filter:
                              isCurrentGroup && isTransitioning
                                ? "brightness(1.1) saturate(1.2)"
                                : "brightness(1) saturate(1)",
                            boxShadow:
                              isCurrentGroup && isTransitioning
                                ? "0px 8px 20px 0px rgba(1, 12, 27, 0.15), 0px 2px 6px 0px rgba(255, 255, 255, 0.1)"
                                : "0px 4px 16px 0px rgba(1, 12, 27, 0.08)",
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            scale: {
                              duration: 0.4,
                              ease: [0.34, 1.56, 0.64, 1],
                            },
                          }}
                        >
                          <div
                            className="relative"
                            style={{
                              width: `${cardDimensions.center.width}px`,
                              height: `${cardDimensions.center.height}px`,
                            }}
                          >
                            <Image
                              src={images[1]}
                              alt={`${principle.title} - Main`}
                              width={cardDimensions.center.width}
                              height={cardDimensions.center.height}
                              className="w-full h-full object-cover"
                              priority={isCurrentGroup}
                            />
                            {/* Text overlay */}
                            <div
                              className="absolute bottom-0 left-0 right-0 bg-[#F7F7F7] flex items-center justify-center"
                              style={{ height: "64px" }}
                            >
                              <h3
                                className="text-black font-semibold text-[15px] leading-[1.6] text-center px-2"
                                style={{
                                  fontFamily: "Open Sans",
                                  fontWeight: 600,
                                }}
                              >
                                {principle.title}
                              </h3>
                            </div>
                          </div>
                        </motion.div>

                        {/* Right card */}
                        <motion.div
                          className="flex-shrink-0"
                          animate={{
                            x:
                              slideDirection === "left" &&
                              isCurrentGroup &&
                              isTransitioning
                                ? cardDimensions.right.width * 1.4
                                : slideDirection === "right" &&
                                  isCurrentGroup &&
                                  isTransitioning
                                ? -cardDimensions.right.width * 1.4
                                : 0,
                            scale: isCurrentGroup && isTransitioning && isAutoPlayTransition ? 0.98 : 1,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            scale: { duration: 0.5, ease: "easeInOut" },
                          }}
                        >
                          <div
                            className="relative"
                            style={{
                              width: `${cardDimensions.right.width}px`,
                              height: `${cardDimensions.right.height}px`,
                              boxShadow:
                                "0px 2px 8px 0px rgba(1, 12, 27, 0.05)",
                              filter: "brightness(0.92) saturate(0.95)",
                            }}
                          >
                            <Image
                              src={images[2]}
                              alt={`${principle.title} - Right`}
                              width={cardDimensions.right.width}
                              height={cardDimensions.right.height}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default OurExecutionSection;
export { OurExecutionSection };
