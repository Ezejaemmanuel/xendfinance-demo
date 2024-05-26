// "use client";
// import React, { useEffect, useRef } from "react";
// import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
// import ThreeGlobe from "three-globe";
// import * as THREE from "three";

// extend({ ThreeGlobe });

// const Globe: React.FC = () => {
//   const globeRef = useRef<ThreeGlobe>();
//   const { scene } = useThree();

//   useEffect(() => {
//     const globe = new ThreeGlobe()
//       .globeImageUrl(
//         "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
//       )
//       .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png");

//     globeRef.current = globe;
//     scene.add(globe);
//   }, [scene]);

//   useFrame(() => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += 0.001;
//     }
//   });

//   return null;
// };

// const App: React.FC = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <Globe />
//     </Canvas>
//   );
// };

// export default App;
