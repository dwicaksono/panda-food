import Image from "next/image";
import React from "react";
import ChipsCategory from "../shared/ChipsCategory";

const Category = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between items-center px-6 text-sm text-slate-700 font-semibold">
				<h3>All Categories</h3>
				<p>See All</p>
			</div>
			<div className="flex gap-3 items-center w-full overflow-x-scroll scroll-m-0 scrol px-6 py-2">
				<ChipsCategory name="Ramen" src="/ramen.png" />
				<ChipsCategory name="Pasta" src="/pasta.png" />
				<ChipsCategory name="Mamam" src="/mamam.png" />
				<ChipsCategory name="Drinks" src="/drink.png" />
			</div>
		</div>
	);
};

export default Category;
