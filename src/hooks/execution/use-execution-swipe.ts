"use client";

import { useMemo, useEffect, useCallback } from "react";
import {
  useSelectedPrincipleId,
  useCurrentImageOffset,
  useExecutionSwipeActions,
  useAutoSwitchState,
  useCanSwipe,
} from "@/src/stores/execution-swipe.store";
import {
  getExecutionPrinciple,
  EXECUTION_PRINCIPLES,
  DEFAULT_SWIPE_CONFIG,
} from "@/src/types/execution-swipe";
import type { EnhancedExecutionItem } from "@/src/types/execution";

// DragInfo interface moved from use-execution-gestures
interface DragInfo {
  offset: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
}

export const useExecutionSwipe = () => {
  const selectedPrincipleId = useSelectedPrincipleId();
  const currentImageOffset = useCurrentImageOffset();
  const actions = useExecutionSwipeActions();
  const autoSwitchState = useAutoSwitchState();
  const canSwipe = useCanSwipe();

  useEffect(() => {
    actions.initializeWithDefaults();

    return () => {
      actions.stopAutoSwitch();
    };
  }, [actions]);

  const currentPrinciple = useMemo(() => {
    return getExecutionPrinciple(selectedPrincipleId);
  }, [selectedPrincipleId]);

  const mobileExecutionItems = useMemo((): EnhancedExecutionItem[] => {
    const principle = getExecutionPrinciple(selectedPrincipleId);
    if (!principle) return [];

    const getImageIndex = (offset: number) => {
      return (
        (currentImageOffset + offset + principle.images.length) %
        principle.images.length
      );
    };

    return [
      // Left card
      {
        id: selectedPrincipleId * 100 + 1,
        imageSrc: principle.images[getImageIndex(-1)],
        altText: `${principle.altTextBase} - Left card`,
        title: principle.title,
        cardWidth: 159,
        cardHeight: 290,
        isMainCard: false,
        hasTextOverlay: false,
        groupId: `execution-group-${selectedPrincipleId}`,
        isSelected: false,
        selectionIndex: 0,
      },
      // Center card (Selected)
      {
        id: selectedPrincipleId * 100 + 2,
        imageSrc: principle.images[getImageIndex(0)],
        altText: `${principle.altTextBase} - Main featured card`,
        title: principle.title,
        cardWidth: 220,
        cardHeight: 380,
        isMainCard: true,
        hasTextOverlay: true,
        groupId: `execution-group-${selectedPrincipleId}`,
        isSelected: true,
        selectionIndex: 1,
      },
      // Right card
      {
        id: selectedPrincipleId * 100 + 3,
        imageSrc: principle.images[getImageIndex(1)],
        altText: `${principle.altTextBase} - Right card`,
        title: principle.title,
        cardWidth: 159,
        cardHeight: 290,
        isMainCard: false,
        hasTextOverlay: false,
        groupId: `execution-group-${selectedPrincipleId}`,
        isSelected: false,
        selectionIndex: 2,
      },
    ];
  }, [selectedPrincipleId, currentImageOffset]); // currentPrinciple removed - it's derived from selectedPrincipleId

  // Get all principles for navigation
  const allPrinciples = useMemo(() => EXECUTION_PRINCIPLES, []);

  // Get current image URL for the main card
  const currentMainImage = useMemo(() => {
    if (!currentPrinciple) return "";
    return currentPrinciple.images[currentImageOffset];
  }, [currentPrinciple, currentImageOffset]);

  // Gesture handling logic (copied from use-execution-gestures)
  const handleDragEnd = useCallback(
    (event: PointerEvent, info: DragInfo) => {
      if (!canSwipe) return;

      const swipeThreshold = DEFAULT_SWIPE_CONFIG.shortSwipeThreshold;
      const longSwipeThreshold = DEFAULT_SWIPE_CONFIG.longSwipeThreshold;
      const velocityThreshold = DEFAULT_SWIPE_CONFIG.velocityThreshold;

      const horizontalDistance = Math.abs(info.offset.x);
      const horizontalVelocity = Math.abs(info.velocity.x);

      if (
        horizontalDistance > swipeThreshold ||
        horizontalVelocity > velocityThreshold
      ) {
        // Determine if it's a long swipe based on distance or velocity
        const isLongSwipe =
          horizontalDistance > longSwipeThreshold ||
          horizontalVelocity > velocityThreshold * 2;

        // Determine direction
        const direction = info.offset.x > 0 ? "right" : "left";

        // Velocity is now handled directly in handleSwipeGesture for better performance

        // Handle the gesture
        actions.handleSwipeGesture(direction, isLongSwipe);
      }
    },
    [actions, canSwipe]
  );

  const handlePrincipleSelection = useCallback(
    (principleId: number) => {
      if (!canSwipe) return;
      actions.selectPrinciple(principleId);
    },
    [actions, canSwipe]
  );

  const handleImageCycle = useCallback(
    (direction: "next" | "prev") => {
      if (!canSwipe) return;
      actions.cycleImage(direction);
    },
    [actions, canSwipe]
  );

  return {
    // State
    selectedPrincipleId,
    currentImageOffset,
    currentPrinciple,
    currentMainImage,

    // Auto-switch state
    autoSwitchState,

    // Derived data
    mobileExecutionItems,
    allPrinciples,

    // Actions
    actions,

    // Gesture handling (consolidated from use-execution-gestures)
    handleDragEnd,
    handlePrincipleSelection,
    handleImageCycle,
    canSwipe,
  };
};
