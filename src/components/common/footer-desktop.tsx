"use client";

import React from "react";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import Image from "next/image";

interface ContactFormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface FooterDesktopProps {
  formData: ContactFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FooterDesktop = ({
  formData,
  onInputChange,
  onSubmit,
}: FooterDesktopProps) => {
  return (
    <section className="w-full bg-white hidden lg:block mt-50 px-80">
      <div className="mx-auto px-4">
        <div className="py-16 flex flex-col gap-10">
          {/* Desktop 50/50 Layout */}
          <div className="flex flex-row gap-8">
            {/* Left Side (50%) - Contact Information */}
            <motion.div
              className="w-1/2 justify-start items-start"
              {...useSimpleMotion("footer-contact-info")}
              {...SIMPLE_ANIMATIONS.fadeInLeft}
            >
              {/* Header Title */}
              <h2
                className="text-[48px] font-semibold text-[#3B464F] mb-8 text-left leading-normal"
                style={{ fontFamily: "Open Sans" }}
              >
                Get In Touch
              </h2>
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <p
                  className="text-[20px] font-normal text-[#7D8F89] leading-normal"
                  style={{ fontFamily: "Open Sans" }}
                >
                  400 Orchard Road, #21-07A Singapore, SG238875
                </p>
                <p
                  className="text-[20px] font-normal text-[#7D8F89] leading-normal"
                  style={{ fontFamily: "Open Sans" }}
                >
                  +65 6887 5522
                </p>
                <p
                  className="text-[20px] font-normal text-[#7D8F89] leading-normal"
                  style={{ fontFamily: "Open Sans" }}
                >
                  admin@canopyresearch.org
                </p>
              </div>

              {/* Social Icons - PNG images for desktop */}
              <div className="flex gap-3 justify-start">
                {/* Desktop Facebook PNG */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/assets/desktop/home/facebook-logo.png"
                    alt="Facebook"
                    width={36}
                    height={36}
                    className="w-9 h-9 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop Twitter PNG */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/assets/desktop/home/twitter-logo.png"
                    alt="Twitter"
                    width={36}
                    height={36}
                    className="w-9 h-9 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop LinkedIn PNG */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/assets/desktop/home/linkedin-logo.png"
                    alt="LinkedIn"
                    width={36}
                    height={36}
                    className="w-9 h-9 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop Instagram PNG */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/assets/desktop/home/instagram-logo.png"
                    alt="Instagram"
                    width={36}
                    height={36}
                    className="w-9 h-9 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side (50%) - Contact Form */}
            <motion.div
              className="w-1/3"
              {...useSimpleMotion("footer-contact-form")}
              {...SIMPLE_ANIMATIONS.fadeInRight}
            >
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name and Subject inputs - horizontal row with 12px gap */}
                <div className="flex flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={onInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent text-base"
                      style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                      required
                    />
                  </div>

                  <div className="flex-1">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={onInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent text-base"
                      style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent text-base"
                    style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={onInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent resize-vertical text-base"
                    style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#7D8F89] text-white px-8 py-3 rounded-md hover:bg-[#6B7C75] transition-colors duration-200 font-medium w-full text-base"
                  style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterDesktop;
