// pages/index.tsx
"use client";
import React from "react";
import { timelines } from "./timeline.data";
import { TimelineLarge, TimelineSmall } from "./Timeline-data";
import { useWindowSize } from "@uidotdev/usehooks";

const TimeLineComponent = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width! < 768; // Example breakpoint for small screens

  return (
    <div>
      <main>
        {isSmallScreen
          ? timelines.map((timeline, index) => (
              <TimelineSmall key={index} index={index} data={timeline} />
            ))
          : timelines.map((timeline, index) => (
              <TimelineLarge key={index} index={index} data={timeline} />
            ))}
      </main>

      <footer className="py-8 text-center">
        <p>© 2024 Xend Finance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TimeLineComponent;
