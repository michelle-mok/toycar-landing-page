import { useGLTF } from '@react-three/drei';

const MODEL_URL = '/models/ChronographWatch.glb';

export function Watch() {
    const gltf = useGLTF(MODEL_URL);

    return <primitive object={gltf.scene} />;
}
