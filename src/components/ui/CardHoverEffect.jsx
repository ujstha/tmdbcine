"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const CardHoverEffect = ({ children, index }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="group relative block size-full overflow-hidden rounded-xl p-3"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 block size-full rounded-xl bg-background-hover backdrop-blur-lg"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
