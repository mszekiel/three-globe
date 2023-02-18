import { useControls } from "leva";

const Globe = () => {
  const { roughness, metalness } = useControls({
    roughness: { value: 1, min: 0, max: 5 },
    metalness: { value: 0, min: 0, max: 1 },
  });

  return (
    <>
      <mesh receiveShadow castShadow>
        <sphereGeometry args={[150, 50, 50]} />
        <meshStandardMaterial
          color="white"
          emissive="white"
          emissiveIntensity={0.5}
          roughness={roughness}
          metalness={metalness}
        />
      </mesh>
    </>
  );
};

export default Globe;
