"use client";

export interface ScrollAnimationEntry {
  id: string;
  element: HTMLElement;
  callback: (entry: IntersectionObserverEntry, progress: number) => void;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  triggered?: boolean;
  elementId?: string; // Used for tracking with Zustand store
}

export interface ScrollProgress {
  scrollY: number;
  scrollProgress: number; // 0-1
  scrollDirection: 'up' | 'down' | 'none';
  windowHeight: number;
  documentHeight: number;
}

export class ScrollAnimationService {
  private entries: Map<string, ScrollAnimationEntry> = new Map();
  private observer: IntersectionObserver | null = null;
  private scrollListeners: Array<(progress: ScrollProgress) => void> = [];
  private lastScrollY = 0;
  private scrollDirection: 'up' | 'down' | 'none' = 'none';
  private rafId: number | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init() {
    // Initialize Intersection Observer
    this.observer = new IntersectionObserver(
      this.handleIntersection,
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1],
        rootMargin: '0px'
      }
    );

    // Track scroll progress
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleResize, { passive: true });
  }

  private handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const animationEntry = Array.from(this.entries.values()).find(
        ae => ae.element === entry.target
      );

      if (animationEntry) {
        // Calculate progress based on intersection ratio and position
        const progress = this.calculateProgress(entry);
        
        // Skip if animation should only trigger once and has already been triggered
        if (animationEntry.once && animationEntry.triggered && !entry.isIntersecting) {
          return;
        }

        // Mark as triggered if intersecting
        if (entry.isIntersecting && animationEntry.once) {
          animationEntry.triggered = true;
        }

        // Execute callback
        animationEntry.callback(entry, progress);
      }
    });
  };

  private calculateProgress(entry: IntersectionObserverEntry): number {
    if (!entry.isIntersecting) return 0;

    const rect = entry.boundingClientRect;
    const windowHeight = window.innerHeight;
    
    // Calculate how much of the element is visible
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const elementHeight = rect.height;
    
    // Progress based on element visibility (0-1)
    const visibilityProgress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
    
    // Progress based on scroll position relative to element
    const scrollProgress = Math.max(0, Math.min(1, 
      (windowHeight - rect.top) / (windowHeight + elementHeight)
    ));

    return Math.max(visibilityProgress, scrollProgress);
  }

  private handleScroll = () => {
    if (this.rafId) return;

    this.rafId = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > this.lastScrollY) {
        this.scrollDirection = 'down';
      } else if (currentScrollY < this.lastScrollY) {
        this.scrollDirection = 'up';
      } else {
        this.scrollDirection = 'none';
      }

      const scrollProgress: ScrollProgress = {
        scrollY: currentScrollY,
        scrollProgress: Math.min(1, currentScrollY / (document.documentElement.scrollHeight - window.innerHeight)),
        scrollDirection: this.scrollDirection,
        windowHeight: window.innerHeight,
        documentHeight: document.documentElement.scrollHeight
      };

      // Notify scroll listeners
      this.scrollListeners.forEach(listener => listener(scrollProgress));

      this.lastScrollY = currentScrollY;
      this.rafId = null;
    });
  };

  private handleResize = () => {
    // Recalculate on resize
    this.handleScroll();
  };

  // Public methods
  registerElement(
    id: string,
    element: HTMLElement,
    callback: (entry: IntersectionObserverEntry, progress: number) => void,
    options: { threshold?: number; rootMargin?: string; once?: boolean; elementId?: string } = {}
  ): void {
    const entry: ScrollAnimationEntry = {
      id,
      element,
      callback,
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      once: options.once || false,
      triggered: false,
      elementId: options.elementId
    };

    this.entries.set(id, entry);
    this.observer?.observe(element);
  }

  unregisterElement(id: string): void {
    const entry = this.entries.get(id);
    if (entry && this.observer) {
      this.observer.unobserve(entry.element);
      this.entries.delete(id);
    }
  }

  subscribeToScroll(callback: (progress: ScrollProgress) => void): () => void {
    this.scrollListeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.scrollListeners.indexOf(callback);
      if (index > -1) {
        this.scrollListeners.splice(index, 1);
      }
    };
  }

  // Animation presets
  static fadeInUp(element: HTMLElement, progress: number) {
    const opacity = Math.min(1, progress * 2);
    const translateY = (1 - progress) * 50;
    
    element.style.opacity = opacity.toString();
    element.style.transform = `translateY(${translateY}px)`;
  }

  static fadeInLeft(element: HTMLElement, progress: number) {
    const opacity = Math.min(1, progress * 2);
    const translateX = (1 - progress) * -50;
    
    element.style.opacity = opacity.toString();
    element.style.transform = `translateX(${translateX}px)`;
  }

  static fadeInRight(element: HTMLElement, progress: number) {
    const opacity = Math.min(1, progress * 2);
    const translateX = (1 - progress) * 50;
    
    element.style.opacity = opacity.toString();
    element.style.transform = `translateX(${translateX}px)`;
  }

  static scaleIn(element: HTMLElement, progress: number) {
    const opacity = Math.min(1, progress * 2);
    const scale = 0.8 + (progress * 0.2);
    
    element.style.opacity = opacity.toString();
    element.style.transform = `scale(${scale})`;
  }

  static slideInUp(element: HTMLElement, progress: number) {
    const translateY = (1 - Math.min(1, progress * 1.2)) * 100;
    const opacity = Math.min(1, progress * 2);
    
    element.style.transform = `translateY(${translateY}px)`;
    element.style.opacity = opacity.toString();
  }

  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
    
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    this.observer?.disconnect();
    this.entries.clear();
    this.scrollListeners = [];
  }
}

// Singleton instance
let scrollAnimationInstance: ScrollAnimationService | null = null;

export const getScrollAnimationService = (): ScrollAnimationService => {
  if (!scrollAnimationInstance) {
    scrollAnimationInstance = new ScrollAnimationService();
  }
  return scrollAnimationInstance;
};

export const destroyScrollAnimationService = () => {
  if (scrollAnimationInstance) {
    scrollAnimationInstance.destroy();
    scrollAnimationInstance = null;
  }
};