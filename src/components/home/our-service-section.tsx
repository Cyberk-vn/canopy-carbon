"use client";

import { OurServiceSectionProps, ServiceCardData } from "@/src/types/service";
import { ServiceCard } from "./service-card";
import { useRef } from "react";
import { useScrollAnimation } from "@/src/hooks/responsive/use-scroll-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Animated Service Card Wrapper
function ServiceCardWithAnimation({
  service,
  index,
}: {
  service: ServiceCardData;
  index: number;
}) {
  const cardRef = useScrollAnimation<HTMLDivElement>({
    animationType: "fadeInUp",
    delay: index * 100 + 400,
  });

  return (
    <div
      className="flex-shrink-0 transition-all duration-500 ease-out hover:scale-105 w-full md:w-[calc(25%-18px)]"
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <ServiceCard ref={cardRef} service={service} />
    </div>
  );
}

export function OurServiceSection({ title, services }: OurServiceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll animations
  const titleRef = useScrollAnimation<HTMLParagraphElement>({
    animationType: "fadeInUp",
    delay: 100,
  });

  return (
    <section
      ref={sectionRef}
      className="bg-white relative overflow-hidden w-full focus:outline-none"
      tabIndex={0}
      role="region"
      aria-label="Our Services"
    >
      <div className="w-full px-4 md:px-16 lg:px-[120px]">
        {/* Description Group */}
        <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-20 mb-12 lg:mb-20">
          {/* Main Description Text */}
          <div className="flex-1 max-w-none lg:max-w-[801px]">
            <p
              ref={titleRef}
              className="font-open-sans font-bold lg:font-semibold text-[#94A4B1] text-[14px] lg:text-[32px] text-left lg:text-left"
              style={{
                lineHeight: "1.4285714285714286em",
                fontFamily: "Open Sans",
              }}
            >
              {title}
            </p>
          </div>

          {/* Decorative Line Element */}
          <div
            className="hidden lg:flex items-end"
            style={{
              width: "428px",
              padding: "10px",
              gap: "10px",
            }}
          >
            <div
              className="flex-1"
              style={{
                height: "1px",
                backgroundColor: "rgba(183, 192, 201, 0.25)",
              }}
            />
          </div>
        </div>

        {/* Desktop: Horizontal Scroll Cards Container */}
        <div className="hidden lg:block">
          <div
            className="horizontal-scroll-cards flex gap-6 overflow-x-auto overflow-y-hidden pb-4 select-none"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              scrollPadding: "0 20px",
            }}
          >
            {services.map((service, index) => (
              <ServiceCardWithAnimation
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Swiper Carousel */}
        <div className="lg:hidden block relative w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            speed={600}
            allowTouchMove={true}
            grabCursor={true}
            className="service-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="px-2">
                  <ServiceCard service={service} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  );
}
