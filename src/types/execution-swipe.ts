// Enhanced types for execution swipe functionality

export interface ExecutionPrinciple {
  id: number;
  title: string;
  altTextBase: string;
  images: string[];
}

export interface SwipeGestureInfo {
  direction: "left" | "right";
  velocity: number;
  distance: number;
  isLongSwipe: boolean;
  timestamp: number;
}

export interface ExecutionTransitionConfig {
  duration: number;
  easing: string;
  delay?: number;
}

export interface ExecutionSwipeConfig {
  shortSwipeThreshold: number; // Default: 50px
  longSwipeThreshold: number; // Default: 150px
  velocityThreshold: number; // For velocity-based detection
  maxVelocity: number; // Cap for velocity calculations
  transitionDuration: number; // Default: 300ms
  dragElastic: number; // Default: 0.1
}

// Default configuration constants
export const DEFAULT_SWIPE_CONFIG: ExecutionSwipeConfig = {
  shortSwipeThreshold: 50,
  longSwipeThreshold: 150,
  velocityThreshold: 100,
  maxVelocity: 500,
  transitionDuration: 300,
  dragElastic: 0.1,
};

// Execution principles data structure
export const EXECUTION_PRINCIPLES: ExecutionPrinciple[] = [
  {
    id: 1,
    title: "Precision in Delivery",
    altTextBase: "Precision in Delivery",
    images: [
      "/assets/figma-execution/execution-image-1.png",
      "/assets/figma-execution/execution-image-main.png",
      "/assets/figma-execution/execution-image-2.png",
      "/assets/figma-execution/execution-image-3.png",
    ],
  },
  {
    id: 2,
    title: "Community Focused",
    altTextBase: "Community Focused",
    images: [
      "/assets/figma-execution/execution-image-main.png",
      "/assets/figma-execution/execution-image-2.png",
      "/assets/figma-execution/execution-image-3.png",
      "/assets/figma-execution/execution-image-1.png",
    ],
  },
  {
    id: 3,
    title: "Environmental Integrity",
    altTextBase: "Environmental Integrity",
    images: [
      "/assets/figma-execution/execution-image-2.png",
      "/assets/figma-execution/execution-image-3.png",
      "/assets/figma-execution/execution-image-1.png",
      "/assets/figma-execution/execution-image-main.png",
    ],
  },
  {
    id: 4,
    title: "Radical Transparency",
    altTextBase: "Radical Transparency",
    images: [
      "/assets/figma-execution/execution-image-3.png",
      "/assets/figma-execution/execution-image-1.png",
      "/assets/figma-execution/execution-image-main.png",
      "/assets/figma-execution/execution-image-2.png",
    ],
  },
];

// Helper functions for working with execution data
export const getExecutionPrinciple = (
  id: number
): ExecutionPrinciple | undefined => {
  return EXECUTION_PRINCIPLES.find((principle) => principle.id === id);
};

export const getExecutionImage = (
  principleId: number,
  imageOffset: number
): string => {
  const principle = getExecutionPrinciple(principleId);
  if (!principle) return "";

  const validOffset = Math.max(
    0,
    Math.min(imageOffset, principle.images.length - 1)
  );
  return principle.images[validOffset];
};

export const getAllExecutionImages = (): string[] => {
  return EXECUTION_PRINCIPLES.flatMap((principle) => principle.images);
};
