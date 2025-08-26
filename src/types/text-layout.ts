export interface TextLayoutMetrics {
  lines: number;
  width: number;
  height: number;
}

export interface DecoratorPosition {
  x: number; // X position from container left
  y: number; // Y position from container top (now baseline-aligned)
  width: number; // Width of decorator line
}

export interface MobileTitleProps {
  title: string;
  className?: string;
}

export interface TextMeasurementConfig {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
  fontWeight: number;
  maxWidth: number;
  maxLines: number;
}

// Simplified type definitions for overlay approach
// Complex positioning interfaces removed as they're no longer needed