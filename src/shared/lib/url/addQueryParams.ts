export const getQueryParams = (params: Partial<Record<string, string>>) => {
	const searchParams = new URLSearchParams(window.location.search);

	Object.entries(params).forEach(([key, value]) => {
		if (value) {
			searchParams.set(key, value);
		} else {
			searchParams.delete(key);
		}
	});
	const stringParams = searchParams.toString();

	return stringParams.length > 0 ? `?${stringParams}` : "";
};

export const addQueryParams = (params: Partial<Record<string, string>>) => {
	window.history.pushState(null, "", getQueryParams(params));
};
