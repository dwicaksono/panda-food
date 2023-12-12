import { getAllOrder } from "@/app/actions/order.actions";
import CardOrderRightSide from "@/components/kitchen/CardOrderRightSide";
import KitchenContent from "@/components/kitchen/KitchenContent";
import Navbar from "@/components/kitchen/Navbar";
import dynamic from "next/dynamic";
const TabOrderInfoDynamic = dynamic(
	() => import("@/components/kitchen/TabOrderInfo"),
	{ ssr: false }
);

export default async function Kitchen({ searchParams }) {
	const orders = await getAllOrder({ pageNumber: 1, pageSize: 10 });
	return (
		<section className="flex justify-between h-screen bg-[#EEEEEE]">
			<div className="flex flex-col w-full">
				<Navbar />
				<KitchenContent orders={orders} />
			</div>
			<TabOrderInfoDynamic />
		</section>
	);
}
