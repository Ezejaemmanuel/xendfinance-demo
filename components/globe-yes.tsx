// "use client";
// import React, {
//   useState,
//   useRef,
//   useEffect,
//   FunctionComponent,
//   useCallback,
// } from "react";
// import Globe from "react-globe.gl";

// interface WorldProps {
//   siblingWidth?: number;
//   siblingHeight?: number;
// }

// interface ArcsData {
//   filter?: any;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   color: string[];
// }

// const World: FunctionComponent<WorldProps> = ({
//   siblingWidth,
//   siblingHeight,
// }) => {
//   const [arcsData, setArcsData] = useState<ArcsData[]>([]);

//   const globeEl = useRef<any>();

//   useEffect(() => {
//     const globe = globeEl.current;

//     globe.controls().autoRotate = true;
//     globe.controls().autoRotateSpeed = 1;
//     globe.controls().enableZoom = false;
//     globe.controls().minPolarAngle = 1;
//     globe.controls().maxPolarAngle = 2;
//   }, []);

//   useEffect(() => {
//     // Generate random data
//     const N = 50; // Increase the number of arcs
//     const colors = [
//       "red",
//       "white",
//       "blue",
//       "green",
//       "yellow",
//       "purple",
//       "orange",
//       "cyan",
//     ];
//     const data = [...Array(N).keys()].map(() => ({
//       startLat: (Math.random() - 0.5) * 180,
//       startLng: (Math.random() - 0.5) * 360,
//       endLat: (Math.random() - 0.5) * 180,
//       endLng: (Math.random() - 0.5) * 360,
//       color: [
//         colors[Math.floor(Math.random() * colors.length)],
//         colors[Math.floor(Math.random() * colors.length)],
//       ],
//     }));
//     setArcsData(data);
//   }, []);

//   return (
//     <Globe
//       height={siblingHeight}
//       globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // Use a more modern globe image
//       width={siblingWidth}
//       ref={useCallback<any>(globeEl, [])}
//       //   showAtmosphere={true}
//       backgroundColor="black"
//       arcsData={arcsData}
//       arcColor="color"
//       arcDashLength={() => Math.random()}
//       arcDashGap={() => Math.random()}
//       arcDashAnimateTime={() => Math.random() * 4000 + 500}
//     />
//   );
// };

// export default World;

"use client";
import React, {
  useState,
  useRef,
  useEffect,
  FunctionComponent,
  useCallback,
} from "react";
import Globe from "react-globe.gl";

// Dynamically import the Globe component

interface ArcsData {
  filter?: any;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string[];
}

const World = () => {
  const [arcsData, setArcsData] = useState<ArcsData[]>([]);
  const globeEl = useRef<any>();

  useEffect(() => {
    console.log("useEffect for globe controls");
    const globe = globeEl.current;

    if (globe) {
      console.log("Globe is defined");
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 1;
      globe.controls().enableZoom = false;
      globe.controls().minPolarAngle = 1;
      globe.controls().maxPolarAngle = 2;
    } else {
      console.log("Globe is not defined");
    }
  }, [globeEl.current]);

  useEffect(() => {
    console.log("useEffect for generating arcs data");
    // Generate random data
    const N = 50; // Increase the number of arcs
    const colors = [
      "red",
      "white",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "cyan",
    ];
    const data = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        colors[Math.floor(Math.random() * colors.length)],
        colors[Math.floor(Math.random() * colors.length)],
      ],
    }));
    setArcsData(data);
    console.log("Arcs data generated", data);
  }, []);

  return (
    <Globe
      globeImageUrl="https://unpkg.com/three-globe@2.31.0/example/img/earth-night.jpg" // Use a more modern globe image
      ref={useCallback<any>(globeEl, [])}
      //   showAtmosphere={true}
      backgroundColor="black"
      arcsData={arcsData}
      arcColor="color"
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
    />
  );
};

export default World;
