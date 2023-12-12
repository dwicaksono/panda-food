"use client";

import { mappingTable } from "@/utils/helpers";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { MdOutlineExpand, MdSettingsPhone } from "react-icons/md";
const KitchenContent = ({ orders }) => {
	const [isOpen, setIsOpen] = useState(false);

	const tablesContent = useMemo(() => {
		const tableNumbers = [7, 8, 9, 10];
		return tableNumbers.map((tableNumber) => {
			const tableData = mappingTable(tableNumber, orders);
			return (
				<div
					key={tableNumber}
					className={`p-[1px] ${
						!!tableData ? "bg-gradient-emerlad" : "bg-gradient-orange"
					} h-fit rounded-xl`}>
					<div className="bg-slate-50 drop-shadow-md p-6 rounded-xl min-h-[150px]">
						<div className="border-b-[1px] flex justify-between">
							<h3 className="text-sm font-semibold">Table {tableNumber}</h3>

							<p
								className={`text-xs text-white px-5 rounded-full flex items-center capitalize drop-shadow-md ${
									!!tableData ? "bg-indigo-500" : "bg-pink-600"
								}`}>
								{tableData ? "Active" : "empty"}
							</p>
						</div>

						<div>
							<p className="text-sm">
								Customer Name: {tableData?.customer?.name || "-"}
							</p>
							<p className="text-sm">Status: {tableData?.status || "-"}</p>
							<p className="text-sm">Total: {tableData?.total || "-"}</p>
							{!!tableData && (
								<div
									className="flex justify-end cursor-pointer"
									onClick={() => setIsOpen((prev) => !prev)}>
									<MdOutlineExpand />
								</div>
							)}
						</div>
						{isOpen && (
							<div className="border-t-[1px] gap-3 flex flex-col py-6">
								{tableData?.orderItems?.map((order: any) => (
									<div
										key={order.id}
										className="flex justify-between items-center">
										<div className="w-20 h-20 relative object-cover bg-slate-500 rounded-md overflow-hidden bg-center bg-no-repeat">
											<Image
												src={order.srcUrl}
												alt="image"
												fill
												className="object-cover"
											/>
										</div>
										<div className="text-right text-xs">
											<p>order title: {order.title}</p>
											<p>qty: {order.qty}</p>
											<p>status: {order.status}</p>
											<div className="flex justify-between gap-3 mt-3 text-xs">
												<button className="bg-indigo-600 px-2 py-[2px] text-slate-50 rounded-full hover:bg-indigo-600/50">
													process
												</button>
												<button className="bg-orange-600 px-4 py-[2px] text-slate-50 rounded-full hover:bg-orange-600/50">
													cancel
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			);
		});
	}, [orders, isOpen]);

	return (
		<div className="flex flex-col gap-6 px-6 py-4">
			<h1 className="text-indigo-500 font-semibold text-xl">
				Kitchen dashboard
			</h1>
			<div className="grid grid-cols-3 gap-4">{tablesContent}</div>
		</div>
	);
};

export default KitchenContent;
