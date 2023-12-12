import { PusherServer } from "@/lib/pusherConfig";

export default async function handler(req, res) {
	await PusherServer.trigger("kitchen", "kitchen", {
		...req.body,
	});
	res.json({ message: "completed" });
}
