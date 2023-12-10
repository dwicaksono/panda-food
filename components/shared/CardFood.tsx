"use client";

import { useCartStore } from "@/zustand/cart.store";
import Image from "next/image";
import React from "react";
import { IoAddCircle } from "react-icons/io5";

const CardFood = (params) => {
	const { srcUrl, title, price, status, id } = params;
	const { addData } = useCartStore();
	const addItemHandle = () => {
		addData({ srcUrl, title, price, status, id });
	};

	return (
		<div className="rounded-xl shadow flex flex-col overflow-hidden drop-shadow-xl">
			<div
				className={`rounded-b-2xl object-fill relative bg-center overflow-hidden drop-shadow-lg h-[150px] ${
					!status && "grayscale"
				}`}>
				<Image
					src={srcUrl}
					alt={title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="w-full h-auto object-cover"
					quality={20}
				/>
			</div>
			<div className="py-2 px-3 flex items-end justify-between">
				<div className="text-slate-700">
					<p className="text-sm font-semibold capitalize">{title}</p>
					<p className="text-[10px] font-light">
						{status ? "available" : "out of stock"}
					</p>
					<p className="text-base font-semibold">Rp.{price}</p>
				</div>
				<button onClick={addItemHandle} disabled={!status}>
					<IoAddCircle
						className={`text-3xl drop-shadow-lg ${
							status ? "text-orange-600" : "text-slate-600"
						}`}
					/>
				</button>
			</div>
		</div>
	);
};

export default CardFood;
