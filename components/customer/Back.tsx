"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

const BackComponent = () => {
	const { push } = useRouter();
	const searchParams = useSearchParams();
	const table = searchParams?.get("table");
	return (
		<button
			className="bg-glassBlur border border-slate-200/25 rounded-br-2xl flex gap-4 items-center p-4"
			onClick={() => push(`/customer?table=${table}`)}>
			<FaCircleChevronLeft className="text-2xl text-pink-600" />
			<p className="capitalize font-semibold text-sm text-slate-700">History</p>
		</button>
	);
};

export default BackComponent;
