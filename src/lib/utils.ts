import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDevelopmentMode(): boolean {
  if (typeof window === "undefined") {
    // Server-side: check if we're on production domain
    const url =
      process.env.VERCEL_URL || process.env.NEXT_PUBLIC_SITE_URL || "";
    const isDev = url.includes("https://canopy-carbon.vercel.app/");
    return isDev;
  }

  // Client-side: check origin
  const origin = window.location.origin;
  const isDev = origin.includes("https://canopy-carbon.vercel.app/");

  return isDev;
}
