import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  // Reduce number of particles based on device performance
  const particleCount = window.innerWidth < 768 ? 1500 : 3000;
  const [sphere] = useState(() => random.inSphere(new Float32Array(particleCount), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  // Don't render on mobile devices with low performance
  const [isLowEnd] = useState(() => {
    // Simple heuristic for low-end devices
    return window.innerWidth < 768 && navigator.hardwareConcurrency <= 4;
  });

  if (isLowEnd) {
    return <div className='w-full h-auto absolute inset-0 z-[-1] bg-primary'></div>;
  }

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
