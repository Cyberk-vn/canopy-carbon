"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { RoadmapMarkerProps } from "@/src/types/roadmap";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

const RoadmapMarker: React.FC<RoadmapMarkerProps> = ({
  nodeId,
  position,
  index,
}) => {
  const markerMotion = useSimpleMotion(`roadmap-marker-${nodeId}`);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "19px",
        height: "28px",
      }}
      {...SIMPLE_ANIMATIONS.scaleIn}
      {...markerMotion}
      transition={{
        ...SIMPLE_ANIMATIONS.scaleIn.transition,
        delay: index * 0.1 + 0.3,
      }}
    >
      <Image
        src={`/assets/home/roadmap-mobile/node-location-${nodeId}.svg`}
        alt={`Roadmap node ${nodeId} marker`}
        width={19}
        height={28}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default RoadmapMarker;