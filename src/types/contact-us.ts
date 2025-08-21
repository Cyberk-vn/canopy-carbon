export interface ContactCard {
  id: string;
  title: string;
  description: string;
  backgroundImage?: string;
}

export interface MenuItem {
  text: string;
  url: string;
}

export interface ContactUsBannerProps {
  menuItems: MenuItem[];
  logoUrl: string;
}

export interface ContactCardsProps {
  cards: ContactCard[];
}

export interface ContactHeroSectionProps {
  menuItems: MenuItem[];
  logoUrl: string;
  cards: ContactCard[];
}