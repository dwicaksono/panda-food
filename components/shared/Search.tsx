import React from "react";
import { RiLoopLeftFill } from "react-icons/ri";

const Search = () => {
	return (
		<div className="border rounded-xl flex items-center p-4 gap-2">
			<RiLoopLeftFill className="text-slate-500" />
			<input
				className="outline-none border-none w-full p-0 text-xs bg-transparent focus:outline-none focus:ring-transparent"
				placeholder="Search"
			/>
		</div>
	);
};

export default Search;
