"use client";

import { useRef } from "react";
import Image from "next/image";
import { ExecutionItem, OurExecutionSectionProps } from "@/src/types/execution";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const executionItems: ExecutionItem[] = [
  {
    id: 1,
    imageSrc: "/assets/our-execution-delivery-image.png",
    altText: "Our Execution - Delivery",
  },
  {
    id: 2,
    imageSrc: "/assets/our-execution-focus-image.png",
    altText: "Our Execution - Focus",
  },
  {
    id: 3,
    imageSrc: "/assets/our-execution-delivery-image.png",
    altText: "Our Execution - Delivery",
  },
  {
    id: 4,
    imageSrc: "/assets/our-execution-transparency-image.png",
    altText: "Our Execution - Transparency",
  },
];

const OurExecutionSection = ({ className = "" }: OurExecutionSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`bg-white relative overflow-hidden w-full focus:outline-none ${className}`}
      tabIndex={0}
      role="region"
      aria-label="Our Execution Ethos"
    >
      <div className="w-full px-4 md:px-16 lg:px-[120px]">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-20">
          <h2
            className="text-[32px] font-light text-[#2E2F2D]"
            style={{ fontFamily: "Open Sans" }}
          >
            Our Execution Ethos
          </h2>
        </div>

        {/* Swiper Carousel Container */}
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
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
            className="execution-swiper"
          >
            {executionItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full h-auto">
                  <Image
                    src={item.imageSrc}
                    alt={item.altText}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority={item.id === 1}
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurExecutionSection;
export { OurExecutionSection };
