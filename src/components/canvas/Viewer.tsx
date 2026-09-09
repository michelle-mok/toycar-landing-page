import { Watch } from './Watch';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const CAMERA_POSITION: [number, number, number] = [1, 0, 11.41];
const FOV_DEGREES = 40;
const CONTROLS_MIN_DISTANCE = 8;
const CONTROLS_MAX_DISTANCE = 24;
const CONTROLS_TARGET: [number, number, number] = [0, 0, -1.94];

export function Viewer() {
    return (
        <Canvas
            style={{ height: '100dvh' }}
            camera={{ position: CAMERA_POSITION, fov: FOV_DEGREES }}
        >
            <Suspense fallback={null}>
                <Environment preset="studio" />
                <Watch />
            </Suspense>
            <OrbitControls
                enableDamping
                minDistance={CONTROLS_MIN_DISTANCE}
                maxDistance={CONTROLS_MAX_DISTANCE}
                target={CONTROLS_TARGET}
            />
            <axesHelper args={[5]} />
        </Canvas>
    );
}
