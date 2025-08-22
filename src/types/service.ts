export interface ServiceCardData {
  id: string;
  abbreviation: string;
  fullTitle: string;
  description: string;
  iconType: 'arr' | 'redd' | 'wrc' | 'biochar';
}

export interface OurServiceSectionProps {
  title: string;
  services: ServiceCardData[];
}