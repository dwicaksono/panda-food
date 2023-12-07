import HeaderCustomer from "@/components/customer/HeaderCustomer";
import CardFood from "@/components/shared/CardFood";

const CustomerHome = ({ searchParams }) => {
	return (
		<section className="flex flex-col justify-center w-screen items-center scroll-m-0 overflow-y-auto">
			<div className="w-full md:w-[768px] flex flex-col items-center justify-center">
				<HeaderCustomer table={searchParams.table} />
				<div className="h-[calc(100-17.5rem)] mt-64 overflow-y-scroll scroll-m-0 scroll-smooth p-8 grid grid-cols-2 gap-6 w-full">
					{dummyMenus.map((menu) => (
						<CardFood key={menu._id} {...menu} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CustomerHome;

export const dummyMenus = [
	{
		_id: 1,
		srcUrl:
			"https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=3462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Ramen Cuy",
		price: 75000,
		status: true,
	},
	{
		_id: 2,
		srcUrl:
			"https://images.unsplash.com/photo-1614649672633-cb78b332a9a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Sangme",
		price: 55000,
		status: true,
	},
	{
		_id: 3,
		srcUrl:
			"https://plus.unsplash.com/premium_photo-1694029651670-d245f43fcf46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJhbWVufGVufDB8fDB8fHww",
		title: "Gotemba",
		price: 45000,
		status: true,
	},
	{
		_id: 4,
		srcUrl:
			"https://images.unsplash.com/photo-1596699691540-ea34b062cdc0?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Helsinki",
		price: 65000,
		status: true,
	},
	{
		_id: 5,
		srcUrl:
			"https://images.unsplash.com/photo-1603191916160-9c67af67c930?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Espana dora",
		price: 55000,
		status: true,
	},
	{
		_id: 6,
		srcUrl:
			"https://images.unsplash.com/photo-1584739206131-bb0910d6aade?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Vermicelli",
		price: 45000,
		status: true,
	},
	{
		_id: 7,
		srcUrl:
			"https://images.unsplash.com/photo-1535007813616-79dc02ba4021?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Quezon",
		price: 45000,
		status: true,
	},
	{
		_id: 8,
		srcUrl:
			"https://plus.unsplash.com/premium_photo-1694383409238-1b470d28d02d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Jaszowska",
		price: 70000,
		status: false,
	},
	{
		_id: 9,
		srcUrl:
			"https://images.unsplash.com/photo-1586692688152-ad0a37bc47fd?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Quezon",
		price: 45000,
		status: false,
	},
	{
		_id: 10,
		srcUrl:
			"https://plus.unsplash.com/premium_photo-1694383421398-45508158d278?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Laila",
		price: 45000,
		status: true,
	},
	{
		_id: 11,
		srcUrl:
			"https://images.unsplash.com/photo-1568096889942-6eedde686635?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Naha",
		price: 45000,
		status: false,
	},
	{
		_id: 12,
		srcUrl:
			"https://images.unsplash.com/photo-1591325418441-ff678baf78ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Ichiran ramen",
		price: 35000,
		status: true,
	},
	{
		_id: 13,
		srcUrl:
			"https://images.unsplash.com/photo-1625189657893-f8fd7b45a901?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Akhibara ramen",
		price: 65000,
		status: true,
	},
	{
		_id: 14,
		srcUrl:
			"https://images.unsplash.com/photo-1569239602012-e2b4575d1d40?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Natto mazesoba",
		price: 55000,
		status: true,
	},
	{
		_id: 15,
		srcUrl:
			"https://plus.unsplash.com/premium_photo-1694630151389-2d98d36b0e3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Natto mazesoba",
		price: 55000,
		status: true,
	},
	{
		_id: 16,
		srcUrl:
			"https://images.unsplash.com/photo-1637024696628-02cb19cc1829?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Miso mazesoba",
		price: 55000,
		status: true,
	},
	{
		_id: 17,
		srcUrl:
			"https://images.unsplash.com/photo-1638362920760-5644f703e03f?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Miso somi",
		price: 55000,
		status: true,
	},
	{
		_id: 18,
		srcUrl:
			"https://plus.unsplash.com/premium_photo-1694707235544-c9f6884d77d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Wojikmi",
		price: 55000,
		status: true,
	},
	{
		_id: 19,
		srcUrl:
			"https://plus.unsplash.com/premium_photo-1694547924559-dff9c96bf262?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Kotarominami",
		price: 70000,
		status: true,
	},
	{
		_id: 20,
		srcUrl:
			"https://plus.unsplash.com/premium_photo-1694383421398-45508158d278?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Burma",
		price: 70000,
		status: true,
	},
];
