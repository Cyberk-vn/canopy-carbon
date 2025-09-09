import { StaticImageData } from "next/image";

export interface ExecutionItem {
  id: number;
  imageSrc: string | StaticImageData;
  altText: string;
  title?: string;
}

export interface MobileExecutionItem extends ExecutionItem {
  isMainCard?: boolean;
  cardWidth: number;
  cardHeight: number;
  hasTextOverlay?: boolean;
}

export interface EnhancedExecutionItem extends MobileExecutionItem {
  groupId: string;
  isSelected: boolean;
  selectionIndex: number;
}

export interface ExecutionGroup {
  id: string;
  selectedCardId: number;
  cards: EnhancedExecutionItem[];
  centerPosition: number;
}

export interface ExecutionSelectionState {
  selectedPrincipleId: number;
  isTransitioning: boolean;
  transitionDuration: number;
}

export interface OurExecutionSectionProps {
  className?: string;
}
