import Pusher from "pusher-js";
import Pusherserver from "pusher";

export const pusherClient = new Pusher(process.env.NEXT_PUBLIC_KEY!, {
	cluster: "ap1",
});

export const PusherServer = new Pusherserver({
	appId: process.env.NEXT_PUBLIC_PUSHER_ID!,
	key: process.env.NEXT_PUBLIC_KEY!,
	secret: process.env.NEXT_PUBLIC_SECRET!,
	cluster: process.env.NEXT_PUBLIC_CLUSTER!,
	useTLS: true,
});
