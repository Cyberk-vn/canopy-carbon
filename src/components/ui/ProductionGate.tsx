"use client";

import { useEffect, useState } from "react";
import { ComingSoon } from "./ComingSoon";

export function ProductionGate({ children }: { children: React.ReactNode }) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isProdUrl =
        window.location.origin === "https://www.canopycarbon.org";
      setShowComingSoon(isProdUrl);
    }
  }, []);

  if (showComingSoon) {
    return <ComingSoon />;
  }

  return <>{children}</>;
}
