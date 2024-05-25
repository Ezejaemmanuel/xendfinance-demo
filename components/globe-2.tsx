// components/GlobeComponent.tsx
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Globe component with SSR disabled
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string[];
}
const GlobeComponent = () => {
  const [arcsData, setArcsData] = useState<ArcData[]>([]);

  useEffect(() => {
    // Generate random data
    const N = 20;
    const data = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
        ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ],
    }));
    setArcsData(data);
  }, []);

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      arcsData={arcsData}
      arcColor="color"
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
    />
  );
};

export default GlobeComponent;
