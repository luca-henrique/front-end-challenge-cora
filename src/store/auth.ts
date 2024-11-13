import { create } from "zustand";

export const useStore = create(() => ({
  token: localStorage.getItem("token") || "",
}));
