"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import FadeContent from "@/src/components/animation/fade-content";
import { useContactRedirect } from "@/src/hooks/navigation/use-contact-redirect";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/src/lib/utils";

// Static image imports
import defaultCardImage from "@/public/assets/desktop/canopy-insight/bayond-emission-card-1.png";

interface InsightSectionDesktopProps {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  imageSrc?: string | StaticImageData;
  imageSrcLarge?: string | StaticImageData;
}

export function InsightSectionDesktop({
  title,
  description,
  imagePosition = "right",
  imageSrc = defaultCardImage,
  imageSrcLarge,
}: InsightSectionDesktopProps) {
  const { redirectToContact } = useContactRedirect();

  const textContent = (
    <div
      className={cn(
        "flex flex-col justify-between gap-6 bg-[#FAFAFA] p-6",
        "shadow-[0px_2px_2px_0px_#00000026]",
        "lg:max-w-[648px] lg:grow",
        "xl:max-w-none",
        "2xl:h-[414px]",
        "3xl:px-9 3xl:py-[30px]"
      )}
    >
      <FadeContent
        duration={500}
        delay={200}
        threshold={0.1}
        easing="ease-out"
        className={cn("flex-1")}
      >
        <p
          className={cn(
            "font-sans text-xs 2xl:text-base text-[#6C7173CC]",
            "max-w-[517px] xl:max-w-none",
            "3xl:font-open-sans 3xl:font-normal 3xl:text-[15px] 3xl:leading-[27px]"
          )}
        >
          {description}
        </p>
      </FadeContent>

      <FadeContent duration={500} delay={300} threshold={0.1} easing="ease-out">
        <motion.button
          onClick={redirectToContact}
          className={cn("group flex items-center gap-1 pb-7")}
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
          <span
            className={cn(
              "text-xs 2xl:text-sm font-light tracking-wide pl-6",
              "text-[#9C9C9C]",
              "transition-colors duration-200 ease-out",
              "group-hover:text-black/60 group-active:text-black/80",
              "3xl:font-helvetica-light 3xl:text-[17px] 3xl:font-normal"
            )}
          >
            Request Access
          </span>
          <ChevronRightIcon className={cn("w-5 h-5 text-[#9C9C9C]")} />
        </motion.button>
      </FadeContent>
    </div>
  );
  const imageContent = (
    <div
      className={cn(
        "relative flex items-center justify-center",
        "h-[282px] 2xl:h-[334px]",
        "lg:max-w-[604px] lg:grow",
        "xl:max-w-none",
        "2xl:max-w-[846px]"
      )}
    >
      <FadeContent
        duration={600}
        delay={400}
        threshold={0.1}
        easing="ease-out"
        className={cn(
          "relative z-20",
          "h-[246px] w-[530px]",
          "2xl:w-[846px] 2xl:h-[336px]"
        )}
      >
        {imageSrcLarge ? (
          <>
            <Image
              src={imageSrc}
              alt={title}
              fill
              className={cn("object-cover 2xl:hidden")}
            />
            <Image
              src={imageSrcLarge}
              alt={title}
              fill
              className={cn("object-cover hidden 2xl:block")}
            />
          </>
        ) : (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={cn("object-cover")}
          />
        )}
      </FadeContent>
    </div>
  );

  return (
    <div className={cn("w-full md:p-12 lg:py-20 xl:py-12 xl:px-7")}>
      <div className={cn("relative mx-auto max-w-[1250px] 2xl:max-w-none")}>
        <div className={cn("mx-auto w-full 2xl:max-w-[1737px]")}>
          <FadeContent
            duration={500}
            delay={100}
            threshold={0.1}
            easing="ease-out"
            className={cn("mb-10 2xl:mb-4")}
          >
            <h2
              className={cn(
                "font-sans text-[28px] font-bold leading-tight",
                "text-[#6A7D8E]",
                "lg:ml-3",
                "3xl:text-[23px] 3xl:leading-[41px] 3xl:font-work-sans 3xl:font-bold"
              )}
            >
              {title}
            </h2>
          </FadeContent>
        </div>

        <div className={cn("bg-[#F7F7F7] p-6 md:p-8 2xl:p-7 3xl:p-12")}>
          <div
            className={cn(
              "mx-auto flex w-full flex-col gap-8",
              "lg:flex-row",
              imagePosition === "left" && "lg:flex-row-reverse",
              "2xl:max-w-[1780px] 2xl:items-center 2xl:gap-19"
            )}
          >
            {textContent}
            {imageContent}
          </div>
        </div>
        <div
          className={cn(
            "hidden xl:block",
            "absolute -bottom-5 left-1/2 ml-5",
            "h-0 w-[636.11px] 3xl:w-[900px] lg:w-[480px] xl:w-[600px]",
            "border-t border-[#DFE2E5] border-1"
          )}
        />
      </div>
    </div>
  );
}

export default InsightSectionDesktop;
