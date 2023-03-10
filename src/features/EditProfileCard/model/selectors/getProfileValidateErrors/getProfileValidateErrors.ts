import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getProfileValidateErrors = (store: StoreSchema) => store.profile?.validateErrors ?? {};

export const useProfileValidateErrorsSelector = () => useSelector(getProfileValidateErrors);
