"use client";

import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";
import { MobileView } from "./development-sequence-section/mobile-view";
import { DesktopView } from "./development-sequence-section/desktop-view";

export const DevelopmentSequenceSection = memo<DevelopmentSequenceSectionProps>(
  ({ data }) => {
    return (
      <section className="w-full bg-white">
        <div className="block md:hidden">
          <MobileView data={data} />
        </div>
        <div className="hidden md:block">
          <DesktopView data={data} />
        </div>
      </section>
    );
  }
);

DevelopmentSequenceSection.displayName = "DevelopmentSequenceSection";
