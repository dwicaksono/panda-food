import { pusherClient } from "@/lib/pusherConfig";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useSound from "use-sound";

export const useSubsribeOrder = () => {
	const [playOn] = useSound("/sounds/message-incoming.mp3", {
		volume: 0.1,
		interrupt: true,
	});
	const [notifications, setNotifications] = useState<any>({});
	const [countNotif, setCountNotif] = useState<number>(0);
	useEffect(() => {
		const channel = pusherClient.subscribe("order");

		channel.bind("order", (data) => {
			if (!!data) {
				setNotifications(data);
				setCountNotif(countNotif + 1);
				playOn();
				toast.custom((t) => (
					<div
						className={`${
							t.visible ? "animate-enter" : "animate-leave"
						} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
						<div className="flex-1 w-0 p-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 pt-0.5"></div>
								<div className="ml-3 flex-1">
									<p className="text-sm font-medium text-gray-900">
										{data.order.customerName}
									</p>
									<p className="mt-1 text-sm text-gray-500">
										Table {data.order.tableNumber || 0}
									</p>
									<p className="mt-1 text-sm text-gray-500">
										{data.order.status}
									</p>
								</div>
							</div>
						</div>
						<div className="flex border-l border-gray-200">
							<button
								onClick={() => toast.dismiss(t.id)}
								className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
								Close
							</button>
						</div>
					</div>
				));
			}
		});

		return () => {
			pusherClient.unsubscribe("order");
		};
	}, [notifications, playOn]);

	return { notifications, countNotif, setCountNotif };
};
