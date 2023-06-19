import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUser } from "@/entities/User";
import { Select, SelectDeprecated } from "@/shared/ui";
import { getFeatureFlag, ToggleFeaturesWrapper, updateFeatureFlags } from "@/shared/lib";
import { useAppDispatch } from "@/shared/hooks";

export const UiDesignSwitcher = memo(function UiDesignSwitcher(): JSX.Element {
	const { t } = useTranslation("");
	const dispatch = useAppDispatch();
	const { id } = useUser();
	const isAppRedesigned = getFeatureFlag("isAppRedesigned");
	const [isLoading, setIsLoading] = useState(false);

	const items = [
		{ value: "new", content: t("Новый дизайн") },
		{ value: "old", content: t("Старый дизайн") },
	];

	const onChange = (value: string) => {
		if ((value === "new") === isAppRedesigned) {
			return;
		}
		setIsLoading(true);
		dispatch(updateFeatureFlags({ userId: id, newFeatures: { isAppRedesigned: value === "new" } }));
	};

	const selectProps = {
		value: isAppRedesigned ? "new" : "old",
		name: "UISwitcher",
		label: t("Выберите вариант интейрфейса"),
		options: items,
		isLoading,
		onChange,
	};

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<Select {...selectProps} />}
			off={<SelectDeprecated {...selectProps} />}
		/>
	);
});
