import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDevelopmentMode(): boolean {
  // Server-side: check NODE_ENV
  if (typeof window === "undefined") {
    return process.env.NODE_ENV === "development";
  }

  // Client-side: check hostname
  const hostname = window.location.hostname;

  // Development mode for vercel preview and localhost
  const isDev =
    hostname.includes("canopy-carbon.vercel.app") ||
    hostname.includes("localhost") ||
    hostname.includes("127.0.0.1");

  // Production mode for canopycarbon.org
  const isProd = hostname.includes("canopycarbon.org");

  return isProd ? false : isDev;
}
