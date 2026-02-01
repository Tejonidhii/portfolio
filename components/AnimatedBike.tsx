import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Bubble({ position }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        x: position.x * 100,
        y: position.y * 100,
      }}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.5, 0] }} // Bursting effect
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    />
  );
}

function AnimatedBike() {
  const bikeRef = useRef<THREE.Mesh>(null);
  const [bubbles, setBubbles] = useState([]);

  useFrame((state) => {
    // Move the bike along a circular path
    const t = state.clock.getElapsedTime();
    bikeRef.current.position.x = Math.sin(t) * 2; // Circular motion
    bikeRef.current.position.z = Math.cos(t) * 2; // Circular motion
  });

  const handleHover = () => {
    const bubblePosition = { x: bikeRef.current.position.x, y: bikeRef.current.position.y + 1 }; // Adjust Y for bubble position
    setBubbles((prev) => [...prev, bubblePosition]);
  };

  return (
    <>
      <mesh ref={bikeRef} onPointerOver={handleHover}>
        <boxGeometry args={[0.5, 0.2, 0.1]} />
        <meshStandardMaterial color="#ffcc00" />
      </mesh>
      {bubbles.map((position, index) => (
        <Bubble key={index} position={position} />
      ))}
    </>
  );
}

function AnimatedCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame((state) => {
    // Move the camera along a path
    const t = state.clock.getElapsedTime();
    cameraRef.current.position.x = Math.sin(t) * 5;
    cameraRef.current.position.y = 2; // Height
    cameraRef.current.position.z = Math.cos(t) * 5;
    cameraRef.current.lookAt(0, 0, 0); // Look at the center
  });

  return (
    <perspectiveCamera ref={cameraRef} fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={1000} />
  );
}

export default function AnimatedScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AnimatedCamera />
      <AnimatedBike />
    </Canvas>
  );
}
