import Navbar from "@/components/kitchen/Navbar";

export default function Kitchen() {
	return (
		<>
			<Navbar />
			<section className="flex flex-col">
				<h1>Home</h1>
				<div>
					{/* {notifications.map((item: any) => (
						<li key={item._id}>{JSON.stringify(item)}</li>
					))} */}
				</div>
			</section>
		</>
	);
}
