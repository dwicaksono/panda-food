import Pusher from "pusher";

export const pusher = new Pusher({
	appId: process.env.NEXT_PUBLIC_PUSHER_ID!,
	key: process.env.NEXT_PUBLIC_KEY!,
	secret: process.env.NEXT_PUBLIC_SECRET!,
	cluster: process.env.NEXT_PUBLIC_CLUSTER!,
	useTLS: true,
});

export default async function handler(req, res) {
	const { order, name, payment } = req.body;
	await pusher.trigger("order", "order", {
		...req.body,
	});

	res.json({ message: "completed" });
}
