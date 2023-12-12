"use client";
import { updateStatueOrder } from "@/app/actions/order.actions";
import { useCartStore } from "@/zustand/cart.store";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineExpand } from "react-icons/md";
const CardOrderRightSide = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { setIsNotification } = useCartStore();

	const handleActionOrder = async (type) => {
		if (type === "process") {
			const { message } = await updateStatueOrder(data.id);
			if (message === "ok") {
				fetch("/api/kitchenUpdate", {
					method: "POST",
					body: JSON.stringify({ message: "status updated" }),
					headers: { "content-type": "application/json" },
				});
			}
			setIsNotification();
		}
	};
	return (
		<div className="p-[1px] bg-gradient-emerlad rounded-lg">
			<div className="min-w-[400px] rounded-lg p-4 bg-slate-50 drop-shadow-md flex flex-col ">
				<div className="flex justify-between items-end">
					<div>
						<h4 className="text-base font-semibold text-slate-500 capitalize">
							{data.customer.name}
						</h4>
						<p className="capitalize text-xs font-semibold text-slate-500 ">
							Table number: {data.customer.tableNumber}
						</p>
						<p className="capitalize text-xs font-semibold text-orange-500 ">
							{data.status}
						</p>
					</div>
					<button
						className="text-slate-500 cursor-pointer"
						onClick={() => setIsOpen((prev) => !prev)}>
						<MdOutlineExpand />
					</button>
				</div>
				{isOpen && (
					<div className="border-t-[1px] mt-2">
						{data.orderItems.map((item) => (
							<div
								key={item.id}
								className="p-4 text-sm flex flex-col gap-2 border-b-[1px]">
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
										<div className="flex justify-between gap-3 mt-3 text-xs">
											<button
												className="bg-indigo-600 px-2 py-[2px] text-slate-50 rounded-full hover:bg-indigo-600/50"
												onClick={() => handleActionOrder("process")}>
												process
											</button>
											<button
												className="bg-orange-600 px-4 py-[2px] text-slate-50 rounded-full hover:bg-orange-600/50"
												onClick={() => handleActionOrder("cancel")}>
												cancel
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default CardOrderRightSide;
