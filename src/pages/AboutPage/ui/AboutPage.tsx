import { memo } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = memo((): JSX.Element => {
	const { t } = useTranslation("about");

	return <div className="page">{t("О нас")}</div>;
});

export default AboutPage;
