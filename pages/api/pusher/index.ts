import Pusher from "pusher";

export const pusher = new Pusher({
	appId: process.env.NEXT_PUBLIC_PUSHER_ID as string,
	key: process.env.NEXT_PUBLIC_KEY as string,
	secret: process.env.NEXT_PUBLIC_SECRET as string,
	cluster: process.env.NEXT_PUBLIC_CLUSTER as string,
	useTLS: true,
});

export default async function handler(req, res) {
	const { order, name, payment } = req.body;
	console.log(req);
	await pusher.trigger("order", "order", {
		name,
		order,
		payment,
	});

	res.json({ message: "completed" });
}
