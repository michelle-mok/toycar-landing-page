import { Car } from './Car';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const CAMERA_POSITION: [number, number, number] = [0.652, 0.435, 1.003];
const FOV_DEGREES = 40;
const CONTROLS_MIN_DISTANCE = 0.8;
const CONTROLS_MAX_DISTANCE = 5;
const CONTROLS_MAX_POLAR_ANGLE = Math.PI / 2;
const CONTROLS_TARGET: [number, number, number] = [0, 0.15, 0];

export function Viewer() {
    return (
        <Canvas
            style={{ height: '100dvh' }}
            camera={{ position: CAMERA_POSITION, fov: FOV_DEGREES }}
        >
            <Suspense fallback={null}>
                <Environment preset="studio" />
                <Car />
            </Suspense>
            <OrbitControls
                enableDamping
                minDistance={CONTROLS_MIN_DISTANCE}
                maxDistance={CONTROLS_MAX_DISTANCE}
                maxPolarAngle={CONTROLS_MAX_POLAR_ANGLE}
                target={CONTROLS_TARGET}
            />
            <axesHelper args={[1.5]} />
        </Canvas>
    );
}
