import { useUserSelector } from "../selectors/userSelectors";

export const useUser = () => {
	const user = useUserSelector();

	return { ...user, isAuth: !!user?.id };
};
