"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createOrder(params, orderItems) {
	try {
		const customer = await prisma.customer.findFirst({
			where: {
				tableNumber: parseInt(params),
			},
		});
		await prisma.order.create({
			data: {
				customerId: customer?.id,
				...orderItems,
			},
		});
	} catch (error: any) {
		throw new Error("oops something went wrong", error);
	}
}
export async function getOneOrder(params) {
	try {
		const customer = await prisma.customer.findFirst({
			where: {
				tableNumber: parseInt(params),
			},
		});

		const order = await prisma.order.findFirst({
			where: {
				customerId: customer?.id,
			},
		});
		return {
			...order,
			customerName: customer?.name,
			tableNumber: customer?.tableNumber,
		};
	} catch (error: any) {
		throw new Error("oops something went wrong", error);
	}
}

export async function getAllOrder(params) {
	const { pageNumber = 1, pageSize = 10 } = params;
	const skipAmount = (pageNumber - 1) * pageSize;
	try {
		const orders = await prisma.order.findMany({
			include: {
				customer: {
					select: {
						name: true,
						tableNumber: true,
					},
				},
			},
			skip: skipAmount,
			take: pageSize,
			orderBy: { createdAt: "asc" },
		});
		return orders;
	} catch (error: any) {
		throw new Error("oops something went wrong", error);
	}
}

export async function updateStatueOrder(param) {
	try {
		const orders = await prisma.order.findUnique({
			where: { id: param },
		});

		if (!orders) {
			throw new Error("Data not found");
		}
		const orderItems = orders?.orderItems;
		orderItems?.forEach((el) => {
			if (el.status === "waiting") {
				el.status = "cooking";
			} else if (el.status === "cooking") {
				el.status = "ready";
			}
		});

		await prisma.order.update({
			where: { id: param },
			data: {
				status: orders.status === "waiting" ? "inprogress" : "done",
				orderItems: orderItems,
			},
		});

		revalidatePath("/kitchen");
		return { message: "ok" };
	} catch (error: any) {
		throw new Error("oops something went wrong", error);
	}
}

export async function getHistory(params) {
	try {
		const customer = await prisma.customer.findFirst({
			where: {
				tableNumber: parseInt(params),
			},
		});
		const orders = await prisma.order.findMany({
			where: {
				customerId: customer?.id,
			},
			include: {
				customer: {
					select: { name: true, tableNumber: true },
				},
			},
		});
		return orders;
	} catch (error: any) {
		throw new Error("oops something went wrong", error);
	}
}
