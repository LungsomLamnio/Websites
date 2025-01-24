import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MovableShape = ({ geometry, color, position }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      {geometry}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Movable3D = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Canvas shadows camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <pointLight position={[-5, -5, 5]} color="#ff9a9e" intensity={1} />

        <MovableShape
          geometry={<sphereGeometry args={[1, 32, 32]} />}
          color="#4c9eff"
          position={[-3, 0, 0]}
        />
        <MovableShape
          geometry={<boxGeometry args={[1, 1, 1]} />}
          color="#00f260"
          position={[0, 0, 0]}
        />
        <MovableShape
          geometry={<torusGeometry args={[0.7, 0.3, 16, 100]} />}
          color="#9be15d"
          position={[3, 0, 0]}
        />
        <MovableShape
          geometry={<cylinderGeometry args={[0.5, 0.5, 2, 32]} />}
          color="#ff9a9e"
          position={[6, 0, 0]}
        />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Movable3D;
