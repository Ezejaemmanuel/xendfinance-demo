"use client";
import { wrap } from "@motionone/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import React from "react";
import ResponsiveComponent from "./calls-to-action";
import { responsiveData } from "./call-to-action-data";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  acceleration?: number;
}

export function VelocityScroll() {
  const componentsArray = responsiveData.map((item, index) => (
    <ResponsiveComponent
      key={index}
      title={item.title}
      imageUrl={item.imageUrl}
      description={item.description}
      buttonText={item.buttonText}
      buttonLink={item.buttonLink}
      email={item.email}
    />
  ));

  function ParallaxText({
    children,
    baseVelocity = 100,
    acceleration = 1,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: true,
    });

    const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

    const directionFactor = React.useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      // Adjust the moveBy value by the acceleration factor
      moveBy +=
        directionFactor.current * moveBy * velocityFactor.get() * acceleration;

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className="parallax"
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        <motion.div
          className="scroller font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ x, display: "inline-flex" }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <section className=" mb-24 ">
      <ParallaxText baseVelocity={2} acceleration={5}>
        {componentsArray}
      </ParallaxText>
    </section>
  );
}
