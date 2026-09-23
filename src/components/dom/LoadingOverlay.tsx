import { useSceneStore } from '../../stores/sceneStore';

export function LoadingOverlay() {
    const isLoading = !useSceneStore((state) => state.isWatchReady);

    return (
        <div className="loading-overlay" data-active={String(isLoading)}>
            Loading. . .
        </div>
    );
}
