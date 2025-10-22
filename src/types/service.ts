export interface ServiceCardData {
  id: string;
  abbreviation: string;
  fullTitle: string;
  description: string;
  mobileDescription?: string; // Optional: if provided, will be used on mobile devices
  iconType: 'arr' | 'redd' | 'wrc' | 'biochar';
}

export interface OurServiceSectionProps {
  title: string;
  services: ServiceCardData[];
}