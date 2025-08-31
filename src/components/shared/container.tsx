import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "default" | "full" | "none";
  padding?: "default" | "none" | "sm" | "lg";
}

export function Container({
  children,
  className = "",
  maxWidth = "default",
  padding = "default",
}: ContainerProps) {
  const maxWidthClasses = {
    default: "max-w-[1440px]",
    full: "max-w-full",
    none: "",
  };

  const paddingClasses = {
    default: "",
    none: "",
    sm: "px-4",
    lg: "px-12",
  };

  return (
    <div
      className={`
      mx-auto 
      ${maxWidthClasses[maxWidth]} 
      ${paddingClasses[padding]} 
      ${className}
    `
        .trim()
        .replace(/\s+/g, " ")}
    >
      {children}
    </div>
  );
}
