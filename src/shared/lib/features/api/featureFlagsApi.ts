import { rtkApi } from "../../../api";
import { FeatureFlags } from "../../../types";

interface UpdateFeatureFlagsOptions {
	userId: string;
	features: Partial<FeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOptions>({
			query: ({ userId, features }) => ({
				url: `/users/${userId}`,
				method: "PATCH",
				body: { features },
			}),
		}),
	}),
});

export const updateFeatureFlagMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate;
