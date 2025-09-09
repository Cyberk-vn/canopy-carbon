import { StaticImageData } from "next/image";

export interface CarouselCard {
  id: string;
  src: string | StaticImageData;
  alt: string;
}

export interface CarouselCardGroup {
  id: string;
  groupName: string;
  cards: CarouselCard[];
}

export interface CarouselImage {
  id: string;
  src: string | StaticImageData;
  alt: string;
}

export interface OurTeamCarouselData {
  images: CarouselImage[];
  cardGroups?: CarouselCardGroup[];
  carouselTitle?: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
}

export interface DescriptionSectionData {
  mainText: string;
  backgroundImage: string;
  logoImage?: string;
}

export interface StaticLayoutData {
  description: string;
  buttonText: string;
  buttonAction?: () => void;
}

export interface OurProjectSectionData {
  carouselData?: OurTeamCarouselData; // Keep for mobile compatibility
  staticLayoutData?: StaticLayoutData; // New for desktop static layout
  descriptionData: DescriptionSectionData;
}

export interface OurProjectSectionProps {
  data?: OurProjectSectionData;
}

export interface OurTeamCarouselProps {
  data: OurTeamCarouselData;
}

export interface DescriptionSectionProps {
  data: DescriptionSectionData;
}
