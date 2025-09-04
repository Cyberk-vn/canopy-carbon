"use client";

import Image from "next/image";
import FadeContent from "@/src/components/animation/fade-content";

export function CanopyPortfolioSectionDesktop() {
  return (
    <FadeContent
      duration={600}
      delay={0}
      threshold={0.1}
      easing="ease-out"
      className="relative w-full h-[734px] max-w-[1440px] mx-auto"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/desktop/canopy-insight/canopy-portfolio-background-image.png"
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
      <div
        className="absolute z-20 flex flex-col gap-5 text-center"
        style={{
          left: "473px",
          top: "115px",
          width: "493px",
        }}
      >
        {/* Main Title */}
        <FadeContent
          duration={500}
          delay={100}
          threshold={0.1}
          easing="ease-out"
          className="font-open-sans font-semibold text-[#1E2E26]"
          style={{
            fontSize: "32px",
            lineHeight: "1.40625em",
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
          className="font-open-sans font-normal text-[#37423B]"
          style={{
            fontSize: "22px",
            lineHeight: "0.9090909090909091em",
            textAlign: "center",
          }}
        >
          Contribute to our next thought piece
        </FadeContent>

        {/* Call to Action */}
        <div
          className="font-open-sans font-normal text-[#7D8F89] cursor-pointer hover:text-[#5A6B63] transition-colors duration-200"
          style={{
            fontSize: "19px",
            lineHeight: "0.9473684210526315em",
            textAlign: "center",
          }}
        >
          Collaborate →
        </div>
      </div>
    </FadeContent>
  );
}

export default CanopyPortfolioSectionDesktop;
