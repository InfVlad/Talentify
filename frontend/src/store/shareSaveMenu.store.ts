import { create } from "zustand";

interface ShareSaveMenuState {
  showMenu: boolean;
  toggleShowMenu: () => void;
  closeMenu: () => void;
}

export const useShareSaveMenuStore = create<ShareSaveMenuState>()((set) => ({
  showMenu: false,
  toggleShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
  closeMenu: () => set({ showMenu: false }),
}));
