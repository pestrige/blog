import React, { memo, useCallback, useMemo } from "react";
import { Avatar, Dropdown, DropdownItem } from "shared/ui";
import { RoutePaths } from "shared/config";
import { useIsUserAdminSelector, useIsUserManagerSelector, userActions, useUser } from "entities/User";
import { useAppDispatch } from "shared/hooks";
import { useTranslation } from "react-i18next";

export const AvatarDropdown = memo(function AvatarDropdown(): JSX.Element {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const { avatar, id } = useUser();
	const isAdmin = useIsUserAdminSelector();
	const isManager = useIsUserManagerSelector();
	const isAdminPanelAvailable = isAdmin || isManager;

	const handleLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const dropdownItems: DropdownItem[] = useMemo(() => {
		return [
			{ content: t("Профиль"), href: `${RoutePaths.profile}/${id}` },
			...(isAdminPanelAvailable ? [{ content: t("Админка"), href: RoutePaths.admin_panel }] : []),
			{ content: t("Выйти"), onClick: handleLogout },
		];
	}, [t, id, handleLogout, isAdminPanelAvailable]);

	return (
		<li>
			<Dropdown
				direction="bottom right"
				trigger={<Avatar size={32} alt="avatar" src={avatar} />}
				items={dropdownItems}
			/>
		</li>
	);
});
