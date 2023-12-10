import { getMenu } from "@/app/actions/menu.actions";
import HeaderCustomer from "@/components/customer/HeaderCustomer";
import CardFood from "@/components/shared/CardFood";

const CustomerHome = async ({ searchParams }) => {
	const response = await getMenu();
	return (
		<section className="flex flex-col justify-center w-screen items-center scroll-m-0 overflow-y-auto">
			<div className="w-full md:w-[768px] flex flex-col items-center justify-center">
				<HeaderCustomer table={searchParams.table} />
				<div className="h-[calc(100-17.5rem)] mt-64 overflow-y-scroll scroll-m-0 scroll-smooth p-8 grid grid-cols-2 gap-6 w-full">
					{response.map((menu) => (
						<CardFood key={menu.id} {...menu} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CustomerHome;
