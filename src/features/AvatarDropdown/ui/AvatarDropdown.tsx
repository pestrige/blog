import React, { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarDeprecated, Dropdown, DropdownDeprecated, DropdownItem } from "@/shared/ui";
import { useIsUserAdminSelector, useIsUserManagerSelector, userActions, useUser } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks";
import { getRoute } from "@/shared/constants/router";
import { ToggleFeaturesWrapper, useForceUpdate } from "@/shared/lib";

export const AvatarDropdown = memo(function AvatarDropdown(): JSX.Element {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const forceUpdate = useForceUpdate();
	const { avatar, id } = useUser();
	const isAdmin = useIsUserAdminSelector();
	const isManager = useIsUserManagerSelector();
	const isAdminPanelAvailable = isAdmin || isManager;

	const handleLogout = useCallback(async () => {
		await dispatch(userActions.logout());
		forceUpdate();
	}, [dispatch, forceUpdate]);

	const dropdownItems: DropdownItem[] = useMemo(() => {
		return [
			{ content: t("Профиль"), href: `${getRoute.profile(id || "")}` },
			{ content: t("Настройки"), href: getRoute.settings() },
			...(isAdminPanelAvailable ? [{ content: t("Админка"), href: getRoute.adminPanel() }] : []),
			{ content: t("Выйти"), onClick: handleLogout },
		];
	}, [t, id, handleLogout, isAdminPanelAvailable]);

	return (
		<li>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={
					<Dropdown
						direction="bottom right"
						trigger={<Avatar size={42} src={avatar} />}
						items={dropdownItems}
					/>
				}
				off={
					<DropdownDeprecated
						direction="bottom right"
						trigger={<AvatarDeprecated size={32} alt="avatar" src={avatar} />}
						items={dropdownItems}
					/>
				}
			/>
		</li>
	);
});
