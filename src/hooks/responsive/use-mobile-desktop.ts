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
    screenWidth: 1024, // Default to desktop for SSR
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const isMobile = width < 768; // md breakpoint

      setState({
        isMobile,
        isDesktop: !isMobile,
        screenWidth: width,
      });
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return state;
}