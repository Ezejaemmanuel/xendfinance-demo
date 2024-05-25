// components/GlobeComponent.tsx
"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  // Auto-rotate the globe
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(
          "//unpkg.com/three-globe/example/img/earth-night.jpg"
        )}
      />
    </mesh>
  );
};

const GlobeComponent = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Stars />
      <Globe />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

export default GlobeComponent;
