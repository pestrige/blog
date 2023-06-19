import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks";
import { useIsUserInit } from "../selectors/userSelectors";
import { initAuthData } from "../services/initAuthData";

export const useInitUser = () => {
	const dispatch = useAppDispatch();
	const isInit = useIsUserInit();

	useEffect(() => {
		if (isInit) return;

		dispatch(initAuthData());
	}, [dispatch, isInit]);
};
