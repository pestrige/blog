import { rtkApi } from "@/shared/api";
import { User } from "../model/types/user";
import { JsonSettings } from "../model/types/jsonSettings";

interface SetJsonSettingsArgs {
	userId: string;
	jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
			query: ({ userId, jsonSettings }) => ({
				url: `/users/${userId}`,
				method: "PATCH",
				body: { jsonSettings },
			}),
		}),
	}),
});

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
