"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeContent from "@/src/components/animation/fade-content";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";

export function CanopyPortfolioSectionDesktop() {
  const { redirectToContact } = useContactRedirect();
  return (
    <FadeContent
      duration={600}
      delay={0}
      threshold={0.1}
      easing="ease-out"
      className="relative mx-auto flex h-[734px] w-full items-center justify-center"
    >
      <Image
        src="/assets/desktop/canopy-insight/canopy-portfolio-background-image.png"
        alt="Canopy Portfolio Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-20 flex flex-col text-center max-w-[493px] gap-5 pb-75">
        <FadeContent
          duration={500}
          delay={100}
          threshold={0.1}
          easing="ease-out"
        >
          <h2 className="font-sans text-[32px] font-semibold leading-tight text-[#1E2E26]">
            Built on research. Disciplined in thought. Precise in execution.
          </h2>
        </FadeContent>

        <FadeContent
          duration={500}
          delay={200}
          threshold={0.1}
          easing="ease-out"
        >
          <p className="font-sans text-[22px] font-normal leading-tight text-[#37423B]">
            Contribute to our next thought piece
          </p>
        </FadeContent>

        <FadeContent
          duration={400}
          delay={300}
          threshold={0.1}
          easing="ease-out"
        >
          <motion.button
            onClick={redirectToContact}
            className="cursor-pointer font-sans text-[19px] font-normal leading-tight text-[#7D8F89] transition-colors duration-200 ease-out hover:text-[#5A6B63] active:text-[#4A5B53]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Collaborate →
          </motion.button>
        </FadeContent>
      </div>
    </FadeContent>
  );
}

export default CanopyPortfolioSectionDesktop;
