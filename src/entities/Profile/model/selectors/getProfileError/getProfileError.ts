import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getProfileError = (store: StoreSchema) => store.profile?.error;

export const useProfileErrorSelector = () => useSelector(getProfileError);
