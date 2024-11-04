import { create } from "zustand";

interface UserMenuState {
  showMenu: boolean;
  toggleShowMenu: () => void;
  closeMenu: () => void;
}

export const useUserMenuStore = create<UserMenuState>()((set) => ({
  showMenu: false,
  toggleShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
  closeMenu: () => set({ showMenu: false }),
}));
