import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDevelopmentMode(): boolean {
  if (typeof window === "undefined") {
    return process.env.NODE_ENV === "development";
  }

  const url = window.location.href;
  return url.includes("canopy-carbon.vercel.app") || url.includes("localhost");
}
