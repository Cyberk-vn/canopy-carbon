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