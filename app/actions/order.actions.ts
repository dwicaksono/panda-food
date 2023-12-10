import { prisma } from "@/lib/prisma";

export async function createOrder(params) {
	try {
		await prisma.order.create({
			data: {
				...params,
			},
		});
	} catch (error: any) {
		console.log(error);
		throw new Error("oops something went wrong", error);
	}
}
