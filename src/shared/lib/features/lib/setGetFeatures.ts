import { FeatureFlags } from "@/shared/types";

let featureFlags: FeatureFlags = {};

export function setFeatureFlags(flags?: FeatureFlags): void {
	if (flags) {
		featureFlags = flags;
	}
}

export function getFeatureFlag(flag: keyof FeatureFlags): boolean {
	return featureFlags?.[flag] ?? true;
}

export function getAllFeatureFlags(): FeatureFlags {
	return featureFlags;
}
