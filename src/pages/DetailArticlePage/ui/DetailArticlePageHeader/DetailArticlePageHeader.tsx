import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui";
import { getRoute } from "@/shared/constants";

import { useArticleDataSelector } from "@/entities/Article";
import { useCanUserEditArticleSelector } from "../../model/selectors/articleSelectors";
import cls from "./DetailArticlePageHeader.module.scss";

export const DetailArticlePageHeader = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const navigate = useNavigate();
	const article = useArticleDataSelector();
	const canEdit = useCanUserEditArticleSelector();

	const handleBackClick = useCallback(() => {
		navigate(getRoute.articles());
	}, [navigate]);

	const handleEditClick = useCallback(() => {
		if (article?.id) {
			navigate(getRoute.articleEdit(article.id));
		}
	}, [navigate, article?.id]);

	return (
		<div className={cls.header}>
			<Button onClick={handleBackClick}>{t("Назад к списку")}</Button>
			{canEdit && (
				<Button className={cls.editBtn} onClick={handleEditClick}>
					{t("Редактировать")}
				</Button>
			)}
		</div>
	);
});
