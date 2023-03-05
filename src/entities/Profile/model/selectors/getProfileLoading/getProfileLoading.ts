import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getProfileLoading = (store: StoreSchema) => store.profile?.isLoading;

export const useProfileLoadingSelector = () => useSelector(getProfileLoading);
