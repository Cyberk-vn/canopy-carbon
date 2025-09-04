"use client";

import { OurProjectSectionProps } from "../../types/our-project";
import { memo } from "react";
import { MobileView } from "./our-project-section/mobile-view";
import { DesktopView } from "./our-project-section/desktop-view";

export const OurProjectSection = memo<OurProjectSectionProps>(
  ({ data }) => {
    return (
      <section className="w-full h-full">
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

OurProjectSection.displayName = "OurProjectSection";
