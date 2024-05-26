"use client";
import { useInView, motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  delay = 0,
  duration = 1,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: duration,
        ease: [0.4, 0.0, 0.2, 1],
        delay: delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
