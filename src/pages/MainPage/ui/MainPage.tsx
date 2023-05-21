import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo((): JSX.Element => {
	const { t } = useTranslation();

	return (
		<main data-testid="MainPage" className="page">
			{t("Главная страница")}
		</main>
	);
});

export default MainPage;
