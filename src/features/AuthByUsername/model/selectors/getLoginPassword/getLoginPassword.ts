import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getLoginState } from "../getLoginState/getLoginState";

export const getLoginPassword = createSelector(
	getLoginState,
	(loginStore) => loginStore?.password ?? ""
);

export const useLoginPasswordSelector = () => useSelector(getLoginPassword);
