import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber' 
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.5: 0.75}
        position={isMobile ? [0, -2, -1.2] : [0, -3.25, -1.5]} 
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  )
}

const Car = () => {
  const car = useGLTF('./car/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={8}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        // castShadow
        shadow-mapSize={10000}
      />
      <primitive 
        object={car.scene}
        position={[0, -2.25, -0.5]}
        rotation={[-0.01, -0.2, -0.0]}
        scale={2.05} 
      />
    </mesh>
  )
}

const Doritos = () => {
  const doritos = useGLTF('./doritos/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={doritos.scene}
        scale={20.05} 
        position={[0, -1.75, -0.5]} 
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const Cube = () => {
  const cube = useGLTF('./cube/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={5}/>
      <spotLight 
        position={[-20, 10, 10]}
        angle={10}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={cube.scene}
        scale={30.05} 
        position={[0, -2.75, 0]} 
        rotation={[0, 2, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }

  }, [])
  
  return(
    <Canvas
      frameLoop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20,3,5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

const CarCanvas = () => {
  return(
    <Canvas
      frameLoop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20,3,5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

const DoritosCanvas = () => {
  return(
    <Canvas
      frameLoop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20,3,5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Doritos />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

const CubeCanvas = () => {
  return(
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20,3,5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cube />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}


function All3DModels(){
  return(
    <>
      {/* <CarCanvas /> */}
      <ComputersCanvas />
      {/* <DoritosCanvas /> */}
      {/* <CubeCanvas /> */}
    </>
  )
}

export default All3DModels;