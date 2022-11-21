import create from "zustand";
import { persist } from "zustand/middleware";

export const useBearStore = create(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      increasePopulationBy: (amount) =>
        set((state) => ({ bears: state.bears + amount })),
      removeAllBears: () => set({ bears: 0 }),

      mode: "dark",
      toggleMode: () =>
        set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
    }),
    {
      name: "bear-storage", // unique name
      // getStorage: () => sessionStorage,
    }
  )
);
