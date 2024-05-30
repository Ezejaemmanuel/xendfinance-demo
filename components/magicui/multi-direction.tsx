import { motion, useInView } from "framer-motion";
import { useRef, FC } from "react";

interface MultiDirectionSlideProps {
  text1: string;
  text2: string;
  className1?: string;
  className2?: string;
}

export const MultiDirectionSlide: FC<MultiDirectionSlideProps> = ({
  text1,
  text2,
  className1 = "",
  className2 = "",
}) => {
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };

  const ref1 = useRef<HTMLHeadingElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);

  const inView1 = useInView(ref1, { once: false });
  const inView2 = useInView(ref2, { once: false });

  return (
    <div className="overflow-hidden">
      <motion.h1
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className={`font-display text-center text-4xl  tracking-[-0.02em] drop-shadow-sm  md:leading-[5rem] ${className1}`}
      >
        {text1}
      </motion.h1>

      <motion.h1
        ref={ref2}
        initial="right"
        animate={inView2 ? "visible" : "right"}
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className={`font-display text-center   tracking-[-0.02em] drop-shadow-sm md:leading-[5rem] ${className2}`}
      >
        {text2}
      </motion.h1>
    </div>
  );
};
