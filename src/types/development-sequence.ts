export interface ProjectCardData {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  learnMoreUrl?: string;
  textColor: 'light' | 'dark';
  overlayType: 'gradient' | 'rounded';
}

export interface DevelopmentSequenceData {
  sectionTitle: string;
  sectionSubtitle: string;
  contentSectionTitle: string;
  contentSectionDescription: string;
  projectCards: ProjectCardData[];
}

export interface DevelopmentSequenceSectionProps {
  data: DevelopmentSequenceData;
}