import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Text } from "shared/ui";
import { RoutePaths } from "shared/config";

const ArticleEditPage = memo((): JSX.Element => {
	const { t } = useTranslation("article");
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const isEdit = Boolean(id);

	const handleBackClick = useCallback(() => {
		navigate(`${RoutePaths.article}/${id}`);
	}, [navigate, id]);

	return (
		<main className="page">
			{isEdit && (
				<Button className="block-margin" onClick={handleBackClick}>
					{t("Назад к статье")}
				</Button>
			)}

			<Text title={isEdit ? `${t("Редактирование статьи")} ${id}` : "Создание статьи"} titleTag="h1" />
		</main>
	);
});

export default ArticleEditPage;
