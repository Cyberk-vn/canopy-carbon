"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { NavigationMenu } from "../common";
import type { ContactCardsProps } from "@/src/types/contact-us";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ContactFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  message: string;
}

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-6 2xl:mb-12 text-base font-semibold uppercase 2xl:text-2xl text-[#121C17]"
      >
        CONNECT WITH US
      </motion.h2>

      <motion.div
        id="contact-desktop-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="bg-[#0000001A] py-2 px-3"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-1">
              <Label
                htmlFor="firstName"
                className="text-xs 2xl:text-sm text-[#0D1117]"
              >
                First name*
              </Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="rounded-none h-10 border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <Label
                htmlFor="lastName"
                className="text-xs 2xl:text-sm text-[#0D1117]"
              >
                Last name*
              </Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="rounded-none h-10 border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="companyName"
              className="text-xs 2xl:text-sm text-[#0D1117]"
            >
              Company name
            </Label>
            <Input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="rounded-none h-10 border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="email"
              className="text-xs 2xl:text-sm text-[#0D1117]"
            >
              Email*
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="rounded-none h-10 border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="message"
              className="text-xs 2xl:text-sm text-[#0D1117]"
            >
              Message
            </Label>
            <Textarea
              name="message"
              id="message"
              placeholder="Type your message-whether its a business proposal, question or comment"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="rounded-none h-[92px] border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
              required
            />
          </div>
          <Button
            type="submit"
            className="h-10 w-full cursor-pointer rounded-none bg-[#EAE7DF] font-sans text-base font-semibold text-[#3B464F] transition-colors duration-200 hover:bg-[#E0DDD5]"
          >
            Send
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

const CardGroup = ({ cards }: { cards: ContactCardsProps["cards"] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {cards.map((card, index) => (
      <motion.div
        key={card.id || index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        className="h-[245px] 2xl:h-[303px] bg-[#FAFAFA99] p-4 2xl:p-6"
      >
        <div className="flex h-full w-full flex-col items-center bg-[#00000003] p-4 2xl:p-6">
          <h3 className="mb-4 text-center font-sans text-base 2xl:text-lg font-bold leading-tight text-black">
            {card.title}
          </h3>
          <p className="text-justify text-xs 2xl:text-sm leading-[20px] 2xl:leading-[24px] text-[#6C6C6C]">
            {card.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
);

export function ContactHeroSectionDesktop({ cards }: ContactCardsProps) {
  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Our projects", url: "/our-project" },
    { text: "Canopy insights", url: "/canopy-insight" },
    { text: "Contact", url: "/contact-us" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/assets/desktop/contact-us/contact-bg.png"
        alt="Contact us background big screen"
        fill
        className="hidden 2xl:block z-0"
        priority
      />
      <Image
        src="/assets/desktop/contact-us/cnr-circle.png"
        alt="CNR Circle"
        width={380}
        height={380}
        className="absolute -bottom-0 -left-16 4xl:left-50 4xl:bottom-4 z-[1] hidden 2xl:block"
      />
      <Image
        src="/assets/desktop/contact-us/cnr-circle.png"
        alt="CNR Circle"
        width={300}
        height={300}
        className="absolute -bottom-5 -left-12 z-[1] hidden xl:block 2xl:hidden"
      />
      <Image
        src="/assets/desktop/contact-us/contact-bg-1440.png"
        alt="Contact us background"
        fill
        className="hidden lg:block 2xl:hidden z-0"
        priority
      />
      <Image
        src="/assets/desktop/contact-us/contact-us-bg-tablet.png"
        alt="Contact us background tablet"
        fill
        className="xl:hidden h-full z-0"
        priority
      />

      <div
        className="absolute top-0 left-0 right-0 h-[600px] z-[2]"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 80.29%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[400px] z-[2]"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col pt-10 3xl:pt-0">
        <NavigationMenu
          menuItems={menuItems}
          logoUrl="/assets/banner-shared-component/logo.png"
          mobileMenuIconColor="#EDEDED"
          activeItem="Contact"
        />

        <main className="flex-grow md:pt-10 lg:pt-0 md:pb-50 2xl:pb-100 md:px-18">
          <div className="flex flex-col-reverse items-center gap-14 xl:flex-row xl:items-start xl:justify-center lg:gap-11 2xl:gap-[92px]">
            <div className="w-full xl:w-[620px] 2xl:w-[794px] xl:pt-25">
              <ConnectWithUsForm />
            </div>
            <div className="w-full xl:w-[667px] 2xl:w-[800px] xl:pt-20">
              <CardGroup cards={cards} />
            </div>
          </div>
        </main>

        <footer className="w-full bg-white py-4">
          <div className="container mx-auto">
            <p className="text-center font-sans text-sm font-normal text-[#6C6C6C]">
              © 2024 Canopy Carbon. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ContactHeroSectionDesktop;
