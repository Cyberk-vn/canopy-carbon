"use client";

import { OurProjectSectionProps } from "../../types/our-project";
import { memo } from "react";
import { useMobileDesktop } from "@/src/hooks/responsive/use-mobile-desktop";
import { MobileView } from "./our-project-section/mobile-view";
import { DesktopView } from "./our-project-section/desktop-view";

export const OurProjectSection = memo<OurProjectSectionProps>(
  ({ data }) => {
    const { isMobile } = useMobileDesktop();

    return (
      <section className="w-full h-full">
        {isMobile ? <MobileView data={data} /> : <DesktopView data={data} />}
      </section>
    );
  }
);

OurProjectSection.displayName = "OurProjectSection";
