import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import cls from "./NotFound.module.scss";

export const NotFound = memo((): JSX.Element => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.root, "page")}>
			<h1 className={cls.title}>{t("Страница не найдена")}</h1>
		</div>
	);
});
