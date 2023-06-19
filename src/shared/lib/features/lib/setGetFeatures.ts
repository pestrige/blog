import { FeatureFlags } from "../../../types";
import { LocalStorage } from "../../localStorage/localStorage";
import { StorageKeys } from "../../../constants";

let featureFlags: FeatureFlags = {
	isAppRedesigned: LocalStorage.getItem(StorageKeys.LAST_DESIGN_LOCALSTORAGE_KEY) === "new",
};

export function setFeatureFlags(flags?: FeatureFlags): void {
	if (flags) {
		featureFlags = flags;
	}

	if (flags && "isAppRedesigned" in flags) {
		LocalStorage.setItem(StorageKeys.LAST_DESIGN_LOCALSTORAGE_KEY, flags.isAppRedesigned ? "new" : "old");
	}
}

export function getFeatureFlag(flag: keyof FeatureFlags): boolean {
	return featureFlags?.[flag] ?? true;
}

export function getAllFeatureFlags(): FeatureFlags {
	return featureFlags;
}
