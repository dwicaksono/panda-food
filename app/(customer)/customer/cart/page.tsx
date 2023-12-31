"use client";
import { createOrder, getOneOrder } from "@/app/actions/order.actions";
import { useAsyncStore } from "@/app/hooks/useAsyncStoreZus";
import CardCartFood from "@/components/customer/CardCartFood";
import { Loading } from "@/components/shared/Loading";
import { sumTotalPayment } from "@/utils/helpers";
import { useCartStore } from "@/zustand/cart.store";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCircleChevronLeft } from "react-icons/fa6";
const CartCustomer = () => {
	const { push, back } = useRouter();
	const params = useSearchParams();
	const queryParam = params?.get("table");

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { clearPersistedData } = useCartStore();
	const data = useAsyncStore(useCartStore, (state) => state.data);
	const totalPrice = sumTotalPayment(data);

	const handlerCheckout = async () => {
		setIsLoading(true);
		const orderItems = await data?.map((item) => ({
			...item,
			status: "waiting",
		}));
		const payload = { status: "waiting", total: totalPrice, orderItems };
		try {
			await createOrder(queryParam, payload);
		} catch (error) {
			console.log(error);
			throw error;
		} finally {
			setTimeout(async () => {
				setIsLoading(false);
				const order = await getOneOrder(queryParam);
				toast.success("Pembayaran anda berhasil, terimakasih", {
					position: "top-center",
				});
				await fetch("/api/pusher", {
					method: "POST",
					body: JSON.stringify({ status: "waiting", order }),
					headers: { "content-type": "application/json" },
				});
				clearPersistedData();
				push(`/customer/history?table=${queryParam}`);
			}, 1000);
		}
	};

	return (
		<section className="flex flex-col justify-center w-screen items-center scroll-m-0 overflow-y-auto">
			<div className="fixed top-0 left-0 right-0 z-50 mx-auto md:w-[768px] w-full">
				<button
					className="bg-glassBlur border border-slate-200/25 rounded-br-2xl flex gap-4 items-center p-4"
					onClick={() => back()}>
					<FaCircleChevronLeft className="text-2xl text-pink-600" />
					<p className="capitalize font-semibold text-sm text-slate-700">
						cart
					</p>
				</button>
			</div>

			<div className="my-20 md:w-[768px] md:px-24 w-full px-8 py-8">
				{data?.map((item) => (
					<CardCartFood key={item?.id} {...item} />
				))}
			</div>
			{isLoading && <Loading />}

			<div className="fixed bottom-0 left-0 right-0 z-50 mx-auto md:w-[768px] w-full">
				<div className="bg-glassBlur border border-slate-200/25 rounded-t-xl p-4">
					<div className="flex justify-between w-full">
						<div>
							<h4 className="text-md font-semibold text-orange-600">Total</h4>
							<p className="font-semibold text-lg">{totalPrice}</p>
						</div>
						<button
							className={`${
								isLoading ? "bg-slate-500" : "bg-gradient-orange"
							} px-8 shadow font-base drop-shadow-lg rounded-2xl text-slate-50`}
							onClick={handlerCheckout}
							disabled={isLoading}>
							{isLoading ? "...loading" : "Checkout"}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartCustomer;
