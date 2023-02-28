import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getLoginState } from "../getLoginState/getLoginState";

const getLoginPassword = createSelector(getLoginState, ({ password }) => password);

export const useLoginPasswordSelector = () => useSelector(getLoginPassword);
