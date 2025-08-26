export interface RoadmapNode {
  id: number;
  title: string;
  description: string;
  position: {
    x: number;
    y: number;
  };
  cardAlignment: "left" | "center" | "right";
  markerType: "primary" | "secondary";
  cardPosition: {
    x: number;
    y: number;
  };
  cardWidth: number;
  titleWidth?: number;
  descriptionWidth?: number;
  titleTextAlign?: "left" | "center" | "right";
  descriptionTextAlign?: "left" | "center" | "right";
}

export interface RoadmapSectionProps {
  nodes?: RoadmapNode[];
  className?: string;
}

export interface RoadmapCardProps {
  node: RoadmapNode;
  index: number;
}

export interface RoadmapMarkerProps {
  nodeId: number;
  position: { x: number; y: number };
  markerType: "primary" | "secondary";
  index: number;
}

export interface RoadmapDoubleLineDecoratorProps {
  position: { x: number; y: number };
  align?: "left" | "right" | "absolute";
  index?: number;
  className?: string;
}

export interface DoubleLineDecoratorConfig {
  id: number;
  position: { x: number; y: number };
  align?: "left" | "right" | "absolute";
}