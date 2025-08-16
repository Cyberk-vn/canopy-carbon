"use client";

import React from "react";
import Image from "next/image";

const MapSection = () => {
  return (
    <section
      className="bg-white relative overflow-hidden w-full focus:outline-none"
      tabIndex={0}
      role="region"
      aria-label="Our Operations Map"
    >
      <div className="w-full px-4 md:px-16 lg:px-[120px]">
        {/* Desktop Title Row with Icon and Text - Hidden on mobile */}
        <div className="hidden lg:flex flex-row justify-start items-center w-full gap-32 mb-12">
          {/* App Icon */}
          <div className="flex-shrink-0">
            <div className="w-[78px] h-[78px] rounded-full bg-white overflow-hidden">
              <Image
                src="/assets/banner-shared-component/logo.png"
                alt="Canopy Carbon Logo"
                width={78}
                height={78}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Title Text */}
          <div className="flex-1 max-w-[968px]">
            <h2
              className="text-[28px] font-light leading-[1.36] text-left text-[#3B464F]"
              style={{ fontFamily: "Open Sans" }}
            >
              Our current efforts are centered in Indonesia, prioritising tight
              oversight, execution quality, and the development of robust
              operational foundations for scale.
            </h2>
          </div>
        </div>

        {/* Map Image Container */}
        <div className="w-full lg:mb-0 mb-6">
          {/* Desktop: Full responsive image */}
          <div className="hidden lg:block">
            <Image
              src="/assets/map-image.png"
              alt="Map showing Canopy Carbon's current operational focus in Indonesia with strategic locations highlighted for carbon project development"
              width={1198}
              height={623}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Mobile: Horizontal scrollable image */}
          <div
            className="lg:hidden block overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              touchAction: "auto",
            }}
          >
            <div className="min-w-[1198px]" style={{ touchAction: "auto" }}>
              <Image
                src="/assets/map-image.png"
                alt="Map showing Canopy Carbon's current operational focus in Indonesia with strategic locations highlighted for carbon project development"
                width={1198}
                height={623}
                className="w-[1198px] h-[500px] object-cover"
                priority
                style={{ touchAction: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Title Text - Shown below map on mobile */}
        <div className="lg:hidden block">
          <h3 className="text-[14px] font-light leading-[20px] text-start text-[#3B464F] tracking-[-0.02em] mb-4">
            Scroll right to see more of our presence.
          </h3>
          <h2
            className="text-[14px] font-light leading-[20px] text-start text-[#3B464F] tracking-[-0.02em]"
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
            }}
          >
            Our current efforts are centered in Indonesia, prioritising tight
            oversight, execution quality, and the development of robust
            operational foundations for scale.
          </h2>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          /* Enhanced mobile touch scrolling */
          -webkit-overflow-scrolling: touch;
          touch-action: auto;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Ensure smooth touch scrolling on iOS */
        @supports (-webkit-touch-callout: none) {
          .scrollbar-hide {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};

export default MapSection;
