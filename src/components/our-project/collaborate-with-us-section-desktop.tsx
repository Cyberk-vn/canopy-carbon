"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const CollaborateWithUsSectionDesktop: React.FC = () => {
  return (
    <section className="bg-white w-full py-[80px] px-[68px] overflow-hidden">
      {/* Main Layout Container - Grid Layout */}
      <div className="grid grid-cols-12 gap-6 max-w-[1440px] mx-auto">
        {/* Main Content Container - Spans 8 columns */}
        <div className="col-span-8 bg-[#F9F9F9] px-[64px] py-[32px] h-fit">
          <div className="flex flex-col gap-[32px]">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.7, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="text-[#1E2E26] font-bold text-[32px] leading-[1.36181640625em] text-left font-open-sans"
            >
              Collaborate With Us
            </motion.h2>

            {/* Description + Button Cards Section */}
            <motion.div
              initial={{ opacity: 0.8, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-[24px]"
            >
              {/* Description */}
              <motion.p
                initial={{ opacity: 0.6, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-[#9E9E9E] text-[16px] leading-[1.36181640625em] tracking-[-0.02em] text-left font-open-sans whitespace-pre-line"
              >
                We believe meaningful climate solutions are built through
                partnership. At Canopy, we welcome collaboration with project
                proponents, financiers, corporate buyers, and technical
                specialists who share our vision for high-integrity,
                nature-based development.
                {"\n\n"}Whether you&apos;re looking to co-develop a project,
                secure long-term carbon offtake, or bring technical innovation
                to the field, we&apos;d love to hear from you. Together, we can
                scale impact where it matters most.
              </motion.p>

              {/* Button Cards - Single Row */}
              <motion.div
                initial={{ opacity: 0.6, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex justify-stretch items-stretch gap-[16px]"
              >
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                  className="flex-1 flex items-center justify-center bg-[#E9E9E9] px-[37px] py-[16px]"
                >
                  <span className="text-[#4B5563] font-bold text-[14px] leading-[1.7142857142857142em] text-center font-open-sans">
                    Co-Develop
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
                  className="flex-1 flex items-center justify-center bg-[#E9E9E9] px-[16px] py-[16px]"
                >
                  <span className="text-[#4B5563] font-bold text-[14px] leading-[1.7142857142857142em] text-center font-open-sans">
                    Purchase Credits
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
                  className="flex-1 flex items-center justify-center bg-[#E9E9E9] px-[29px] py-[16px]"
                >
                  <span className="text-[#4B5563] font-bold text-[14px] leading-[1.7142857142857142em] text-center font-open-sans">
                    Fund Pipeline
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
                  className="flex-1 flex items-center justify-center bg-[#E9E9E9] px-[38px] py-[16px]"
                >
                  <span className="text-[#4B5563] font-bold text-[14px] leading-[1.7142857142857142em] text-center font-open-sans">
                    Co-Innovate
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorator Image - Grid Column Layout */}
        <div className="col-span-4 flex items-start justify-end pt-[14px]">
          <motion.div
            initial={{ opacity: 0.8, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-[300px] h-[302px]"
          >
            <Image
              src="/assets/desktop/our-projects/collaborate-decorator-right-side.svg"
              alt="Collaborate decoration"
              width={300}
              height={302}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateWithUsSectionDesktop;
