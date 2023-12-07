import React from "react";
import { SiFoodpanda } from "react-icons/si";
const NavbarBottomCustomer = () => {
	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-glassBlur border-slate-200 border">
			<div className="relative flex h-full w-full py-4 px-6">
				<div className="bg-gradient-orange w-20 h-20 border rounded-full flex justify-center items-center absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<SiFoodpanda className="text-7xl font-bold" />
				</div>
				<div className="w-1/2 bg-pink-400">text</div>
				<div className="w-1/2 bg-yellow-300">text</div>
			</div>
		</nav>
	);
};

export default NavbarBottomCustomer;
