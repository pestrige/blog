import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

export const getProfileLoading = (store: StoreSchema) => store.profile?.isLoading ?? false;

export const useProfileLoadingSelector = () => useSelector(getProfileLoading);
