import { ReactElement, useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useIsAuthSelector, UserRole, useUserRolesSelector } from "entities/User";
import { RoutePaths } from "shared/config";

interface Props {
	authOnly?: boolean;
	roles?: UserRole[];
	element: ReactElement;
}

export const RouteElement = ({ element, authOnly, roles }: Props): ReactElement => {
	const isAuth = useIsAuthSelector();
	const userRoles = useUserRolesSelector();

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true;
		}

		return roles.some((role) => userRoles.includes(role));
	}, [roles, userRoles]);

	if (!isAuth && authOnly) {
		return <Navigate to={RoutePaths.main} replace />;
	}

	if (!hasRequiredRoles) {
		return <Navigate to={RoutePaths.forbidden} replace />;
	}

	return element;
};
