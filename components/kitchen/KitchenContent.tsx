"use client";

import { createMenu } from "@/app/actions/menu.actions";
import { useSubsribeOrder } from "@/app/hooks/useSubscribeOrder";
import React from "react";

const KitchenContent = () => {
	const { notifications } = useSubsribeOrder();

	return (
		<div className="flex flex-col gap-6">
			<h1>KitchenContent</h1>
		</div>
	);
};

export default KitchenContent;
