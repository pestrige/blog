import { memo } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = memo((): JSX.Element => {
	const { t } = useTranslation("about");

	return <main className="page">{t("О нас")}</main>;
});

export default AboutPage;
