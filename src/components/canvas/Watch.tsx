import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';

const MODEL_URL = '/models/ChronographWatch.glb';
const TOTAL_ANGLE = Math.PI * 2;
const OFFSET = [-0.0485, 0.044, 1.942] as const;

export function Watch() {
    const gltf = useGLTF(MODEL_URL);
    const groupRef = useRef<Group>(null);

    useFrame((_state, _delta) => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;

        const t = Math.max(0, Math.min(1, window.scrollY / scrollable));

        if (!groupRef.current) return;
        groupRef.current.rotation.y = t * TOTAL_ANGLE;
    });
    return (
        <group ref={groupRef}>
            <group position={OFFSET}>
                <primitive object={gltf.scene} />
            </group>
        </group>
    );
}
