import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

export const getProfileReadonly = (store: StoreSchema) => store.profile?.readonly ?? false;

export const useProfileReadonlySelector = () => useSelector(getProfileReadonly);
