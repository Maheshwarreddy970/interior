'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'

export default function Scene({activeMenu}) {
  return (
    <div className='fixed top-0 hidden bg-blend-screen lg:block	 h-full w-full'>
        <Canvas>
            <Model activeMenu={activeMenu}/>
        </Canvas>
    </div>
  )
}