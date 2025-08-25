/**
 * Word-level background utilities for precise text masking
 */

export interface WordSpan {
  word: string;
  isLastInLine?: boolean;
  lineNumber?: number;
}

export interface WordBackgroundConfig {
  backgroundColor: string;
  wordPadding: string;
  wordSpacing: string;
  preserveLineBreaks: boolean;
}

/**
 * Split text into words with metadata for background application
 */
export const parseTextIntoWords = (text: string): string[] => {
  // Split by spaces, preserve original spacing intent
  return text.split(/\s+/).filter(word => word.length > 0);
};

/**
 * Calculate optimal word spacing for decorator visibility
 */
export const calculateWordSpacing = (fontSize: number): string => {
  // Base spacing on font size - larger fonts need more space
  const baseSpacing = fontSize * 0.03; // 3% of font size
  return `${Math.max(baseSpacing, 2)}px`; // Minimum 2px for decorator visibility
};

/**
 * Create word span styling with background
 */
export const createWordSpanStyle = (config: WordBackgroundConfig) => ({
  display: 'inline-block',
  backgroundColor: config.backgroundColor,
  padding: config.wordPadding,
  backgroundClip: 'padding-box' as const,
  // Ensure text remains selectable
  userSelect: 'text' as const,
  // Proper baseline alignment
  verticalAlign: 'baseline' as const,
  // Prevent word breaking within spans
  whiteSpace: 'nowrap' as const,
});

/**
 * Create word spacer styling (transparent gaps)
 */
export const createWordSpacerStyle = (spacing: string) => ({
  display: 'inline-block',
  width: spacing,
  // No background - decorator shows through
  background: 'transparent',
  // Prevent collapse
  minWidth: '1px',
  // Maintain line height
  height: '1em',
  verticalAlign: 'baseline' as const,
});