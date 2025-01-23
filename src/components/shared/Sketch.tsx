/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface SketchProps {
  mousePosition: React.MutableRefObject<{ x: number; y: number }>
}

const Sketch: React.FC<SketchProps> = ({ mousePosition }) => {
  const pointsRef = useRef<THREE.Points>(null)

  const texture = useMemo(() => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const context = canvas.getContext('2d')
    if (context) {
      context.beginPath()
      context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
      context.fillStyle = 'white'
      context.fill()
    }
    return new THREE.CanvasTexture(canvas)
  }, [])

  const material = new THREE.PointsMaterial({
    size: 0.07,
    sizeAttenuation: true,
    alphaTest: 0.5,
    transparent: true,
    vertexColors: true,
    map: texture
  })

  const geometry = new THREE.BufferGeometry()
  const vertices: number[] = []
  const colors: number[] = [] 
  const colorStart = new THREE.Color('#4E6CB5')
  const colorEnd = new THREE.Color('#D38C4E')
  for (let i = 0; i < 100; i++) {
    const p = getPoint()
    vertices.push(4 * p.x, 4 * p.y, 4 * p.z)

    const color = colorStart.clone().lerp(colorEnd, i / 100)
    colors.push(color.r, color.g, color.b)
  }

  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  )

  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

  useFrame((state) => {
    const { x, y } = mousePosition.current
    state.camera.position.x += (x * 2 - state.camera.position.x) * 0.005
    state.camera.position.y += (y * 2 - state.camera.position.y) * 0.005
    // state.camera.lookAt(0, 0, 0)

    if (pointsRef.current) {
      pointsRef.current.rotation.x -= 0.001
      pointsRef.current.rotation.y += 0.001
    }
  })

  return <points ref={pointsRef} geometry={geometry} material={material} />
}

function getPoint() {
  const u = Math.random()
  const v = Math.random()
  const theta = u * 2.0 * Math.PI
  const phi = Math.acos(2.0 * v - 1.0)
  const r = Math.cbrt(Math.random())
  const sinTheta = Math.sin(theta)
  const cosTheta = Math.cos(theta)
  const sinPhi = Math.sin(phi)
  const cosPhi = Math.cos(phi)
  const x = r * sinPhi * cosTheta
  const y = r * sinPhi * sinTheta
  const z = r * cosPhi
  return { x, y, z }
}

export default Sketch
