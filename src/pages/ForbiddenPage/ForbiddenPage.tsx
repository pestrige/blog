import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui";

const ForbiddenPage = memo((): JSX.Element => {
	const { t } = useTranslation();

	return (
		<main className="page">
			<Text title={t("Доступ запрещен")} />
		</main>
	);
});

export default ForbiddenPage;
