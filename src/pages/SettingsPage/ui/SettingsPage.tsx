import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { usePageClassName } from "@/shared/hooks";
import { Text, VStack } from "@/shared/ui";
import { UiDesignSwitcher } from "@/features/UIDesignSwitcher";

const SettingsPage = memo(function SettingsPage(): JSX.Element {
	const { t } = useTranslation("");
	const pageClassName = usePageClassName();

	return (
		<main className={pageClassName}>
			<VStack gap={16}>
				<Text title={t("Страница настроек")} />
				<UiDesignSwitcher />
			</VStack>
		</main>
	);
});

export default SettingsPage;
