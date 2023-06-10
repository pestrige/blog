import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Text } from "@/shared/ui";
import { getRoute } from "@/shared/constants";
import { usePageClassName } from "@/shared/hooks";

const ArticleEditPage = memo((): JSX.Element => {
	const { t } = useTranslation("article");
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const isEdit = Boolean(id);
	const pageClassName = usePageClassName();

	const handleBackClick = useCallback(() => {
		if (!id) {
			return;
		}
		navigate(getRoute.article(id));
	}, [navigate, id]);

	return (
		<main className={pageClassName}>
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
