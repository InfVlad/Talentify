import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserDataDto } from "@/types/auth.types";

interface UserState {
  user: UserDataDto | null;
  token: string | null;
  setUser: (user: UserDataDto) => void;
  setToken: (token: string | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage",
      //TODO: user data should not be saved, remove user when API with user data is ready
      partialize: (state) => ({ token: state.token, user: state.user }), // Persist only token, saving the id would be a security risk
    }
  )
);

// this is how we get the state outside of react components
export const getState = useUserStore.getState;
