import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Button, ButtonDeprecated, ButtonTheme } from "@/shared/ui";
import cls from "./LanguageSwitcher.module.scss";
import { ToggleFeaturesWrapper } from "@/shared/lib";

interface Props {
	className?: string;
	short?: boolean;
}

export const LanguageSwitcher = memo(({ className = "", short }: Props): JSX.Element => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = useCallback(async () => {
		await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	}, [i18n]);

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<Button variant="clear" onClick={toggleLanguage} className={cls.rootRedesigned}>
					{t("Короткий язык")}
				</Button>
			}
			off={
				<ButtonDeprecated
					theme={ButtonTheme.CLEAR}
					onClick={toggleLanguage}
					className={`${cls.root} ${className}`}
				>
					{t(short ? "Короткий язык" : "Язык")}
				</ButtonDeprecated>
			}
		/>
	);
});
