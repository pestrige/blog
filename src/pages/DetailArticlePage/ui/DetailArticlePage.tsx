import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "entities/Article";
import { Text } from "shared/ui";

const DetailArticlePage = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return (
			<div className="page">
				<Text title={t("Статья не найдена")} />
			</div>
		);
	}

	return (
		<div className="page">
			<ArticleDetails id={id ?? "1"} />
		</div>
	);
});

export default DetailArticlePage;
