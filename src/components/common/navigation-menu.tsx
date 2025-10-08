"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileMenuStyles } from "@/src/lib/navigation";
import { Container } from "@/src/components/shared";

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
  desktopTextColor?: string;
  removePadding?: boolean;
  useAboutUsDesign?: boolean;
  useOurProjectDesign?: boolean;
}

export function NavigationMenu({
  menuItems,
  logoUrl,
  mobileMenuIconColor = "#F1F5F9",
  mobileMenuStyles,
  activeItem,
  useWhiteMenuIcon = false,
  desktopTextColor,
  removePadding = false,
  useAboutUsDesign = false,
  useOurProjectDesign = false,
}: NavigationMenuProps) {
  // Color constants for desktop navigation
  const NAVIGATION_COLORS = {
    active: "#00A5FF",
    default: desktopTextColor || "#6B7280",
  } as const;

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
      <nav
        className={`absolute top-0 left-0 w-full z-[9999] ${
          removePadding ? "" : "pt-10"
        }`}
      >
        {/* Mobile Menu - with logo and border */}
        <div className="md:hidden">
          <Container maxWidth="default" padding="default">
            <div className="mx-6">
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
          </Container>
        </div>

        {/* Desktop Menu - Full Width, No Logo, No Border */}
        <div
          className="hidden md:flex w-full h-8"
          style={{
            zIndex: 9999,
          }}
        >
          {useOurProjectDesign ? (
            /* Our Project Design - All items with background, scales from 768px to 2200px */
            <div
              className="flex items-stretch w-full mx-[30px] max-h-[32px] h-full"
              style={{
                gap: "6px",
              }}
            >
              {menuItems.map((item, index) => {
                const isActive = activeItem === item.text;
                return (
                  <Link
                    key={index}
                    href={item.url}
                    className="nav-link-our-project flex items-center justify-center text-center transition-colors duration-200 flex-1"
                    style={{
                      padding: "4px 6px",
                      fontStyle: "normal",
                      textTransform: "uppercase",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "2em",
                      fontFamily: "Work Sans, sans-serif",
                      color: isActive
                        ? NAVIGATION_COLORS.active
                        : NAVIGATION_COLORS.default,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxHeight: "32px",
                    }}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </div>
          ) : useAboutUsDesign ? (
            /* About Us Design - All items with background, scales from 768px to large screens */
            <div
              className="flex items-stretch w-full mx-[30px] max-h-[32px] h-full"
              style={{
                gap: "6px",
                maxWidth: "100%",
              }}
            >
              {menuItems.map((item, index) => {
                const isActive = activeItem === item.text;
                return (
                  <Link
                    key={index}
                    href={item.url}
                    className="nav-link-about-us flex items-center justify-center text-center transition-colors duration-200 flex-1"
                    style={{
                      padding: "4px 6px",
                      fontStyle: "normal",
                      textTransform: "uppercase",
                      fontSize: "clamp(10px, 0.83vw, 12px)",
                      fontWeight: 400,
                      lineHeight: "2em",
                      fontFamily: "Work Sans, sans-serif",
                      color: isActive
                        ? NAVIGATION_COLORS.active
                        : NAVIGATION_COLORS.default,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxHeight: "32px",
                    }}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </div>
          ) : (
            /* Default Design - Original layout */
            <div className="flex items-stretch w-full gap-4">
              {menuItems.map((item, index) => {
                const isActive = activeItem === item.text;
                return (
                  <Link
                    key={index}
                    href={item.url}
                    className="nav-link-default font-work-sans text-xs uppercase 2xl:text-base flex items-center justify-center px-1.5 py-1 text-center transition-colors duration-200 flex-1"
                    style={{
                      color: isActive
                        ? NAVIGATION_COLORS.active
                        : NAVIGATION_COLORS.default,
                      backgroundColor: isActive
                        ? "rgba(255, 255, 255, 0.05)"
                        : "transparent",
                    }}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Absolute positioned over banner */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 z-50 flex">
          <div
            className="p-6 shadow-lg w-full"
            style={{
              background: currentMobileMenuStyles.background,
              borderTop: currentMobileMenuStyles.borderTop,
              backdropFilter: currentMobileMenuStyles.backdropFilter,
              animation:
                "slideDown 250ms linear(0, 0.6796, 1.0326, 1.0275, 1.0011, 0.9981, 0.9997, 1)",
            }}
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="flex items-center gap-[10px] px-4 py-3  text-base font-normal leading-[1.5] hover:text-[#00A5FF] active:text-[#00A5FF] focus:text-[#00A5FF] hover:bg-white/10 active:bg-white/10 focus:bg-white/10 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-105"
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
        :global(.nav-link-our-project:hover),
        :global(.nav-link-our-project:focus) {
          color: #00a5ff !important;
        }

        :global(.nav-link-about-us:hover),
        :global(.nav-link-about-us:focus) {
          color: #00a5ff !important;
        }

        :global(.nav-link-default:hover),
        :global(.nav-link-default:focus) {
          color: #00a5ff !important;
          background-color: rgba(255, 255, 255, 0.05) !important;
        }

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
