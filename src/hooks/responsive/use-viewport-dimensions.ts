import { useState, useEffect } from "react";

interface ViewportDimensions {
  viewportWidth: number;
  viewportHeight: number;
}

/**
 * Hook to get viewport dimensions
 */
export const useViewportDimensions = (): ViewportDimensions => {
  const [dimensions, setDimensions] = useState<ViewportDimensions>({
    viewportWidth: typeof window !== "undefined" ? window.innerWidth : 375,
    viewportHeight: typeof window !== "undefined" ? window.innerHeight : 667,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Initial call
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};