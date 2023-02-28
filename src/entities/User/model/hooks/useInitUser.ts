import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userActions } from "entities/User";

export const useInitUser = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);
};
