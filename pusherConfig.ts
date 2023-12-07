import Pusher from "pusher-js";

export const pusherClient = new Pusher("db1b5284ca7bd1b7fac3", {
	cluster: "ap1",
});
