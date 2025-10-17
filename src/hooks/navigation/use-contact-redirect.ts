"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface UseContactRedirectReturn {
  redirectToContact: () => void;
}

/**
 * Hook for redirecting to contact page and auto-scrolling to ContactFooterSection
 * Provides smooth navigation and scrolling animation for optimal UX
 */
export function useContactRedirect(): UseContactRedirectReturn {
  const router = useRouter();

  const scrollToContactSection = useCallback(() => {
    const maxRetries = 5;
    let retryCount = 0;

    const attemptScroll = () => {
      try {
        // Try mobile contact form first, then desktop contact form
        const mobileElement = document.getElementById("contact-footer-section");
        const desktopElement = document.getElementById("contact-desktop-form");

        const element = mobileElement || desktopElement;

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
          return true;
        }

        return false;
      } catch (error) {
        console.error("Error scrolling to contact section:", error);
        return false;
      }
    };

    const retry = () => {
      if (attemptScroll()) {
        return;
      }

      if (retryCount >= maxRetries) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      retryCount++;
      setTimeout(retry, 200 * retryCount); // Exponential backoff: 200ms, 400ms, 600ms...
    };

    retry();
  }, []);

  const redirectToContact = useCallback(() => {
    try {
      const currentPath = window.location.pathname;

      // Check if we're already on the contact page
      if (currentPath === "/contact-us") {
        scrollToContactSection();
        return;
      }

      // Navigate to contact page
      router.push("/contact-us");

      // Wait for navigation to complete, then scroll to ContactFooterSection
      setTimeout(() => {
        scrollToContactSection();
      }, 500); // Increased initial delay for navigation
    } catch (error) {
      console.error("Error navigating to contact page:", error);
    }
  }, [router, scrollToContactSection]);

  return { redirectToContact };
}