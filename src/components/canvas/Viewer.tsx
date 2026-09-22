import { Watch } from './Watch';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { ScrollPosReader } from './ScrollPosReader';
import { FOV_DEGREES, TRANSMISSION_SCALE } from '../../config/scene';
import { Backdrop } from './Backdrop';

const CAMERA_OFFSET = [1, 0, 0] as const;

export function Viewer() {
    return (
        <Canvas
            camera={{ position: CAMERA_OFFSET, fov: FOV_DEGREES }}
            gl={{ transmissionResolutionScale: TRANSMISSION_SCALE }}
        >
            <Backdrop />
            <ScrollPosReader />
            <Suspense fallback={null}>
                <Environment preset="studio" />
                <Watch />
            </Suspense>
        </Canvas>
    );
}
