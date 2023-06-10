import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib";
import { Button, ButtonTheme, HStack } from "@/shared/ui";
import { LoginModal } from "@/features/AuthByUsername";
import { NotificationButton } from "@/features/NotificationButton";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import cls from "./Navbar.module.scss";

interface Props {
	isAuth: boolean;
	isOpen: boolean;
	onUserModal: () => void;
}

export const NavbarRedesigned = memo(function NavbarRedesigned({
	isAuth,
	isOpen,
	onUserModal,
}: Props): JSX.Element {
	const { t } = useTranslation();

	if (isAuth) {
		return (
			<HStack as="header" justify="between" max className={classNames(cls.wrapperRedesigned)}>
				<HStack as="menu" gap={16}>
					<NotificationButton />
					<AvatarDropdown />
				</HStack>
			</HStack>
		);
	}

	return (
		<HStack as="header" justify="end" max className={classNames(cls.wrapperRedesigned)}>
			<menu className={cls.menu}>
				<li className={cls.mainLink}>
					<Button onClick={onUserModal} theme={ButtonTheme.CLEAR_INVERTED}>
						{t("Войти")}
					</Button>
				</li>
			</menu>

			<LoginModal isOpen={isOpen} onClose={onUserModal} />
		</HStack>
	);
});
