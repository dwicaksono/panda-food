"use server";

import { connectToDatabase } from "../mongoose";
import type { ICreateProductParams } from "./shared.type";

export async function createProduct(params: ICreateProductParams) {
	try {
		connectToDatabase();
		const { description, image, name, qty, barcode } = params;
		console.log({ description, image, name, qty, barcode }, "Actions");
	} catch (error) {
		throw error;
	}
}
