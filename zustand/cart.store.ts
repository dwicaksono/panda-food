// store.ts
import state from "pusher-js/types/src/core/http/state";
import { create } from "zustand";
import { persist } from "zustand/middleware";

//Define the type for the store state
interface DataStoreState {
	data: any[];
	isNotification: boolean;
}

// Define the type for the store actions
interface DataStoreActions {
	addData: (newObject: any) => void;
	decreaseItem: (id: number | string) => void;
	increaseItem: (id: number | string) => void;
	clearPersistedData: () => void;
	deleteItem: (id: number | string) => void;
	setIsNotification: () => void;
}
const getInitialData = () => {
	if (typeof window !== "undefined") {
		const storedDataString = localStorage.getItem("myData");
		return storedDataString ? JSON.parse(storedDataString) : [];
	}
	return [];
};

// Define the store
export const useCartStore = create<DataStoreState & DataStoreActions>()(
	persist(
		(set) => ({
			data: getInitialData(),
			isNotification: false,
			addData: (newObject: any) => {
				set((state) => {
					const itemExists = state.data.find(
						(item) => item.id === newObject.id
					);

					if (itemExists) {
						const updatedData = state.data.map((item) => {
							if (item.id === newObject.id) {
								return {
									...item,
									qty: item.qty + 1,
									subPrice: (item.qty + 1) * newObject.price,
									// Calculate subPrice based on updated quantity
								};
							}
							return item;
						});

						return { data: updatedData };
					} else {
						return {
							data: [
								...state.data,
								{ ...newObject, qty: 1, subPrice: newObject.price },
							],
						};
					}
				});
			},

			increaseItem: (id: number | string) => {
				set((state) => {
					const increaseData = state.data.map((item) => {
						if (item.id === id) {
							return {
								...item,
								qty: item.qty + 1,
								subPrice: item.subPrice + item.price,
							};
						}
						return item;
					});
					return { data: increaseData };
				});
			},

			decreaseItem: (id: number | string) => {
				set((state) => {
					const decreaseData = state.data.map((item) => {
						if (item.id === id) {
							return {
								...item,
								qty: item.qty - 1,
								subPrice:
									item.subPrice <= item.price
										? item.price
										: item.subPrice - item.price,
							};
						}
						return item;
					});
					return { data: decreaseData };
				});
			},

			deleteItem: (id: number | string) => {
				set((state) => {
					const deletedState = state.data.filter((item) => item.id !== id);
					return { data: deletedState };
				});
			},

			clearPersistedData: () => {
				localStorage.removeItem("myCart"); // Clear the persisted data
				set({ data: [] }); // Reset the state to an empty array
			},

			setIsNotification: () => {
				set((state) => ({ isNotification: !state.isNotification }));
			},
		}),
		{
			name: "myCart", // Persist the data to localStorage under the 'myCart' key
			// storage: () => localStorage, // Use localStorage for persistence
		}
	)
);
