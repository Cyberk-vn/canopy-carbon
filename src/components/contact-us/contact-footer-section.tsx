"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface ContactFormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const ContactFooterSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    subject: "",
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
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full relative min-h-dvh">
      {/* Background Image */}
      <div>
        <Image
          src="/assets/contact-us/background-footer-image.png"
          alt=""
          className="object-cover inset-0 mt-50 z-0 w-[390px] h-[849px]"
          fill
          role="presentation"
          priority
          sizes="100vw"
        />
        {/* overlay gradient */}
        <div
          className="
            pointer-events-none
            z-10
            absolute inset-x-0 h-[555px]
            bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_80.29%,rgba(255,255,255,0)_100%)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[342px] mx-auto pt-6">
        <div className="space-y-4">
          {/* Header Title - Always at top */}
          <motion.h2
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-[18px] lg:text-[48px] font-semibold text-[#3B464F] mb-8 text-start lg:text-left leading-[1.67] lg:leading-normal"
            style={{ fontFamily: "Open Sans" }}
          >
            Get In Touch
          </motion.h2>

          {/* Content Container with reordered columns */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-[204px]">
            {/* Mobile: Contact Information Second, Desktop: Contact Form Second */}
            <motion.div
              initial={{ opacity: 0.7, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-[510px] order-1 lg:order-2 space-y-4"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-[12px] font-semibold text-[#6B7280] leading-[1.67]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent text-[12px] lg:text-base bg-white/90 placeholder-[rgba(209,213,219,0.8)]"
                    style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-[11px] font-semibold text-[#6B7280] leading-[1.82]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent text-[12px] lg:text-base bg-white/90 placeholder-[rgba(209,213,219,0.8)]"
                    style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-semibold text-[#6B7280] leading-[1.82]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Text"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent text-[12px] lg:text-base bg-white/90 placeholder-[rgba(209,213,219,0.8)]"
                    style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold text-[#6B7280] leading-[1.82]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Text"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full h-[80px] px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7D8F89] focus:border-transparent resize-vertical text-[12px] lg:text-base bg-white/90 placeholder-[rgba(209,213,219,0.8)]"
                    style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#7D8F89] text-white px-8 py-3 hover:bg-[#6B7C75] transition-colors duration-200 font-medium w-full text-[12px] lg:text-base"
                  style={{ fontFamily: "Open Sans", fontWeight: "600" }}
                >
                  Send
                </button>
              </form>
            </motion.div>
            {/* Mobile: Contact Form First, Desktop: Contact Information First */}
            <motion.div
              initial={{ opacity: 0.7, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-[486px] order-2 lg:order-1"
            >
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <p
                  className="text-[14px] lg:text-[20px] font-normal text-[#7D8F89] leading-[1.43] lg:leading-normal"
                  style={{ fontFamily: "Open Sans" }}
                >
                  400 Orchard Road, #21-07A Singapore, SG238875
                </p>
                <p
                  className="text-[14px] lg:text-[20px] font-normal text-[#7D8F89] leading-[1.43] lg:leading-normal"
                  style={{ fontFamily: "Open Sans" }}
                >
                  +65 6887 5522
                </p>
                <p
                  className="text-[14px] lg:text-[20px] font-normal text-[#7D8F89] leading-[1.43] lg:leading-normal"
                  style={{ fontFamily: "Open Sans" }}
                >
                  admin@canopyresearch.org
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 justify-end lg:justify-start">
                {/* Facebook */}
                <div className="w-6 h-6 lg:w-9 lg:h-9 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-9 lg:h-9 w-6 h-6"
                  >
                    <path
                      d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 26.9831 6.58031 34.4326 15.1875 35.7563V23.2031H10.6172V18H15.1875V14.0344C15.1875 9.52312 17.8669 7.03125 21.9806 7.03125C23.9494 7.03125 26.0156 7.38281 26.0156 7.38281V11.8125H23.7394C21.5006 11.8125 20.8125 13.2 20.8125 14.625V18H25.8019L25.0144 23.2031H20.8125V35.7563C29.4197 34.4326 36 26.9831 36 18Z"
                      fill="#7D8F89"
                    />
                  </svg>
                </div>

                {/* Twitter */}
                <div className="w-6 h-6 lg:w-9 lg:h-9 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-9 lg:h-9 w-6 h-6"
                  >
                    <path
                      d="M28.3125 12.8625C28.3219 13.0875 28.3219 13.3125 28.3219 13.5375C28.3219 21.3 22.575 30.375 11.325 30.375C7.95 30.375 4.83750 29.3625 2.25 27.6375C2.75625 27.6938 3.24375 27.7125 3.76875 27.7125C6.52500 27.7125 9.04687 26.7375 11.0531 25.125C8.475 25.0687 6.30937 23.3812 5.60625 21.0937C6.00000 21.15 6.39375 21.1875 6.80625 21.1875C7.36875 21.1875 7.93125 21.1125 8.45625 20.9812C5.56875 20.4 3.39375 17.925 3.39375 14.9062V14.8312C4.14375 15.2625 5.00625 15.525 5.90625 15.5625C4.23750 14.4187 3.1875 12.5437 3.1875 10.425C3.1875 9.28125 3.48750 8.21875 3.99375 7.29375C7.10625 11.1187 11.8312 13.6125 17.1562 13.8375C17.0625 13.4062 17.0062 12.9562 17.0062 12.5062C17.0062 9.075 19.8 6.28125 23.2312 6.28125C25.0125 6.28125 26.625 7.01250 27.7125 8.19375C29.0625 7.95000 30.3562 7.4625 31.5187 6.78750C31.0875 8.14375 30.1687 9.28125 28.9312 10.0125C30.1312 9.86250 31.2937 9.50625 32.3625 9.01875C31.5187 10.1813 30.4875 11.2125 28.3125 12.8625Z"
                      fill="#7D8F89"
                    />
                  </svg>
                </div>

                {/* LinkedIn */}
                <div className="w-6 h-6 lg:w-9 lg:h-9 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-9 lg:h-9 w-6 h-6"
                  >
                    <path
                      d="M33.3563 0H2.6625C1.19062 0 0 1.17187 0 2.61562V33.3844C0 34.8281 1.19062 36 2.6625 36H33.3563C34.8281 36 36 34.8281 36 33.3844V2.61562C36 1.17187 34.8281 0 33.3563 0ZM10.6969 30.6562H5.34375V13.5H10.6969V30.6562ZM8.02031 11.1375C6.30937 11.1375 4.92187 9.75 4.92187 8.05781C4.92187 6.36562 6.30937 4.97812 8.02031 4.97812C9.7125 4.97812 11.1 6.36562 11.1 8.05781C11.1 9.75 9.7125 11.1375 8.02031 11.1375ZM30.6562 30.6562H25.3125V22.275C25.3125 20.2687 25.275 17.6625 22.4625 17.6625C19.5937 17.6625 19.125 19.8187 19.125 22.125V30.6562H13.7812V13.5H18.9V15.9187H18.9656C19.6875 14.5687 21.5625 13.125 24.3937 13.125C29.8125 13.125 30.6562 16.6312 30.6562 21.2062V30.6562Z"
                      fill="#7D8F89"
                    />
                  </svg>
                </div>

                {/* Instagram */}
                <div className="w-6 h-6 lg:w-9 lg:h-9 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-9 lg:h-9 w-6 h-6"
                  >
                    <path
                      d="M18 8.85937C22.9687 8.85937 27.1406 12.9937 27.1406 18C27.1406 23.0062 22.9687 27.1406 18 27.1406C12.9937 27.1406 8.85937 23.0062 8.85937 18C8.85937 12.9937 12.9937 8.85937 18 8.85937ZM18 23.9437C21.2062 23.9437 23.9437 21.2437 23.9437 18C23.9437 14.7937 21.2437 12.0562 18 12.0562C14.7562 12.0562 12.0562 14.7562 12.0562 18C12.0562 21.2437 14.7937 23.9437 18 23.9437ZM29.8312 8.475C29.8312 9.69375 28.8375 10.6875 27.6187 10.6875C26.4 10.6875 25.4062 9.69375 25.4062 8.475C25.4062 7.25625 26.4 6.2625 27.6187 6.2625C28.8375 6.2625 29.8312 7.25625 29.8312 8.475ZM35.6437 10.6875C35.7937 13.2 35.7937 22.8 35.6437 25.3125C35.5125 27.7125 34.9312 29.8312 33.15 31.5937C31.3687 33.375 29.2687 33.9562 26.8687 34.0875C24.3562 34.2375 14.6437 34.2375 12.1312 34.0875C9.73125 33.975 7.61250 33.3937 5.85000 31.6125C4.06875 29.8312 3.48750 27.7312 3.35625 25.3312C3.20625 22.8187 3.20625 13.2187 3.35625 10.7062C3.4875 8.30625 4.06875 6.1875 5.85000 4.425C7.61250 2.64375 9.71250 2.0625 12.1125 1.93125C14.625 1.78125 24.3375 1.78125 26.85 1.93125C29.25 2.0625 31.3687 2.64375 33.1312 4.425C34.9125 6.1875 35.4937 8.2875 35.625 10.6875H35.6437ZM31.8375 27.9937C32.775 25.5562 32.55 20.1562 32.55 18C32.55 15.8437 32.775 10.4437 31.8375 8.00625C31.3125 6.76875 30.2312 5.6875 29.0125 5.1625C26.575 4.225 21.175 4.45 19.0187 4.45C16.8625 4.45 11.4625 4.225 9.025 5.1625C7.7875 5.6875 6.70625 6.76875 6.18125 8.00625C5.24375 10.4437 5.46875 15.8437 5.46875 18C5.46875 20.1562 5.24375 25.5562 6.18125 27.9937C6.70625 29.2312 7.7875 30.3125 9.025 30.8375C11.4625 31.775 16.8625 31.55 19.0187 31.55C21.175 31.55 26.575 31.775 29.0125 30.8375C30.25 30.3125 31.3312 29.2312 31.8562 27.9937H31.8375Z"
                      fill="#7D8F89"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooterSection;
