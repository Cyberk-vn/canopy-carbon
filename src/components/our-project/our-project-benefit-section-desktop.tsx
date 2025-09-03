"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "../shared";

const OurProjectBenefitSectionDesktop: React.FC = () => {
  return (
    <Container maxWidth="default">
      <section className="w-full bg-[#232A26] px-[68px] py-[80px]">
        <div className="flex flex-col gap-[64px] justify-center items-center">
          {/* Title and Content Section */}
          <motion.div
            initial={{ opacity: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 w-full"
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0.7, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="font-open-sans font-bold text-[32px] leading-[1em] text-center max-w-[1199px]"
              style={{ color: "rgba(204, 204, 204, 0.8)" }}
            >
              Our Co-Benefits & Safeguards Strategy
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0.6, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="font-open-sans font-normal text-[16px] text-center max-w-[695px] text-[#949494]"
              style={{ letterSpacing: "-2%", lineHeight: "100%" }}
            >
              Developed and published in 2023 by the Integrity Council for the
              Voluntary Carbon Market (ICVCM), the CCP was formulated in
              response to growing concerns over integrity in global carbon
              markets. The CCP is widely regarded today as a foundational
              benchmark for defining high-integrity carbon projects. The ICVCM
              Committee regularly reviews methodologies developed by
              standard-setting bodies and issues CCP labels to validate their
              alignment with the framework.
            </motion.p>
          </motion.div>

          {/* Benefit Icons Table Section */}
          <motion.div
            initial={{ opacity: 0.7, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="w-full h-[431px] bg-white"
          >
            {/* Benefit Icons Table */}
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/assets/desktop/our-projects/benefit-icons-table.svg"
                alt="Benefit Icons Table"
                width={1200}
                height={431}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default OurProjectBenefitSectionDesktop;
