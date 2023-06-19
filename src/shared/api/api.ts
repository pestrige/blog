import axios from "axios";
import { StorageKeys } from "../constants/localstorage";
import { LocalStorage } from "../lib/localStorage/localStorage";

export const Api = axios.create({
	baseURL: __API__,
});

Api?.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.authorization = LocalStorage.getItem(StorageKeys.USER_LOCALSTORAGE_KEY) || "";
	}

	return config;
});
