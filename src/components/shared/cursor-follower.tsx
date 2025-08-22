"use client";

import { useEffect, useRef, useState } from 'react';
import { getCursorTrackingService, CursorPosition } from '@/src/lib/services/cursor-tracking.service';

interface CursorFollowerProps {
  size?: number;
  color?: string;
  opacity?: number;
  blur?: number;
  enabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function CursorFollower({
  size = 20,
  color = '#94A4B1',
  opacity = 0.6,
  blur = 10,
  enabled = true,
  className = '',
  style = {}
}: CursorFollowerProps) {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const cursorService = getCursorTrackingService({
      smoothing: 0.15,
      updateThrottle: 16,
      enabled: true
    });

    // Subscribe to cursor position updates
    unsubscribeRef.current = cursorService.subscribe((newPosition) => {
      setPosition(newPosition);
      if (!isVisible) {
        setIsVisible(true);
      }
    });

    // Mouse enter/leave events for visibility
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial position
    setPosition(cursorService.getCurrentPosition());

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, isVisible]);

  if (!enabled || !isVisible) {
    return null;
  }

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: color,
    opacity: opacity,
    pointerEvents: 'none',
    zIndex: 9999,
    filter: `blur(${blur}px)`,
    transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
    transition: 'opacity 0.3s ease',
    willChange: 'transform',
    ...style
  };

  return (
    <div
      ref={cursorRef}
      className={`cursor-follower ${className}`}
      style={cursorStyle}
      aria-hidden="true"
    />
  );
}