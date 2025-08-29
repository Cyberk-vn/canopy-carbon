"use client";

import React from "react";
import {
  parseTextIntoWords,
  calculateWordSpacing,
  createWordSpanStyle,
  createWordSpacerStyle,
  type WordBackgroundConfig,
} from "@/src/lib/utils/word-background-utils";

interface SinglePhraseRendererProps {
  text: string;
  targetPhrase: string;
  config: WordBackgroundConfig;
  fontSize: number;
  className?: string;
}

/**
 * Simple single phrase finder
 */
const findTargetPhrase = (text: string, phrase: string) => {
  const lowerText = text.toLowerCase();
  const lowerPhrase = phrase.toLowerCase();
  const startIndex = lowerText.indexOf(lowerPhrase);

  if (startIndex === -1) return null;

  return {
    start: startIndex,
    end: startIndex + phrase.length,
    matched: text.substring(startIndex, startIndex + phrase.length),
  };
};

/**
 * Word Background Renderer with correct 3-character .pt fade effect
 */
const WordBackgroundRendererWithPtFade: React.FC<{
  text: string;
  config: WordBackgroundConfig;
  fontSize: number;
  className?: string;
}> = ({ text, config, fontSize, className = "" }) => {
  const words = parseTextIntoWords(text);
  const wordSpacing = calculateWordSpacing(fontSize);
  const wordSpanStyle = createWordSpanStyle(config);
  const spacerStyle = createWordSpacerStyle(config.wordSpacing || wordSpacing);

  // Helper function to render word with special handling for last word ending with .pt
  const renderWordWithFadeEffect = (word: string, isLastWord: boolean) => {
    if (!isLastWord || word.length <= 2 || !word.endsWith("pt")) {
      // Regular word rendering
      return word;
    }

    // Split last word to apply fade effect to .pt characters (3 chars)
    const mainPart = word.slice(0, -2); // Everything except .pt
    const fadePart = word.slice(-2); // .pt (3 characters)

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

/**
 * Single Phrase Background Renderer Component
 * Renders background only for the target phrase, with proper .pt fade effect
 */
export const SinglePhraseBackgroundRenderer: React.FC<
  SinglePhraseRendererProps
> = ({ text, targetPhrase, config, fontSize, className = "" }) => {
  // Find the target phrase in the text
  const match = findTargetPhrase(text, targetPhrase);

  if (!match) {
    // If phrase not found, render as default text
    return (
      <span className={`single-phrase-fallback ${className}`}>{text}</span>
    );
  }

  // Split text into three parts: before, target, after
  const beforeText = text.substring(0, match.start);
  const targetText = match.matched;
  const afterText = text.substring(match.end);

  return (
    <span className={`single-phrase-container ${className}`}>
      {/* Before text - default rendering */}
      {beforeText && (
        <span className="single-phrase-default">{beforeText}</span>
      )}

      {/* Target phrase - enhanced with background and .pt fade */}
      <WordBackgroundRendererWithPtFade
        text={targetText}
        config={config}
        fontSize={fontSize}
        className="single-phrase-enhanced"
      />

      {/* After text - default rendering */}
      {afterText && <span className="single-phrase-default">{afterText}</span>}
    </span>
  );
};
