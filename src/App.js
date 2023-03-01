import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Model } from "./Shoe";
import "./styles.css";

export default function App() {
  const { color } = useControls({ color: "#b78135" });
  return (
    <div className="container">
      <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
        <Stage
          intensity={1}
          environment="city"
          shadows={{ type: "accumulative", color, colorBlend: 2, opacity: 2 }}
          adjustCamera={0.9}
        >
          <Model />
        </Stage>
        <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
