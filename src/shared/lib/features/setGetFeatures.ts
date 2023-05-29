import { FeatureFlags } from "../../types/featureFlags";

let featureFlags: FeatureFlags = {};

export function setFeatureFlags(flags?: FeatureFlags): void {
	if (flags) {
		featureFlags = flags;
	}
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
	return featureFlags[flag];
}
