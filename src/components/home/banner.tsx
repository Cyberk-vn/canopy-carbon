"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BannerProps } from "@/src/types/banner";
import { useScrollAnimation } from "@/src/hooks/responsive/use-scroll-animation";

export function Banner({ title, subtitle, menuItems, logoUrl }: BannerProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll animations
  const titleRef = useScrollAnimation<HTMLHeadingElement>({
    animationType: "fadeInLeft",
    delay: 200,
  });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>({
    animationType: "fadeInLeft",
    delay: 400,
  });
  return (
    <div className="relative w-full h-[832px] lg:h-[700px] overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <div className="hidden lg:block">
          <Image
            src="/assets/banner-shared-component/background.png"
            alt="Canopy Carbon background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile Background */}
        <div className="lg:hidden block">
          <Image
            src="/assets/banner-bg-mobile.png"
            alt="Canopy Carbon mobile background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        />

        {/* Decorative Circle */}
        <div className="absolute z-20 right-4 md:right-[120px] top-[164px] hidden lg:block">
          <div className="relative">
            <Image
              src="/assets/banner-shared-component/circle.png"
              alt=""
              width={371}
              height={371}
              className="opacity-60"
            />
            {/* Circle Overlay */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.4) 100%)",
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="pt-8 px-4 md:px-[120px]">
        <div
          className="flex items-stretch backdrop-blur-[1px]"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "0.75px solid rgba(140, 140, 140, 0.3)",
          }}
        >
          <div className="h-12 flex items-center pl-3">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src={logoUrl}
                alt="Canopy Carbon Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-end gap-4 pr-4">
            <div className="hidden md:flex items-center gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="flex items-center gap-[10px] px-[6px] py-1 text-[#F1F5F9] font-open-sans text-base font-normal leading-[1.5] hover:text-white transition-colors duration-200"
                >
                  {item.text}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-[#F1F5F9] hover:text-white p-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Absolute positioned over banner */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-20 left-4 right-4 z-40"
          style={{
            animation:
              "slideDown 250ms linear(0, 0.6796, 1.0326, 1.0275, 1.0011, 0.9981, 0.9997, 1)",
          }}
        >
          <div
            className="backdrop-blur-[8px] p-6 shadow-lg"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              border: "0.75px solid rgba(140, 140, 140, 0.3)",
            }}
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="flex items-center gap-[10px] px-4 py-3 text-[#F1F5F9] font-open-sans text-base font-normal leading-[1.5] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animation: `fadeInUp ${
                      250 + index * 50
                    }ms linear(0, 0.6796, 1.0326, 1.0275, 1.0011, 0.9981, 0.9997, 1)`,
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="flex-1 z-30 flex items-end lg:items-center pb-[50%] lg:pb-0 pl-4 md:pl-[120px]">
        <div className="flex flex-col gap-6">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="font-roboto font-black text-3xl md:text-5xl lg:text-[64px] leading-[1.0625] text-[#F0F0F0]"
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-open-sans font-semibold text-lg md:text-2xl lg:text-[32px] leading-[1.25] text-[#B7C0C9] max-w-[617.84px]"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
