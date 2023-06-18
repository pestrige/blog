import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { StoreSchema } from "@/shared/config";

export const getProfileData = (store: StoreSchema) => store.profile?.data;

export const useProfileSelector = () => useSelector(getProfileData);

export const useProfileAvatarSelector = () =>
	useSelector(createSelector(getProfileData, (profile) => profile?.avatar));
