import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StorageKeys } from "../constants/localstorage";
import { LocalStorage } from "../lib/localStorage/localStorage";

export const rtkApi = createApi({
	reducerPath: "rtkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = LocalStorage.getItem(StorageKeys.USER_LOCALSTORAGE_KEY);
			if (token) {
				headers.set("authorization", token);
			}
			return headers;
		},
	}),
	endpoints: () => ({}),
});
