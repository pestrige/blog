import { memo } from "react";
import { useTranslation } from "react-i18next";

const ArticlesPage = memo((): JSX.Element => {
	const { t } = useTranslation();

	return <div className="page">{t("Статьи")}</div>;
});

export default ArticlesPage;
