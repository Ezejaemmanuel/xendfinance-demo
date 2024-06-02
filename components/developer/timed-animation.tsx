"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
  totalDuration = 5, // Default total duration is 5 seconds
}: {
  words: string;
  className?: string;
  totalDuration?: number; // Add the totalDuration prop
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const totalWords = wordsArray.length;
    const delayBetweenWords = totalDuration / (totalWords + 1); // Calculate delay between each word
    const durationPerWord = delayBetweenWords; // Set the duration per word equal to the delay

    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: durationPerWord,
        delay: stagger(delayBetweenWords),
      },
    );
  }, [scope.current, totalDuration]); // Include totalDuration in the dependency array

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className={`${className} opacity-0`}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="mt-4">
      <div>{renderWords()}</div>
    </div>
  );
};
