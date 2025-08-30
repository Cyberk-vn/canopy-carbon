"use client";

import { useMemo } from "react";
import { useMobileDesktop } from "./use-mobile-desktop";
import { CarouselCardGroup } from "../../types/our-project";

interface FixedCardDimensions {
  cardWidth: number;
  cardHeight: number;
  containerHeight: number;
  availableWidth: number;
  overlapRatio: number;
}

interface CardPosition {
  left: string;
  top: string;
}

/**
 * Hook for fixed card dimensions with variable overlap ratios
 * Ensures visual consistency by using same card size across all groups
 * Adjusts overlap ratios dynamically to optimize width utilization
 */
export function useResponsiveCardDimensions(
  allCardGroups: CarouselCardGroup[],
  currentCardCount: number
): {
  dimensions: FixedCardDimensions;
  getCardPositions: () => CardPosition[];
} {
  const { isMobile, screenWidth } = useMobileDesktop();

  // Fixed card dimensions - same for all groups
  const FIXED_CARD_WIDTH = 150;
  const FIXED_CARD_HEIGHT = 210; // Maintains 0.715 aspect ratio (150 / 0.715 ≈ 210)
  const VERTICAL_STAGGER = 8.0; // Increased vertical gap between overlapping cards
  const BOTTOM_PADDING = 20;

  // Calculate fixed container height that works for all card groups
  const containerHeight = useMemo(() => {
    // Get all unique card counts from card groups
    const cardCounts = allCardGroups?.length 
      ? [...new Set(allCardGroups.map(group => group.cards.length))]
      : [5, 6]; // Default fallback
    
    const maxCards = Math.max(...cardCounts);
    const maxVerticalOffset = (maxCards - 1) * VERTICAL_STAGGER;
    
    return FIXED_CARD_HEIGHT + maxVerticalOffset + BOTTOM_PADDING;
  }, [allCardGroups]); // Only depends on card groups, not screen size

  // Calculate available width based on screen type
  const availableWidth = useMemo(() => {
    const horizontalPadding = 26; // px-[13px] = 26px total
    const safetyMargin = 10; // Additional margin for safety
    
    let containerWidth: number;
    if (isMobile) {
      // Mobile: Use most of screen width minus padding and safety margin
      containerWidth = Math.min(screenWidth - horizontalPadding - safetyMargin, screenWidth * 0.9);
    } else {
      // Desktop: Fixed container width from existing implementation
      containerWidth = 368 - safetyMargin;
    }
    
    return Math.max(containerWidth - horizontalPadding, 200); // Minimum width fallback
  }, [isMobile, screenWidth]);

  // Calculate overlap ratio for current card count
  const calculateOverlapRatio = useMemo(() => {
    return (cardCount: number, availableWidth: number, cardWidth: number): number => {
      // Total width needed if no overlap
      const totalCardWidth = cardCount * cardWidth;
      
      // If cards fit without overlap, use enhanced overlap for better visual layering
      if (totalCardWidth <= availableWidth) {
        return 0.15; // 15% overlap for better visual stacking effect
      }
      
      // Calculate required overlap to fit all cards
      const overlapNeeded = totalCardWidth - availableWidth;
      
      // Overlap ratio = overlap per card / card width
      const overlapRatio = Math.min(
        overlapNeeded / ((cardCount - 1) * cardWidth),
        0.8 // Maximum 80% overlap for readability
      );
      
      return Math.max(overlapRatio, 0.15); // Minimum 15% for better visual overlap effect
    };
  }, []);

  // Calculate dimensions for current group
  const dimensions = useMemo(() => {
    const overlapRatio = calculateOverlapRatio(currentCardCount, availableWidth, FIXED_CARD_WIDTH);
    
    return {
      cardWidth: FIXED_CARD_WIDTH,
      cardHeight: FIXED_CARD_HEIGHT,
      containerHeight,
      availableWidth,
      overlapRatio,
    };
  }, [currentCardCount, availableWidth, containerHeight, calculateOverlapRatio]);

  const getCardPositions = useMemo(() => {
    return (): CardPosition[] => {
      const { cardWidth, overlapRatio, availableWidth } = dimensions;
      
      // Calculate effective card width (how much space each card occupies with overlap)
      const effectiveCardWidth = cardWidth * (1 - overlapRatio);
      
      // Calculate total width needed for all cards
      const totalWidth = (currentCardCount - 1) * effectiveCardWidth + cardWidth;
      
      // Calculate starting offset to center the cards within available width
      const startOffset = Math.max(0, (availableWidth - totalWidth) / 2);
      
      return Array.from({ length: currentCardCount }, (_, index) => {
        const leftPosition = startOffset + (index * effectiveCardWidth);
        // Ensure card doesn't exceed container boundaries
        const constrainedLeft = Math.min(leftPosition, availableWidth - cardWidth);
        
        // Consistent vertical staggering - rightward cards appear higher (lower top offset)
        const topOffset = (currentCardCount - 1 - index) * VERTICAL_STAGGER;
        
        return {
          left: `${Math.max(0, constrainedLeft)}px`,
          top: `${topOffset}px`,
        };
      });
    };
  }, [dimensions, currentCardCount, VERTICAL_STAGGER]);

  return {
    dimensions,
    getCardPositions,
  };
}