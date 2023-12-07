import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import Search from "../shared/Search";
import Category from "./Category";
import Link from "next/link";
const HeaderCustomer = ({ table }) => {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 mx-auto md:w-[768px] w-full">
			<div className="bg-glassBlur border border-slate-200/25 rounded-b-xl flex flex-col pb-4">
				<div className="flex justify-between items-center w-full  p-6  ">
					<div>
						<p className="font-semibold text-xs text-orange-500 drop-shadow-md">
							Table {table}
						</p>
						<p className="text-[10px] text-orange-500">
							Selamat makan,{" "}
							<span className="text-slate-700">Dimas wicaksono</span>
						</p>
					</div>
					<button className="bg-gradient-emerlad flex justify-center w-10 h-10 items-center rounded-full relative">
						<Link href="/customer/cart">
							<LuShoppingBag className="text-slate-100 text-2xl" />

							{/* <div className="absolute z-10 bg-gradient-orange text-slate-100 text-xs w-5 h-5 flex justify-center items-center rounded-full bottom-0 -left-2 shadow-md">
							1
						</div> */}
						</Link>
					</button>
				</div>

				<div className="w-full flex flex-col mt-4 px-6">
					<Search />
				</div>

				<div className="overflow-y-auto scroll-m-0 flex mt-4 flex-col scroll-smooth">
					<Category />
				</div>
			</div>
		</div>
	);
};

export default HeaderCustomer;
