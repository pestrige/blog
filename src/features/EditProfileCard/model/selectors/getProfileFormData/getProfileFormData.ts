import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getProfileFormData = (store: StoreSchema) => store.profile?.form;

export const useProfileFormSelector = () => useSelector(getProfileFormData);
