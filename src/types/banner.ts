export interface MenuItem {
  text: string;
  url: string;
}

export interface BannerProps {
  title: string;
  subtitle: string;
  menuItems: MenuItem[];
  logoUrl: string;
}

export interface AboutUsBannerProps {
  menuItems: MenuItem[];
  logoUrl: string;
}

export interface OurProjectBannerProps {
  menuItems: MenuItem[];
  logoUrl: string;
}