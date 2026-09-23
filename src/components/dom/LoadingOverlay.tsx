import { useProgress } from '@react-three/drei';

export function LoadingOverlay() {
    const isLoading = useProgress((state) => state.active || state.total === 0);

    return (
        <div className="loading-overlay" data-active={String(isLoading)}>
            Loading. . .
        </div>
    );
}
