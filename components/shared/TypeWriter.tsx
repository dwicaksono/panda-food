"use client";
import React from "react";
import Typewriter from "typewriter-effect";
const TypeWriterComponent = () => {
	return (
		<Typewriter
			options={{
				strings: [
					"This slick web app, serving as a dummy guide, dives into real-time notifications using Pusher. I'm exploring mongoDB integration with Prisma, experimenting with server actions in nextjs 14, and rolling with Zustand for state management. It's a self-order food web app – a cool project where I'm leveling up my skills!",
				],
				autoStart: true,
				loop: true,
			}}
		/>
	);
};

export default TypeWriterComponent;
