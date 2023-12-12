"use client";
import { getAllOrder, getHistory } from "@/app/actions/order.actions";
import { useSubsribeKitchen } from "@/app/hooks/useSubscribeKitchen";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineExpand } from "react-icons/md";

const HistoryCard = ({ table }) => {
	const { notifications } = useSubsribeKitchen();
	const [orders, setOrders] = useState<any[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	console.log({ notifications });

	const getAllOrdersData = async (table) => {
		const ordersHistory = await getHistory(table);
		setOrders(ordersHistory);
	};
	useEffect(() => {
		getAllOrdersData(table);
	}, []);
	useEffect(() => {
		if (notifications) {
			getAllOrdersData(table);
			toast.success("History order updated");
		}
	}, [notifications]);
	return (
		!!orders &&
		orders.map((data) => (
			<div
				className="w-full rounded-xl drop-shadow-md p-6 bg-glassBlur border my-6"
				key={data.id}>
				<p className="text-xs font-semibold text-slate-400">
					table: {data.customer.tableNumber}
				</p>
				<h3 className="text-lg capitalize font-semibold">
					{data.customer.name}
				</h3>
				<p className="text-xs text-orange-400 font-semibold">{data.status}</p>
				<button
					className="flex justify-end w-full"
					onClick={() => setIsOpen((prev) => !prev)}>
					<MdOutlineExpand />
				</button>
				{isOpen && (
					<div className="border-t-[1px] mt-1 gap-3 flex flex-col pt-4">
						{data.orderItems.map((item) => (
							<div key={item.id}>
								<div className="flex items-center justify-between">
									<div className="w-20 h-20 relative object-cover bg-slate-500 rounded-md overflow-hidden bg-center bg-no-repeat">
										<Image
											src={item.srcUrl}
											alt="image"
											fill
											className="object-cover"
										/>
									</div>
									<div className="text-right text-xs">
										<p>order title: {item.title}</p>
										<p>qty: {item.qty}</p>
										<p>status: {item.status}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		))
	);
};

export default HistoryCard;
