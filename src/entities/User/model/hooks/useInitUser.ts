import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks";
import { initAuthData } from "../services/initAuthData";

export const useInitUser = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(initAuthData());
	}, [dispatch]);
};
