import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

export const getProfileFormData = (store: StoreSchema) => store.profile?.form;

export const useProfileFormSelector = () => useSelector(getProfileFormData);
