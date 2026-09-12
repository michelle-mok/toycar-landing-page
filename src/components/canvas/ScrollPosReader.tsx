import { useFrame } from '@react-three/fiber';
import { FOV_DEGREES } from '../../config/scene';

const FRAME_FILL = 0.5;
const WATCH_SIZE = {
    width: 4.374,
    height: 5.816,
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
        const aspect = state.size.width / state.size.height;

        state.camera.position.z = fitDistance(
            WATCH_SIZE.width,
            WATCH_SIZE.height,
            aspect,
            FRAME_FILL,
        );

        state.camera.lookAt(0, 0, 0);
    });

    return null;
}
