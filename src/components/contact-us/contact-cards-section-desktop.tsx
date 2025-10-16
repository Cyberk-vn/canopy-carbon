"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { NavigationMenu } from "../common";
import type { ContactCardsProps } from "@/src/types/contact-us";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/src/lib/utils";
import { useResponsive } from "@/src/lib/utils/use-responsive";

// Image imports
import ContactBg from "../../../public/assets/desktop/contact-us/contact-bg.png";
import ContactBg1440 from "../../../public/assets/desktop/contact-us/contact-bg-1440.png";
import ContactBg1920 from "../../../public/assets/desktop/contact-us/contact-bg-1920.png";
import CnrCircle from "../../../public/assets/desktop/contact-us/cnr-circle.png";
import ContactBgTablet from "../../../public/assets/desktop/contact-us/contact-us-bg-tablet.png";

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
    <div className={cn("w-full")}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "mb-6 text-base font-bold uppercase text-[#121212]",
          "2xl:mb-12 2xl:text-2xl",
          "3xl:font-avenir-heavy 3xl:text-[24px] 3xl:font-normal 3xl:ml-2"
        )}
      >
        CONNECT WITH US
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className={cn("bg-[#0000001A] p-4")}
      >
        <form onSubmit={handleSubmit} className={cn("flex flex-col gap-4")}>
          <div className={cn("flex flex-col gap-4 sm:flex-row")}>
            <div className={cn("flex flex-1 flex-col gap-1")}>
              <Label
                htmlFor="firstName"
                className={cn("text-xs text-[#0D1117]", "2xl:text-sm")}
              >
                First name*
              </Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={cn(
                  "rounded-none border-[#6B728066] bg-white",
                  "placeholder:text-[#D1D5DBCC] 3xl:h-10 h-9"
                )}
                required
              />
            </div>
            <div className={cn("flex flex-1 flex-col gap-1")}>
              <Label
                htmlFor="lastName"
                className={cn("text-xs text-[#0D1117]", "2xl:text-sm")}
              >
                Last name*
              </Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={cn(
                  "rounded-none border-[#6B728066] bg-white",
                  "placeholder:text-[#D1D5DBCC] 3xl:h-10 h-9"
                )}
                required
              />
            </div>
          </div>
          <div className={cn("flex flex-col gap-1")}>
            <Label
              htmlFor="companyName"
              className={cn("text-xs text-[#0D1117]", "2xl:text-sm")}
            >
              Company name
            </Label>
            <Input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className={cn(
                "rounded-none border-[rgba(107,114,128,0.4)] bg-white",
                "placeholder:text-[#D1D5DBCC] 3xl:h-10 h-9"
              )}
            />
          </div>
          <div className={cn("flex flex-col gap-1")}>
            <Label
              htmlFor="email"
              className={cn("text-xs text-[#0D1117]", "2xl:text-sm")}
            >
              Email*
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={cn(
                "rounded-none border-[#6B728066] bg-white",
                "placeholder:text-[#D1D5DBCC] 3xl:h-10 h-9"
              )}
              required
            />
          </div>
          <div className={cn("flex flex-col gap-2")}>
            <Label
              htmlFor="message"
              className={cn("text-xs text-[#0D1117]", "2xl:text-sm")}
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
              className={cn(
                "rounded-none border-[#6B728066] bg-white",
                "placeholder:text-[#D1D5DBCC] h-20 3xl:h-23"
              )}
              required
            />
          </div>
          <Button
            type="submit"
            className={cn(
              "h-9 w-full cursor-pointer rounded-none",
              "bg-[#EAE7DF] font-sans text-base font-semibold text-[#3B464F]",
              "transition-colors duration-200 hover:bg-[#E0DDD5]"
            )}
          >
            Send
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

const CardGroup = ({ cards }: { cards: ContactCardsProps["cards"] }) => (
  <div className={cn("grid grid-cols-1 gap-5 3xl:gap-6", "md:grid-cols-2")}>
    {cards.map((card, index) => (
      <motion.div
        key={card.id || index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        className={cn(
          "h-[245px] bg-[#F6F6F680] p-4",
          "3xl:h-[303px] ",
          "3xl:px-6 3xl:py-7"
        )}
      >
        <div
          className={cn(
            "flex h-full w-full flex-col items-center",
            "bg-[#F7F7F798] p-4 3xl:px-[28px] 3xl:py-[28px]"
          )}
        >
          <h3
            className={cn(
              "mb-4 text-center font-sans text-base font-bold leading-tight text-[#121C17]",
              "2xl:text-lg"
            )}
          >
            {card.title}
          </h3>
          <p
            className={cn(
              "text-start font-sans font-normal text-[#6C6C6C]",
              "text-xs leading-[20px]",
              "2xl:text-sm",
              "3xl:font-open-sans 3xl:text-[13px] 3xl:leading-[23px]"
            )}
            style={{
              textAlign: "justify",
            }}
          >
            {card.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
);

export function ContactHeroSectionDesktop({ cards }: ContactCardsProps) {
  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Responsive breakpoints
  const { isXxlScreen } = useResponsive();

  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Our projects", url: "/our-project" },
    { text: "Canopy insights", url: "/canopy-insight" },
    { text: "Contact", url: "/contact-us" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("relative w-full min-h-screen overflow-y-hidden")}>
      {/* Desktop/Large Screen Background - 1440px+ (scales from 1440 to 1920 and beyond) */}
      {mounted && isXxlScreen && (
        <>
          {/* 1440px screen - contact-bg-1440.png */}
          <div
            className={cn(
              "absolute left-0 top-[131px] right-0 min-h-screen",
              "xxl:block 3xl:hidden"
            )}
          >
            <Image
              src={ContactBg1440}
              alt="Contact us background 1440px"
              width={1440}
              height={980}
              className={cn(
                "w-full h-auto object-contain xxl:block 3xl:hidden"
              )}
              priority
            />
          </div>

          {/* 1920px screen - contact-bg-1920.png */}
          <div
            className={cn(
              "absolute left-0 right-0 min-h-screen",
              "hidden 3xl:block 4xl:hidden"
            )}
          >
            <Image
              src={ContactBg1920}
              alt="Contact us background 1920px"
              width={1920}
              height={1280}
              className={cn(
                "w-full h-auto object-contain hidden 3xl:block 4xl:hidden"
              )}
              priority
            />
          </div>

          {/* 2560px+ screen - contact-bg.png */}
          <div
            className={cn(
              "absolute top-[100px] left-0 right-0",
              "hidden 4xl:block"
            )}
          >
            <Image
              src={ContactBg}
              alt="Contact us background 2560px+"
              width={2560}
              height={1507}
              className={cn("w-full h-auto object-contain hidden 4xl:block")}
              priority
            />
          </div>
        </>
      )}

      {/* Tablet Background - Up to 1440px */}
      {(!mounted || !isXxlScreen) && (
        <Image
          src={ContactBgTablet}
          alt="Contact us background tablet"
          fill
          className={cn("h-full object-cover object-center", "xxl:hidden")}
          priority
        />
      )}

      {/* White Gradient Overlay (Top) - 1440px to 1920px (609px to 844px height) */}
      {mounted && isXxlScreen && (
        <div
          className={cn(
            "absolute top-0 left-0 right-0 z-10",
            "hidden xxl:block"
          )}
          style={{
            height:
              "clamp(609px, calc(609px + 235 * (100vw - 1440px) / 480), 844px)",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 80.29%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      )}

      {/* Dark Gradient Overlay (Bottom) - 400px height, bottom to top */}
      {mounted && isXxlScreen && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 z-10",
            "hidden xxl:block"
          )}
          style={{
            height: "400px",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.549904) 38.39%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      )}

      <div
        className={cn(
          "relative z-20 flex flex-col min-h-screen w-full md:h-[85px] xxl:h-[123px] md:mt-[37px] 3xl:mt-0"
        )}
      >
        <NavigationMenu
          menuItems={menuItems}
          logoUrl="/assets/banner-shared-component/logo.png"
          mobileMenuIconColor="#EDEDED"
          activeItem="Contact"
        />

        <main
          className={cn(
            "flex-grow max-w-[1920px] mx-auto",
            "md:pt-10 md:pb-50 xxl:pb-0 md:px-18 xxl:pl-[77px] xxl:pr-[30px] 3xl:pt-[152px] 3xl:pl-[120px] 3xl:pr-[58px]"
          )}
        >
          <div
            className={cn(
              "flex flex-col-reverse items-center gap-14",
              "xl:flex-row xl:items-start xl:justify-center",
              "lg:gap-11 xxl:gap-[46px] 3xl:gap-[100px]"
            )}
          >
            <div
              className={cn(
                "w-full",
                "xxl:w-[620px] xl:pt-15 3xl:pt-0",
                "3xl:w-[794px]"
              )}
            >
              <ConnectWithUsForm />
            </div>
            <div
              className={cn("w-full", " xl:pt-20 3xl:pt-0", "2xl:w-[800px]")}
            >
              <CardGroup cards={cards} />
            </div>
          </div>
        </main>
      </div>

      {/* CNR Circle for Desktop/Large Screens - 1440px+ */}
      {mounted && isXxlScreen && (
        <Image
          src={CnrCircle}
          alt="CNR Circle"
          width={400}
          height={400}
          className={cn(
            "absolute z-10",
            "xxl:left-[120px] xxl:w-[300px] xxl:h-[300px] xxl:-bottom-12",
            "3xl:left-[180px] 3xl:w-[350px] 3xl:h-[350px] 3xl:-bottom-14",
            "4xl:left-[252px] 4xl:w-[400px] 4xl:h-[400px] 4xl:-bottom-16"
          )}
        />
      )}

      <footer className={cn("relative z-20 w-full bg-white py-4 mt-auto")}>
        <div className={cn("container mx-auto")}>
          <p
            className={cn(
              "text-center font-sans text-sm font-normal text-[#6C6C6C]"
            )}
          >
            © 2024 Canopy Carbon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ContactHeroSectionDesktop;
