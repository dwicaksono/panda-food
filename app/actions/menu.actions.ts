"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function createMenu(params) {
	try {
		await prisma.menu.create({
			data: { ...params },
		});
	} catch (error) {
		console.log(error);
		throw new Error("oops something went wrong");
	}
}

export async function getMenu() {
	try {
		const response = await prisma.menu.findMany();
		return response;
	} catch (error) {
		throw new Error("oops something went wrong");
	}
}
