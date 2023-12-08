"use client";

import { useSubsribeOrder } from "@/app/hooks/useSubscribeOrder";
import React from "react";

const KitchenContent = () => {
	const { notifications } = useSubsribeOrder();
	return <div>KitchenContent</div>;
};

export default KitchenContent;
