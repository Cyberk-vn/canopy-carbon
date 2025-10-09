import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isXlScreen, setIsXlScreen] = useState(true);
  const [isXxlScreen, setIsXxlScreen] = useState(false);
  const [is2XlScreen, setIs2XlScreen] = useState(false);
  const [is3XlScreen, setIs3XlScreen] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768; // Mobile breakpoint (md: 768px)
      const tablet = window.innerWidth > 768 && window.innerWidth < 1024; // Tablet breakpoint (md to lg)
      const xlScreen = window.innerWidth >= 1280; // XL breakpoint (xl: 1280px)
      const xxlScreen = window.innerWidth >= 1440; // XXL breakpoint (xxl: 1440px)
      const xl2Screen = window.innerWidth >= 1600; // 2XL breakpoint (2xl: 1600px)
      const xl3Screen = window.innerWidth >= 1920; // 3XL breakpoint (3xl: 1920px)
      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsDesktop(!mobile && !tablet);
      setIsXlScreen(xlScreen);
      setIsXxlScreen(xxlScreen);
      setIs2XlScreen(xl2Screen);
      setIs3XlScreen(xl3Screen);
    };

    const checkBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      // Firefox detection
      const firefox = userAgent.includes("firefox");
      setIsFirefox(firefox);

      // Safari detection (desktop only)
      const safari =
        userAgent.includes("safari") &&
        !userAgent.includes("chrome") &&
        !userAgent.includes("chromium") &&
        !userAgent.includes("mobile"); // Exclude mobile Safari
      setIsSafari(safari);
    };

    // Check on mount
    checkDevice();
    checkBrowser();

    // Add resize listener
    window.addEventListener("resize", checkDevice);

    // Cleanup
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isFirefox,
    isSafari,
    isXlScreen,
    isXxlScreen,
    is2XlScreen,
    is3XlScreen,
  };
};
