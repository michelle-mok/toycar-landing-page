import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useRef } from 'react';
import type { Group } from 'three';

const MODEL_URL = '/models/ChronographWatch.glb';
const TOTAL_ANGLE = Math.PI * 2;
const OFFSET = [-0.0485, 0.044, 1.942] as const;
const SCRUB_SECONDS = 1;

export function Watch() {
    const gltf = useGLTF(MODEL_URL);
    const groupRef = useRef<Group>(null);
    const entranceRef = useRef<Group>(null);

    useGSAP(() => {
        if (!groupRef.current) return;
        gsap.to(groupRef.current.rotation, {
            y: TOTAL_ANGLE,
            ease: 'none',
            scrollTrigger: {
                trigger: document.documentElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: SCRUB_SECONDS,
            },
        });
    });
    return (
        <group ref={entranceRef}>
            <group ref={groupRef}>
                <group position={OFFSET}>
                    <primitive object={gltf.scene} />
                </group>
            </group>
        </group>
    );
}
