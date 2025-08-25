"use client";

import React from "react";
import {
  parseTextIntoWords,
  calculateWordSpacing,
  createWordSpanStyle,
  createWordSpacerStyle,
  type WordBackgroundConfig,
} from "@/src/lib/utils/word-background-utils";

interface WordBackgroundRendererProps {
  text: string;
  config: WordBackgroundConfig;
  fontSize: number;
  className?: string;
}

/**
 * Word Background Renderer Component
 * Renders text with individual word backgrounds, allowing decorator to show through gaps
 * The last 3 characters get a special fade color (#fcfcfc)
 */
export const WordBackgroundRenderer: React.FC<WordBackgroundRendererProps> = ({
  text,
  config,
  fontSize,
  className = "",
}) => {
  const words = parseTextIntoWords(text);
  const wordSpacing = calculateWordSpacing(fontSize);
  const wordSpanStyle = createWordSpanStyle(config);
  const spacerStyle = createWordSpacerStyle(config.wordSpacing || wordSpacing);

  // Helper function to render word with special handling for last 3 characters
  const renderWordWithFadeEffect = (word: string, isLastWord: boolean) => {
    if (!isLastWord || word.length <= 3) {
      // Regular word rendering
      return word;
    }

    // Split last word to apply fade effect to last 3 characters
    const mainPart = word.slice(0, -2);
    const fadePart = word.slice(-2);

    return (
      <>
        <span style={{ color: "inherit" }}>{mainPart}</span>
        <span style={{ color: "#fcfcfc" }}>{fadePart}</span>
      </>
    );
  };

  return (
    <span className={`word-background-container ${className}`}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;

        return (
          <React.Fragment key={`word-${index}-${word}`}>
            <span className="word-span" style={wordSpanStyle}>
              {renderWordWithFadeEffect(word, isLastWord)}
            </span>
            {/* Add spacer between words (except after last word) */}
            {index < words.length - 1 && (
              <span className="word-spacer" style={spacerStyle} />
            )}
          </React.Fragment>
        );
      })}
    </span>
  );
};
