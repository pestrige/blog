import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useIsAuthSelector } from "entities/User";
import { RoutePaths } from "shared/config";

interface Props {
	authOnly?: boolean;
	element: ReactElement;
}

export const RouteElement = ({ element, authOnly }: Props): ReactElement => {
	const isAuth = useIsAuthSelector();

	if (!isAuth && authOnly) {
		return <Navigate to={RoutePaths.main} replace />;
	}

	return element;
};
