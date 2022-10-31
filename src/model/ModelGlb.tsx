import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from "react";


function ModelGlb(){
  /*const gltf = useLoader(GLTFLoader, './BayraktarEmbedded.gltf');
  console.log(gltf);
  return (
    <Canvas>
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={0.4} />
      </Suspense>
    </Canvas>
  )*/
  return <></>
}

export default ModelGlb;
