"use client";

export interface CursorPosition {
  x: number;
  y: number;
}

export interface CursorTrackingOptions {
  smoothing: number;
  updateThrottle: number;
  enabled: boolean;
}

class CursorTrackingService {
  private currentPosition: CursorPosition = { x: 0, y: 0 };
  private targetPosition: CursorPosition = { x: 0, y: 0 };
  private listeners: Array<(position: CursorPosition) => void> = [];
  private animationFrame: number | null = null;
  private lastUpdate = 0;
  private options: CursorTrackingOptions = {
    smoothing: 0.1,
    updateThrottle: 16, // ~60fps
    enabled: true
  };

  constructor(options?: Partial<CursorTrackingOptions>) {
    if (options) {
      this.options = { ...this.options, ...options };
    }
    
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init() {
    // Track mouse movement
    document.addEventListener('mousemove', this.handleMouseMove);
    
    // Start animation loop
    this.startAnimationLoop();
  }

  private handleMouseMove = (event: MouseEvent) => {
    if (!this.options.enabled) return;
    
    this.targetPosition = {
      x: event.clientX,
      y: event.clientY
    };
  };

  private startAnimationLoop = () => {
    const update = (timestamp: number) => {
      if (timestamp - this.lastUpdate >= this.options.updateThrottle) {
        this.updatePosition();
        this.lastUpdate = timestamp;
      }
      
      this.animationFrame = requestAnimationFrame(update);
    };
    
    this.animationFrame = requestAnimationFrame(update);
  };

  private updatePosition() {
    // Smooth interpolation
    const smoothing = this.options.smoothing;
    
    this.currentPosition.x += (this.targetPosition.x - this.currentPosition.x) * smoothing;
    this.currentPosition.y += (this.targetPosition.y - this.currentPosition.y) * smoothing;
    
    // Notify listeners
    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach(listener => {
      listener({ ...this.currentPosition });
    });
  }

  // Public methods
  subscribe(callback: (position: CursorPosition) => void): () => void {
    this.listeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  getCurrentPosition(): CursorPosition {
    return { ...this.currentPosition };
  }

  updateOptions(options: Partial<CursorTrackingOptions>) {
    this.options = { ...this.options, ...options };
  }

  setEnabled(enabled: boolean) {
    this.options.enabled = enabled;
  }

  destroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('mousemove', this.handleMouseMove);
    }
    
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    
    this.listeners = [];
  }
}

// Singleton instance
let cursorTrackingInstance: CursorTrackingService | null = null;

export const getCursorTrackingService = (options?: Partial<CursorTrackingOptions>): CursorTrackingService => {
  if (!cursorTrackingInstance) {
    cursorTrackingInstance = new CursorTrackingService(options);
  }
  return cursorTrackingInstance;
};

export const destroyCursorTrackingService = () => {
  if (cursorTrackingInstance) {
    cursorTrackingInstance.destroy();
    cursorTrackingInstance = null;
  }
};