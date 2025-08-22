"use client";

import { OurServiceSectionProps, ServiceCardData } from "@/src/types/service";
import { ServiceCard } from "./service-card";
import { useRef } from "react";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Animated Service Card Wrapper for Mobile
function ServiceCardWithAnimation({
  service,
  index,
}: {
  service: ServiceCardData;
  index: number;
}) {
  const cardMotion = useSimpleMotion(`service-card-${service.id}`);

  return (
    <motion.div
      {...SIMPLE_ANIMATIONS.fadeInUp}
      {...cardMotion}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
      className="flex-shrink-0 transition-all duration-500 ease-out hover:scale-105 w-full"
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <ServiceCard service={service} />
    </motion.div>
  );
}

// Desktop Grid Card Component - Currently unused
// function DesktopServiceCard({
//   service,
//   index,
// }: {
//   service: ServiceCardData;
//   index: number;
// }) {
//   const cardMotion = useSimpleMotion(`desktop-service-card-${service.id}`);

//   return (
//     <motion.div
//       {...SIMPLE_ANIMATIONS.scaleIn}
//       {...cardMotion}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.15 + 0.2,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       }}
//       whileHover={{
//         scale: 1.05,
//         transition: { duration: 0.2 },
//       }}
//       className="w-full"
//     >
//       <ServiceCard service={service} />
//     </motion.div>
//   );
// }

export function OurServiceSection({ title, services }: OurServiceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleMotion = useSimpleMotion("our-service-title");

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-white relative w-full focus:outline-none"
        tabIndex={0}
        role="region"
        aria-label="Our Services"
      >
        {/* Desktop Layout - Title Section */}
        <div className="hidden lg:block">
          {/* Title Section - positioned below the overlapping cards */}
          <div className="pt-16 pb-16 px-[120px]">
            <div
              className="grid gap-8"
              style={{ gridTemplateColumns: "15% 60% 25%" }}
            >
              {/* Column 1 - Empty (20%) */}
              <div></div>

              {/* Column 2 - Title Section (60%) */}
              <div className="flex justify-start">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.35,
                    ease: [0.175, 0.885, 0.32, 1.275],
                    delay: 0.5
                  }}
                  className="font-open-sans font-semibold text-[#94A4B1] text-[32px] text-start max-w-[800px]"
                  style={{
                    lineHeight: "1.4285714285714286em",
                    fontFamily: "Open Sans",
                  }}
                >
                  {title}
                </motion.p>
              </div>

              {/* Column 3 - Empty (20%) */}
              <div></div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Keep existing mobile layout */}
        <div className="lg:hidden block w-full px-4 py-16">
          {/* Mobile Title */}
          <div className="mb-8">
            <motion.p
              {...SIMPLE_ANIMATIONS.fadeInUp}
              {...titleMotion}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-open-sans font-bold text-[#94A4B1] text-[14px] text-left"
              style={{
                lineHeight: "1.4285714285714286em",
                fontFamily: "Open Sans",
              }}
            >
              {title}
            </motion.p>
          </div>

          {/* Mobile: Swiper Carousel */}
          <div className="relative w-full">
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
              {services.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <div className="px-2">
                    <ServiceCardWithAnimation service={service} index={index} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
