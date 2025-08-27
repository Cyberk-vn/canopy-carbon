"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  roadmapNodes,
  roadmapConfig,
  doubleLineDecorators,
} from "@/src/lib/data/roadmap-data";
import RoadmapCard from "./roadmap-card";
import RoadmapMarker from "./roadmap-marker";
import RoadmapDoubleLineDecorator from "./roadmap-double-line-decorator";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";

const MobileRoadmap: React.FC = () => {
  const containerMotion = useSimpleMotion("roadmap-container");
  const pathMotion = useSimpleMotion("roadmap-path");
  const appIconMotion = useSimpleMotion("roadmap-app-icon");

  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full mx-auto"
      style={{
        height: "1213px",
        backgroundColor: roadmapConfig.backgroundColor,
      }}
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...containerMotion}
    >
      {/* Title at the top */}
      <div className="relative flex flex-col justify-center items-center w-full h-[1156px] mt-[30px]">
        <div className="absolute top-10 left-4.5 right-4">
          <motion.h3
            className="text-black font-bold text-[15px] leading-[20px] mb-2 max-w-[100px] text-left"
            style={{ fontFamily: "Open Sans", fontWeight: 700 }}
            {...SIMPLE_ANIMATIONS.fadeInUp}
            {...useSimpleMotion("roadmap-main-title")}
            transition={{
              ...SIMPLE_ANIMATIONS.fadeInUp.transition,
              delay: 0.1,
            }}
          >
            Originate Project Site
          </motion.h3>
        </div>

        <div className="absolute inset-0">
          <motion.div
            className="absolute"
            style={{
              left: "29.85px",
              top: "82.5px",
              width: "291.9px",
              height: "963.5px",
            }}
            {...SIMPLE_ANIMATIONS.fadeInUp}
            {...pathMotion}
            transition={{
              ...SIMPLE_ANIMATIONS.fadeInUp.transition,
              delay: 0.2,
            }}
          >
            <Image
              src="/assets/home/roadmap-mobile/road-map.png"
              alt="Roadmap path"
              width={292}
              height={964}
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute"
            style={{
              left: `${roadmapConfig.appIconPosition.x}px`,
              top: `${roadmapConfig.appIconPosition.y}px`,
              width: "40px",
              height: "40px",
            }}
            {...SIMPLE_ANIMATIONS.scaleIn}
            {...appIconMotion}
            transition={{
              ...SIMPLE_ANIMATIONS.scaleIn.transition,
              delay: 0.5,
            }}
          >
            <Image
              src="/assets/home/roadmap-mobile/app-icon.png"
              alt="Canopy Carbon App Icon"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-full opacity-80"
            />
          </motion.div>

          {doubleLineDecorators.map((decorator, index) => (
            <RoadmapDoubleLineDecorator
              key={`decorator-${decorator.id}`}
              position={decorator.position}
              align={decorator.align}
              index={index}
            />
          ))}

          {roadmapNodes.map((node, index) => (
            <RoadmapMarker
              key={`marker-${node.id}`}
              nodeId={node.id}
              position={node.position}
              markerType={node.markerType}
              index={index}
            />
          ))}

          {roadmapNodes.map((node, index) => (
            <RoadmapCard key={node.id} node={node} index={index} />
          ))}

          <div className="absolute bottom-0 left-4 right-4 bg-[#FBFBFB] py-4 px-4">
            <motion.p
              className="text-[#63736E] font-bold text-[14px] leading-[20px]"
              style={{ fontFamily: "Open Sans", fontWeight: 700 }}
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...useSimpleMotion("roadmap-subtitle")}
              transition={{
                ...SIMPLE_ANIMATIONS.fadeInUp.transition,
                delay: 0.6,
              }}
            >
              {roadmapConfig.subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileRoadmap;
