import { memo } from "react";
import { useTranslation } from "react-i18next";

const DetailArticlePage = memo((): JSX.Element => {
	const { t } = useTranslation("articles");

	return <div className="page">{t("Статья")}</div>;
});

export default DetailArticlePage;
