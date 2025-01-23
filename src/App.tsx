import { Info, Cards } from './components/homepage'
import { Header, PMA } from './components/shared'
import Sketch from './components/shared/Sketch'
import { Canvas } from '@react-three/fiber'
import { useRef, useEffect } from 'react'

function App() {
  const mousePosition = useRef({ x: 0, y: 0 })

  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.current = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    }
  }

  useEffect(() => {
    window.addEventListener('pointermove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className='relative overflow-hidden'>
      <Canvas
        camera={{ position: [0, 0, 2], fov: 70 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          filter: 'blur(2px)'
        }}
      >
        <ambientLight intensity={0.5} />
        <Sketch mousePosition={mousePosition} />
      </Canvas>
      <Header />
      <Info />
      <Cards />
      <PMA />
    </main>
  )
}

export default App
