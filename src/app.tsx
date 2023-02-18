import {
  OrbitControls,
  useHelper,
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { EffectComposer } from "three-stdlib";
import Globe from "./globe";

const Lights = () => {
  const { intensity, ambient } = useControls({
    intensity: { value: 2, min: 0, max: 10 },
    ambient: { value: 2, min: 0, max: 3 },
  });

  const light1 = useRef(null!);
  const light2 = useRef(null!);

  useHelper(light1, PointLightHelper, 10, "red");
  useHelper(light2, PointLightHelper, 10, "blue");

  return (
    <>
      <ambientLight color="white" intensity={ambient} />
      <pointLight
        position={[250, 500, 0]}
        intensity={intensity}
        color="#ecfeff"
        castShadow
        ref={light1}
      />
      <pointLight
        position={[250, 500, 125]}
        intensity={intensity}
        color="#06b6d4"
        castShadow
        ref={light2}
      />
    </>
  );
};

function App() {
  return (
    <div className="absolute inset-0">
      <Canvas className="w-full h-full">
        <color args={["white"]} attach="background" />
        <axesHelper args={[1000]} />
        <Lights />
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.01}
          minDistance={300}
          maxDistance={2000}
          rotateSpeed={0.8}
          autoRotate={false}
          zoomSpeed={1}
          enablePan={false}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3.5}
        />
        <group>
          <Globe />
        </group>
      </Canvas>
    </div>
  );
}

export default App;
