import { create } from "zustand";

interface SidebarMenuState {
  showMenu: boolean;
  toggleShowMenu: () => void;
  closeMenu: () => void;
}

export const useSidebarMenuStore = create<SidebarMenuState>()((set) => ({
  showMenu: true,
  toggleShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
  closeMenu: () => set({ showMenu: false }),
}));
