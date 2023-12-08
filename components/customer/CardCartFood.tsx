"use client";
import { rupiahCurrency } from "@/utils/helpers";
import { useCartStore } from "@/zustand/cart.store";
import Image from "next/image";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
const CardCartFood = (params) => {
	const { srcUrl, title, price, qty, _id } = params;

	const { decreaseItem, deleteItem, increaseItem } = useCartStore();
	return (
		<div className="flex items-end mb-8 justify-between gap-8 ">
			<div className="p-1 bg-gradient-orange drop-shadow-xl shadow-xl rounded-2xl">
				<div className="h-36 bg-center object-contain relative w-40 rounded-xl shadow-xl overflow-hidden">
					<Image
						src={srcUrl}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="w-full h-auto object-cover"
						quality={20}
					/>
				</div>
			</div>
			<div className="flex flex-col items-start w-full gap-3">
				<p className="text-xl font-semibold">{title}</p>
				<p className="text-sm font-semibold">{rupiahCurrency(price)}</p>
				<div className="flex justify-between items-center w-full gap-4">
					<button onClick={() => deleteItem(_id)}>
						<AiFillDelete className="text-2xl text-pink-600 cursor-pointer drop-shadow-md" />
					</button>

					<div className="flex justify-between bg-gradient-orange w-full items-center rounded-full p-2 drop-shadow-md">
						<button
							onClick={() => decreaseItem(_id)}
							disabled={qty <= 1}
							className={`text-xl ${
								qty <= 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-50"
							}`}>
							<FaCircleMinus />
						</button>

						<div className=" bg-slate-50 rounded-full w-10 text-sm text-center">
							{qty}
						</div>

						<button
							onClick={() => increaseItem(_id)}
							disabled={false}
							className={"text-xl text-slate-50"}>
							<FaCirclePlus />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardCartFood;
