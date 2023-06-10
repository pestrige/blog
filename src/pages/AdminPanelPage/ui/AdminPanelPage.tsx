import { memo } from "react";
import { useTranslation } from "react-i18next";
import { usePageClassName } from "@/shared/hooks";

const AdminPanelPage = memo((): JSX.Element => {
	const { t } = useTranslation("admin");
	const pageClassName = usePageClassName();

	return (
		<main data-testid="MainPage" className={pageClassName}>
			{t("Админ панель")}
		</main>
	);
});

export default AdminPanelPage;
