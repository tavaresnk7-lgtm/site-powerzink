import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import canTexture from '../assets/paint-can-label.png';

function Can({ autoRotate }: { autoRotate: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, canTexture);

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.repeat.set(1, 1);
  texture.offset.set(0, 0);

  useFrame((_, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  const bodyRadius = 1.15;
  const bodyHeight = 2.6;

  return (
    <group ref={groupRef}>
      {/* Corpo da lata */}
      <mesh castShadow>
        <cylinderGeometry args={[bodyRadius, bodyRadius, bodyHeight, 64, 1, true]} />
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.35} side={THREE.DoubleSide} />
      </mesh>
      {/* Aro superior (metálico) */}
      <mesh position={[0, bodyHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[bodyRadius + 0.04, bodyRadius + 0.04, 0.12, 64]} />
        <meshStandardMaterial color="#c8ccce" metalness={0.95} roughness={0.25} />
      </mesh>
      {/* Tampa superior */}
      <mesh position={[0, bodyHeight / 2 + 0.06, 0]}>
        <cylinderGeometry args={[bodyRadius + 0.02, bodyRadius + 0.02, 0.02, 64]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Aro inferior (metálico) */}
      <mesh position={[0, -bodyHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[bodyRadius + 0.04, bodyRadius + 0.04, 0.1, 64]} />
        <meshStandardMaterial color="#c8ccce" metalness={0.95} roughness={0.25} />
      </mesh>
      {/* Alça — arco simétrico acima da tampa */}
      <mesh position={[0, bodyHeight / 2 + 0.07, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[bodyRadius - 0.15, 0.03, 16, 128, Math.PI]} />
        <meshStandardMaterial color="#555555" metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <cylinderGeometry args={[1.15, 1.15, 2.6, 32]} />
      <meshStandardMaterial color="#2E7D32" opacity={0.3} transparent />
    </mesh>
  );
}

export default function PaintCan3D() {
  const [interacting, setInteracting] = useState(false);
  return (
    <div className="relative w-full aspect-[4/3] cursor-grab active:cursor-grabbing">
      <Canvas
        shadows
        camera={{ position: [0, 0.5, 7.5], fov: 40 }}
        onPointerDown={() => setInteracting(true)}
        onPointerUp={() => setInteracting(false)}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} />
        <spotLight position={[0, 6, 3]} intensity={0.8} angle={0.5} penumbra={1} />
        <Suspense fallback={<Loader />}>
          <Can autoRotate={!interacting} />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.35} scale={8} blur={2.5} far={4} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.6}
        />
      </Canvas>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-graphite-300 pointer-events-none select-none">
        Arraste para girar
      </div>
    </div>
  );
}
