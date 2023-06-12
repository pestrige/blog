import { memo } from "react";
import { useTranslation } from "react-i18next";
import { TextDeprecated } from "@/shared/ui";
import { usePageClassName } from "@/shared/hooks";

const ForbiddenPage = memo((): JSX.Element => {
	const { t } = useTranslation();
	const pageClassName = usePageClassName();

	return (
		<main className={pageClassName} data-testid="ForbiddenPage">
			<TextDeprecated title={t("Доступ запрещен")} />
		</main>
	);
});

export default ForbiddenPage;
