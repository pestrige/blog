import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getLoginState } from "../getLoginState/getLoginState";

const getLoginUsername = createSelector(getLoginState, ({ username }) => username);

export const useLoginUsernameSelector = () => useSelector(getLoginUsername);
