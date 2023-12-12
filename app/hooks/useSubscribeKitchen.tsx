import { pusherClient } from "@/lib/pusherConfig";
import { useState, useEffect } from "react";
import useSound from "use-sound";

export const useSubsribeKitchen = () => {
	const [playOn] = useSound("/sounds/message-incoming.mp3", {
		volume: 0.1,
		interrupt: true,
	});
	const [notifications, setNotifications] = useState<boolean>(false);
	useEffect(() => {
		const channel = pusherClient.subscribe("kitchen");

		channel.bind("kitchen", (data) => {
			if (!!data) {
				setNotifications(true);
				playOn();
			}
			setTimeout(() => {
				setNotifications(false);
			}, 1000);
		});

		return () => {
			setNotifications(false);
			pusherClient.unsubscribe("kitchen");
		};
	}, [notifications]);

	return { notifications };
};
