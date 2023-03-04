import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ReducersList, useDynamicReducerLoader } from "shared/hooks";
import { profileReducer } from "entities/Profile";

const reducersList: ReducersList = { profile: profileReducer };

const MainPage = memo((): JSX.Element => {
	const { t } = useTranslation();
	useDynamicReducerLoader(reducersList);

	return <div className="page">{t("Профиль")}</div>;
});

export default MainPage;
