import { classNames, toggleFeatures } from "@/shared/lib";

interface Arguments {
	isSmall?: boolean;
}

export const usePageClassName = (args?: Arguments) => {
	const { isSmall = false } = args || {};

	return toggleFeatures({
		name: "isAppRedesigned",
		on: () => classNames("page-redesigned", { "page-small": isSmall }),
		off: () => "page",
	});
};
