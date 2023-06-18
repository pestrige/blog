import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Avatar, Button, ButtonDeprecated, Card, Text } from "@/shared/ui";
import { getRoute } from "@/shared/constants";

import { useArticleDataSelector } from "@/entities/Article";
import { useCanUserEditArticleSelector } from "../../model/selectors/articleSelectors";
import cls from "./DetailArticlePageHeader.module.scss";
import { ToggleFeaturesWrapper } from "@/shared/lib";

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
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<Card className={cls.cardRedesigned}>
					<Avatar
						size={32}
						src={article?.user.avatar}
						alt={article?.user.username ?? ""}
						title={article?.user.username}
					/>

					<Text
						text={`${article?.views ?? 0} ${t("просмотров", { count: article?.views ?? 0 })}`}
					/>
					{canEdit && (
						<Button onClick={handleEditClick} variant="rounded-outline">
							{t("Редактировать")}
						</Button>
					)}
					<Button onClick={handleBackClick} variant="rounded-outline">
						{t("Назад")}
					</Button>
				</Card>
			}
			off={
				<div className={cls.header}>
					<ButtonDeprecated onClick={handleBackClick}>{t("Назад к списку")}</ButtonDeprecated>
					{canEdit && (
						<ButtonDeprecated className={cls.editBtn} onClick={handleEditClick}>
							{t("Редактировать")}
						</ButtonDeprecated>
					)}
				</div>
			}
		/>
	);
});
