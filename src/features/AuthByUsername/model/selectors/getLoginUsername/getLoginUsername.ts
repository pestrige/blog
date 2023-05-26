import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getLoginState } from "../getLoginState/getLoginState";

export const getLoginUsername = createSelector(getLoginState, (loginStore) => loginStore?.username ?? "");

export const useLoginUsernameSelector = () => useSelector(getLoginUsername);
