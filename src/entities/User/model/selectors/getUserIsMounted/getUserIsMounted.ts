import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getUserIsMounted = (store: StoreSchema) => store.user._mounted ?? false;

export const useUserIsMountedSelector = () => useSelector(getUserIsMounted);
