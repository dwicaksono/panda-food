// store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

//Define the type for the store state
interface DataStoreState {
	data: any[]; // Adjust the type as per your data structure
}

// Define the type for the store actions
interface DataStoreActions {
	addData: (newObject: any) => void; // Adjust the type for newObject as per your data structure
	clearPersistedData: () => void;
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
			addData: (newObject: any) =>
				set((state) => ({ data: [...state.data, newObject] })),
			clearPersistedData: () => {
				localStorage.removeItem("myCart"); // Clear the persisted data
				set({ data: [] }); // Reset the state to an empty array
			},
		}),
		{
			name: "myCart", // Persist the data to localStorage under the 'myCart' key
			// storage: () => localStorage, // Use localStorage for persistence
		}
	)
);
