import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

interface BlurInProps {
  text: string;
  className?: string;
  delay: number;
}

export const BlurIn: FC<BlurInProps> = ({ text, className = "", delay }) => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1, delay: delay }}
      variants={variants1}
      className={`font-display text-center tracking-[-0.02em] drop-shadow-sm ${className}`}
    >
      {text}
    </motion.h1>
  );
};
