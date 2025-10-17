"use client";

import { OurProjectSectionProps } from "../../types/our-project";
import { memo } from "react";
import { MobileView } from "./our-project-section/mobile-view";
import { TabletView } from "./our-project-section/tablet-view";
import { DesktopView } from "./our-project-section/desktop-view";

export const OurProjectSection = memo<OurProjectSectionProps>(({ data }) => {
  return (
    <section className="w-full h-full">
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
});

OurProjectSection.displayName = "OurProjectSection";
