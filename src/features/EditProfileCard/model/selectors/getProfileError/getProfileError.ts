import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

export const getProfileError = (store: StoreSchema) => store.profile?.error;

export const useProfileErrorSelector = () => useSelector(getProfileError);
