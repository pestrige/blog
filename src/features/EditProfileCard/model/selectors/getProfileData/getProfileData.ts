import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

export const getProfileData = (store: StoreSchema) => store.profile?.data;

export const useProfileSelector = () => useSelector(getProfileData);
