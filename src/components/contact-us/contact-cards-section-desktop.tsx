"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { NavigationMenu } from "../common";
import type { ContactCardsProps } from "@/src/types/contact-us";

interface ContactFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  message: string;
}

// Connect With Us Form Component
const ConnectWithUsForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-[510px] flex flex-col gap-6">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0.8, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-base font-bold leading-6 text-[#121C17] font-open-sans text-left"
      >
        CONNECT WITH US
      </motion.h2>

      {/* Form Background */}
      <motion.div
        initial={{ opacity: 0.7, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="p-4"
        style={{ background: "rgba(226, 226, 226, 0.8)" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Fields Row - First name* & Last name* */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label
                htmlFor="firstName"
                className="text-xs font-normal text-[#0D1117]"
                style={{
                  fontFamily: "Open Sans",
                  lineHeight: "1.6666666666666667em",
                }}
              >
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full py-[7px] px-2 bg-white border-[0.3px] border-contact-input-border text-xs font-normal leading-5 placeholder:text-contact-placeholder focus:outline-none focus:ring-1 focus:ring-[#121C17] font-open-sans"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label
                htmlFor="lastName"
                className="text-xs font-normal text-[#0D1117]"
                style={{
                  fontFamily: "Open Sans",
                  lineHeight: "1.6666666666666667em",
                }}
              >
                Last name*
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full py-[7px] px-4 bg-white border-[0.3px] border-contact-input-border text-xs font-normal leading-5 placeholder:text-contact-placeholder focus:outline-none focus:ring-1 focus:ring-[#121C17] font-open-sans"
                required
              />
            </div>
          </div>

          {/* Company Name Field */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="companyName"
              className="text-xs font-normal text-[#0D1117]"
              style={{
                fontFamily: "Open Sans",
                lineHeight: "1.6666666666666667em",
              }}
            >
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Text"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full py-[7px] px-4 bg-white border-[0.3px] border-contact-input-border text-xs font-normal leading-5 placeholder:text-contact-placeholder focus:outline-none focus:ring-1 focus:ring-[#121C17] font-open-sans"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xs font-normal text-[#0D1117]"
              style={{
                fontFamily: "Open Sans",
                lineHeight: "1.6666666666666667em",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Text"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-[7px] px-4 bg-white border-[0.3px] border-contact-input-border text-xs font-normal leading-5 placeholder:text-contact-placeholder focus:outline-none focus:ring-1 focus:ring-[#121C17] font-open-sans"
              required
            />
          </div>

          {/* Message Field with 8px gap */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-xs font-normal text-[#0D1117]"
              style={{
                fontFamily: "Open Sans",
                lineHeight: "1.6666666666666667em",
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message-whether its a business proposal, question or comment"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full py-2 px-4 bg-white border-[0.3px] border-contact-input-border text-xs font-normal leading-5 placeholder:text-contact-placeholder focus:outline-none focus:ring-1 focus:ring-[#121C17] resize-vertical font-open-sans"
              required
            />
          </div>

          {/* Send Button - 44px height */}
          <button
            type="submit"
            className="w-full h-11 bg-[#EAE7DF] text-[#3B464F] text-base font-normal leading-6 hover:bg-[#E0DDD5] transition-colors duration-200 font-open-sans text-center"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// Card Group Component
const CardGroup = ({ cards }: { cards: ContactCardsProps["cards"] }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.id || index}
          initial={{ opacity: 0.8, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className="w-[291px] p-4 space-y-4"
          style={{ background: "rgba(250, 250, 250, 0.6)" }}
        >
          <div className="p-4" style={{ background: "rgba(0, 0, 0, 0.01)" }}>
            <h3
              className="text-base font-bold leading-6 text-center text-[#121C17] mb-4"
              style={{ fontFamily: "Open Sans" }}
            >
              {card.title}
            </h3>
            <p
              className="text-xs font-normal leading-5 text-justify text-[#6C6C6C]"
              style={{ fontFamily: "Open Sans" }}
            >
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export function ContactHeroSectionDesktop({ cards }: ContactCardsProps) {
  // Menu items data - following the same pattern as other pages
  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Our projects", url: "/our-project" },
    { text: "Canopy insights", url: "/canopy-insight" },
    { text: "Contact Us", url: "/contact-us" },
  ];

  return (
    <div className="relative w-full min-h-[987px] max-w-[1440px] mx-auto">
      {/* Background System with 4-layer overlay */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div className="absolute inset-0 top-[137px]">
          <Image
            src="/assets/desktop/contact-us/contact-us-background-image.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Background gradient overlay - Figma Rectangle 70 */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(24, 24, 24, 0) 82%, rgba(24, 24, 24, 0.9) 100%)",
          }}
        />

        {/* Primary overlay - Figma "first background overlay" with exact height and positioning */}
        <div
          className="absolute z-2"
          style={{
            left: 0,
            top: -1.5,
            width: 1440,
            height: 609.5,
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      </div>

      {/* Navigation */}
      <div className="relative z-50">
        <NavigationMenu
          menuItems={menuItems}
          logoUrl="/assets/banner-shared-component/logo.png"
          mobileMenuIconColor="#EDEDED"
          activeItem="Contact Us"
        />
      </div>

      {/* Content Layout with Flexbox */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-[108px]">
        <div className="flex gap-[89px] items-start">
          {/* Left side - Connect with us form */}
          <div className="w-[510px] flex-shrink-0 pt-[93px]">
            <ConnectWithUsForm />
          </div>

          {/* Right side - Card group */}
          <div className="w-[612px] flex-shrink-0 -mt-2 pt-[85px]">
            <CardGroup cards={cards} />
          </div>
        </div>
      </div>

      {/* Footer Section - Full Width */}
      <div className="absolute bottom-0 left-0 right-0 z-30 w-screen max-h-[53px] bg-white backdrop-blur-sm max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center py-4">
          <motion.p
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-sm font-normal text-[#6C6C6C]"
            style={{ fontFamily: "Open Sans" }}
          >
            © 2024 Canopy Carbon. All rights reserved.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default ContactHeroSectionDesktop;
