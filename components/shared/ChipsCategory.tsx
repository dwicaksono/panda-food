import Image from "next/image";
import React from "react";

const ChipsCategory = ({ name, src }) => {
	return (
		<div className="pr-4 rounded-full flex gap-2 items-center bg-gradient-emerlad drop-shadow-md">
			<div className="w-10 h-10 rounded-full flex justify-center items-center relative bg-white">
				<Image
					src={src}
					alt="icon-chips"
					fill
					className="object-contain"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<p className=" text-sm font-semibold text-white">{name}</p>
		</div>
	);
};

export default ChipsCategory;
