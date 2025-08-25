/**
 * Background utilities for overlay-based text positioning
 */

/**
 * Get the appropriate background color for overlay text
 * This ensures the title covers the decorator properly
 */
export const getOverlayBackgroundColor = (): string => {
  // For now, return white - in future could detect page background
  return "#FCFCFC";
};

/**
 * Create box-shadow for text background extension
 * This creates a subtle border around text for better coverage
 */
export const getTextCoverageStyle = (bgColor: string = "#FCFCFC") => ({
  backgroundColor: bgColor,
  // Small padding for better coverage
  paddingRight: "2px",
  // Subtle shadow to ensure complete coverage
  boxShadow: `0 0 0 1px ${bgColor}`,
});
