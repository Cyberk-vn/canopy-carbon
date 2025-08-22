"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getScrollAnimationService, ScrollAnimationService } from '@/src/lib/services/scroll-animation.service';
import { useScrollAnimationActions, useHasAnimationTriggered } from '@/src/stores/scroll-animation.store';

export type AnimationType = 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'custom';

export interface UseScrollAnimationOptions {
  animationType: AnimationType;
  customAnimation?: (element: HTMLElement, progress: number) => void;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  elementId?: string; // Unique identifier for the animated element
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions) {
  const elementRef = useRef<T | null>(null);
  const isRegisteredRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Get current page URL and Zustand actions
  const pathname = usePathname();
  const { markAnimationTriggered, setCurrentPage } = useScrollAnimationActions();
  
  // Generate unique element ID if not provided
  const elementId = options.elementId || `element-${Math.random().toString(36).substr(2, 9)}`;
  
  // Check if animation has already been triggered for this element on this page
  const hasTriggered = useHasAnimationTriggered(elementId, pathname);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || isRegisteredRef.current) return;

    // Update current page in store
    setCurrentPage(pathname);

    const scrollService = getScrollAnimationService();
    
    // Set initial styles
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // If animation has already been triggered, apply final state immediately
    if (hasTriggered && options.once !== false) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }
    
    // Apply initial animation state
    switch (options.animationType) {
      case 'fadeInUp':
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        break;
      case 'fadeInLeft':
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        break;
      case 'fadeInRight':
        element.style.opacity = '0';
        element.style.transform = 'translateX(50px)';
        break;
      case 'scaleIn':
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        break;
      case 'slideInUp':
        element.style.opacity = '0';
        element.style.transform = 'translateY(100px)';
        break;
    }

    const animationCallback = (entry: IntersectionObserverEntry, progress: number) => {
      // Skip if animation has already been triggered for this element
      if (hasTriggered && options.once !== false) {
        return;
      }

      // Mark animation as triggered when element becomes visible
      if (entry.isIntersecting && progress > 0 && options.once !== false) {
        markAnimationTriggered(elementId, pathname);
      }

      if (options.delay && options.delay > 0) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
          executeAnimation(element, progress);
        }, options.delay);
      } else {
        executeAnimation(element, progress);
      }
    };

    const executeAnimation = (element: HTMLElement, progress: number) => {
      if (options.animationType === 'custom' && options.customAnimation) {
        options.customAnimation(element, progress);
      } else {
        // Use built-in animations
        const animationMap = {
          fadeInUp: ScrollAnimationService.fadeInUp,
          fadeInLeft: ScrollAnimationService.fadeInLeft,
          fadeInRight: ScrollAnimationService.fadeInRight,
          scaleIn: ScrollAnimationService.scaleIn,
          slideInUp: ScrollAnimationService.slideInUp,
        };

        const animationFunc = animationMap[options.animationType as keyof typeof animationMap];
        if (animationFunc) {
          animationFunc(element, progress);
        }
      }
    };

    // Register element for animation only if not already triggered
    if (!hasTriggered || options.once === false) {
      const id = `scroll-animation-${elementId}`;
      scrollService.registerElement(
        id,
        element,
        animationCallback,
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px',
          once: options.once !== false // Default to true
        }
      );

      isRegisteredRef.current = true;

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        scrollService.unregisterElement(id);
        isRegisteredRef.current = false;
      };
    }
  }, [options, pathname, elementId, hasTriggered, markAnimationTriggered, setCurrentPage]);

  return elementRef;
}