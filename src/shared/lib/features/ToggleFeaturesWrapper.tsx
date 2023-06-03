import { FeatureFlags } from "../../types";
import { getFeatureFlag } from "./setGetFeatures";

interface Props {
	featureName: keyof FeatureFlags;
	on: JSX.Element;
	off: JSX.Element | null;
}

export const ToggleFeaturesWrapper = ({ featureName, on, off }: Props): JSX.Element => {
	if (getFeatureFlag(featureName)) {
		return on;
	}

	return off ?? <div />;
};
