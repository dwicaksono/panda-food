"use client";
import { getImageExtension } from "@/lib/helpers";
import Image from "next/image";
import React from "react";

const Preview = ({
	file64,
	cancelPreview,
}: {
	file64: string;
	cancelPreview: () => void;
}) => {
	return (
		<div className="relative w-full h-fit">
			<div
				className="bg-indigo-500/60 text-white absolute z-10 right-0 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-indigo-500/50"
				onClick={cancelPreview}>
				X
			</div>
			<div className="w-full h-[350px] relative object-cover bg-center bg-no-repeat">
				<Image
					src={`data:image/${getImageExtension(file64)};base64,${file64}`}
					alt="Preview"
					fill
					className="object-cover"
				/>
			</div>
		</div>
	);
};

export default Preview;
