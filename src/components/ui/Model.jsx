import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { motion } from "framer-motion-3d"
import { animate, useMotionValue, useTransform } from 'framer-motion'
import { vertex, fragment } from './Shader'
import { useTexture, useAspect } from '@react-three/drei';
import useMouse from './useMouse';
import useDimension from './useDimension';
import data from '@/../data/home.json';

export default function Model({ activeMenu }) {

    const plane = useRef(null);  // Initialize with null
    const { viewport } = useThree();
    const dimension = useDimension();
    const mouse = useMouse();
    const opacity = useMotionValue(0);
    const textures = data.overview.info.map((project) => useTexture(project.image));
    const { width, height } = textures[0].image;
    const lerp = (x, y, a) => x * (1 - a) + y * a

    const scale = useAspect(
        width,
        height,
        0.225
    )
    const smoothMouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    useEffect(() => {
        if (plane.current && activeMenu != null) {
            plane.current.material.uniforms.uTexture.value = textures[activeMenu]
            animate(opacity, 1, { duration: 0.2, onUpdate: latest => plane.current.material.uniforms.uAlpha.value = latest })
        }
        else if (plane.current) {
            animate(opacity, 0, { duration: 0.2, onUpdate: latest => plane.current.material.uniforms.uAlpha.value = latest })
        }
    }, [activeMenu])

    const uniforms = useRef({
        uDelta: { value: { x: 0, y: 0 } },
        uAmplitude: { value: 0.0005 },
        uTexture: { value: textures[0] },
        uAlpha: { value: 0 }
    })

    useFrame(() => {
        if (!plane.current) return;  // Ensure plane.current exists

        const { x, y } = mouse
        const smoothX = smoothMouse.x.get();
        const smoothY = smoothMouse.y.get();

        if (Math.abs(x - smoothX) > 1) {
            smoothMouse.x.set(lerp(smoothX, x, 0.1))
            smoothMouse.y.set(lerp(smoothY, y, 0.1))
            plane.current.material.uniforms.uDelta.value = {
                x: x - smoothX,
                y: -1 * (y - smoothY)
            }
        }
    })

    const x = useTransform(smoothMouse.x, [0, dimension.width], [-1 * viewport.width / 2, viewport.width / 2])
    const y = useTransform(smoothMouse.y, [0, dimension.height], [viewport.height / 2, -1 * viewport.height / 2])

    return (
        <motion.mesh position-x={x} position-y={y} ref={plane} scale={scale}>
            <planeGeometry args={[1, 1, 15, 15]} />
            <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={uniforms.current}
                transparent={true}
            />
        </motion.mesh>
    )
}
