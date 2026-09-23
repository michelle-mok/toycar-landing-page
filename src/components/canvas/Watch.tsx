import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useRef } from 'react';
import type { Group } from 'three';
import { useSceneStore } from '../../stores/sceneStore';

const MODEL_URL = '/models/ChronographWatch-opt.glb';
const TOTAL_ANGLE = Math.PI * 2;
const OFFSET = [-0.0485, 0.044, 1.942] as const;
const SCRUB_SECONDS = 1;
const ENTRANCE_SCALE = 0.8;
const ENTRANCE_SECONDS = 1.2;

export function Watch() {
    const gltf = useGLTF(MODEL_URL);

    const groupRef = useRef<Group>(null);
    const entranceRef = useRef<Group>(null);
    const firstFrameSeen = useRef(false);

    useFrame(() => {
        if (useSceneStore.getState().isWatchReady) return;

        if (!firstFrameSeen.current) {
            firstFrameSeen.current = true;
            return;
        }

        useSceneStore.getState().markWatchReady();
    });

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

    useGSAP(() => {
        if (!entranceRef.current) return;

        gsap.from(entranceRef.current.scale, {
            x: ENTRANCE_SCALE,
            y: ENTRANCE_SCALE,
            z: ENTRANCE_SCALE,
            duration: ENTRANCE_SECONDS,
            ease: 'power2.out',
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
