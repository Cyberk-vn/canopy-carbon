"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ExecutionItem, OurExecutionSectionProps } from "@/src/types/execution";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Mobile/Tablet execution items (original carousel images)
const mobileExecutionItems: ExecutionItem[] = [
  {
    id: 1,
    imageSrc: "/assets/our-execution-delivery-image.png",
    altText:
      "Precision in Delivery - Our execution ethos focused on precise project delivery",
  },
  {
    id: 2,
    imageSrc: "/assets/our-execution-focus-image.png",
    altText:
      "Community Focused - Our execution ethos centered on community engagement",
  },
  {
    id: 3,
    imageSrc: "/assets/our-execution-integrity-image.png",
    altText:
      "Environmental Integrity - Our execution ethos maintaining environmental standards",
  },
  {
    id: 4,
    imageSrc: "/assets/our-execution-transparency-image.png",
    altText:
      "Radical Transparency - Our execution ethos promoting transparent practices",
  },
];

// Desktop execution items (new grid layout images)
const desktopExecutionItems: ExecutionItem[] = [
  {
    id: 1,
    imageSrc: "/assets/desktop/home/our-execution-image-1.jpg",
    altText: "Precision in Delivery",
    title: "Precision in Delivery",
  },
  {
    id: 2,
    imageSrc: "/assets/desktop/home/our-execution-image-2.jpg",
    altText: "Community Focused",
    title: "Community Focused",
  },
  {
    id: 3,
    imageSrc: "/assets/desktop/home/our-execution-image-3.jpg",
    altText: "Environmental Integrity",
    title: "Environmental Integrity",
  },
  {
    id: 4,
    imageSrc: "/assets/desktop/home/our-execution-image-4.jpg",
    altText: "Radical Transparency",
    title: "Radical Transparency",
  },
];

const OurExecutionSection = ({ className = "" }: OurExecutionSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className={`bg-white relative overflow-hidden w-full focus:outline-none ${className}`}
      tabIndex={0}
      role="region"
      aria-label="Our Execution Ethos"
    >
      <div className="w-full px-4 md:px-16">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ 
            duration: 1.35,
            ease: [0.175, 0.885, 0.32, 1.275],
            delay: 0.3
          }}
        >
          <h2
            className="text-[32px] font-light text-[#2E2F2D]"
            style={{ fontFamily: "Open Sans" }}
          >
            Our Execution Ethos
          </h2>
        </motion.div>

        {/* Desktop Layout - 4 Cards Grid */}
        <div className="hidden lg:block">
          <div>
            <div
              className="grid"
              style={{ gridTemplateColumns: "12% 80% 10%" }}
            >
              {/* Left spacer*/}
              <div></div>

              {/* Content area */}
              <div className="flex justify-start">
                <div className="grid grid-cols-4 gap-6 w-full">
                  {desktopExecutionItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 50 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: "easeOut",
                      }}
                    >
                      {/* Image Container */}
                      <div className="relative mb-5">
                        <Image
                          src={item.imageSrc}
                          alt={item.altText}
                          width={337}
                          height={577}
                          className="object-cover shadow-lg w-[337px] h-[577px]"
                          priority={index < 2}
                        />
                      </div>

                      {/* Title */}
                      {item.title && (
                        <motion.h3
                          className="text-center text-[18px] font-medium text-[#2E2F2D] leading-tight"
                          style={{ fontFamily: "Open Sans" }}
                          initial={{ opacity: 0, y: 15 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                          transition={{ 
                            duration: 0.95,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: index * 0.1 + 0.8
                          }}
                        >
                          {item.title}
                        </motion.h3>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right spacer */}
              <div></div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Swiper Carousel */}
        <div className="block lg:hidden">
          <div className="relative w-full">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              allowTouchMove={true}
              grabCursor={true}
              className="execution-swiper"
            >
              {mobileExecutionItems.map((item) => (
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
      </div>
    </section>
  );
};

export default OurExecutionSection;
export { OurExecutionSection };
