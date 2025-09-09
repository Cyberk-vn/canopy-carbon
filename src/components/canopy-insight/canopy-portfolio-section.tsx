"use client";

import Image from "next/image";
import FadeContent from "@/src/components/animation/fade-content";

export function CanopyPortfolioSection() {
  return (
    <FadeContent
      duration={600}
      delay={0}
      threshold={0.1}
      easing="ease-out"
      className="relative w-full h-[500px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/canopy-insight/built-on-research-section-bg-image.png"
          alt="Canopy Portfolio Background"
          fill
          className="object-cover"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Background Color Overlay - Gradient */}
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1) 43%, rgba(255, 255, 255, 0.3) 53%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 h-full px-6 py-[114px] md:px-[120px] flex flex-col items-center">
        <div
          className="flex flex-col gap-3 max-w-[342px] text-center"
          style={{
            left: "24px",
            top: "66px",
          }}
        >
          {/* Main Title */}
          <FadeContent
            duration={500}
            delay={100}
            threshold={0.1}
            easing="ease-out"
            className="font-open-sans font-semibold text-[#1E2E26] text-[20px] xxs:text-[21px] xs:text-[22px]"
            style={{
              lineHeight: "1.5em",
              textAlign: "center",
            }}
          >
            Built on research. Disciplined in thought. Precise in execution.
          </FadeContent>

          {/* Subtitle */}
          <FadeContent
            duration={500}
            delay={200}
            threshold={0.1}
            easing="ease-out"
            className="font-open-sans font-normal text-[#37423B] text-[13px] xxs:text-[14px] xs:text-[15px]"
            style={{
              lineHeight: "1.5384615384615385em",
              textAlign: "center",
            }}
          >
            Contribute to our next thought piece
          </FadeContent>

          {/* Call to Action */}
          <div
            className="font-open-sans font-normal text-[#7D8F89] cursor-pointer hover:text-[#5A6B63] transition-colors duration-200 text-[11px] xxs:text-[12px] xs:text-[13px]"
            style={{
              lineHeight: "1.6363636363636365em",
              textAlign: "center",
            }}
          >
            Collaborate →
          </div>
        </div>
      </div>
    </FadeContent>
  );
}

export default CanopyPortfolioSection;
