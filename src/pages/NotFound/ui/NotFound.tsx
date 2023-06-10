import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib";
import { HStack } from "@/shared/ui";
import cls from "./NotFound.module.scss";
import { usePageClassName } from "@/shared/hooks";

export const NotFound = memo((): JSX.Element => {
	const { t } = useTranslation();
	const pageClassName = usePageClassName();

	return (
		<HStack
			testId="NotFoundPage"
			as="main"
			justify="center"
			align="center"
			className={classNames(cls.root, pageClassName)}
		>
			<h1 className={cls.title}>{t("Страница не найдена")}</h1>
		</HStack>
	);
});
