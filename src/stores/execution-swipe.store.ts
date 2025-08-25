"use client";

import { create } from 'zustand';

export interface ExecutionSwipeState {
  // Core state
  selectedPrincipleId: number;
  currentImageOffset: number;
  isTransitioning: boolean;
  transitionDuration: number;
  
  // Gesture tracking
  lastSwipeTimestamp: number;
  swipeVelocity: number;
  
  // Auto-switch state
  autoSwitchEnabled: boolean;
  autoSwitchInterval: number;
  autoSwitchTimerId: NodeJS.Timeout | null;
  isPaused: boolean;
  lastInteractionTime: number;
  
  // Performance optimization
  preloadedImages: Set<string>;
  
  // Actions grouped in actions object
  actions: {
    // Principle selection
    selectPrinciple: (principleId: number) => void;
    cyclePrinciple: (direction: 'next' | 'prev') => void;
    
    // Image cycling within principle
    cycleImage: (direction: 'next' | 'prev') => void;
    setImageOffset: (offset: number) => void;
    
    // Swipe gesture handling
    handleSwipeGesture: (direction: 'left' | 'right', isLongSwipe: boolean) => void;
    
    // Auto-switch actions
    startAutoSwitch: () => void;
    stopAutoSwitch: () => void;
    pauseAutoSwitch: () => void;
    resumeAutoSwitch: () => void;
    toggleAutoSwitch: () => void;
    setAutoSwitchInterval: (interval: number) => void;
    
    // Transition management
    startTransition: () => void;
    endTransition: () => void;
    setTransitionDuration: (duration: number) => void;
    
    // Performance optimization
    markImagePreloaded: (imageSrc: string) => void;
    preloadAllImages: (imageSources: string[]) => void;
    
    // Utility actions
    reset: () => void;
    initializeWithDefaults: () => void;
  };
}

const useExecutionSwipeStore = create<ExecutionSwipeState>((set, get) => ({
  // Initial state - matches current component defaults
  selectedPrincipleId: 2, // Start with Community Focused (id: 2)
  currentImageOffset: 1, // Start at index 1 (second image)
  isTransitioning: false,
  transitionDuration: 600,
  lastSwipeTimestamp: 0,
  swipeVelocity: 0,
  
  // Auto-switch initial state
  autoSwitchEnabled: true,
  autoSwitchInterval: 3000, // 3 seconds
  autoSwitchTimerId: null,
  isPaused: false,
  lastInteractionTime: 0,
  
  preloadedImages: new Set(),
  
  actions: {
    selectPrinciple: (principleId: number) => {
      const state = get();
      
      // Prevent selection if transitioning or selecting same principle
      if (state.isTransitioning || principleId === state.selectedPrincipleId) {
        return;
      }
      
      // Validate principle ID (1-4)
      if (principleId < 1 || principleId > 4) {
        console.warn(`Invalid principle ID: ${principleId}. Must be between 1 and 4.`);
        return;
      }
      
      set(() => ({
        selectedPrincipleId: principleId,
        currentImageOffset: 1, // Reset to second image (main image)
        isTransitioning: true,
        lastSwipeTimestamp: Date.now(),
        lastInteractionTime: Date.now(), // Record interaction time
      }));
      
      // Reset auto-switch timer
      state.actions.stopAutoSwitch();
      state.actions.startAutoSwitch();
      
      // Auto-end transition after duration
      setTimeout(() => {
        set(() => ({
          isTransitioning: false,
        }));
      }, 300);
    },
    
    cyclePrinciple: (direction: 'next' | 'prev') => {
      const state = get();
      
      if (state.isTransitioning) return;
      
      let newPrincipleId: number;
      if (direction === 'next') {
        newPrincipleId = state.selectedPrincipleId === 4 ? 1 : state.selectedPrincipleId + 1;
      } else {
        newPrincipleId = state.selectedPrincipleId === 1 ? 4 : state.selectedPrincipleId - 1;
      }
      
      state.actions.selectPrinciple(newPrincipleId);
    },
    
    cycleImage: (direction: 'next' | 'prev') => {
      const state = get();
      
      if (state.isTransitioning) return;
      
      // Calculate new offset (0-3 for 4 images per principle)
      const imagesPerPrinciple = 4;
      let newOffset: number;
      
      if (direction === 'next') {
        newOffset = (state.currentImageOffset + 1) % imagesPerPrinciple;
      } else {
        newOffset = (state.currentImageOffset - 1 + imagesPerPrinciple) % imagesPerPrinciple;
      }
      
      set(() => ({
        currentImageOffset: newOffset,
        isTransitioning: true,
        lastSwipeTimestamp: Date.now(),
      }));
      
      // Auto-end transition after duration
      setTimeout(() => {
        set(() => ({
          isTransitioning: false,
        }));
      }, 300);
    },
    
    setImageOffset: (offset: number) => {
      const imagesPerPrinciple = 4;
      const validOffset = Math.max(0, Math.min(offset, imagesPerPrinciple - 1));
      
      set({
        currentImageOffset: validOffset,
      });
    },
    
    handleSwipeGesture: (direction: 'left' | 'right', isLongSwipe: boolean = false) => {
      const state = get();
      
      if (state.isTransitioning) return;
      
      // Calculate all changes first
      const now = Date.now();
      const velocity = isLongSwipe ? 200 : 100;
      
      if (isLongSwipe) {
        // Long swipes change principles
        let newPrincipleId: number;
        if (direction === 'right') {
          newPrincipleId = state.selectedPrincipleId === 1 ? 4 : state.selectedPrincipleId - 1;
        } else {
          newPrincipleId = state.selectedPrincipleId === 4 ? 1 : state.selectedPrincipleId + 1;
        }
        
        // Single batched state update for principle change
        set(() => ({
          selectedPrincipleId: newPrincipleId,
          currentImageOffset: 1, // Reset to main image
          lastInteractionTime: now,
          lastSwipeTimestamp: now,
          swipeVelocity: velocity,
          isTransitioning: true,
          isPaused: true, // Pause auto-switch
        }));
      } else {
        // Short swipes cycle images within current principle
        const imagesPerPrinciple = 4;
        let newOffset: number;
        if (direction === 'right') {
          newOffset = (state.currentImageOffset - 1 + imagesPerPrinciple) % imagesPerPrinciple;
        } else {
          newOffset = (state.currentImageOffset + 1) % imagesPerPrinciple;
        }
        
        // Single batched state update for image change
        set(() => ({
          currentImageOffset: newOffset,
          lastInteractionTime: now,
          lastSwipeTimestamp: now,
          swipeVelocity: velocity,
          isTransitioning: true,
          isPaused: true, // Pause auto-switch
        }));
      }
      
      // Handle auto-switch timer reset for principle changes
      if (isLongSwipe) {
        state.actions.stopAutoSwitch();
        state.actions.startAutoSwitch();
      }
      
      // Resume auto-switch after interaction timeout (5 seconds)
      setTimeout(() => {
        const currentState = get();
        const timeSinceLastInteraction = Date.now() - currentState.lastInteractionTime;
        if (timeSinceLastInteraction >= 5000) {
          state.actions.resumeAutoSwitch();
        }
      }, 5000);
      
      // Reset velocity after delay
      setTimeout(() => {
        set(() => ({ swipeVelocity: 0 }));
      }, 1000);
      
      // End transition after duration
      setTimeout(() => {
        set(() => ({ isTransitioning: false }));
      }, 300);
    },
    
    startAutoSwitch: () => {
      const state = get();
      
      // Don't start if already running, disabled, or paused
      if (state.autoSwitchTimerId || !state.autoSwitchEnabled || state.isPaused) {
        return;
      }
      
      // Clear any existing timer
      if (state.autoSwitchTimerId) {
        clearInterval(state.autoSwitchTimerId);
      }
      
      // Start new timer
      const timerId = setInterval(() => {
        const currentState = get();
        
        // Skip if transitioning, paused, or disabled
        if (currentState.isTransitioning || currentState.isPaused || !currentState.autoSwitchEnabled) {
          return;
        }
        
        // Check if there was recent interaction (within 5 seconds)
        const timeSinceLastInteraction = Date.now() - currentState.lastInteractionTime;
        if (timeSinceLastInteraction < 5000) {
          return;
        }
        
        // Cycle to next principle
        currentState.actions.cyclePrinciple('next');
      }, state.autoSwitchInterval);
      
      set(() => ({
        autoSwitchTimerId: timerId,
      }));
    },
    
    stopAutoSwitch: () => {
      const state = get();
      
      if (state.autoSwitchTimerId) {
        clearInterval(state.autoSwitchTimerId);
        set(() => ({
          autoSwitchTimerId: null,
        }));
      }
    },
    
    pauseAutoSwitch: () => {
      set(() => ({
        isPaused: true,
      }));
    },
    
    resumeAutoSwitch: () => {
      const state = get();
      
      if (state.autoSwitchEnabled) {
        set(() => ({
          isPaused: false,
        }));
        
        // Restart timer if it was stopped
        if (!state.autoSwitchTimerId) {
          state.actions.startAutoSwitch();
        }
      }
    },
    
    toggleAutoSwitch: () => {
      const state = get();
      const newEnabled = !state.autoSwitchEnabled;
      
      set(() => ({
        autoSwitchEnabled: newEnabled,
      }));
      
      if (newEnabled) {
        state.actions.startAutoSwitch();
      } else {
        state.actions.stopAutoSwitch();
      }
    },
    
    setAutoSwitchInterval: (interval: number) => {
      const validInterval = Math.max(1000, Math.min(interval, 10000)); // 1s to 10s
      
      set(() => ({
        autoSwitchInterval: validInterval,
      }));
      
      // Restart timer with new interval
      const state = get();
      if (state.autoSwitchTimerId) {
        state.actions.stopAutoSwitch();
        state.actions.startAutoSwitch();
      }
    },
    
    startTransition: () => {
      set({
        isTransitioning: true,
        lastSwipeTimestamp: Date.now(),
      });
    },
    
    endTransition: () => {
      set({
        isTransitioning: false,
      });
    },
    
    setTransitionDuration: (duration: number) => {
      const validDuration = Math.max(100, Math.min(duration, 2000)); // 100ms to 2s
      set({
        transitionDuration: validDuration,
      });
    },
    
    markImagePreloaded: (imageSrc: string) => {
      set((state) => ({
        preloadedImages: new Set([...state.preloadedImages, imageSrc]),
      }));
    },
    
    preloadAllImages: (imageSources: string[]) => {
      const state = get();
      
      imageSources.forEach((imageSrc) => {
        if (!state.preloadedImages.has(imageSrc)) {
          // Only preload if running in browser
          if (typeof window !== 'undefined') {
            const img = new window.Image();
            img.onload = () => {
              state.actions.markImagePreloaded(imageSrc);
            };
            img.onerror = () => {
              console.warn(`Failed to preload image: ${imageSrc}`);
            };
            img.src = imageSrc;
          }
        }
      });
    },
    
    reset: () => {
      const state = get();
      
      // Clear any existing timers
      state.actions.stopAutoSwitch();
      
      set({
        selectedPrincipleId: 2,
        currentImageOffset: 1,
        isTransitioning: false,
        transitionDuration: 600,
        lastSwipeTimestamp: 0,
        swipeVelocity: 0,
        autoSwitchEnabled: true,
        autoSwitchInterval: 3000,
        autoSwitchTimerId: null,
        isPaused: false,
        lastInteractionTime: 0,
        preloadedImages: new Set(),
      });
    },
    
    initializeWithDefaults: () => {
      const state = get();
      
      // Define all execution principle images for preloading
      const allImages = [
        "/assets/figma-execution/execution-image-1.png",
        "/assets/figma-execution/execution-image-main.png",
        "/assets/figma-execution/execution-image-2.png",
        "/assets/figma-execution/execution-image-3.png",
      ];
      
      state.actions.preloadAllImages(allImages);
      
      // Start auto-switch if enabled
      if (state.autoSwitchEnabled && !state.autoSwitchTimerId) {
        state.actions.startAutoSwitch();
      }
    },
  },
}));

// Atomic selectors following Zustand best practices
export const useSelectedPrincipleId = () => 
  useExecutionSwipeStore((state) => state.selectedPrincipleId);

export const useCurrentImageOffset = () => 
  useExecutionSwipeStore((state) => state.currentImageOffset);

export const useIsTransitioning = () => 
  useExecutionSwipeStore((state) => state.isTransitioning);

export const useTransitionDuration = () => 
  useExecutionSwipeStore((state) => state.transitionDuration);

export const useSwipeVelocity = () => 
  useExecutionSwipeStore((state) => state.swipeVelocity);

export const useLastSwipeTimestamp = () => 
  useExecutionSwipeStore((state) => state.lastSwipeTimestamp);

export const usePreloadedImages = () => 
  useExecutionSwipeStore((state) => state.preloadedImages);

export const useExecutionSwipeActions = () => 
  useExecutionSwipeStore((state) => {
    if (!state.actions) {
      return {
        selectPrinciple: () => {},
        cyclePrinciple: () => {},
        cycleImage: () => {},
        setImageOffset: () => {},
        handleSwipeGesture: () => {},
        startAutoSwitch: () => {},
        stopAutoSwitch: () => {},
        pauseAutoSwitch: () => {},
        resumeAutoSwitch: () => {},
        toggleAutoSwitch: () => {},
        setAutoSwitchInterval: () => {},
        startTransition: () => {},
        endTransition: () => {},
        setTransitionDuration: () => {},
        markImagePreloaded: () => {},
        preloadAllImages: () => {},
        reset: () => {},
        initializeWithDefaults: () => {},
      };
    }
    return state.actions;
  });

// Composite selectors for derived state
export const useCanSwipe = () =>
  useExecutionSwipeStore((state) => !state.isTransitioning);

export const useCurrentExecutionState = () =>
  useExecutionSwipeStore((state) => ({
    selectedPrincipleId: state.selectedPrincipleId,
    currentImageOffset: state.currentImageOffset,
    isTransitioning: state.isTransitioning,
  }));

// Auto-switch specific selectors
export const useAutoSwitchEnabled = () => 
  useExecutionSwipeStore((state) => state.autoSwitchEnabled);

export const useAutoSwitchInterval = () => 
  useExecutionSwipeStore((state) => state.autoSwitchInterval);

export const useIsPaused = () => 
  useExecutionSwipeStore((state) => state.isPaused);

export const useAutoSwitchState = () => {
  const enabled = useExecutionSwipeStore((state) => state.autoSwitchEnabled);
  const interval = useExecutionSwipeStore((state) => state.autoSwitchInterval);
  const isPaused = useExecutionSwipeStore((state) => state.isPaused);
  const isRunning = useExecutionSwipeStore((state) => !!state.autoSwitchTimerId);
  
  return {
    enabled,
    interval,
    isPaused,
    isRunning,
  };
};