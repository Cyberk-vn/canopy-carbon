import { MobileMenuStyles } from "@/src/lib/navigation";
import { ServiceCardData } from "./service";

export interface MenuItem {
  text: string;
  url: string;
}

export interface BannerProps {
  title: string;
  subtitle: string;
  menuItems: MenuItem[];
  logoUrl: string;
  mobileMenuStyles?: MobileMenuStyles;
  services?: ServiceCardData[];
}

export interface AboutUsBannerProps {
  menuItems: MenuItem[];
  logoUrl: string;
  mobileMenuStyles?: MobileMenuStyles;
}

export interface OurProjectBannerProps {
  menuItems: MenuItem[];
  logoUrl: string;
  mobileMenuStyles?: MobileMenuStyles;
}