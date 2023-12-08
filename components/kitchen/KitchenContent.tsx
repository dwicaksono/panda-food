"use client";

import { useSubsribeOrder } from "@/app/hooks/useSubscribeOrder";
import React from "react";

const KitchenContent = () => {
	const { notifications } = useSubsribeOrder();
	console.log(notifications, "<<< konetnt");
	return <div>KitchenContent</div>;
};

export default KitchenContent;
