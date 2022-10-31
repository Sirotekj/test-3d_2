import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Suspense } from "react";


const Scene = () => {
  const materials = useLoader(MTLLoader, "model/Bayraktar.mtl");
  const obj = useLoader(OBJLoader, "model/Bayraktar.obj", (loader) => {
  //const materials = useLoader(MTLLoader, "https://docs.rferl.org/Infographics/labs/Jakub/Test3D/model/Bayraktar.mtl");
  //const obj = useLoader(OBJLoader, "https://docs.rferl.org/Infographics/labs/Jakub/Test3D/model/Bayraktar.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={4} />;
};

function ModelObj(){
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  )
}

export default ModelObj;
