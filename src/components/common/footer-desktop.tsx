"use client";

import React from "react";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "@/src/components/shared";
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
    <section className="w-full hidden lg:block">
      <Container maxWidth="default" className="px-[68px]">
        <div className="py-20 flex flex-col">
          {/* Desktop Layout - Fixed Widths with 204px Gap */}
          <div className="flex flex-row items-start justify-between">
            {/* Left Side - Contact Information (486px) */}
            <motion.div
              className="w-[486px] flex flex-col justify-start items-start"
              {...useSimpleMotion("footer-contact-info")}
              {...SIMPLE_ANIMATIONS.fadeInLeft}
            >
              {/* Header Title */}
              <h2
                className="text-[48px] font-semibold text-[#3B464F] mb-8 text-left"
                style={{
                  fontFamily: "Open Sans",
                  lineHeight: "1.36181640625em",
                  fontWeight: 600,
                }}
              >
                Get In Touch
              </h2>
              {/* Contact Information */}
              <div className="flex flex-col gap-[10px] mb-8">
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
              <div className="flex gap-3 justify-start items-center">
                {/* Desktop Facebook PNG */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/assets/icon/facebook.svg"
                    alt="Facebook"
                    width={36}
                    height={36}
                    className="w-9 h-9 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop Twitter PNG */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/assets/icon/twitter.svg"
                    alt="Twitter"
                    width={36}
                    height={36}
                    className="w-9 h-9 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop LinkedIn PNG */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/assets/icon/linked-in.svg"
                    alt="LinkedIn"
                    width={36}
                    height={36}
                    className="w-9 h-9 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop Instagram PNG */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/assets/icon/instagram.svg"
                    alt="Instagram"
                    width={36}
                    height={36}
                    className="w-9 h-9 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form (510px) */}
            <motion.div
              className="w-[510px]"
              {...useSimpleMotion("footer-contact-form")}
              {...SIMPLE_ANIMATIONS.fadeInRight}
            >
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {/* Name Input Field */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[16px] font-normal text-[#6B7280]"
                    style={{
                      fontFamily: "Open Sans",
                      lineHeight: "1.25em",
                      fontWeight: 400,
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Text"
                    value={formData.name}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 text-[16px] text-[rgba(209,213,219,0.8)] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                      border: "0.3px solid rgba(107, 114, 128, 0.4)",
                    }}
                    required
                  />
                </div>

                {/* Subject Input Field */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[16px] font-normal text-[#6B7280]"
                    style={{
                      fontFamily: "Open Sans",
                      lineHeight: "1.25em",
                      fontWeight: 400,
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Text"
                    value={formData.subject}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 text-[16px] text-[rgba(209,213,219,0.8)] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                      border: "0.3px solid rgba(107, 114, 128, 0.4)",
                    }}
                    required
                  />
                </div>

                {/* Email Input Field */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[16px] font-normal text-[#6B7280]"
                    style={{
                      fontFamily: "Open Sans",
                      lineHeight: "1.25em",
                      fontWeight: 400,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Text"
                    value={formData.email}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 text-[16px] text-[rgba(209,213,219,0.8)] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                      border: "0.3px solid rgba(107, 114, 128, 0.4)",
                    }}
                    required
                  />
                </div>

                {/* Message Input Field */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[16px] font-normal text-[#6B7280]"
                    style={{
                      fontFamily: "Open Sans",
                      lineHeight: "1.25em",
                      fontWeight: 400,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Text"
                    value={formData.message}
                    onChange={onInputChange}
                    rows={2}
                    className="w-full px-4 py-3 text-[16px] text-[rgba(209,213,219,0.8)] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent resize-vertical"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                      border: "0.3px solid rgba(107, 114, 128, 0.4)",
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#7D8F89] text-white w-full h-[44px] hover:bg-[#6B7C75] transition-colors duration-200 flex items-center justify-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5em",
                  }}
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterDesktop;
