import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    // Check if element is already in viewport on mount
    const checkInitialVisibility = () => {
      const rect = element.getBoundingClientRect();
      const isInViewport =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport) {
        setTimeout(() => {
          setInView(true);
        }, delay);
      }
    };

    // Run check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(checkInitialVisibility, 50);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [threshold, delay]);

  const internalAnimationStyles: React.CSSProperties = {
    opacity: inView ? 1 : initialOpacity,
    transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
    filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none",
  };

  const mergedStyles: React.CSSProperties = {
    ...style, // External styles first (positioning, dimensions, etc.)
    ...internalAnimationStyles, // Animation styles override when needed
    // Handle transition conflicts by concatenating
    transition: style?.transition 
      ? `${style.transition}, opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`
      : `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={mergedStyles}
    >
      {children}
    </div>
  );
};

export default FadeContent;
