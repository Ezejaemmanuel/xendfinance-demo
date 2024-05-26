// // components/GlobeComponent.tsx
// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Stars, Line } from "@react-three/drei";
// import * as THREE from "three";

// interface ArcData {
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   color: string[];
// }

// const Globe = () => {
//   const globeRef = useRef<THREE.Mesh>(null);

//   // Auto-rotate the globe
//   useFrame(() => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += 0.001;
//     }
//   });

//   return (
//     <mesh ref={globeRef}>
//       <sphereGeometry args={[5, 32, 32]} />
//       <meshStandardMaterial
//         map={new THREE.TextureLoader().load(
//           "//unpkg.com/three-globe/example/img/earth-night.jpg"
//         )}
//       />
//     </mesh>
//   );
// };

// const Arcs = ({ arcsData }: { arcsData: ArcData[] }) => {
//   return (
//     <>
//       {arcsData.map((arc, index) => {
//         const start = new THREE.Vector3(
//           Math.cos((arc.startLat * Math.PI) / 180) *
//             Math.cos((arc.startLng * Math.PI) / 180),
//           Math.sin((arc.startLat * Math.PI) / 180),
//           Math.cos((arc.startLat * Math.PI) / 180) *
//             Math.sin((arc.startLng * Math.PI) / 180)
//         );
//         const end = new THREE.Vector3(
//           Math.cos((arc.endLat * Math.PI) / 180) *
//             Math.cos((arc.endLng * Math.PI) / 180),
//           Math.sin((arc.endLat * Math.PI) / 180),
//           Math.cos((arc.endLat * Math.PI) / 180) *
//             Math.sin((arc.endLng * Math.PI) / 180)
//         );

//         const mid = new THREE.Vector3()
//           .addVectors(start, end)
//           .multiplyScalar(0.5);
//         mid.normalize();
//         mid.multiplyScalar(1.1);

//         const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
//         const points = curve.getPoints(50);

//         return (
//           <Line
//             key={index}
//             points={points}
//             color={arc.color[0]}
//             lineWidth={2}
//           />
//         );
//       })}
//     </>
//   );
// };

// const GlobeComponent = () => {
//   const [arcsData, setArcsData] = useState<ArcData[]>([]);

//   useEffect(() => {
//     console.log("useEffect for generating random data called");

//     // Generate random data
//     const N = 20;
//     const colors = [
//       "red",
//       "white",
//       "blue",
//       "green",
//       "yellow",
//       "purple",
//       "orange",
//       "pink",
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
//     console.log("Generated arcsData:", JSON.stringify(data, null, 2));
//     setArcsData(data);
//   }, []);

//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />
//       <Stars />
//       <Globe />
//       <Arcs arcsData={arcsData} />
//       <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
//     </Canvas>
//   );
// };

// export default GlobeComponent;
