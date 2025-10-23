"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ExecutionItem,
  EnhancedExecutionItem,
  OurExecutionSectionProps,
} from "@/src/types/execution";
import { useExecutionSwipe } from "@/src/hooks/execution/use-execution-swipe";
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

  // Use Zustand store for state management (now consolidated)
  const {
    selectedPrincipleId,
    currentImageOffset,
    allPrinciples,
    autoSwitchState,
    actions,
    handleDragEnd, // Now comes from consolidated hook
    canSwipe,
  } = useExecutionSwipe();

  // Callback to sync animation completion with store state
  const handleAnimationComplete = useCallback(() => {
    // This ensures the component knows when Motion has finished animating
    // Helps prevent mid-animation state changes
    if (!canSwipe) {
      // Transition should be complete by now
      actions.endTransition();
    }
  }, [canSwipe, actions]);

  // Check for reduced motion preference
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;

      // Disable auto-switch if user prefers reduced motion
      if (e.matches && autoSwitchState.enabled) {
        actions.toggleAutoSwitch();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // Initial check - disable auto-switch if reduced motion is preferred
    if (mediaQuery.matches && autoSwitchState.enabled) {
      actions.toggleAutoSwitch();
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [autoSwitchState.enabled, actions]);

  // Handle pause/resume on hover and focus events
  const handleMouseEnter = () => {
    if (autoSwitchState.enabled) {
      actions.pauseAutoSwitch();
    }
  };

  const handleMouseLeave = () => {
    if (autoSwitchState.enabled) {
      actions.resumeAutoSwitch();
    }
  };

  const handleFocus = () => {
    if (autoSwitchState.enabled) {
      actions.pauseAutoSwitch();
    }
  };

  const handleBlur = () => {
    if (autoSwitchState.enabled) {
      actions.resumeAutoSwitch();
    }
  };

  // Touch/drag handling for mobile swipe
  const dragStart = useRef({ x: 0, y: 0, timestamp: 0 });
  const isDragging = useRef(false);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragStart.current = { x: e.clientX, y: e.clientY, timestamp: Date.now() };
      isDragging.current = true;
      if (autoSwitchState.enabled) {
        actions.pauseAutoSwitch();
      }
    },
    [autoSwitchState.enabled, actions]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;

      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;
      const distance = Math.abs(deltaX);

      // Calculate actual velocity (px/ms)
      const endTime = Date.now();
      const deltaTime = Math.max(endTime - dragStart.current.timestamp, 1); // Prevent division by zero
      const velocityX = (deltaX / deltaTime) * 1000; // Convert to px/s
      const velocityY = (deltaY / deltaTime) * 1000;

      // Only trigger swipe if horizontal movement is dominant
      if (distance > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        // Create DragInfo object with accurate velocity
        const mockInfo = {
          offset: { x: deltaX, y: deltaY },
          velocity: { x: velocityX, y: velocityY },
        };

        handleDragEnd(e.nativeEvent as PointerEvent, mockInfo);
      }

      isDragging.current = false;

      // Resume auto-switch after delay
      setTimeout(() => {
        if (autoSwitchState.enabled) {
          actions.resumeAutoSwitch();
        }
      }, 1000);
    },
    [autoSwitchState.enabled, actions, handleDragEnd]
  );

  // Legacy touch events for compatibility
  const handleTouchStart = () => {
    if (autoSwitchState.enabled) {
      actions.pauseAutoSwitch();
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      if (autoSwitchState.enabled) {
        actions.resumeAutoSwitch();
      }
    }, 1000);
  };

  // Mobile Execution Card Component
  const ExecutionCard = ({
    item,
  }: {
    item: EnhancedExecutionItem;
  }) => {
    const cardShadow = item.isMainCard
      ? "0px 3px 10px 0px rgba(1, 12, 27, 0.1)"
      : "";

    return (
      <div
        className="relative"
        style={{
          width: `${item.cardWidth}px`,
          height: `${item.cardHeight}px`,
          boxShadow: cardShadow,
          willChange: item.isMainCard ? "transform" : "auto",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {/* Direct image render - no loading states or placeholders */}
        <Image
          src={item.imageSrc}
          alt={item.altText}
          width={item.cardWidth}
          height={item.cardHeight}
          className="w-full h-full object-cover"
          priority={item.isMainCard}
          loading={item.isMainCard ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={item.isMainCard ? "high" : "auto"}
        />

        {/* Text Overlay for Selected Card */}
        {item.hasTextOverlay && (
          <div
            className="absolute bottom-0 left-[-2] right-0 bg-[#F7F7F7] border-[#F7F7F7] flex items-center justify-center"
            style={{
              height: "64px",
              width: item.cardWidth + 4,
            }}
          >
            <h3
              className="text-black font-semibold text-[15px] leading-[1.6] text-center"
              style={{
                fontFamily: "Open Sans",
                fontWeight: 600,
              }}
            >
              {item.title}
            </h3>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden w-full focus:outline-none ${className}`}
      tabIndex={0}
      role="region"
      aria-label="Our Execution Ethos"
      aria-live="polite"
      aria-atomic="false"
      onFocus={handleFocus}
      onBlur={handleBlur}
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

        {/* Mobile - Pre-rendered 3-Card Layout with Smooth Transitions */}
        {isMobile && (
          <div>
            {/* Auto-switch status indicator for screen readers */}
            <div className="sr-only" aria-live="polite">
              {autoSwitchState.enabled &&
              autoSwitchState.isRunning &&
              !autoSwitchState.isPaused
                ? "Auto-switching cards every 3 seconds. Hover or focus to pause."
                : autoSwitchState.isPaused
                ? "Auto-switching paused"
                : "Auto-switching disabled"}
            </div>

            <div
              className="relative w-full overflow-visible cursor-grab active:cursor-grabbing"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              aria-label="Execution principles carousel"
              style={{
                touchAction: "pan-y pinch-zoom",
                userSelect: "none",
              }}
            >
              {/* Pre-rendered Principle Groups Container */}
              <div
                className="relative px-6 my-[30px] min-h-[326px]"
                style={{
                  willChange: "contents",
                  transform: "translate3d(0, 0, 0)",
                }}
                role="group"
                aria-label="Execution principle cards"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {/* Pre-render all principle groups */}
                  {allPrinciples.map((principle) => {
                  const isActivePrinciple =
                    principle.id === selectedPrincipleId;

                  // Get the items for this specific principle
                  const principleItems = (() => {
                    // SYNC FIX: Always use currentImageOffset to prevent visual jumps
                    // All principles render with same offset, only opacity changes
                    const principleImageOffset = currentImageOffset;

                    const getImageIndex = (offset: number) => {
                      return (
                        (principleImageOffset +
                          offset +
                          principle.images.length) %
                        principle.images.length
                      );
                    };

                    return [
                      {
                        id: principle.id * 100 + 1,
                        imageSrc: principle.images[getImageIndex(-1)],
                        altText: `${principle.altTextBase} - Left card`,
                        title: principle.title,
                        cardWidth: 159,
                        cardHeight: 250,
                        isMainCard: false,
                        hasTextOverlay: false,
                        groupId: `execution-group-${principle.id}`,
                        isSelected: false,
                        selectionIndex: 0,
                      },
                      {
                        id: principle.id * 100 + 2,
                        imageSrc: principle.images[getImageIndex(0)],
                        altText: `${principle.altTextBase} - Main featured card`,
                        title: principle.title,
                        cardWidth: 220,
                        cardHeight: 326,
                        isMainCard: true,
                        hasTextOverlay: true,
                        groupId: `execution-group-${principle.id}`,
                        isSelected: true,
                        selectionIndex: 1,
                      },
                      {
                        id: principle.id * 100 + 3,
                        imageSrc: principle.images[getImageIndex(1)],
                        altText: `${principle.altTextBase} - Right card`,
                        title: principle.title,
                        cardWidth: 159,
                        cardHeight: 250,
                        isMainCard: false,
                        hasTextOverlay: false,
                        groupId: `execution-group-${principle.id}`,
                        isSelected: false,
                        selectionIndex: 2,
                      },
                    ];
                  })();

                  return (
                    <motion.div
                      key={`principle-group-${principle.id}`}
                      layoutId={`execution-principle-${principle.id}`}
                      className="absolute inset-0 flex items-center justify-center gap-4"
                      initial={false}
                      animate={{
                        opacity: isActivePrinciple ? 1 : 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        opacity: {
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier for smoother easing
                        },
                        layout: {
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }
                      }}
                      onAnimationComplete={isActivePrinciple ? handleAnimationComplete : undefined}
                      style={{
                        pointerEvents: isActivePrinciple ? "auto" : "none",
                        zIndex: isActivePrinciple ? 2 : 1,
                        willChange: isActivePrinciple ? "opacity" : "auto",
                      }}
                    >
                      {principleItems.map((item, index) => {
                        const isCenter = index === 1;

                        return (
                          <div
                            key={`card-${principle.id}-${index}`}
                            className={`flex-shrink-0 transition-all duration-500 ease-out ${
                              isCenter ? "z-10 scale-[1.02]" : "scale-[0.98]"
                            }`}
                            style={{
                              marginLeft: index > 0 ? "-2px" : "0",
                              marginRight: index < 2 ? "-2px" : "0",
                            }}
                          >
                            <div
                              style={{
                                boxShadow: isCenter
                                  ? "0px 8px 24px 0px rgba(1, 12, 27, 0.15), 0px 2px 6px 0px rgba(255, 255, 255, 0.1)"
                                  : "0px 2px 8px 0px rgba(1, 12, 27, 0.05)",
                                filter: isCenter
                                  ? "brightness(1) saturate(1.05)"
                                  : "brightness(0.92) saturate(0.95)",
                                borderRadius: "0px",
                                overflow: "hidden",
                              }}
                            >
                              <ExecutionCard
                                item={item}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  );
                })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default OurExecutionSection;
export { OurExecutionSection };
