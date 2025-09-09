// Enhanced types for execution swipe functionality
import { StaticImageData } from "next/image";

// Mobile execution image imports
import ExecutionImage1 from "../../public/assets/figma-execution/execution-image-1.png";
import ExecutionImage2 from "../../public/assets/figma-execution/execution-image-2.png";
import ExecutionImage3 from "../../public/assets/figma-execution/execution-image-3.png";
import ExecutionImageMain from "../../public/assets/figma-execution/execution-image-main.png";

export interface ExecutionPrinciple {
  id: number;
  title: string;
  altTextBase: string;
  images: (string | StaticImageData)[];
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
      ExecutionImage1,
      ExecutionImageMain,
      ExecutionImage2,
      ExecutionImage3,
    ],
  },
  {
    id: 2,
    title: "Community Focused",
    altTextBase: "Community Focused",
    images: [
      ExecutionImageMain,
      ExecutionImage2,
      ExecutionImage3,
      ExecutionImage1,
    ],
  },
  {
    id: 3,
    title: "Environmental Integrity",
    altTextBase: "Environmental Integrity",
    images: [
      ExecutionImage2,
      ExecutionImage3,
      ExecutionImage1,
      ExecutionImageMain,
    ],
  },
  {
    id: 4,
    title: "Radical Transparency",
    altTextBase: "Radical Transparency",
    images: [
      ExecutionImage3,
      ExecutionImage1,
      ExecutionImageMain,
      ExecutionImage2,
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
): string | StaticImageData => {
  const principle = getExecutionPrinciple(principleId);
  if (!principle) return "";

  const validOffset = Math.max(
    0,
    Math.min(imageOffset, principle.images.length - 1)
  );
  return principle.images[validOffset];
};

export const getAllExecutionImages = (): (string | StaticImageData)[] => {
  return EXECUTION_PRINCIPLES.flatMap((principle) => principle.images);
};
