import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getLoginState } from "../getLoginState/getLoginState";

const getLoginLoading = createSelector(getLoginState, (loginStore) => loginStore?.isLoading ?? false);

export const useLoginLoadingSelector = () => useSelector(getLoginLoading);
