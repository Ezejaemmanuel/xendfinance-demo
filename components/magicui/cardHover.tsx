"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MotionDiv } from "../animateOnEnter";
import { cn } from "@/lib/utils";
import { NeonGradientCard } from "./neon-gradient";

// The HoverEffect component
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    IconComponent?: React.ComponentType<any>;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <NeonGradientCard className="absolute inset-0 -z-30 block h-full w-full  rounded-3xl bg-neutral-900/[0.2]">
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-900/[0.5]"
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
              </NeonGradientCard>
            )}
          </AnimatePresence>
          <MotionDiv
            delay={idx * 0.1}
            className="rounded-md ring-1 ring-yellow-400"
          >
            <Feature
              title={item.title}
              description={item.description}
              IconComponent={item.IconComponent}
            />
          </MotionDiv>
        </Link>
      ))}
    </div>
  );
};

// The Feature component
interface FeatureProps {
  title: string;
  description: string;
  IconComponent?: React.ComponentType<any>;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  IconComponent,
}) => (
  <div className="flex flex-col items-center rounded-lg bg-neutral-950 p-8 px-6 text-white shadow-lg md:p-4">
    {IconComponent && (
      <IconComponent size={32} className="animate-bounce text-blue-900" />
    )}
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-center text-sm">{description}</p>
  </div>
);
