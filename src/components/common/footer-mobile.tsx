"use client";

import React from "react";
import Image from "next/image";

// Icon imports
import FacebookIcon from "../../../public/assets/icon/facebook.svg";
import TwitterIcon from "../../../public/assets/icon/twitter.svg";
import LinkedInIcon from "../../../public/assets/icon/linked-in.svg";
import InstagramIcon from "../../../public/assets/icon/instagram.svg";

interface ContactFormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface FooterMobileProps {
  formData: ContactFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

interface FloatingLabelInputProps {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  rows?: number;
  labelSize?: "small" | "medium";
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
  rows = 2,
  labelSize = "small",
}) => {
  const labelStyles = {
    fontSize: labelSize === "medium" ? "12px" : "11px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#6B7280",
    lineHeight: "1.82",
  };

  const inputStyles = {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "12px",
    color: "rgba(209, 213, 219, 0.8)",
    lineHeight: "1.67",
    border: "0.3px solid rgba(107, 114, 128, 0.4)",
    padding: "12px 16px",
  };

  return (
    <div className="flex flex-col" style={{ gap: "8px" }}>
      <label htmlFor={name} style={labelStyles}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          style={inputStyles}
          placeholder="Text"
          className="w-full focus:outline-none focus:ring-2 focus:ring-[#D1D5DBCC] focus:border-transparent resize-vertical max-h-[80px] h-[80px] min-h-[80px]"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={inputStyles}
          placeholder="Text"
          className="w-full focus:outline-none focus:ring-2 focus:ring-[#D1D5DBCC] focus:border-transparent"
        />
      )}
    </div>
  );
};

const FooterMobile = ({
  formData,
  onInputChange,
  onSubmit,
}: FooterMobileProps) => {
  return (
    <section className="w-full md:hidden bg-[FCFCFC]">
      <div className="max-w-[1200px] mx-auto px-6 bg-[FCFCFC]">
        <div className="py-[67px] bg-[FCFCFC]">
          {/* Header Title */}
          <h2
            className="text-[18px] font-semibold text-[#3B464F] mb-[20px] text-start leading-[30px]"
            style={{ fontFamily: "Open Sans", fontWeight: "600" }}
          >
            Get In Touch
          </h2>

          {/* Mobile Layout: Form First, Contact Info Second */}
          <div className="flex flex-col gap-5">
            {/* Contact Form First */}
            <div className="w-full order-1">
              <form
                onSubmit={onSubmit}
                className="mx-auto flex flex-col"
                style={{ gap: "16px" }}
              >
                <FloatingLabelInput
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={onInputChange}
                  labelSize="medium"
                  required
                />

                <FloatingLabelInput
                  label="Subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={onInputChange}
                  required
                />

                <FloatingLabelInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onInputChange}
                  required
                />

                <FloatingLabelInput
                  label="Message"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={onInputChange}
                  rows={6}
                  required
                />

                <button
                  type="submit"
                  className="h-[44px] bg-[#7D8F89] text-white hover:bg-[#6B7C75] transition-colors duration-200"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "#FFFFFF",
                    lineHeight: "1.43",
                  }}
                >
                  Send
                </button>
              </form>
            </div>

            {/* Contact Information Second */}
            <div className="w-full order-2">
              {/* Contact Information */}
              <div className="space-y-2 mb-8">
                <p
                  className="text-[14px] font-normal text-[#7D8F89] leading-[1.43]"
                  style={{ fontFamily: "Open Sans" }}
                >
                  400 Orchard Road, #21-07A Singapore, SG238875
                </p>
                <p
                  className="text-[14px] font-normal text-[#7D8F89] leading-[1.43]"
                  style={{ fontFamily: "Open Sans" }}
                >
                  +65 6887 5522
                </p>
                <p
                  className="text-[14px] font-normal text-[#7D8F89] leading-[1.43]"
                  style={{ fontFamily: "Open Sans" }}
                >
                  admin@canopyresearch.org
                </p>
              </div>

              {/* Social Icons - SVG images for mobile */}
              <div className="flex gap-3 justify-end">
                {/* Facebook */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src={FacebookIcon}
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>

                {/* Twitter */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src={TwitterIcon}
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>

                {/* LinkedIn */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>

                {/* Instagram */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMobile;
