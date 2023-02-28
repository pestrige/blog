import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getLoginState } from "../getLoginState/getLoginState";

const getLoginLoading = createSelector(getLoginState, ({ isLoading }) => isLoading);

export const useLoginLoadingSelector = () => useSelector(getLoginLoading);
