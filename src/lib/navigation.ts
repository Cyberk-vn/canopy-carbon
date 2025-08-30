import { MenuItem } from "@/src/types/banner";

export interface MobileMenuStyles {
  background: string;
  borderTop: string;
  backdropFilter: string;
  textColor: string;
}

export const NAVIGATION_CONFIG = {
  logoUrl: "/assets/banner-shared-component/logo.svg",
  menuItems: [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Our Project", url: "/our-project" },
    { text: "Canopy Insights", url: "/canopy-insight" },
    { text: "Contact Us", url: "/contact-us" },
  ] as MenuItem[],
};

export const MOBILE_MENU_STYLES: Record<string, MobileMenuStyles> = {
  home: {
    background:
      "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.509615) 52.88%, rgba(0, 0, 0, 0) 100%)",
    borderTop: "0.75px solid #8C8C8C4D",
    backdropFilter: "blur(16px)",
    textColor: "#F1F5F9",
  },
  "about-us": {
    background:
      "linear-gradient(90deg, #DCDCDC 12.98%, rgba(220, 220, 220, 0.855057) 32.69%, rgba(220, 220, 220, 0.644231) 58.65%, rgba(220, 220, 220, 0.390255) 78.85%, rgba(220, 220, 220, 0.390255) 100%)",
    borderTop: "0.75px solid #8C8C8C4D",
    backdropFilter: "blur(16px)",
    textColor: "#6B7280",
  },
  "our-project": {
    background:
      "linear-gradient(90deg, #232A26 31.73%, rgba(35, 42, 38, 0.78) 97.6%)",
    borderTop: "0.75px solid #6B728080",
    backdropFilter: "blur(16px)",
    textColor: "#F1F5F9",
  },
  "canopy-insight": {
    background:
      "linear-gradient(90deg, #E9EBEE 0%, rgba(233, 235, 238, 0.906031) 32.69%, rgba(233, 235, 238, 0.862179) 49.52%, rgba(233, 235, 238, 0.701923) 68.27%, rgba(233, 235, 238, 0.494398) 83.65%, rgba(233, 235, 238, 0) 100%)",
    borderTop: "0.75px solid #6B72804D",
    backdropFilter: "blur(16px)",
    textColor: "#6B7280",
  },
  "contact-us": {
    background:
      "linear-gradient(90deg, rgba(250, 250, 250, 0.3) 28.85%, rgba(250, 250, 250, 0.239423) 53.85%, rgba(250, 250, 250, 0.149639) 78.37%, rgba(250, 250, 250, 0) 100%)",
    borderTop: "0.75px solid #6B728066",
    backdropFilter: "blur(16px)",
    textColor: "#6B7280",
  },
};

export const getMenuItems = (): MenuItem[] => NAVIGATION_CONFIG.menuItems;
export const getLogoUrl = (): string => NAVIGATION_CONFIG.logoUrl;
export const getMobileMenuStyles = (
  page: string
): MobileMenuStyles | undefined => MOBILE_MENU_STYLES[page];
