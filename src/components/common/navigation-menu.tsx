"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileMenuStyles } from "@/src/lib/navigation";

interface MenuItem {
  text: string;
  url: string;
}

interface NavigationMenuProps {
  menuItems: MenuItem[];
  logoUrl: string;
  mobileMenuIconColor?: string;
  mobileMenuStyles?: MobileMenuStyles;
  activeItem?: string;
  useWhiteMenuIcon?: boolean;
}

export function NavigationMenu({
  menuItems,
  logoUrl,
  mobileMenuIconColor = "#F1F5F9",
  mobileMenuStyles,
  activeItem,
  useWhiteMenuIcon = false,
}: NavigationMenuProps) {
  // Default mobile menu styles (for backward compatibility)
  const defaultMobileMenuStyles: MobileMenuStyles = {
    background: "rgba(0, 0, 0, 0.3)",
    borderTop: "0.75px solid rgba(140, 140, 140, 0.3)",
    backdropFilter: "blur(8px)",
    textColor: "#F1F5F9",
  };

  const currentMobileMenuStyles = mobileMenuStyles || defaultMobileMenuStyles;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Menu */}
      <nav className="pt-8 px-6 md:px-10">
        {/* Mobile Menu - with logo and border */}
        <div className="md:hidden">
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
                  z-index={1}
                  className="object-fill"
                />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-end gap-4 pr-4">
              {/* Mobile Menu Button */}
              <button
                className="hover:text-white p-2 transition-colors duration-200"
                style={{ color: mobileMenuIconColor }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-7 h-7 transition-transform duration-200"
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
                  <Image
                    src={
                      useWhiteMenuIcon
                        ? "/assets/icon/menu-icon-white.png"
                        : "/assets/icon/menu-icon.png"
                    }
                    alt="Menu"
                    width={24}
                    height={16}
                    className="transition-transform duration-200 w-[24px] h-[16px]"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Menu - no logo, no border, equidistant items */}
        <div
          className="hidden md:flex justify-between items-center h-12 backdrop-blur-[1px]"
          style={{ margin: "0 40px" }}
        >
          {menuItems.map((item, index) => {
            const isActive = activeItem === item.text;
            return (
              <Link
                key={index}
                href={item.url}
                className="flex items-center justify-center flex-1 px-4 py-1 text-center transition-colors duration-200"
                style={{
                  fontStyle: "normal",
                  textTransform: "none",
                  letterSpacing: "0.05em",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "work-sans-v2, var(--font-open-sans), sans-serif",
                  color: isActive ? "#1D67CD" : "#C4C9C6",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#1D67CD";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = isActive
                    ? "#1D67CD"
                    : "#C4C9C6";
                }}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.color = "#1D67CD";
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.color = isActive
                    ? "#1D67CD"
                    : "#C4C9C6";
                }}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Absolute positioned over banner */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-20 left-6 right-6 z-40"
          style={{
            animation:
              "slideDown 250ms linear(0, 0.6796, 1.0326, 1.0275, 1.0011, 0.9981, 0.9997, 1)",
          }}
        >
          <div
            className="p-6 shadow-lg"
            style={{
              background: currentMobileMenuStyles.background,
              borderTop: currentMobileMenuStyles.borderTop,
              backdropFilter: currentMobileMenuStyles.backdropFilter,
            }}
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="flex items-center gap-[10px] px-4 py-3 font-open-sans text-base font-normal leading-[1.5] hover:text-[#00A5FF] active:text-[#00A5FF] focus:text-[#00A5FF] hover:bg-white/10 active:bg-white/10 focus:bg-white/10 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: currentMobileMenuStyles.textColor,
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
    </>
  );
}
