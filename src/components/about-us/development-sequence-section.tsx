"use client";

import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";
import { useMobileDesktop } from "@/src/hooks/responsive/use-mobile-desktop";
import { MobileView } from "./development-sequence-section/mobile-view";
import { DesktopView } from "./development-sequence-section/desktop-view";

export const DevelopmentSequenceSection = memo<DevelopmentSequenceSectionProps>(
  ({ data }) => {
    const { isMobile } = useMobileDesktop();

    return (
      <section className="w-full py-[23px] md:px-8 lg:px-16 bg-white">
        {isMobile ? <MobileView data={data} /> : <DesktopView data={data} />}
      </section>
    );
  }
);

DevelopmentSequenceSection.displayName = "DevelopmentSequenceSection";
