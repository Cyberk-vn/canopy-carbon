"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ExecutionItem,
  EnhancedExecutionItem,
  OurExecutionSectionProps,
} from "@/src/types/execution";
import { useExecutionSwipe } from "@/src/hooks/execution/use-execution-swipe";
import { Container } from "@/src/components/shared";

// Image imports
import ExecutionImage1 from "../../../public/assets/desktop/home/our-execution-image-1.jpg";
import ExecutionImage2 from "../../../public/assets/desktop/home/our-execution-image-2.jpg";
import ExecutionImage3 from "../../../public/assets/desktop/home/our-execution-image-3.jpg";
import ExecutionImage4 from "../../../public/assets/desktop/home/our-execution-image-4.jpg";

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

  // Use Zustand store for state management (now consolidated)
  const {
    selectedPrincipleId,
    currentImageOffset,
    mobileExecutionItems,
    allPrinciples,
    autoSwitchState,
    actions,
    handleDragEnd, // Now comes from consolidated hook
  } = useExecutionSwipe();

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

  // Handle touch events for mobile
  const handleTouchStart = () => {
    if (autoSwitchState.enabled) {
      actions.pauseAutoSwitch();
    }
  };

  const handleTouchEnd = () => {
    // Resume after a short delay to prevent immediate restart during swipe
    setTimeout(() => {
      if (autoSwitchState.enabled) {
        actions.resumeAutoSwitch();
      }
    }, 1000);
  };

  // Mobile Execution Card Component
  const ExecutionCard = ({
    item,
    principleId,
  }: {
    item: EnhancedExecutionItem;
    principleId: number;
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
            key={`overlay-container-${principleId}`}
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
              {allPrinciples.find((p) => p.id === principleId)?.title ||
                item.title}
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
      <Container maxWidth="default" className="mt-6 px-[68px]">
        {/* Section Title */}
        <motion.div
          className="text-center lg:mb-[64px]"
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

        {/* Desktop Layout - 4 Cards Grid */}
        <div className="hidden lg:block">
          <Container maxWidth="default" padding="none">
            <div>
              <div className="grid grid-cols-4 gap-6 w-full">
                {desktopExecutionItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative mb-[31px]">
                      <Image
                        src={item.imageSrc}
                        alt={item.altText}
                        width={337}
                        height={577}
                        className="object-cover shadow-lg w-full h-auto aspect-[337/577]"
                        priority={index < 2}
                      />
                    </div>

                    {/* Title */}
                    {item.title && (
                      <motion.h3
                        className="text-center text-[20px] font-medium text-[#000000] leading-tight"
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: 600,
                          lineHeight: "30px",
                        }}
                        initial={{ opacity: 0, y: 15 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 15 }
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
          </Container>
        </div>

        {/* Mobile/Tablet Layout - Fixed 3-Card Layout with Fade Transitions */}
        <div className="block lg:hidden">
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

          <motion.div
            className="relative w-full overflow-visible"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.1,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label="Execution principles carousel"
          >
            {/* Fixed 3-Card Container */}
            <div
              className="flex items-center justify-center gap-4 px-6 py-[30px] min-h-[326px]"
              style={{
                willChange: "contents",
                transform: "translate3d(0, 0, 0)",
              }}
              role="group"
              aria-label="Execution principle cards"
            >
              <AnimatePresence mode="wait">
                {mobileExecutionItems.map((item, index) => (
                  <motion.div
                    key={`${selectedPrincipleId}-${currentImageOffset}-${index}`}
                    className={`flex-shrink-0 ${index === 1 ? "z-10" : ""}`}
                    style={{
                      marginLeft: index > 0 ? "-2px" : "0",
                      marginRight: index < 2 ? "-2px" : "0",
                      willChange: "transform, box-shadow",
                      transform: "translate3d(0, 0, 0)",
                    }}
                    initial={{ y: 4, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      boxShadow:
                        index === 1
                          ? "0px 8px 24px 0px rgba(1, 12, 27, 0.15), 0px 2px 6px 0px rgba(255, 255, 255, 0.1)"
                          : "0px 2px 8px 0px rgba(1, 12, 27, 0.05)",
                      filter:
                        index === 1
                          ? "brightness(1) saturate(1.05)"
                          : "brightness(0.92) saturate(0.95)",
                      scale: index === 1 ? 1.02 : 0.98,
                    }}
                    exit={{ y: -4, opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      type: "tween",
                    }}
                  >
                    <ExecutionCard
                      item={item}
                      principleId={selectedPrincipleId}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OurExecutionSection;
export { OurExecutionSection };
