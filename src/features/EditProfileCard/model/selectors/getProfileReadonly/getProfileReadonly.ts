import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getProfileReadonly = (store: StoreSchema) => store.profile?.readonly ?? false;

export const useProfileReadonlySelector = () => useSelector(getProfileReadonly);
