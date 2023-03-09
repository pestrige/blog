import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getUserData } from "../../selectors/getUserData/getUserData";

export const getIsAuth = createSelector(getUserData, (userStore) => !!userStore?.id);

export const useIsAuthSelector = () => useSelector(getIsAuth);
