"use client";

import { usePathname } from "next/navigation";
import {
  useScrollAnimationActions,
  useHasAnimationTriggered,
} from "@/src/stores/scroll-animation.store";

/**
 * Simple hook for Motion whileInView animations with Zustand persistence
 * Returns props that can be spread directly on motion.div elements
 */
export function useSimpleMotion(elementId: string, once: boolean = true) {
  const pathname = usePathname();
  const { markAnimationTriggered } = useScrollAnimationActions();
  const hasTriggered = useHasAnimationTriggered(elementId, pathname);

  const onViewportEnter = () => {
    if (once) {
      markAnimationTriggered(elementId, pathname);
    }
  };

  return {
    viewport: { once, margin: "0px 0px -50px 0px" },
    onViewportEnter,
    // Skip animation if already triggered
    ...(hasTriggered && once ? {} : {}),
  };
}

/**
 * Pre-configured animation variants for common patterns
 */
export const SIMPLE_ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },

  slideInUp: {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

/**
 * Specialized animation variants for Statistics Cards Carousel
 * Includes exact timing specifications: 1500ms delay, 300ms duration, ease-out
 */
export const STATISTICS_ANIMATIONS = {
  cardFadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      delay: 0.7,
      duration: 0.3,
      ease: "easeOut",
    },
  },

  smartCardSwitch: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  progressiveNumberFade: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { delay: 0.7, duration: 0.3, ease: "easeOut" },
  },

  progressiveTitleFade: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { delay: 0.7, duration: 0.3, ease: "easeOut" },
  },

  progressiveDescriptionFade: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 15 },
    transition: { delay: 0.7, duration: 0.3, ease: "easeOut" },
  },

  desktopStaggeredCard: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      delay: 0.7,
      duration: 0.3,
      ease: "easeOut",
    },
  },
} as const;
