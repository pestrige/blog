import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "@/shared/ui";
import { usePageClassName } from "@/shared/hooks";

const ForbiddenPage = memo((): JSX.Element => {
	const { t } = useTranslation();
	const pageClassName = usePageClassName();

	return (
		<main className={pageClassName} data-testid="ForbiddenPage">
			<Text title={t("Доступ запрещен")} />
		</main>
	);
});

export default ForbiddenPage;
