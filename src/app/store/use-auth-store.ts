import { create } from "zustand";

interface AuthState {
  token: string;
  login: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") ?? "",
  login: (token: string) => set(() => ({ token })),
}));
