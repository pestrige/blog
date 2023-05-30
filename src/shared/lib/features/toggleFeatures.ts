import { FeatureFlags } from "@/shared/types";
import { getFeatureFlag } from "@/shared/lib";

export interface ToggleFeaturesOptions<T> {
	name: keyof FeatureFlags;
	on: () => T;
	off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>): T {
	if (getFeatureFlag(name)) {
		return on();
	}

	return off();
}
