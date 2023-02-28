import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getUserData = (store: StoreSchema) => store.user.authData;

export const useUserSelector = () => useSelector(getUserData);
