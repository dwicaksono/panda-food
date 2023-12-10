import { getMenu } from "@/app/actions/menu.actions";
import KitchenContent from "@/components/kitchen/KitchenContent";
import Navbar from "@/components/kitchen/Navbar";

export default function Kitchen() {
	return (
		<>
			<Navbar />
			<section className="flex justify-between bg-[#EEEEEE]">
				<div className="flex flex-col p-8 ">
					<h1 className="text-indigo-500 font-semibold text-xl">
						Kitchen dashboard
					</h1>
					<KitchenContent />
				</div>
				<div className="bg-[#F6F6F6] border-2 h-screen p-8 drop-shadow-xl">
					<h4 className="font-semibold text-lg text-indigo-600">Orders</h4>
					<div>Tab</div>
					<div className="min-w-[300px] rounded-lg p-4 bg-slate-50 drop-shadow-md flex flex-col">
						Card
					</div>
				</div>
			</section>
		</>
	);
}
