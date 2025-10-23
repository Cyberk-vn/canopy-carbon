"use client";

import Image from "next/image";
import { motion } from "motion/react";

const CollaborateWithUsSection = () => {
  return (
    <div className="relative w-full">
      {/* Main Content Group with overflow-hidden */}
      <div className="relative w-full overflow-hidden">
        <section className="relative bg-[#232A26] w-full min-h-[492px]">
          {/* Main Content Container */}
          <div className="relative z-10 pt-[42px] pl-[27px] pr-[24px] md:px-[120px]">
            <div className="w-full">
              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0.8, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-3 max-w-[342px] xxs:max-w-[360px] xs:max-w-[390px]"
              >
                <motion.h2
                  initial={{ opacity: 0.7, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  className="text-[#EDEDED] font-bold text-xl xxs:text-[21px] leading-[1.5em] text-left font-['Open_Sans']"
                >
                  Collaborate With Us
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0.6, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="flex flex-col gap-3 max-w-[342px] xxs:max-w-[360px] xs:max-w-[380px]"
                >
                  <p className="text-[#9E9E9E] text-[12px] leading-[18px] text-left font-['Open_Sans']">
                    We believe meaningful climate solutions are built through
                    partnership. At Canopy, we welcome collaboration with{" "}
                    <span className="text-[#EDEDED]">project proponents</span>,{" "}
                    <span className="text-[#EDEDED]">financiers</span>,{" "}
                    <span className="text-[#EDEDED]">corporate buyers</span>,{" "}
                    <span className="text-[#EDEDED]">
                      and technical specialists
                    </span>{" "}
                    who share our vision for high-integrity, nature-based <br />
                    development.
                  </p>
                  <p className="text-[#9E9E9E] text-[13px] xs:text-[14px] leading-[1.385em] text-left font-['Open_Sans']">
                    Whether you&apos;re looking to{" "}
                    <span className="text-[#EDEDED]">co-develop a project</span>
                    ,{" "}
                    <span className="text-[#EDEDED]">
                      secure long-term carbon offtake
                    </span>
                    , or{" "}
                    <span className="text-[#EDEDED]">
                      bring technical innovation to the field
                    </span>
                    , we&apos;d love to hear from you. Together, we can scale
                    impact where it matters most.
                  </p>
                </motion.div>
              </motion.div>

              {/* Card Grid Section */}
              <motion.div
                initial={{ opacity: 0.6, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-2 mt-6 w-full h-[112px]"
              >
                {/* Top Row */}
                <div className="flex gap-2 w-full">
                  <motion.div
                    initial={{ opacity: 0.7, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex items-center justify-center bg-black/20 w-[168px] xxs:w-[175px] xs:w-[195px] px-[37px] py-2 rounded hover:bg-black/30 transition-colors cursor-pointer"
                  >
                    <span className="text-white font-bold text-sm xxs:text-[15px] xs:text-[16px] leading-[1.714em] text-center font-['Open_Sans']">
                      Co-Develop
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0.7, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex items-center justify-center bg-black/20 w-[168px] xxs:w-[175px] xs:w-[195px] px-4 py-2 rounded hover:bg-black/30 transition-colors cursor-pointer"
                  >
                    <span className="text-white font-bold text-sm xxs:text-[15px] xs:text-[16px] leading-[1.714em] text-center font-['Open_Sans']">
                      Purchase Credits
                    </span>
                  </motion.div>
                </div>

                {/* Bottom Row */}
                <div className="flex gap-2 w-full">
                  <motion.div
                    initial={{ opacity: 0.7, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex items-center justify-center bg-black/20 w-[168px] xxs:w-[175px] xs:w-[195px] px-[29px] py-2 rounded hover:bg-black/30 transition-colors cursor-pointer"
                  >
                    <span className="text-white font-bold text-sm xxs:text-[15px] xs:text-[16px] leading-[1.714em] text-center font-['Open_Sans']">
                      Fund Pipeline
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0.7, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex items-center justify-center bg-black/20 w-[168px] xxs:w-[175px] xs:w-[195px] px-[20px] py-2 rounded hover:bg-black/30 transition-colors cursor-pointer"
                  >
                    <span className="text-white font-bold text-sm xxs:text-[15px] xs:text-[16px] leading-[1.714em] text-center font-['Open_Sans']">
                      Co-Innovate
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Images */}
          <div className="absolute top-[98px] right-[-90px] w-[227px] h-[228px] z-0">
            <Image
              src="/assets/our-project/collaborate-with-us/collaborate-decorate-absolute-image.png"
              alt="Collaborate decoration"
              fill
              className="object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="227px"
              style={{
                opacity: 0.17,
              }}
            />
          </div>
        </section>
      </div>

      {/* Bottom Decorative Image - Outside Section */}
      <div className="absolute bottom-[-23px] right-[0px] w-[82px] h-[46px] z-10">
        <Image
          src="/assets/our-project/collaborate-with-us/collaborate-decorate-bottom-image.png"
          alt="Bottom decoration"
          fill
          className="object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          sizes="82px"
        />
      </div>
    </div>
  );
};

export default CollaborateWithUsSection;
