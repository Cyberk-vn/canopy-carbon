"use client";

import { ServiceCardData } from "@/src/types/service";
import {
  memo,
  forwardRef,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "motion/react";

interface ServiceCardProps {
  services: ServiceCardData[];
  autoRotateInterval?: number;
}

// Animation variants with directional transitions
const createContentVariants = (direction: number) => ({
  enter: {
    opacity: 0,
    x: direction * 100,
    scale: 0.95,
  },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: direction * -100,
    scale: 0.95,
  },
});

// Fade animation variants for content area
const contentAreaVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

// Fade-only animation variants for description text
const descriptionVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const titleVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const iconVariants = {
  enter: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  center: {
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: 10,
  },
};

const staggerContainer = {
  center: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

// Transition configurations with increased timing for smoother animations
const transitionConfig = {
  type: "spring" as const,
  stiffness: 180,
  damping: 25,
  mass: 1.2,
};

const fastTransition = {
  type: "spring" as const,
  stiffness: 220,
  damping: 28,
  mass: 1.0,
};

const quickTransition = {
  type: "spring" as const,
  stiffness: 280,
  damping: 32,
  mass: 0.8,
};

const ServiceCardIcon = memo(
  ({ iconType }: { iconType: ServiceCardData["iconType"] }) => {
    const getIconPath = () => {
      switch (iconType) {
        case "arr":
          return "/assets/icon/arr-icon.png";
        case "redd":
          return "/assets/icon/redd-icon.png";
        case "wrc":
          return "/assets/icon/wrc-icon.png";
        case "biochar":
          return "/assets/icon/blochar-icon.png";
        default:
          return null;
      }
    };

    const iconPath = getIconPath();
    if (!iconPath) return null;

    return (
      <motion.div
        variants={iconVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={quickTransition}
        className="shrink-0"
      >
        <Image
          src={iconPath}
          alt={`${iconType} icon`}
          width={28}
          height={28}
          className="shrink-0"
        />
      </motion.div>
    );
  }
);

ServiceCardIcon.displayName = "ServiceCardIcon";

// Animated Text Content Component
const AnimatedTextContent = memo(
  ({ currentService }: { currentService: ServiceCardData }) => {
    return (
      <motion.div
        key={currentService.id}
        variants={staggerContainer}
        initial="enter"
        animate="center"
        exit="exit"
        className="text-center max-w-[96%] md:max-w-[278px] flex flex-col gap-[7px]"
      >
        {/* Animated Full Title with directional transitions */}
        <motion.h3
          variants={titleVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transitionConfig}
          className="font-open-sans font-bold text-[#5B5F58] text-center text-[12px] md:text-[16px]"
          style={{
            lineHeight: "20px",
            letterSpacing: "-3%",
          }}
        >
          {currentService.fullTitle}
        </motion.h3>

        {/* Animated Description - Fade only */}
        <motion.p
          variants={descriptionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transitionConfig}
          className="font-open-sans font-normal text-[#5B5F58] text-center text-[11.5px] md:text-[14px]"
          style={{
            lineHeight: "15px",
          }}
        >
          {currentService.description}
        </motion.p>
      </motion.div>
    );
  }
);

AnimatedTextContent.displayName = "AnimatedTextContent";

export const ServiceCard = memo(
  forwardRef<HTMLDivElement, ServiceCardProps>(
    ({ services, autoRotateInterval = 3000 }, ref) => {
      const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
      const [swipeDirection, setSwipeDirection] = useState(1);
      const [isAutoRotating, setIsAutoRotating] = useState(true);
      const intervalRef = useRef<NodeJS.Timeout | null>(null);

      // Navigate to next/previous service
      const navigateToService = useCallback(
        (direction: number) => {
          setSwipeDirection(direction);
          setCurrentServiceIndex((prevIndex) => {
            if (direction === 1) {
              return prevIndex === services.length - 1 ? 0 : prevIndex + 1;
            } else {
              return prevIndex === 0 ? services.length - 1 : prevIndex - 1;
            }
          });
        },
        [services.length]
      );

      // Enhanced auto-rotation logic
      useEffect(() => {
        if (services.length <= 1 || !isAutoRotating) return;

        intervalRef.current = setInterval(() => {
          navigateToService(1); // Always go forward in auto-rotation
        }, autoRotateInterval);

        return () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        };
      }, [
        services.length,
        autoRotateInterval,
        isAutoRotating,
        navigateToService,
      ]);

      // Pause auto-rotation temporarily on manual interaction
      const pauseAutoRotation = () => {
        setIsAutoRotating(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        // Resume after 5 seconds
        setTimeout(() => {
          setIsAutoRotating(true);
        }, 5000);
      };

      // Accessibility: Respect prefers-reduced-motion
      const prefersReducedMotion =
        typeof window !== "undefined"
          ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
          : false;

      if (!services.length) return null;

      const currentService = services[currentServiceIndex];

      // Swipe gesture handlers
      const handlePanEnd = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
      ) => {
        const swipeThreshold = 50;

        if (Math.abs(info.offset.x) > swipeThreshold) {
          pauseAutoRotation();
          if (info.offset.x > 0) {
            // Swipe right - go to previous service
            navigateToService(-1);
          } else {
            // Swipe left - go to next service
            navigateToService(1);
          }
        }
      };

      const currentServiceVariants = createContentVariants(swipeDirection);

      return (
        <motion.div
          ref={ref}
          className="bg-[#EEF0F2] w-full service-card-aspect-ratio safari-service-card-fix max-h-[210px] p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-grab select-none"
          style={{
            aspectRatio: "4/3",
            WebkitTransform: "translateZ(0)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
          whileHover={{
            scale: prefersReducedMotion ? 1 : 1.02,
            transition: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onPanEnd={handlePanEnd}
          whileDrag={{ cursor: "grabbing" }}
        >
          <div
            className="w-full h-full flex flex-col gap-[25px]"
            style={{
              display: "flex",
              WebkitBoxOrient: "vertical",
              WebkitBoxDirection: "normal",
              WebkitFlexDirection: "column",
              flexDirection: "column",
              WebkitFlex: "1 1 auto",
              flex: "1 1 auto",
              minHeight: "100%",
              height: "100%",
            }}
          >
            {/* Animated Title Header */}
            <motion.div
              className="bg-white flex items-center justify-center h-[62px] py-[18px] px-[10px]"
              layout={!prefersReducedMotion}
            >
              <div className="flex items-center gap-2">
                <AnimatePresence mode="wait">
                  <ServiceCardIcon
                    key={`${currentService.id}-icon`}
                    iconType={currentService.iconType}
                  />
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${currentService.id}-abbrev`}
                    variants={currentServiceVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={
                      prefersReducedMotion ? { duration: 0.1 } : fastTransition
                    }
                    className="font-inter font-bold text-[#1D2E27] text-lg md:text-[20px]"
                    style={{ lineHeight: "30px" }}
                  >
                    {currentService.abbreviation}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Animated Content Area */}
            <motion.div
              className="relative overflow-hidden service-card-content-area"
              style={{
                // Safari flexbox fixes with explicit height calculation
                WebkitFlex: "1 1 auto",
                flex: "1 1 auto",
                minHeight: "calc(100% - 62px)",
                height: "calc(100% - 62px)",
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
                position: "relative",
                display: "flex",
                WebkitBoxPack: "center",
                justifyContent: "center",
                WebkitBoxAlign: "center",
                alignItems: "center",
              }}
              variants={contentAreaVariants}
              initial="enter"
              animate="center"
              transition={transitionConfig}
            >
              <motion.div
                className="flex flex-col px-[7px]"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  WebkitBoxPack: "center",
                  justifyContent: "start",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxOrient: "vertical",
                  flexDirection: "column",
                }}
                variants={contentAreaVariants}
                initial="enter"
                animate="center"
                transition={fastTransition}
              >
                <AnimatePresence mode="wait">
                  <AnimatedTextContent
                    key={`${currentService.id}-content`}
                    currentService={currentService}
                  />
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      );
    }
  )
);

ServiceCard.displayName = "ServiceCard";
