import Pusher from "pusher-js";

export const pusherClient = new Pusher(process.env.NEXT_PUBLIC_KEY!, {
	cluster: "ap1",
});
