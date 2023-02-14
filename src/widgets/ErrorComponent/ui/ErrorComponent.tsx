import React from "react";
import { useTranslation } from "react-i18next";
import cls from "./ErrorComponent.module.scss";

export const ErrorComponent = (): JSX.Element => {
	const { t } = useTranslation();

	const handleRefreshClick = () => {
		window.location.href = "/";
	};

	return (
		<div className={cls.root}>
			<h2 className={cls.text}>{t("Произошла непредвиденная ошибка")}</h2>
			<button type="button" onClick={handleRefreshClick}>
				{t("Обновить страницу")}
			</button>
		</div>
	);
};
