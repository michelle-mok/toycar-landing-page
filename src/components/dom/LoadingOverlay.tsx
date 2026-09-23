import { useProgress } from '@react-three/drei';

export function LoadingOverlay() {
    const isActive = useProgress((state) => state.active);

    return (
        <div className="loading-overlay" data-active={String(isActive)}>
            Loading. . .
        </div>
    );
}
