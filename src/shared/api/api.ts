import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/constants";

export const Api = axios.create({
	baseURL: __API__,
});

Api?.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
	}

	return config;
});
