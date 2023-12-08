import { PusherServer } from "@/lib/pusherConfig";

export default async function handler(req, res) {
	console.log(req.body, "<<<<<<");
	await PusherServer.trigger("order", "order", {
		...req.body,
	});
	res.json({ message: "completed" });
}
