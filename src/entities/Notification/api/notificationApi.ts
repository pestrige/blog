import { rtkApi } from "shared/api";
import { Notification } from "../model/types/notifications";

const notificationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getNotifications: build.query<Notification[], null>({
			query: () => ({
				url: "/notifications",
			}),
		}),
	}),
});

export const { useGetNotificationsQuery: useNotifications } = notificationApi;
