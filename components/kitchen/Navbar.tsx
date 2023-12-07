/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useSubsribeOrder } from "@/app/hooks/useSubscribeOrder";
import { pusherClient } from "@/pusherConfig";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaConciergeBell } from "react-icons/fa";
const Navbar = () => {
	const { notifications } = useSubsribeOrder();

	return (
		<>
			<header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-8 text-white flex justify-center">
				<nav className="flex justify-between w-full sm:w-[80rem]">
					<div>
						<div>Logo</div>
					</div>
					<div className="flex gap-4 items-center">
						<div>Profile</div>
						<div className=" relative w-8 h-8 flex justify-center items-center">
							<FaConciergeBell className="text-xl" />
							{notifications.length > 0 && (
								<div
									className={`w-4 h-4 bg-indigo-600 absolute -top-1 z-10 -right-1 text-[8px] flex items-center justify-center rounded-full ${
										notifications.length > 0 && "animate-pulse"
									}`}>
									{notifications.length}
								</div>
							)}
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
