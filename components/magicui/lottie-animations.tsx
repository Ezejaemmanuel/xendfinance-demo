// components/LottieAnimation.tsx
"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import React, { useMemo } from "react";
import Lottie from "react-lottie";

// Define the type for your animation data.
interface AnimationData extends Record<string, unknown> {}

interface LottieAnimationProps {
  animationData: AnimationData;
  speed?: number;
  largeScreenSize: number;
}

// Define the type for the options object.
interface Options {
  loop: boolean | number;
  autoplay: boolean;
  animationData: AnimationData;
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice";
  };
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  speed = 1,
  largeScreenSize,
}) => {
  const { width: windowWidth } = useWindowSize();

  // Determine the size based on the window width.
  const size = useMemo(() => {
    let newSize = largeScreenSize;
    if (windowWidth! < 576) {
      newSize = largeScreenSize * 0.5;
    } else if (windowWidth! < 768) {
      newSize = largeScreenSize * 0.75;
    }
    return { height: newSize, width: newSize };
  }, [windowWidth, largeScreenSize]);

  const defaultOptions = useMemo<Options>(
    () => ({
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    [animationData],
  );

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={size.height}
        width={size.width}
        isStopped={false}
        isPaused={false}
        speed={speed}
        direction={1}
        ariaRole="button"
        ariaLabel="Animation"
        isClickToPauseDisabled={false}
      />
    </div>
  );
};

export default LottieAnimation;
