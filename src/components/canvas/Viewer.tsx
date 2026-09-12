import { Watch } from './Watch';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { ScrollPosReader } from './ScrollPosReader';

const CAMERA_POSITION: [number, number, number] = [1, 0, 11.41];
const FOV_DEGREES = 40;

export function Viewer() {
    return (
        <Canvas camera={{ position: CAMERA_POSITION, fov: FOV_DEGREES }}>
            <Suspense fallback={null}>
                <Environment preset="studio" />
                <Watch />
            </Suspense>
        </Canvas>
    );
}
