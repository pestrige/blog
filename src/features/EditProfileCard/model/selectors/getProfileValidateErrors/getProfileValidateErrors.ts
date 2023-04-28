import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

export const getProfileValidateErrors = (store: StoreSchema) => store.profile?.validateErrors ?? {};

export const useProfileValidateErrorsSelector = () => useSelector(getProfileValidateErrors);
