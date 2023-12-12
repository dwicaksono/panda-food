import { prisma } from "@/lib/prisma";
import { table } from "console";

export async function createCustomer(params) {
	try {
		await prisma.customer.create({
			data: {
				...params,
			},
		});
	} catch (error: any) {
		console.log(error);
		throw new Error("oops something went wrong", error);
	}
}

export async function getCustomer(table) {
	try {
		const response = await prisma.customer.findFirst({
			where: {
				tableNumber: parseInt(table),
			},
		});
		return response;
	} catch (error: any) {
		console.log(error);
		throw new Error("oops something went wrong", error);
	}
}
