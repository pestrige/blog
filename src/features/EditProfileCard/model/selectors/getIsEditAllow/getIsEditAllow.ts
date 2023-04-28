import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

const getUserId = (store: StoreSchema) => store.user?.authData?.id;
const getProfileId = (store: StoreSchema) => store.profile?.data?.id;

export const getIsEditAllow = createSelector(getUserId, getProfileId, (userId, profileId) =>
	!userId || !profileId ? false : userId === profileId
);

export const useIsEditAllowSelector = (): boolean => useSelector(getIsEditAllow);
