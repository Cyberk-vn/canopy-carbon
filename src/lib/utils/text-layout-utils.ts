/**
 * Text layout utilities for calculating text dimensions and positioning
 */

export interface TextLayoutMetrics {
  lines: number;
  width: number;
  height: number;
}

export interface DecoratorPosition {
  x: number;
  y: number;
  width: number;
}

/**
 * Calculate the number of lines needed for text given constraints
 */
export const calculateTextLines = (
  text: string,
  fontSize: number,
  lineHeight: number,
  width: number,
  fontFamily: string,
  fontWeight: number = 400
): number => {
  // Create a temporary canvas for text measurement
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return 1;

  // Set font properties
  context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  
  const words = text.split(' ');
  let lines = 1;
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine + (currentLine ? ' ' : '') + word;
    const metrics = context.measureText(testLine);
    
    if (metrics.width > width && currentLine) {
      lines++;
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  return lines;
};

/**
 * Calculate the width of a line of text
 */
export const calculateTextWidth = (
  text: string,
  fontSize: number,
  fontFamily: string,
  fontWeight: number = 400
): number => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return 0;

  context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  return context.measureText(text).width;
};

/**
 * Break text into lines based on width constraints
 * Enhanced version for better line breaking accuracy
 */
export const breakTextIntoLines = (
  text: string,
  fontSize: number,
  width: number,
  fontFamily: string,
  fontWeight: number = 400
): string[] => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return [text];

  context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine + (currentLine ? ' ' : '') + word;
    const metrics = context.measureText(testLine);
    
    if (metrics.width > width && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
};

// Complex text calculation functions removed
// These are no longer needed with the overlay-based approach
// The overlay method uses simple CSS layering instead of precise text measurements

/**
 * Simple decorator position calculation (legacy - kept for compatibility)
 * Note: This is now superseded by the overlay-based approach
 */
export const calculateDecoratorPosition = (
  titleElement: HTMLElement | null,
  maxLines: number = 4,
  lineHeight: number = 20
): DecoratorPosition => {
  if (!titleElement) {
    return { x: 0, y: 0, width: 0 };
  }

  // Simple below-text positioning
  const decoratorY = maxLines * lineHeight + 4;
  const decoratorX = 0;
  const decoratorWidth = 222;

  return {
    x: decoratorX,
    y: decoratorY,
    width: decoratorWidth
  };
};

/**
 * Ensure text fits within maximum number of lines
 */
export const enforceMaxLines = (
  text: string,
  maxLines: number,
  fontSize: number,
  width: number,
  fontFamily: string,
  fontWeight: number = 400
): string => {
  const lines = breakTextIntoLines(text, fontSize, width, fontFamily, fontWeight);
  
  if (lines.length <= maxLines) {
    return text;
  }

  // If text exceeds max lines, truncate and add ellipsis
  const truncatedLines = lines.slice(0, maxLines);
  const lastLine = truncatedLines[maxLines - 1];
  
  // Try to fit ellipsis in the last line
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    const ellipsis = '...';
    
    const lastLineWords = lastLine.split(' ');
    let testLine = lastLineWords.join(' ') + ellipsis;
    
    while (context.measureText(testLine).width > width && lastLineWords.length > 1) {
      lastLineWords.pop();
      testLine = lastLineWords.join(' ') + ellipsis;
    }
    
    truncatedLines[maxLines - 1] = testLine;
  }

  return truncatedLines.join(' ');
};