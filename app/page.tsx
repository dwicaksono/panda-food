/* eslint-disable react/no-unescaped-entities */
import TypeWriterComponent from "@/components/shared/TypeWriter";
import Link from "next/link";
import { SiFoodpanda } from "react-icons/si";

export default function Home() {
	return (
		<section className="flex flex-col justify-center items-center h-screen w-full gap-3 bg-gradient-emerlad">
			<div className="text-slate-100 font-bold text-5xl drop-shadow-lg">
				Food Panda
			</div>
			<div className="p-[2px] bg-gradient-orange rounded-full animate-bounce">
				<div className="rounded-full w-52 h-52 bg-glassBlur text-center flex justify-center items-center text-slate-100 text-9xl drop-shadow-xl border-4">
					<SiFoodpanda className="drop-shadow-lg" />
				</div>
			</div>
			<div className="w-80 text-xs text-center text-slate-700">
				<TypeWriterComponent />
			</div>
			<Link href="/kitchen" target="_blank">
				<button className="p-4 bg-gradient-orange font-bold text-white w-80 rounded-md">
					Kitchen
				</button>
			</Link>
			<Link href="/customer?table=9" target="_blank">
				<button className="p-4 bg-gradient-orange font-bold text-white w-80 rounded-md">
					as a user dwicaksono
				</button>
			</Link>
			<Link href="/customer?table=9" target="_blank">
				<button className="p-4 bg-gradient-orange font-bold text-white w-80 rounded-md">
					as a other Mewong
				</button>
			</Link>
			<Link href="http://dwicaksono.vercel.app/" target="_blank" passHref>
				<button className="text-xs text-slate-100">@dwicaksono</button>
			</Link>
		</section>
	);
}
