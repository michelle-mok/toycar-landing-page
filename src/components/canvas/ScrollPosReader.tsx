import { useFrame } from '@react-three/fiber';
import { FOV_DEGREES } from '../../config/scene';

let CAMERA_START_DISTANCE: number | null = null;
let CAMERA_END_DISTANCE: number | null = null;
const FRAME_FILL = 0.5;
const WATCH_SIZE = {
    width: 4.374,
    height: 5.816,
};
const CRYSTAL_SIZE = {
    width: 2.626,
    height: 2.626,
};

function fitDistance(width: number, height: number, aspect: number, fill: number): number {
    const fov = FOV_DEGREES * (Math.PI / 180);
    const halfAngle = Math.tan(fov / 2);

    const dVertical = height / 2 / halfAngle;
    const dHorizontal = width / 2 / (halfAngle * aspect);

    return Math.max(dHorizontal, dVertical) / fill;
}

export function ScrollPosReader() {
    useFrame((state) => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;

        const t = Math.max(0, Math.min(1, window.scrollY / scrollable));

        const aspect = state.size.width / state.size.height;
        CAMERA_START_DISTANCE = fitDistance(
            WATCH_SIZE.width,
            WATCH_SIZE.height,
            aspect,
            FRAME_FILL,
        );
        CAMERA_END_DISTANCE = fitDistance(
            CRYSTAL_SIZE.width,
            CRYSTAL_SIZE.height,
            aspect,
            FRAME_FILL,
        );

        state.camera.position.z =
            CAMERA_START_DISTANCE + (CAMERA_END_DISTANCE - CAMERA_START_DISTANCE) * t;

        state.camera.lookAt(0, 0, 0);
    });

    return null;
}
