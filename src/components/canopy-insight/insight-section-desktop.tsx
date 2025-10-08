"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeContent from "@/src/components/animation/fade-content";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";
import { ChevronRightIcon } from "lucide-react";

interface InsightSectionDesktopProps {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  imageSrc?: string;
  imageSrcLarge?: string;
}

export function InsightSectionDesktop({
  title,
  description,
  imagePosition = "right",
  imageSrc = "/assets/desktop/canopy-insight/bayond-emission-card-1.png",
  imageSrcLarge,
}: InsightSectionDesktopProps) {
  const { redirectToContact } = useContactRedirect();

  const textContent = (
    <div className="flex flex-col justify-between gap-6 bg-white p-6 shadow-[0px_4px_4px_0px_#00000026] lg:max-w-[648px] lg:grow xl:max-w-none 2xl:h-[414px]">
      <FadeContent
        duration={500}
        delay={200}
        threshold={0.1}
        easing="ease-out"
        className="flex-1"
      >
        <p className="font-sans text-xs 2xl:text-base text-[#6C7173CC] max-w-[517px] xl:max-w-none">
          {description}
        </p>
      </FadeContent>

      <FadeContent duration={500} delay={300} threshold={0.1} easing="ease-out">
        <motion.button
          onClick={redirectToContact}
          className="group flex items-center gap-2"
          whileHover={{
            scale: 1.05,
            x: 5,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1, ease: "easeIn" },
          }}
        >
          <span className="text-xs 2xl:text-sm font-light tracking-wide text-[#00000066] transition-colors duration-200 ease-out group-hover:text-black/60 group-active:text-black/80">
            Request Access
          </span>
          <ChevronRightIcon className="w-4 h-4 text-[#323232]" />
        </motion.button>
      </FadeContent>
    </div>
  );
  const imageContent = (
    <div className="relative flex h-[282px] items-center justify-center lg:max-w-[604px] lg:grow xl:max-w-none 2xl:h-[334px] 2xl:max-w-[846px]">
      <FadeContent
        duration={600}
        delay={400}
        threshold={0.1}
        easing="ease-out"
        className="relative z-20 h-[246px] w-[530px] 2xl:w-[846px] 2xl:h-[333px]"
      >
        {imageSrcLarge ? (
          <>
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover 2xl:hidden"
            />
            <Image
              src={imageSrcLarge}
              alt={title}
              fill
              className="object-cover hidden 2xl:block"
            />
          </>
        ) : (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        )}
      </FadeContent>
    </div>
  );

  return (
    <div className="w-full md:p-12 lg:py-20 xl:px-7">
      <div className="relative mx-auto max-w-[1305px] 2xl:max-w-[1864px]">
        <FadeContent
          duration={500}
          delay={100}
          threshold={0.1}
          easing="ease-out"
          className="mb-10"
        >
          <h2 className="font-sans text-[28px] font-bold leading-tight text-[#6A7D8E] lg:ml-15">
            {title}
          </h2>
        </FadeContent>

        <div
          className={`flex flex-col gap-8 bg-[#F7F7F7] p-6 md:p-8 lg:flex-row ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          } 2xl:items-center 2xl:gap-20 2xl:p-7`}
        >
          {textContent}
          {imageContent}
        </div>
        <div className="absolute -bottom-10 right-0 h-0 w-[636.11px] border-t border-[#DFE2E5]" />
      </div>
    </div>
  );
}

export default InsightSectionDesktop;
