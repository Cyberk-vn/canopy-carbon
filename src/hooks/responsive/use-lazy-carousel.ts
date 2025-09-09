import { useMemo } from "react";

/**
 * Custom hook for managing lazy loading in carousel components
 * Only loads current pair and adjacent pairs for optimal performance
 * 
 * @param currentIndex - Current carousel pair index
 * @param totalPairs - Total number of pairs in the carousel
 * @param preloadRange - Number of adjacent pairs to preload (default: 1)
 * @returns Array of indices that should be loaded
 */
export const useLazyCarousel = (
  currentIndex: number,
  totalPairs: number,
  preloadRange: number = 1
): number[] => {
  const loadedPairs = useMemo(() => {
    const indices: number[] = [];
    
    // Add current index
    indices.push(currentIndex);
    
    // Add adjacent pairs based on preload range
    for (let i = 1; i <= preloadRange; i++) {
      // Previous pairs
      const prevIndex = currentIndex - i;
      if (prevIndex >= 0) {
        indices.push(prevIndex);
      }
      
      // Next pairs
      const nextIndex = currentIndex + i;
      if (nextIndex < totalPairs) {
        indices.push(nextIndex);
      }
    }
    
    // Remove duplicates and sort
    return [...new Set(indices)].sort((a, b) => a - b);
  }, [currentIndex, totalPairs, preloadRange]);
  
  return loadedPairs;
};

/**
 * Hook to determine if a specific carousel pair should be loaded
 * 
 * @param pairIndex - Index of the pair to check
 * @param currentIndex - Current active pair index
 * @param totalPairs - Total number of pairs
 * @param preloadRange - Range of pairs to preload
 * @returns boolean indicating if the pair should be loaded
 */
export const useShouldLoadPair = (
  pairIndex: number,
  currentIndex: number,
  totalPairs: number,
  preloadRange: number = 1
): boolean => {
  const loadedPairs = useLazyCarousel(currentIndex, totalPairs, preloadRange);
  
  const shouldLoad = useMemo(() => {
    return loadedPairs.includes(pairIndex);
  }, [loadedPairs, pairIndex]);
  
  return shouldLoad;
};