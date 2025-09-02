"use client";

import { useEffect, useState } from "react";
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
  const [isClient, setIsClient] = useState(false);
  const [forceAnimate, setForceAnimate] = useState(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
    
    // Small delay to ensure DOM is ready and layout is stable
    const timer = setTimeout(() => {
      // Check if we should force animate on page load (when element might already be in view)
      if (!hasTriggered) {
        setForceAnimate(true);
        // Reset force animate after animations have had time to trigger
        setTimeout(() => setForceAnimate(false), 1000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [hasTriggered]);

  const onViewportEnter = () => {
    if (once) {
      markAnimationTriggered(elementId, pathname);
    }
  };

  // If not client-side yet, return safe default props to avoid hydration mismatch
  if (!isClient) {
    return {
      viewport: { once: false, amount: 0.1 },
      onViewportEnter: () => {},
      // Ensure content is always visible during hydration
      initial: { opacity: 1 },
      animate: { opacity: 1 },
    };
  }

  return {
    viewport: { 
      once: once && !forceAnimate, 
      margin: "0px 0px -50px 0px",
      // Ensure viewport observer is more aggressive on initial load
      amount: forceAnimate ? 0.1 : ("some" as const),
    },
    onViewportEnter,
    // Force initial animation if needed, otherwise use normal whileInView
    ...(forceAnimate && !hasTriggered ? { 
      initial: "initial", 
      animate: "whileInView" 
    } : {}),
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
      delay: 0.3,
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
    transition: { delay: 0.3, duration: 0.3, ease: "easeOut" },
  },

  progressiveTitleFade: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { delay: 0.3, duration: 0.3, ease: "easeOut" },
  },

  progressiveDescriptionFade: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 15 },
    transition: { delay: 0.3, duration: 0.3, ease: "easeOut" },
  },

  desktopStaggeredCard: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeOut",
    },
  },
} as const;
