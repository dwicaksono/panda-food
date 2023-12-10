import { prisma } from "@/lib/prisma";

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
