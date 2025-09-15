"use client";

import { motion } from "motion/react";
import React from "react";

export const ComingSoon: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZhNiA2IDAgMSAwIDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center px-8 gap-3">
        {/* Coming Soon text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-powerup bg-gradient-rainbow bg-clip-text text-4xl font-bold text-white md:text-4xl lg:text-5xl">
            COMING
          </h1>
          <h1 className="font-powerup bg-gradient-rainbow bg-clip-text text-4xl font-bold text-white md:text-4xl lg:text-5xl">
            SOON
          </h1>
        </motion.div>

        {/* Animated glow effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
        </motion.div>

        {/* Floating animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute h-[200px] w-[200px] rounded-full border border-white/10 md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"></div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute h-[150px] w-[150px] rounded-full border border-white/5 md:h-[250px] md:w-[250px] lg:h-[350px] lg:w-[350px]"></div>
        </motion.div>
      </div>
    </div>
  );
};
