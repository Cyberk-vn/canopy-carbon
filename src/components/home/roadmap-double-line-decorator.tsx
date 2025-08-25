"use client";

import React from "react";
import { motion } from "motion/react";
import { RoadmapDoubleLineDecoratorProps } from "@/src/types/roadmap";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

const RoadmapDoubleLineDecorator: React.FC<RoadmapDoubleLineDecoratorProps> = ({
  position,
  align = "absolute",
  index = 0,
  className = "",
}) => {
  const decoratorMotion = useSimpleMotion(`roadmap-decorator-${index}`);

  const getPositionStyle = () => {
    const baseStyle = {
      top: `${position.y}px`,
      width: "8px",
      height: "80px",
    };

    switch (align) {
      case "left":
        return {
          ...baseStyle,
          left: `${position.x}px`,
        };
      case "right":
        return {
          ...baseStyle,
          right: `${position.x}px`,
        };
      case "absolute":
      default:
        return {
          ...baseStyle,
          left: `${position.x}px`,
        };
    }
  };

  const getLinePositions = () => {
    switch (align) {
      case "left":
        // Left align: Long line on left (x=1.5), short line on right (x=6.5)
        return {
          longLine: { x1: "1.5", x2: "1.5" },
          shortLine: { x1: "6.5", x2: "6.5" },
        };
      case "right":
        // Right align: Long line on right (x=6.5), short line on left (x=1.5)
        return {
          longLine: { x1: "6.5", x2: "6.5" },
          shortLine: { x1: "1.5", x2: "1.5" },
        };
      case "absolute":
      default:
        // Default: Long line on left (x=1.5), short line on right (x=6.5)
        return {
          longLine: { x1: "1.5", x2: "1.5" },
          shortLine: { x1: "6.5", x2: "6.5" },
        };
    }
  };

  const linePositions = getLinePositions();

  return (
    <motion.div
      className={`absolute ${className}`}
      style={getPositionStyle()}
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...decoratorMotion}
      transition={{
        ...SIMPLE_ANIMATIONS.fadeInUp.transition,
        delay: 0.35 + index * 0.1,
      }}
    >
      <svg
        width="8"
        height="80"
        viewBox="0 0 8 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Long line - primary vertical line */}
        <line
          x1={linePositions.longLine.x1}
          y1="0"
          x2={linePositions.longLine.x2}
          y2="80"
          stroke="rgba(172, 184, 194, 0.2)"
          strokeWidth="2"
        />
        {/* Short line - secondary vertical line with offset */}
        <line
          x1={linePositions.shortLine.x1}
          y1="20.49"
          x2={linePositions.shortLine.x2}
          y2="59.9"
          stroke="rgba(172, 184, 194, 0.2)"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
};

export default RoadmapDoubleLineDecorator;
