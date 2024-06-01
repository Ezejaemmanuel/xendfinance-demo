// "use client";
// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React from "react";

// const StartBackGround = () => {
//   return (
//     <div className="absolute inset-0 -z-10">
//       <Canvas>
//         <Stars radius={50} count={2500} factor={4} fade speed={2} />
//       </Canvas>
//     </div>
//   );
// };

// export default StartBackGround;

"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";

const StartBackGround = () => {
  const { width } = useWindowSize();
  const starCount = width === null || width < 768 ? 2500 : 5000;

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Stars radius={50} count={starCount} factor={4} fade speed={2} />
      </Canvas>
    </div>
  );
};

export default StartBackGround;
