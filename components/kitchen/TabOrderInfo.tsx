"use client";

import { getAllOrder } from "@/app/actions/order.actions";
import { useCartStore } from "@/zustand/cart.store";
import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import CardOrderRightSide from "./CardOrderRightSide";
const TabOrderInfo = () => {
	const { setIsNotification, isNotification } = useCartStore();
	const [ordersData, setOrdersData] = useState<any[]>([]);
	const getDataOrder = async () => {
		const orders = await getAllOrder({});
		setOrdersData(orders);
	};

	useEffect(() => {
		if (isNotification) {
			getDataOrder();
		}
	}, [isNotification]);
	if (!isNotification) {
		return null;
	}
	return (
		<div className="bg-[#F6F6F6] border-2 h-screen p-8 drop-shadow-xl min-w-[300px]">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold text-lg text-indigo-600">Orders</h3>
				<button
					className="text-indigo-600 text-xl hover:animate-pulse hover:text-pink-600"
					onClick={() => setIsNotification()}>
					<FaWindowClose />
				</button>
			</div>
			<div className="flex flex-col gap-4 mt-4 h-[calc(100%-5%)] overflow-y-scroll">
				{ordersData.map((item) => (
					<CardOrderRightSide key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};

export default TabOrderInfo;
