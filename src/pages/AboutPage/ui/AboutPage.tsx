import { memo } from "react";
import { useTranslation } from "react-i18next";
import { usePageClassName } from "@/shared/hooks";

const AboutPage = memo((): JSX.Element => {
	const { t } = useTranslation("about");
	const pageClassName = usePageClassName();

	return (
		<main data-testid="AboutPage" className={pageClassName}>
			{t("О нас")}
		</main>
	);
});

export default AboutPage;
