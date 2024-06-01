"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SlightFlipProps {
  word: string;
  className: string;
}

export function SlightFlip({ word, className }: SlightFlipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };

  return (
    <div className="flex justify-center space-x-2" ref={ref}>
      <AnimatePresence>
        {isInView &&
          word.split("").map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={className}
              style={{ transformOrigin: "50% 50%" }}
            >
              {char}
            </motion.span>
          ))}
      </AnimatePresence>
    </div>
  );
}
