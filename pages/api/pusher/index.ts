import Pusher from "pusher";

export const pusher = new Pusher({
	appId: "1719569" as string,
	key: "db1b5284ca7bd1b7fac3" as string,
	secret: "c01bbe3ee73b4f095137" as string,
	cluster: "ap1",
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
