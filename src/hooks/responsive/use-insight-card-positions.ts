import { useMemo } from "react";
import { useViewportDimensions } from "./use-viewport-dimensions";

interface CardPosition {
  left: number;
  top: number;
  scale: number;
}

interface InsightCardDimensions {
  cardWidth: number;
  cardHeight: number;
  availableWidth: number;
  containerHeight: number;
}

/**
 * Custom hook for generating stable card positions for InsightSection stacked images
 * Specifically designed for 5 cards with dimensions 114×159px
 */
export const useInsightCardPositions = () => {
  const { viewportWidth } = useViewportDimensions();

  const dimensions = useMemo((): InsightCardDimensions => {
    // Fixed card dimensions as per requirement
    const cardWidth = 114;  // Fixed width
    const cardHeight = 159; // Fixed height

    // Available width for positioning
    // Account for layout margin: 24px each side on all mobile screens
    const layoutMarginPerSide = 24;
    const layoutTotalMargin = layoutMarginPerSide * 2; // 48px total

    const availableWidth = viewportWidth - layoutTotalMargin;

    // Container height based on fixed card height
    // All cards align to top, so height is just the card height
    const containerHeight = cardHeight; // 159px

    return {
      cardWidth,
      cardHeight,
      availableWidth,
      containerHeight,
    };
  }, [viewportWidth]);

  const getCardPositions = useMemo(() => {
    return (): CardPosition[] => {
      const positions: CardPosition[] = [];
      const { cardWidth, availableWidth } = dimensions;

      const cardCount = 5; // Fixed 5 cards for InsightSection

      // For 5 cards, calculate spacing to fill width
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
        const horizontalOffset = startOffset + (i * finalSpacing);

        positions[i] = {
          left: horizontalOffset,
          top: 0,  // All cards align to top of container
          scale: 1,  // Keep all cards at same scale
        };
      }

      return positions;
    };
  }, [dimensions]);

  return {
    dimensions,
    getCardPositions,
  };
};
