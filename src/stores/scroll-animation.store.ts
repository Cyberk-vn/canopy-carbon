"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ScrollAnimationEntry {
  id: string;
  elementId: string;
  hasTriggered: boolean;
  pageUrl: string;
  timestamp: number;
}

export interface ScrollAnimationState {
  triggeredAnimations: Map<string, ScrollAnimationEntry>;
  currentPageUrl: string;
  actions: {
    markAnimationTriggered: (elementId: string, pageUrl: string) => void;
    hasAnimationTriggered: (elementId: string, pageUrl: string) => boolean;
    clearPageAnimations: (pageUrl: string) => void;
    clearAllAnimations: () => void;
    setCurrentPage: (pageUrl: string) => void;
    resetPageAnimations: (pageUrl: string) => void;
  };
}

const useScrollAnimationStore = create<ScrollAnimationState>()(
  persist(
    (set, get) => ({
      triggeredAnimations: new Map(),
      currentPageUrl: '',
      
      actions: {
        markAnimationTriggered: (elementId: string, pageUrl: string) => {
          set((state) => {
            const key = `${pageUrl}-${elementId}`;
            const newAnimations = new Map(state.triggeredAnimations);
            newAnimations.set(key, {
              id: key,
              elementId,
              hasTriggered: true,
              pageUrl,
              timestamp: Date.now(),
            });
            
            return {
              triggeredAnimations: newAnimations,
            };
          });
        },

        hasAnimationTriggered: (elementId: string, pageUrl: string) => {
          const key = `${pageUrl}-${elementId}`;
          const state = get();
          return state.triggeredAnimations.has(key);
        },

        clearPageAnimations: (pageUrl: string) => {
          set((state) => {
            const newAnimations = new Map(state.triggeredAnimations);
            
            // Remove all animations for specific page
            for (const [key, entry] of newAnimations.entries()) {
              if (entry.pageUrl === pageUrl) {
                newAnimations.delete(key);
              }
            }
            
            return {
              triggeredAnimations: newAnimations,
            };
          });
        },

        clearAllAnimations: () => {
          set({
            triggeredAnimations: new Map(),
          });
        },

        setCurrentPage: (pageUrl: string) => {
          set({ currentPageUrl: pageUrl });
        },

        resetPageAnimations: (pageUrl: string) => {
          const { clearPageAnimations } = get().actions;
          clearPageAnimations(pageUrl);
        },
      },
    }),
    {
      name: 'scroll-animation-storage',
      partialize: (state) => ({
        triggeredAnimations: state.triggeredAnimations,
        currentPageUrl: state.currentPageUrl,
        // Don't persist actions - they will be recreated
      }),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.log('Error during hydration:', error);
        } else if (state) {
          // Ensure triggeredAnimations is a Map
          if (state.triggeredAnimations && !(state.triggeredAnimations instanceof Map)) {
            state.triggeredAnimations = new Map(Object.entries(state.triggeredAnimations));
          }
        }
      },
    }
  )
);

// Atomic selectors following Zustand best practices
export const useTriggeredAnimations = () => 
  useScrollAnimationStore((state) => state.triggeredAnimations);

export const useCurrentPageUrl = () => 
  useScrollAnimationStore((state) => state.currentPageUrl);

export const useScrollAnimationActions = () => 
  useScrollAnimationStore((state) => {
    if (!state.actions) {
      return {
        markAnimationTriggered: () => {},
        hasAnimationTriggered: () => false,
        clearPageAnimations: () => {},
        clearAllAnimations: () => {},
        setCurrentPage: () => {},
        resetPageAnimations: () => {},
      };
    }
    return state.actions;
  });

// Composite selectors for specific use cases
export const useHasAnimationTriggered = (elementId: string, pageUrl: string) =>
  useScrollAnimationStore((state) => {
    // Defensive check to ensure actions exist
    if (!state.actions || typeof state.actions.hasAnimationTriggered !== 'function') {
      return false;
    }
    return state.actions.hasAnimationTriggered(elementId, pageUrl);
  });