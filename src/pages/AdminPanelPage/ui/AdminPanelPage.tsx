import { memo } from "react";
import { useTranslation } from "react-i18next";

const AdminPanelPage = memo((): JSX.Element => {
	const { t } = useTranslation("admin");

	return <main className="page">{t("Админ панель")}</main>;
});

export default AdminPanelPage;
