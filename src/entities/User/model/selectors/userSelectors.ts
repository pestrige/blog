import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { UserRole } from "../constants/user";

export const getUserData = (store: StoreSchema) => store.user.authData;
export const useUserSelector = () => useSelector(getUserData);

export const getUserIsMounted = (store: StoreSchema) => store.user._mounted ?? false;
export const useUserIsMountedSelector = () => useSelector(getUserIsMounted);

export const getIsAuth = createSelector(getUserData, (userStore) => !!userStore?.id);
export const useIsAuthSelector = () => useSelector(getIsAuth);

const getUserRoles = createSelector(getUserData, (userStore) => userStore?.roles ?? []);
export const useUserRolesSelector = () => useSelector(getUserRoles);

const isUserAdmin = createSelector(getUserRoles, (roles) => roles.includes(UserRole.ADMIN));
export const useIsUserAdminSelector = () => useSelector(isUserAdmin);

const isUserManager = createSelector(getUserRoles, (roles) => roles.includes(UserRole.MANAGER));
export const useIsUserManagerSelector = () => useSelector(isUserManager);
