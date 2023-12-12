/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useSubsribeOrder } from "@/app/hooks/useSubscribeOrder";
import { useCartStore } from "@/zustand/cart.store";
import { FaConciergeBell } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";
const Navbar = () => {
	const { countNotif, setCountNotif } = useSubsribeOrder();
	const { setIsNotification } = useCartStore();
	const readNotif = () => {
		setIsNotification();
		setCountNotif(0);
	};
	return (
		<>
			<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-6 text-white flex justify-center">
				<nav className="flex justify-between w-full">
					<div>
						<div className="rounded-3xl w-10 h-10 bg-pink-500 text-center flex justify-center items-center text-indigo-500 text-3xl drop-shadow-xl border-4">
							<SiFoodpanda />
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<div className="h-10 w-10 rounded-full bg-slate-600 flex justify-center items-center">
							P
						</div>
						<div
							className=" relative w-8 h-8 flex justify-center items-center cursor-pointer"
							onClick={readNotif}>
							<FaConciergeBell className="text-xl" />
							{countNotif > 0 && (
								<div
									className={`w-4 h-4 bg-indigo-600 absolute -top-1 z-10 -right-1 text-[8px] flex items-center justify-center rounded-full ${
										countNotif > 0 && "animate-pulse"
									}`}>
									{countNotif}
								</div>
							)}
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
