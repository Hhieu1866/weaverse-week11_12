import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../data/products";

interface RecentlyViewedStore {
  items: Product[];
  addItem: (product: Product) => void;
  clearAll: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const filtered = state.items.filter((item) => item.id !== product.id);
          return {
            items: [product, ...filtered].slice(0, 10),
          };
        }),
      clearAll: () => set({ items: [] }),
    }),
    {
      name: "recently-viewed-storage",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
