import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getLoginState } from "../getLoginState/getLoginState";

const getLoginError = createSelector(getLoginState, ({ error }) => error);

export const useLoginErrorSelector = () => useSelector(getLoginError);
