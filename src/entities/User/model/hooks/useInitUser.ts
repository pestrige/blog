import { useEffect } from "react";
import { userActions } from "entities/User";
import { useAppDispatch } from "shared/hooks";

export const useInitUser = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);
};
