"use client";

import { DevelopmentSequenceSectionProps } from "@/src/types/development-sequence";
import { memo } from "react";
import { MobileView } from "./development-sequence-section/mobile-view";
import { TabletView } from "./development-sequence-section/tablet-view";
import { DesktopView } from "./development-sequence-section/desktop-view";

export const DevelopmentSequenceSection = memo<DevelopmentSequenceSectionProps>(
  ({ data }) => {
    return (
      <section className="w-full bg-white">
        {/* Mobile: < 768px */}
        <div className="block md:hidden">
          <MobileView data={data} />
        </div>
        {/* Tablet: 768px - 1280px */}
        <TabletView data={data} />
        {/* Desktop: ≥ 1280px */}
        <DesktopView data={data} />
      </section>
    );
  }
);

DevelopmentSequenceSection.displayName = "DevelopmentSequenceSection";
