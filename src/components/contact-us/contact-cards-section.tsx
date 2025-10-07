"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { NavigationMenu } from "../common";
import type { ContactCardsProps } from "@/src/types/contact-us";

const ContactCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.8, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="w-full max-w-[342px] mx-auto"
    >
      {/* Card Background */}
      <div
        className="relative p-4 h-full"
        style={{
          background:
            "linear-gradient(135deg, #FAFAFA 0%, rgba(250, 250, 250, 0.8) 100%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "soft-light",
        }}
      >
        {/* Inner Card Content */}
        <div className="relative p-4 bg-black/[0.01] rounded h-full flex flex-col justify-center">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Title */}
            <div className="w-full">
              <h3 className=" font-bold text-base leading-6 text-[#121C17] md:text-lg">
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="w-[280px] md:max-w-none  font-normal text-xs md:text-sm leading-5 text-center text-[#6C6C6C]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function ContactHeroSection({ cards }: ContactCardsProps) {
  // Menu items data - following the same pattern as other pages
  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Our projects", url: "/our-project" },
    { text: "Canopy insights", url: "/canopy-insight" },
    { text: "Contact", url: "/contact-us" },
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Background Image - Mobile only */}
        <div className="absolute w-full h-full top-0 left-0">
          <Image
            src="/assets/contact-us/background-content-contact-us-image-overlay.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop background - full screen */}
        {/* <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/assets/contact-us/background-image-1.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div> */}

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.69) 38%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>

      {/* Navigation */}
      <div className="relative z-50">
        <NavigationMenu
          menuItems={menuItems}
          logoUrl="/assets/banner-shared-component/logo.png"
          mobileMenuIconColor="#EDEDED"
          activeItem="Contact"
          useWhiteMenuIcon={true}
        />
      </div>

      {/* Contact Cards Section */}
      <div className="relative z-20 mt-8">
        <div className="mx-auto px-6">
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {cards.map((card, index) => (
              <ContactCard
                key={card.id || index}
                title={card.title}
                description={card.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements - Mobile only - Below ContactCard section */}
        <motion.div
          initial={{ opacity: 0.6, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="relative mt-4 md:hidden"
        >
          <div className="flex items-center px-6">
            <Image
              src="/assets/banner-shared-component/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover rounded-full"
            />

            {/* Double Line Decorator */}
            <div className="w-[114px] h-1 relative">
              <div
                className="absolute top-0 left-[3px] w-[111px] h-0 border-t border-white/10"
                style={{
                  borderColor: "rgba(172, 184, 194, 0.1)",
                }}
              />
              <div
                className="absolute top-1 left-0 w-[111px] h-0 border-t border-white/10"
                style={{
                  borderColor: "rgba(172, 184, 194, 0.1)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactHeroSection;
