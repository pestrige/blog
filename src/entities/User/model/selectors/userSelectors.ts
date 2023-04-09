import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

export const getUserData = (store: StoreSchema) => store.user.authData;
export const useUserSelector = () => useSelector(getUserData);

export const getUserIsMounted = (store: StoreSchema) => store.user._mounted ?? false;
export const useUserIsMountedSelector = () => useSelector(getUserIsMounted);

export const getIsAuth = createSelector(getUserData, (userStore) => !!userStore?.id);
export const useIsAuthSelector = () => useSelector(getIsAuth);
