import BackComponent from "@/components/customer/Back";
import HistoryCard from "@/components/customer/HistoryCard";
import React from "react";

const History = async ({ searchParams }) => {
	// const orders = await getHistory(parseInt(searchParams.table));

	return (
		<section className="flex flex-col  items-center scroll-m-0overflow-y-auto">
			<div className="fixed top-0 left-0 right-0 z-50 mx-auto md:w-[768px] w-full">
				<BackComponent />
			</div>
			<div className="mt-16 h-[95vh] overflow-y-scroll scroll-m-0 scroll-smooth  md:w-[768px] md:px-24 px-8 flex flex-col gap-4 w-full">
				<HistoryCard table={searchParams.table} />
			</div>
		</section>
	);
};

export default History;
