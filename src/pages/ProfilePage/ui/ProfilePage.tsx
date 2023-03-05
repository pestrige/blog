import { memo, useEffect } from "react";
import { ReducersList, useAppDispatch, useDynamicReducerLoader } from "shared/hooks";
import { fetchProfileData, ProfileCard, profileReducer } from "entities/Profile";

const reducersList: ReducersList = { profile: profileReducer };

const MainPage = memo((): JSX.Element => {
	const appDispatch = useAppDispatch();
	useDynamicReducerLoader(reducersList);

	useEffect(() => {
		appDispatch(fetchProfileData());
	}, [appDispatch]);

	return (
		<div className="page">
			<ProfileCard />
		</div>
	);
});

export default MainPage;
