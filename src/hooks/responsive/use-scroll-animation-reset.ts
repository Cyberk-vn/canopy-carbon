"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useScrollAnimationActions } from '@/src/stores/scroll-animation.store';

/**
 * Hook to manage page-level scroll animation state
 * Can be used to reset animations when navigating to a page
 */
export function useScrollAnimationReset(shouldResetOnMount: boolean = false) {
  const pathname = usePathname();
  const { resetPageAnimations, setCurrentPage } = useScrollAnimationActions();

  useEffect(() => {
    // Set current page
    setCurrentPage(pathname);
    
    // Reset animations for this page if requested
    if (shouldResetOnMount) {
      resetPageAnimations(pathname);
    }
  }, [pathname, shouldResetOnMount, setCurrentPage, resetPageAnimations]);

  return {
    resetCurrentPage: () => resetPageAnimations(pathname),
    pathname,
  };
}

/**
 * Hook to provide scroll animation management actions
 * Use this for components that need to manually control animation state
 */
export function useScrollAnimationControl() {
  const pathname = usePathname();
  const actions = useScrollAnimationActions();

  return {
    resetCurrentPage: () => actions.resetPageAnimations(pathname),
    clearAllAnimations: actions.clearAllAnimations,
    markTriggered: (elementId: string) => actions.markAnimationTriggered(elementId, pathname),
    hasTriggered: (elementId: string) => actions.hasAnimationTriggered(elementId, pathname),
    pathname,
  };
}