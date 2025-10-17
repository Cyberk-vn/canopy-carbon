import { useMemo } from "react";
import { useViewportDimensions } from "./use-viewport-dimensions";

interface CardPosition {
  left: number;
  bottom: number;  // Changed from top to bottom for upward stacking
  scale: number;
}

interface StableCardDimensions {
  cardWidth: number;
  cardHeight: number;
  availableWidth: number;
  containerHeight: number;
}

/**
 * Custom hook for generating stable card positions with fixed anchor points
 * This ensures smooth transitions between different card counts without position shifts
 */
export const useStableCardPositions = (cardCount: number) => {
  const { viewportWidth } = useViewportDimensions();

  const dimensions = useMemo((): StableCardDimensions => {
    // Fixed card dimensions as per requirement
    const cardWidth = 145;  // Fixed width
    const cardHeight = 203; // Fixed height

    // Available width for positioning
    // Account for actual container padding: px-[13px] = 13px each side
    const containerPaddingPerSide = 13;
    const containerTotalPadding = containerPaddingPerSide * 2; // 26px total

    // Also account for outer wrapper padding: px-[11px] = 11px each side
    const wrapperPaddingPerSide = 11;
    const wrapperTotalPadding = wrapperPaddingPerSide * 2; // 22px total

    // Total padding to account for
    const totalPadding = containerTotalPadding + wrapperTotalPadding; // 48px total
    const availableWidth = viewportWidth - totalPadding;

    // Container height based on fixed card height + stacking offsets
    // Need enough height for the tallest card (203px) + max bottom offset (20px)
    const containerHeight = cardHeight + 25; // 203 + 25 = 228px total

    return {
      cardWidth,
      cardHeight,
      availableWidth,
      containerHeight,
    };
  }, [viewportWidth]);

  const getStablePositions = useMemo(() => {
    return (): CardPosition[] => {
      const positions: CardPosition[] = [];
      const { cardWidth, availableWidth } = dimensions;

      if (cardCount === 0) return positions;

      // Calculate optimal overlap to fill viewport width
      // Formula: totalWidth = cardWidth + (cardCount - 1) * visiblePartOfEachCard
      // We want: totalWidth ≈ availableWidth

      // Calculate how much of each card should be visible to fill the width

      if (cardCount === 1) {
        // Single card - center it or align left
        return [{
          left: 0,
          bottom: 0,
          scale: 1
        }];
      }

      // For multiple cards, calculate spacing to fill width
      // availableWidth = cardWidth + (cardCount - 1) * spacing
      // spacing = (availableWidth - cardWidth) / (cardCount - 1)
      const calculatedSpacing = (availableWidth - cardWidth) / (cardCount - 1);

      // Constrain spacing to reasonable overlapping limits
      // We want cards to overlap, not spread apart
      const minOverlap = cardWidth * 0.4;  // At least 40% overlap
      const maxOverlap = cardWidth * 0.75; // At most 75% overlap

      // Convert overlap to spacing (spacing = cardWidth - overlap)
      const maxSpacing = cardWidth - minOverlap; // cardWidth * 0.6 (60% visible)
      const minSpacing = cardWidth - maxOverlap; // cardWidth * 0.25 (25% visible)

      // Use the calculated spacing, but constrain it
      const optimalSpacing = Math.max(minSpacing, Math.min(calculatedSpacing, maxSpacing));

      // Calculate total width and ensure it fits
      const totalWidth = cardWidth + (cardCount - 1) * optimalSpacing;

      // Ensure cards don't exceed available width
      let finalSpacing = optimalSpacing;
      let startOffset = 0;

      if (totalWidth > availableWidth) {
        // If cards would exceed width, recalculate spacing to fit exactly
        finalSpacing = (availableWidth - cardWidth) / (cardCount - 1);
      } else if (totalWidth < availableWidth) {
        // If there's extra space, center the card group
        startOffset = (availableWidth - totalWidth) / 2;
      }

      // Generate positions with calculated spacing
      for (let i = 0; i < cardCount; i++) {
        const bottomOffset = i * 4; // 4px vertical spacing between cards
        const horizontalOffset = startOffset + (i * finalSpacing);

        positions[i] = {
          left: horizontalOffset,
          bottom: bottomOffset,  // Stack upward progressively
          scale: 1 - (i * 0.01),  // Very minimal scale reduction (1%, 2%, 3%...)
        };
      }

      return positions;
    };
  }, [dimensions, cardCount]);

  return {
    dimensions,
    getCardPositions: getStablePositions,
  };
};