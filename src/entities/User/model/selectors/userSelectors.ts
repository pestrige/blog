import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { StoreSchema } from "@/shared/config";
import { buildSelector } from "@/shared/lib";
import { UserRole } from "../constants/user";
import { JsonSettings } from "../types/jsonSettings";

export const [useUserSelector, getUserData] = buildSelector((store: StoreSchema) => store.user.authData);

export const [useUserIsMountedSelector] = buildSelector((store: StoreSchema) => store.user._mounted ?? false);

export const getIsAuth = createSelector(getUserData, (userStore) => !!userStore?.id);
export const useIsAuthSelector = () => useSelector(getIsAuth);

const getUserRoles = createSelector(getUserData, (userStore) => userStore?.roles ?? []);
export const useUserRolesSelector = () => useSelector(getUserRoles);

const isUserAdmin = createSelector(getUserRoles, (roles) => roles.includes(UserRole.ADMIN));
export const useIsUserAdminSelector = () => useSelector(isUserAdmin);

const isUserManager = createSelector(getUserRoles, (roles) => roles.includes(UserRole.MANAGER));
export const useIsUserManagerSelector = () => useSelector(isUserManager);

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings] = buildSelector(
	(store: StoreSchema) => store.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
