"use client";

import { useState, useEffect } from "react";

interface MobileDesktopState {
  isMobile: boolean;
  isDesktop: boolean;
  screenWidth: number;
}

/**
 * Simple hook for mobile/desktop detection
 * Uses 768px breakpoint to match Tailwind's md breakpoint
 */
export function useMobileDesktop(): MobileDesktopState {
  const [state, setState] = useState<MobileDesktopState>({
    isMobile: false,
    isDesktop: true,
    screenWidth: 1024,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;

      setState({
        isMobile,
        isDesktop: !isMobile,
        screenWidth: width,
      });
    };

    // Initial check immediately
    checkScreenSize();

    // Listen for resize events with passive option for better performance
    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return state;
}
