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
    }),
    {
      name: "bear-storage", // unique name
      // getStorage: () => sessionStorage,
    }
  )
);
