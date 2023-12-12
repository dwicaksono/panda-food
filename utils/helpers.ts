export const sumTotalPayment = (data) => {
	let sum = 0;

	if (data?.length > 0) {
		sum = data.reduce((accumulator, data) => {
			return accumulator + data?.subPrice;
		}, 0);
	}
	if (!isNaN(sum)) {
		const result = rupiahCurrency(sum);
		return result;
	}
};

export const rupiahCurrency = (value) => {
	const formatter = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	});

	const sumInIDR = formatter.format(value);
	return sumInIDR;
};

export const totalNotificationBadges = (data) => {
	let sum = 0;

	if (data?.length > 0) {
		sum = data.reduce((accumulator, data) => {
			return accumulator + data?.qty;
		}, 0);
	}
	return sum || 0;
};

export const mappingTable = (tableNumber, data) => {
	const isTableCorrect = data.find(
		(item) => item.customer.tableNumber === tableNumber
	);
	return isTableCorrect;
};
