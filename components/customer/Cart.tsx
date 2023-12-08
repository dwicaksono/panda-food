"use client";
import { useAsyncStore } from "@/app/hooks/useAsyncStoreZus";
import { useCartStore } from "@/zustand/cart.store";
import Link from "next/link";
import React from "react";
import { LuShoppingBag } from "react-icons/lu";

const Cart = () => {
	const data: any = useAsyncStore(useCartStore, (state) => state.data);
	return (
		data?.length > 0 && (
			<Link href="/customer/cart">
				<div className="bg-gradient-emerlad flex justify-center w-10 h-10 items-center cursor-pointer rounded-full relative">
					<LuShoppingBag className="text-slate-100 text-2xl" />
					<div className="absolute z-10 bg-gradient-orange text-slate-100 text-xs w-5 h-5 flex justify-center items-center rounded-full bottom-0 -left-2 shadow-md">
						{data.length || 0}
					</div>
				</div>
			</Link>
		)
	);
};

export default Cart;
