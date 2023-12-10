import { SiFoodpanda } from "react-icons/si";

export const Loading = () => {
	return (
		<div className="w-screen h-screen z-50 bg-slate-400/50 absolute top-0 flex justify-center items-center">
			<div className="border-b-4 border-pink-600 rounded-full h-32 w-32 flex items-center animate-spin justify-center">
				<SiFoodpanda className="text-5xl text-orange-500 " />
			</div>
		</div>
	);
};
