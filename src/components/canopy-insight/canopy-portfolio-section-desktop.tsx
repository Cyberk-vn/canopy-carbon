"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeContent from "@/src/components/animation/fade-content";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";
import { cn } from "@/src/lib/utils";
import { ChevronRightIcon } from "lucide-react";

export function CanopyPortfolioSectionDesktop() {
  const { redirectToContact } = useContactRedirect();
  return (
    <FadeContent
      duration={600}
      delay={0}
      threshold={0.1}
      easing="ease-out"
      className={cn(
        "relative mx-auto flex w-full items-center justify-center mb-30",
        "h-[734px]"
      )}
    >
      <Image
        src="/assets/desktop/canopy-insight/canopy-portfolio-background-image.png"
        alt="Canopy Portfolio Background"
        fill
        className={cn("object-cover")}
        priority
      />

      {/* Top to bottom gradient */}
      <div
        className={cn("absolute inset-0 z-10")}
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 43%, rgba(255, 255, 255, 0.6) 55%, rgba(255, 255, 255, 0) 90%)",
        }}
      />
      {/* Bottom to top gradient */}
      <div
        className={cn("absolute inset-0 z-10")}
        style={{
          background:
            "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 42.89%)",
        }}
      />

      <div
        className={cn(
          "relative z-20 flex flex-col text-center",
          "max-w-[493px] gap-4 pb-75 3xl:max-w-[697px]"
        )}
      >
        <FadeContent
          duration={500}
          delay={100}
          threshold={0.1}
          easing="ease-out"
        >
          <h2
            className={cn(
              "font-sans text-[32px] font-semibold leading-tight",
              "text-[#1E2E26]",
              "3xl:font-avenir-heavy 3xl:font-normal 3xl:text-[42px]"
            )}
          >
            Built on research. Disciplined in thought. Precise in execution.
          </h2>
        </FadeContent>

        <div className={cn("flex items-center gap-6 justify-center")}>
          <FadeContent
            duration={500}
            delay={200}
            threshold={0.1}
            easing="ease-out"
          >
            <p
              className={cn(
                "font-sans text-[19px] font-normal",
                "text-[#37423B]",
                "3xl:font-work-sans 3xl:font-normal 3xl:leading-normal"
              )}
            >
              Contribute to our next thought piece -
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
              className={cn(
                "cursor-pointer font-sans text-[16px] font-normal leading-tight",
                "text-[#7D8F89]",
                "transition-colors duration-200 ease-out",
                "hover:text-[#5A6B63] active:text-[#4A5B53]",
                "flex items-center gap-1"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Collaborate
              <ChevronRightIcon className={cn("w-5 h-5 text-[#9C9C9C]")} />
            </motion.button>
          </FadeContent>
        </div>
      </div>
    </FadeContent>
  );
}

export default CanopyPortfolioSectionDesktop;
