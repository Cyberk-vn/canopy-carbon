"use client";

import { ServiceCardData } from "@/src/types/service";
import { memo, forwardRef } from "react";
import Image from "next/image";

interface ServiceCardProps {
  service: ServiceCardData;
}

const ServiceCardIcon = memo(
  ({ iconType }: { iconType: ServiceCardData["iconType"] }) => {
    const getIconPath = () => {
      switch (iconType) {
        case "arr":
          return "/assets/icon/arr-icon.png";
        case "redd":
          return "/assets/icon/redd-icon.png";
        case "wrc":
          return "/assets/icon/wrc-icon.png";
        case "biochar":
          return "/assets/icon/blochar-icon.png";
        default:
          return null;
      }
    };

    const iconPath = getIconPath();
    if (!iconPath) return null;

    return (
      <Image
        src={iconPath}
        alt={`${iconType} icon`}
        width={28}
        height={28}
        className="shrink-0"
      />
    );
  }
);

ServiceCardIcon.displayName = "ServiceCardIcon";

export const ServiceCard = memo(forwardRef<HTMLDivElement, ServiceCardProps>(({ service }, ref) => {
  return (
    <div ref={ref} className="bg-[#EEF0F2] w-full aspect-[4/3] min-h-[280px] max-h-[350px] p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-full h-full flex flex-col">
        {/* Title Header */}
        <div className="bg-white flex items-center justify-center h-[50px] md:h-[62px]">
          <div className="flex items-center gap-2">
            <ServiceCardIcon iconType={service.iconType} />
            <span
              className="font-inter font-bold text-[#1D2E27] text-lg md:text-[20px]"
              style={{
                lineHeight: "1.5",
              }}
            >
              {service.abbreviation}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
            <div className="text-center max-w-[250px] md:max-w-[278px] flex flex-col gap-2">
              {/* Full Title */}
              <h3
                className="font-open-sans font-semibold text-[#5B5F58] text-center text-sm md:text-[16px]"
                style={{
                  lineHeight: "1.5",
                }}
              >
                {service.fullTitle}
              </h3>

              {/* Description */}
              <p
                className="font-open-sans font-normal text-[#5B5F58] text-center text-xs md:text-[14px]"
                style={{
                  lineHeight: "1.4285714285714286",
                }}
              >
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}));

ServiceCard.displayName = "ServiceCard";
