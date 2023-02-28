import { useUserSelector } from "../selectors/getUserData/getUserData";

export const useUser = () => {
	const user = useUserSelector();

	return { ...user, isAuth: !!user?.id };
};
