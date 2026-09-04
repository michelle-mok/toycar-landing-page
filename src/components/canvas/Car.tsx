import { useGLTF } from '@react-three/drei';

const MODEL_URL = '/models/ToyCar-nodrape.glb';
// scaled so that the model is 1 unit long
const MODEL_SCALE = 26;

export function Car() {
    const gltf = useGLTF(MODEL_URL);

    return <primitive object={gltf.scene} scale={MODEL_SCALE} />;
}
