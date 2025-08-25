"use client";

import React from "react";
import { motion } from "motion/react";
import { RoadmapCardProps } from "@/src/types/roadmap";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

const RoadmapCard: React.FC<RoadmapCardProps> = ({ node, index }) => {
  const cardMotion = useSimpleMotion(`roadmap-card-${node.id}`);

  const getTextAlignment = () => {
    switch (node.cardAlignment) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      case "center":
        return "text-center";
      default:
        return "text-left";
    }
  };

  const getJustification = () => {
    switch (node.cardAlignment) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      case "center":
        return "justify-center";
      default:
        return "justify-start";
    }
  };

  return (
    <motion.div
      className={`absolute flex ${getJustification()}`}
      style={{
        left: `${node.cardPosition.x}px`,
        top: `${node.cardPosition.y}px`,
        width: `${node.cardWidth}px`,
      }}
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...cardMotion}
      transition={{
        ...SIMPLE_ANIMATIONS.fadeInUp.transition,
        delay: index * 0.1,
      }}
    >
      <div className={`${getTextAlignment()}`}>
        <h3
          className="text-black font-bold text-[13px] leading-[18px] mb-1"
          style={{
            fontFamily: "Open Sans",
            fontWeight: 700,
            ...(node.titleWidth && { width: `${node.titleWidth}px` }),
            ...(node.titleTextAlign && { textAlign: node.titleTextAlign }),
          }}
        >
          {node.title}
        </h3>
        <p
          className="text-black font-normal text-[11px] leading-[15px]"
          style={{
            fontFamily: "Open Sans",
            fontWeight: 400,
            ...(node.descriptionWidth && {
              width: `${node.descriptionWidth}px`,
            }),
            ...(node.descriptionTextAlign && {
              textAlign: node.descriptionTextAlign,
            }),
            ...(node.descriptionTextAlign && {
              alignItems: node.descriptionTextAlign,
              justifyContent: node.descriptionTextAlign,
            }),
          }}
        >
          {node.description}
        </p>
      </div>
    </motion.div>
  );
};

export default RoadmapCard;
