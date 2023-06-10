import { memo } from "react";
import { useTranslation } from "react-i18next";
import { usePageClassName } from "@/shared/hooks";

const MainPage = memo((): JSX.Element => {
	const { t } = useTranslation();
	const pageClassName = usePageClassName();

	return (
		<main data-testid="MainPage" className={pageClassName}>
			{t("Главная страница")}
		</main>
	);
});

export default MainPage;
