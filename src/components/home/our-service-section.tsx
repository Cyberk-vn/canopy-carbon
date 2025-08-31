"use client";

import { OurServiceSectionProps, ServiceCardData } from "@/src/types/service";
import { ServiceCard } from "./service-card";
import { MobileServiceTitleOverlay } from "./mobile-service-title-overlay";
import { Container } from "@/src/components/shared";
import { useRef } from "react";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Animated Service Card Wrapper for Mobile
function ServiceCardWithAnimation({
  services,
  index,
}: {
  services: ServiceCardData[];
  index: number;
}) {
  const cardMotion = useSimpleMotion(`unified-service-card`);

  return (
    <motion.div
      {...SIMPLE_ANIMATIONS.slideInUp}
      {...cardMotion}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
      className="flex-shrink-0 transition-all duration-500 ease-out hover:scale-105 w-full safari-hw-accel safari-touch-fix"
      style={{
        scrollSnapAlign: "start",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        willChange: "transform, opacity",
        WebkitPerspective: 1000,
        perspective: 1000,
      }}
    >
      <ServiceCard services={services} />
    </motion.div>
  );
}

export function OurServiceSection({ title, services }: OurServiceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full focus:outline-none"
        tabIndex={0}
        role="region"
        aria-label="Our Services"
      >
        {/* Mobile Layout - Refactored with new MobileServiceTitle */}
        <div className="lg:hidden block w-full px-6 py-0">
          {/* Mobile Title */}
          <div className="mb-8 w-full">
            <MobileServiceTitleOverlay title={title} className="w-full" />
          </div>

          {/* Mobile: Swiper Carousel */}
          <div className="relative w-full safari-touch-fix">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              speed={600}
              allowTouchMove={true}
              grabCursor={true}
              // Safari-specific optimizations
              touchEventsTarget="container"
              touchRatio={1}
              touchAngle={45}
              simulateTouch={true}
              passiveListeners={false}
              resistance={true}
              resistanceRatio={0.85}
              className="service-swiper safari-hw-accel"
              style={{
                // Enhanced Safari hardware acceleration
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                willChange: "transform, opacity",
                WebkitPerspective: 1000,
                perspective: 1000,
                // Optimize for mobile Safari scrolling
                WebkitOverflowScrolling: "touch",
              }}
            >
              <SwiperSlide key="unified-services">
                <div>
                  <ServiceCardWithAnimation services={services} index={0} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
