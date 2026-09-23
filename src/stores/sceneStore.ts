import { create } from 'zustand';

type StoreState = {
    isWatchReady: boolean;
    markWatchReady: () => void;
};

export const useSceneStore = create<StoreState>()((set) => ({
    isWatchReady: false,
    markWatchReady: () => {
        set({ isWatchReady: true });
    },
}));
