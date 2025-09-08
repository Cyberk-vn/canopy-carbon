"use client";

import React from "react";
import { motion } from "motion/react";
import { Container } from "../shared";

const CorePrincipleSectionDesktop: React.FC = () => {
  return (
    <Container maxWidth="default">
      <section className="w-full bg-[#1E2421] px-[68px] pt-[80px] pb-[52px]">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Decorator Image */}
          <div className="w-[298.07px] h-[477.54px] flex-shrink-0 hidden xl:block">
            <img
              src="/assets/desktop/our-projects/principle-decorator-image.svg"
              alt="Principle decorator"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full xl:w-[974px] flex flex-col gap-12">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.8, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-open-sans font-semibold text-[32px] leading-[0.9375em] text-[#9C9C9C] h-[30px] flex items-center"
            >
              The Core Carbon Principles
            </motion.h2>

            {/* Principle Cards Grid */}
            <div className="w-full max-w-[971px] h-[168px] grid grid-cols-5 gap-2">
              {/* Row 1 */}
              <motion.div
                key="card-1"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#232A26] px-[34px] py-[19px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.4em] text-[#9C9C9C] text-center whitespace-pre-line">
                  Effective Governance
                </span>
              </motion.div>

              <motion.div
                key="card-2"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#272F2A] px-[28px] py-[28px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.6em] text-[#9C9C9C] text-center">
                  Transparency
                </span>
              </motion.div>

              <motion.div
                key="card-3"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#2B332F] px-[31px] py-[28px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.6em] text-[#9C9C9C] text-center">
                  Additionality
                </span>
              </motion.div>

              <motion.div
                key="card-4"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 3 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#2F3833] px-[25px] py-[19px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.4em] text-[#9C9C9C] text-center whitespace-pre-line">
                  Robust Quantification
                </span>
              </motion.div>

              <motion.div
                key="card-5"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 4 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#333D37] px-[27px] py-[19px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.4em] text-[#9C9C9C] text-center whitespace-pre-line">
                  Safeguards & Benefits
                </span>
              </motion.div>

              {/* Row 2 */}
              <motion.div
                key="card-6"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 5 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#232A26] px-[48px] py-[28px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.6em] text-[#9C9C9C] text-center">
                  Tracking
                </span>
              </motion.div>

              <motion.div
                key="card-7"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 6 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#272F2A] px-[29px] py-[19px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.4em] text-[#9C9C9C] text-center whitespace-pre-line">
                  Independent Audit
                </span>
              </motion.div>

              <motion.div
                key="card-8"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 7 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#2B332F] px-[32px] py-[28px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.6em] text-[#9C9C9C] text-center">
                  Permanence
                </span>
              </motion.div>

              <motion.div
                key="card-9"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 8 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#2F3833] px-[38px] py-[19px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.4em] text-[#9C9C9C] text-center whitespace-pre-line">
                  No Double Counting
                </span>
              </motion.div>

              <motion.div
                key="card-10"
                initial={{ opacity: 0.7, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 9 * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col justify-center items-center gap-[10px] bg-[#333D37] px-[29px] py-[19px]"
              >
                <span className="font-open-sans font-semibold text-[15px] leading-[1.4em] text-[#9C9C9C] text-center whitespace-pre-line">
                  Contribution to Net Zero
                </span>
              </motion.div>
            </div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0.6, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
              className="w-full max-w-[888.52px]"
            >
              <p className="font-open-sans font-normal text-[16px] leading-[1.36181640625em] tracking-[-0.02em] text-[#949494] text-left">
                Developed and published in 2023 by the Integrity Council for the
                Voluntary Carbon Market (ICVCM), the CCP was formulated in
                response to growing concerns over integrity in global carbon
                markets. The CCP is widely regarded today as a foundational
                benchmark for defining high-integrity carbon projects. The ICVCM
                Committee regularly reviews methodologies developed by
                standard-setting bodies and issues CCP labels to validate their
                alignment with the framework.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CorePrincipleSectionDesktop;
