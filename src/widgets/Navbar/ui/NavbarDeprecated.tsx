import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib";
import { AppLink, AppLinkTheme, Button, ButtonTheme, HStack, Text } from "@/shared/ui";
import { getRoute } from "@/shared/constants";
import { NotificationButton } from "@/features/NotificationButton";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { LoginModal } from "@/features/AuthByUsername";
import cls from "./Navbar.module.scss";

interface Props {
	isAuth: boolean;
	isOpen: boolean;
	username?: string;
	className?: string;
	onUserModal: () => void;
}

export const NavbarDeprecated = memo(function NavbarDeprecated({
	isAuth,
	isOpen,
	username,
	className,
	onUserModal,
}: Props): JSX.Element {
	const { t } = useTranslation();

	if (isAuth) {
		return (
			<HStack as="header" justify="between" max className={classNames(cls.wrapper, className)}>
				<Text text={t("Блог о технологиях")} inverted />
				<HStack as="menu" gap={16}>
					<li>
						<Text text={username} inverted />
					</li>

					<li>
						<AppLink to={getRoute.articleCreate()} theme={AppLinkTheme.SECONDARY}>
							<Text text={t("Создать статью")} variant="secondary" />
						</AppLink>
					</li>

					<NotificationButton />

					<AvatarDropdown />
				</HStack>
			</HStack>
		);
	}
	return (
		<HStack as="header" justify="end" max className={classNames(cls.wrapper, className)}>
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
