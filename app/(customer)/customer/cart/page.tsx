"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCircleChevronLeft } from "react-icons/fa6";
const CartCustomer = () => {
	const { back } = useRouter();
	const [isDone, setIsDone] = useState<boolean>(false);
	const handlerCheckout = () => {
		setIsDone(true);
		console.log("masuk");
		toast.success("Pembayaran anda berhasil, terimakasih", {
			position: "top-center",
		});
		back();
	};
	return (
		<section className="flex flex-col justify-center w-screen items-center scroll-m-0 overflow-y-auto">
			<div className="fixed top-0 left-0 right-0 z-50 mx-auto md:w-[768px] w-full">
				<button
					className="bg-glassBlur border border-slate-200/25 rounded-br-2xl flex gap-4 items-center p-4"
					onClick={() => back()}>
					<FaCircleChevronLeft className="text-2xl text-orange-600" />
					<p className="capitalize font-semibold text-sm text-slate-700">
						cart
					</p>
				</button>
			</div>

			<div className="fixed bottom-0 left-0 right-0 z-50 mx-auto md:w-[768px] w-full">
				<div className="bg-glassBlur border border-slate-200/25 rounded-t-xl p-4">
					<div className="flex justify-between w-full">
						<div>
							<h4 className="text-md font-semibold text-orange-600">Total</h4>
							<p className="font-semibold text-lg">Rp.259.000</p>
						</div>
						<button
							className={`${
								isDone ? "bg-slate-500" : "bg-orange-600"
							} px-8 shadow font-base drop-shadow-lg rounded-2xl text-slate-50`}
							onClick={handlerCheckout}
							disabled={isDone}>
							Checkout
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartCustomer;
