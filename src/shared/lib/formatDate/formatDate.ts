const DATE_LENGTH = 10;

export const formatDateToISO = (date: string): string => {
	const slicedDate = date.slice(0, DATE_LENGTH);

	if (date[2] === "." && date[5] === ".") {
		return slicedDate.split(".").reverse().join("-");
	}

	return slicedDate;
};
