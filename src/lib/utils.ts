import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDevelopmentMode(): boolean {
  if (typeof window === "undefined") {
    return process.env.NODE_ENV === "development";
  }

  const origin = window.location.origin;
  const isProd = origin.includes("canopycarbon.org");

  return !isProd;
}
