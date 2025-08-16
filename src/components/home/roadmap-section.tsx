"use client";

import React from "react";
import Image from "next/image";

const RoadmapSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col items-center gap-[54px] mx-auto px-4">
        {/* Section Title */}
        <h2
          className="text-[20px] lg:text-[32px] font-light leading-[30px] lg:leading-[0.94] text-start lg:text-center text-[#2E2F2D] flex items-center lg:block"
          style={{ fontFamily: "Open Sans", fontWeight: "300" }}
        >
          Full-Cycle Project Development Expertise
        </h2>

        {/* Roadmap Image Container */}
        <div className="w-full max-w-[996px]">
          {/* Desktop Image */}
          <div className="hidden lg:block">
            <Image
              src="/assets/roapmap.png"
              alt="Canopy Carbon Project Development Roadmap - Complete visual showing the 8-step process from origination to credit issuance"
              width={996}
              height={1206}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden block">
            <Image
              src="/assets/road-map-section-mobile.png"
              alt="Canopy Carbon Project Development Roadmap - Mobile optimized view of the 8-step process from origination to credit issuance"
              width={375}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
