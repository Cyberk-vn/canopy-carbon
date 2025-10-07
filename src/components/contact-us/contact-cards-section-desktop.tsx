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
        className="mb-6 font-sans text-base font-bold uppercase leading-6 text-[#121C17]"
      >
        CONNECT WITH US
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="bg-[#0000001A] p-4"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-1">
              <Label
                htmlFor="firstName"
                className="font-sans text-xs font-normal text-[#0D1117]"
              >
                First name*
              </Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="rounded-none border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <Label
                htmlFor="lastName"
                className="font-sans text-xs font-normal text-[#0D1117]"
              >
                Last name*
              </Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="rounded-none border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="companyName"
              className="font-sans text-xs font-normal text-[#0D1117]"
            >
              Company name
            </Label>
            <Input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="rounded-none border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="email"
              className="font-sans text-xs font-normal text-[#0D1117]"
            >
              Email*
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="rounded-none border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="message"
              className="font-sans text-xs font-normal text-[#0D1117]"
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
              className="rounded-none border-[#6B728066] bg-white placeholder:text-[#D1D5DBCC]"
              required
            />
          </div>
          <Button
            type="submit"
            className="h-9 w-full cursor-pointer rounded-none bg-[#EAE7DF] font-sans text-base font-semibold text-[#3B464F] transition-colors duration-200 hover:bg-[#E0DDD5]"
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
        className="h-[245px] bg-[#FAFAFA99] p-4"
      >
        <div className="flex h-full w-full flex-col items-center bg-[#00000003] p-4">
          <h3 className="mb-4 text-center font-sans text-base font-bold leading-tight text-black">
            {card.title}
          </h3>
          <p className="text-center font-sans text-xs leading-[20px] text-[#6C6C6C]">
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
    <div className="relative w-full">
      <Image
        src="/assets/desktop/contact-us/contact-us-background-image.png"
        alt="Contact us background"
        fill
        className="hidden xl:block object-contain 2xl:object-cover"
        priority
      />
      <Image
        src="/assets/desktop/contact-us/contact-us-bg-tablet.png"
        alt="Contact us background tablet"
        fill
        className="xl:hidden h-full"
        priority
      />

      <div className="relative z-20 flex min-h-screen flex-col">
        <NavigationMenu
          menuItems={menuItems}
          logoUrl="/assets/banner-shared-component/logo.png"
          mobileMenuIconColor="#EDEDED"
          activeItem="Contact"
        />

        <main className="flex-grow md:pt-10 md:pb-50 md:px-18">
          <div className="flex flex-col-reverse items-center gap-14 xl:flex-row xl:items-start xl:justify-center xl:gap-11">
            <div className="w-full xl:w-[620px] xl:pt-15">
              <ConnectWithUsForm />
            </div>
            <div className="w-full xl:w-[667px] xl:pt-20">
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
