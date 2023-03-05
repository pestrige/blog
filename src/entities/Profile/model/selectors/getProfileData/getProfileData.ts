import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getProfileData = (store: StoreSchema) => store.profile?.data;

export const useProfileSelector = () => useSelector(getProfileData);
