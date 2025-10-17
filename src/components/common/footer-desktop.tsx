"use client";

import React from "react";
import { motion } from "motion/react";
import {
  useSimpleMotion,
  SIMPLE_ANIMATIONS,
} from "@/src/hooks/responsive/use-simple-motion";
import { Container } from "@/src/components/shared";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

// Social media icon imports
import FacebookIcon from "../../../public/assets/desktop/icon/facebook.svg";
import TwitterIcon from "../../../public/assets/desktop/icon/twitter.svg";
import LinkedInIcon from "../../../public/assets/desktop/icon/linkedIn.svg";
import InstagramIcon from "../../../public/assets/desktop/icon/instagram.svg";

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
    <section className={cn("w-full hidden md:block bg-white pb-40")}>
      <Container
        maxWidth="full"
        padding="none"
        className={cn("hidden xl:block")}
      >
        <div className={cn("max-w-[2200px] mx-auto 3xl:px-[172px] px-[68px]")}>
          {/* Desktop Layout - Fixed Gap per Figma */}
          <div className={cn("flex flex-row items-start justify-between")}>
            {/* Left Side - Contact Information (fixed width per Figma) */}
            <motion.div
              className="w-[300px] flex flex-col justify-start items-start"
              {...useSimpleMotion("footer-contact-info")}
              {...SIMPLE_ANIMATIONS.fadeInLeft}
            >
              {/* Header Title */}
              <h2
                className="text-[30px] font-bold text-[#3B464F] mb-[32px]"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 700,
                  lineHeight: "1.36181640625em",
                }}
              >
                Get in Touch
              </h2>
              {/* Contact Information */}
              <div className="flex flex-col gap-[24px] mb-[32px]">
                {/* Address */}
                <div className="flex flex-col gap-2">
                  <p
                    className="text-[16px] text-[#3B464F]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                    }}
                  >
                    400 Orchard Road, #21-07A
                  </p>
                  <p
                    className="text-[16px] text-[#3B464F]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                    }}
                  >
                    Singapore, SG238875
                  </p>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-2">
                  <p
                    className="text-[16px] text-[#3B464F]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                    }}
                  >
                    +65 6887 5522
                  </p>
                  <p
                    className="text-[16px] text-[#3B464F]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                    }}
                  >
                    admin@canopyresearch.org
                  </p>
                </div>
              </div>

              {/* Social Icons - PNG images for desktop */}
              <div className="flex gap-[12px] justify-start items-center">
                {/* Desktop Facebook PNG */}
                <div className="w-[25px] h-[25px] flex items-center justify-center">
                  <Image
                    src={FacebookIcon}
                    alt="Facebook"
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop Twitter PNG */}
                <div className="w-[25px] h-[25px] flex items-center justify-center">
                  <Image
                    src={TwitterIcon}
                    alt="Twitter"
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop LinkedIn PNG */}
                <div className="w-[25px] h-[25px] flex items-center justify-center">
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                {/* Desktop Instagram PNG */}
                <div className="w-[25px] h-[25px] flex items-center justify-center">
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form (fixed width per Figma) */}
            <motion.div
              className="w-[610px]"
              {...useSimpleMotion("footer-contact-form")}
              {...SIMPLE_ANIMATIONS.fadeInRight}
            >
              <form onSubmit={onSubmit} className="flex flex-col gap-[32px]">
                {/* Name and Subject Side by Side */}
                <div className="flex flex-row gap-[16px]">
                  {/* Name Input Field */}
                  <div className="flex flex-col gap-[8px] flex-1">
                    <label
                      className="text-[14px] font-bold text-[#1F2937]"
                      style={{
                        fontFamily: "Open Sans",
                        lineHeight: "1.4285714285714286em",
                        fontWeight: 700,
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
                      className="w-full px-4 py-3 bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "1.25em",
                        borderBottom: "2px solid #E0E4E8",
                      }}
                      required
                    />
                  </div>

                  {/* Subject Input Field */}
                  <div className="flex flex-col gap-[8px] flex-1">
                    <label
                      className="text-[14px] font-bold text-[#1F2937]"
                      style={{
                        fontFamily: "Open Sans",
                        lineHeight: "1.4285714285714286em",
                        fontWeight: 700,
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={onInputChange}
                      className="w-full px-4 py-3 bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "1.25em",
                        borderBottom: "2px solid #E0E4E8",
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Email Input Field */}
                <div className="flex flex-col gap-[8px]">
                  <label
                    className="text-[14px] font-bold text-[#1F2937]"
                    style={{
                      fontFamily: "Open Sans",
                      lineHeight: "1.4285714285714286em",
                      fontWeight: 700,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.25em",
                      borderBottom: "2px solid #E0E4E8",
                    }}
                    required
                  />
                </div>

                {/* Message Input Field */}
                <div className="flex flex-col gap-[8px]">
                  <label
                    className="text-[14px] font-bold text-[#1F2937]"
                    style={{
                      fontFamily: "Open Sans",
                      lineHeight: "1.4285714285714286em",
                      fontWeight: 700,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={onInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent resize-none"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "1.25em",
                      borderBottom: "2px solid #E0E4E8",
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#E0E4E8] text-[#1F2937] w-full h-[36px] hover:bg-[#D0D4D8] transition-colors duration-200 flex items-center justify-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "1.7142857142857142em",
                  }}
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Tablet Layout - 768px to 1440px */}
      <Container
        maxWidth="full"
        padding="none"
        className="hidden md:block xl:hidden"
      >
        <div
          className="mx-auto px-6 py-12"
          style={{
            maxWidth: "clamp(696px, 90vw, 1200px)",
          }}
        >
          {/* Tablet Layout - Column Layout */}
          <div
            className="flex flex-col"
            style={{
              gap: "clamp(48px, 6vw, 64px)",
            }}
          >
            {/* Left Side - Contact Information */}
            <motion.div
              className="flex flex-col justify-start items-start"
              style={{
                width: "clamp(486px, 70vw, 600px)",
              }}
              {...useSimpleMotion("footer-contact-info-tablet")}
              {...SIMPLE_ANIMATIONS.fadeInLeft}
            >
              {/* Header Title */}
              <h2
                className="font-bold text-[#3B464F] mb-8 text-left"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 32px)",
                  lineHeight: "1.36181640625em",
                }}
              >
                Get in Touch
              </h2>

              {/* Contact Information */}
              <div
                className="flex flex-col mb-8"
                style={{
                  gap: "clamp(24px, 3vw, 32px)",
                }}
              >
                {/* Address */}
                <div className="flex flex-col gap-2">
                  <p
                    className="font-normal text-[#7D8F89]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 2.5vw, 20px)",
                      lineHeight: "1.5em",
                    }}
                  >
                    400 Orchard Road, #21-07A
                  </p>
                  <p
                    className="font-normal text-[#7D8F89]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 2.5vw, 20px)",
                      lineHeight: "1.5em",
                    }}
                  >
                    Singapore, SG238875
                  </p>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-2">
                  <p
                    className="font-normal text-[#7D8F89]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 2.5vw, 20px)",
                      lineHeight: "1.5em",
                    }}
                  >
                    +65 6887 5522
                  </p>
                  <p
                    className="font-normal text-[#7D8F89]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 2.5vw, 20px)",
                      lineHeight: "1.5em",
                    }}
                  >
                    admin@canopyresearch.org
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div
                className="flex justify-start items-center"
                style={{
                  gap: "clamp(12px, 1.5vw, 16px)",
                }}
              >
                {/* Facebook */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "clamp(32px, 4vw, 36px)",
                    height: "clamp(32px, 4vw, 36px)",
                  }}
                >
                  <Image
                    src={FacebookIcon}
                    alt="Facebook"
                    width={36}
                    height={36}
                    className="hover:opacity-80 transition-opacity duration-200"
                    style={{
                      width: "clamp(32px, 4vw, 36px)",
                      height: "clamp(32px, 4vw, 36px)",
                    }}
                  />
                </div>

                {/* Twitter */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "clamp(32px, 4vw, 36px)",
                    height: "clamp(32px, 4vw, 36px)",
                  }}
                >
                  <Image
                    src={TwitterIcon}
                    alt="Twitter"
                    width={36}
                    height={36}
                    className="hover:opacity-80 transition-opacity duration-200"
                    style={{
                      width: "clamp(32px, 4vw, 36px)",
                      height: "clamp(32px, 4vw, 36px)",
                    }}
                  />
                </div>

                {/* LinkedIn */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "clamp(32px, 4vw, 36px)",
                    height: "clamp(32px, 4vw, 36px)",
                  }}
                >
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    width={36}
                    height={36}
                    className="hover:opacity-80 transition-opacity duration-200"
                    style={{
                      width: "clamp(32px, 4vw, 36px)",
                      height: "clamp(32px, 4vw, 36px)",
                    }}
                  />
                </div>

                {/* Instagram */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "clamp(32px, 4vw, 36px)",
                    height: "clamp(32px, 4vw, 36px)",
                  }}
                >
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    width={36}
                    height={36}
                    className="hover:opacity-80 transition-opacity duration-200"
                    style={{
                      width: "clamp(32px, 4vw, 36px)",
                      height: "clamp(32px, 4vw, 36px)",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="w-full"
              {...useSimpleMotion("footer-contact-form-tablet")}
              {...SIMPLE_ANIMATIONS.fadeInRight}
            >
              <form
                onSubmit={onSubmit}
                className="flex flex-col"
                style={{
                  gap: "clamp(16px, 2vw, 20px)",
                }}
              >
                {/* Name and Subject Side by Side */}
                <div
                  className="flex flex-row"
                  style={{
                    gap: "clamp(16px, 2vw, 20px)",
                  }}
                >
                  {/* Name Input Field */}
                  <div
                    className="flex flex-col flex-1"
                    style={{
                      gap: "clamp(6px, 1vw, 8px)",
                    }}
                  >
                    <label
                      className="font-bold text-[#6B7280]"
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.25em",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
                      className="w-full bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.25em",
                        borderBottom: "2px solid #E0E4E8",
                        padding:
                          "clamp(10px, 1.5vw, 12px) clamp(14px, 2vw, 16px)",
                      }}
                      required
                    />
                  </div>

                  {/* Subject Input Field */}
                  <div
                    className="flex flex-col flex-1"
                    style={{
                      gap: "clamp(6px, 1vw, 8px)",
                    }}
                  >
                    <label
                      className="font-bold text-[#6B7280]"
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.25em",
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={onInputChange}
                      className="w-full bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.25em",
                        borderBottom: "2px solid #E0E4E8",
                        padding:
                          "clamp(10px, 1.5vw, 12px) clamp(14px, 2vw, 16px)",
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Email Input Field */}
                <div
                  className="flex flex-col"
                  style={{
                    gap: "clamp(6px, 1vw, 8px)",
                  }}
                >
                  <label
                    className="font-bold text-[#6B7280]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 700,
                      fontSize: "clamp(14px, 2vw, 16px)",
                      lineHeight: "1.25em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    className="w-full bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 2vw, 16px)",
                      lineHeight: "1.25em",
                      borderBottom: "2px solid #E0E4E8",
                      padding:
                        "clamp(10px, 1.5vw, 12px) clamp(14px, 2vw, 16px)",
                    }}
                    required
                  />
                </div>

                {/* Message Input Field */}
                <div
                  className="flex flex-col"
                  style={{
                    gap: "clamp(6px, 1vw, 8px)",
                  }}
                >
                  <label
                    className="font-bold text-[#6B7280]"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 700,
                      fontSize: "clamp(14px, 2vw, 16px)",
                      lineHeight: "1.25em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={onInputChange}
                    rows={4}
                    className="w-full bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent resize-none"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 2vw, 16px)",
                      lineHeight: "1.25em",
                      borderBottom: "2px solid #E0E4E8",
                      padding:
                        "clamp(10px, 1.5vw, 12px) clamp(14px, 2vw, 16px)",
                    }}
                    required
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="bg-[#E0E4E8] text-[#3B464F] w-full hover:bg-[#D0D4D8] transition-colors duration-200 flex items-center justify-center"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 2vw, 16px)",
                    lineHeight: "1.5em",
                    height: "clamp(40px, 5vw, 44px)",
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
