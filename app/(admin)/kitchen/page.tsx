import KitchenContent from "@/components/kitchen/KitchenContent";
import Navbar from "@/components/kitchen/Navbar";

export default function Kitchen() {
	return (
		<>
			<Navbar />
			<section className="flex flex-col p-8">
				<h1 className="text-indigo-500 font-semibold text-xl">
					Kitchen dashboard
				</h1>
				<div>
					<KitchenContent />
				</div>
			</section>
		</>
	);
}
