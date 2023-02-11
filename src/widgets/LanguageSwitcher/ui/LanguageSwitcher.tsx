import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";
import cls from "./LanguageSwitcher.module.scss";

export const LanguageSwitcher = ({}): JSX.Element => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = async () => {
		await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	}

	return (
	 <Button theme={ButtonTheme.CLEAR} onClick={toggleLanguage} className={cls.root}>
		 {t("Язык")}
	 </Button>
	);
};
