"use client";

import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  blur?: boolean;
  className?: string;
  amount?: number | "some" | "all";
}

const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  blur = false,
  className = "",
  amount = 0.1,
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: blur ? "blur(10px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
