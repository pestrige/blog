import { toggleFeatures } from "@/shared/lib";

export const usePageClassName = () => {
	return toggleFeatures({
		name: "isAppRedesigned",
		on: () => "page-redesigned",
		off: () => "page",
	});
};
