import { useFrame } from '@react-three/fiber';

const CAMERA_START_DISTANCE = 11.41;
const CAMERA_END_DISTANCE = 6.01;

export function ScrollPosReader() {
    useFrame((state) => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;

        const t = Math.max(0, Math.min(1, window.scrollY / scrollable));

        state.camera.position.z =
            CAMERA_START_DISTANCE + (CAMERA_END_DISTANCE - CAMERA_START_DISTANCE) * t;

        state.camera.lookAt(0, 0, 0);
    });

    return null;
}
