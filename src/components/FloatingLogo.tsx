import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useTexture, Float } from '@react-three/drei';

function LogoPlane() {
  const texture = useTexture('/logo.png');

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <mesh>
        <planeGeometry args={[3.5, 3.5]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          alphaTest={0.1}
        />
      </mesh>
    </Float>
  );
}

function FloatingLogo() {
  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        position: 'relative'
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <pointLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#C4943A"
        />
        <pointLight
          position={[-5, -5, 5]}
          intensity={0.5}
          color="#FFD700"
        />
        <Suspense fallback={null}>
          <LogoPlane />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default FloatingLogo;
