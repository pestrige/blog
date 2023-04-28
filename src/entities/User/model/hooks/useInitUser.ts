import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks";
import { userActions } from "../slice/userSlice";

export const useInitUser = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);
};
