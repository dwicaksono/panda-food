import { create } from "zustand";

export const useCartStore = create((set) => ({
	carts: [],
	addCart: (cart) => set(() => console.log(cart)),
	// removeAllBears: () => set({ bears: 0 }),
}));
