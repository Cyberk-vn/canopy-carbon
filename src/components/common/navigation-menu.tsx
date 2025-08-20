"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  text: string;
  url: string;
}

interface NavigationMenuProps {
  menuItems: MenuItem[];
  logoUrl: string;
  mobileMenuIconColor?: string;
}

export function NavigationMenu({
  menuItems,
  logoUrl,
  mobileMenuIconColor = "#F1F5F9",
}: NavigationMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Menu */}
      <nav className="pt-8 px-6 md:px-[120px]">
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
                className="hover:text-white p-2 transition-colors duration-200"
                style={{ color: mobileMenuIconColor }}
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
          className="md:hidden absolute top-20 left-6 right-6 z-40"
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
                  className="flex items-center gap-[10px] px-4 py-3 text-[#F1F5F9] font-open-sans text-base font-normal leading-[1.5] hover:text-[#00A5FF] active:text-[#00A5FF] focus:text-[#00A5FF] hover:bg-white/10 active:bg-white/10 focus:bg-white/10 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-105"
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
    </>
  );
}
